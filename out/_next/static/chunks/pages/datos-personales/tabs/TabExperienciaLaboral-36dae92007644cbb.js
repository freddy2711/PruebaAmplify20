(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8256,1803],{27:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/datos-personales/tabs/TabExperienciaLaboral",function(){return t(85857)}])},58071:function(e,n,t){"use strict";var r=t(85893),a=t(94184),i=t.n(a),o=t(18695),l=t(95821),c=t(54501),s=t.n(c),u=function(e){var n=e.classname,t=e.children,a=i()((0,l.IO)(s(),void 0===n?"":n));return(0,r.jsx)(o.Z.Item,{className:a,children:t})};n.Z=u},31545:function(e,n,t){"use strict";var r=t(85893),a=t(94184),i=t.n(a),o=t(95821),l=t(34119),c=t.n(l),s=function(e){var n=e.type,t=e.name,a=e.id,l=e.classname,s=e.onchange,u=e.disabled,d=e.placeholder,f=e.defaultValue,p=e.style,m=e.min,x=e.max,h=e.value,v=e.readOnly,b=e.onClick,y=i()("form-control",(0,o.IO)(c(),void 0===l?"":l));return(0,r.jsx)("input",{id:a,type:n,name:t,className:y,disabled:void 0!==u&&u,placeholder:void 0===d?"placeholder":d,onChange:s,defaultValue:f,style:p,min:m,max:x,value:h,readOnly:v,onClick:b})};n.Z=s},57870:function(e,n,t){"use strict";var r=t(85893),a=t(94184),i=t.n(a),o=t(15605),l=t.n(o)(),c=function(e){var n=e.classname,t=void 0===n?"":n,a=e.children,o=e.idFor,c=i()(l[t]?l[t]:t);return(0,r.jsx)("label",{htmlFor:o,className:c,children:void 0===a?"label text":a})};n.Z=c},1803:function(e,n,t){"use strict";t.r(n);var r=t(14251),a=t(52875),i=t(85893),o=t(94184),l=t.n(o),c=t(33058),s=t.n(c),u=t(35005),d=t(44020),f=s(),p=function(e){var n=e.classname,t=void 0===n?"":n,o=e.children,c=e.props,s=e.show,p=e.onHide,m=e.onGuardar,x=e.onclickguardar,h=e.titulo,v=e.size,b=l()(f[t]?f[t]:t);return(0,i.jsxs)(d.Z,(0,a.Z)((0,r.Z)({className:b},c),{show:s,onHide:p,size:v,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,i.jsx)(d.Z.Header,{closeButton:!0,children:(0,i.jsx)(d.Z.Title,{id:"contained-modal-title-vcenter",children:h})}),(0,i.jsx)(d.Z.Body,{children:o}),(0,i.jsxs)(d.Z.Footer,{children:[m?(0,i.jsx)(u.Z,{onClick:x,children:"Guardar"}):"",(0,i.jsx)(u.Z,{variant:"secondary",onClick:p,children:"Cerrar"})]})]}))};n.default=p},13649:function(e,n,t){"use strict";var r=t(85893),a=t(94184),i=t.n(a),o=t(18695),l=t(95821),c=t(12547),s=t.n(c),u=function(e){var n=e.children,t=e.classname,a=i()((0,l.IO)(s(),void 0===t?"":t));return(0,r.jsx)(o.Z,{className:a,children:n})};n.Z=u},85857:function(e,n,t){"use strict";t.r(n);var r=t(34727),a=t(80969),i=t(70655),o=t(85893),l=t(67294),c=t(9473),s=t(89219),u=t(84555),d=t(31545),f=t(57870),p=t(13649),m=t(51742),x=t(58071),h=t(30381),v=t.n(h),b=t(86455),y=t.n(b),g=t(89041),Z=t(159),j=function(e){return v()(e).format("DD/MM/YYYY")},E=function(){var e,n,t=function(e){var n=e.split("/");return new Date(n[2],n[1]-1,n[0]).toISOString()},h=(0,c.I0)(),b=(0,c.v9)(function(e){var n;return null==e?void 0:null===(n=e.infoGeneral)||void 0===n?void 0:n.infoGeneral}),E=(0,c.v9)(function(e){var n,t;return null==e?void 0:null===(n=e.infoGeneral)||void 0===n?void 0:null===(t=n.infoGeneral)||void 0===t?void 0:t.ExperienciasLaborales}),N=(0,l.useState)(!1),w=N[0],_=N[1],k={rdbExperienciaDocente:"",txtEmpresa:"",ddlIndustria:"0",ddlInstitucionExperiencia:"0",ddlTipoDedicacionDocente:"0",chkInstitucionExperiencia:!1,txtInstitucionExperiencia:"",ddlAreaPuesto:"0",txtCargo:"",ddlPaisExperiencia:"0",txtFechaInicioExperiencia:"",txtFechaFinExperiencia:"",chkTrabajaActualmente:!1,txtDescripcion:"",chkGenteACargo:!1,chkGestionaPresupuesto:!1,txtFechaFinExperienciaDisabled:!1,id:null},C=(0,l.useState)(k),I=C[0],A=C[1],T=0,D=0,F=(e=(0,r.Z)(function(e){return(0,i.__generator)(this,function(n){return _(e),A(k),[2]})}),function(n){return e.apply(this,arguments)}),P=function(e){console.log("__IdEditar__",e);var n,t=b.ExperienciasLaborales.filter(function(n){return n.idExperienciaLaboral===e})[0];console.log(t),h((0,g.Py)(t)),_(!0)},$=function(e,n,r){var a,i,o,l="SIN FECHA",c=e?j(e):l,s=n?j(n):l;return e&&(n?(a=v()(t(s)),i=v().duration(a.diff(t(c)))):(a=v()(),i=v().duration(a.diff(t(c)))),r?T+=i:D+=i),[i?i.months():0,i?i.years():0]},L=(n=(0,r.Z)(function(e){return(0,i.__generator)(this,function(n){var t;return y().fire({title:"Experiencia Laboral",text:"\xbfEst\xe1 seguro que desea eliminar estos datos?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Aceptar",cancelButtonText:"Cancelar"}).then((t=(0,r.Z)(function(n){var t;return(0,i.__generator)(this,function(r){switch(r.label){case 0:var a;if(!n.isConfirmed)return[3,2];return(t=E.filter(function(n){return n.idExperienciaLaboral===e}))[0].activo="0",t[0].IdPersona=null==b?void 0:b.idPersona,[4,(a=t[0],h((0,Z.db)(a)))];case 1:r.sent(),r.label=2;case 2:return[2]}})}),function(e){return t.apply(this,arguments)})),[2]})}),function(e){return n.apply(this,arguments)});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.Z,{id:"px-3 py-3",children:[(0,o.jsx)("div",{className:"form-group row mb-3",children:(0,o.jsx)("div",{className:"col-sm-3",children:(0,o.jsx)(u.Z,{type:"button",variant:"secondary",classname:"btn-sm",onclick:function(){return F(!0)},children:"Agregar"})})}),(0,o.jsx)(p.Z,{classname:"mb-3",children:b.ExperienciasLaborales&&b.ExperienciasLaborales.length>0?b.ExperienciasLaborales.map(function(e,n){var t=(0,a.Z)($(e.fechaInicio,e.fechaFin,e.experienciaDocencia),2),r=t[0],i=t[1];return e.activo&&(0,o.jsxs)(x.Z,{classname:"row d-flex py-3 px-0 mx-0",children:[(0,o.jsxs)("div",{className:"col-12 col-md-6",children:[(0,o.jsxs)("p",{className:"mb-1",children:[e.puesto.toUpperCase()," EN"," ",e.empresa.toUpperCase()]}),(0,o.jsxs)("p",{className:"mb-1",children:["Del: ",j(e.fechaInicio)," al"," ",!0===e.trabajaActualmente?"Actual":j(e.fechaFin)," ","(",i," A\xf1os - ",r," Meses",")",(0,o.jsx)("br",{}),e.AreaPuesto.nombreAreaPuesto,(0,o.jsx)("label",{className:"text-danger",id:"mensajeEXLAB_5565"})]}),(0,o.jsx)("span",{className:"d-none"})]}),(0,o.jsxs)("div",{className:"col-12 col-md-6 text-end",children:[(0,o.jsx)(u.Z,{type:"button",variant:"secondary",classname:"btn-sm me-2",onclick:function(n){return P(e.idExperienciaLaboral)},children:"Editar"}),(0,o.jsx)(u.Z,{type:"button",variant:"danger",classname:"btn-sm",onclick:function(){return L(e.idExperienciaLaboral)},children:"Eliminar"})]})]},n)}):null}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"form-group row mt-3 mb-3",children:[(0,o.jsx)(f.Z,{classname:"col-sm-4 col-form-label",children:"Total de A\xf1os Experiencia Profesional :"}),(0,o.jsx)("div",{className:"col-sm-2",children:(0,o.jsx)(d.Z,{id:"txtTotalExperienciaProfesional",type:"text",name:"txtTotalExperienciaProfesional",classname:"text-center",placeholder:"0",disabled:!0,value:Math.floor(D/31536e6)})})]}),(0,o.jsxs)("div",{className:"form-group row mb-3",children:[(0,o.jsx)(f.Z,{classname:"col-sm-4 col-form-label",children:"Total de A\xf1os Experiencia Docente :"}),(0,o.jsx)("div",{className:"col-sm-2",children:(0,o.jsx)(d.Z,{id:"txtTotalExperienciaDocente",type:"text",name:"txtTotalExperienciaDocente",classname:"text-center",placeholder:"0",disabled:!0,value:Math.floor(T/31536e6)})})]}),(0,o.jsx)("div",{className:"col-12 px-0 text-justify text-muted",children:(0,o.jsx)("strong",{children:"El total de experiencia profesional y docente se calcula de manera autom\xe1tica seg\xfan datos registrados."})})]}),(0,o.jsx)(m.default,{modalShow:w,setModalShow:_,formNEL:I,setFormNEL:A,initial:k})]})};n.default=E},89041:function(e,n,t){"use strict";t.d(n,{Py:function(){return l},Ql:function(){return o},Rp:function(){return c},XY:function(){return s},pg:function(){return u}});var r=t(34727),a=t(70655),i=t(35508);function o(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(p(e)),[2]})}),function(e){return n.apply(this,arguments)}}function l(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(f(e)),[2]})}),function(e){return n.apply(this,arguments)}}function c(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(m(e)),[2]})}),function(e){return n.apply(this,arguments)}}function s(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(x(e)),[2]})}),function(e){return n.apply(this,arguments)}}function u(e){var n;return n=(0,r.Z)(function(n){return(0,a.__generator)(this,function(t){return n(d()),n(h(e)),[2]})}),function(e){return n.apply(this,arguments)}}var d=function(){return{type:i.Fz}},f=function(e){return{type:i.iR,payload:e}},p=function(e){return{type:i.pU,payload:e}},m=function(e){return{type:i.MA,payload:e}},x=function(e){return{type:i.Lk,payload:e}},h=function(e){return{type:i.l2,payload:e}}},54501:function(){},34119:function(){},15605:function(){},33058:function(){},12547:function(){},18695:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(94184),a=t.n(r),i=t(67294);t(42473);var o=t(47150),l=t(25115),c=t(76792),s=t(78146),u=t(73716),d=t(87126),f=t(85893);let p=i.forwardRef(({bsPrefix:e,active:n,disabled:t,eventKey:r,className:i,variant:o,action:l,as:p,...m},x)=>{e=(0,c.vE)(e,"list-group-item");let[h,v]=(0,u.v)({key:(0,d.h)(r,m.href),active:n,...m}),b=(0,s.Z)(e=>{if(t){e.preventDefault(),e.stopPropagation();return}h.onClick(e)});t&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0);let y=p||(l?m.href?"a":"button":"div");return(0,f.jsx)(y,{ref:x,...m,...h,onClick:b,className:a()(i,e,v.isActive&&"active",t&&"disabled",o&&`${e}-${o}`,l&&`${e}-action`)})});p.displayName="ListGroupItem";let m=i.forwardRef((e,n)=>{let{className:t,bsPrefix:r,variant:i,horizontal:s,numbered:u,as:d="div",...p}=(0,o.Ch)(e,{activeKey:"onSelect"}),m=(0,c.vE)(r,"list-group"),x;return s&&(x=!0===s?"horizontal":`horizontal-${s}`),(0,f.jsx)(l.Z,{ref:n,...p,as:d,className:a()(t,m,i&&`${m}-${i}`,x&&`${m}-${x}`,u&&`${m}-numbered`)})});m.displayName="ListGroup";var x=Object.assign(m,{Item:p})},44020:function(e,n,t){"use strict";t.d(n,{Z:function(){return $}});var r,a=t(94184),i=t.n(a),o=t(47923),l=t(38480),c=t(14709),s=t(74672);function u(e){if((!r&&0!==r||e)&&l.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var d=t(32092),f=t(78146),p=t(35654),m=t(76852),x=t(27617),h=t(67294),v=t(43282),b=t(47314),y=t(41068),g=t(75528),Z=(0,g.Z)("modal-body"),j=t(36467),E=t(76792),N=t(85893);let w=h.forwardRef(({bsPrefix:e,className:n,contentClassName:t,centered:r,size:a,fullscreen:o,children:l,scrollable:c,...s},u)=>{e=(0,E.vE)(e,"modal");let d=`${e}-dialog`,f="string"==typeof o?`${e}-fullscreen-${o}`:`${e}-fullscreen`;return(0,N.jsx)("div",{...s,ref:u,className:i()(d,n,a&&`${e}-${a}`,r&&`${d}-centered`,c&&`${d}-scrollable`,o&&f),children:(0,N.jsx)("div",{className:i()(`${e}-content`,t),children:l})})});w.displayName="ModalDialog";var _=(0,g.Z)("modal-footer"),k=t(703);let C=h.forwardRef(({bsPrefix:e,className:n,...t},r)=>(e=(0,E.vE)(e,"modal-header"),(0,N.jsx)(k.Z,{ref:r,...t,className:i()(n,e)})));C.displayName="ModalHeader",C.defaultProps={closeLabel:"Close",closeButton:!1};var I=t(39602);let A=(0,I.Z)("h4");var T=(0,g.Z)("modal-title",{Component:A});function D(e){return(0,N.jsx)(y.Z,{...e,timeout:null})}function F(e){return(0,N.jsx)(y.Z,{...e,timeout:null})}let P=h.forwardRef(({bsPrefix:e,className:n,style:t,dialogClassName:r,contentClassName:a,children:y,dialogAs:g,"aria-labelledby":Z,"aria-describedby":w,"aria-label":_,show:k,animation:C,backdrop:I,keyboard:A,onEscapeKeyDown:T,onShow:P,onHide:$,container:L,autoFocus:O,enforceFocus:R,restoreFocus:S,restoreFocusOptions:M,onEntered:B,onExit:G,onExiting:H,onEnter:z,onEntering:U,onExited:Y,backdropClassName:X,manager:K,...W},V)=>{let[q,Q]=(0,h.useState)({}),[J,ee]=(0,h.useState)(!1),en=(0,h.useRef)(!1),et=(0,h.useRef)(!1),er=(0,h.useRef)(null),[ea,ei]=(0,d.Z)(),eo=(0,p.Z)(V,ei),el=(0,f.Z)($),ec=(0,E.SC)();e=(0,E.vE)(e,"modal");let es=(0,h.useMemo)(()=>({onHide:el}),[el]);function eu(){return K||(0,b.t)({isRTL:ec})}function ed(e){if(!l.Z)return;let n=eu().getScrollbarWidth()>0,t=e.scrollHeight>(0,c.Z)(e).documentElement.clientHeight;Q({paddingRight:n&&!t?u():void 0,paddingLeft:!n&&t?u():void 0})}let ef=(0,f.Z)(()=>{ea&&ed(ea.dialog)});(0,m.Z)(()=>{(0,s.Z)(window,"resize",ef),null==er.current||er.current()});let ep=()=>{en.current=!0},em=e=>{en.current&&ea&&e.target===ea.dialog&&(et.current=!0),en.current=!1},ex=()=>{ee(!0),er.current=(0,x.Z)(ea.dialog,()=>{ee(!1)})},eh=e=>{e.target===e.currentTarget&&ex()},ev=e=>{if("static"===I){eh(e);return}if(et.current||e.target!==e.currentTarget){et.current=!1;return}null==$||$()},eb=e=>{A||"static"!==I?A&&T&&T(e):(e.preventDefault(),ex())},ey=(e,n)=>{e&&ed(e),null==z||z(e,n)},eg=e=>{null==er.current||er.current(),null==G||G(e)},eZ=(e,n)=>{null==U||U(e,n),(0,o.ZP)(window,"resize",ef)},ej=e=>{e&&(e.style.display=""),null==Y||Y(e),(0,s.Z)(window,"resize",ef)},eE=(0,h.useCallback)(n=>(0,N.jsx)("div",{...n,className:i()(`${e}-backdrop`,X,!C&&"show")}),[C,X,e]),eN={...t,...q};eN.display="block";let ew=t=>(0,N.jsx)("div",{role:"dialog",...t,style:eN,className:i()(n,e,J&&`${e}-static`),onClick:I?ev:void 0,onMouseUp:em,"aria-label":_,"aria-labelledby":Z,"aria-describedby":w,children:(0,N.jsx)(g,{...W,onMouseDown:ep,className:r,contentClassName:a,children:y})});return(0,N.jsx)(j.Z.Provider,{value:es,children:(0,N.jsx)(v.Z,{show:k,ref:eo,backdrop:I,container:L,keyboard:!0,autoFocus:O,enforceFocus:R,restoreFocus:S,restoreFocusOptions:M,onEscapeKeyDown:eb,onShow:P,onHide:$,onEnter:ey,onEntering:eZ,onEntered:B,onExit:eg,onExiting:H,onExited:ej,manager:eu(),transition:C?D:void 0,backdropTransition:C?F:void 0,renderBackdrop:eE,renderDialog:ew})})});P.displayName="Modal",P.defaultProps={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:w};var $=Object.assign(P,{Body:Z,Header:C,Title:T,Footer:_,Dialog:w,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},80969:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(62893),a=t(12267);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,n)||(0,a.Z)(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[4885,4969,6006,5250,1821,1742,9774,2888,179],function(){return e(e.s=27)}),_N_E=e.O()}]);