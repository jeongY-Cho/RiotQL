import {
  buildSchema,
  GraphQLSchema,
  typeFromAST,
  graphqlSync,
  print,
  introspectionFromSchema,
  IntrospectionQuery,
  IntrospectionType,
  IntrospectionField,
  IntrospectionEnumType,
  IntrospectionUnionType,
  IntrospectionInputObjectType,
} from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "../schema";
import * as fs from "fs";
import { query } from "gql-query-builder";
const rfdc = require("rfdc")();

// console.log(print(typeDefs));

let t = makeExecutableSchema({
  typeDefs: print(typeDefs),
});

class Objectify {
  introspection: IntrospectionQuery;
  fields: { [key: string]: IntrospectionType };
  queryType: IntrospectionType;
  typeTree: { [key: string]: any } = {};
  constructor(public schema: GraphQLSchema) {
    this.introspection = introspectionFromSchema(t);
    // this.fields = this.introspection.__schema.types
    this.fields = this.objectify(this.introspection.__schema.types);
    this.queryType = this.fields.Query;
    this.typeTree = this.objectifyTop(this.queryType);
    fs.writeFileSync(
      "./output.json",
      JSON.stringify(this.typeTree, undefined, 2)
    );
    // console.log(this.fields);
    // console.log(JSON.stringify(this.typeTree, undefined, 2));
  }

  objectify(array: readonly IntrospectionType[]) {
    // TODO: deal with circular references
    return array.reduce((acc, curr) => {
      acc[curr.name] = curr;
      return acc;
    }, {} as { [key: string]: IntrospectionType });
  }

  objectifyTop(top: IntrospectionType) {
    if (top.kind === "OBJECT") {
      let fieldsObj: { [key: string]: any } = {};
      for (const item of top.fields) {
        // console.log(item);
        fieldsObj[item.name] = this.objectifyField(item);
      }
      return fieldsObj;
    }
    if (top.kind === "ENUM") {
      return top;
    }
    // @ts-ignore
    return top.type;
  }

  objectifyField(field: any): any {
    return {
      __args: field.args.length
        ? field.args.reduce((acc: any, cur: any) => {
            acc[cur.name] = this.objectifyType(cur.type);
            return acc;
          }, {} as any)
        : undefined,
      __fields: this.objectifyType(field.type),
    };
  }

  objectifyType(type: any, nonNull?: boolean): any {
    if (type.kind === "NON_NULL") {
      return this.objectifyType(type.ofType, true);
    }

    if (type.kind === "LIST") {
      return {
        LIST: this.objectifyType(type.ofType),
        __NON_NULL: nonNull,
      };
    }
    if (type.kind === "SCALAR") {
      return {
        __SCALAR: type.name,
        __NON_NULL: nonNull,
      };
    }
    if (type.kind === "UNION") {
      let union = this.fields[type.name] as IntrospectionUnionType;
      return {
        UNION: union.possibleTypes.reduce((acc, cur) => {
          acc[cur.name] = this.objectifyType(cur);
          return acc;
        }, {} as any),
        __NON_NULL: nonNull,
      };
    }
    if (type.kind === "ENUM") {
      // console.log(type);
      let _enum = this.fields[type.name] as IntrospectionEnumType;
      return {
        ENUM: _enum.enumValues.map((item: any) => item.name),
        __NON_NULL: nonNull,
      };
    }
    if (type.kind === "INPUT_OBJECT") {
      // console.log(type);
      let input = this.fields[type.name] as IntrospectionInputObjectType;
      return {
        INPUT_OBJECT: input.inputFields.reduce((acc, cur) => {
          acc[cur.name] = this.objectifyType(cur.type);
          return acc;
        }, {} as any),
      };
    }
    if (type.ofType) {
      return {
        [type.name]: this.objectifyType(type.ofType),
        __NON_NULL: nonNull,
      };
    }
    return {
      ...this.objectifyTop(this.fields[type.name]),
      __NON_NULL: nonNull,
    };
  }
}

// new Objectify(t);

