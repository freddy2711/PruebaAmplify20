"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var params, _a, URL_1, obj, noIniciadas, obj2, noCerradas, obj3, pending_1, data, error_1, URL_2, item, obj, data, error_2, URL_3, data, error_3, item, obj, URL_4, resp, error_4, URL_5, resp, error_5, item, obj, URL_6, resp, error_6, resp, error_7, item, URL_7, resp, error, error_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                params = req.query.params;
                console.log(params);
                _a = params[0];
                switch (_a) {
                    case 'list': return [3 /*break*/, 1];
                    case 'detailClass': return [3 /*break*/, 8];
                    case 'chequeAsisAlum': return [3 /*break*/, 13];
                    case 'getSesionesDocenteSolicitarValidar': return [3 /*break*/, 17];
                    case 'sesionesAsistenciaSolicitarValidar': return [3 /*break*/, 22];
                    case 'actualizaSesionAbiertaSolicitud': return [3 /*break*/, 26];
                    case 'endSesion': return [3 /*break*/, 30];
                    case 'insertar': return [3 /*break*/, 34];
                }
                return [3 /*break*/, 39];
            case 1:
                URL_1 = path_1.apiPath.solicitudMarcacion.PATH_PostSessionsNotStarted;
                _b.label = 2;
            case 2:
                _b.trys.push([2, 6, , 7]);
                obj = {
                    action: 'get_docesolicitud',
                    teacherCode: "".concat(params[1]),
                    classId: null,
                    dateHour: null,
                    classRoomCode: null,
                    conClassInitial: null,
                    conClassFinal: null
                };
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_1, obj)];
            case 3:
                noIniciadas = _b.sent();
                console.log('noIniciadas', noIniciadas.data);
                obj2 = {
                    action: 'get_docabiertasolicitud',
                    teacherCode: "".concat(params[1]),
                    classId: null,
                    dateHour: null,
                    classRoomCode: null,
                    conClassInitial: null,
                    conClassFinal: null
                };
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_1, obj2)];
            case 4:
                noCerradas = _b.sent();
                obj3 = {
                    action: 'get_docesolicitudpen',
                    teacherCode: "".concat(params[1]),
                    classId: null,
                    dateHour: null,
                    classRoomCode: null,
                    conClassInitial: null,
                    conClassFinal: null
                };
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_1, obj3)];
            case 5:
                pending_1 = _b.sent();
                data = {
                    noinit: noIniciadas.data.detail,
                    noClose: noCerradas.data.detail,
                    pending: pending_1.data.detail
                };
                res.status(200).json(data);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 39];
            case 8:
                URL_2 = path_1.apiPath.solicitudMarcacion.PATH_PostSessionsNotStarted;
                item = req.body;
                obj = {
                    action: 'get_clasesolicitud',
                    teacherCode: item.teacherCode,
                    teacherUser: item.teacherUser,
                    dateHour: item.HoursDate,
                    classRoomCode: item.ClassRoomCode,
                    conClassInitial: item.FechahoursIni,
                    conClassFinal: item.FechahoursEnd,
                    classCode: item.ClaCode
                };
                console.log(obj);
                _b.label = 9;
            case 9:
                _b.trys.push([9, 11, , 12]);
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_2, obj)];
            case 10:
                data = (_b.sent()).data;
                res.status(200).json(data);
                return [3 /*break*/, 12];
            case 11:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 12];
            case 12: return [3 /*break*/, 39];
            case 13:
                _b.trys.push([13, 15, , 16]);
                URL_3 = path_1.apiPath.solicitudMarcacion.PATH_VerifyAsistanceStudentSolicitud(params[1], params[2], params[3]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_3)];
            case 14:
                data = (_b.sent()).data;
                console.log('response', data);
                res.status(200).json(data.detail.control);
                return [3 /*break*/, 16];
            case 15:
                error_3 = _b.sent();
                console.log(error_3);
                return [3 /*break*/, 16];
            case 16: return [3 /*break*/, 39];
            case 17:
                item = req.body;
                obj = {
                    action: 'get_validarclaseid',
                    teacherCode: item.teacherCode,
                    nrodia: item.nrodia,
                    date: item.date,
                    classCode: item.classCode,
                    classroom: item.classroom,
                    user: item.user,
                    beginning: item.beginning,
                    finish: item.finish
                };
                _b.label = 18;
            case 18:
                _b.trys.push([18, 20, , 21]);
                URL_4 = path_1.apiPath.solicitudMarcacion.PATH_SessionTacherRequestValidate;
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_4, __assign({}, obj))];
            case 19:
                resp = _b.sent();
                console.log('RRREESSSPUESSSSS_SOLVAL_', resp);
                res.status(200).json(resp.data.detail);
                return [3 /*break*/, 21];
            case 20:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 21];
            case 21: return [3 /*break*/, 39];
            case 22:
                _b.trys.push([22, 24, , 25]);
                URL_5 = path_1.apiPath.solicitudMarcacion.PATH_SessionAssistanceValidate('get_validarasistclaabierta', params[2], params[3]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)(URL_5)];
            case 23:
                resp = _b.sent();
                res.status(200).json(resp.data.detail);
                return [3 /*break*/, 25];
            case 24:
                error_5 = _b.sent();
                console.log(error_5);
                return [3 /*break*/, 25];
            case 25: return [3 /*break*/, 39];
            case 26:
                _b.trys.push([26, 28, , 29]);
                item = req.body;
                obj = {
                    classId: item.classId,
                    nrodia: item.nrodia,
                    classroomCode: item.classroomCode,
                    updateUser: item.updateUser,
                    classBeginning: item.classBeginning,
                    classFinish: item.classFinish,
                    observations: item.observations
                };
                URL_6 = path_1.apiPath.solicitudMarcacion.PATH_SessionOpenRequest;
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_6, obj)];
            case 27:
                resp = _b.sent();
                res.status(200).json(resp.data.detail);
                return [3 /*break*/, 29];
            case 28:
                error_6 = _b.sent();
                return [3 /*break*/, 29];
            case 29: return [3 /*break*/, 39];
            case 30:
                _b.trys.push([30, 32, , 33]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivate)("/ClassSchedule/EndSessionRequest/".concat(params[2], "/").concat(params[3], "/").concat(params[4]))
                    // TODO: Habilitar una vez corrijan el api /ClassSchedule/sessions/
                    /* const URL = apiPath.solicitudMarcacion.PATH_EndSessionRequest
            
                    const obj = {
                      Session: params[2],
                      user: params[3],
                      observation: params[4],
                    }
                    const resp = await axiosfetchPrivate.put(URL, obj) */
                ];
            case 31:
                resp = _b.sent();
                // TODO: Habilitar una vez corrijan el api /ClassSchedule/sessions/
                /* const URL = apiPath.solicitudMarcacion.PATH_EndSessionRequest
        
                const obj = {
                  Session: params[2],
                  user: params[3],
                  observation: params[4],
                }
                const resp = await axiosfetchPrivate.put(URL, obj) */
                res.status(200).json(resp.data.detail);
                return [3 /*break*/, 33];
            case 32:
                error_7 = _b.sent();
                console.log(error_7);
                return [3 /*break*/, 33];
            case 33: return [3 /*break*/, 39];
            case 34:
                item = req.body;
                console.log('---- ITEM INSERTAR -----', item);
                _b.label = 35;
            case 35:
                _b.trys.push([35, 37, , 38]);
                URL_7 = path_1.apiPath.solicitudMarcacion.PATH_InsertSessionRequest;
                return [4 /*yield*/, axios_1.axiosfetchPrivate.post(URL_7, item)];
            case 36:
                resp = _b.sent();
                console.log('resp.data.detail-- ', resp);
                if (resp.data.detail && resp.data.detail === 0) {
                    error = new Error('No se pudo intertar el registro de sesion');
                    res.status(404).json({ msg: error.message });
                }
                res.status(200).json(resp.data.detail);
                return [3 /*break*/, 38];
            case 37:
                error_8 = _b.sent();
                console.log(error_8);
                return [3 /*break*/, 38];
            case 38: return [3 /*break*/, 39];
            case 39: return [2 /*return*/];
        }
    });
}); };
exports["default"] = handler;
