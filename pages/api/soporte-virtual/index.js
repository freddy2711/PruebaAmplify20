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
var axios_2 = require("axios");
var API = {
    fileAsesor: function (studentCode, assesor) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_1, result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_1 = "/soporte-virtual/fileAsesor/".concat(studentCode, "/").concat(assesor);
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
    tipocse: function (type, action) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_2, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_2 = "/soporte-virtual/tipocse/".concat(type, "/").concat(action);
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
    insertConsulta: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_3, result, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_3 = "/soporte-virtual/insertConsulta";
                    return [4 /*yield*/, axios_1["default"].post(URL_3, item)];
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
    consulta: function (teacherCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_4, result, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_4 = "/soporte-virtual/consulta/".concat(teacherCode);
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
    apiAnexos: function (teacherCode, studentCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_5, result, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_5 = "/soporte-virtual/apiAnexos/".concat(teacherCode, "/").concat(studentCode);
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
    docenteConsulta: function (teacherCode, idQuery) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_6, result, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    URL_6 = "/soporte-virtual/docenteConsulta/".concat(teacherCode, "/").concat(idQuery);
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
    requestConsulta: function (teacherCode, query, idQuery) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL_7, result, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    obj = {
                        teacherCode: teacherCode,
                        query: JSON.stringify(query),
                        idQuery: idQuery
                    };
                    URL_7 = "/soporte-virtual/requestConsulta";
                    return [4 /*yield*/, axios_1["default"].post(URL_7, obj)];
                case 1:
                    result = _a.sent();
                    console.log('requestConsulta_', result);
                    return [2 /*return*/, result];
                case 2:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    email: function (emailJson) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/soporte-virtual/email";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].post(URL, { emailJson: emailJson })];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result];
                case 3:
                    error_8 = _a.sent();
                    console.log(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    upload: function (item) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_8, data, resp, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log('FILEE INDEX_:', item.file);
                    URL_8 = "/soporte-virtual/upload";
                    return [4 /*yield*/, axios_1["default"].post(URL_8, item)];
                case 1:
                    data = (_a.sent()).data;
                    return [4 /*yield*/, axios_2["default"].put(data, item.file, {
                            headers: {
                                'Content-Type': item.type,
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
                            }
                        })];
                case 2:
                    resp = _a.sent();
                    console.log('RESP_PUT_', resp.status);
                    return [2 /*return*/, resp.status];
                case 3:
                    error_9 = _a.sent();
                    console.log(error_9);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    download: function (fileName) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL_9, data, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    obj = {
                        secretName: 'contacto-upn',
                        fileName: fileName,
                        path: 'test'
                    };
                    URL_9 = "/soporte-virtual/download";
                    return [4 /*yield*/, axios_1["default"].post(URL_9, obj)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data];
                case 2:
                    error_10 = _a.sent();
                    console.log(error_10);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    insertImg: function (aluCode, nameAws, nameOriginal, extend, weight, adviser) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL_10, data, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    obj = {
                        aluCode: aluCode,
                        nameAws: nameAws,
                        nameOriginal: nameOriginal,
                        extend: extend,
                        weight: weight,
                        adviser: adviser
                    };
                    URL_10 = "/soporte-virtual/insertImg";
                    return [4 /*yield*/, axios_1["default"].post(URL_10, obj)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data.detail];
                case 2:
                    error_11 = _a.sent();
                    console.log(error_11);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    cleanAnexo: function (AluCode, nameAws, Adviser) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL_11, data, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    obj = {
                        AluCode: AluCode,
                        nameAws: nameAws,
                        Adviser: Adviser
                    };
                    URL_11 = "/soporte-virtual/cleanAnexo";
                    return [4 /*yield*/, axios_1["default"].post(URL_11, obj)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data.detail];
                case 2:
                    error_12 = _a.sent();
                    console.log(error_12);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    deleteImgAws: function (filename) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL_12, data, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    obj = {
                        filename: filename
                    };
                    URL_12 = "/soporte-virtual/deleteImgAws";
                    return [4 /*yield*/, axios_1["default"].post(URL_12, obj)];
                case 1:
                    data = (_a.sent()).data;
                    return [2 /*return*/, data.detail];
                case 2:
                    error_13 = _a.sent();
                    console.log(error_13);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = API;
