(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1803],{1803:function(e,r,t){"use strict";t.r(r);var n=t(14251),o=t(52875),l=t(85893),a=t(94184),i=t.n(a),s=t(33058),d=t.n(s),c=t(35005),u=t(44020),f=d(),h=function(e){var r=e.classname,t=void 0===r?"":r,a=e.children,s=e.props,d=e.show,h=e.onHide,m=e.onGuardar,p=e.onclickguardar,v=e.titulo,Z=e.size,b=i()(f[t]?f[t]:t);return(0,l.jsxs)(u.Z,(0,o.Z)((0,n.Z)({className:b},s),{show:d,onHide:h,size:Z,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[(0,l.jsx)(u.Z.Header,{closeButton:!0,children:(0,l.jsx)(u.Z.Title,{id:"contained-modal-title-vcenter",children:v})}),(0,l.jsx)(u.Z.Body,{children:a}),(0,l.jsxs)(u.Z.Footer,{children:[m?(0,l.jsx)(c.Z,{onClick:p,children:"Guardar"}):"",(0,l.jsx)(c.Z,{variant:"secondary",onClick:h,children:"Cerrar"})]})]}))};r.default=h},33058:function(){},44020:function(e,r,t){"use strict";t.d(r,{Z:function(){return O}});var n,o=t(94184),l=t.n(o),a=t(47923),i=t(38480),s=t(14709),d=t(74672);function c(e){if((!n&&0!==n||e)&&i.Z){var r=document.createElement("div");r.style.position="absolute",r.style.top="-9999px",r.style.width="50px",r.style.height="50px",r.style.overflow="scroll",document.body.appendChild(r),n=r.offsetWidth-r.clientWidth,document.body.removeChild(r)}return n}var u=t(32092),f=t(78146),h=t(35654),m=t(76852),p=t(27617),v=t(67294),Z=t(43282),b=t(47314),g=t(41068),y=t(75528),x=(0,y.Z)("modal-body"),w=t(36467),N=t(76792),j=t(85893);let k=v.forwardRef(({bsPrefix:e,className:r,contentClassName:t,centered:n,size:o,fullscreen:a,children:i,scrollable:s,...d},c)=>{e=(0,N.vE)(e,"modal");let u=`${e}-dialog`,f="string"==typeof a?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return(0,j.jsx)("div",{...d,ref:c,className:l()(u,r,o&&`${e}-${o}`,n&&`${u}-centered`,s&&`${u}-scrollable`,a&&f),children:(0,j.jsx)("div",{className:l()(`${e}-content`,t),children:i})})});k.displayName="ModalDialog";var C=(0,y.Z)("modal-footer"),E=t(703);let R=v.forwardRef(({bsPrefix:e,className:r,...t},n)=>(e=(0,N.vE)(e,"modal-header"),(0,j.jsx)(E.Z,{ref:n,...t,className:l()(r,e)})));R.displayName="ModalHeader",R.defaultProps={closeLabel:"Close",closeButton:!1};var T=t(39602);let $=(0,T.Z)("h4");var D=(0,y.Z)("modal-title",{Component:$});function F(e){return(0,j.jsx)(g.Z,{...e,timeout:null})}function H(e){return(0,j.jsx)(g.Z,{...e,timeout:null})}let A=v.forwardRef(({bsPrefix:e,className:r,style:t,dialogClassName:n,contentClassName:o,children:g,dialogAs:y,"aria-labelledby":x,"aria-describedby":k,"aria-label":C,show:E,animation:R,backdrop:T,keyboard:$,onEscapeKeyDown:D,onShow:A,onHide:O,container:S,autoFocus:_,enforceFocus:B,restoreFocus:I,restoreFocusOptions:M,onEntered:z,onExit:P,onExiting:U,onEnter:W,onEntering:G,onExited:K,backdropClassName:L,manager:q,...J},Q)=>{let[V,X]=(0,v.useState)({}),[Y,ee]=(0,v.useState)(!1),er=(0,v.useRef)(!1),et=(0,v.useRef)(!1),en=(0,v.useRef)(null),[eo,el]=(0,u.Z)(),ea=(0,h.Z)(Q,el),ei=(0,f.Z)(O),es=(0,N.SC)();e=(0,N.vE)(e,"modal");let ed=(0,v.useMemo)(()=>({onHide:ei}),[ei]);function ec(){return q||(0,b.t)({isRTL:es})}function eu(e){if(!i.Z)return;let r=ec().getScrollbarWidth()>0,t=e.scrollHeight>(0,s.Z)(e).documentElement.clientHeight;X({paddingRight:r&&!t?c():void 0,paddingLeft:!r&&t?c():void 0})}let ef=(0,f.Z)(()=>{eo&&eu(eo.dialog)});(0,m.Z)(()=>{(0,d.Z)(window,"resize",ef),null==en.current||en.current()});let eh=()=>{er.current=!0},em=e=>{er.current&&eo&&e.target===eo.dialog&&(et.current=!0),er.current=!1},ep=()=>{ee(!0),en.current=(0,p.Z)(eo.dialog,()=>{ee(!1)})},ev=e=>{e.target===e.currentTarget&&ep()},eZ=e=>{if("static"===T){ev(e);return}if(et.current||e.target!==e.currentTarget){et.current=!1;return}null==O||O()},eb=e=>{$||"static"!==T?$&&D&&D(e):(e.preventDefault(),ep())},eg=(e,r)=>{e&&eu(e),null==W||W(e,r)},ey=e=>{null==en.current||en.current(),null==P||P(e)},ex=(e,r)=>{null==G||G(e,r),(0,a.ZP)(window,"resize",ef)},ew=e=>{e&&(e.style.display=""),null==K||K(e),(0,d.Z)(window,"resize",ef)},eN=(0,v.useCallback)(r=>(0,j.jsx)("div",{...r,className:l()(`${e}-backdrop`,L,!R&&"show")}),[R,L,e]),ej={...t,...V};ej.display="block";let ek=t=>(0,j.jsx)("div",{role:"dialog",...t,style:ej,className:l()(r,e,Y&&`${e}-static`),onClick:T?eZ:void 0,onMouseUp:em,"aria-label":C,"aria-labelledby":x,"aria-describedby":k,children:(0,j.jsx)(y,{...J,onMouseDown:eh,className:n,contentClassName:o,children:g})});return(0,j.jsx)(w.Z.Provider,{value:ed,children:(0,j.jsx)(Z.Z,{show:E,ref:ea,backdrop:T,container:S,keyboard:!0,autoFocus:_,enforceFocus:B,restoreFocus:I,restoreFocusOptions:M,onEscapeKeyDown:eb,onShow:A,onHide:O,onEnter:eg,onEntering:ex,onEntered:z,onExit:ey,onExiting:U,onExited:ew,manager:ec(),transition:R?F:void 0,backdropTransition:R?H:void 0,renderBackdrop:eN,renderDialog:ek})})});A.displayName="Modal",A.defaultProps={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:k};var O=Object.assign(A,{Body:x,Header:R,Title:D,Footer:C,Dialog:k,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);