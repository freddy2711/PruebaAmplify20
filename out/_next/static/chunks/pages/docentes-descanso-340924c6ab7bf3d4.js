(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{55655:function(e,t,n){var a;(a=function(e){"use strict";//! moment.js locale configuration
var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),a=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i,],s=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;return e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?n[e.month()]:t[e.month()]:t},monthsRegex:s,monthsShortRegex:s,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:a,longMonthsParse:a,shortMonthsParse:a,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%d\xba",week:{dow:1,doy:4},invalidDate:"Fecha inv\xe1lida"})})(n(30381))},40538:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docentes-descanso",function(){return n(61893)}])},84555:function(e,t,n){"use strict";var a=n(85893),s=n(94184),o=n.n(s),r=n(72169),i=n.n(r),c=n(95821),d=i(),l=function(e){var t=e.children,n=e.type,s=e.classname,r=e.variant,l=e.size,u=e.disabled,m=e.onclick,_=e.name,h="btn-".concat(void 0===r?"btn-default":r),b=o()("btn",h,(0,c.IO)(i(),void 0===s?"":s),d[void 0===l?"medium":l]);return(0,a.jsx)("button",{name:_,type:void 0===n?"button":n,className:b,onClick:m,disabled:void 0!==u&&u,children:void 0===t?"Guardar":t})};t.Z=l},31545:function(e,t,n){"use strict";var a=n(85893),s=n(94184),o=n.n(s),r=n(95821),i=n(34119),c=n.n(i),d=function(e){var t=e.type,n=e.name,s=e.id,i=e.classname,d=e.onchange,l=e.disabled,u=e.placeholder,m=e.defaultValue,_=e.style,h=e.min,b=e.max,v=e.value,x=e.readOnly,f=e.onClick,p=o()("form-control",(0,r.IO)(c(),void 0===i?"":i));return(0,a.jsx)("input",{id:s,type:t,name:n,className:p,disabled:void 0!==l&&l,placeholder:void 0===u?"placeholder":u,onChange:d,defaultValue:m,style:_,min:h,max:b,value:v,readOnly:x,onClick:f})};t.Z=d},57870:function(e,t,n){"use strict";var a=n(85893),s=n(94184),o=n.n(s),r=n(15605),i=n.n(r)(),c=function(e){var t=e.classname,n=void 0===t?"":t,s=e.children,r=e.idFor,c=o()(i[n]?i[n]:n);return(0,a.jsx)("label",{htmlFor:r,className:c,children:void 0===s?"label text":s})};t.Z=c},61893:function(e,t,n){"use strict";n.r(t);var a=n(34727),s=n(70655),o=n(85893),r=n(67294),i=n(11163),c=n.n(i),d=n(57870),l=n(31545),u=n(84555),m=n(56318),_=n.n(m),h=n(27201),b=n(98521),v=n(5152),x=n.n(v),f=n(42222),p=n(69706);n(55655);var j=x()(function(){return Promise.all([n.e(1427),n.e(8072),n.e(5489)]).then(n.bind(n,14146))},{loadableGenerated:{webpack:function(){return[14146]}},ssr:!1}),y=[{label:"Nro Solicitud",field:"numberSolicite",sort:"asc"},{label:"Fecha",field:"dateSolicite",sort:"asc"},{label:"Estado",field:"state",sort:"asc"},{label:"Aprobado Por",field:"objapprover.idTeacher",sort:"asc"},],D={nameTeacher:"",codeSemester:"",startSemester:"",endSemester:""},g=function(){var e,t=(0,r.useState)(!1),n=t[0],i=t[1],m=(0,r.useState)([]),v=m[0],x=m[1],g=(0,r.useState)(D),S=g[0],w=g[1],M=(0,p.rB)(new Date),N=(e=(0,a.Z)(function(){var e,t,n,a;return(0,s.__generator)(this,function(s){switch(s.label){case 0:return e=(0,f.get)(p.FD),[4,b.$I.TeacherBreak(e)];case 1:if(t=s.sent(),void 0===(0,p.nt)(t,i))return[2];return w(t[0]),(0,f.set)(p.Wd,t[0]),n={codeTeacher:t[0].codeTeacher,codeSemester:t[0].idSemester,idSemester:t[0].idSemester,datetramit:M},(0,f.set)(p.WG,n),[4,b.$I.RequestWorker(n)];case 2:if(a=s.sent(),void 0===(0,p.nt)(a,i))return[2];return x(a),(0,f.set)(p.Vy,a),[2]}})}),function(){return e.apply(this,arguments)});(0,r.useEffect)(function(){N()},[]);var k=function(){c().push("./docentes-descanso/descansoactualiza")};return(0,o.jsxs)("div",{className:_().contenido,children:[(0,o.jsx)(h.Z,{loading:n}),(0,o.jsxs)("div",{className:_().content,children:[(0,o.jsx)("div",{className:_().titulo,children:(0,o.jsx)(d.Z,{classname:"text-warning h5 mt-3 mb-3",children:"Registro de d\xeda de descanso - Docente Virtual"})}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"col-12 row mt-3",children:[(0,o.jsxs)("div",{className:"col-md-6 ",children:[(0,o.jsx)(d.Z,{children:"Docente :"}),(0,o.jsx)(l.Z,{id:"txtnameTeacher",name:"txtnameTeacher",type:"text",placeholder:"Docente",value:null==S?void 0:S.nameTeacher,classname:_().centerInput,disabled:!0})]}),(0,o.jsxs)("div",{className:"col-md-6 ",children:[(0,o.jsx)(d.Z,{children:"Semestre :"}),(0,o.jsx)(l.Z,{id:"txtcodeSemester",name:"txtcodeSemester",type:"text",placeholder:"Semestre",value:null==S?void 0:S.codeSemester,classname:_().centerInput,disabled:!0})]})]}),(0,o.jsxs)("div",{className:"col-12 row mt-3",children:[(0,o.jsxs)("div",{className:"col-md-6 mb-3",children:[(0,o.jsx)(d.Z,{children:"Fecha Inicio :"}),(0,o.jsx)(l.Z,{id:"txtstartSemester",name:"txtstartSemester",type:"text",placeholder:"Fecha Inicio ",value:null==S?void 0:S.startSemester,classname:_().centerInput,disabled:!0})]}),(0,o.jsxs)("div",{className:"col-md-6",children:[(0,o.jsx)(d.Z,{children:"Fecha Fin :"}),(0,o.jsx)(l.Z,{id:"txtendSemester",name:"txtendSemester",type:"text",placeholder:"Fecha Fin",value:null==S?void 0:S.endSemester,classname:_().centerInput,disabled:!0})]})]}),(0,o.jsx)("div",{className:"col-6 row mt-3 mb-3",children:(0,o.jsx)("div",{className:"form-group col-md-6 mb-3",children:(0,o.jsx)(u.Z,{type:"button",variant:"info",onclick:function(){return k()},children:"Actualiza d\xeda de descanso."})})}),(0,o.jsx)("div",{className:"col-6 row mb-1",children:(0,o.jsx)("div",{className:"form-group col-md-6",children:"Estado de solicitudes enviadas:"})}),(0,o.jsx)("hr",{}),(0,o.jsx)("div",{className:_().tablaCenter,children:(0,o.jsx)(j,{columns:y,listData:v})})]})]})};g.title="Descanso Docente",t.default=g},72169:function(e){e.exports={small:"button_small__7bbNh",medium:"button_medium__a2eos",large:"button_large__A_BJ0",primary:"button_primary__2xniq",secondary:"button_secondary__3F83R"}},34119:function(){},15605:function(){},56318:function(e){e.exports={header:"Descanso_header__eqvXs",content:"Descanso_content__cCXan",title:"Descanso_title__0Eq2H",headerContent:"Descanso_headerContent__EV3IO",navbr:"Descanso_navbr__Fvpj_","ant-badge-status-text":"Descanso_ant-badge-status-text__C60Tj",rightButton:"Descanso_rightButton__X0q0h",centerInput:"Descanso_centerInput__QKLHS",Activeclass:"Descanso_Activeclass__5OZ_P",InactiveClass:"Descanso_InactiveClass__xge5e",ButtonMini:"Descanso_ButtonMini__R6cBA",site_calendar_demo_card:"Descanso_site_calendar_demo_card__mlppS",contenido:"Descanso_contenido__0whgd",titulo:"Descanso_titulo__A77zy",alertaContent:"Descanso_alertaContent__IMI3y",rowButtons:"Descanso_rowButtons__SkyfZ",tabla:"Descanso_tabla__aBmYw",tablaCenter:"Descanso_tablaCenter__RhAKb",footer:"Descanso_footer__vf6of",contentFooter:"Descanso_contentFooter__zsOyg"}},11163:function(e,t,n){e.exports=n(90387)}},function(e){e.O(0,[4885,6006,9774,2888,179],function(){return e(e.s=40538)}),_N_E=e.O()}]);