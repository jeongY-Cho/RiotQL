"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var swagger_parser_1 = require("@apidevtools/swagger-parser");
var path = require("path");
var walkSync = function (dir, filelist) {
    if (filelist === void 0) { filelist = []; }
    fs.readdirSync(dir).forEach(function (file) {
        filelist = fs.statSync(path.join(dir, file)).isDirectory()
            ? walkSync(path.join(dir, file), filelist)
            : filelist.concat(path.join(dir, file));
    });
    return filelist;
};
var argv = process.argv.slice(2);
function findUnusedEndpoints() {
    return __awaiter(this, void 0, void 0, function () {
        var filelist, latestRecord, res, values, _a, _b, flattenedValues, matches, _i, filelist_1, file, fileBuffer, fileString, _c, flattenedValues_1, opId, regex;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    filelist = walkSync(path.join(process.cwd(), argv[0]));
                    latestRecord = require('../../SchemaRecord.json')[0];
                    return [4 /*yield*/, swagger_parser_1["default"].bundle(latestRecord)
                        // extract values
                    ];
                case 1:
                    res = _d.sent();
                    _b = (_a = Object).values;
                    return [4 /*yield*/, swagger_parser_1["default"].dereference(res)];
                case 2:
                    values = _b.apply(_a, [(_d.sent()).paths]);
                    flattenedValues = new Set(values.reduce(function (acc, cur) {
                        return acc.concat(Object.values(cur)
                            .map(function (item) { return item.operationId; })
                            .filter(function (item) { return item; }));
                    }, []));
                    matches = new Set();
                    for (_i = 0, filelist_1 = filelist; _i < filelist_1.length; _i++) {
                        file = filelist_1[_i];
                        fileBuffer = fs.readFileSync(file);
                        fileString = fileBuffer.toString();
                        for (_c = 0, flattenedValues_1 = flattenedValues; _c < flattenedValues_1.length; _c++) {
                            opId = flattenedValues_1[_c];
                            regex = new RegExp(opId);
                            if (regex.test(fileString)) {
                                matches.add(opId);
                            }
                        }
                    }
                    console.log('Implemented:', matches);
                    console.log('Not Implemented:', difference(flattenedValues, matches));
                    return [2 /*return*/];
            }
        });
    });
}
if (require.main === module) {
    findUnusedEndpoints();
}
function difference(setA, setB) {
    var _difference = new Set(setA);
    for (var _i = 0, setB_1 = setB; _i < setB_1.length; _i++) {
        var elem = setB_1[_i];
        _difference["delete"](elem);
    }
    return _difference;
}
