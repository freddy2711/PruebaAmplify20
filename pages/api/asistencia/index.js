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
var API = {
    listAttendanceSessionSummary: function (controlClassId) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/list/".concat(controlClassId);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    listDetailClass: function (classCode, parameterCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/DetailClass/".concat(classCode, "/").concat(parameterCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    getClaseDetalle: function (classCode, parameter) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_1, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_1 = "/asistencia/getClaseDetalle/".concat(classCode, "/").concat(parameter);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_1)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    registraAsistencia: function (iControlClase, xmldata, date, semesterId) {
        if (semesterId === void 0) { semesterId = 0; }
        return __awaiter(void 0, void 0, void 0, function () {
            var item, URL, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = {
                            semesterId: semesterId,
                            date: date,
                            controlClassId: iControlClase,
                            xmlData: "".concat(xmldata)
                        };
                        console.log(item);
                        URL = "/asistencia/registraAsistencia";
                        return [4 /*yield*/, axios_1["default"].post(URL, item)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    },
    registraAsistenciasolicitud: function (iControlClase, xmldata) { return __awaiter(void 0, void 0, void 0, function () {
        var item, URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    item = {
                        controlClassId: iControlClase,
                        xmlData: "".concat(xmldata)
                    };
                    console.log(item);
                    URL = "/asistencia/registraAsistenciasolicitud";
                    return [4 /*yield*/, axios_1["default"].post(URL, item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    actualizaRecuperacionEstado: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    obj = {
                        recoveryId: item.recoveryId,
                        states: item.states,
                        user: item.user
                    };
                    URL = "/asistencia/actualizaRecuperacionEstado";
                    return [4 /*yield*/, axios_1["default"].post(URL, obj)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    terminaSesion: function (iControlClase, sUserName) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/terminaSesion/".concat(iControlClase, "/").concat(sUserName);
                    return [4 /*yield*/, axios_1["default"].post(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    terminaSesionSolicitud: function (iControlClase, sUserName, comentario) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/terminaSesionSolicitud/".concat(iControlClase, "/").concat(sUserName, "/").concat(comentario);
                    return [4 /*yield*/, axios_1["default"].post(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    AsistenciaEnFechasControl: function (clase) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    obj = {
                        classStr: clase
                    };
                    URL = "/asistencia/AsistenciaEnFechasControl";
                    return [4 /*yield*/, axios_1["default"].post(URL, obj)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); },
    puedeCerrar: function (classControlId) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/puedeCerrar/".concat(classControlId);
                    return [4 /*yield*/, axios_1["default"].post(URL)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
            }
        });
    }); },
    email: function (emailJson) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/email";
                    return [4 /*yield*/, axios_1["default"].post(URL, emailJson)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    listarAsistencia: function (iControlClase) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/listarAsistencia/".concat(iControlClase);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    listarCorreo_Solicitud: function (iControlClase, classId) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/listarCorreo_Solicitud/".concat(iControlClase, "/").concat(classId);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    trabajador: function (DUENO) { return __awaiter(void 0, void 0, void 0, function () {
        var URL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/trabajador/".concat(DUENO);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); },
    campus: function (classCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/asistencia/campus/".concat(classCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); }
};
exports["default"] = API;
