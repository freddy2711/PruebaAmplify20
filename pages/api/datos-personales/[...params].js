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
var path_1 = require("./../../../consts/path");
var translateExpLAb = function (datos) {
    var arr = datos.map(function (item) { return ({
        idExperienciaLaboral: item.WorkExperienceId,
        puesto: item.Post,
        fechaInicio: item.StartDate,
        fechaFin: item.EndDate && item.EndDate,
        empresa: item.Company,
        Pais: {
            idPais: parseInt(item.CountryId) !== 0 ? parseInt(item.CountryId) : '',
            nombre: item.Name
        },
        AreaPuesto: {
            idAreaPuesto: parseInt(item.IdAreaPosition) !== 0
                ? parseInt(item.IdAreaPosition)
                : '',
            nombreAreaPuesto: item.PostAreaName
        },
        Industria: {
            idIndustria: parseInt(item.IndustryID) !== 0 ? parseInt(item.IndustryID) : '',
            nombreIndustria: item.IndustryName
        },
        descripcion: item.Description,
        genteACargo: item.PeopleToCharge === 'True',
        manejoPresupuesto: item.BudgetManagement === 'True',
        experienciaDocencia: item.TeachingExperience === 'True',
        trabajaActualmente: item.CurrentlyWorking === 'True',
        activo: item.Active === 'True',
        noSeEncontroInstitucion: item.NoInstitutionFound === 'True',
        audit_usuario_creacion: item.AuditUserCreation,
        audit_usuario_actualizacion: item.AuditUserUpdate,
        Institucion: {
            idInstitucion: parseInt(item.InstitutionId) !== 0 ? parseInt(item.InstitutionId) : ''
        },
        TipoDedicacionDocente: {
            idTipoDedicacionDocente: parseInt(item.IdTypeTeachingDedication) !== 0
                ? parseInt(item.IdTypeTeachingDedication)
                : '',
            nombreInstitucion: item.InstitutionNameNotFound
        }
    }); });
    return arr;
};
var translateEstudy = function (datos) {
    var arr = datos.map(function (item) { return ({
        idEstudio: item.StudyId,
        nombreEstudio: item.StudyName,
        Institucion: {
            audit_fecha_creacion: '0001-01-01T00:00:00',
            idInstitucion: item.InstitutionId,
            nombreInstitucion: item.InstitutionName
        },
        Pais: {
            idPais: item.CountryId,
            nombre: item.CountryName
        },
        EstadoEstudio: {
            idEstadoEstudio: item.StudyStatusId,
            nombre: item.StudyStatusName
        },
        NivelAcademico: {
            idNivelAcademico: item.IdLevelAcademico,
            nombre: item.AcademicLevelName
        },
        fechaInicio: item.StartDate,
        fechaFin: item.EndDate,
        estudiaActualmente: item.CurrentlyStudying === 'True',
        ClasificacionCarrera: {
            codigoClasificacionCarrera: item.CareerClassificationCode,
            nombreClasificacionCarrera: item.CareerClassificationName
        },
        activo: item.Active === 'True',
        esValidadoSunedu: item.IsValidatedSunedu === 'True',
        noSeEncontroInstitucion: item.NoInstitutionFound === 'True',
        audit_usuario_creacion: item.audit_user_creation,
        audit_fecha_creacion: item.audit_date_creation,
        audit_usuario_actualizacion: item.audit_user_update,
        audit_fecha_actualizacion: item.audit_update_date
    }); });
    return arr;
};
var translateConos = function (datos) {
    var arr = datos.map(function (item) { return ({
        idPersonaConocimiento: item.KnowledgePersonId,
        nombreConocimiento: item.KnowledgeName,
        nivelConocimiento: item.KnowledgeLevel,
        activo: item.Active === 'True',
        audit_usuario_creacion: item.audit_user_creation,
        audit_fecha_creacion: item.audit_date_creation,
        esCertificado: item.IsCertificate === 'True'
    }); });
    return arr;
};
var translateIdiomas = function (datos) {
    var arr = datos.map(function (item) { return ({
        idPersonaIdioma: item.IdPersoneLanguage,
        Idioma: {
            idIdioma: item.IdLanguage,
            nombreIdioma: item.NameLanguage,
            audit_fecha_creacion: '0001-01-01T00:00:00'
        },
        nivelIdiomaOral: item.LevelLanguageOral,
        nivelIdiomaEscrito: item.LevelLanguageWritten,
        activo: item.Active === 'True',
        audit_usuario_creacion: item.AuditUserCreate,
        audit_fecha_creacion: item.AuditDateCreate,
        esCertificado: item.sCertified === 'True',
        noSeEncontroIdioma: item.NoseIFindLanguage === 'True'
    }); });
    return arr;
};
var translateRefLab = function (datos) {
    var arr = datos.map(function (item) { return ({
        idReferenciaLaboral: item.JobReferenceId,
        empresa: item.Company,
        cargoreferencia: item.ReferenceCharge,
        contacto: item.Contact,
        correo: item.Mail,
        relacion: item.Relationship,
        telefono: item.Phone,
        celular1: item.Cell1,
        celular2: item.Cell2,
        activo: item.Active === 'True',
        audit_usuario_creacion: item.auditUserCreation,
        audit_fecha_creacion: item.auditDateCreation
    }); });
    return arr;
};
var translateAdjuntos = function (datos) {
    var arr = datos.map(function (item) { return ({
        idPersonaAdjunto: item.IdPersonAttach,
        nombreAdjunto: item.NameAttach,
        extensionAdjunto: item.ExtenAttach,
        descripcionAdjunto: item.DescriptionAttach,
        activo: item.Active === 'True',
        audit_usuario_creacion: item.UsuarioCreate,
        audit_fecha_creacion: item.DateCreate,
        audit_usuario_actualizacion: item.UsuarioCreate,
        audit_fecha_actualizacion: item.DateUpdate
    }); });
    return arr;
};
var handler = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var params, _a, URL_1, data, error_1, item, URL_2, data, error_2, URL_3, data, error_3, URL_4, data, error_4, URL_5, data, error_5, URL_6, data, error_6, URL_7, data, error_7, URL_8, data, error_8, URL_9, data, error_9, URL_10, data, error_10, URL_11, data, error_11, URL_12, data, lista, error_12, item, URL_13, data, error_13, URL_14, data, error_14, URL_15, data, error_15, URL_16, data, error_16, URL_17, data, error_17, item, URL_18, data, error_18, URL_19, data, error_19, item, URL_20, data, error_20, URL_21, data, error_21, URL_22, data, error_22, item, URL_23, data, error_23, URL_24, data, error_24, item, URL_25, data, error_25, URL_26, data, error_26, URL_27, data, error_27, item, URL_28, data, error_28, URL_29, data, error_29, URL_30, data, error_30, item, URL_31, data, error_31;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                params = req.query.params;
                console.log('PARAMS_', params);
                _a = params[0];
                switch (_a) {
                    case 'personaObtener': return [3 /*break*/, 1];
                    case 'personaGuardar': return [3 /*break*/, 6];
                    case 'paisObtener': return [3 /*break*/, 11];
                    case 'estadoCivilObtener': return [3 /*break*/, 16];
                    case 'tipoDocumento': return [3 /*break*/, 21];
                    case 'Ubigeo': return [3 /*break*/, 26];
                    case 'EvaluadorEvaluado': return [3 /*break*/, 31];
                    case 'Institucion': return [3 /*break*/, 36];
                    case 'Industria': return [3 /*break*/, 41];
                    case 'AreaPuesto': return [3 /*break*/, 46];
                    case 'tipoDedicacionDocente': return [3 /*break*/, 51];
                    case 'experienciaLaboralObtener': return [3 /*break*/, 56];
                    case 'experienciaLaboralGuardar': return [3 /*break*/, 61];
                    case 'clasificacionCarrera': return [3 /*break*/, 66];
                    case 'nivelAcademico': return [3 /*break*/, 71];
                    case 'estadoEstudio': return [3 /*break*/, 76];
                    case 'estudio': return [3 /*break*/, 81];
                    case 'estudioGuardar': return [3 /*break*/, 86];
                    case 'personaConocimientoObtener': return [3 /*break*/, 91];
                    case 'personaConocimientoGuardar': return [3 /*break*/, 96];
                    case 'idioma': return [3 /*break*/, 101];
                    case 'personaIdioma': return [3 /*break*/, 106];
                    case 'personaIdiomaGuardar': return [3 /*break*/, 111];
                    case 'referenciaLaboral': return [3 /*break*/, 116];
                    case 'referenciaLaboralGuardar': return [3 /*break*/, 121];
                    case 'tipoAdjunto': return [3 /*break*/, 126];
                    case 'personaAdjunto': return [3 /*break*/, 131];
                    case 'personaAdjuntoGuardar': return [3 /*break*/, 136];
                    case 'personaAdjuntoDownload': return [3 /*break*/, 141];
                    case 'downloadFile': return [3 /*break*/, 146];
                    case 'confirmacionGuardar': return [3 /*break*/, 150];
                }
                return [3 /*break*/, 155];
            case 1:
                URL_1 = path_1.apiPath.datosPersonales.PATH_persona(params[1].toUpperCase());
                console.log(URL_1);
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_1)];
            case 3:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [3 /*break*/, 155];
            case 6:
                item = req.body;
                URL_2 = path_1.apiPath.datosPersonales.PATH_PersonaGuardar;
                console.log(URL_2);
                _b.label = 7;
            case 7:
                _b.trys.push([7, 9, , 10]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_2, item)];
            case 8:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 10];
            case 9:
                error_2 = _b.sent();
                console.log(error_2);
                return [3 /*break*/, 10];
            case 10: return [3 /*break*/, 155];
            case 11:
                URL_3 = path_1.apiPath.datosPersonales.PATH_pais;
                console.log(URL_3);
                _b.label = 12;
            case 12:
                _b.trys.push([12, 14, , 15]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_3)];
            case 13:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 15];
            case 14:
                error_3 = _b.sent();
                console.log(error_3);
                return [3 /*break*/, 15];
            case 15: return [3 /*break*/, 155];
            case 16:
                URL_4 = path_1.apiPath.datosPersonales.PATH_estadoCivil;
                console.log(URL_4);
                _b.label = 17;
            case 17:
                _b.trys.push([17, 19, , 20]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_4)];
            case 18:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 20];
            case 19:
                error_4 = _b.sent();
                console.log(error_4);
                return [3 /*break*/, 20];
            case 20: return [3 /*break*/, 155];
            case 21:
                URL_5 = path_1.apiPath.datosPersonales.PATH_tipoDocument;
                console.log(URL_5);
                _b.label = 22;
            case 22:
                _b.trys.push([22, 24, , 25]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_5)];
            case 23:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 25];
            case 24:
                error_5 = _b.sent();
                console.log(error_5);
                return [3 /*break*/, 25];
            case 25: return [3 /*break*/, 155];
            case 26:
                URL_6 = path_1.apiPath.datosPersonales.PATH_Ubigeo;
                console.log(URL_6);
                _b.label = 27;
            case 27:
                _b.trys.push([27, 29, , 30]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_6)];
            case 28:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 30];
            case 29:
                error_6 = _b.sent();
                console.log(error_6);
                return [3 /*break*/, 30];
            case 30: return [3 /*break*/, 155];
            case 31:
                URL_7 = path_1.apiPath.datosPersonales.PATH_EvaluadorEvaluado(params[1]);
                console.log(URL_7);
                _b.label = 32;
            case 32:
                _b.trys.push([32, 34, , 35]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_7)];
            case 33:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 35];
            case 34:
                error_7 = _b.sent();
                console.log(error_7);
                return [3 /*break*/, 35];
            case 35: return [3 /*break*/, 155];
            case 36:
                URL_8 = path_1.apiPath.datosPersonales.PATH_Institucion(params[1]);
                console.log(URL_8);
                _b.label = 37;
            case 37:
                _b.trys.push([37, 39, , 40]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_8)];
            case 38:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 40];
            case 39:
                error_8 = _b.sent();
                console.log(error_8);
                return [3 /*break*/, 40];
            case 40: return [3 /*break*/, 155];
            case 41:
                URL_9 = path_1.apiPath.datosPersonales.PATH_Industria;
                console.log(URL_9);
                _b.label = 42;
            case 42:
                _b.trys.push([42, 44, , 45]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_9)];
            case 43:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 45];
            case 44:
                error_9 = _b.sent();
                console.log(error_9);
                return [3 /*break*/, 45];
            case 45: return [3 /*break*/, 155];
            case 46:
                URL_10 = path_1.apiPath.datosPersonales.PATH_AreaPuesto;
                console.log(URL_10);
                _b.label = 47;
            case 47:
                _b.trys.push([47, 49, , 50]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_10)];
            case 48:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 50];
            case 49:
                error_10 = _b.sent();
                console.log(error_10);
                return [3 /*break*/, 50];
            case 50: return [3 /*break*/, 155];
            case 51:
                URL_11 = path_1.apiPath.datosPersonales.PATH_TipoDedicacionDocente;
                console.log(URL_11);
                _b.label = 52;
            case 52:
                _b.trys.push([52, 54, , 55]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_11)];
            case 53:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 55];
            case 54:
                error_11 = _b.sent();
                console.log(error_11);
                return [3 /*break*/, 55];
            case 55: return [3 /*break*/, 155];
            case 56:
                URL_12 = path_1.apiPath.datosPersonales.PATH_ExperienciaLaboral(params[1]);
                console.log(URL_12);
                _b.label = 57;
            case 57:
                _b.trys.push([57, 59, , 60]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_12)];
            case 58:
                data = (_b.sent()).data;
                lista = translateExpLAb(data.detail);
                console.log(lista);
                res.status(200).json(lista);
                return [3 /*break*/, 60];
            case 59:
                error_12 = _b.sent();
                console.log(error_12);
                return [3 /*break*/, 60];
            case 60: return [3 /*break*/, 155];
            case 61:
                item = req.body;
                URL_13 = path_1.apiPath.datosPersonales.PATH_ExperienciaLaboralGuardar;
                console.log(URL_13);
                _b.label = 62;
            case 62:
                _b.trys.push([62, 64, , 65]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_13, item)];
            case 63:
                data = (_b.sent()).data;
                console.log(data);
                res.status(200).json(data);
                return [3 /*break*/, 65];
            case 64:
                error_13 = _b.sent();
                console.log(error_13);
                return [3 /*break*/, 65];
            case 65: return [3 /*break*/, 155];
            case 66:
                URL_14 = path_1.apiPath.datosPersonales.PATH_ClasificacionCarrera;
                console.log(URL_14);
                _b.label = 67;
            case 67:
                _b.trys.push([67, 69, , 70]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_14)];
            case 68:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 70];
            case 69:
                error_14 = _b.sent();
                console.log(error_14);
                return [3 /*break*/, 70];
            case 70: return [3 /*break*/, 155];
            case 71:
                URL_15 = path_1.apiPath.datosPersonales.PATH_NivelAcademico;
                console.log(URL_15);
                _b.label = 72;
            case 72:
                _b.trys.push([72, 74, , 75]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_15)];
            case 73:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 75];
            case 74:
                error_15 = _b.sent();
                console.log(error_15);
                return [3 /*break*/, 75];
            case 75: return [3 /*break*/, 155];
            case 76:
                URL_16 = path_1.apiPath.datosPersonales.PATH_EstadoEstudio;
                console.log(URL_16);
                _b.label = 77;
            case 77:
                _b.trys.push([77, 79, , 80]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_16)];
            case 78:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 80];
            case 79:
                error_16 = _b.sent();
                console.log(error_16);
                return [3 /*break*/, 80];
            case 80: return [3 /*break*/, 155];
            case 81:
                URL_17 = path_1.apiPath.datosPersonales.PATH_Estudio(params[1]);
                console.log(URL_17);
                _b.label = 82;
            case 82:
                _b.trys.push([82, 84, , 85]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_17)];
            case 83:
                data = (_b.sent()).data;
                console.log(translateEstudy(data.detail));
                res.status(200).json(translateEstudy(data.detail));
                return [3 /*break*/, 85];
            case 84:
                error_17 = _b.sent();
                console.log(error_17);
                return [3 /*break*/, 85];
            case 85: return [3 /*break*/, 155];
            case 86:
                item = req.body;
                URL_18 = path_1.apiPath.datosPersonales.PATH_EstudioGuardar;
                console.log(URL_18);
                _b.label = 87;
            case 87:
                _b.trys.push([87, 89, , 90]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_18, item)];
            case 88:
                data = (_b.sent()).data;
                console.log(data);
                res.status(200).json(data);
                return [3 /*break*/, 90];
            case 89:
                error_18 = _b.sent();
                console.log(error_18);
                return [3 /*break*/, 90];
            case 90: return [3 /*break*/, 155];
            case 91:
                URL_19 = path_1.apiPath.datosPersonales.PATH_PersonaConocimientoObtener(params[1]);
                console.log(URL_19);
                _b.label = 92;
            case 92:
                _b.trys.push([92, 94, , 95]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_19)];
            case 93:
                data = (_b.sent()).data;
                console.log(translateConos(data.detail));
                res.status(200).json(translateConos(data.detail));
                return [3 /*break*/, 95];
            case 94:
                error_19 = _b.sent();
                console.log(error_19);
                return [3 /*break*/, 95];
            case 95: return [3 /*break*/, 155];
            case 96:
                item = req.body;
                URL_20 = path_1.apiPath.datosPersonales.PATH_PersonaConocimiento;
                console.log(URL_20);
                _b.label = 97;
            case 97:
                _b.trys.push([97, 99, , 100]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_20, item)];
            case 98:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 100];
            case 99:
                error_20 = _b.sent();
                console.log(error_20);
                return [3 /*break*/, 100];
            case 100: return [3 /*break*/, 155];
            case 101:
                URL_21 = path_1.apiPath.datosPersonales.PATH_Idioma;
                console.log(URL_21);
                _b.label = 102;
            case 102:
                _b.trys.push([102, 104, , 105]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_21)];
            case 103:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 105];
            case 104:
                error_21 = _b.sent();
                console.log(error_21);
                return [3 /*break*/, 105];
            case 105: return [3 /*break*/, 155];
            case 106:
                URL_22 = path_1.apiPath.datosPersonales.PATH_PersonaIdioma(params[1]);
                console.log(URL_22);
                _b.label = 107;
            case 107:
                _b.trys.push([107, 109, , 110]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_22)];
            case 108:
                data = (_b.sent()).data;
                console.log(translateIdiomas(data.detail));
                res.status(200).json(translateIdiomas(data.detail));
                return [3 /*break*/, 110];
            case 109:
                error_22 = _b.sent();
                console.log(error_22);
                return [3 /*break*/, 110];
            case 110: return [3 /*break*/, 155];
            case 111:
                item = req.body;
                URL_23 = path_1.apiPath.datosPersonales.PATH_PersonaIdiomaGuardar;
                console.log(URL_23);
                _b.label = 112;
            case 112:
                _b.trys.push([112, 114, , 115]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_23, item)];
            case 113:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 115];
            case 114:
                error_23 = _b.sent();
                console.log(error_23);
                return [3 /*break*/, 115];
            case 115: return [3 /*break*/, 155];
            case 116:
                URL_24 = path_1.apiPath.datosPersonales.PATH_ReferenciaLaboral(params[1]);
                console.log(URL_24);
                _b.label = 117;
            case 117:
                _b.trys.push([117, 119, , 120]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_24)];
            case 118:
                data = (_b.sent()).data;
                console.log(translateRefLab(data.detail));
                res.status(200).json(translateRefLab(data.detail));
                return [3 /*break*/, 120];
            case 119:
                error_24 = _b.sent();
                console.log(error_24);
                return [3 /*break*/, 120];
            case 120: return [3 /*break*/, 155];
            case 121:
                item = req.body;
                URL_25 = path_1.apiPath.datosPersonales.PATH_ReferenciaLaboralGuardar;
                console.log(URL_25);
                _b.label = 122;
            case 122:
                _b.trys.push([122, 124, , 125]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_25, item)];
            case 123:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 125];
            case 124:
                error_25 = _b.sent();
                console.log(error_25);
                return [3 /*break*/, 125];
            case 125: return [3 /*break*/, 155];
            case 126:
                URL_26 = path_1.apiPath.datosPersonales.PATH_TipoAdjunto;
                console.log(URL_26);
                _b.label = 127;
            case 127:
                _b.trys.push([127, 129, , 130]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_26)];
            case 128:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 130];
            case 129:
                error_26 = _b.sent();
                console.log(error_26);
                return [3 /*break*/, 130];
            case 130: return [3 /*break*/, 155];
            case 131:
                URL_27 = path_1.apiPath.datosPersonales.PATH_PersonaAdjunto(params[1]);
                console.log(URL_27);
                _b.label = 132;
            case 132:
                _b.trys.push([132, 134, , 135]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_27)];
            case 133:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(translateAdjuntos(data.detail));
                return [3 /*break*/, 135];
            case 134:
                error_27 = _b.sent();
                console.log(error_27);
                return [3 /*break*/, 135];
            case 135: return [3 /*break*/, 155];
            case 136:
                item = req.body;
                URL_28 = path_1.apiPath.datosPersonales.PATH_PersonaAdjuntoGuardar;
                console.log(URL_28);
                _b.label = 137;
            case 137:
                _b.trys.push([137, 139, , 140]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_28, item)];
            case 138:
                data = (_b.sent()).data;
                console.log('personaAdjuntoGuardar____', data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 140];
            case 139:
                error_28 = _b.sent();
                console.log(error_28);
                return [3 /*break*/, 140];
            case 140: return [3 /*break*/, 155];
            case 141:
                URL_29 = path_1.apiPath.datosPersonales.PATH_PersonaAdjuntoDescargar(params[1], params[2]);
                console.log(URL_29);
                _b.label = 142;
            case 142:
                _b.trys.push([142, 144, , 145]);
                return [4 /*yield*/, (0, axios_1.axiosfetchPrivateWSCV)(URL_29)];
            case 143:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 145];
            case 144:
                error_29 = _b.sent();
                console.log(error_29);
                return [3 /*break*/, 145];
            case 145: return [3 /*break*/, 155];
            case 146:
                _b.trys.push([146, 148, , 149]);
                URL_30 = path_1.apiPath.datosPersonales.PATH_Download;
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_30, {
                        nameFile: params[1]
                    })];
            case 147:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 149];
            case 148:
                error_30 = _b.sent();
                console.log(error_30);
                return [3 /*break*/, 149];
            case 149: return [3 /*break*/, 155];
            case 150:
                item = req.body;
                URL_31 = path_1.apiPath.datosPersonales.PATH_Confirmacion;
                console.log(URL_31);
                _b.label = 151;
            case 151:
                _b.trys.push([151, 153, , 154]);
                return [4 /*yield*/, axios_1.axiosfetchPrivateWSCV.post(URL_31, item)];
            case 152:
                data = (_b.sent()).data;
                console.log(data.detail);
                res.status(200).json(data.detail);
                return [3 /*break*/, 154];
            case 153:
                error_31 = _b.sent();
                console.log(error_31);
                return [3 /*break*/, 154];
            case 154: return [3 /*break*/, 155];
            case 155: return [2 /*return*/];
        }
    });
}); };
exports["default"] = handler;
