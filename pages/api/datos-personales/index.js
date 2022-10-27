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
    personaObtener: function (user) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_1, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_1 = "/datos-personales/personaObtener/".concat(user);
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
    pais: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_2, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_2 = "/datos-personales/paisObtener";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_2)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    estadoCivil: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_3, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_3 = "/datos-personales/estadoCivilObtener";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_3)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    tipoDocumento: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_4, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_4 = "/datos-personales/tipoDocumento";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_4)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    Ubigeo: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_5, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_5 = "/datos-personales/Ubigeo";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_5)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    EvaluadorEvaluado: function (idPersona) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_6, result, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_6 = "/datos-personales/EvaluadorEvaluado/".concat(idPersona);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_6)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaGuardar: function (Item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_7, result, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_7 = "/datos-personales/personaGuardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_7, Item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    Institucion: function (idPais) {
        if (idPais === void 0) { idPais = '0'; }
        return __awaiter(void 0, void 0, void 0, function () {
            var URL_8, result, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        URL_8 = "/datos-personales/Institucion/".concat(idPais);
                        return [4 /*yield*/, (0, axios_1["default"])(URL_8)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        error_8 = _a.sent();
                        console.log(error_8);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    },
    Industria: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_9, result, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_9 = "/datos-personales/Industria";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_9)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_9 = _a.sent();
                    console.log(error_9);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    AreaPuesto: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_10, result, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_10 = "/datos-personales/AreaPuesto";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_10)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_10 = _a.sent();
                    console.log(error_10);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    tipoDedicacionDocente: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_11, result, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_11 = "/datos-personales/tipoDedicacionDocente";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_11)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_11 = _a.sent();
                    console.log(error_11);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    experienciaLaboralObtener: function (idPersona) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_12, result, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_12 = "/datos-personales/experienciaLaboralObtener/".concat(idPersona, "/True");
                    return [4 /*yield*/, (0, axios_1["default"])(URL_12)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_12 = _a.sent();
                    console.log(error_12);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    experienciaLaboralGuardar: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_13, result, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_13 = "/datos-personales/experienciaLaboralGuardar/Guardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_13, item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_13 = _a.sent();
                    console.log(error_13);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    clasificacionCarrera: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_14, result, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_14 = "/datos-personales/clasificacionCarrera";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_14)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_14 = _a.sent();
                    console.log(error_14);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    nivelAcademico: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_15, result, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_15 = "/datos-personales/nivelAcademico";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_15)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_15 = _a.sent();
                    console.log(error_15);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    estadoEstudio: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_16, result, error_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_16 = "/datos-personales/estadoEstudio";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_16)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_16 = _a.sent();
                    console.log(error_16);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    estudio: function (idPersona) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_17, result, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_17 = "/datos-personales/estudio/".concat(idPersona);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_17)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_17 = _a.sent();
                    console.log(error_17);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    estudioGuardar: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_18, result, error_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_18 = "/datos-personales/estudioGuardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_18, item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_18 = _a.sent();
                    console.log(error_18);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaConocimientoObtener: function (idPersona) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_19, result, error_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_19 = "/datos-personales/personaConocimientoObtener/".concat(idPersona);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_19)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_19 = _a.sent();
                    console.log(error_19);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaConocimientoGuardar: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_20, result, error_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_20 = "/datos-personales/personaConocimientoGuardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_20, item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_20 = _a.sent();
                    console.log(error_20);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    idioma: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_21, result, error_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_21 = "/datos-personales/idioma";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_21)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_21 = _a.sent();
                    console.log(error_21);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaIdioma: function (idPersona) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_22, result, error_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_22 = "/datos-personales/personaIdioma/".concat(idPersona);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_22)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_22 = _a.sent();
                    console.log(error_22);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaIdiomaGuardar: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_23, result, error_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_23 = "/datos-personales/personaIdiomaGuardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_23, item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_23 = _a.sent();
                    console.log(error_23);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    referenciaLaboral: function (idPersona) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_24, result, error_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_24 = "/datos-personales/referenciaLaboral/".concat(idPersona);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_24)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_24 = _a.sent();
                    console.log(error_24);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    referenciaLaboralGuardar: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_25, result, error_25;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_25 = "/datos-personales/referenciaLaboralGuardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_25, item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_25 = _a.sent();
                    console.log(error_25);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    tipoAdjunto: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL_26, result, error_26;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_26 = "/datos-personales/tipoAdjunto";
                    return [4 /*yield*/, (0, axios_1["default"])(URL_26)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_26 = _a.sent();
                    console.log(error_26);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaAdjunto: function (idPersona) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_27, result, error_27;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_27 = "/datos-personales/personaAdjunto/".concat(idPersona);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_27)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_27 = _a.sent();
                    console.log(error_27);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaAdjuntoGuardar: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_28, result, error_28;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_28 = "/datos-personales/personaAdjuntoGuardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_28, item)];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, result];
                case 2:
                    error_28 = _a.sent();
                    console.log(error_28);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    personaAdjuntoDownload: function (idPersona, id) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_29, result, error_29;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_29 = "/datos-personales/PersonaAdjuntoDownload/".concat(idPersona, "/").concat(id);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_29)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_29 = _a.sent();
                    console.log(error_29);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    confirmacionGuardar: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_30, result, error_30;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_30 = "/datos-personales/confirmacionGuardar";
                    return [4 /*yield*/, axios_1["default"].post(URL_30, item)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_30 = _a.sent();
                    console.log(error_30);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    downloadFile: function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_31, result, error_31;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_31 = "/datos-personales/downloadFile/".concat(name);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_31)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 2:
                    error_31 = _a.sent();
                    console.log(error_31);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = API;
