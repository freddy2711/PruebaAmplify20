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
    listGetRecovery: function (teacherCode, pend) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/list/".concat(teacherCode, "/").concat(pend);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    listTeacherCourses: function (teacherCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/listTeacherCourses/".concat(teacherCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    listDateHoliday: function (sedeCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/listDateHoliday/".concat(sedeCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    listClassDate: function (classCode, teacherCode, action) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/listClassDate/".concat(classCode, "/").concat(teacherCode, "/").concat(action);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    listLaboratories: function () { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/listLaboratories";
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    ScheduleSessions: function (action, classCode, semesterCode, date, teacherCode) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    obj = {
                        action: action,
                        classCode: classCode,
                        semesterCode: semesterCode,
                        date: date,
                        teacherCode: teacherCode
                    };
                    URL = "/recuperar-adelantar/ScheduleSessions/";
                    return [4 /*yield*/, axios_1["default"].post(URL, { obj: obj })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    ClasEnabled: function (classCode, sedeCode, date, hours, quantity) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/ClasEnabled/".concat(classCode, "/").concat(sedeCode, "/").concat(date, "/").concat(hours, "/").concat(quantity);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    AttendanceRecoverys: function (classCode, teacherCode, classDate, dateRequired, codeHour, nroHours, classRoomCode, user, host, hourIdProgInitial, hourIdProgFinal, type, path) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    obj = {
                        classCode: classCode,
                        teacherCode: teacherCode,
                        classDate: classDate,
                        dateRequired: dateRequired,
                        codeHour: codeHour,
                        nroHours: nroHours,
                        classRoomCode: classRoomCode,
                        user: user,
                        host: host,
                        hourIdProgInitial: hourIdProgInitial,
                        hourIdProgFinal: hourIdProgFinal,
                        type: type,
                        path: path
                    };
                    URL = "/recuperar-adelantar/AttendanceRecoverys/";
                    return [4 /*yield*/, axios_1["default"].post(URL, { obj: obj })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    ClassRecuperation: function (idRecuperation) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/ClassRecuperation/".concat(idRecuperation);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    AttendanceRecoverysPUT: function (recoveryId, classDate, dateRequired, codeHour, nroHours, classRoomCode, user, host, type, path) { return __awaiter(void 0, void 0, void 0, function () {
        var obj, URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    obj = {
                        recoveryId: recoveryId,
                        classDate: classDate,
                        dateRequired: dateRequired,
                        codeHour: codeHour,
                        nroHours: nroHours,
                        classRoomCode: classRoomCode,
                        user: user,
                        host: host,
                        type: type,
                        path: path
                    };
                    URL = "/recuperar-adelantar/AttendanceRecoverysPUT/";
                    return [4 /*yield*/, axios_1["default"].put(URL, { obj: obj })];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    DeleteRecovery: function (recoveryId) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/DeleteRecovery/".concat(recoveryId);
                    return [4 /*yield*/, axios_1["default"]["delete"](URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    GetTeacherUser: function (userName) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/GetTeacherUser/".concat(userName);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    GetClassTeachers: function (Classcode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/GetClassTeachers/".concat(Classcode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    GetTeacher: function (code) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/GetTeacher/".concat(code);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); },
    email: function (emailJson) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/email";
                    return [4 /*yield*/, axios_1["default"].post(URL, emailJson)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result];
            }
        });
    }); },
    GetRateCampusCode: function (raceCode, campusCode) { return __awaiter(void 0, void 0, void 0, function () {
        var URL, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    URL = "/recuperar-adelantar/GetRateCampusCode/".concat(raceCode, "/").concat(campusCode);
                    return [4 /*yield*/, (0, axios_1["default"])(URL)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.data];
            }
        });
    }); }
};
exports["default"] = API;
