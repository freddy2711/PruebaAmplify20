(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9979,3242,9038,6316,4716],{65144:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solicitud-de-marcacion/AsistenciaSolicitud",function(){return n(38698)}])},84555:function(e,t,n){"use strict";var a=n(85893),r=n(94184),s=n.n(r),i=n(72169),o=n.n(i),c=n(95821),l=o(),u=function(e){var t=e.children,n=e.type,r=e.classname,i=e.variant,u=e.size,d=e.disabled,f=e.onclick,h=e.name,p="btn-".concat(void 0===i?"btn-default":i),m=s()("btn",p,(0,c.IO)(o(),void 0===r?"":r),l[void 0===u?"medium":u]);return(0,a.jsx)("button",{name:h,type:void 0===n?"button":n,className:m,onClick:f,disabled:void 0!==d&&d,children:void 0===t?"Guardar":t})};t.Z=u},57870:function(e,t,n){"use strict";var a=n(85893),r=n(94184),s=n.n(r),i=n(15605),o=n.n(i)(),c=function(e){var t=e.classname,n=void 0===t?"":t,r=e.children,i=e.idFor,c=s()(o[n]?o[n]:n);return(0,a.jsx)("label",{htmlFor:i,className:c,children:void 0===r?"label text":r})};t.Z=c},14143:function(e,t,n){"use strict";var a=n(85893),r=n(94184),s=n.n(r),i=n(68258),o=n(95821),c=n(54740),l=n.n(c),u=function(e){var t=e.id,n=e.classname,r=e.name,c=e.value,u=e.disabled,d=e.children,f=e.onChange,h=e.defaultValue,p=e.onClick,m=s()("form-control",(0,o.IO)(l(),void 0===n?"":n));return(0,a.jsx)(i.Z.Select,{id:t,className:m,name:r,disabled:void 0!==u&&u,value:c,onChange:f,defaultValue:h,onClick:p,children:d})};t.Z=u},63242:function(e,t,n){"use strict";n.r(t);var a=n(85893);n(67294);var r=function(e){var t=e.children;return(0,a.jsx)("tbody",{children:t})};t.default=r},89038:function(e,t,n){"use strict";n.r(t);var a=n(85893);n(67294);var r=n(79329),s=n.n(r),i=function(e){var t=e.children;return(0,a.jsx)("thead",{className:s().thead,children:(0,a.jsx)("tr",{children:t})})};t.default=i},24481:function(e,t,n){"use strict";var a=n(85893);n(67294);var r=n(17294),s=n.n(r),i=n(75147),o=n(95821),c=function(e){var t=e.children,n=e.classname,r=e.stripe,c=(0,o.IO)(s(),void 0===n?"":n);return(0,a.jsx)(i.Z,{striped:void 0===r||r,className:"".concat(c," ").concat(s().tablaDefault),children:t})};t.Z=c},44370:function(e,t,n){"use strict";n.d(t,{Hs:function(){return h},Sn:function(){return m},p4:function(){return p}});var a,r,s,i=n(34727),o=n(70655),c=n(42222),l=n(86455),u=n.n(l),d=n(98521),f=n(69706),h=(a=(0,i.Z)(function(){var e,t,n,a,r,s,i,l,h,p,m,x,b;return(0,o.__generator)(this,function(t){switch(t.label){case 0:return r=(0,c.get)(f.K6),s=(0,c.get)(f.zw),i=(0,c.get)(f.ay),l="1",(0,c.get)(f.wk),h=(0,c.get)(f.x),[4,d.az.AsistenciaEnFechasControl(h)];case 1:return p=t.sent(),[4,d.az.puedeCerrar(h)];case 2:return m=t.sent(),[4,d.az.getClaseDetalle(i,"CIERRE_SIN_ASIST")];case 3:if(x=t.sent(),console.log("PERMITIRRRRR____: ",x),console.log("PUEDEEEE____: ",m),console.log("AFC____:",p),!("A"!==s))return[3,10];if(p)return[3,7];if(!(x&&m))return[3,5];return[4,d.az.terminaSesionSolicitud(h,r,l)];case 4:return t.sent(),n=!0,[3,6];case 5:u().fire({title:"Portal de Docentes",text:"Antes de cerrar la sesi\xf3n debe registrar la asistencia de alumnos",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),t.label=6;case 6:return[3,9];case 7:return[4,d.az.terminaSesionSolicitud(h,r,l)];case 8:t.sent(),n=!0,t.label=9;case 9:return[3,12];case 10:return[4,d.az.terminaSesionSolicitud(h,r,l)];case 11:t.sent(),n=!0,t.label=12;case 12:if("R"!==e)return[3,14];return b={recoveryId:(0,c.get)(f.wk),states:"E",user:r},[4,d.az.actualizaRecuperacionEstado(b)];case 13:t.sent(),t.label=14;case 14:return[2,n]}})}),function(){return a.apply(this,arguments)}),p=(r=(0,i.Z)(function(e,t){var n,a,r,s,i,l,u,h,p,m,x,b,g,v,_;return(0,o.__generator)(this,function(o){switch(o.label){case 0:n=(0,c.get)(f.K6),o.label=1;case 1:return o.trys.push([1,5,,6]),[4,d.az.listarCorreo_Solicitud(e,t)];case 2:return a=o.sent(),[4,d.az.trabajador(n)];case 3:return r=o.sent(),s=a.data,l=(i=r.data).lastName,u=i.middleLastName,h=i.name,p=i.email,m=(0,c.get)(f.uo),x=(0,c.get)(f.bo),g={EmailList:[s,p],DisplayName:"UPN Docentes",Subject:"Portal Docentes - Ingreso de Solicitud de Marcaci\xf3n",IsHtml:!0,ReplyToList:[p],AttachmentB64:null,AttachmentName:null,NotificationType:1,EmailListCC:null,EmailListBCC:null,Queue:!0,Body:"\n          <div>\n          <p>Estimado(s) Se\xf1or(es):</p>\n          <br/>\n          <p>Les informamos que se ingresado una nueva Solicitud de Marcaci\xf3n a trav\xe9s del Portal Docente.</p>\n          <br/>\n          <p>A continuaci\xf3n detallamos los datos de la solicitud:</p>\n          <br/>\n          <p>Docente : ".concat(h," ").concat(l," ").concat(u," </p>\n          <p>Clase No Marcada : ").concat(t,"</p>\n          <p>Fecha : ").concat(x,"</p>\n          <p>Motivo : ").concat(m,"</p>\n          </div>\n        ")},[4,d.az.email(g)];case 4:if(v=o.sent(),console.log("emailResp",v),"OK"===v||"200"===v)return[2,!0];return[3,6];case 5:return _=o.sent(),console.log(_),[3,6];case 6:return[2]}})}),function(e,t){return r.apply(this,arguments)}),m=(s=(0,i.Z)(function(){var e,t,n,a,r,s,i,l,h,p,m,x,b,g,v,_,C,y,j;return(0,o.__generator)(this,function(o){switch(o.label){case 0:if(e=(0,c.get)(f.vC),t=(0,c.get)(f.zw),n=(0,c.get)(f.ay),a=(0,c.get)(f.x),s=r=(0,c.get)(f.K6),l=(0,c.get)(f.wk),!("A"!==t))return[3,10];return[4,d.az.AsistenciaEnFechasControl(a)];case 1:return h=o.sent(),[4,d.az.puedeCerrar(a)];case 2:return p=o.sent(),[4,d.az.getClaseDetalle(n,"CIERRE_SIN_ASIST")];case 3:if(m=o.sent(),h)return[3,7];if(!(m&&p))return[3,5];return[4,d.az.terminaSesion(a,s)];case 4:return x=o.sent(),console.log("terminaSesion__",x.data.Status),i=!!x.data.Status,[3,6];case 5:i=!1,u().fire({title:"Portal de Docentes",text:"Antes de cerrar la sesi\xf3n debe registrar la asistencia de alumnos.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),o.label=6;case 6:return[3,9];case 7:return[4,d.az.terminaSesion(a,s)];case 8:g=o.sent(),console.log("terminaSesion__",g.data.Status),i=!!g.data.Status,o.label=9;case 9:return[3,12];case 10:return[4,d.az.terminaSesion(a,s)];case 11:_=o.sent(),console.log("terminaSesion__",_.data.Status),i=!!_.data.Status,o.label=12;case 12:if("R"!==e)return[3,14];return y={recoveryId:l,states:"E",user:r},[4,d.az.actualizaRecuperacionEstado(y)];case 13:j=o.sent(),console.log("actualizaRecuperacionEstado__",j),o.label=14;case 14:return[2,i]}})}),function(){return s.apply(this,arguments)})},34365:function(e,t,n){"use strict";n.d(t,{X0:function(){return _}});var a,r,s,i,o,c=n(34727),l=n(70655),u=n(42222),d=n(11163),f=n.n(d),h=n(69706),p=n(89e3),m=n(98521),x=(a=(0,c.Z)(function(e){var t,n,a,r,s,i,o,c,d;return(0,l.__generator)(this,function(l){switch(l.label){case 0:if(t=(0,u.get)(h.FD),!(void 0===(n=(0,u.get)(h.K6))||null===n))return[3,2];return[4,m.Vu.DatosUsuario(t)];case 1:if(r=l.sent(),void 0===(0,h.nt)(r,e))return[2];n=null===(a=r[0])||void 0===a?void 0:a.userName,l.label=2;case 2:return s=(0,u.get)(h.tp),i=window.location,o={codeUser:n,codeApp:h.dU,pageName:i.pathname.replace("/","")},[4,m.Ex.ByPA_AU_User(o)];case 3:if(c=l.sent(),void 0===(0,h.nt)(c,e))return[2];if(!(c.length<=0))return[3,5];return[4,(0,p.Z)({title:h._z,text:h.fR,confirmButtonText:"Ok"})];case 4:if(l.sent())return window.location.href="".concat("https://identidaddes.upn.edu.pe/api/Usuario/SignInSaml2?appcode=DOCEN&redirect=").concat("http://localhost:450/default"),[2,!0];l.label=5;case 5:if(null!=s)return[3,7];return[4,b(c,e)];case 6:l.sent(),l.label=7;case 7:return"permisos"!==o.pageName&&g(o,e),[2,!1]}})}),function(e){return a.apply(this,arguments)}),b=(r=(0,c.Z)(function(e,t){var n,a,r,s;return(0,l.__generator)(this,function(i){switch(i.label){case 0:n=[],a=0,i.label=1;case 1:if(!(a<e.length))return[3,4];return r=e[a].groupName,[4,m.Ex.ByPA_AU_Group(r)];case 2:if(s=i.sent(),void 0===(0,h.nt)(s,t))return[2];void 0!==s[0]&&n.push(s[0]),i.label=3;case 3:return a++,[3,1];case 4:return(0,u.set)(h.tp,n),[2]}})}),function(e,t){return r.apply(this,arguments)}),g=(s=(0,c.Z)(function(e,t){var n,a;return(0,l.__generator)(this,function(a){switch(a.label){case 0:return[4,m.Ex.ByPA_AU_App(e)];case 1:if(n=a.sent(),void 0===(0,h.nt)(n,t))return[2];if("0"!==n[0].groupId)return[3,3];return t(!1),[4,(0,p.Z)({title:h._z,text:h.Nl,confirmButtonText:"Ok"})];case 2:if(a.sent())return window.location.href="".concat("http://localhost:450/permisos"),[2,!0];return[2,!1];case 3:return[2]}})}),function(e,t){return s.apply(this,arguments)}),v=(i=(0,c.Z)(function(e){var t,n,a,r,s;return(0,l.__generator)(this,function(t){switch(t.label){case 0:return n={token:(0,u.get)(h.o3),userCode:(0,u.get)(h.FD),classCode:(0,u.get)(h.FD)},[4,m.Ex.ByTokenValidate(n)];case 1:if((null==(a=t.sent())?void 0:a.tokenId)!==void 0)return[3,4];if((0,u.remove)(h.o3),(0,u.remove)(h.FD),(0,u.remove)(h._0),!(null===(r=(0,u.get)(h.FD))||void 0===r||""===r))return[3,3];return e(!1),localStorage.clear(),[4,(0,p.Z)({title:h._z,text:h.pD,confirmButtonText:"Ok"})];case 2:if(t.sent())return window.location.href="".concat("https://identidaddes.upn.edu.pe/api/Usuario/SignInSaml2?appcode=DOCEN&redirect=").concat("http://localhost:450/default"),[2,!0];t.label=3;case 3:return[3,5];case 4:return[2,!1];case 5:return[2]}})}),function(e){return i.apply(this,arguments)}),_=(o=(0,c.Z)(function(e,t){var n,a;return(0,l.__generator)(this,function(r){switch(r.label){case 0:return t(!0),[4,v(t)];case 1:return n=r.sent(),[4,x(t)];case 2:return a=r.sent(),console.log("rs0",a),t(!1),""===e||n||f().push(e),[2,n]}})}),function(e,t){return o.apply(this,arguments)})},38698:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return D}});var a=n(34727),r=n(70655),s=n(85893),i=n(67294),o=n(84555),c=n(57870),l=n(63242),u=n(89038),d=n(24481),f=n(27201),h=n(3292),p=n.n(h),m=n(5152),x=n.n(m),b=n(42222),g=n(86455),v=n.n(g),_=n(30381),C=n.n(_),y=n(98521),j=n(34365),S=n(44370),N=n(95821),R=n(69706),w=n(14143),A=x()(function(){return Promise.all([n.e(8620),n.e(223)]).then(n.bind(n,50223))},{loadableGenerated:{webpack:function(){return[50223]}},ssr:!1}),E=function(e){var t,n=e.ip,h=(0,i.useState)([]),m=h[0],x=h[1],g=(0,i.useState)(""),_=g[0],E=g[1],D=(0,i.useState)(!1),T=D[0],I=D[1],F=(0,i.useState)(!0),Z=F[0],z=F[1],B=(0,i.useState)(""),M=B[0],k=B[1],Y=(0,b.get)(R.EG),$=null==Y?void 0:Y.userName,P=""===(0,b.get)(R.gi)||null===(0,b.get)(R.gi)||void 0===(0,b.get)(R.gi)?0:(0,b.get)(R.gi),O=(0,i.useState)({btnActivar:!1,btnFinSesion:!0,btnRegresar:!1}),U=O[0],L=O[1],V=(0,i.useState)({btnActivar:!0,btnFinSesion:!1,btnRegresar:!1}),H=V[0],K=V[1],X=function(e){var t=e.split("T"),n="".concat(t[0]," ").concat(t[1]);return C()(n,"YYYY-MM-DDTHH:mm:ss").format("HH:mm")};(0,i.useEffect)(function(){I(!0),1===P&&k("Regularizar marcaci\xf3n de clase abierta");var e,t,n,s=(e=(0,a.Z)(function(){var e,t,n,a,s;return(0,r.__generator)(this,function(n){switch(n.label){case 0:if(!(null!==(0,b.get)(R.BJ)))return[3,4];e=JSON.parse((0,b.get)(R.BJ)),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,y.nM.detailClass(e)];case 2:return t=n.sent().data,E((0,b.get)(R.QA)),(a=t.detail)[0].hoursIni=X(a[0].hoursIni),a[0].hoursEnd=X(a[0].hoursEnd),x(a),[3,4];case 3:return s=n.sent(),console.log(s),I(!1),[3,4];case 4:return[2]}})}),function(){return e.apply(this,arguments)}),i=(t=(0,a.Z)(function(){var e,t,n,a,s,i,o,c,l,u,d,f,h,p;return(0,r.__generator)(this,function(e){switch(e.label){case 0:t=JSON.parse((0,b.get)(R.BJ)),a=""===(n=(0,b.get)(R.x))||void 0===n?0:n,1===parseInt((0,b.get)(R.d0))&&("A"===t.CoclTypeTeacher?(L({btnActivar:!0,btnFinSesion:!0,btnRegresar:!1}),v().fire({title:"Portal de Docentes",text:"Los docentes auxiliares no pueden registrar asistencia de alumnos. Ud. solo podr\xe1 marcar el t\xe9rmino de su sesi\xf3n de clase.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"})):L({btnActivar:!1,btnFinSesion:!1,btnRegresar:!1})),i=t.teacherUser,$.toUpperCase()!==i.toUpperCase()&&v().fire({title:"Portal de Docentes",text:"Las sesiones de clase solo pueden ser modificadas por el docente ".concat(i.toUpperCase()),icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),e.label=1;case 1:return e.trys.push([1,3,,4]),c=t.ClassRoomCode?t.ClassRoomCode:"null",l=C()(t.HoursDate,"DD-MM-YYYY").format("YYYY-MM-DD"),[4,y.nM.cheAsisAlum(c,a,l)];case 2:return o=e.sent().data,[3,4];case 3:return d=e.sent(),console.log(d),[3,4];case 4:0===parseInt(o)&&(L({btnActivar:!1,btnFinSesion:!0,btnRegresar:!0}),K({btnActivar:!0,btnFinSesion:!1,btnRegresar:!1})),e.label=5;case 5:return e.trys.push([5,7,,8]),[4,y.az.getClaseDetalle(t.ClaCode,"CIERRE_SIN_ASIST")];case 6:return f=e.sent().data,[3,8];case 7:return p=e.sent(),console.log(p),[3,8];case 8:return 1===parseInt(f)?z(!1):v().fire({title:"Portal de Docentes",text:"El sistema ha detectado que aun no registra la asistencia de los estudiantes",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),I(!1),[2]}})}),function(){return t.apply(this,arguments)});(n=(0,a.Z)(function(){return(0,r.__generator)(this,function(e){switch(e.label){case 0:return[4,s()];case 1:return e.sent(),[4,i()];case 2:return e.sent(),[2]}})}),function(){return n.apply(this,arguments)})()},[]);var q,Q=(t=(0,a.Z)(function(e,t){var n;return(0,r.__generator)(this,function(n){switch(n.label){case 0:return[4,(0,S.Hs)()];case 1:if(!n.sent())return[3,3];return[4,(0,S.p4)(e,t)];case 2:n.sent(),(0,b.set)(R.eN,"1"),n.label=3;case 3:return window.location.href="/solicitud-de-marcacion",[2]}})}),function(e,n){return t.apply(this,arguments)}),G=(q=(0,a.Z)(function(){var e,t,a,s,i,o,c,l,u,d,f,h,p,x,g,w,A,E,D,T,F,Z,z,B,k,Y,P,O,U,V,H,K,X,q,G,J,W;return(0,r.__generator)(this,function(r){switch(r.label){case 0:if(I(!0),(0,b.set)(R.tl,R.Pw),t=(e=m[0]).CoclNrDay,a=e.HoursDate,s=e.ClaCode,i=e.ClassRoomCode,o=e.FechahoursIni,c=e.FechahoursEnd,l=e.hoursIni,u=e.hoursEnd,d=e.CoclTypeTeacher,""===M)return L({btnActivar:!1,btnFinSesion:!1,btnRegresar:!0}),v().fire({title:"Portal de Docentes",text:"Debe seleccionar un motivo para poder regularizar su marcaci\xf3n",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),I(!1),[2];(0,b.set)(R.uo,M),f={teacherCode:"".concat(_),nrodia:t,date:C()(a,"DD/MM/YYYY").format("YYYY-MM-DD"),classCode:s,classroom:i,user:$,beginning:l.replace("T"," "),finish:u.replace("T"," ")},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,y.nM.getSesionesDocenteSolicitarValidar(f)];case 2:return h=r.sent().data,[3,4];case 3:return x=r.sent(),console.log(x),[3,4];case 4:if(!(h.length>0))return[3,27];if(g=h[0].ClaseId,(0,b.set)(R.x,g),"A"!==(0,b.get)(R.sv))return[3,26];return[4,y.nM.sesionesAsistenciaSolicitarValidar(g,s)];case 5:if(!(r.sent().data.detail>0))return[3,14];r.label=6;case 6:return r.trys.push([6,8,,9]),D={classId:g,nrodia:t,classroomCode:i,updateUser:null,classBeginning:o.replace("T"," "),classFinish:c.replace("T"," "),observations:M},[4,y.nM.actualizaSesionAbiertaSolicitud(D)];case 7:return r.sent(),[3,9];case 8:return T=r.sent(),console.log(T),[3,9];case 9:return r.trys.push([9,11,,12]),[4,y.nM.endSesion(g,$,"1")];case 10:return r.sent(),[3,12];case 11:return F=r.sent(),console.log(F),[3,12];case 12:return[4,(0,S.p4)(g,s)];case 13:return r.sent(),(0,b.set)(R.eN,"1"),(0,j.X0)("/solicitud-de-marcacion",I),[3,26];case 14:return r.trys.push([14,16,,17]),Z={classId:g,nrodia:t,classroomCode:i,updateUser:null,classBeginning:o.replace("T"," "),classFinish:c.replace("T"," "),observations:M},[4,y.nM.actualizaSesionAbiertaSolicitud(Z)];case 15:return r.sent(),[3,17];case 16:return z=r.sent(),console.log(z),[3,17];case 17:return r.trys.push([17,19,,20]),[4,y.az.getClaseDetalle(s,"CIERRE_SIN_ASIST")];case 18:return B=r.sent().data,[3,20];case 19:return Y=r.sent(),console.log(Y),[3,20];case 20:if(1!==parseInt(B))return[3,25];r.label=21;case 21:return r.trys.push([21,23,,24]),[4,y.nM.endSesion(g,$,"1")];case 22:return r.sent(),[3,24];case 23:return P=r.sent(),console.log(P),[3,24];case 24:return(0,b.set)(R.eN,"1"),(0,j.X0)("/solicitud-de-marcacion",I),[3,26];case 25:(0,j.X0)("/solicitud-de-marcacion/TomarAsistencia",I),r.label=26;case 26:return[3,38];case 27:return r.trys.push([27,29,,30]),[4,y.az.getClaseDetalle(s,"CIERRE_SIN_ASIST")];case 28:return O=r.sent().data,[3,30];case 29:return V=r.sent(),console.log(V),[3,30];case 30:if(console.log("PemitirCerrarSesionSinAsistenciaEstudiante",O),1!==parseInt(O))return[3,35];r.label=31;case 31:return r.trys.push([31,33,,34]),H={classCode:s,traCode:_,nrodia:t,classroomCode:i,teacherType:d,date:C()(a,"DD/MM/YYYY").format("YYYY-MM-DD"),typeClass:"S",createUser:$,observations:M,starCclass:o.replace("T"," "),endClass:c.replace("T"," "),ip:n},[4,y.nM.insertar(H)];case 32:return K=r.sent(),(0,b.set)(R.x,K.data.controlClass),[2];case 33:return X=r.sent(),console.log(X),[3,34];case 34:return Q((0,b.get)(R.x),s),[3,38];case 35:return r.trys.push([35,37,,38]),G={classCode:s,traCode:_,nrodia:t,classroomCode:i,teacherType:d,date:C()(a,"DD/MM/YYYY").format("YYYY-MM-DD"),typeClass:"S",createUser:$,observations:M,starCclass:o.replace("T"," "),endClass:c.replace("T"," "),ip:n},[4,y.nM.insertar(G)];case 36:return J=r.sent(),(0,b.set)(R.x,J.data.controlClass),(0,j.X0)("/asistencia",I),[3,38];case 37:return W=r.sent(),(0,N.Uw)(W),[3,38];case 38:return I(!1),[2]}})}),function(){return q.apply(this,arguments)}),J=function(e){k(e.target.value)};return(0,s.jsxs)("div",{className:p().contenido,children:[(0,s.jsx)(f.Z,{loading:T}),(0,s.jsxs)("div",{className:p().content,children:[(0,s.jsx)("div",{className:p().titulo,children:(0,s.jsx)(c.Z,{classname:"text-warning h5 mt-3 mb-3",children:"Registro de asistencia"})}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:p().alertaContent,children:(0,s.jsx)(A,{classname:"w-100",variant:"info",children:(0,s.jsxs)("p",{className:"mb-0",children:[(0,s.jsx)("b",{children:"Nota:"})," \xa0Por defecto todos los estudiantes no registran ning\xfan estado de asistencia (Asistencia = N). S\xf3lo cuando haya registrado la asistencia de los estudiantes se proceder\xe1 a enviar la solicitud."]})})}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:p().tablaRA,children:(0,s.jsxs)(d.Z,{classname:"tablaRA",children:[(0,s.jsx)(u.default,{children:(0,s.jsx)("th",{scope:"col",colSpan:2,children:"DATOS DE LA SESI\xd3N DE CLASE"})}),(0,s.jsx)(l.default,{children:m.map(function(e,t){return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"w-50",children:"Sede"}),(0,s.jsx)("td",{children:e.SedCode})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Nombre del curso"}),(0,s.jsx)("td",{children:e.CurName})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Clase"}),(0,s.jsx)("td",{children:e.ClaCode})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Due\xf1o de la sesi\xf3n de clase"}),(0,s.jsx)("td",{children:_})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Tipo de docente"}),(0,s.jsx)("td",{children:e.CoclTypeTeacher})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Tope de faltas"}),(0,s.jsx)("td",{children:" "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Fecha y hora de inicio"}),(0,s.jsx)("td",{children:e.hoursIni})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Fecha y hora de t\xe9rmino"}),(0,s.jsx)("td",{children:e.hoursEnd})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Tipo de sesi\xf3n"}),(0,s.jsx)("td",{children:" "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Motivo"}),(0,s.jsx)("td",{children:(0,s.jsxs)(w.Z,{id:"motivo",classname:"w-75",onChange:function(e){return J(e)},defaultValue:1===P?"Regularizar marcaci\xf3n de clase abierta":"",disabled:1===P,children:[(0,s.jsx)("option",{value:"",children:"Seleccione un motivo"}),(0,s.jsx)("option",{value:"Bloqueo de cuenta de usuario",children:"Bloqueo de cuenta de usuario"}),(0,s.jsx)("option",{value:"Docente nuevo, no contaba con accesos",children:"Docente nuevo, no contaba con accesos"}),(0,s.jsx)("option",{value:"Problemas t\xe9cnicos del equipo",children:"Problemas t\xe9cnicos del equipo"}),(0,s.jsx)("option",{value:"Clases fuera de campo",children:"Clases fuera de campo"}),(0,s.jsx)("option",{value:"No estaba programada la clase en el sistema",children:"No estaba programada la clase en el sistema"}),(0,s.jsx)("option",{value:"No hab\xeda fluido el\xe9ctrico",children:"No hab\xeda fluido el\xe9ctrico"}),(0,s.jsx)("option",{value:"Problemas de conectividad",children:"Problemas de conectividad"}),(0,s.jsx)("option",{value:"Regularizar marcaci\xf3n de clase abierta",children:"Regularizar marcaci\xf3n de clase abierta"})]})})]})]},t)})})]})}),(0,s.jsx)("div",{className:p().botones,children:(0,s.jsxs)("div",{children:[H.btnActivar&&(0,s.jsx)(o.Z,{type:"button",classname:"mx-2",variant:"primary",onclick:G,disabled:U.btnActivar,children:Z?"Tomar asistencia":"Enviar Solicitud"}),H.btnFinSesion&&(0,s.jsx)(o.Z,{type:"button",classname:"mx-2",variant:"primary",onclick:G,disabled:U.btnFinSesion,children:"Fin Sesion"}),H.btnRegresar&&(0,s.jsx)(o.Z,{type:"button",classname:"mx-2",variant:"secondary",onclick:function(){},disabled:U.btnRegresar,children:"Regresar"})]})})]})]})};E.title="Registro de asistencia - Portal Docentes";var D=!0;t.default=E},72169:function(e){e.exports={small:"button_small__7bbNh",medium:"button_medium__a2eos",large:"button_large__A_BJ0",primary:"button_primary__2xniq",secondary:"button_secondary__3F83R"}},15605:function(){},54740:function(){},79329:function(e){e.exports={thead:"Thead_thead__qsmQk"}},17294:function(e){e.exports={default:"Tabla_default__ybIIM",tablaDefault:"Tabla_tablaDefault__9oIqO",tablaRA:"Tabla_tablaRA__s2Qg1"}},3292:function(e){e.exports={header:"RegistroAsistencia_header__dc3px",content:"RegistroAsistencia_content__Q5HQp",title:"RegistroAsistencia_title____fV7",headerContent:"RegistroAsistencia_headerContent__n8PQy",tBodyCenter:"RegistroAsistencia_tBodyCenter__SdwN4",navbr:"RegistroAsistencia_navbr__s6Cxg",contenido:"RegistroAsistencia_contenido__UsR4M",titulo:"RegistroAsistencia_titulo__RLkWX",alertaContent:"RegistroAsistencia_alertaContent__RcrL3",btnTextContent:"RegistroAsistencia_btnTextContent__IQh2S",rowButtons:"RegistroAsistencia_rowButtons__tPH56",tablaRA:"RegistroAsistencia_tablaRA__1VSP5",botones:"RegistroAsistencia_botones__AL8ml",footer:"RegistroAsistencia_footer__nznMv",contentFooter:"RegistroAsistencia_contentFooter__35_b6",spacingAsisten:"RegistroAsistencia_spacingAsisten__APdMj"}},11163:function(e,t,n){e.exports=n(90387)},53439:function(e,t,n){"use strict";n.d(t,{Ed:function(){return s},UI:function(){return r},XW:function(){return i}});var a=n(67294);function r(e,t){let n=0;return a.Children.map(e,e=>a.isValidElement(e)?t(e,n++):e)}function s(e,t){let n=0;a.Children.forEach(e,e=>{a.isValidElement(e)&&t(e,n++)})}function i(e,t){return a.Children.toArray(e).some(e=>a.isValidElement(e)&&e.type===t)}},43818:function(e,t,n){"use strict";var a=n(94184),r=n.n(a),s=n(67294),i=n(45697),o=n.n(i),c=n(85893);let l={type:o().string,tooltip:o().bool,as:o().elementType},u=s.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:a=!1,...s},i)=>(0,c.jsx)(e,{...s,ref:i,className:r()(t,`${n}-${a?"tooltip":"feedback"}`)}));u.displayName="Feedback",u.propTypes=l,t.Z=u},74119:function(e,t,n){"use strict";var a=n(94184),r=n.n(a),s=n(67294),i=n(96986),o=n(76792),c=n(85893);let l=s.forwardRef(({bsPrefix:e,className:t,children:n,controlId:a,label:s,...l},u)=>(e=(0,o.vE)(e,"form-floating"),(0,c.jsxs)(i.Z,{ref:u,className:r()(t,e),controlId:a,...l,children:[n,(0,c.jsx)("label",{htmlFor:a,children:s})]})));l.displayName="FloatingLabel",t.Z=l},68258:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var a=n(94184),r=n.n(a),s=n(45697),i=n.n(s),o=n(67294),c=n(6316),l=n(94716),u=(0,n(75528).Z)("form-floating"),d=n(96986);n(42473);var f=n(76792),h=n(85893);let p=o.forwardRef((e,t)=>{let[{className:n,...a},{as:s="div",bsPrefix:i,spans:o}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,f.vE)(t,"col");let s=(0,f.pi)(),i=(0,f.zG)(),o=[],c=[];return s.forEach(e=>{let n=a[e];delete a[e];let r,s,l;"object"==typeof n&&null!=n?{span:r,offset:s,order:l}=n:r=n;let u=e!==i?`-${e}`:"";r&&o.push(!0===r?`${t}${u}`:`${t}${u}-${r}`),null!=l&&c.push(`order${u}-${l}`),null!=s&&c.push(`offset${u}-${s}`)}),[{...a,className:r()(n,...o,...c)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,h.jsx)(s,{...a,ref:t,className:r()(n,!o.length&&i)})});p.displayName="Col";var m=n(91377);let x=o.forwardRef(({as:e="label",bsPrefix:t,column:n,visuallyHidden:a,className:s,htmlFor:i,...c},l)=>{let{controlId:u}=(0,o.useContext)(m.Z);t=(0,f.vE)(t,"form-label");let d="col-form-label";"string"==typeof n&&(d=`${d} ${d}-${n}`);let x=r()(s,t,a&&"visually-hidden",n&&d);return(i=i||u,n)?(0,h.jsx)(p,{ref:l,as:"label",className:x,htmlFor:i,...c}):(0,h.jsx)(e,{ref:l,className:x,htmlFor:i,...c})});x.displayName="FormLabel",x.defaultProps={column:!1,visuallyHidden:!1};let b=o.forwardRef(({bsPrefix:e,className:t,id:n,...a},s)=>{let{controlId:i}=(0,o.useContext)(m.Z);return e=(0,f.vE)(e,"form-range"),(0,h.jsx)("input",{...a,type:"range",ref:s,className:r()(t,e),id:n||i})});b.displayName="FormRange";let g=o.forwardRef(({bsPrefix:e,size:t,htmlSize:n,className:a,isValid:s=!1,isInvalid:i=!1,id:c,...l},u)=>{let{controlId:d}=(0,o.useContext)(m.Z);return e=(0,f.vE)(e,"form-select"),(0,h.jsx)("select",{...l,size:n,ref:u,className:r()(a,e,t&&`${e}-${t}`,s&&"is-valid",i&&"is-invalid"),id:c||d})});g.displayName="FormSelect";let v=o.forwardRef(({bsPrefix:e,className:t,as:n="small",muted:a,...s},i)=>(e=(0,f.vE)(e,"form-text"),(0,h.jsx)(n,{...s,ref:i,className:r()(t,e,a&&"text-muted")})));v.displayName="FormText";let _=o.forwardRef((e,t)=>(0,h.jsx)(c.default,{...e,ref:t,type:"switch"}));_.displayName="Switch";var C=Object.assign(_,{Input:c.default.Input,Label:c.default.Label}),y=n(74119);let j={_ref:i().any,validated:i().bool,as:i().elementType},S=o.forwardRef(({className:e,validated:t,as:n="form",...a},s)=>(0,h.jsx)(n,{...a,ref:s,className:r()(e,t&&"was-validated")}));S.displayName="Form",S.propTypes=j;var N=Object.assign(S,{Group:d.Z,Control:l.default,Floating:u,Check:c.default,Switch:C,Label:x,Text:v,Range:b,Select:g,FloatingLabel:y.Z})},6316:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(94184),r=n.n(a),s=n(67294),i=n(43818),o=n(91377),c=n(76792),l=n(85893);let u=s.forwardRef(({id:e,bsPrefix:t,className:n,type:a="checkbox",isValid:i=!1,isInvalid:u=!1,as:d="input",...f},h)=>{let{controlId:p}=(0,s.useContext)(o.Z);return t=(0,c.vE)(t,"form-check-input"),(0,l.jsx)(d,{...f,ref:h,type:a,id:e||p,className:r()(n,t,i&&"is-valid",u&&"is-invalid")})});u.displayName="FormCheckInput";let d=s.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...a},i)=>{let{controlId:u}=(0,s.useContext)(o.Z);return e=(0,c.vE)(e,"form-check-label"),(0,l.jsx)("label",{...a,ref:i,htmlFor:n||u,className:r()(t,e)})});d.displayName="FormCheckLabel";var f=n(53439);let h=s.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:a=!1,reverse:h=!1,disabled:p=!1,isValid:m=!1,isInvalid:x=!1,feedbackTooltip:b=!1,feedback:g,feedbackType:v,className:_,style:C,title:y="",type:j="checkbox",label:S,children:N,as:R="input",...w},A)=>{t=(0,c.vE)(t,"form-check"),n=(0,c.vE)(n,"form-switch");let{controlId:E}=(0,s.useContext)(o.Z),D=(0,s.useMemo)(()=>({controlId:e||E}),[E,e]),T=!N&&null!=S&&!1!==S||(0,f.XW)(N,d),I=(0,l.jsx)(u,{...w,type:"switch"===j?"checkbox":j,ref:A,isValid:m,isInvalid:x,disabled:p,as:R});return(0,l.jsx)(o.Z.Provider,{value:D,children:(0,l.jsx)("div",{style:C,className:r()(_,T&&t,a&&`${t}-inline`,h&&`${t}-reverse`,"switch"===j&&n),children:N||(0,l.jsxs)(l.Fragment,{children:[I,T&&(0,l.jsx)(d,{title:y,children:S}),g&&(0,l.jsx)(i.Z,{type:v,tooltip:b,children:g})]})})})});h.displayName="FormCheck";var p=Object.assign(h,{Input:u,Label:d})},91377:function(e,t,n){"use strict";var a=n(67294);let r=a.createContext({});t.Z=r},94716:function(e,t,n){"use strict";n.r(t);var a=n(94184),r=n.n(a),s=n(67294);n(42473);var i=n(43818),o=n(91377),c=n(76792),l=n(85893);let u=s.forwardRef(({bsPrefix:e,type:t,size:n,htmlSize:a,id:i,className:u,isValid:d=!1,isInvalid:f=!1,plaintext:h,readOnly:p,as:m="input",...x},b)=>{let{controlId:g}=(0,s.useContext)(o.Z);e=(0,c.vE)(e,"form-control");let v;return v=h?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${n}`]:n},(0,l.jsx)(m,{...x,type:t,size:a,ref:b,readOnly:p,id:i||g,className:r()(u,v,d&&"is-valid",f&&"is-invalid","color"===t&&`${e}-color`)})});u.displayName="FormControl",t.default=Object.assign(u,{Feedback:i.Z})},96986:function(e,t,n){"use strict";var a=n(67294),r=n(91377),s=n(85893);let i=a.forwardRef(({controlId:e,as:t="div",...n},i)=>{let o=(0,a.useMemo)(()=>({controlId:e}),[e]);return(0,s.jsx)(r.Z.Provider,{value:o,children:(0,s.jsx)(t,{...n,ref:i})})});i.displayName="FormGroup",t.Z=i},75147:function(e,t,n){"use strict";var a=n(94184),r=n.n(a),s=n(67294),i=n(76792),o=n(85893);let c=s.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:a,borderless:s,hover:c,size:l,variant:u,responsive:d,...f},h)=>{let p=(0,i.vE)(e,"table"),m=r()(t,p,u&&`${p}-${u}`,l&&`${p}-${l}`,n&&`${p}-${"string"==typeof n?`striped-${n}`:"striped"}`,a&&`${p}-bordered`,s&&`${p}-borderless`,c&&`${p}-hover`),x=(0,o.jsx)("table",{...f,className:m,ref:h});if(d){let b=`${p}-responsive`;return"string"==typeof d&&(b=`${b}-${d}`),(0,o.jsx)("div",{className:b,children:x})}return x});t.Z=c}},function(e){e.O(0,[4885,6006,9774,2888,179],function(){return e(e.s=65144)}),_N_E=e.O()}]);