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
var axios_1 = require("../../../config/axios");
var path_1 = require("../../../consts/path");
var handler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, _a, URL_1, data, result, error_1, URL_2, data, result, error_2, _b, classCode, xmlData, URL_3, data, result, error_3, _c, classCode, xmlData, URL_4, data, result, error_4;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                params = req.query.params;
                _a = params[0];
                switch (_a) {
                    case 'delegateList': return [3 /*break*/, 1];
                    case 'list': return [3 /*break*/, 6];
                    case 'create': return [3 /*break*/, 11];
                    case 'delete': return [3 /*break*/, 16];
                }
                return [3 /*break*/, 21];
            case 1:
                URL_1 = path_1.apiPath.delegado.PATH_delegateList(params[1]);
                _d.label = 2;
            case 2:
                _d.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_1)];
            case 3:
                data = (_d.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _d.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 21];
            case 6:
                URL_2 = path_1.apiPath.delegado.Path_Delegate(params[1]);
                _d.label = 7;
            case 7:
                _d.trys.push([7, 9, , 10]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_2)];
            case 8:
                data = (_d.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 10];
            case 9:
                error_2 = _d.sent();
                console.log(error_2);
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 21];
            case 11:
                _b = req.body, classCode = _b.classCode, xmlData = _b.xmlData;
                URL_3 = path_1.apiPath.delegado.Path_PostRegisterDelegate;
                _d.label = 12;
            case 12:
                _d.trys.push([12, 14, , 15]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_3, {
                        classCode: classCode,
                        xmlData: xmlData
                    })];
            case 13:
                data = (_d.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 15];
            case 14:
                error_3 = _d.sent();
                console.log(error_3);
                return [3 /*break*/, 15];
            case 15: return [3 /*break*/, 21];
            case 16:
                _c = req.body, classCode = _c.classCode, xmlData = _c.xmlData;
                URL_4 = path_1.apiPath.delegado.Path_PostRegisterDelegate;
                _d.label = 17;
            case 17:
                _d.trys.push([17, 19, , 20]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_4, {
                        classCode: classCode,
                        xmlData: xmlData
                    })];
            case 18:
                data = (_d.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 20];
            case 19:
                error_4 = _d.sent();
                console.log(error_4);
                return [3 /*break*/, 20];
            case 20: return [3 /*break*/, 21];
            case 21: return [2 /*return*/];
        }
    });
}); };
exports["default"] = handler;
