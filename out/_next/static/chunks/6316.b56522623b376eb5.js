"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6316],{53439:function(e,t,n){n.d(t,{Ed:function(){return i},UI:function(){return l},XW:function(){return a}});var r=n(67294);function l(e,t){let n=0;return r.Children.map(e,e=>r.isValidElement(e)?t(e,n++):e)}function i(e,t){let n=0;r.Children.forEach(e,e=>{r.isValidElement(e)&&t(e,n++)})}function a(e,t){return r.Children.toArray(e).some(e=>r.isValidElement(e)&&e.type===t)}},43818:function(e,t,n){var r=n(94184),l=n.n(r),i=n(67294),a=n(45697),s=n.n(a),c=n(85893);let o={type:s().string,tooltip:s().bool,as:s().elementType},d=i.forwardRef(({as:e="div",className:t,type:n="valid",tooltip:r=!1,...i},a)=>(0,c.jsx)(e,{...i,ref:a,className:l()(t,`${n}-${r?"tooltip":"feedback"}`)}));d.displayName="Feedback",d.propTypes=o,t.Z=d},6316:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(94184),l=n.n(r),i=n(67294),a=n(43818),s=n(91377),c=n(76792),o=n(85893);let d=i.forwardRef(({id:e,bsPrefix:t,className:n,type:r="checkbox",isValid:a=!1,isInvalid:d=!1,as:u="input",...f},h)=>{let{controlId:p}=(0,i.useContext)(s.Z);return t=(0,c.vE)(t,"form-check-input"),(0,o.jsx)(u,{...f,ref:h,type:r,id:e||p,className:l()(n,t,a&&"is-valid",d&&"is-invalid")})});d.displayName="FormCheckInput";let u=i.forwardRef(({bsPrefix:e,className:t,htmlFor:n,...r},a)=>{let{controlId:d}=(0,i.useContext)(s.Z);return e=(0,c.vE)(e,"form-check-label"),(0,o.jsx)("label",{...r,ref:a,htmlFor:n||d,className:l()(t,e)})});u.displayName="FormCheckLabel";var f=n(53439);let h=i.forwardRef(({id:e,bsPrefix:t,bsSwitchPrefix:n,inline:r=!1,reverse:h=!1,disabled:p=!1,isValid:m=!1,isInvalid:v=!1,feedbackTooltip:x=!1,feedback:k,feedbackType:b,className:y,style:C,title:E="",type:j="checkbox",label:N,children:w,as:Z="input",...F},I)=>{t=(0,c.vE)(t,"form-check"),n=(0,c.vE)(n,"form-switch");let{controlId:R}=(0,i.useContext)(s.Z),V=(0,i.useMemo)(()=>({controlId:e||R}),[R,e]),$=!w&&null!=N&&!1!==N||(0,f.XW)(w,u),_=(0,o.jsx)(d,{...F,type:"switch"===j?"checkbox":j,ref:I,isValid:m,isInvalid:v,disabled:p,as:Z});return(0,o.jsx)(s.Z.Provider,{value:V,children:(0,o.jsx)("div",{style:C,className:l()(y,$&&t,r&&`${t}-inline`,h&&`${t}-reverse`,"switch"===j&&n),children:w||(0,o.jsxs)(o.Fragment,{children:[_,$&&(0,o.jsx)(u,{title:E,children:N}),k&&(0,o.jsx)(a.Z,{type:b,tooltip:x,children:k})]})})})});h.displayName="FormCheck";var p=Object.assign(h,{Input:d,Label:u})},91377:function(e,t,n){var r=n(67294);let l=r.createContext({});t.Z=l}}]);