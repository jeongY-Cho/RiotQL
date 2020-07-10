import OpenAPIClientAxios, { Document } from '../';
import { ExportedType } from '@anttiviljami/dtsgenerator/dist/core/schemaConvertor';
export declare function main(): Promise<void>;
export declare function generateTypesForDocument(definition: Document | string): Promise<string[]>;
export declare function generateOperationMethodTypings(api: OpenAPIClientAxios, exportTypes: ExportedType[]): string;
