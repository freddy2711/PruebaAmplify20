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
var storageConst_1 = require("../../../consts/storageConst");
var API = {
    notesExist: function (classCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_1, result, err_1, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_1 = "/notes/exist/".concat(classCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_1)];
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
    notesClass: function (classCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_2, result, err_2, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_2 = "/notes/class/".concat(classCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_2)];
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
    notesState: function (classCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_3, result, err_3, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_3 = "/notes/state/".concat(classCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_3)];
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
    notesStudent: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_4, result, err_4, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_4 = "/notes/student/".concat(obj.classCode, "/").concat(obj.classEstate);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_4)];
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
    notesValidate: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_5, result, err_5, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_5 = "/notes/validate/".concat(obj.ip, "/").concat(obj.user);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_5)];
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
    notesControl: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_6, result, err_6, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_6 = "/notes/control/".concat(obj.semester, "/").concat(obj.note, "/").concat(obj["class"]);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_6)];
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
    notesEmail: function (codeUser) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_7, result, err_7, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_7 = "/notes/email/".concat(codeUser);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_7)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
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
    notesSemesterControler: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_8, result, err_8, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_8 = "/notes/semesterControl/".concat(obj.semesterCode, "/").concat(obj.notaCode, "/").concat(obj.classCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_8)];
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
    }); },
    notesSemester: function (classCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_9, result, err_9, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_9 = "/notes/semester/".concat(classCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_9)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_9 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_9, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    ByNotesSendClass: function (userCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_10, result, err_10, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_10 = "/notes/send/".concat(userCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_10)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_10 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_10, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    notesClassGroup: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_11, result, err_11, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_11 = "/notes/classGroup";
                    return [4 /*yield*/, axios_1["default"].post(URL_11, obj)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_11 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_11, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    notesDetail: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_12, result, err_12, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_12 = "/notes/detail/".concat(obj.classCode, "/").concat(obj.codeUser);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_12)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_12 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_12, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    notesAverage: function (classCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_13, result, err_13, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_13 = "/notes/average/".concat(classCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL_13)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_13 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_13, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    notesPostClassGroup: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_14, result, err_14, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_14 = "/notes/postclassGroup";
                    return [4 /*yield*/, axios_1["default"].post(URL_14, obj)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_14 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_14, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    notespostState: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_15, result, err_15, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_15 = "/notes/postState";
                    return [4 /*yield*/, axios_1["default"].post(URL_15, obj)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_15 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_15, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    notesPutState: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_16, result, err_16, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_16 = "/notes/putState";
                    return [4 /*yield*/, axios_1["default"].put(URL_16, obj)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_16 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_16, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    notespostUpload: function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var URL_17, result, err_17, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 4]);
                    URL_17 = "/notes/postUpload";
                    return [4 /*yield*/, axios_1["default"].post(URL_17, obj)];
                case 1:
                    result = _a.sent();
                    if (result.status === true) {
                        console.log('status', result === null || result === void 0 ? void 0 : result.status);
                    }
                    return [2 /*return*/, result.data];
                case 2:
                    err_17 = _a.sent();
                    return [4 /*yield*/, (0, storageConst_1.ErrorMessageClient)(err_17, false)];
                case 3:
                    error = _a.sent();
                    return [2 /*return*/, { error: error }];
                case 4: return [2 /*return*/];
            }
        });
    }); }
};
exports["default"] = API;