function compostQuery(thing: any) {
  let string = "";
  for (const name in thing) {
    if (thing[name].__fields?.__SCALAR) {
      string += name + "\n";
    } else if (name == "__SCALAR") {
    } else if (name === "__NON_NULL") {
    } else if (name === "LIST") {
      string += compostQuery(thing[name]);
    } else if (name === "ENUM") {
    } else if (name === "UNION") {
      for (const unionItem in thing[name]) {
        string +=
          "... on " + unionItem + "{\n" + compostQuery(thing[name][unionItem]);
        string += "}\n";
      }
    } else {
      if (thing[name].__fields?.ENUM) {
        string += compostQuery(thing[name].__fields);
      } else if (thing[name].__fields?.LIST?.__SCALAR) {
        string += name + "\n";
        string += compostQuery(thing[name].__fields);
      } else if (thing[name].__fields?.UNION) {
        for (const unionItem in thing[name].__fields.UNION) {
          string += `${name}_${unionItem}: ${name} {\n`;
          string +=
            "... on " +
            unionItem +
            "{\n" +
            compostQuery(thing[name].__fields.UNION[unionItem]);
          string += "}\n}\n";
        }
      } else {
        string += name + "{\n";
        string += compostQuery(thing[name].__fields);
        string += "}\n";
      }
    }
  }
  return string;
}
function bracketQuery(str: string) {
  return `{\n ${str}}`;
}
// console.log(bracketQuery(compostQuery(q)));

function extractScalar(
  req: any
): {
  scalars: string[];
  nonScalars: string[];
} {
  type ScalarList = string[];
  type NonScalarList = string[];
  type ScalarSet = { scalars: ScalarList; nonScalars: NonScalarList };
  console.log(req);
  let retObj: ScalarSet = {
    scalars: [],
    nonScalars: [],
  };
  let target = req;
  console.log(req);
  for (const name in req) {
    switch (name) {
      case "ENUM":
        return retObj;
      case "LIST":
        target = req[name];
    }
  }
  return Object.keys(target).reduce((acc, cur) => {
    console.log(cur);
    if (target[cur].__fields?.__SCALAR) {
      acc.scalars.push(cur);
    } else if (target[cur].__fields?.ENUM) {
      acc.scalars.push(cur);
    } else if (cur !== "__NON_NULL") {
      acc.nonScalars.push(cur);
    }

    return acc;
  }, retObj);
}
// console.log(extractScalar(q.summoner.__fields.matchList.__fields));

function buildQuery(
  path: string[],
  fields: string[],
  args: { [key: string]: any }[]
): any {
  path = [...path];
  args = rfdc(args);

  return {
    operation: path.shift(),
    variables: args.shift(),
    fields: path.length ? [buildQuery(path, fields, args)] : fields,
  };
}

const output = require("../../output.json");

function buildaa(req: any, path: string[] = []) {
  for (const name in req) {
    // console.log(req, name);
    if (name === "___SCALAR") {
      continue;
    }
    if (name === "__NON_NULL") {
      continue;
    }
    if (name === "UNION") {
      continue;
    }
    if (name === "LIST") {
      continue;
    }
    let fields = req[name].__fields;
    let args = req[name].__args || {};
    // console.log(req, name, fields);
    let { scalars, nonScalars } = extractScalar(fields);
    if (path.length) {
      console.log(
        buildQuery(
          path,
          scalars,
          scalars.map((scalar) => args[scalar])
        )
      );
    } else {
      console.log(query(scalars.map((scalar) => ({ operation: scalar }))));
    }

    for (const nonScalar of nonScalars) {
      if (fields.LIST) {
        buildaa(fields.LIST[nonScalar].__fields, [...path, nonScalar]);
      } else {
        buildaa(fields[nonScalar].__fields, [...path, nonScalar]);
      }
    }
  }
}

buildaa({
  query: {
    __fields: output,
  },
});

// buildaa(output);

// console.log(
//   extractScalar(
//     output.summoner.__fields.activeMatch.__fields.participants.__fields.LIST
//       .gameCustomizationObjects.__fields
//   )
// );
