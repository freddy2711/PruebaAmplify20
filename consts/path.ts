export const apiPath = {
  asistencia: {
    PATH_PostByCode: 'Student/PostByCode',
    PATH_GetRace: 'Student/GetRace/',
    PATH_GetAttendanceSummarySession: (controlD: string) =>
      `/TeacherAttendance/attendance/${controlD}/sessions/`,
    PATH_ParameterByCodeAndClass: (classCode: string, parameterCode: string) =>
      `/ClassSchedule/class/${classCode}/parameters/${parameterCode}`,
    PATH_GetPayrollAssistance: (controlClassId: string) =>
      `/TeacherAttendance/assistances/${controlClassId}/payroll`,
    PATH_InsertRequestAttendance: '/TeacherAttendance/attandance/request',
    PATH_PostRecordAttendance: '/TeacherAttendance/attendance/records',
    PATH_UpdateStateRecovery: '/Attendance/recoreystates',
    PATH_EndSessionRequest: '/ClassSchedule/sessions/',
    PATH_PostAttendanceIsOnCheckDate: '/TeacherAttendance/attendance/date',
    PATH_cantCloseRequest: (classControlId: string) =>
      `/Attendance/requests/${classControlId}`,
    PATH_GetListEmailRequest: (
      action: string,
      classId: string,
      classCode: string
    ) => `/ClassSchedule/emails/${action}/${classId}/${classCode}`,
    PATH_TeacherLogin: (userName: string) => `/teacher/login/user/${userName}`,
    PATH_GetDetallesResumen: (classControlId: string, recoveryId: string) =>
      `/TeacherAttendance/controlclass/${classControlId}/${recoveryId}`,
    PATH_CampusFuera: (classCode: string) =>
      `/ClassSchedule/class/${classCode}/campus/`,
    PATH_VerificaIpPermitido: (yourNetwork: string, yourExtension: string) =>
      `GetCheckAllowedIP/${yourNetwork}/${yourExtension}`,
    PATH_EndSession: `/TeacherAttendance/logout`,
  },
  delegado: {
    Path_Delegate: (classCode: string) =>
      `/TeacherAttendance/class/${classCode}/delegates`,
    Path_PostRegisterDelegate: '/ClassSchedule/delegate',
    PATH_delegateList: (teacherCode: string) =>
      `/Attendance/delegate/class/${teacherCode}`,
  },
  home: {
    PATH_PostCheckPerson: '/ClassSchedule/CheckPerSession',
    PATH_PostCheckPersonTime: '/TeacherAttendance/sessions/recovery/time',
    PATH_PostSessions: '/ClassSchedule/sessions',
    PATH_GetRace: '/Student/GetRace/',
    PATH_PutLog: '/token/log',
    PATH_PostSeccionOpen: '/teacher/seccionOpen/',
    PATH_PostTeacherAttendance: (codeUser: string) =>
      `/TeacherAttendance/SeccionOpen/${codeUser}/codeUser`,
    PATH_GetPendingTeachingCompetence:
      '/Competence/GetPendingTeachingCompetence/',
    PATH_GetDatosUsuario: '/teacher/teachers/',
    PATH_GetScheduleSession: (codeTeacher: string, sessions: string) =>
      `/ClassSchedule/teachers/${codeTeacher}/sessions/${sessions}`,
    PATH_GetCouplingSession: (codeTeacher: string) =>
      `/token/coupling/user/${codeTeacher}/semester/0/limit/1`,
    PATH_GetValidaData: (codeTeacher: string) =>
      `/teacher/login/codeTeacher/${codeTeacher}`,
    PATH_GetScheduleRequeperation: (
      codeTeacher: string,
      recuperations: string
    ) =>
      `/ClassSchedule/teachers/${codeTeacher}/recuperations/${recuperations}`,
    PATH_GetDocenteBiometric: (codeUser: string, state: string) =>
      `TeacherAttendance/teachers/${codeUser}/biometrics/${state}`,
    PATH_GetCodeandClass: (classCode: string, state: string) =>
      `ClassSchedule/class/${classCode}/parameters/${state}`,
    PATH_GetTeachingTimeReport: (codeClass: string) =>
      `ClassSchedule/class/${codeClass}/campus`,
    PATH_GetCheckClass: (codeClass: string) =>
      `/ClassSchedule/class/${codeClass}/workingadult`,
    PATH_GetParameterByCodeClass: (codeClass: string, parameterCode: string) =>
      `ClassSchedule/ParameterByCodeAndClass/${codeClass}/${parameterCode}`,
    PATH_GetAllowLogout: (yourNetwork: string, yourExtension: string) =>
      `Utility/verfy/allowedIP/${yourNetwork}/${yourExtension}`,
    PATH_GetAllowLogoutWithoutStudent: (codeTeacher: string, state: string) =>
      `/TeacherAttendance/teachers/${codeTeacher}/biometrics/${state}`,
    PATH_GetSessionExists: '/ClassSchedule/sessions/exists',
  },
  register: {
    PATH_GetControlClass: '/TeacherAttendance/GetControlClass/',
    PATH_GetAttendanceSummarySession:
      '/TeacherAttendance/GetAttendanceSummarySession/',
  },
  horario: {
    PATH_GetAttendanceSummarySession:
      '/TeacherAttendance/GetAttendanceSummarySession/',
    PATH_GetIfTheClassIsOffCampus: (classCode: string, isEpec: string) =>
      `/ClassSchedule/teachers/${classCode}/schedule/${isEpec}`,
  },
  seccionAnteriores: {
    PATH_GetTeachersCorses: (UserID: string) =>
      `/ClassSchedule/teachers/${UserID}/courses/recuperation`,
    PATH_GetSessionsByClass: (
      classCode: string,
      accion: string,
      paymentPeriodId: string
    ) =>
      `/TeacherAttendance/class/${classCode}/sessions/${accion}/${paymentPeriodId}`,
    PATH_GetPeriodPayDate: '/Utility/period/pay/date',
    PATH_GetPeriodPayment: (action: string, idPeriodPay: string) =>
      `/Utility/period/pay/${action}/${idPeriodPay}`,
    PATH_PostOpennedSession: `/TeacherAttendance/sessions`,
  },
  solicitudMarcacion: {
    PATH_PostSessionsNotStarted: '/TeacherAttendance/sessions/started',
    PATH_VerifyAsistanceStudentSolicitud: (
      aula: string,
      ControlClaseID: string,
      fecha: string
    ) =>
      `/TeacherAttendance/asistances/${aula}/students/${ControlClaseID}/request/${fecha}`,
    PATH_SessionTacherRequestValidate: `/ClassSchedule/sessions/teachers/requests`,
    PATH_SessionAssistanceValidate: (
      classId: string,
      classCode: string,
      action: string
    ) => `/ClassSchedule/sessions/${classId}/${classCode}/assistance/${action}`,
    PATH_SessionOpenRequest: '/ClassSchedule/sessions/request',
    PATH_EndSessionRequest: '/ClassSchedule/sessions/',
    PATH_InsertSessionRequest: '/TeacherAttendance/sessions/request',
  },
  sectionOpen: {
    PATH_Open: (codeUser: string) =>
      `/TeacherAttendance/SeccionOpen/${codeUser}/codeUser`,
    PATH_Teacher: `/ClassSchedule/sessions/exists`,
    PATH_PostOpennedSession: `/TeacherAttendance/sessions`,
  },
  recuperarAdelantarClases: {
    PATH_GetTeachersRecoverys: (teacherCode: string, pend: string) =>
      `/ClassSchedule/teachers/${teacherCode}/recoverys/${pend}`,
    PATH_GetTeacherCourses: (teacherCode: string) =>
      `/ClassSchedule/teachers/${teacherCode}/courses/recuperation`,
    PATH_GetHolyday: (sedeCode: string) => `/Utility/holyday/${sedeCode}`,
    PATH_GetClassDate: (
      classCode: string,
      teacherCode: string,
      action: string
    ) => `/ClassSchedule/class/${classCode}/dates/${teacherCode}/${action}`,
    PATH_GetLaboratories: `/ClassSchedule/laboratories/`,
    PATH_PostScheduleSessions: `/ClassSchedule/schedules/sessions`,
    PATH_GetClasEnabled: (
      classroom: string,
      sedeCode: string,
      date: string,
      hours: string,
      quantity: string
    ) =>
      `/ClassSchedule/classroom/${classroom}/enabled/${sedeCode}/${date}/${hours}/${quantity}`,
    PATH_PostTeacherAttendanceRecoverys: `/TeacherAttendance/recoverys`,
    PATH_GetClassRecuperation: (idRecuperation: any) =>
      `/ClassSchedule/class/recuperations/${idRecuperation}`,
    PATH_DeleteRecovery: `/TeacherAttendance/recoverys`,
    PATH_GetTeacherUser: (userName: any) => `/teacher/login/user/${userName}`,
    PATH_GetProcessUser: (carrCode: any, sedeCode: any) =>
      `/Attendance/process/users/${carrCode}/${sedeCode}`,
    PATH_GetClassTeachers: (Classcode: any) =>
      `/ClassSchedule/class/${Classcode}/teachers`,
    PATH_GetTeacher: (code: any) => `/teacher/teachers/${code}`,
    PATH_GetRateCampusCode: (raceCode: any, campusCode: any) =>
      `/teacher/rate/${raceCode}/campus/${campusCode}`,
  },
  competence: {
    PATH_List: (teacherCode: string) =>
      `/ClassSchedule/teachers/${teacherCode}/courses`,
    PATH_Competence_by_class: (classCode: string) =>
      `/Competence/class/${classCode}/general`,
    PATH_CompetencePlanilla: (classCode: string, competenciaId: string) =>
      `/Competence/competence/${classCode}/schedule/${competenciaId}`,
    PATH_conductasList: (competenciaId: string) =>
      `/Competence/conducts/${competenciaId}`,
    PATH_listTipo: (classCode: string) => `/notes/class/${classCode}`,
    PATH_saveConduct: `/Competence/conducts/attached/`,
    PATH_saveAdjunto: `/Competence/competence/documents/`,
    PATH_upload: `/common/upload`,
    PATH_listAdjunto: (competenceid: string, classCode: string) =>
      `/Competence/competence/documents/?competenceid=${competenceid}&classCode=${classCode}`,
    PATH_AttachConducts: (competenceAttachId: string) =>
      `Competence/conducts/attach/${competenceAttachId}`,
    PATH_listCompetences: (
      Accion: string,
      CompentenceGeneral: string,
      CriterioDesempeno: string,
      ClaCode: string,
      AluCode: string
    ) =>
      `/Competence/competence/performance/${Accion}/${CompentenceGeneral}/${CriterioDesempeno}/${ClaCode}/${AluCode}`,
    PATH_generalEscala: (competenciaId: string) =>
      `Competence/general/scale/competence/${competenciaId}/`,
    PATH_alumCompeLog: (AlucompetenciaId: string) =>
      `Competence/alumno/competence/${AlucompetenciaId}/log`,
    PATH_RegisterNotesCompetence: `/notes/note/competence`,
    PATH_Download: `/Utility/Document/download`,
    PATH_Delete: `/Competence/conducts/disabled`,
  },
  Notes: {
    PATH_GetNoteExistClass: (classCode: string) =>
      `/notes/exist/class/${classCode}`,
    PATH_GetNoteClass: (classCode: string) => `/notes/class/${classCode}`,
    PATH_GetNoteStateClass: (classCode: string) =>
      `/notes/state?classCode=${classCode}`,
    PATH_GetNoteStudentClass: (classCode: string, classEstate: string) =>
      `/notes/student/class/${classCode}/state/${classEstate}`,

    PATH_GetNoteValidate: (ip: string, user: string) =>
      `/notes/validate/${ip}/ip/${user}/user`,
    PATH_GetNoteControl: (semester: string, note: string, classCode: string) =>
      `/notes/control/${semester}/semester/${note}/note/${classCode}/class`,
    PATH_GetNoteGroupClass: (classGroup: string) =>
      `/notes/classGroup/${classGroup}`,
    PATH_PostNoteGroupClass: `/notes/classGroup`,
    PATH_PostNoteStateClass: `/notes/state`,
    PATH_PutNoteStateClass: `/notes/state/`,
    PATH_PostUpload: `/notes/upload`,
    PATH_GetNoteEmail: (userName: string) =>
      `/teacher/emailCode/user/${userName}`,
    PATH_GetNoteSemesterControl: (
      semesterCode: string,
      notaCode: string,
      classCode: string
    ) =>
      `/notes/control/semester/${semesterCode}/note/${notaCode}/class/${classCode}`,
    PATH_GetNoteSemester: (classCode: string) =>
      `/notes/semester/class/${classCode}`,
    PATH_GetNoteSendClass: (codeUser: string) => `/notes/send/user/${codeUser}`,
    PATH_GetNoteDetail: (classCode: string, codeUser: string) =>
      `/notes/classDetail/${classCode}/user/${codeUser}`,
    PATH_GetNoteAverage: (classCode: string) =>
      `/notes/classAverage/class/${classCode}`,
  },
  tokens: {
    PATH_PostTokenLog: `/token/log`,
    PATH_PostTokenState: `/token/state`,
    PATH_PostTokenTeacher: (codeTeacher: string) =>
      `/token/teachers/${codeTeacher}`,
    PATH_PostTokenAutentication: `/token/Autentication`,
    PATH_PostTokenValidateState: `/token/state/validate`,
    PATH_PostTokenCoupling: (
      userCode: string,
      semesterCode: string,
      limitState: string
    ) =>
      `/token/coupling/user/${userCode}/semester/${semesterCode}/limit/${limitState}`,
    PATH_PostTokenValidateToken: `/token/ValidateToken`,
    PATH_PostTokenClose: `/token/token/close`,
  },
  datosPersonales: {
    PATH_persona: (user: string) => `/person/cv/person/0/${user}`,
    PATH_pais: `/person/country`,
    PATH_estadoCivil: `/person/marital/status`,
    PATH_tipoDocument: `/person/type/document`,
    PATH_Ubigeo: `/person/ubigeo`,
    PATH_EvaluadorEvaluado: (idPersona: string) =>
      `/assessment/evaluator/evaluated/${idPersona}/2/True`,
    PATH_PersonaGuardar: `/person/person`,
    PATH_Institucion: (idPais: any = '0') =>
      `/person/institution/${idPais}/true`,
    PATH_Industria: `/person/industry/true`,
    PATH_AreaPuesto: `/person/position/area/true`,
    PATH_TipoDedicacionDocente: `/person/type/teacher/dictation/True`,
    PATH_ExperienciaLaboral: (idPersona: string) =>
      `/experience/work/experience/${idPersona}/True`,
    PATH_ExperienciaLaboralGuardar: `/experience/work/experience`,
    PATH_ClasificacionCarrera: `/knowledge/classification/race`,
    PATH_NivelAcademico: `/knowledge/academic/level`,
    PATH_EstadoEstudio: `/studies/state/study`,
    PATH_Estudio: (idPersona: string) => `/studies/studies/${idPersona}/True`,
    PATH_EstudioGuardar: `/studies/study`,
    PATH_PersonaConocimientoObtener: (idPersona: string) =>
      `/knowledge/person/${idPersona}/True`,
    PATH_PersonaConocimiento: `/knowledge/person/knowledge`,
    PATH_Idioma: `/studies/language/true`,
    PATH_PersonaIdioma: (idPersona: string) =>
      `/person/idiom/${idPersona}/True`,
    PATH_PersonaIdiomaGuardar: `/knowledge/person/idiom`,
    PATH_ReferenciaLaboral: (idPersona: string) =>
      `/experience/work/reference/${idPersona}/True`,
    PATH_ReferenciaLaboralGuardar: `/experience/work/reference`,
    PATH_TipoAdjunto: `/person/type/attached/True/null/null`,
    PATH_PersonaAdjunto: (idPersona: string) =>
      `/person/attach/${idPersona}/True`,
    PATH_PersonaAdjuntoGuardar: `/person/person/attached`,
    PATH_PersonaAdjuntoDescargar: (idPersona: string, id: string) =>
      `/person/attached${idPersona}/${id}`,
    PATH_Confirmacion: `/person/curriculumn`,
    PATH_Download: `/person/url/download/file`,
  },
  reportesAcademicos: {
    PATH_GetTeacherCourses: (teacherCode: any) =>
      `/ClassSchedule/teachers/${teacherCode}/courses/recuperation`,
    PATH_GetTeacherTutoria: (teacherCode: any) =>
      `/ClassSchedule/teachers/${teacherCode}/class`,
    PATH_GetClassAttendance: (classCode: any) =>
      `/Attendance/class/${classCode}`,
    PATH_GetNotes: (classCode: any) => `/notes/notes/class/${classCode}`,
    PATH_PostClassStatistics: `/notes/class/statistics/`,
    PATH_GetCompetenceGeneralByClass: (classCode: any) =>
      `/Competence/class/${classCode}/general`,
    PATH_GetCompetenceSchedule: (classId: any, noteId: any) =>
      `Competence/competence/${classId}/schedule/${noteId}`,
    PATH_GetDetailClass: (classCode: any, parameterCode: any) =>
      `/ClassSchedule/class/${classCode}/parameters/${parameterCode}`,
  },
  LogsTokenNotes: {
    PATH_GetTokenActive: (userCode: any, semesterCode: any, limitState: any) =>
      `/token/coupling/user/${userCode}/semester/${semesterCode}/limit/${limitState}`,
    PATH_GetTokenGenerate: (userCode: any, semesterCode: any) =>
      `/token/DS/user/${userCode}/semester/${semesterCode}`,
  },
  reportesEvaluacion: {
    PATH_GetResultTeacherEvaluation: (teacherCode: any) =>
      `/teacher/result/evaluation/${teacherCode}`,
    PATH_GetDocumentsAWSS3: (periodo: any, name: any) =>
      `/Utility/Document/AWSS3/${periodo}/${name}`,
    PATH_GetDownloadDocumentsAWSS3: `/Utility/Document/download`,
  },
  reporteTutorias: {
    PATH_GetTutoriasTeacher: (traCode: any) => `/teacher/tutorials/${traCode}`,
    PATH_GetTeacherNotesStudentTutoring: (clasCode: any, semCode: any) =>
      `/teacher/notes/student/${clasCode}/tutoring/${semCode}`,
    PATH_GetNotesStudentTutoring: (codAlu: any) =>
      `/notes/notes/student/${codAlu}/tutoring`,
    PATH_GetEmployeeLogin: (userName: any) => `/teacher/login/user/${userName}`,
  },
  cargaExamenes: {
    PATH_GetTeachersCorses: (UserID: string) =>
      `/ClassSchedule/teachers/${UserID}/courses/recuperation`,
    PATH_GetLoadedExams: (codeTeacher: any, classCode: any) =>
      `/teacher/loaded/${codeTeacher}/exams/${classCode}`,
    PATH_GetListClassNote: (classCode: any) => `/notes/class/${classCode}`,
    PATH_GetSemester: (classCode: any) => `/notes/semester/class/${classCode}`,
    PATH_GetAmountStudents: (semesterId: any, noteId: any, ClassCode: any) =>
      `/teacher/amount/students/${semesterId}/${noteId}/enrolled/${ClassCode}`,
    PATH_GetControlNotes: (semesterCode: any, notaCode: any, classCode: any) =>
      `/notes/control/semester/${semesterCode}/note/${notaCode}/class/${classCode}`,
    PATH_GetStateExams: (codeTeacher: any, noteId: any, ClassCode: any) =>
      `/teacher/state/exam/${codeTeacher}/${noteId}/${ClassCode}`,
    PATH_GetActiveExam: (codeTeacher: any, noteId: any, ClassCode: any) =>
      `/teacher/active/exams/${codeTeacher}/${noteId}/${ClassCode}`,
    PATH_PostTeacherInserExam: `teacher/insert/burden/exam`,
  },
  disponibilidadHorario: {
    PATH_GetHeadquartersBanners: (exclude: any) =>
      `/Utility/headquarters/banners/info/${exclude}`,
    PATH_GetSemesterUnitBusinessCode: (CodeHeadquarters: any) =>
      `/teacher/semester/unit/business/code/${CodeHeadquarters}`,
    PATH_GetTeacherAvailability: (action: any, user: any, day: any) =>
      `/teacher/teacher/availability/${action}/${user}/${day}`,
    PATH_PostCrudAvailability: `teacher/teacher/availability/crud`,
  },
  documentosManuales: {
    PATH_GetDocumentsTeacher: `/Utility/documents/teacher`,
    PATH_GetDownloadDocumentsAWSS3: `/Utility/Document/download`,
    PATH_GetManualsTeacher: `/Utility/manuals/teacher`,
  },
  evaluacionDocente: {
    PATH_GetAssessmentTeacher: `/Utility/assessment/teacher`,
    PATH_GetDownloadDocumentsAWSS3: `/Utility/Document/download`,
  },
  descansoTeacher: {
    PATH_GetSemesterSustitutory: (idSemester: string, codeteacher: string) =>
      `/WorkerTeacher/semester/${idSemester}/code/${codeteacher}`,
    PATH_GetSemesterTuesday: (idSemester: string, codeteacher: string) =>
      `WorkerTeacher/semesterTuesday/${idSemester}/code/${codeteacher}`,
    PATH_GetSemesterThursday: (
      idSemester: string,
      codeteacher: string,
      datetramit: string
    ) =>
      `/WorkerTeacher/semesterThursday/${idSemester}/code/${codeteacher}/date/${datetramit}`,
    PATH_GetTeacherBreak: (codeteacher: string) =>
      `/WorkerTeacher/break/${codeteacher}`,
    PATH_GetRequestWorker: (idSemester: string, codeteacher: string) =>
      `/WorkerTeacher/worker/${idSemester}/code/${codeteacher}`,
    PATH_GetSendEmail: (codeteacher: string) =>
      `/WorkerTeacher/sendMail/${codeteacher}`,
    PATH_Put_UpdateDateWorker: '/WorkerTeacher/state',
    PATH_Post_SaveTempTableWorkerTeacher: '/WorkerTeacher/SaveTemple',
    PATH_Post_RegisterRequestsWorkerTeacher: '/WorkerTeacher/state',
  },
  soporteVirtual: {
    PATH_docenteConsulta: (teacherCode: string) =>
      `/TeacherAttendance/Queries/teachers/${teacherCode}`,
    PATH_tipos: (type: string, action: string) =>
      `/TeacherAttendance/teachers/SubType/${type}/${action}`,
    PATH_INSERT: `/TeacherAttendance/teachers/Query/`,
    PATH_GETFILE: (studentCode: string, assesor: string) =>
      `/TeacherAttendance/FileContact/${studentCode}/teachers/${assesor}/`,
    PATH_HISTORY: (teacherCode: string, idQuery: string) =>
      `/TeacherAttendance/Queries/teachers/${teacherCode}/History/${idQuery}`,
    PATH_download: `common/download`,
    PATH_REQUEST: `/TeacherAttendance/Queries/teachers/CSE`,
    PATH_GETANEXOS: (teacherCode: string, studentCode: string) =>
      `/TeacherAttendance/Queries/teachers/${studentCode}/History/Anexos/${teacherCode}`,
    PATH_INSERT_IMG: `/teacher/insert/query/cse/annexes`,
    PATH_DELETE_AWS: `/Utility/delete/file/s3`,
    PATH_CLEAN: `/teacher/clean/annexes/queries/cse`,
  },
  registroModificacionNotas: {
    PATH_listado: (teacherCode: string) =>
      `/notes/request/change/${teacherCode}/note`,
    PATH_GetTeachersCorses: (UserID: string) =>
      `/ClassSchedule/teachers/${UserID}/courses/recuperation`,
    PATH_listStudent: (classCode: string, noteId: string) =>
      `/notes/student/${classCode}/note/${noteId}`,
    PATH_reason: `/notes/modification/type/note`,
    PATH_cancel: `/notes/cancel/request/change/note`,
    PATH_register: `/notes/record/request/change/note`,
    PATH_validationNotes: `/notes/validate/registered/note`,
    PATH_validationPlazo: (
      classCode: string,
      carCode: string,
      semCode: string,
      sedCode: string,
      noteId: string
    ) =>
      `/notes/request/record/validation/${classCode}/${carCode}/${semCode}/${sedCode}/${noteId}`,
    PATH_detail: (RequestId: string) =>
      `/notes/detail/request/${RequestId}/change/note`,
    PATH_emailsCC: (classCode: string) => `/notes/email/cc/${classCode}`,
    PATH_emailsDAS: (sedCode: string) => `/notes/email/das/${sedCode}`,
  },
  autenticacionPA_AU: {
    PATH_PA_AU_App: `/token/PA_AU`,
    PATH_GET_PA_AU_App: (codeUser: string, codeApp: string, pageName: string) =>
      `/token/PA_AU/codeuser/${codeUser}/app/${codeApp}/page/${pageName}`,
    PATH_PA_AU_Group: (groupName: string) => `/token/PA_AU/group/${groupName} `,
    PATH_PA_AU_Parameters: (sedCode: string, paramName: string) =>
      `/token/PA_AU/sede/${sedCode}/parameteres/${paramName}`,
    PATH_PA_AU_User: (codeUser: string) => `/token/PA_AU/user/${codeUser} `,
  },
}
