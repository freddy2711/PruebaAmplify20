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
    var params, _a, URL_1, data, result, error_1, URL_2, data, result, error_2, URL_3, data, result, error_3, URL_4, data, result, error_4, URL_5, data, result, error_5, URL_6, data, result, error_6, URL_7, data, result, error_7, URL_8, data, result, error_8, item, name_1, usuario, type, fileObj, URL_9, data, URL_UPLOAD, error_9, item, URL_10, data, result, error_10;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                params = req.query.params;
                _a = params[0];
                switch (_a) {
                    case 'list': return [3 /*break*/, 1];
                    case 'loadedExams': return [3 /*break*/, 5];
                    case 'ClassNote': return [3 /*break*/, 9];
                    case 'Semester': return [3 /*break*/, 13];
                    case 'AmountStudents': return [3 /*break*/, 17];
                    case 'ControlNotes': return [3 /*break*/, 21];
                    case 'StateExams': return [3 /*break*/, 25];
                    case 'ActiveExam': return [3 /*break*/, 29];
                    case 'upload': return [3 /*break*/, 33];
                    case 'SaveAdjuntoExam': return [3 /*break*/, 38];
                }
                return [3 /*break*/, 43];
            case 1:
                _b.trys.push([1, 3, , 4]);
                URL_1 = path_1.apiPath.cargaExamenes.PATH_GetTeachersCorses(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_1)];
            case 2:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 43];
            case 5:
                _b.trys.push([5, 7, , 8]);
                URL_2 = path_1.apiPath.cargaExamenes.PATH_GetLoadedExams(params[1], params[2]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_2)];
            case 6:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 8];
            case 7:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 43];
            case 9:
                _b.trys.push([9, 11, , 12]);
                URL_3 = path_1.apiPath.cargaExamenes.PATH_GetListClassNote(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_3)];
            case 10:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 12];
            case 11:
                error_3 = _b.sent();
                console.log(error_3);
                return [3 /*break*/, 12];
            case 12: return [3 /*break*/, 43];
            case 13:
                _b.trys.push([13, 15, , 16]);
                URL_4 = path_1.apiPath.cargaExamenes.PATH_GetSemester(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_4)];
            case 14:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 16];
            case 15:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 16];
            case 16: return [3 /*break*/, 43];
            case 17:
                _b.trys.push([17, 19, , 20]);
                URL_5 = path_1.apiPath.cargaExamenes.PATH_GetAmountStudents(params[1], params[2], params[3]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_5)];
            case 18:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 20];
            case 19:
                error_5 = _b.sent();
                console.log(error_5);
                return [3 /*break*/, 20];
            case 20: return [3 /*break*/, 43];
            case 21:
                _b.trys.push([21, 23, , 24]);
                URL_6 = path_1.apiPath.cargaExamenes.PATH_GetControlNotes(params[1], params[2], params[3]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_6)];
            case 22:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 24];
            case 23:
                error_6 = _b.sent();
                console.log(error_6);
                return [3 /*break*/, 24];
            case 24: return [3 /*break*/, 43];
            case 25:
                _b.trys.push([25, 27, , 28]);
                URL_7 = path_1.apiPath.cargaExamenes.PATH_GetStateExams(params[1], params[2], params[3]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_7)];
            case 26:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 28];
            case 27:
                error_7 = _b.sent();
                console.log(error_7);
                return [3 /*break*/, 28];
            case 28: return [3 /*break*/, 43];
            case 29:
                _b.trys.push([29, 31, , 32]);
                URL_8 = path_1.apiPath.cargaExamenes.PATH_GetActiveExam(params[1], params[2], params[3]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_8)];
            case 30:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 32];
            case 31:
                error_8 = _b.sent();
                console.log(error_8);
                return [3 /*break*/, 32];
            case 32: return [3 /*break*/, 43];
            case 33:
                item = req.body;
                name_1 = item.name, usuario = item.usuario, type = item.type;
                fileObj = {
                    idtramite: '001',
                    usuario: usuario,
                    TypeArchivo: type,
                    fileName: name_1,
                    secretName: process.env.SECRET_UPLOAD,
                    path: process.env.PATH_UPLOAD
                };
                URL_9 = path_1.apiPath.competence.PATH_upload;
                _b.label = 34;
            case 34:
                _b.trys.push([34, 36, , 37]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateUpload.post(URL_9, fileObj)];
            case 35:
                data = (_b.sent()).data;
                URL_UPLOAD = data === null || data === void 0 ? void 0 : data.url;
                res.status(200).json(URL_UPLOAD);
                return [3 /*break*/, 37];
            case 36:
                error_9 = _b.sent();
                console.log(error_9);
                return [3 /*break*/, 37];
            case 37: return [3 /*break*/, 43];
            case 38:
                item = req.body;
                URL_10 = path_1.apiPath.cargaExamenes.PATH_PostTeacherInserExam;
                _b.label = 39;
            case 39:
                _b.trys.push([39, 41, , 42]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_10, item)];
            case 40:
                data = (_b.sent()).data;
                result = data === null || data === void 0 ? void 0 : data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 42];
            case 41:
                error_10 = _b.sent();
                console.log(error_10);
                return [3 /*break*/, 42];
            case 42: return [3 /*break*/, 43];
            case 43: return [2 /*return*/];
        }
    });
}); };
exports["default"] = handler;
