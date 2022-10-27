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
exports.TITLE_EMERG = exports.buttons = exports.SET_NOTES_PDF = exports.SET_NOTES_CA = exports.SET_NOTES_RE = exports.SET_NOTES_SELECT = exports.MSM_SEND_SOLICITUD = exports.MSM_INFO_DESCANSO = exports.SET_EMAIL_SUPPOT_UPN = exports.SET_TEACHER_BREAK = exports.SET_DESCANSO_SOLICITUD = exports.SET_DESCANSO_SELECT = exports.RECOVERSELECT = exports.NO_CLOSE = exports.TIPO_CLASE = exports.VERASI = exports.REGASI = exports.REGSOL = exports.TIPO_ASISTENCIA = exports.LST_RECOVERY_SELECTED = exports.DESABLEDSESSIONACLOSE = exports.SEMESTERID = exports.LST_DATA_ASSISTENCE = exports.LST_SESIONS_CLASS = exports.LST_COURSES_TEACHER = exports.SET_TEACHERCODE = exports.SET_DUENO_SESSION = exports.SET_DT_ASISTENCE = exports.SET_RECOVER_SELECT = exports.SET_DATA_DOCENTE = exports.SET_DT_AULTA = exports.COMENTARIO = exports.CONTROL_CLASE_FECHAHORA_FIN = exports.CONTROL_CLASE_FECHAHORA_INICIO = exports.CLASE_ID = exports.RECUPERACION_ID = exports.TIPO_DOCENTE = exports.VALIDAR = exports.CONTROL_CLASE_FECHA = exports.CONTROL_CLASE_NRODIA = exports.CONTROL_CLASE_AULA = exports.CONTROL_CLASE_ESTADO = exports.CONTROL_CLASE_ID = exports.ASISTENCIA = exports.LIST_SESION_SOL = exports.CLASS_SELECTED_SOL_MARCACION = exports.NAME_SESSION = exports.DUENO_SESSION = exports.USER_SESSION = exports.TEACHERCODE = void 0;
exports.eventToken = exports.convertStringToDateTime = exports.timeDiffCalc = exports.AddMin = exports.convertStringToDay = exports.convertStringToDate = exports.LST_SELECTED_COURSE = exports.CLASEID_REPORTES = exports.CONSULTA_DATA = exports.CB_COMPETENCE = exports.CLASS_SELECTED_EC = exports.SET_FECHA_ORIGEN = exports.SET_SEMESTERCODE = exports.setBodyEmail = exports.emailJson = exports.SendEmailServer = exports.ErrorMessageClient = exports.callErrorValid = exports.RECUPERATION_ID = exports.DATA_RESUMEN_SELECTED = exports.MSM_NOTAS_MAIL_OK = exports.MSM_NOTAS_CLASE_VIRTUAL = exports.MSM_NOTAS_SELECCIONADA = exports.MSM_NOTAS_MAIL_ERROR = exports.CIERRE_SIN_ASIST = exports.ACCESO_MARC_CLAS_DOC = exports.MSM_VISIBLE_BLOCK = exports.SET_IMG_BASE64 = exports.MSM_VISIBLE_NONE = exports.MSM_GENERA_TOKEN = exports.MSM_REGISTRO_OK = exports.MSM_SELECCIONADO_VIRTUAL = exports.MSM_TOKEN_NO = exports.MSM_TOKEN_OK = exports.MSM_SESION_FIN = exports.MSM_SE_ACTIVA_REGISTRO = exports.MSM_SE_SUPERA_PLAZO = exports.MSM_NO_EXISTE_HORARIO = exports.MSM_REGISTRO_BIOMETRICO = exports.MSM_ENVIAR_NOTAS = exports.MSM_REGISTRO_ASISTENCIA = exports.MSM_SEND_EMAIL = exports.MSM_SEND_CLASE = exports.MSM_SEND_NOTAS = exports.MSM_INFO_NOTAS = exports.MSM_TENGA_PRESENTE = exports.MSM_NO_SESIONES = exports.MSM_LO_SENTIMOS = exports.MSM_NO_ENUENTRA = exports.TITLE_ERROR = void 0;
exports.SET_DATAS_SELEC_COURSES_TEACHER_CE = exports.objToken = exports.callRedimencionValid = exports.renderizaImageBase64 = exports.getBase64Image = exports.changeRegExp = exports.FECHA_SECCION_NOW = exports.options = exports.event = void 0;
var axios_1 = require("axios");
var local_storage_1 = require("local-storage");
var axios_2 = require("../config/axios");
var alertify_1 = require("../hooks/jspdf/alertify");
/* eslint-disable prefer-regex-literals */
exports.TEACHERCODE = 'teacherCode';
exports.USER_SESSION = 'userSesion';
exports.DUENO_SESSION = 'dueno_session';
exports.NAME_SESSION = 'name_session';
// ** CONSTATES PARA STORAGE SOLICITUD MARCACION
exports.CLASS_SELECTED_SOL_MARCACION = 'classSelectedSolMar';
exports.LIST_SESION_SOL = 'listSesionsSolicitud';
exports.ASISTENCIA = 'asistencia';
exports.CONTROL_CLASE_ID = 'controlClaseId';
exports.CONTROL_CLASE_ESTADO = 'ControlClaseEstado';
exports.CONTROL_CLASE_AULA = 'ControlClaseAula';
exports.CONTROL_CLASE_NRODIA = 'ControlClaseNroDia';
exports.CONTROL_CLASE_FECHA = 'ControlClaseFecha';
exports.VALIDAR = 'Validar';
exports.TIPO_DOCENTE = 'TipoDocente';
exports.RECUPERACION_ID = 'RecuperacionID';
exports.CLASE_ID = 'ClaseID';
exports.CONTROL_CLASE_FECHAHORA_INICIO = 'ControlClaseFechaHoraInicio';
exports.CONTROL_CLASE_FECHAHORA_FIN = 'ControlClaseFechaHoraFin';
exports.COMENTARIO = 'Comentario';
// ** CONSTATES PARA STORAGE HOME
exports.SET_DT_AULTA = 'dtAula';
exports.SET_DATA_DOCENTE = 'dataDocente';
exports.SET_RECOVER_SELECT = 'recoverSelect';
exports.SET_DT_ASISTENCE = 'dtAsistencia';
// ** CONSTANTES DE PRUEBA PARA DATOS DE USUARIO
exports.SET_DUENO_SESSION = 'RVI';
exports.SET_TEACHERCODE = 'N00011885';
// ** CONSTATES DE SESIONES ANTERIORES PARA STORAGE DE ASISTENCIA  - JD
exports.LST_COURSES_TEACHER = 'teacherAsistence';
exports.LST_SESIONS_CLASS = 'classAsistence';
exports.LST_DATA_ASSISTENCE = 'lstDataAssistence';
exports.SEMESTERID = 'semesterId';
exports.DESABLEDSESSIONACLOSE = 'desabledClose';
// ** CONSTATES DE RECUPERAR Y ADELANTAR CLASES  - JD
exports.LST_RECOVERY_SELECTED = 'lstRecoverySelected';
// ** CONSTANTES PARA ASISTENCIA
exports.TIPO_ASISTENCIA = 'tipoAsistencia';
exports.REGSOL = 'registroSolicitud';
exports.REGASI = 'registroAsistencia';
exports.VERASI = 'verAsistencia';
exports.TIPO_CLASE = 'sTipoClase';
exports.NO_CLOSE = 'noClose';
// ** CONSTANTES PARA SESIONES ABIERTAS
exports.RECOVERSELECT = 'recoverSelect';
// ** CONSTANTES PARA DESCANSO DOCENTE
exports.SET_DESCANSO_SELECT = 'descansoSelect';
exports.SET_DESCANSO_SOLICITUD = 'descansoListWorker';
exports.SET_TEACHER_BREAK = 'teacherBreak';
exports.SET_EMAIL_SUPPOT_UPN = 'jsalazardj22@gmail.com';
exports.MSM_INFO_DESCANSO = 'No se puede registrar la solicitud, tiene solicitudes pendientes de aprobación o ha llegado al límite de solicitudes.';
exports.MSM_SEND_SOLICITUD = 'Su solicitud se ha enviado para ser revisada.';
// ** CONSTANTES PARA NOTAS
exports.SET_NOTES_SELECT = 'selectNotes';
exports.SET_NOTES_RE = 'RE';
exports.SET_NOTES_CA = 'CA';
exports.SET_NOTES_PDF = {
    TITLE: 'CONSTANCIA DE ENVÍO DE NOTAS A SECRETARÍA ACADÉMICA',
    SUBTITLE: 'DATOS DE LA CLASE',
    campus: 'Sede :',
    semester: 'Semestre :',
    race: 'Carrera :',
    code: 'Código del Curso :',
    namegrade: 'Nombre del Curso :',
    teacher: 'Docente :',
    date: 'Fecha y hora de envío :',
    SUBTITLE1: 'Sede :',
    emailUPN: 'javierdj22@gmail.com',
    titleEmail: function (sede, semestre, sClase, curso, docente) {
        return "UPN - Constancia de env\u00EDo de notas a SA - Sede ".concat(sede, " - Semestre ").concat(semestre, " - Clase ").concat(sClase, " - Curso ").concat(curso, " - Docente ").concat(docente);
    },
    titleTable: [
        'Nº',
        'Alumno',
        'T1',
        'T2',
        'T3',
        'T4',
        'T5',
        'PT',
        'EP',
        'EF',
        'RE',
        'PRO',
        'EST',
    ]
};
// ** CONSTANTES PARA MENSAJE EMERGENTES
exports.buttons = { ok: "Ok", acept: "Aceptar", cancel: "Cancel" };
exports.TITLE_EMERG = 'Portal de Docentes';
exports.TITLE_ERROR = 'Notificación de Error';
exports.MSM_NO_ENUENTRA = "No se encuentra en el horario establecido para iniciar la sesi\u00F3n de clase.";
exports.MSM_LO_SENTIMOS = 'Lo sentimos, por mantenimiento el registro de notas sólo se puede acceder dentro del campus UPN.';
exports.MSM_NO_SESIONES = 'No se encontraron sesiones programadas para el día de hoy o la sesión de clase ya fue iniciada.';
var MSM_TENGA_PRESENTE = function (competence) {
    return "Tenga presente que tiene ".concat(competence, " clases con estudiantes pendientes por evaluar.");
};
exports.MSM_TENGA_PRESENTE = MSM_TENGA_PRESENTE;
exports.MSM_INFO_NOTAS = "Realice el env\u00EDo de notas a Secretar\u00EDa Acad\u00E9mica al finalizar el semestre, primero debe haber ingresado todas sus notas.";
exports.MSM_SEND_NOTAS = "No se pudo enviar el correo debido a que no se pudo extraer el detalle de las notas.";
exports.MSM_SEND_CLASE = "No se pudo enviar el correo debido a que no se pudo extraer el detalle de la clase.";
var MSM_SEND_EMAIL = function (destinatarios) {
    return "Se envi\u00F3 correctamente el correo de constancia con las notas en un archivo adjunto a los correos: ".concat(destinatarios, ".");
};
exports.MSM_SEND_EMAIL = MSM_SEND_EMAIL;
exports.MSM_REGISTRO_ASISTENCIA = "El registro de asistencia s\u00F3lo se puede hacer dentro del campus UPN.";
var MSM_ENVIAR_NOTAS = function (classCode) {
    return "Est\u00E1 a punto de enviar las notas de la clase ".concat(classCode, " a Secretar\u00EDa Acad\u00E9mica. Las notas enviadas ya no podr\u00E1n modificarse, \u00BFDesea continuar con el env\u00EDo?");
};
exports.MSM_ENVIAR_NOTAS = MSM_ENVIAR_NOTAS;
exports.MSM_REGISTRO_BIOMETRICO = "El registro de inicio de sesi\u00F3n de clase s\u00F3lo se puede realizar desde el biom\u00E9trico!";
exports.MSM_NO_EXISTE_HORARIO = "No existe horario para iniciar la sesi\u00F3n de recuperaci\u00F3n en este momento.";
exports.MSM_SE_SUPERA_PLAZO = "Se ha superado el plazo de 30 minutos para iniciar la sesi\u00F3n de clase";
exports.MSM_SE_ACTIVA_REGISTRO = 'No se puede activar el registro de notas por que la fecha ya caducó o no ha sido registrada. Comuníquese con la dirección de la carrera.';
exports.MSM_SESION_FIN = "La sesi\u00F3n ya fue finalizada.";
exports.MSM_TOKEN_OK = 'Token Correcto';
exports.MSM_TOKEN_NO = 'Token Incorrecto';
exports.MSM_SELECCIONADO_VIRTUAL = 'Ha seleccionado una clase virtual, recuerde que el ingreso de notas se debe efectuar desde Cursos Virtuales.';
exports.MSM_REGISTRO_OK = 'El registro de notas se ha guardado correctamente.';
// ** CONSTANTES PARA MENSAJE CORREO
exports.MSM_GENERA_TOKEN = 'Generación de Token para cambio de Notas!';
// ** CONSTANTES PARA OCULTAR Y MOSTRAR CORREO
exports.MSM_VISIBLE_NONE = 'none';
exports.SET_IMG_BASE64 = '';
exports.MSM_VISIBLE_BLOCK = 'block';
// ** CONSTANTES PARA HOME SECCIONES
exports.ACCESO_MARC_CLAS_DOC = "ACCESO_MARC_CLAS_DOC";
exports.CIERRE_SIN_ASIST = "CIERRE_SIN_ASIST";
exports.MSM_NOTAS_MAIL_ERROR = 'No tiene asignado un correo UPN valido, porfavor contactarse con HelpDesk.';
exports.MSM_NOTAS_SELECCIONADA = 'Las notas de la clase seleccionada ya han sido enviadas a Secretaría Académica.';
exports.MSM_NOTAS_CLASE_VIRTUAL = 'Ha seleccionado una clase virtual, recuerde que el ingreso de notas se debe efectuar desde Cursos Virtuales.';
var MSM_NOTAS_MAIL_OK = function (email) {
    return "Se cre\u00F3 su nuevo Token para su registro de notas. Se envi\u00F3 el token a su correo \" ".concat(email, ".");
};
exports.MSM_NOTAS_MAIL_OK = MSM_NOTAS_MAIL_OK;
// ** RESUMEN ASISTENCIA
exports.DATA_RESUMEN_SELECTED = 'dataResumenSelected';
exports.RECUPERATION_ID = 'RecuperacionID';
// ASISTENCIA
// ** CONSTANTES DE HOME - JS
var callErrorValid = function (result, setloading) {
    var _a, _b, _c, _d;
    var error = result === null || result === void 0 ? void 0 : result.error;
    if (error !== undefined) {
        if (error.status !== 200) {
            setloading(false);
            (0, alertify_1["default"])({
                title: "".concat(exports.TITLE_ERROR, " - ").concat(((_a = error.statusText) === null || _a === void 0 ? void 0 : _a.status) !== undefined
                    ? (_b = error.statusText) === null || _b === void 0 ? void 0 : _b.status
                    : error.status),
                html: "".concat(((_c = error.statusText) === null || _c === void 0 ? void 0 : _c.message) !== undefined
                    ? (_d = error.statusText) === null || _d === void 0 ? void 0 : _d.message
                    : error.statusText, "<br/><br/>").concat((0, exports.convertStringToDate)(error.date), " \n          ").concat((0, exports.convertStringToDateTime)(error.date)),
                confirmButtonText: "Ok"
            });
            return undefined;
        }
    }
    return result;
};
exports.callErrorValid = callErrorValid;
var ErrorMessageClient = function (error, state) { return __awaiter(void 0, void 0, void 0, function () {
    var status, statusText, url, date, data, obj;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return __generator(this, function (_k) {
        status = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status;
        statusText = (_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error;
        url = (_e = (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.config) === null || _e === void 0 ? void 0 : _e.url;
        date = (_g = (_f = error === null || error === void 0 ? void 0 : error.response) === null || _f === void 0 ? void 0 : _f.headers) === null || _g === void 0 ? void 0 : _g.date;
        data = (_j = (_h = error === null || error === void 0 ? void 0 : error.response) === null || _h === void 0 ? void 0 : _h.headers) === null || _j === void 0 ? void 0 : _j.data;
        obj = {
            codeTeacher: '',
            status: status,
            statusText: statusText,
            date: date,
            url: url,
            data: data
        };
        if (state) {
            (0, exports.SendEmailServer)(obj);
        }
        return [2 /*return*/, {
                status: status,
                statusText: statusText,
                date: date,
                url: url
            }];
    });
}); };
exports.ErrorMessageClient = ErrorMessageClient;
var SendEmailServer = function (obj) { return __awaiter(void 0, void 0, void 0, function () {
    var msj, sendMail;
    return __generator(this, function (_a) {
        msj = "<center>\n  <div aling=\"center\" style=\"color:red;font-weight:700\">\n    <div>\n      <span style=\"color:#000;font-weight:700\">Url : </span>".concat(obj.url, "\n    </div>\n    <div>\n      <span style=\"color:#000;font-weight:700\">Date : </span>").concat(obj.date, "\n    </div>\n    <div>\n      <span style=\"color:#000;font-weight:700\">Data : </span>").concat(obj.data, "\n    </div>\n    <div>\n      <span style=\"color:#000;font-weight:700\">Status : </span>").concat(obj.status, "\n    </div>\n    <div>\n      <span style=\"color:#000;font-weight:700\">Status Message : </span>").concat(obj.statusText, "\n    </div>\n  </div>\n  </center>");
        sendMail = (0, exports.emailJson)('javierdj22@gmail.com', obj.codeTeacher, msj);
        if (obj.status !== 200) {
            axios_2.axiosfetchPrivateEmail.post("/", sendMail);
        }
        return [2 /*return*/];
    });
}); };
exports.SendEmailServer = SendEmailServer;
var emailJson = function (email, codeTeacher, msj) {
    return {
        // EmailList: [respEmail],
        EmailList: [email],
        DisplayName: 'UPN Docentes',
        Subject: "Notificaci\u00F3n de ERRORES - Portal Docentes - ".concat(codeTeacher, " "),
        IsHtml: true,
        // ReplyToList: [respEmail.emailUPN],
        ReplyToList: [email],
        AttachmentB64: null,
        AttachmentName: null,
        NotificationType: 1,
        EmailListCC: null,
        EmailListBCC: null,
        Queue: true,
        Body: (0, exports.setBodyEmail)(msj)
    };
};
exports.emailJson = emailJson;
var setBodyEmail = function (message) {
    return "<table width='100%' align='center'  border='0' cellpadding='20'>\n  <tr><td>\n  ".concat(message, "\n  </td></tr>\n  </table>");
};
exports.setBodyEmail = setBodyEmail;
exports.SET_SEMESTERCODE = '';
exports.SET_FECHA_ORIGEN = '12/30/1899';
// ** CONSTANTES EVALUACION DE COMPETENCIAS
exports.CLASS_SELECTED_EC = 'claseSeleccionadaEc';
exports.CB_COMPETENCE = 'cbo_competence';
// ** CONSTANTES PARA SOPORTE VIRTUAL
exports.CONSULTA_DATA = 'CONSULTA_DATA';
// ** CONSTANTES PARA REPORTES
exports.CLASEID_REPORTES = 'ClaseIdReporte';
exports.LST_SELECTED_COURSE = 'lstCoursesTeacher';
var convertStringToDate = function (data) {
    var date = new Date(data);
    return "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, '0'), "-").concat(String(date.getDate()).padStart(2, '0'));
};
exports.convertStringToDate = convertStringToDate;
var convertStringToDay = function (data) {
    var date = new Date(data);
    return String(date.getDay());
};
exports.convertStringToDay = convertStringToDay;
var AddMin = function (data, Minute) {
    var date = new Date(data);
    var MinuteNow = Number(date.getMinutes() + Minute);
    var MinuteNowS = String(date.getMinutes());
    var HourNow = String(date.getHours());
    if (MinuteNow === 60) {
        HourNow = String(date.getHours() + 1);
        if (Number(HourNow) < 10) {
            HourNow = String("0".concat(HourNow));
        }
        MinuteNowS = '00';
    }
    return "".concat(date.getFullYear(), "-").concat(String(date.getMonth() + 1).padStart(2, '0'), "-").concat(String(date.getDate()).padStart(2, '0'), " ").concat(String(HourNow), ":").concat(String(MinuteNowS), ":").concat(String(date.getUTCSeconds()));
};
exports.AddMin = AddMin;
var timeDiffCalc = function (dateNow, dateFuture) {
    var newYear1 = new Date(dateNow);
    var newYear2 = new Date(dateFuture);
    var dif = Number(newYear2) - Number(newYear1);
    dif = Math.round(dif / 1000 / 60);
    return dif;
};
exports.timeDiffCalc = timeDiffCalc;
var convertStringToDateTime = function (data) {
    var date = new Date(data);
    return date.toLocaleTimeString();
};
exports.convertStringToDateTime = convertStringToDateTime;
var eventToken = function (data, options) {
    var date = new Date(data);
    var hora = date.toLocaleTimeString('en-IT', { hour12: true });
    return "Se gener\u00F3 env\u00EDo de token a su correo el d\u00EDa ".concat(date.toLocaleDateString('es-ES', options), ", ").concat(hora);
};
exports.eventToken = eventToken;
exports.event = new Date();
exports.options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
exports.FECHA_SECCION_NOW = "Sesiones programadas para HOY ".concat(exports.event.toLocaleDateString('es-ES', exports.options));
var changeRegExp = function (result) {
    result = result.split('.')[0];
    var regex = new RegExp('^[0-9-]*$', 'i');
    return regex.test(result);
};
exports.changeRegExp = changeRegExp;
var getBase64Image = function (src, height, width, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.height = height;
        canvas.width = width;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, width, height);
        var dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
    };
    img.src = src;
    if (img.complete || img.complete === undefined) {
        img.src =
            'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        img.src = src;
    }
};
exports.getBase64Image = getBase64Image;
var renderizaImageBase64 = function (url, width, height, repository) {
    (0, exports.getBase64Image)(url, height, width, function (dataUrl) {
        (0, local_storage_1.set)(exports.SET_IMG_BASE64, dataUrl);
        // const imgBase64: any = document.getElementById(repository)
        // imgBase64.value = dataUrl
    }, null);
};
exports.renderizaImageBase64 = renderizaImageBase64;
var callRedimencionValid = function (repository) {
    setTimeout(function () {
        var imgBase64 = document.getElementById(repository);
        if (imgBase64.value !== '') {
            (0, local_storage_1.set)(exports.SET_IMG_BASE64, imgBase64.value);
        }
        else {
            (0, exports.callRedimencionValid)(repository);
        }
    }, 2000);
};
exports.callRedimencionValid = callRedimencionValid;
var objToken = function () { return __awaiter(void 0, void 0, void 0, function () {
    var SERVER_INFO, config, url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                SERVER_INFO = null;
                config = {
                    withCredentials: true
                };
                if (!(process.env.NODE_ENV !== 'production')) return [3 /*break*/, 3];
                url = 'http://localhost:53041/weblogin/Handlers/SessionHandler.ashx';
                return [4 /*yield*/, (0, axios_1["default"])(url, config)];
            case 1:
                response = _a.sent();
                if (!response) {
                    SERVER_INFO = {
                        error: true
                    };
                    return [2 /*return*/, SERVER_INFO];
                }
                return [4 /*yield*/, JSON.stringify(response)];
            case 2:
                SERVER_INFO = _a.sent();
                return [2 /*return*/, SERVER_INFO];
            case 3:
                SERVER_INFO = {
                    // token_aws: 'pF9TWLFZi89XDBHkdZCKpaOK6WCK2u181tP1YUf0',
                    url_aws: 'https://apiupn-dev.upn.edu.pe/gestor-academico/',
                    usuario: '0'
                };
                return [2 /*return*/, SERVER_INFO];
        }
    });
}); };
exports.objToken = objToken;
// ** CONSTANTES DE CARGA DE EXÁMENES
exports.SET_DATAS_SELEC_COURSES_TEACHER_CE = 'SelectCoursesTeacher_CE';
