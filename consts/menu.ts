// import { get } from 'local-storage'
// import { SET_DATA_DOCENTE } from './storageConst'
// const dataUser: any = get(SET_DATA_DOCENTE)
export const menuDefault = [
  {
    label: 'Sesiones de clase',
    link: '#',
    child: [
      {
        label: 'Horario',
        link: '/horario',
        child: [],
        target: false,
      },
      {
        label: 'Para Hoy',
        link: `/default`,
        child: [],
        target: false,
      },
      {
        label: 'Solicitud de marcación',
        link: '/solicitud-de-marcacion',
        child: [],
        target: false,
      },
      {
        label: 'Abiertas',
        link: '/sesiones-abiertas',
        child: [],
        target: false,
      },
      {
        label: 'Anteriores',
        link: '/sesiones-anteriores',
        child: [],
        target: false,
      },
      {
        label: 'Recuperar/Adelantar clases',
        link: '/recuperar-adelantar',
        child: [],
        target: false,
      },
      {
        label: 'Registrar Delegado',
        link: '/registrar-delegado',
        child: [],
        target: false,
      },
      {
        label: 'Gestor Prácticas de Campo',
        link: '/practicas-campo',
        child: [],
        target: false,
      },
      {
        label: 'Gestor Tesis de Investigación',
        link: '/tesis-investigacion',
        child: [],
        target: false,
      },
      {
        label: 'Gestor Consulta Documentos',
        link: '/consulta-documentos',
        child: [],
        target: false,
      },
      /* {
        label: 'Asistencia',
        link: '/asistencia',
        child: [],
        target: false,
      }, */
    ],
  },
  {
    label: 'Registro de notas',
    link: '#',
    child: [
      {
        label: 'Ingreso de Notas',
        link: '/registro-de-notas',
        child: [],
        target: false,
      },
      {
        label: 'Evaluación de Competencias',
        link: '/evaluacion-de-competencias',
        child: [],
        target: false,
      },
      {
        label: 'Enviar Notas a S.A.',
        link: '/enviar-notas',
        child: [],
        target: false,
      },
      {
        label: 'Logs de Creacion de Token de Notas',
        link: '/logs-creacion',
        child: [],
        target: false,
      },
      {
        label: 'Solicitud de modificacion de notas',
        link: '/solicitud-de-modificacion',
        child: [],
        target: false,
      },
    ],
  },
  {
    label: 'Reportes',
    link: '#',
    child: [
      {
        label: 'Reportes Académicos',
        link: '/reportes-academicos',
        child: [],
        target: false,
      },
      {
        label: 'Reportes de evaluación a docente',
        link: '/reportes-evaluacion-docente',
        child: [],
        target: false,
      },
      {
        label: 'Tutorías',
        link: '/tutorias',
        child: [],
        target: false,
      },
    ],
  },
  {
    label: 'Herramientas',
    link: '#',
    child: [
      {
        label: 'Bibliotecas Virtuales',
        link: 'http://biblioteca.upn.edu.pe/',
        child: [],
        target: true,
      },
      {
        label: 'Correo Administrativo',
        link: 'https://www.office.com',
        child: [],
        target: true,
      },
      {
        label: 'Carga de Examenes',
        link: '/carga-examenes',
        child: [],
        target: false,
      },
      {
        label: 'Registro de día de descanso',
        link: '/docentes-descanso',
        child: [],
        target: false,
      },
      {
        label: 'Disponibilidad Horaria',
        link: '/disponibilidad-horario',
        child: [],
        target: false,
      },
      {
        label: 'Soporte Virtual UPN',
        link: '/soporte-virtual',
        child: [],
        target: false,
      },
      {
        label: 'Veritrade',
        link: 'https://business2.veritradecorp.com/es/referido?IdUsuario=146214',
        child: [],
        target: true,
      },
      {
        label: 'Reservas Online',
        link: 'https://upn.u-planner.com/app/suite/inicio',
        child: [],
        target: true,
      },
    ],
  },
  {
    label: 'Documentos',
    link: '#',
    child: [
      {
        label: 'Modelo educativo',
        link: 'https://intranetcert.upn.edu.pe/academico/Secure/ModeloEduc.aspx',
        child: [],
        target: true,
      },
      {
        label: 'Reglamentos',
        link: 'https://www.upn.edu.pe/transparencia/reglamentos',
        child: [],
        target: true,
      },
      {
        label: 'Documentos / Manuales',
        link: '/documentos-manuales',
        child: [],
        target: false,
      },
      {
        label: 'Evaluación del desempeño docente',
        link: '/evaluacion-docente',
        child: [],
        target: false,
      },
    ],
    target: false,
  },
]
