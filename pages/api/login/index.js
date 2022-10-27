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
var axios_1 = require("axios");
var axios_2 = require("../../../config/axios");
var storageConst_1 = require("../../../consts/storageConst");
var API = {
    ScheduleSession: function (codeTeacher, day) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_1, result, err_1, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_1 = "/login/session/".concat(codeTeacher, "/").concat(day);
                    return [4 /*yield*/, (0, axios_2["default"])(URL_1)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_1 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_1, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    ScheduleRequeperation: function (codeTeacher, day) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_2, result, err_2, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_2 = "/login/requeperation/".concat(codeTeacher, "/").concat(day);
                    return [4 /*yield*/, (0, axios_2["default"])(URL_2)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_2 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_2, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    PendingTeachingCompetence: function (codeTeacher) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_3, result, err_3, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_3 = "/login/competence/".concat(codeTeacher);
                    return [4 /*yield*/, (0, axios_2["default"])(URL_3)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_3 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_3, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    DatosUsuario: function (codeTeacher) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_4, result, err_4, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_4 = "/login/usuario/".concat(codeTeacher);
                    return [4 /*yield*/, (0, axios_2["default"])(URL_4)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_4 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_4, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    TokenCoupling: function (codeTeacher) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_5, result, err_5, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_5 = "/login/coupling/".concat(codeTeacher);
                    return [4 /*yield*/, (0, axios_2["default"])(URL_5)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_5 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_5, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    loginDataUser: function (codeTeacher) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_6, result, err_6, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_6 = "/login/valida/".concat(codeTeacher);
                    return [4 /*yield*/, (0, axios_2["default"])(URL_6)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_6 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_6, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    logintokenValid: function (Cookie) { return __awaiter(void 0, void 0, void 0, function () {
        var config, URL_7, result, err_7, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    config = {
                        withCredentials: true
                    };
                    URL_7 = process.env.NEXT_PUBLIC_TOKEN_API;
                    return [4 /*yield*/, (0, axios_1["default"])(URL_7, config)];
                case 1:
                    result = _a.sent();
                    if (result.status !== 200) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data.detail];
                case 2:
                    err_7 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_7, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    PutLog: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_8, result, err_8, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_8 = "/login/put";
                    return [4 /*yield*/, axios_2["default"].put(URL_8, obj)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_8 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_8, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = API;
