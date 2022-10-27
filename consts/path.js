"use strict";
exports.__esModule = true;
exports.apiPath = void 0;
exports.apiPath = {
    asistencia: {
        PATH_PostByCode: 'Student/PostByCode',
        PATH_GetRace: 'Student/GetRace/',
        PATH_GetAttendanceSummarySession: function (controlD) {
            return "/TeacherAttendance/attendance/".concat(controlD, "/sessions/");
        },
        PATH_ParameterByCodeAndClass: function (classCode, parameterCode) {
            return "/ClassSchedule/class/".concat(classCode, "/parameters/").concat(parameterCode);
        },
        PATH_GetPayrollAssistance: function (controlClassId) {
            return "/TeacherAttendance/assistances/".concat(controlClassId, "/payroll");
        },
        PATH_InsertRequestAttendance: '/TeacherAttendance/attandance/request',
        PATH_PostRecordAttendance: '/TeacherAttendance/attendance/records',
        PATH_UpdateStateRecovery: '/Attendance/recoreystates',
        PATH_EndSessionRequest: '/ClassSchedule/sessions/',
        PATH_PostAttendanceIsOnCheckDate: '/TeacherAttendance/attendance/date',
        PATH_cantCloseRequest: function (classControlId) {
            return "/Attendance/requests/".concat(classControlId);
        },
        PATH_GetListEmailRequest: function (action, classId, classCode) { return "/ClassSchedule/emails/".concat(action, "/").concat(classId, "/").concat(classCode); },
        PATH_TeacherLogin: function (userName) { return "/teacher/login/user/".concat(userName); },
        PATH_GetDetallesResumen: function (classControlId, recoveryId) {
            return "/TeacherAttendance/controlclass/".concat(classControlId, "/").concat(recoveryId);
        },
        PATH_CampusFuera: function (classCode) {
            return "/ClassSchedule/class/".concat(classCode, "/campus/");
        },
        PATH_VerificaIpPermitido: function (yourNetwork, yourExtension) {
            return "GetCheckAllowedIP/".concat(yourNetwork, "/").concat(yourExtension);
        },
        PATH_EndSession: "/TeacherAttendance/logout"
    },
    delegado: {
        Path_Delegate: function (classCode) {
            return "/TeacherAttendance/class/".concat(classCode, "/delegates");
        },
        Path_PostRegisterDelegate: '/ClassSchedule/delegate',
        PATH_delegateList: function (teacherCode) {
            return "/Attendance/delegate/class/".concat(teacherCode);
        }
    },
    home: {
        PATH_PostCheckPerson: '/ClassSchedule/CheckPerSession',
        PATH_PostCheckPersonTime: '/TeacherAttendance/sessions/recovery/time',
        PATH_PostSessions: '/ClassSchedule/sessions',
        PATH_GetRace: '/Student/GetRace/',
        PATH_PutLog: '/token/log',
        PATH_PostSeccionOpen: '/teacher/seccionOpen/',
        PATH_PostTeacherAttendance: function (codeUser) {
            return "/TeacherAttendance/SeccionOpen/".concat(codeUser, "/codeUser");
        },
        PATH_GetPendingTeachingCompetence: '/Competence/GetPendingTeachingCompetence/',
        PATH_GetDatosUsuario: '/teacher/teachers/',
        PATH_GetScheduleSession: function (codeTeacher, sessions) {
            return "/ClassSchedule/teachers/".concat(codeTeacher, "/sessions/").concat(sessions);
        },
        PATH_GetCouplingSession: function (codeTeacher) {
            return "/token/coupling/user/".concat(codeTeacher, "/semester/0/limit/1");
        },
        PATH_GetValidaData: function (codeTeacher) {
            return "/teacher/login/codeTeacher/".concat(codeTeacher);
        },
        PATH_GetScheduleRequeperation: function (codeTeacher, recuperations) {
            return "/ClassSchedule/teachers/".concat(codeTeacher, "/recuperations/").concat(recuperations);
        },
        PATH_GetDocenteBiometric: function (codeUser, state) {
            return "TeacherAttendance/teachers/".concat(codeUser, "/biometrics/").concat(state);
        },
        PATH_GetCodeandClass: function (classCode, state) {
            return "ClassSchedule/class/".concat(classCode, "/parameters/").concat(state);
        },
        PATH_GetTeachingTimeReport: function (codeClass) {
            return "ClassSchedule/class/".concat(codeClass, "/campus");
        },
        PATH_GetCheckClass: function (codeClass) {
            return "/ClassSchedule/class/".concat(codeClass, "/workingadult");
        },
        PATH_GetParameterByCodeClass: function (codeClass, parameterCode) {
            return "ClassSchedule/ParameterByCodeAndClass/".concat(codeClass, "/").concat(parameterCode);
        },
        PATH_GetAllowLogout: function (yourNetwork, yourExtension) {
            return "Utility/verfy/allowedIP/".concat(yourNetwork, "/").concat(yourExtension);
        },
        PATH_GetAllowLogoutWithoutStudent: function (codeTeacher, state) {
            return "/TeacherAttendance/teachers/".concat(codeTeacher, "/biometrics/").concat(state);
        },
        PATH_GetSessionExists: '/ClassSchedule/sessions/exists'
    },
    register: {
        PATH_GetControlClass: '/TeacherAttendance/GetControlClass/',
        PATH_GetAttendanceSummarySession: '/TeacherAttendance/GetAttendanceSummarySession/'
    },
    horario: {
        PATH_GetAttendanceSummarySession: '/TeacherAttendance/GetAttendanceSummarySession/',
        PATH_GetIfTheClassIsOffCampus: function (classCode, isEpec) {
            return "/ClassSchedule/teachers/".concat(classCode, "/schedule/").concat(isEpec);
        }
    },
    seccionAnteriores: {
        PATH_GetTeachersCorses: function (UserID) {
            return "/ClassSchedule/teachers/".concat(UserID, "/courses/recuperation");
        },
        PATH_GetSessionsByClass: function (classCode, accion, paymentPeriodId) {
            return "/TeacherAttendance/class/".concat(classCode, "/sessions/").concat(accion, "/").concat(paymentPeriodId);
        },
        PATH_GetPeriodPayDate: '/Utility/period/pay/date',
        PATH_GetPeriodPayment: function (action, idPeriodPay) {
            return "/Utility/period/pay/".concat(action, "/").concat(idPeriodPay);
        },
        PATH_PostOpennedSession: "/TeacherAttendance/sessions"
    },
    solicitudMarcacion: {
        PATH_PostSessionsNotStarted: '/TeacherAttendance/sessions/started',
        PATH_VerifyAsistanceStudentSolicitud: function (aula, ControlClaseID, fecha) {
            return "/TeacherAttendance/asistances/".concat(aula, "/students/").concat(ControlClaseID, "/request/").concat(fecha);
        },
        PATH_SessionTacherRequestValidate: "/ClassSchedule/sessions/teachers/requests",
        PATH_SessionAssistanceValidate: function (classId, classCode, action) { return "/ClassSchedule/sessions/".concat(classId, "/").concat(classCode, "/assistance/").concat(action); },
        PATH_SessionOpenRequest: '/ClassSchedule/sessions/request',
        PATH_EndSessionRequest: '/ClassSchedule/sessions/',
        PATH_InsertSessionRequest: '/TeacherAttendance/sessions/request'
    },
    sectionOpen: {
        PATH_Open: function (codeUser) {
            return "/TeacherAttendance/SeccionOpen/".concat(codeUser, "/codeUser");
        },
        PATH_Teacher: "/ClassSchedule/sessions/exists",
        PATH_PostOpennedSession: "/TeacherAttendance/sessions"
    },
    recuperarAdelantarClases: {
        PATH_GetTeachersRecoverys: function (teacherCode, pend) {
            return "/ClassSchedule/teachers/".concat(teacherCode, "/recoverys/").concat(pend);
        },
        PATH_GetTeacherCourses: function (teacherCode) {
            return "/ClassSchedule/teachers/".concat(teacherCode, "/courses/recuperation");
        },
        // /ClassSchedule/teachers/{teacherCode}/courses/recuperation
        PATH_GetHolyday: function (sedeCode) { return "/Utility/holyday/".concat(sedeCode); },
        PATH_GetClassDate: function (classCode, teacherCode, action) { return "/ClassSchedule/class/".concat(classCode, "/dates/").concat(teacherCode, "/").concat(action); },
        PATH_GetLaboratories: "/ClassSchedule/laboratories/",
        PATH_PostScheduleSessions: "/ClassSchedule/schedules/sessions",
        PATH_GetClasEnabled: function (classCode, sedeCode, date, hours, quantity) {
            return "/ClassSchedule/class/".concat(classCode, "/enabled/").concat(sedeCode, "/").concat(date, "/").concat(hours, "/").concat(quantity);
        },
        PATH_PostTeacherAttendanceRecoverys: "/TeacherAttendance/recoverys",
        PATH_GetClassRecuperation: function (idRecuperation) {
            return "/ClassSchedule/class/recuperations/".concat(idRecuperation);
        },
        PATH_DeleteRecovery: "/TeacherAttendance/recoverys",
        PATH_GetTeacherUser: function (userName) { return "/teacher/login/user/".concat(userName); },
        PATH_GetClassTeachers: function (Classcode) {
            return "/ClassSchedule/class/".concat(Classcode, "/teachers");
        },
        PATH_GetTeacher: function (code) { return "/teacher/teachers/".concat(code); },
        PATH_GetRateCampusCode: function (raceCode, campusCode) {
            return "/teacher/rate/".concat(raceCode, "/campus/").concat(campusCode);
        }
    },
    competence: {
        PATH_List: function (teacherCode) {
            return "/ClassSchedule/teachers/".concat(teacherCode, "/courses");
        },
        PATH_Competence_by_class: function (classCode) {
            return "/Competence/class/".concat(classCode, "/general");
        },
        PATH_CompetencePlanilla: function (classCode, competenciaId) {
            return "/Competence/competence/".concat(classCode, "/schedule/").concat(competenciaId);
        },
        PATH_conductasList: function (competenciaId) {
            return "/Competence/conducts/".concat(competenciaId);
        },
        PATH_listTipo: function (classCode) { return "/notes/class/".concat(classCode); },
        PATH_saveConduct: "/Competence/conducts/attached/",
        PATH_saveAdjunto: "/Competence/competence/documents/",
        PATH_upload: "/common/upload",
        PATH_listAdjunto: function (competenceid, classCode) {
            return "/Competence/competence/documents/?competenceid=".concat(competenceid, "&classCode=").concat(classCode);
        },
        PATH_AttachConducts: function (competenceAttachId) {
            return "Competence/conducts/attach/".concat(competenceAttachId);
        },
        PATH_listCompetences: function (Accion, CompentenceGeneral, CriterioDesempeno, ClaCode, AluCode) {
            return "/Competence/competence/performance/".concat(Accion, "/").concat(CompentenceGeneral, "/").concat(CriterioDesempeno, "/").concat(ClaCode, "/").concat(AluCode);
        },
        PATH_generalEscala: function (competenciaId) {
            return "Competence/general/scale/competence/".concat(competenciaId, "/");
        },
        PATH_alumCompeLog: function (AlucompetenciaId) {
            return "Competence/alumno/competence/".concat(AlucompetenciaId, "/log");
        },
        PATH_RegisterNotesCompetence: "/notes/note/competence",
        PATH_Download: "/Utility/Document/download",
        PATH_Delete: "/Competence/conducts/disabled"
    },
    Notes: {
        PATH_GetNoteExistClass: function (classCode) {
            return "/notes/exist/class/".concat(classCode);
        },
        PATH_GetNoteClass: function (classCode) { return "/notes/class/".concat(classCode); },
        PATH_GetNoteStateClass: function (classCode) {
            return "/notes/state?classCode=".concat(classCode);
        },
        PATH_GetNoteStudentClass: function (classCode, classEstate) {
            return "/notes/student/class/".concat(classCode, "/state/").concat(classEstate);
        },
        PATH_GetNoteValidate: function (ip, user) {
            return "/notes/validate/".concat(ip, "/ip/").concat(user, "/user");
        },
        PATH_GetNoteControl: function (semester, note, classCode) {
            return "/notes/control/".concat(semester, "/semester/").concat(note, "/note/").concat(classCode, "/class");
        },
        PATH_GetNoteGroupClass: function (classGroup) {
            return "/notes/classGroup/".concat(classGroup);
        },
        PATH_PostNoteGroupClass: "/notes/classGroup",
        PATH_PostNoteStateClass: "/notes/state",
        PATH_PutNoteStateClass: "/notes/state/",
        PATH_PostUpload: "/notes/upload",
        PATH_GetNoteEmail: function (userName) {
            return "/teacher/emailCode/user/".concat(userName);
        },
        PATH_GetNoteSemesterControl: function (semesterCode, notaCode, classCode) {
            return "/notes/control/semester/".concat(semesterCode, "/note/").concat(notaCode, "/class/").concat(classCode);
        },
        PATH_GetNoteSemester: function (classCode) {
            return "/notes/semester/class/".concat(classCode);
        },
        PATH_GetNoteSendClass: function (codeUser) { return "/notes/send/user/".concat(codeUser); },
        PATH_GetNoteDetail: function (classCode, codeUser) {
            return "/notes/classDetail/".concat(classCode, "/user/").concat(codeUser);
        },
        PATH_GetNoteAverage: function (classCode) {
            return "/notes/classAverage/class/".concat(classCode);
        }
    },
    tokens: {
        PATH_PostTokenLog: "/token/log",
        PATH_PostTokenState: "/token/state",
        PATH_PostTokenTeacher: function (codeTeacher) {
            return "/token/teachers/".concat(codeTeacher);
        },
        PATH_PostTokenAutentication: "/token/Autentication",
        PATH_PostTokenValidateState: "/token/state/validate",
        PATH_PostTokenCoupling: function (userCode, semesterCode, limitState) {
            return "/token/coupling/user/".concat(userCode, "/semester/").concat(semesterCode, "/limit/").concat(limitState);
        },
        PATH_PostTokenValidateToken: "/token/ValidateToken"
    },
    datosPersonales: {
        PATH_persona: function (user) { return "/person/cv/person/0/".concat(user); },
        PATH_pais: "/person/country",
        PATH_estadoCivil: "/person/marital/status",
        PATH_tipoDocument: "/person/type/document",
        PATH_Ubigeo: "/person/ubigeo",
        PATH_EvaluadorEvaluado: function (idPersona) {
            return "/assessment/evaluator/evaluated/".concat(idPersona, "/2/True");
        },
        PATH_PersonaGuardar: "/person/person",
        PATH_Institucion: function (idPais) {
            if (idPais === void 0) { idPais = '0'; }
            return "/person/institution/".concat(idPais, "/true");
        },
        PATH_Industria: "/person/industry/true",
        PATH_AreaPuesto: "/person/position/area/true",
        PATH_TipoDedicacionDocente: "/person/type/teacher/dictation/True",
        PATH_ExperienciaLaboral: function (idPersona) {
            return "/experience/work/experience/".concat(idPersona, "/True");
        },
        PATH_ExperienciaLaboralGuardar: "/experience/work/experience",
        PATH_ClasificacionCarrera: "/knowledge/classification/race",
        PATH_NivelAcademico: "/knowledge/academic/level",
        PATH_EstadoEstudio: "/studies/state/study",
        PATH_Estudio: function (idPersona) { return "/studies/studies/".concat(idPersona, "/True"); },
        PATH_EstudioGuardar: "/studies/study",
        PATH_PersonaConocimientoObtener: function (idPersona) {
            return "/knowledge/person/".concat(idPersona, "/True");
        },
        PATH_PersonaConocimiento: "/knowledge/person/knowledge",
        PATH_Idioma: "/studies/language/true",
        PATH_PersonaIdioma: function (idPersona) {
            return "/person/idiom/".concat(idPersona, "/True");
        },
        PATH_PersonaIdiomaGuardar: "/knowledge/person/idiom",
        PATH_ReferenciaLaboral: function (idPersona) {
            return "/experience/work/reference/".concat(idPersona, "/True");
        },
        PATH_ReferenciaLaboralGuardar: "/experience/work/reference",
        PATH_TipoAdjunto: "/person/type/attached/True/null/null",
        PATH_PersonaAdjunto: function (idPersona) {
            return "/person/attach/".concat(idPersona, "/True");
        },
        PATH_PersonaAdjuntoGuardar: "/person/person/attached",
        PATH_PersonaAdjuntoDescargar: function (idPersona, id) {
            return "/person/attached".concat(idPersona, "/").concat(id);
        },
        PATH_Confirmacion: "/person/curriculumn",
        PATH_Download: "/person/url/download/file"
    },
    reportesAcademicos: {
        PATH_GetTeacherCourses: function (teacherCode) {
            return "/ClassSchedule/teachers/".concat(teacherCode, "/courses/recuperation");
        },
        PATH_GetTeacherTutoria: function (teacherCode) {
            return "/ClassSchedule/teachers/".concat(teacherCode, "/class");
        },
        PATH_GetClassAttendance: function (classCode) {
            return "/Attendance/class/".concat(classCode);
        },
        PATH_GetNotes: function (classCode) { return "/notes/notes/class/".concat(classCode); },
        PATH_PostClassStatistics: "/notes/class/statistics/",
        PATH_GetCompetenceGeneralByClass: function (classCode) {
            return "/Competence/class/".concat(classCode, "/general");
        },
        PATH_GetCompetenceSchedule: function (classId, noteId) {
            return "Competence/competence/".concat(classId, "/schedule/").concat(noteId);
        },
        PATH_GetDetailClass: function (classCode, parameterCode) {
            return "/ClassSchedule/class/".concat(classCode, "/parameters/").concat(parameterCode);
        }
    },
    LogsTokenNotes: {
        PATH_GetTokenActive: function (userCode, semesterCode, limitState) {
            return "/token/coupling/user/".concat(userCode, "/semester/").concat(semesterCode, "/limit/").concat(limitState);
        },
        PATH_GetTokenGenerate: function (userCode, semesterCode) {
            return "/token/DS/".concat(userCode, "/user/").concat(semesterCode, "/semester");
        }
    },
    reportesEvaluacion: {
        PATH_GetResultTeacherEvaluation: function (teacherCode) {
            return "/teacher/result/evaluation/".concat(teacherCode);
        },
        PATH_GetDocumentsAWSS3: function (periodo, name) {
            return "/Utility/Document/AWSS3/".concat(periodo, "/").concat(name);
        },
        PATH_GetDownloadDocumentsAWSS3: "/Utility/Document/download"
    },
    reporteTutorias: {
        PATH_GetTutoriasTeacher: function (traCode) { return "/teacher/tutorials/".concat(traCode); },
        PATH_GetTeacherNotesStudentTutoring: function (clasCode, semCode) {
            return "/teacher/notes/student/".concat(clasCode, "/tutoring/").concat(semCode);
        },
        PATH_GetNotesStudentTutoring: function (codAlu) {
            return "/notes/notes/student/".concat(codAlu, "/tutoring");
        },
        PATH_GetEmployeeLogin: function (userName) { return "/teacher/login/user/".concat(userName); }
    },
    cargaExamenes: {
        PATH_GetTeachersCorses: function (UserID) {
            return "/ClassSchedule/teachers/".concat(UserID, "/courses/recuperation");
        },
        PATH_GetLoadedExams: function (codeTeacher, classCode) {
            return "/teacher/loaded/".concat(codeTeacher, "/exams/").concat(classCode);
        },
        PATH_GetListClassNote: function (classCode) { return "/notes/class/".concat(classCode); },
        PATH_GetSemester: function (classCode) { return "/notes/semester/class/".concat(classCode); },
        PATH_GetAmountStudents: function (semesterId, noteId, ClassCode) {
            return "/teacher/amount/students/".concat(semesterId, "/").concat(noteId, "/enrolled/").concat(ClassCode);
        },
        PATH_GetControlNotes: function (semesterCode, notaCode, classCode) {
            return "/notes/control/semester/".concat(semesterCode, "/note/").concat(notaCode, "/class/").concat(classCode);
        },
        PATH_GetStateExams: function (codeTeacher, noteId, ClassCode) {
            return "/teacher/state/exam/".concat(codeTeacher, "/").concat(noteId, "/").concat(ClassCode);
        },
        PATH_GetActiveExam: function (codeTeacher, noteId, ClassCode) {
            return "/teacher/active/exams/".concat(codeTeacher, "/").concat(noteId, "/").concat(ClassCode);
        },
        PATH_PostTeacherInserExam: "teacher/insert/burden/exam"
    },
    disponibilidadHorario: {
        PATH_GetHeadquartersBanners: function (exclude) {
            return "/Utility/headquarters/banners/info/".concat(exclude);
        },
        PATH_GetSemesterUnitBusinessCode: function (CodeHeadquarters) {
            return "/teacher/semester/unit/business/code/".concat(CodeHeadquarters);
        },
        PATH_GetTeacherAvailability: function (action, user, day) {
            return "/teacher/teacher/availability/".concat(action, "/").concat(user, "/").concat(day);
        },
        PATH_PostCrudAvailability: "teacher/teacher/availability/crud"
    },
    documentosManuales: {
        PATH_GetDocumentsTeacher: "/Utility/documents/teacher",
        PATH_GetDownloadDocumentsAWSS3: "/Utility/Document/download",
        PATH_GetManualsTeacher: "/Utility/manuals/teacher"
    },
    evaluacionDocente: {
        PATH_GetAssessmentTeacher: "/Utility/assessment/teacher",
        PATH_GetDownloadDocumentsAWSS3: "/Utility/Document/download"
    },
    descansoTeacher: {
        PATH_GetSemesterSustitutory: function (idSemester, codeteacher) {
            return "/WorkerTeacher/semester/".concat(idSemester, "/code/").concat(codeteacher);
        },
        PATH_GetSemesterTuesday: function (idSemester, codeteacher) {
            return "WorkerTeacher/semesterTuesday/".concat(idSemester, "/code/").concat(codeteacher);
        },
        PATH_GetSemesterThursday: function (idSemester, codeteacher, datetramit) {
            return "/WorkerTeacher/semesterThursday/".concat(idSemester, "/code/").concat(codeteacher, "/date/").concat(datetramit);
        },
        PATH_GetTeacherBreak: function (codeteacher) {
            return "/WorkerTeacher/break/".concat(codeteacher);
        },
        PATH_GetRequestWorker: function (idSemester, codeteacher) {
            return "/WorkerTeacher/worker/".concat(idSemester, "/code/").concat(codeteacher);
        },
        PATH_GetSendEmail: function (codeteacher) {
            return "/WorkerTeacher/sendMail/".concat(codeteacher);
        },
        PATH_Put_UpdateDateWorker: '/WorkerTeacher/state',
        PATH_Post_SaveTempTableWorkerTeacher: '/WorkerTeacher/SaveTemple',
        PATH_Post_RegisterRequestsWorkerTeacher: '/WorkerTeacher/state'
    },
    soporteVirtual: {
        PATH_docenteConsulta: function (teacherCode) {
            return "/TeacherAttendance/Queries/teachers/".concat(teacherCode);
        },
        PATH_tipos: function (type, action) {
            return "/TeacherAttendance/teachers/SubType/".concat(type, "/").concat(action);
        },
        PATH_INSERT: "/TeacherAttendance/teachers/Query/",
        PATH_GETFILE: function (studentCode, assesor) {
            return "/TeacherAttendance/FileContact/".concat(studentCode, "/teachers/").concat(assesor, "/");
        },
        PATH_HISTORY: function (teacherCode, idQuery) {
            return "/TeacherAttendance/Queries/teachers/".concat(teacherCode, "/History/").concat(idQuery);
        },
        PATH_download: "common/download",
        PATH_REQUEST: "/TeacherAttendance/Queries/teachers/CSE",
        PATH_GETANEXOS: function (teacherCode, studentCode) {
            return "/TeacherAttendance/Queries/teachers/".concat(studentCode, "/History/Anexos/").concat(teacherCode);
        },
        PATH_INSERT_IMG: "/teacher/insert/query/cse/annexes",
        PATH_DELETE_AWS: "/Utility/delete/file/s3",
        PATH_CLEAN: "/teacher/clean/annexes/queries/cse"
    }
};
