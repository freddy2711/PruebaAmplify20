(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3591],{97721:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/soporte-virtual/consulta",function(){return n(70359)}])},84555:function(e,t,n){"use strict";var r=n(85893),a=n(94184),o=n.n(a),s=n(72169),i=n.n(s),l=n(95821),u=i(),c=function(e){var t=e.children,n=e.type,a=e.classname,s=e.variant,c=e.size,d=e.disabled,p=e.onclick,f=e.name,m="btn-".concat(void 0===s?"btn-default":s),h=o()("btn",m,(0,l.IO)(i(),void 0===a?"":a),u[void 0===c?"medium":c]);return(0,r.jsx)("button",{name:f,type:void 0===n?"button":n,className:h,onClick:p,disabled:void 0!==d&&d,children:void 0===t?"Guardar":t})};t.Z=c},57870:function(e,t,n){"use strict";var r=n(85893),a=n(94184),o=n.n(a),s=n(15605),i=n.n(s)(),l=function(e){var t=e.classname,n=void 0===t?"":t,a=e.children,s=e.idFor,l=o()(i[n]?i[n]:n);return(0,r.jsx)("label",{htmlFor:s,className:l,children:void 0===a?"label text":a})};t.Z=l},70359:function(e,t,n){"use strict";n.r(t);var r=n(34727),a=n(14251),o=n(52875),s=n(69779),i=n(70655),l=n(85893),u=n(67294),c=n(91121),d=n.n(c),p=n(27201),f=n(57870),m=n(84555),h=n(4969),g=n(98521),b=n(86455),_=n.n(b),v=n(42222),y=n(78312),x=n(99603),w=n(69706),j=n(59417),C=n(5152),S=n.n(C),T=n(25934),E=S()(function(){return Promise.all([n.e(2937),n.e(8446),n.e(5808),n.e(6471)]).then(n.bind(n,36471))},{loadableGenerated:{webpack:function(){return[36471]}},ssr:!1,loading:function(){return(0,l.jsx)(p.Z,{loading:!0})}}),P=function(){var e,t={ddlTipo:"0",ddlSubTipo:"0",txtDescripcion:""},n={name:"ADJUNTAR ARCHIVOS (tama\xf1o maximo 5mb)",type:"",size:0,base64:"",file:null},c=(0,u.useState)(!1),b=c[0],C=c[1],S=(0,u.useState)(t),P=S[0],k=S[1],O=[{value:"0",label:"-- Seleccionar Tipo --"}],A=[{value:"0",label:"-- Seleccionar subTipo --"}],N=(0,u.useState)(O),B=N[0],Z=N[1],F=(0,u.useState)(A),I=F[0],V=F[1],D=(0,u.useState)([]),R=D[0],L=D[1],U=(0,u.useState)(""),z=U[0],M=U[1],G=(0,u.useState)(n),q=G[0],K=G[1];(0,u.useEffect)(function(){var e;(e=(0,r.Z)(function(){var e,t,n;return(0,i.__generator)(this,function(e){switch(e.label){case 0:C(!0),e.label=1;case 1:return e.trys.push([1,4,,5]),[4,e_()];case 2:return e.sent(),[4,g.w4.tipocse(null,"SEL-TIPO")];case 3:return t=(0,e.sent().data).map(function(e){return{label:e.type,value:e.pk}}),Z((0,s.Z)(O).concat((0,s.Z)(t))),C(!1),[3,5];case 4:return n=e.sent(),console.log(n),[3,5];case 5:return[2]}})}),function(){return e.apply(this,arguments)})()},[]);var J,H,W,Y,Q,X,$,ee,et,en=(e=(0,r.Z)(function(e){var t;return(0,i.__generator)(this,function(t){switch(t.label){case 0:var n;return[4,Promise.all(e.map((n=(0,r.Z)(function(e){var t,n;return(0,i.__generator)(this,function(t){switch(t.label){case 0:return[4,ec("".concat(e.state,".").concat(e.asignedTo))];case 1:return[2,{url:t.sent().url,name:e.responseArea,nameS3:e.state,tipo:e.asignedTo,AluCode:e.responseCode,Adviser:e.responseStudent}]}})}),function(e){return n.apply(this,arguments)})))];case 1:return L(t.sent()),[2]}})}),function(t){return e.apply(this,arguments)}),er=(J=(0,r.Z)(function(e,t){var n,r,l,u,c,d,p,f,m;return(0,i.__generator)(this,function(r){switch(r.label){case 0:switch(console.log(t),t){case"ddlTipo":return[3,1];case"ddlSubTipo":return[3,7]}return[3,8];case 1:if(n=e.value,console.log(n),!(0!==parseInt(n)))return[3,6];C(!0),r.label=2;case 2:return r.trys.push([2,5,,6]),[4,g.w4.tipocse(n,"SEL-SUBTIPO")];case 3:return l=(0,r.sent().data).map(function(e){return{label:e.subType,value:e.pk}}),console.log(l),V((0,s.Z)(A).concat((0,s.Z)(l))),k((0,o.Z)((0,a.Z)({},P),{ddlTipo:n})),C(!1),c=null==(u=(0,v.get)(w.EG))?void 0:u.userName,d=(0,v.get)(w.FD),[4,g.w4.fileAsesor(d,c)];case 4:return p=r.sent(),console.log(p.data),en(p.data),[3,6];case 5:return f=r.sent(),console.log(f),[3,6];case 6:return[3,8];case 7:return m=e.value,console.log(e),k((0,o.Z)((0,a.Z)({},P),{ddlSubTipo:m})),[3,8];case 8:return[2]}})}),function(e,t){return J.apply(this,arguments)}),ea=function(e,t){var n=t.filter(function(t){return parseInt(t.value)===parseInt(e)});return n.length>0?n[0]:t[0]},eo=function(e){var t=e.substring(e.lastIndexOf(".")+1,e.length),n=j.gSj;switch(console.log(e),t){case"docx":case"doc":n=j.Mfv;break;case"xls":case"xlsx":n=j.icc;break;case"pdf":n=j.gSj;break;case"ppt":case"pptx":n=j.WOY;break;case"mp3":n=j.FMf;break;case"png":case"jpg":case"jpeg":n=j.Oi0;break;case"mp4":case"mpeg":case"avi":n=j.hvm;break;case"zip":case"war":n=j.gA;break;case"txt":case"csv":n=j.OEL;break;default:n=j.gMD}return n},es=function(e){var t=!1;console.log("VALIDARRRRR___",e);var n=["pdf","doc","docx","xlsx","xls","pptx","ppt","jpeg","jpg","rar","zip","png",],r=e.file,a=r.size,o=r.name,s=o.substring(o.lastIndexOf(".")+1,o.length);return console.log("TYPE__",[n.includes(s),s]),a<=1e7?n.includes(s)?t=!0:_().fire({title:"Portal de Docentes",text:"Por favor cargue un archivo con extensi\xf3n: ".concat(n.join(",")),icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}):_().fire({title:"Portal de Docentes",text:"Por favor cargue un archivo que peso como maximo 10MB.		",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),t},ei=(H=(0,r.Z)(function(e){var t,n,r,a,o,s,l,u,c,d;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),t=e.nameS3,n=e.usuario,r=e.name,a=e.size,o=r.substring(r.lastIndexOf(".")+1,r.length),u=null==(s=(0,v.get)(w.EG))?void 0:s.userName,console.log("IMAGEPESO_",e),[4,g.w4.insertImg(n,t,r,o,a,u)];case 1:return c=i.sent(),console.log("INSERT_IMG__",c),[2,c];case 2:return d=i.sent(),console.log(d),[3,3];case 3:return[2]}})}),function(e){return H.apply(this,arguments)}),el=(W=(0,r.Z)(function(e){var t,n,r,a,o,s,l,u,c,d,p,f,m=arguments;return(0,i.__generator)(this,function(i){switch(i.label){case 0:t=m.length>1&&void 0!==m[1]&&m[1],n=(0,v.get)("teacherCode"),r=(0,v.get)("dueno_session"),e.usuario=n,e.nameS3=(0,T.Z)(),a=e.name,o=e.nameS3,K(e),i.label=1;case 1:return i.trys.push([1,6,,7]),s=a.substring(a.lastIndexOf(".")+1,a.length),e.tipo=s,[4,g.w4.upload(e)];case 2:if(l=i.sent(),console.log("RESPUESTAUPLOAD___",l),200!==l)throw Error("Ocurrio un error inesperado.");if(console.log("y sigue aqui....",Boolean(t)),Boolean(t))return[3,4];return[4,ei(e)];case 3:i.sent(),i.label=4;case 4:return[4,ec("".concat(e.nameS3,".").concat(s))];case 5:return c=i.sent().url,console.log("fileUrl",c),[2,{url:c,nameS3:o,AluCode:d=n,Adviser:r.toUpperCase()}];case 6:return f=i.sent(),console.log(f),_().fire({title:"Portal de Docentes",text:"Ocurrio un error inesperado.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[3,7];case 7:return[2]}})}),function(e){return W.apply(this,arguments)}),eu=function(e,t,n,r,a,o){L((0,s.Z)(R).concat([{url:e,name:t,nameS3:n,tipo:r,AluCode:a,Adviser:o}]))},ec=(Y=(0,r.Z)(function(e){var t,n;return(0,i.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,g.w4.download(e)];case 1:return t=r.sent(),console.log("URL_UPLOAD",t),[2,t];case 2:return n=r.sent(),console.log(n),[3,3];case 3:return[2]}})}),function(e){return Y.apply(this,arguments)}),ed=(Q=(0,r.Z)(function(e){var t,r,o,s,l,u,c,d;return(0,i.__generator)(this,function(i){switch(i.label){case 0:if(C(!0),!es(e))return[3,4];t=(0,a.Z)({},q,e),console.log("NEWWWOBJJ__:",t),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,el(t)];case 2:return o=(r=i.sent()).url,s=r.nameS3,l=r.AluCode,u=r.Adviser,c=e.name.substring(e.name.lastIndexOf(".")+1,e.name.length),eu(o,t.name,s,c,l,u),K(n),[3,4];case 3:return d=i.sent(),K(n),console.log(d),[3,4];case 4:return C(!1),[2]}})}),function(e){return Q.apply(this,arguments)}),ep=P.ddlTipo,ef=P.ddlSubTipo,em=(X=(0,r.Z)(function(e){var n,s,l,u,c,d,p,f;return(0,i.__generator)(this,function(s){switch(s.label){case 0:if(e.preventDefault(),k((0,o.Z)((0,a.Z)({},P),{txtDescripcion:z})),!z.trim()||z.length<20)return _().fire({title:"Portal de Docentes",text:"Debe describir la consulta a derivar.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[2];if("0"===ep)return _().fire({title:"Portal de Docentes",text:"Debe seleccionar el Tipo para la consulta.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[2];if("0"===ef)return _().fire({title:"Portal de Docentes",text:"Debe seleccionar el SubTipo para la consulta.",icon:"warning",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),[2];s.label=1;case 1:return s.trys.push([1,4,,5]),C(!0),n={teacherCode:(0,v.get)(w.FD),query:z,type:ep,subType:ef},[4,g.w4.insertConsulta(n)];case 2:return l=s.sent().data[0],u="\n			<div>\n			<p>Estimado(a) ".concat(l.teacherName,"</p>\n			<br/>\n			<p>\n					Acabas de registrar la siguiente consulta en Soporte Virtual UPN:\n					<br/><br/>\n					C\xf3digo de la Consulta: <b>").concat(l.queryCode,"</b>.<br/>\n					Tipo: <b>").concat(l.type,"</b>.<br/>\n					Subtipo: <b>").concat(l.subType,"</b>.<br/>\n			</p>\n			<br/>\n			<br/>\n			Saludos,<br/>Soporte Virtual UPN\n			<br/>\n			<br/>\n			</div>\n			"),c={EmailList:[l.teacherEmail],DisplayName:"UPN Docentes",Subject:"Registro de Consulta - ".concat(l.queryCode),IsHtml:!0,ReplyToList:[l.teacherEmail],AttachmentB64:null,AttachmentName:null,NotificationType:1,EmailListCC:null,EmailListBCC:null,Queue:!0,Body:u},[4,g.w4.email(c)];case 3:if(d=s.sent(),console.log("emailResp",d.data),"OK"===(p=d.data)||"200"===p||"NOK"===p){var m;_().fire({title:"Portal de Docentes",text:"La consulta fue registrada correctamente.",icon:"success",showCancelButton:!1,confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((m=(0,r.Z)(function(e){return(0,i.__generator)(this,function(n){return e.isConfirmed&&(k(t),C(!1),window.location.href="/soporte-virtual"),[2]})}),function(e){return m.apply(this,arguments)}))}return[3,5];case 4:return f=s.sent(),console.log(f),[3,5];case 5:return C(!1),[2]}})}),function(e){return X.apply(this,arguments)}),eh=(0,u.useRef)(null),eg=($=(0,r.Z)(function(){var e;return(0,i.__generator)(this,function(t){return console.log("testHandleImage"),(e=document.createElement("input")).setAttribute("type","file"),e.setAttribute("accept","image/*"),e.click(),e.onchange=(0,r.Z)(function(){var t,n,r,a,o,s,l,u,c;return(0,i.__generator)(this,function(n){switch(n.label){case 0:t=null==e?void 0:e.files[0],new FormData().append("image",t),r=t.name,a=t.type,console.log("FILEEEE_",t),o={file:t,name:r,type:a,size:t.size},console.log("TOUPLOAD__",o),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,el(o,!0)];case 2:return s=n.sent(),console.log("RESPUESTAUPLOAD___",s),l=eh.current.getEditorSelection(),u=s.url,eh.current.getEditor().insertEmbed(l.index,"image",u),[3,4];case 3:return c=n.sent(),console.log(c),[3,4];case 4:return[2]}})}),[2]})}),function(){return $.apply(this,arguments)}),eb=(ee=(0,r.Z)(function(e,t,n,r){var a,o,s,l;return(0,i.__generator)(this,function(s){switch(s.label){case 0:e.preventDefault(),console.log("removeImagen",t),s.label=1;case 1:return s.trys.push([1,4,,5]),C(!0),[4,g.w4.deleteImgAws(t)];case 2:return a=s.sent(),console.log("deleteAws",a.data),[4,g.w4.cleanAnexo(n,t,r)];case 3:return o=s.sent(),console.log("respClean",o.data),L(R.filter(function(e){return e.nameS3!==t})),C(!1),[3,5];case 4:return l=s.sent(),console.log(l),C(!1),[3,5];case 5:return[2]}})}),function(e,t,n,r){return ee.apply(this,arguments)}),e_=(et=(0,r.Z)(function(){var e,t,n,a;return(0,i.__generator)(this,function(o){switch(o.label){case 0:console.log("Clear File Loses"),e=(0,v.get)("teacherCode"),t=(0,v.get)("dueno_session"),o.label=1;case 1:return o.trys.push([1,4,,5]),[4,g.w4.fileAsesor(e,t)];case 2:var s;return n=o.sent(),console.log("clearFileLoses",n.data),[4,Promise.all(n.data.map((s=(0,r.Z)(function(n){var r,a;return(0,i.__generator)(this,function(o){switch(o.label){case 0:return[4,g.w4.deleteImgAws(n.state)];case 1:return r=o.sent(),console.log("deleteAws",r.data),[4,g.w4.cleanAnexo(e,n.state,t)];case 2:return a=o.sent(),console.log("respClean",a.data),[2]}})}),function(e){return s.apply(this,arguments)})))];case 3:return o.sent(),[3,5];case 4:return a=o.sent(),console.log(a),[3,5];case 5:return[2]}})}),function(){return et.apply(this,arguments)});return(0,l.jsx)("form",{onSubmit:function(e){return em(e)},children:(0,l.jsxs)("div",{className:d().contenido,children:[(0,l.jsx)(p.Z,{loading:b}),(0,l.jsx)("div",{className:d().content,children:(0,l.jsxs)("div",{className:d().newConsulta,children:[(0,l.jsx)("div",{className:d().titulo,children:(0,l.jsx)(f.Z,{classname:"text-warning h5 mt-3 mb-3 text-center",children:"Nueva Consulta"})}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"form-group row mb-3",children:[(0,l.jsx)("label",{className:"col-md-3 text-end",children:(0,l.jsx)("b",{children:"tipo:"})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)(h.ZP,{options:B,id:"ddlTipo",instanceId:"ddlTipo",name:"ddlTipo",defaultValue:ea(ep,B),onChange:function(e){return er(e,"ddlTipo")}})})]})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"form-group row mb-3",children:[(0,l.jsx)("label",{className:"col-md-3 text-end",children:(0,l.jsx)("b",{children:"Sub Tipo:"})}),(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)(h.ZP,{options:I,id:"ddlSubTipo",instanceId:"ddlSubTipo",name:"ddlSubTipo",defaultValue:ea(ef,I),onChange:function(e){return er(e,"ddlSubTipo")},isDisabled:"0"===ep,value:ea(ef,I)})})]})})]}),(0,l.jsx)("label",{children:(0,l.jsx)("b",{children:"Por favor describa su consulta:"})}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"adjuntos",children:[(0,l.jsx)("ul",{id:"cphSite_body_list_load_file",className:'body-list-load-file list-unstyled row"',children:R.map(function(e,t){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("a",{href:"#",className:"text-decoration-none","data-names3":e.nameS3,onClick:function(t){return eb(t,e.nameS3,e.AluCode,e.Adviser)},children:[(0,l.jsx)(x.G,{icon:j.NBC,className:"fa-sm"}),"\xa0\xa0"]}),(0,l.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[(0,l.jsx)(x.G,{icon:eo("".concat(e.name,".").concat(e.tipo)),className:"fa-sm me-2"}),e.name]})]},t)})}),(0,l.jsx)("div",{children:(0,l.jsx)(y.Z,{labelText:q.name,multiple:!1,imagePreview:!1,callbackFunction:function(e){ed(e)},accept:"png",buttonComponent:(0,l.jsxs)("label",{className:"btn-default font-weight-normal",style:{fontSize:"12px",maxHeight:"16px",cursor:"pointer"},children:[(0,l.jsx)("small",{children:(0,l.jsx)(x.G,{icon:j.Alc,className:"fa-sm"})}),"Adjuntar archivos"," ",(0,l.jsx)("small",{children:"(max. 5MB por adjunto)"})]}),labelStyle:{fontSize:16,color:"rgba(0, 0, 0, 0.298039)",padding:"0.375rem 0.75rem",border:"1px solid #dee2e6",borderRadius:"0.25rem 0 0 0.25rem",minHeight:"38px",verticalAlign:"middle",lineHeight:"1.5",width:"70%",display:"none"}})})]})}),(0,l.jsx)("br",{}),(0,l.jsx)(E,{refe:eh,value:z,set:M,handleImage:eg})]}),(0,l.jsxs)("div",{className:"d-flex justify-content-center mt-3",children:[(0,l.jsx)(m.Z,{type:"button",variant:"secondary",size:"medium",classname:"mb-3",onclick:function(){return history.back()},children:"Regresar"}),(0,l.jsx)(m.Z,{type:"button",variant:"primary",size:"medium",classname:"mb-3 ms-3",onclick:function(e){return em(e)},children:"Registrar mi Consulta"})]})]})})]})})};t.default=P},72169:function(e){e.exports={small:"button_small__7bbNh",medium:"button_medium__a2eos",large:"button_large__A_BJ0",primary:"button_primary__2xniq",secondary:"button_secondary__3F83R"}},15605:function(){},91121:function(e){e.exports={header:"soporteVirtual_header__I_7sd",content:"soporteVirtual_content__FqwrJ",title:"soporteVirtual_title__Tjqfp",headerContent:"soporteVirtual_headerContent__Zsw5J",navbr:"soporteVirtual_navbr__GyzMA",contenido:"soporteVirtual_contenido__uV612",newConsulta:"soporteVirtual_newConsulta__VG4FH",titulo:"soporteVirtual_titulo__Jsb4_",contentBtn:"soporteVirtual_contentBtn__4UWoV",alertaContent:"soporteVirtual_alertaContent__1cM4T",rowButtons:"soporteVirtual_rowButtons__9J4nQ",marco:"soporteVirtual_marco__Sjx5B",tabla:"soporteVirtual_tabla__zM7YP",footer:"soporteVirtual_footer__M_vY7",contentFooter:"soporteVirtual_contentFooter__BKEyr","ql-editor":"soporteVirtual_ql-editor___Ocap",editor:"soporteVirtual_editor__LAQU8"}},78312:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(67294),o=c(a),s=n(45697),i=c(s),l=n(99998),u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={image_objs_array:[]},n}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"simulateClickOnInput",value:function(){var e=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});this.fileInput.dispatchEvent(e)}},{key:"handleFileChange",value:function(e){for(var t=this,n=e.target.files,r=[],a=0;a<n.length;a++)!function(e){var a=n[e],o=new FileReader;o.readAsDataURL(a),o.onload=function(){var e={name:a.name,type:a.type,size:Math.round(a.size/1e3),base64:o.result,file:a};r.push(e),r.length===n.length&&(t.props.multiple?(t.setState({image_objs_array:r}),t.props.callbackFunction(r)):(t.setState({image_objs_array:r}),t.props.callbackFunction(r[0])))}}(a)}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{style:this.props.parentStyle},o.default.createElement("label",{htmlFor:this.props.inputId,style:this.props.labelStyle},this.props.labelText),this.props.imagePreview&&(0!==this.state.image_objs_array.length||0!==this.props.defaultFiles.length)&&o.default.createElement("div",{style:this.props.imageContainerStyle},0!==this.state.image_objs_array.length&&this.state.image_objs_array.map(function(t){return"image"===t.type.split("/")[0]?o.default.createElement("img",{alt:t.name,src:t.base64,key:t.name,style:e.props.imageStyle}):o.default.cloneElement(e.props.nonPreviewComponent,{type:t.type,size:t.size,title:t.name,key:t.name})}),0===this.state.image_objs_array.length&&this.props.defaultFiles.map(function(t,n){return o.default.createElement("img",{alt:"Preview "+n,src:t,key:n,style:e.props.imageStyle})})),o.default.createElement("input",{name:this.props.inputName,id:this.props.inputId,type:"file",onChange:this.handleFileChange.bind(this),multiple:this.props.multiple,accept:this.props.accept,ref:function(t){e.fileInput=t},style:{display:"none"}}),this.props.textBoxVisible&&o.default.cloneElement(this.props.textFieldComponent,this.props.useTapEventPlugin?{onTouchTap:function(){e.simulateClickOnInput()},value:1===this.state.image_objs_array.length?this.state.image_objs_array[0].name:this.state.image_objs_array.length>1?this.state.image_objs_array.length+" files selected":0===this.props.defaultFiles.length?"No files selected":"Leave empty to keep previous selection"}:{onClick:function(){e.simulateClickOnInput()},value:1===this.state.image_objs_array.length?this.state.image_objs_array[0].name:this.state.image_objs_array.length>1?this.state.image_objs_array.length+" files selected":0===this.props.defaultFiles.length?"No files selected":"Leave empty to keep previous selection"}),o.default.cloneElement(this.props.buttonComponent,this.props.useTapEventPlugin?{onTouchTap:function(){e.simulateClickOnInput()}}:{onClick:function(){e.simulateClickOnInput()}}))}}]),t}(a.Component);t.Z=d,d.defaultProps={callbackFunction:function(){},labelText:"File Upload",useTapEventPlugin:!1,multiple:!0,imagePreview:!0,textBoxVisible:!1,accept:"*",imageContainerStyle:{display:"flex",flexDirection:"row",width:"100%",flexWrap:"wrap"},imageStyle:{marginTop:5,marginBottom:5,marginRight:5,width:"auto",height:"30vmin",boxShadow:"rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px"},labelStyle:{fontSize:16,color:"rgba(0, 0, 0, 0.298039)",display:"block"},parentStyle:{marginTop:14},buttonComponent:o.default.createElement("button",{type:"button"},"Attach"),nonPreviewComponent:o.default.createElement(u.default,null),textFieldComponent:o.default.createElement("input",{type:"text"}),defaultFiles:[]},d.propTypes={inputName:i.default.string,inputId:i.default.string,callbackFunction:i.default.func,labelText:i.default.string,useTapEventPlugin:i.default.bool,multiple:i.default.bool,imagePreview:i.default.bool,textBoxVisible:i.default.bool,accept:i.default.string,imageContainerStyle:i.default.object,imageStyle:i.default.object,labelStyle:i.default.object,parentStyle:i.default.object,buttonComponent:i.default.element,nonPreviewComponent:i.default.element,textFieldComponent:i.default.element,defaultFiles:i.default.array}},99998:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=(r=n(67294),r&&r.__esModule?r:{default:r}),s=function(e){var t=e.title,n=void 0===t?"No Preview":t,r=e.size,a=e.type,s=void 0===a?null:a;return o.default.createElement("div",{style:{backgroundColor:"#FFFFFF",height:"30vmin",width:"30vmin",marginTop:5,marginBottom:5,marginRight:5,boxShadow:"rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px",overflow:"hidden"}},o.default.createElement("div",{style:{margin:5}},o.default.createElement("p",{style:{margin:0,fontWeight:"500"}},n.split(".")[0]),o.default.createElement("p",{style:{margin:0}},(void 0===r?null:r)+" kb"),o.default.createElement("p",{style:{margin:0}},""!==s?s.split("/")[1]:n.split(".")[1])))};t.default=s},25934:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r,a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}for(var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=[],l=0;l<256;++l)i.push((l+256).toString(16).substr(1));var u=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(i[e[n+0]]+i[e[n+1]]+i[e[n+2]]+i[e[n+3]]+"-"+i[e[n+4]]+i[e[n+5]]+"-"+i[e[n+6]]+i[e[n+7]]+"-"+i[e[n+8]]+i[e[n+9]]+"-"+i[e[n+10]]+i[e[n+11]]+i[e[n+12]]+i[e[n+13]]+i[e[n+14]]+i[e[n+15]]).toLowerCase();if(!("string"==typeof r&&s.test(r)))throw TypeError("Stringified UUID is invalid");return r},c=function(e,t,n){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return u(r)}}},function(e){e.O(0,[4976,4969,9603,6006,9774,2888,179],function(){return e(e.s=97721)}),_N_E=e.O()}]);