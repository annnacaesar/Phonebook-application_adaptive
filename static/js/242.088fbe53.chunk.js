"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[242],{2242:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,i,o,a,c,l,s,d,u,x,p,h,m,g,b=e(168),f=e(7691),Z=e(5212),v=f.ZP.div(r||(r=(0,b.Z)(["\n\twidth: 100%;\n\theight: 90vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\tbackground-image: url(",");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100%;\n"])),Z),j=f.ZP.div(i||(i=(0,b.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 440px;\n\t&:not(:last-child) {\n\t\tmargin-right: 5px;\n\t}\n"]))),y=(f.ZP.h1(o||(o=(0,b.Z)(["\n\ttext-align: center;\n\tfont-size: 72px;\n"]))),f.ZP.div(a||(a=(0,b.Z)(["\n\ttext-align: center;\n\tfont-size: 28px;\n"]))),e(5650)),P=e(5705),w=e(5206),k=(0,f.ZP)(P.l0)(c||(c=(0,b.Z)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n"]))),C=f.ZP.div(l||(l=(0,b.Z)(["\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tmargin: 10px 0 10px 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\n\t& label {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tfont-size: 22px;\n\t\tcolor: var(--color-label);\n\t\tmargin-bottom: 15px;\n\n\t\t&:not(:last-child) {\n\t\t\tmargin-right: 10px;\n\t\t}\n\t}\n"]))),z=(0,f.ZP)(P.Bc)(s||(s=(0,b.Z)(["\n\tfont-size: 14px;\n\tcolor: var(--color-warning);\n"]))),_=(0,f.ZP)(P.gN)(d||(d=(0,b.Z)(["\n\tbackground-color: var(--color-input);\n\twidth: 200px;\n\theight: 40px;\n\tmargin: 0;\n\tpadding: 0 15px 0 15px;\n\tborder-radius: 5px;\n"]))),A=f.ZP.button(u||(u=(0,b.Z)(["\n\twidth: 200px;\n\theight: 40px;\n\tborder-radius: 5px;\n\tcolor: var(--color-button);\n\tbackground-color: inherit;\n\tborder: 1px solid var(--color-button);\n"]))),N=e(1089),I=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,F=/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,L=function(){return N.Ry().shape({name:N.Z_().matches(F,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:N.Z_().matches(I,"Phone number must be digits and can contain spaces, dashes, parentheses and can start without +").required()})},M=e(9434),V=e(5987),q=e(184),B={name:"",number:""},D=function(){var n=(0,M.I0)(),t=(0,M.v9)(V.lP.getAllContacts);return(0,q.jsx)(P.J9,{initialValues:B,onSubmit:function(e,r){var i=r.resetForm;console.log(e),t.find((function(n){return n.name.toLowerCase().includes(e.name.toLowerCase())}))?w.Am.info("".concat(e.name," is already in contact")):n(V.mh.addContact(e)),i()},validationSchema:L,children:function(n){n.errors,n.touched,n.isValidating;return(0,q.jsxs)(k,{children:[(0,q.jsxs)(C,{children:[(0,q.jsxs)("label",{children:[(0,q.jsx)(_,{type:"text",name:"name"}),"Name",(0,q.jsx)(z,{component:"div",name:"name"})]}),(0,q.jsxs)("label",{children:[(0,q.jsx)(_,{type:"tel",name:"number"}),"Number phone",(0,q.jsx)(z,{component:"div",name:"number"})]})]}),(0,q.jsx)(A,{type:"submit",children:"ADD CONTACT"})]})}})},J=e(2791),S=f.ZP.input(x||(x=(0,b.Z)(["\n\tbackground-color: var(--color-input);\n\theight: 40px;\n\tmargin: 0;\n\tpadding: 0 15px 0 15px;\n\tborder-radius: 5px;\n\n\t&:not(:last-child) {\n\t\tmargin-right: 10px;\n\t}\n"]))),T=f.ZP.label(p||(p=(0,b.Z)(["\n\tmargin: 10px 0 10px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 22px;\n\tcolor: var(--color-label);\n"]))),$=function(){var n=(0,M.I0)(),t=(0,M.v9)(V.lP.getfilter);return(0,q.jsxs)(T,{children:[(0,q.jsx)(S,{type:"text",value:t,onChange:function(t){console.log(t.target.value),n((0,V.M6)(t.target.value))}}),"Find contact by name"]})},E=f.ZP.li(h||(h=(0,b.Z)(["\n\t&:not(:last-child) {\n\t\tmargin-bottom: 10px;\n\t}\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\tfont-size: 24px;\n"]))),O=f.ZP.p(m||(m=(0,b.Z)(["\n\tmargin-right: 10px;\n\tfont-size: 20px;\n"]))),R=f.ZP.button(g||(g=(0,b.Z)(["\n\tpadding: 0 5px 5px 5px;\n\tfont-size: 30px;\n\twidth: 40px;\n\tbackground-color: inherit;\n\tborder: 1px solid var(--color-button);\n\tborder-radius: 5px;\n\tcolor: var(--color-button);\n"]))),G=e(802),H=e(6674),K=function(){var n=(0,M.I0)(),t=(0,M.v9)(V.lP.getVisibleContacts);return(0,q.jsx)("ul",{children:(0,q.jsx)(G.Z,{className:"todo-list",children:t&&t.map((function(t){var e=t.id,r=t.name,i=t.number;return(0,q.jsx)(H.Z,{timeout:500,classNames:"item",children:(0,q.jsxs)(E,{children:[(0,q.jsxs)(O,{children:[r,": ",i]}),(0,q.jsx)(R,{type:"button",onClick:function(){return function(t){return n(V.mh.deleteContact(t))}(e)},children:"x"})]},e)},e)}))})})},Q=e(4289),U=function(){var n=(0,M.I0)(),t=(0,M.v9)(Q.M),e=(0,M.v9)(V.lP.getLoading);return(0,J.useEffect)((function(){t&&n(V.mh.fetchContacts())}),[n,t]),(0,q.jsxs)(v,{children:[(0,q.jsx)(j,{children:(0,q.jsx)(D,{})}),(0,q.jsxs)(j,{children:[e&&(0,q.jsx)(y.Nx,{width:"100",color:"#132b13"}),(0,q.jsx)($,{}),(0,q.jsx)(K,{})]})]})}},5212:function(n,t,e){n.exports=e.p+"static/media/book.e0d11b784a87fbc1696e.jpg"}}]);
//# sourceMappingURL=242.088fbe53.chunk.js.map