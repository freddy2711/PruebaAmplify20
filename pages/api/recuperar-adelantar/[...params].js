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
    var params, _a, URL_1, data, result, error_1, URL_2, data, result, error_2, URL_3, data, result, error_3, URL_4, data, result, error_4, URL_5, data, result, error_5, obj, URL_6, data, result, error_6, URL_7, data, result, error_7, obj, URL_8, data, error_8, URL_9, data, result, error_9, obj, URL_10, data, error_10, URL_11, data, result, error_11, URL_12, data, result, error_12, URL_13, data, result, error_13, URL_14, data, result, error_14, emailJson, resp, error_15, URL_15, data, result, error_16;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                params = req.query.params;
                _a = params[0];
                switch (_a) {
                    case 'list': return [3 /*break*/, 1];
                    case 'listTeacherCourses': return [3 /*break*/, 5];
                    case 'listDateHoliday': return [3 /*break*/, 9];
                    case 'listClassDate': return [3 /*break*/, 13];
                    case 'listLaboratories': return [3 /*break*/, 17];
                    case 'ScheduleSessions': return [3 /*break*/, 21];
                    case 'ClasEnabled': return [3 /*break*/, 25];
                    case 'AttendanceRecoverys': return [3 /*break*/, 29];
                    case 'ClassRecuperation': return [3 /*break*/, 33];
                    case 'AttendanceRecoverysPUT': return [3 /*break*/, 37];
                    case 'DeleteRecovery': return [3 /*break*/, 41];
                    case 'GetTeacherUser': return [3 /*break*/, 45];
                    case 'GetClassTeachers': return [3 /*break*/, 49];
                    case 'GetTeacher': return [3 /*break*/, 53];
                    case 'email': return [3 /*break*/, 57];
                    case 'GetRateCampusCode': return [3 /*break*/, 62];
                }
                return [3 /*break*/, 66];
            case 1:
                _b.trys.push([1, 3, , 4]);
                URL_1 = path_1.apiPath.recuperarAdelantarClases.PATH_GetTeachersRecoverys(params[1], params[2]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_1)];
            case 2:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [3 /*break*/, 67];
            case 5:
                _b.trys.push([5, 7, , 8]);
                URL_2 = path_1.apiPath.recuperarAdelantarClases.PATH_GetTeacherCourses(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_2)];
            case 6:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 8];
            case 7:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 67];
            case 9:
                _b.trys.push([9, 11, , 12]);
                URL_3 = path_1.apiPath.recuperarAdelantarClases.PATH_GetHolyday(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_3)];
            case 10:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 12];
            case 11:
                error_3 = _b.sent();
                console.log(error_3);
                return [3 /*break*/, 12];
            case 12: return [3 /*break*/, 67];
            case 13:
                _b.trys.push([13, 15, , 16]);
                URL_4 = path_1.apiPath.recuperarAdelantarClases.PATH_GetClassDate(params[1], params[2], params[3]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_4)];
            case 14:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 16];
            case 15:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 16];
            case 16: return [3 /*break*/, 67];
            case 17:
                _b.trys.push([17, 19, , 20]);
                URL_5 = path_1.apiPath.recuperarAdelantarClases.PATH_GetLaboratories;
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_5)];
            case 18:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 20];
            case 19:
                error_5 = _b.sent();
                console.log(error_5);
                return [3 /*break*/, 20];
            case 20: return [3 /*break*/, 67];
            case 21:
                _b.trys.push([21, 23, , 24]);
                obj = req.body.obj;
                URL_6 = path_1.apiPath.recuperarAdelantarClases.PATH_PostScheduleSessions;
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_6, obj)];
            case 22:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 24];
            case 23:
                error_6 = _b.sent();
                console.log(error_6);
                return [3 /*break*/, 24];
            case 24: return [3 /*break*/, 67];
            case 25:
                _b.trys.push([25, 27, , 28]);
                URL_7 = path_1.apiPath.recuperarAdelantarClases.PATH_GetClasEnabled(params[1], params[2], params[3], params[4], params[5]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_7)];
            case 26:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 28];
            case 27:
                error_7 = _b.sent();
                console.log(error_7);
                return [3 /*break*/, 28];
            case 28: return [3 /*break*/, 67];
            case 29:
                _b.trys.push([29, 31, , 32]);
                obj = req.body.obj;
                URL_8 = path_1.apiPath.recuperarAdelantarClases.PATH_PostTeacherAttendanceRecoverys;
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_8, obj)];
            case 30:
                data = (_b.sent()).data;
                if (data.errorMessage) {
                    res.status(200).json({ message: data.errorMessage, state: false });
                }
                else {
                    res
                        .status(200)
                        .json({
                        message: 'Se registró correctamente la recuperación de clase.',
                        state: true
                    });
                }
                return [3 /*break*/, 32];
            case 31:
                error_8 = _b.sent();
                console.log(error_8);
                return [3 /*break*/, 32];
            case 32: return [3 /*break*/, 67];
            case 33:
                _b.trys.push([33, 35, , 36]);
                URL_9 = path_1.apiPath.recuperarAdelantarClases.PATH_GetClassRecuperation(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_9)];
            case 34:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 36];
            case 35:
                error_9 = _b.sent();
                console.log(error_9);
                return [3 /*break*/, 36];
            case 36: return [3 /*break*/, 67];
            case 37:
                _b.trys.push([37, 39, , 40]);
                obj = req.body.obj;
                URL_10 = path_1.apiPath.recuperarAdelantarClases.PATH_PostTeacherAttendanceRecoverys;
                return [4 /*yield*/, axios_1.axiosfetchPrivate.put(URL_10, obj)];
            case 38:
                data = (_b.sent()).data;
                if (data.errorMessage) {
                    res.status(200).json({ message: data.errorMessage, state: false });
                }
                else {
                    res
                        .status(200)
                        .json({
                        message: 'Se actualizó correctamente la recuperación de clase.',
                        state: true
                    });
                }
                return [3 /*break*/, 40];
            case 39:
                error_10 = _b.sent();
                console.log(error_10);
                return [3 /*break*/, 40];
            case 40: return [3 /*break*/, 67];
            case 41:
                _b.trys.push([41, 43, , 44]);
                URL_11 = path_1.apiPath.recuperarAdelantarClases.PATH_DeleteRecovery;
                return [4 /*yield*/, axios_1.axiosfetchPrivate["delete"](URL_11, {
                        data: { recoveryId: params[1] }
                    })];
            case 42:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 44];
            case 43:
                error_11 = _b.sent();
                console.log(error_11);
                return [3 /*break*/, 44];
            case 44: return [3 /*break*/, 67];
            case 45:
                _b.trys.push([45, 47, , 48]);
                URL_12 = path_1.apiPath.recuperarAdelantarClases.PATH_GetTeacherUser(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_12)];
            case 46:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 48];
            case 47:
                error_12 = _b.sent();
                console.log(error_12);
                return [3 /*break*/, 48];
            case 48: return [3 /*break*/, 67];
            case 49:
                _b.trys.push([49, 51, , 52]);
                URL_13 = path_1.apiPath.recuperarAdelantarClases.PATH_GetClassTeachers(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_13)];
            case 50:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 52];
            case 51:
                error_13 = _b.sent();
                console.log(error_13);
                return [3 /*break*/, 52];
            case 52: return [3 /*break*/, 67];
            case 53:
                _b.trys.push([53, 55, , 56]);
                URL_14 = path_1.apiPath.recuperarAdelantarClases.PATH_GetTeacher(params[1]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_14)];
            case 54:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 56];
            case 55:
                error_14 = _b.sent();
                console.log(error_14);
                return [3 /*break*/, 56];
            case 56: return [3 /*break*/, 67];
            case 57:
                emailJson = req.body;
                _b.label = 58;
            case 58:
                _b.trys.push([58, 60, , 61]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateEmail.post("/", emailJson)];
            case 59:
                resp = _b.sent();
                res.status(200).json(resp.data.Status);
                return [3 /*break*/, 61];
            case 60:
                error_15 = _b.sent();
                console.log(error_15);
                return [3 /*break*/, 61];
            case 61: return [3 /*break*/, 67];
            case 62:
                _b.trys.push([62, 64, , 65]);
                URL_15 = path_1.apiPath.recuperarAdelantarClases.PATH_GetRateCampusCode(params[1], params[2]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_15)];
            case 63:
                data = (_b.sent()).data;
                result = data.detail;
                res.status(200).json(result);
                return [3 /*break*/, 65];
            case 64:
                error_16 = _b.sent();
                console.log(error_16);
                return [3 /*break*/, 65];
            case 65: return [3 /*break*/, 67];
            case 66: return [3 /*break*/, 67];
            case 67: return [2 /*return*/];
        }
    });
}); };
exports["default"] = handler;
