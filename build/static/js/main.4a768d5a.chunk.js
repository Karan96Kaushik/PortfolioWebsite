(this["webpackJsonpreact-draft-js-demo"]=this["webpackJsonpreact-draft-js-demo"]||[]).push([[0],{137:function(e,t,n){"use strict";(function(e){var a=n(0),o=n.n(a),r=n(263),l=n(146),c=n(264),i=n(143),u=n(144),s=n(145),d=n(267),m=n(265),g=n(138),h=n.n(g),f=n(139),b=n.n(f),y=n(53),p=["Karan","Nandita"],E=Object(r.a)({avatar:{backgroundColor:y.a[100],color:y.a[600]}});t.a=function(t){var n=E(),a=t.onClose,r=t.selectedValue,g=t.open,f=function(t){a(t),e.account=t};return o.a.createElement(m.a,{onClose:function(){a(r),e.account=r},"aria-labelledby":"simple-dialog-title",open:g},o.a.createElement(d.a,{id:"simple-dialog-title"},"Set backup account"),o.a.createElement(c.a,null,p.map((function(e){return o.a.createElement(i.a,{button:!0,onClick:function(){return f(e)},key:e},o.a.createElement(u.a,null,o.a.createElement(l.a,{className:n.avatar},o.a.createElement(h.a,null))),o.a.createElement(s.a,{primary:e}))})),o.a.createElement(i.a,{autoFocus:!0,button:!0,onClick:function(){return f("addAccount")}},o.a.createElement(u.a,null,o.a.createElement(l.a,null,o.a.createElement(b.a,null))),o.a.createElement(s.a,{primary:"Add account"}))))}}).call(this,n(30))},155:function(e,t,n){e.exports=n(262)},262:function(e,t,n){"use strict";n.r(t);var a=n(19),o=n(20),r=n(23),l=n(22),c=(n(102),n(0)),i=n.n(c),u=n(6),s=(n(78),n(31)),d=n(263),m=n(309),g=Object(d.a)((function(e){return{root:{"& > *":{backgroundColor:"#d9d9d9",color:"black",margin:e.spacing(1)}},button:{"&:hover":{backgroundColor:"grey"}}}}));function h(e){var t=g();return i.a.createElement("div",{className:t.root},i.a.createElement(m.a,{className:t.button,onClick:e._onClick,variant:"contained",color:"primary"},e._text))}var f=n(43),b=n(318),y=Object(d.a)((function(e){return{boot:{"& > *":{margin:e.spacing(1),width:"25ch",color:"white",textAlign:"left",borderColor:"yellow"},"& label":{color:"grey",fontSize:"10px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline":{borderBottomColor:"yellow"},"& .MuiInput-underline:after":{borderBottomColor:"white"}},overrides:{MuiInput:{underline:{"&:before":{borderBottom:"1px solid ".concat("grey")}}}}}}));function p(e){var t=y(),n=Object(c.useState)(""),a=Object(f.a)(n,2);a[0],a[1];return i.a.createElement(b.a,{onChange:e._onChange,spellCheck:!1,className:t.boot,id:"custom-css-standard-input",label:"Link"})}var E=n(13),v=(c.Component,function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this))._changed=function(t){e._value=t.target.value},e._value="",e._downlaod=e._downlaod.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"_downlaod",value:function(){this._value;var e={fname:this._value};fetch("http://creepyfuck.tech/down?"+function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}(e),{method:"POST"}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"side-padding-20"},i.a.createElement(p,{_onChange:this._changed}),i.a.createElement(h,{_onClick:this._downlaod,_text:"Download"}),i.a.createElement("br",null),i.a.createElement("a",{href:"http://creepyfuck.tech/Manga/"},i.a.createElement("img",{src:"/react/comic.png",height:"50px"}))),i.a.createElement("br",null))}}]),n}(c.Component)),C=(n(252),n(136)),O=n.n(C),k=E.KeyBindingUtil.hasCommandModifier;function _(e){return 83===e.keyCode&&k(e)?"myeditor-save":Object(E.getDefaultKeyBinding)(e)}var S=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).onChange=function(e){var t=e.getCurrentContent();o.saveContent(t),o.setState({editorState:e})},o.saveContent=O()((function(e){window.localStorage.setItem("content",JSON.stringify(Object(E.convertToRaw)(e)))}),1e3),o._getLengthOfSelectedText=function(){console.log("say");var e=o.state.editorState.getSelection(),t=0;if(!e.isCollapsed()){var n=o.state.editorState.getCurrentContent(),a=e.getStartKey(),r=e.getEndKey(),l=(e.getIsBackward(),n.getBlockMap(),n.getBlockForKey(a)),c=n.getBlockForKey(r),i=a===r,u=l.getLength(),s=(c.getLength(),u-e.getStartOffset()),d=e.getEndOffset(),m=n.getKeyAfter(r);if(i)t+=e.getEndOffset()-e.getStartOffset();else for(var g=a;g&&g!==m;)t+=g===a?s+1:g===r?d:n.getBlockForKey(g).getLength()+1,g=n.getKeyAfter(g)}return t},o._handleBeforeInput=function(){if(console.log("hello"),o.state.editorState.getCurrentContent().getPlainText("").length>9)return console.log("you can type max ten characters"),"handled"},o._handlePastedText=function(e){var t=o.state.editorState.getCurrentContent().getPlainText("").length,n=o._getLengthOfSelectedText();if(t+e.length-n>10)return console.log("you can type max ten characters"),"handled"},e.my_func&&(o.my_func=e.my_func),console.log(e.raw_state),e.raw_state?(console.log("Raw State Prop present",e.raw_state),o.state={editorState:E.EditorState.createWithContent(Object(E.convertFromRaw)(JSON.parse(e.raw_state)))}):o.state={editorState:E.EditorState.createEmpty()},o.onChange=o.onChange.bind(Object(s.a)(o)),o._getLengthOfSelectedText=o._getLengthOfSelectedText.bind(Object(s.a)(o)),o._handleBeforeInput=o._handleBeforeInput.bind(Object(s.a)(o)),o.focus=function(){return o.refs.editor.focus()},o.handleKeyCommand=o.handleKeyCommand.bind(Object(s.a)(o)),o.onTab=function(e){return o._onTab(e)},o.toggleBlockType=function(e){return o._toggleBlockType(e)},o.toggleInlineStyle=function(e){return o._toggleInlineStyle(e)},o}return Object(o.a)(n,[{key:"set_editor",value:function(e){this.setState({editorState:E.EditorState.createWithContent(Object(E.convertFromRaw)(JSON.parse(e)))})}},{key:"my_func",value:function(){console.log("My Function is Running")}},{key:"handleKeyCommand",value:function(e){if("myeditor-save"===e){var t=Object(E.convertToRaw)(this.state.editorState.getCurrentContent());Object(E.convertFromRaw)(t);return this.my_func(JSON.stringify(t)),console.log("saved",t),"handled"}return"not-handled"}},{key:"_handleKeyCommand",value:function(e){var t=this.state.editorState,n=E.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_onTab",value:function(e){this.onChange(E.RichUtils.onTab(e,this.state.editorState,4))}},{key:"_toggleBlockType",value:function(e){this.onChange(E.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){if("SAVE"==e){var t=Object(E.convertToRaw)(this.state.editorState.getCurrentContent());this.my_func(JSON.stringify(t))}else this.onChange(E.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),this.state.editorState?i.a.createElement("div",null,i.a.createElement("div",{className:"RichEditor-root"},i.a.createElement(I,{editorState:e,onToggle:this.toggleBlockType}),i.a.createElement(N,{editorState:e,onToggle:this.toggleInlineStyle}),i.a.createElement("div",{className:t,style:{backgroundColor:"white"},onClick:this.focus},i.a.createElement(E.Editor,{blockStyleFn:w,customStyleMap:j,editorState:e,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,onTab:this.onTab,placeholder:"Tell a story...",keyBindingFn:_,ref:"editor",spellCheck:!0,my_func:this.my_func})))):i.a.createElement("h3",{className:"loading"},"Loading...")}}]),n}(i.a.Component),j={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:12,padding:1}};function w(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var T=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(o.a)(n,[{key:"render",value:function(){var e="RichEditor-styleButton ui button";return this.props.active&&(e+=" RichEditor-activeButton"),i.a.createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),n}(i.a.Component),B=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],I=function(e){var t=e.editorState,n=t.getSelection(),a=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return i.a.createElement("div",{className:"RichEditor-controls"},B.map((function(t){return i.a.createElement(T,{key:t.label,active:t.style===a,label:t.label,onToggle:e.onToggle,style:t.style})})))},x=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"},{label:"Save",style:"SAVE"}],N=function(e){var t=e.editorState.getCurrentInlineStyle();return i.a.createElement("div",{className:"RichEditor-controls"},x.map((function(n){return i.a.createElement(T,{key:n.label,active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style})})))},R=S,K=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n),(e=t.call(this)).raw_state="";var o={account:window.localStorage.getItem("sel_account")};return console.log("GET Data",o),fetch("/react/getcontent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(t){t.raw_state&&e.myRef.current.set_editor(t.raw_state)})).catch((function(e){console.error("Error:",e)})),e.state={name:"React"},e.myRef=i.a.createRef(),e}return Object(o.a)(n,[{key:"saving_function",value:function(e){var t={raw_state:e,account:window.localStorage.getItem("sel_account")};console.log("Post Data",t);fetch("/react/content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("br",null),i.a.createElement("div",{className:"side-padding-20"},i.a.createElement(R,{my_func:this.saving_function,editorState:this.state.editorState,raw_state:this.raw_state,onChange:this.onChange,handleBeforeInput:this._handleBeforeInput,handlePastedText:this._handlePastedText,ref:this.myRef})),i.a.createElement("br",null),i.a.createElement("div",null))}}]),n}(c.Component),L=n(319),D=n(311),M=n(312),F=n(62),P=n(313),U=n(140),A=n.n(U),J=n(137),H=Object(d.a)((function(e){return Object(L.a)({root:{flexGrow:1,background:"#d9d9d9",textAlign:"left"},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1}})}));function q(e){var t=H(),n=i.a.useState(!1),a=Object(f.a)(n,2),o=a[0],r=a[1],l=i.a.useState(""),c=Object(f.a)(l,2),u=c[0],s=c[1],d=e.menu_onClick;return i.a.createElement("div",null,i.a.createElement(D.a,{className:t.root,position:"static",color:"inherit"},i.a.createElement(M.a,null,i.a.createElement(P.a,{onClick:d,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(A.a,null)),i.a.createElement(F.a,{variant:"h6",className:t.title},"L, DO YOU KNOW?"),i.a.createElement(m.a,{onClick:function(){r(!0)},style:{color:"black"},color:"primary"},"Login"))),i.a.createElement(J.a,{open:o,selectedValue:u,onClose:function(t){e.login(t),r(!1),s(t)}}))}var V=n(61),G=n(94),W=n(3),z=n(320),Y=n(264),Q=n(314),X=n(143),Z=n(315),$=n(145),ee=Object(d.a)({list:{width:250},fullList:{width:"auto"},paper:{background:"#d9d9d9"}});function te(e){var t=e.comps,n=ee(),a=i.a.useState({top:!1,left:!1,bottom:!1,right:!1}),o=Object(f.a)(a,2),r=o[0],l=o[1],c=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&l(Object(G.a)(Object(G.a)({},r),{},Object(V.a)({},e,t)))}};return i.a.createElement("div",null,i.a.createElement(i.a.Fragment,{key:"bar"},i.a.createElement(q,{login:e.login,menu_onClick:c("bar",!0)}),i.a.createElement(z.a,{classes:{paper:n.paper},anchor:"left",open:r.bar,onClose:c("bar",!1)},function(e,t){return i.a.createElement("div",{className:Object(W.a)(n.list,Object(V.a)({},n.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1)},i.a.createElement("img",{style:{padding:"10px"},src:"/react/journey.png",height:"75px"}),i.a.createElement(Q.a,null),i.a.createElement(Y.a,null,t.map((function(t,n){return i.a.createElement(X.a,{button:!0,onClick:function(){t._onClick(),c(e,!0)},key:t._text},i.a.createElement(Z.a,null," ",i.a.createElement(t._icon,null)),i.a.createElement($.a,{primary:t._text}))}))),i.a.createElement(Q.a,null))}("bar",t))))}var ne=n(316),ae=n(317),oe=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.call(this)}return Object(o.a)(n,[{key:"_manga",value:function(){Object(u.render)(i.a.createElement(v,null),document.getElementById("root"))}},{key:"_editor",value:function(){Object(u.render)(i.a.createElement(K,null),document.getElementById("root"))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:"/react/giphy1.webp",style:{width:"12em"}}),i.a.createElement("div",{className:"side-padding-20"}),i.a.createElement("br",null),i.a.createElement("div",null))}}]),n}(c.Component),re=(c.Component,function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"side-padding-20"},i.a.createElement("img",{src:"/react/nature.png",height:"100px"})))}}]),n}(c.Component)),le=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).buttons=[{_text:"Manga Downloader",_onClick:e._manga_click,_icon:ne.a},{_text:"Editor",_onClick:e._editor_click,_icon:ae.a}],e}return Object(o.a)(n,[{key:"_manga_click",value:function(){Object(u.render)([i.a.createElement(re,null)],document.getElementById("head")),Object(u.render)([i.a.createElement(v,null)],document.getElementById("root"))}},{key:"_editor_click",value:function(){Object(u.render)([i.a.createElement(re,null)],document.getElementById("head")),Object(u.render)([i.a.createElement(K,null)],document.getElementById("root"))}},{key:"_login",value:function(e){window.localStorage.setItem("sel_account",e),console.log("ACCOUNT SELECTED",e)}},{key:"render",value:function(){return i.a.createElement(te,{comps:this.buttons,login:this._login})}}]),n}(c.Component);Object(u.render)([i.a.createElement(le,null)],document.getElementById("top")),Object(u.render)([i.a.createElement(oe,null)],document.getElementById("root"))},78:function(e,t,n){}},[[155,1,2]]]);
//# sourceMappingURL=main.4a768d5a.chunk.js.map