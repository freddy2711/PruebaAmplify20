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
    var params, _a, URL_1, data, result, error_1, URL_2, data, result, error_2, URL_3, data, result, error_3, Request_1, URL_4, data, result, error_4, Request_2, URL_5, data, result, error_5, Request_3, URL_6, data, result, error_6, Request_4, URL_7, data, result, error_7, Request_5, URL_8, data, result, error_8, Request_6, URL_9, data, result, error_9;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                params = req.query.params;
                _a = params[0];
                switch (_a) {
                    case 'control': return [3 /*break*/, 1];
                    case 'teacher': return [3 /*break*/, 6];
                    case 'coupling': return [3 /*break*/, 11];
                    case 'logPut': return [3 /*break*/, 16];
                    case 'pim': return [3 /*break*/, 21];
                    case 'logPost': return [3 /*break*/, 26];
                    case 'state': return [3 /*break*/, 31];
                    case 'autentica': return [3 /*break*/, 36];
                    case 'validate': return [3 /*break*/, 41];
                }
                return [3 /*break*/, 46];
            case 1:
                URL_1 = "".concat(path_1.apiPath.register.PATH_GetControlClass).concat(params[1], "/").concat(params[2]);
                console.log('URL', URL_1);
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_1)];
            case 3:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 46];
            case 6:
                URL_2 = path_1.apiPath.tokens.PATH_PostTokenTeacher(params[1]);
                _b.label = 7;
            case 7:
                _b.trys.push([7, 9, , 10]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_2)];
            case 8:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 10];
            case 9:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 46];
            case 11:
                URL_3 = path_1.apiPath.tokens.PATH_PostTokenCoupling(params[1], params[2], params[3]);
                _b.label = 12;
            case 12:
                _b.trys.push([12, 14, , 15]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_3)];
            case 13:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 15];
            case 14:
                error_3 = _b.sent();
                console.log(error_3);
                return [3 /*break*/, 15];
            case 15: return [3 /*break*/, 46];
            case 16:
                Request_1 = req.body;
                URL_4 = path_1.apiPath.home.PATH_PutLog;
                _b.label = 17;
            case 17:
                _b.trys.push([17, 19, , 20]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.put(URL_4, Request_1)];
            case 18:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 20];
            case 19:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 20];
            case 20: return [3 /*break*/, 46];
            case 21:
                Request_2 = req.body;
                URL_5 = path_1.apiPath.tokens.PATH_PostTokenValidateToken;
                _b.label = 22;
            case 22:
                _b.trys.push([22, 24, , 25]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_5, Request_2)];
            case 23:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 25];
            case 24:
                error_5 = _b.sent();
                console.log(error_5);
                return [3 /*break*/, 25];
            case 25: return [3 /*break*/, 46];
            case 26:
                Request_3 = req.body;
                URL_6 = path_1.apiPath.tokens.PATH_PostTokenLog;
                _b.label = 27;
            case 27:
                _b.trys.push([27, 29, , 30]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_6, Request_3)];
            case 28:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 30];
            case 29:
                error_6 = _b.sent();
                console.log(error_6);
                return [3 /*break*/, 30];
            case 30: return [3 /*break*/, 46];
            case 31:
                Request_4 = req.body;
                URL_7 = path_1.apiPath.tokens.PATH_PostTokenState;
                _b.label = 32;
            case 32:
                _b.trys.push([32, 34, , 35]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_7, Request_4)];
            case 33:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 35];
            case 34:
                error_7 = _b.sent();
                console.log(error_7);
                return [3 /*break*/, 35];
            case 35: return [3 /*break*/, 46];
            case 36:
                Request_5 = req.body;
                URL_8 = path_1.apiPath.tokens.PATH_PostTokenAutentication;
                _b.label = 37;
            case 37:
                _b.trys.push([37, 39, , 40]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_8, Request_5)];
            case 38:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 40];
            case 39:
                error_8 = _b.sent();
                console.log(error_8);
                return [3 /*break*/, 40];
            case 40: return [3 /*break*/, 46];
            case 41:
                Request_6 = req.body;
                URL_9 = path_1.apiPath.tokens.PATH_PostTokenValidateState;
                _b.label = 42;
            case 42:
                _b.trys.push([42, 44, , 45]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_9, Request_6)];
            case 43:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 45];
            case 44:
                error_9 = _b.sent();
                console.log(error_9);
                return [3 /*break*/, 45];
            case 45: return [3 /*break*/, 46];
            case 46: return [2 /*return*/];
        }
    });
}); };
exports["default"] = handler;
