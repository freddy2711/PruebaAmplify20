(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4715],{2456:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registrar-delegado",function(){return n(43882)}])},8882:function(e,t,n){"use strict";var a=n(85893),o=n(86932),r=n.n(o),l=n(94184),s=n.n(l),c=r(),i=function(e){var t=e.href,n=e.children,o=e.targetBlank,r=e.classname,l=void 0===r?"":r,i=e.onClick,d=s()(c[l]?c[l]:l);return(0,a.jsx)("a",{href:t,target:void 0!==o&&o?"_blank":"",rel:"noreferrer",className:d,onClick:i,children:n})};t.Z=i},84555:function(e,t,n){"use strict";var a=n(85893),o=n(94184),r=n.n(o),l=n(72169),s=n.n(l),c=n(95821),i=s(),d=function(e){var t=e.children,n=e.type,o=e.classname,l=e.variant,d=e.size,u=e.disabled,f=e.onclick,m=e.name,_="btn-".concat(void 0===l?"btn-default":l),g=r()("btn",_,(0,c.IO)(s(),void 0===o?"":o),i[void 0===d?"medium":d]);return(0,a.jsx)("button",{name:m,type:void 0===n?"button":n,className:g,onClick:f,disabled:void 0!==u&&u,children:void 0===t?"Guardar":t})};t.Z=d},57870:function(e,t,n){"use strict";var a=n(85893),o=n(94184),r=n.n(o),l=n(15605),s=n.n(l)(),c=function(e){var t=e.classname,n=void 0===t?"":t,o=e.children,l=e.idFor,c=r()(s[n]?s[n]:n);return(0,a.jsx)("label",{htmlFor:l,className:c,children:void 0===o?"label text":o})};t.Z=c},43882:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var a=n(34727),o=n(14251),r=n(52875),l=n(70655),s=n(85893),c=n(67294),i=n(8882),d=n(57870),u=n(71732),f=n.n(u),m=n(5152),_=n.n(m),g=n(27201),h=n(30381),b=n.n(h),x=n(84555),p=n(86455),v=n.n(p),C=function(){var e,t=(0,c.useState)([{Email:"",Name:"",cellMovil:"",classCode:"",code:"",delegateId:{},emailUPN:"",firstName:"",lastName:"",madeEstate:"",madeNroVeces:1,state:{}},]);return{delegados:t[0],setdelegados:t[1]}},N=n(98521),j=n(42222),D=n(69706),w=_()(function(){return Promise.all([n.e(8620),n.e(223)]).then(n.bind(n,50223))},{loadableGenerated:{webpack:function(){return[50223]}},ssr:!1}),y=_()(function(){return Promise.all([n.e(1427),n.e(8072),n.e(5489)]).then(n.bind(n,14146))},{loadableGenerated:{webpack:function(){return[14146]}},ssr:!1}),B=[],S=function(e){e.data;var t=(0,c.useState)([]),n=t[0],u=t[1],m=(0,c.useState)(!1),_=m[0],h=m[1],p=(0,c.useState)(""),S=p[0],k=p[1],P=(0,c.useState)([]),O=P[0],E=P[1],Z=C(),T=Z.delegados,Y=Z.setdelegados,F=(0,c.useState)(""),M=F[0],K=F[1];(0,c.useEffect)(function(){var e,t=(0,j.get)(D.EG),n=null==t?void 0:t.userName,c=(0,j.get)(D.FD);(0,j.set)(D.K6,n),(0,j.set)(D.QA,c),(e=(0,a.Z)(function(){var e,t,n,a;return(0,l.__generator)(this,function(t){switch(t.label){case 0:h(!0),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,N.J6.listInit(c)];case 2:return e=t.sent().data,console.log("dataaaa: ",e),u(n=e.map(function(e,t){var n=Q(e.StartDateOfClass);return e.StartDateOfClass=n,e}).map(function(e,t){return(0,r.Z)((0,o.Z)({},e),{select:(0,s.jsx)(i.Z,{href:"#",onClick:function(t){return R(t,e.ClassCode,e.TypeOfDocument,e.StartDateOfClass)},classname:"text-decoration-none text-center w-100 d-block",children:"Seleccionar"})})})),[3,4];case 3:return a=t.sent(),console.log(a),[3,4];case 4:return h(!1),[2]}})}),function(){return e.apply(this,arguments)})()},[]);var J,A,G,I,V=function(e,t,n){if(e.target.checked)B.push(t),Y(B);else{var a=B.filter(function(e){return e.code!==t.code});B=a,Y(a),console.log(n),!0===t.state&&z(t.code,n)}},U=function(e){var t=e.delegateId,n=e.state;return"object"!=typeof t&&""!==t&&"object"!=typeof n&&""!==n&&!0===n&&(K("".concat(e.Name," ").concat(e.firstName," ").concat(e.lastName)),B.push(e),Y(B),!0)},q=(J=(0,a.Z)(function(){var e,t,n,a,o;return(0,l.__generator)(this,function(r){switch(r.label){case 0:if(T.length>1)return v().fire({title:"Portal de Docentes",text:"Solo se permite el registro de ".concat(1," delegado."),icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[2];if(!(null===(e=T[0])||void 0===e?void 0:e.code.trim())||T.length<1)return v().fire({title:"Portal de Docentes",text:"Por favor seleccione al menos un alumno para delegado.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[2];t=T[0],r.label=1;case 1:return r.trys.push([1,3,,4]),h(!0),n="\n        <registro>\n          <delegado \n            s_alu_codigo='".concat(t.code,"' \n            s_cla_codigo='").concat(S,"' \n            b_estado='1' \n            audit_usuario='POOL' />\n        </registro>"),[4,N.J6.createDelegate(S,n)];case 2:return(null==(a=r.sent())?void 0:a.Status)===!0&&(v().fire({title:"Portal de Docentes",text:"El Registro del delegado de la clase se ha guardado con \xe9xito.",icon:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),K("".concat(t.Name," ").concat(t.firstName," ").concat(t.lastName)),X(S),h(!1)),[3,4];case 3:return o=r.sent(),console.log(o),[3,4];case 4:return[2]}})}),function(){return J.apply(this,arguments)}),z=(A=(0,a.Z)(function(e,t){var n,a,o;return(0,l.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),h(!0),n="\n        <registro>\n          <delegado \n            s_alu_codigo='".concat(e,"' \n            s_cla_codigo='").concat(t,"' \n            b_estado='0' \n            audit_usuario='POOL' />\n        </registro>\n    "),[4,N.J6.deleteDelegate(t,n)];case 1:return(null==(a=r.sent())?void 0:a.Status)===!0&&h(!1),[3,3];case 2:return o=r.sent(),console.log(o),v().fire({title:"Portal de Docentes",text:"Hubo un error.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),h(!1),[3,3];case 3:return[2]}})}),function(e,t){return A.apply(this,arguments)}),L=function(){console.log("Fn Cancelar"),k(""),E([]),Y([]),K(""),B=[]},Q=function(e){console.log("formateInDate---",e);var t=e.split("T"),n="".concat(t[0]);return b()(n).format("DD/MM/YYYY")},R=(G=(0,a.Z)(function(e,t,n,a){var o,r;return(0,l.__generator)(this,function(n){if(e.preventDefault(),"NO"===a)return v().fire({title:"Portal de Docentes",text:"No puede realizar el registro de delegados por que la clase a\xfan inicia el ".concat(Q(a),"."),icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[2];if(console.log("fichiiniii__ ",a),o=b()(a,"DD/MM/YYYY"),o>=(r=b()(new Date,"YYYY-MM-DD")))return v().fire({title:"Portal de Docentes",text:"No puede realizar el registro de delegados por que la clase a\xfan inicia el ".concat(a,"."),icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[2];try{h(!0),k(t),X(t)}catch(l){console.log("error",l),h(!1)}return[2]})}),function(e,t,n,a){return G.apply(this,arguments)}),X=(I=(0,a.Z)(function(e){var t,n,a,c,i;return(0,l.__generator)(this,function(l){switch(l.label){case 0:return E([]),Y([]),K(""),B=[],[4,N.J6.listByClass(e)];case 1:return(n=null==(t=l.sent())?void 0:t.data)&&(h(!1),a=e,i=n.map(function(e,t){return!0!==e.state&&(e.emailUPN="",e.Email="",e.cellMovil=""),e}).map(function(e,t){return(0,r.Z)((0,o.Z)({},e),{select:(0,s.jsx)("input",{type:"checkbox",onChange:function(t){return V(t,e,a)},className:"text-decoration-none text-center w-100 d-block",name:"checkDelegado",id:"checkDelegado",value:JSON.stringify(e),defaultChecked:U(e)},t)})}),E(i)),[2]}})}),function(e){return I.apply(this,arguments)});return(0,s.jsxs)("div",{className:f().contenido,children:[(0,s.jsx)(g.Z,{loading:_}),(0,s.jsxs)("div",{className:f().content,children:[(0,s.jsx)("div",{className:f().titulo,children:(0,s.jsx)(d.Z,{classname:"text-warning h5 mt-3 mb-3",children:"Registrar Delegado"})}),(0,s.jsx)("hr",{}),O.length>0?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:f().delegadoContent,children:(0,s.jsxs)("p",{children:[(0,s.jsx)("b",{children:"Delegado: "})," ",M]})}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:f().tabla,children:(0,s.jsx)(y,{columns:[{label:"Seleccionar",field:"select",sort:"asc"},{label:"C\xf3d. alumno",field:"code",sort:"asc"},{label:"Ap. paterno",field:"firstName",sort:"asc"},{label:"Ap. materno",field:"lastName",sort:"asc"},{label:"Nombres",field:"Name",sort:"asc"},{label:"Vez",field:"madeNroVeces",sort:"asc"},{label:"Clase",field:"classCode",sort:"asc"},{label:"Estado",field:"madeEstate",sort:"asc"},{label:"Email UPN",field:"emailUPN",sort:"asc"},{label:"Email Personal",field:"Email",sort:"asc"},{label:"Celular",field:"cellMovil",sort:"asc"},],listData:O})}),(0,s.jsxs)("div",{className:"d-flex justify-content-center gap-4",children:[(0,s.jsx)(x.Z,{type:"button",variant:"primary",onclick:q,children:"Guardar"}),(0,s.jsx)(x.Z,{type:"button",variant:"secondary",onclick:L,children:"Cancelar"})]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:f().alertaContent,children:(0,s.jsx)(w,{classname:"w-100",variant:"info",children:(0,s.jsxs)("p",{className:"mb-0",children:[(0,s.jsx)("b",{children:"Nota:"})," \xa0Seleccione una clase para registrar su delegado."]})})}),(0,s.jsx)("hr",{}),(0,s.jsx)("div",{className:f().tabla,children:(0,s.jsx)(y,{columns:[{label:"Seleccionar",field:"select",sort:"asc"},{label:"Semestre",field:"SemesterCode",sort:"asc"},{label:"Sede",field:"PlaceCode",sort:"asc"},{label:"Clase",field:"ClassCode",sort:"asc"},{label:"Fecha de inicio",field:"StartDateOfClass",sort:"asc"},{label:"Tipo Doc.",field:"TypeOfDocument",sort:"asc"},{label:"C\xf3d. curso",field:"CodeCourse",sort:"asc"},{label:"Nombre del curso",field:"NameCourse",sort:"asc"},],listData:n})}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("small",{children:[(0,s.jsx)("strong",{children:"Tipo docente: (P)"})," Principal /"," ",(0,s.jsx)("strong",{children:"(S)"})," Sustituto / ",(0,s.jsx)("strong",{children:"(A)"})," Auxiliar"]}),(0,s.jsx)("br",{}),(0,s.jsx)("small",{children:(0,s.jsxs)("span",{id:"cphSite_lblTipoClase",children:[(0,s.jsx)("strong",{children:"Tipo Clase: (PR)"})," Presencial /"," ",(0,s.jsx)("strong",{children:"(VT)"})," Virtual"]})})]})]})]})]})}},86932:function(){},72169:function(e){e.exports={small:"button_small__7bbNh",medium:"button_medium__a2eos",large:"button_large__A_BJ0",primary:"button_primary__2xniq",secondary:"button_secondary__3F83R"}},15605:function(){},71732:function(e){e.exports={header:"Delegado_header__NBL6q",content:"Delegado_content__TlG8M",title:"Delegado_title__CcgtY",headerContent:"Delegado_headerContent__0HlGV",navbr:"Delegado_navbr__3obF2",contenido:"Delegado_contenido__cwQrQ",titulo:"Delegado_titulo___Qjbo",alertaContent:"Delegado_alertaContent__wnZvK",delegadoContent:"Delegado_delegadoContent__Iih_L",rowButtons:"Delegado_rowButtons__EA2EJ",tabla:"Delegado_tabla__n9j7K",footer:"Delegado_footer__BSM_U",contentFooter:"Delegado_contentFooter__J_kX4"}}},function(e){e.O(0,[4885,6006,3462,9774,2888,179],function(){return e(e.s=2456)}),_N_E=e.O()}]);