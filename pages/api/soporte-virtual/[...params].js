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
var path_1 = require("./../../../consts/path");
var handler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, _a, URL_1, data, error_1, URL_2, data, error_2, item, URL_3, data, error_3, URL_4, data, error_4, URL_5, data, error_5, URL_6, data, error_6, item, URL_7, data, error_7, emailJson, resp, error_8, item, nameS3, usuario, type, tipo, fileObj, URL_8, data, URL_UPLOAD, error_9, item, URL_9, resp, error_10, item, URL_10, resp, error_11, item, URL_11, resp, error_12, item, URL_12, resp, error_13;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                params = req.query.params;
                console.log('PARAMS_', params);
                _a = params[0];
                switch (_a) {
                    case 'fileAsesor': return [3 /*break*/, 1];
                    case 'tipocse': return [3 /*break*/, 6];
                    case 'insertConsulta': return [3 /*break*/, 11];
                    case 'consulta': return [3 /*break*/, 16];
                    case 'apiAnexos': return [3 /*break*/, 21];
                    case 'docenteConsulta': return [3 /*break*/, 26];
                    case 'requestConsulta': return [3 /*break*/, 31];
                    case 'email': return [3 /*break*/, 36];
                    case 'upload': return [3 /*break*/, 41];
                    case 'download': return [3 /*break*/, 46];
                    case 'insertImg': return [3 /*break*/, 51];
                    case 'cleanAnexo': return [3 /*break*/, 56];
                    case 'deleteImgAws': return [3 /*break*/, 61];
                }
                return [3 /*break*/, 66];
            case 1:
                URL_1 = path_1.apiPath.soporteVirtual.PATH_GETFILE(params[1], params[2]);
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_1)];
            case 3:
                data = (_b.sent()).data;
                console.log('response', data);
                res.status(200).json(data.detail);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 66];
            case 6:
                URL_2 = path_1.apiPath.soporteVirtual.PATH_tipos(params[1], params[2]);
                _b.label = 7;
            case 7:
                _b.trys.push([7, 9, , 10]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_2)];
            case 8:
                data = (_b.sent()).data;
                console.log('response', data);
                res.status(200).json(data.detail);
                return [3 /*break*/, 10];
            case 9:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 66];
            case 11:
                item = req.body;
                URL_3 = path_1.apiPath.soporteVirtual.PATH_INSERT;
                console.log('LOG_INSERT_ITEM__', item);
                _b.label = 12;
            case 12:
                _b.trys.push([12, 14, , 15]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_3, item)];
            case 13:
                data = (_b.sent()).data;
                console.log('response', data);
                res.status(200).json(data.detail);
                return [3 /*break*/, 15];
            case 14:
                error_3 = _b.sent();
                console.log(error_3);
                return [3 /*break*/, 15];
            case 15: return [3 /*break*/, 66];
            case 16:
                URL_4 = path_1.apiPath.soporteVirtual.PATH_docenteConsulta(params[1]);
                _b.label = 17;
            case 17:
                _b.trys.push([17, 19, , 20]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_4)];
            case 18:
                data = (_b.sent()).data;
                console.log('response', data);
                res.status(200).json(data.detail);
                return [3 /*break*/, 20];
            case 19:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 20];
            case 20: return [3 /*break*/, 66];
            case 21:
                URL_5 = path_1.apiPath.soporteVirtual.PATH_GETANEXOS(params[1], params[2]);
                _b.label = 22;
            case 22:
                _b.trys.push([22, 24, , 25]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_5)];
            case 23:
                data = (_b.sent()).data;
                console.log('historyAnexos', data);
                res.status(200).json(data.detail);
                return [3 /*break*/, 25];
            case 24:
                error_5 = _b.sent();
                console.log(error_5);
                return [3 /*break*/, 25];
            case 25: return [3 /*break*/, 66];
            case 26:
                URL_6 = path_1.apiPath.soporteVirtual.PATH_HISTORY(params[1], params[2]);
                _b.label = 27;
            case 27:
                _b.trys.push([27, 29, , 30]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_6)];
            case 28:
                data = (_b.sent()).data;
                console.log('response', data);
                res.status(200).json(data.detail);
                return [3 /*break*/, 30];
            case 29:
                error_6 = _b.sent();
                console.log(error_6);
                return [3 /*break*/, 30];
            case 30: return [3 /*break*/, 66];
            case 31:
                item = req.body;
                URL_7 = path_1.apiPath.soporteVirtual.PATH_REQUEST;
                console.log('ITEEEEM____PARAMS_REQS', item);
                _b.label = 32;
            case 32:
                _b.trys.push([32, 34, , 35]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_7, item)];
            case 33:
                data = (_b.sent()).data;
                console.log('response', data);
                res.status(200).json(data.detail);
                return [3 /*break*/, 35];
            case 34:
                error_7 = _b.sent();
                console.log(error_7);
                return [3 /*break*/, 35];
            case 35: return [3 /*break*/, 66];
            case 36:
                emailJson = req.body;
                console.log(req.body);
                _b.label = 37;
            case 37:
                _b.trys.push([37, 39, , 40]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateEmail.post("/", emailJson)];
            case 38:
                resp = _b.sent();
                console.log(resp.data.Status);
                res.status(200).json(resp.data.Status);
                return [3 /*break*/, 40];
            case 39:
                error_8 = _b.sent();
                console.log(error_8);
                return [3 /*break*/, 40];
            case 40: return [3 /*break*/, 66];
            case 41:
                item = req.body;
                nameS3 = item.nameS3, usuario = item.usuario, type = item.type, tipo = item.tipo;
                console.log('tipo_', type);
                fileObj = {
                    idtramite: '0',
                    usuario: usuario,
                    TypeArchivo: type,
                    fileName: "".concat(nameS3, ".").concat(tipo),
                    secretName: process.env.SECRET_UPLOAD_SV,
                    path: process.env.PATH_UPLOAD_SV
                };
                URL_8 = path_1.apiPath.competence.PATH_upload;
                _b.label = 42;
            case 42:
                _b.trys.push([42, 44, , 45]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateUpload.post(URL_8, fileObj)];
            case 43:
                data = (_b.sent()).data;
                console.log(data);
                URL_UPLOAD = data.url;
                console.log('UPLOAD_URL', URL_UPLOAD);
                res.status(200).json(URL_UPLOAD);
                return [3 /*break*/, 45];
            case 44:
                error_9 = _b.sent();
                console.log(error_9);
                return [3 /*break*/, 45];
            case 45: return [3 /*break*/, 66];
            case 46:
                item = req.body;
                URL_9 = path_1.apiPath.soporteVirtual.PATH_download;
                _b.label = 47;
            case 47:
                _b.trys.push([47, 49, , 50]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateUpload.post(URL_9, item)];
            case 48:
                resp = _b.sent();
                console.log(resp.data);
                res.status(200).json(resp.data);
                return [3 /*break*/, 50];
            case 49:
                error_10 = _b.sent();
                console.log(error_10);
                return [3 /*break*/, 50];
            case 50: return [3 /*break*/, 66];
            case 51:
                item = req.body;
                URL_10 = path_1.apiPath.soporteVirtual.PATH_INSERT_IMG;
                _b.label = 52;
            case 52:
                _b.trys.push([52, 54, , 55]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_10, item)];
            case 53:
                resp = _b.sent();
                console.log(resp.data);
                res.status(200).json(resp.data);
                return [3 /*break*/, 55];
            case 54:
                error_11 = _b.sent();
                console.log(error_11);
                return [3 /*break*/, 55];
            case 55: return [3 /*break*/, 66];
            case 56:
                item = req.body;
                URL_11 = path_1.apiPath.soporteVirtual.PATH_CLEAN;
                _b.label = 57;
            case 57:
                _b.trys.push([57, 59, , 60]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_11, item)];
            case 58:
                resp = _b.sent();
                console.log(resp.data);
                res.status(200).json(resp.data);
                return [3 /*break*/, 60];
            case 59:
                error_12 = _b.sent();
                console.log(error_12);
                return [3 /*break*/, 60];
            case 60: return [3 /*break*/, 66];
            case 61:
                item = req.body;
                URL_12 = path_1.apiPath.soporteVirtual.PATH_DELETE_AWS;
                _b.label = 62;
            case 62:
                _b.trys.push([62, 64, , 65]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_12, item)];
            case 63:
                resp = _b.sent();
                console.log(resp.data);
                res.status(200).json(resp.data);
                return [3 /*break*/, 65];
            case 64:
                error_13 = _b.sent();
                console.log(error_13);
                return [3 /*break*/, 65];
            case 65: return [3 /*break*/, 66];
            case 66: return [2 /*return*/];
        }
    });
}); };
exports["default"] = handler;
