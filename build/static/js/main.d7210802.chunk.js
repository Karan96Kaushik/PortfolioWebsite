(this["webpackJsonpreact-draft-js-demo"]=this["webpackJsonpreact-draft-js-demo"]||[]).push([[0],{163:function(e,t,n){e.exports=n(282)},282:function(e,t,n){"use strict";n.r(t);var a=n(13),o=n(14),l=n(16),r=n(15),c=(n(57),n(0)),i=n.n(c),s=n(6),u=(n(45),n(18)),d=n(321),m=n(324),h=Object(d.a)((function(e){return{root:{"& > *":{backgroundColor:"#d9d9d9",color:"black",margin:e.spacing(1)}},button:{"&:hover":{backgroundColor:"grey"}}}}));function g(e){var t=h();return i.a.createElement("div",{className:t.root},i.a.createElement(m.a,{className:t.button,onClick:e._onClick,variant:"contained",color:"primary"},e._text))}var f=n(338),b=Object(d.a)((function(e){return{boot:{"& > *":{margin:e.spacing(1),width:"25ch",color:"black",textAlign:"left",borderColor:"yellow"},"& label":{color:"black",fontSize:"10px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline":{borderBottomColor:"yellow"},"& .MuiInput-underline:after":{borderBottomColor:"white"}},overrides:{MuiInput:{underline:{"&:before":{borderBottom:"1px solid ".concat("grey")}}}}}}));function y(e){var t=e._label?e._label:"",n=b();return i.a.createElement(f.a,{onChange:e._onChange,spellCheck:!1,className:n.boot,label:t,value:e._value})}var p=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this))._changed=function(t){e._value=t.target.value},e._value="",e._downlaod=e._downlaod.bind(Object(u.a)(e)),e}return Object(o.a)(n,[{key:"_downlaod",value:function(){var e={fname:this._value};fetch("http://creepyfuck.tech/down?"+function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}(e),{method:"POST"}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"side-padding-20"},i.a.createElement(y,{_onChange:this._changed,_label:"Link"}),i.a.createElement(g,{_onClick:this._downlaod,_text:"Download"}),i.a.createElement("br",null),i.a.createElement("a",{href:"http://creepyfuck.tech/Manga/"},i.a.createElement("img",{alt:"Open Comics",src:"/react/comic.png",height:"50px"}))),i.a.createElement("br",null))}}]),n}(c.Component),v=n(326),E=n(328),_=n(329),k=n(50),C=n.n(k),O=n(327),j=n(154),S=C.a;S.main=S[500];var w=Object(j.a)({palette:{secondary:S},status:{danger:"orange"}}),T=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).handleListItemClick=function(e){window.open(e.link,"_blank").focus()},o._changed_name=function(e){o.state._bm_name=e.target.value,o.setState({_bm_name:e.target.value})},o._changed_val=function(e){o.state._bm_val=e.target.value,o.setState({_bm_val:e.target.value})},o.state={list:[],_bm_name:"",_bm_val:""},o.state.list.map((function(){console.log(1)})),o._get_list=o._get_list.bind(Object(u.a)(o)),o._add=o._add.bind(Object(u.a)(o)),o._changed_name=o._changed_name.bind(Object(u.a)(o)),o._changed_val=o._changed_val.bind(Object(u.a)(o)),o._get_list(),o}return Object(o.a)(n,[{key:"_get_list",value:function(){var e=this;console.log(this.state),fetch("/react/getbookmarks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}).then((function(e){return e.json()})).then((function(t){e.setState((function(e){return{list:t}}))})).catch((function(e){console.error("Error:",e)}))}},{key:"_add",value:function(){var e=this;console.log(this.state);var t={name:this.state._bm_name,link:this.state._bm_val};fetch("/react/addbookmarks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){console.log("Success:",t),e.setState((function(){return{list:t}}))})).catch((function(e){console.log("Error:",e)}))}},{key:"render",value:function(){var e=this;return console.log(this.state),i.a.createElement(O.a,{theme:w},i.a.createElement("div",null,i.a.createElement("div",{className:"side-padding-20"},i.a.createElement(y,{_value:this.state._bm_name,_onChange:this._changed_name,_label:"Name"}),i.a.createElement(y,{_value:this.state._bm_val,_onChange:this._changed_val,_label:"Link"}),i.a.createElement(g,{_onClick:this._add,_text:"Add"}),i.a.createElement(v.a,null,this.state.list.map((function(t){return i.a.createElement(E.a,{button:!0,style:{color:"white",textSecondary:"red"},onClick:function(){return e.handleListItemClick(t)},key:t},i.a.createElement(_.a,{secondary:t.link,primary:t.name,secondaryTypographyProps:{color:"secondary"}}))})))),i.a.createElement("br",null)))}}]),n}(c.Component),B=C.a;B.main=B[500];var I=Object(j.a)({palette:{secondary:B},status:{danger:"orange"}}),x=(c.Component,n(171),n(150)),N=n.n(x),R=n(19),L=R.KeyBindingUtil.hasCommandModifier;function M(e){return 83===e.keyCode&&L(e)?"myeditor-save":Object(R.getDefaultKeyBinding)(e)}var K=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).onChange=function(e){var t=e.getCurrentContent();o.saveContent(t),o.setState({editorState:e})},o.saveContent=N()((function(e){window.localStorage.setItem("content",JSON.stringify(Object(R.convertToRaw)(e)))}),1e3),o._getLengthOfSelectedText=function(){console.log("say");var e=o.state.editorState.getSelection(),t=0;if(!e.isCollapsed()){var n=o.state.editorState.getCurrentContent(),a=e.getStartKey(),l=e.getEndKey(),r=(e.getIsBackward(),n.getBlockMap(),n.getBlockForKey(a)),c=n.getBlockForKey(l),i=a===l,s=r.getLength(),u=(c.getLength(),s-e.getStartOffset()),d=e.getEndOffset(),m=n.getKeyAfter(l);if(i)t+=e.getEndOffset()-e.getStartOffset();else for(var h=a;h&&h!==m;)t+=h===a?u+1:h===l?d:n.getBlockForKey(h).getLength()+1,h=n.getKeyAfter(h)}return t},o._handleBeforeInput=function(){if(console.log("hello"),o.state.editorState.getCurrentContent().getPlainText("").length>9)return console.log("you can type max ten characters"),"handled"},o._handlePastedText=function(e){var t=o.state.editorState.getCurrentContent().getPlainText("").length,n=o._getLengthOfSelectedText();if(t+e.length-n>10)return console.log("you can type max ten characters"),"handled"},e.my_func&&(o.my_func=e.my_func),console.log(e.raw_state),e.raw_state?(console.log("Raw State Prop present",e.raw_state),o.state={editorState:R.EditorState.createWithContent(Object(R.convertFromRaw)(JSON.parse(e.raw_state)))}):o.state={editorState:R.EditorState.createEmpty()},o.onChange=o.onChange.bind(Object(u.a)(o)),o._getLengthOfSelectedText=o._getLengthOfSelectedText.bind(Object(u.a)(o)),o._handleBeforeInput=o._handleBeforeInput.bind(Object(u.a)(o)),o.focus=function(){return o.refs.editor.focus()},o.handleKeyCommand=o.handleKeyCommand.bind(Object(u.a)(o)),o.onTab=function(e){return o._onTab(e)},o.toggleBlockType=function(e){return o._toggleBlockType(e)},o.toggleInlineStyle=function(e){return o._toggleInlineStyle(e)},o}return Object(o.a)(n,[{key:"set_editor",value:function(e){this.setState({editorState:R.EditorState.createWithContent(Object(R.convertFromRaw)(JSON.parse(e)))})}},{key:"my_func",value:function(){console.log("My Function is Running")}},{key:"handleKeyCommand",value:function(e){if("myeditor-save"===e){var t=Object(R.convertToRaw)(this.state.editorState.getCurrentContent());return this.my_func(JSON.stringify(t)),console.log("saved",t),"handled"}return"not-handled"}},{key:"_handleKeyCommand",value:function(e){var t=this.state.editorState,n=R.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_onTab",value:function(e){this.onChange(R.RichUtils.onTab(e,this.state.editorState,4))}},{key:"_toggleBlockType",value:function(e){this.onChange(R.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){if("SAVE"==e){var t=Object(R.convertToRaw)(this.state.editorState.getCurrentContent());this.my_func(JSON.stringify(t))}else this.onChange(R.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),this.state.editorState?i.a.createElement("div",null,i.a.createElement("div",{className:"RichEditor-root"},i.a.createElement(D,{editorState:e,onToggle:this.toggleBlockType}),i.a.createElement(U,{editorState:e,onToggle:this.toggleInlineStyle}),i.a.createElement("div",{className:t,style:{backgroundColor:"white"},onClick:this.focus},i.a.createElement(R.Editor,{blockStyleFn:z,customStyleMap:F,editorState:e,handleKeyCommand:this.handleKeyCommand,onChange:this.onChange,onTab:this.onTab,placeholder:"Tell a story...",keyBindingFn:M,ref:"editor",spellCheck:!0,my_func:this.my_func})))):i.a.createElement("h3",{className:"loading"},"Loading...")}}]),n}(c.Component),F={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:12,padding:1}};function z(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var P=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(o.a)(n,[{key:"render",value:function(){var e="RichEditor-styleButton ui button";return this.props.active&&(e+=" RichEditor-activeButton"),i.a.createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)}}]),n}(i.a.Component),A=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],D=function(e){var t=e.editorState,n=t.getSelection(),a=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return i.a.createElement("div",{className:"RichEditor-controls"},A.map((function(t){return i.a.createElement(P,{key:t.label,active:t.style===a,label:t.label,onToggle:e.onToggle,style:t.style})})))},J=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"},{label:"Save",style:"SAVE"}],U=function(e){var t=e.editorState.getCurrentInlineStyle();return i.a.createElement("div",{className:"RichEditor-controls"},J.map((function(n){return i.a.createElement(P,{key:n.label,active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style})})))},H=K,G=i.a.createContext(),V=G.Provider,q=(G.Consumer,G),W=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n),(e=t.call(this)).raw_state="";var o={account:window.localStorage.getItem("sel_account")};return console.log("GET Data",o),fetch("/react/getcontent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(e){return e.json()})).then((function(t){t.raw_state&&e.myRef.current.set_editor(t.raw_state)})).catch((function(e){console.error("Error:",e)})),e.state={name:"React"},e.myRef=i.a.createRef(),e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.user=this.context,setTimeout((function(){console.log("USER",e.user)}),5e3)}},{key:"saving_function",value:function(e){var t={raw_state:e,account:window.localStorage.getItem("sel_account")};console.log("Post Data",t);fetch("/react/content",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",null),i.a.createElement("br",null),i.a.createElement("div",{className:"side-padding-20"},i.a.createElement(H,{my_func:this.saving_function,editorState:this.state.editorState,raw_state:this.raw_state,onChange:this.onChange,handleBeforeInput:this._handleBeforeInput,handlePastedText:this._handlePastedText,ref:this.myRef})),i.a.createElement("br",null),i.a.createElement("div",null))}}]),n}(c.Component);W.contextType=q;var Q=W,X=n(64),Y=n(104),Z=n(54),$=n(3),ee=n(340),te=n(336),ne=n(337),ae=n(339),oe=n(333),le=n(334),re=n(65),ce=n(335),ie=n(152),se=n.n(ie),ue=n(341),de=n(332),me=n(331),he=n(330),ge=n(105),fe=n.n(ge),be=n(151),ye=n.n(be),pe=n(82),ve=["Karan","Nandita"],Ee=Object(d.a)({avatar:{backgroundColor:pe.a[100],color:pe.a[600]}});var _e=function(e){var t=Ee(),n=e.onClose,a=e.selectedValue,o=e.open,l=(e._login,window.localStorage.getItem("sel_account"),function(e){n(e)});return i.a.createElement(V,{value:"selectedValue"},i.a.createElement(he.a,{onClose:function(){n(a)},"aria-labelledby":"simple-dialog-title",open:o},i.a.createElement(me.a,{id:"simple-dialog-title"},"Set backup account"),i.a.createElement(v.a,null,ve.map((function(e){return i.a.createElement(E.a,{button:!0,onClick:function(){return l(e)},key:e},i.a.createElement(de.a,null,i.a.createElement(ue.a,{className:t.avatar},i.a.createElement(fe.a,null))),i.a.createElement(_.a,{primary:e}))})),i.a.createElement(E.a,{autoFocus:!0,button:!0,onClick:function(){return l("addAccount")}},i.a.createElement(de.a,null,i.a.createElement(ue.a,null,i.a.createElement(ye.a,null))),i.a.createElement(_.a,{primary:"Add account"})),i.a.createElement(E.a,{autoFocus:!0,button:!0,onClick:function(){return l("logout")}},i.a.createElement(de.a,null,i.a.createElement(ue.a,null,i.a.createElement(fe.a,null))),i.a.createElement(_.a,{primary:"Logout"})))))},ke=Object(d.a)((function(e){return Object(ae.a)({root:{flexGrow:1,background:"#d9d9d9",textAlign:"left"},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1}})}));function Ce(e){var t,n=ke(),a=i.a.useState(!1),o=Object(Z.a)(a,2),l=o[0],r=o[1],c=i.a.useState(""),s=Object(Z.a)(c,2),u=s[0],d=s[1];""===window.localStorage.getItem("sel_account")&&(t="Login");var h=i.a.useState(t),g=Object(Z.a)(h,2),f=g[0],b=g[1],y=e.menu_onClick;return i.a.createElement("div",null,i.a.createElement(oe.a,{className:n.root,position:"static",color:"inherit"},i.a.createElement(le.a,null,i.a.createElement(ce.a,{onClick:y,edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(se.a,null)),i.a.createElement(re.a,{variant:"h6",className:n.title},"Font App Demo"),i.a.createElement(m.a,{onClick:function(){r(!0)},style:{color:"black"},color:"primary"},f))),i.a.createElement(_e,{open:l,selectedValue:u,onClose:function(t){t!=f&&(d(t),b(t),e.login(t),console.log("LoGIN",u,f)),r(!1)}}))}var Oe=Object(d.a)({list:{width:250},fullList:{width:"auto"},paper:{background:"#d9d9d9"}});function je(e){var t=e.comps,n=Oe(),a=i.a.useState({top:!1,left:!1,bottom:!1,right:!1}),o=Object(Z.a)(a,2),l=o[0],r=o[1],c=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(Y.a)(Object(Y.a)({},l),{},Object(X.a)({},e,t)))}};return i.a.createElement("div",null,i.a.createElement(i.a.Fragment,{key:"bar"},i.a.createElement(Ce,{login:e.login,menu_onClick:c("bar",!0)}),i.a.createElement(ee.a,{classes:{paper:n.paper},anchor:"left",open:l.bar,onClose:c("bar",!1)},function(e,t){return i.a.createElement("div",{className:Object($.a)(n.list,Object(X.a)({},n.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:c(e,!1),onKeyDown:c(e,!1)},i.a.createElement("img",{style:{padding:"10px"},src:"/react/journey.png",height:"75px"}),i.a.createElement(te.a,null),i.a.createElement(v.a,null,t.map((function(t,n){return i.a.createElement(E.a,{button:!0,onClick:function(){t._onClick(),c(e,!0)},key:t._text},i.a.createElement(ne.a,null," ",i.a.createElement(t._icon,null)),i.a.createElement(_.a,{primary:t._text}))}))),i.a.createElement(te.a,null))}("bar",t))))}var Se=n(106),we=n.n(Se),Te=n(153),Be=n(107),Ie=n.n(Be);n(278);console.log();var xe=C.a;xe.main=xe[500];Object(j.a)({palette:{secondary:xe},status:{danger:"orange"},root:{textAlign:"center"}});var Ne=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(e){var o;Object(a.a)(this,n);return(o=t.call(this,e)).data=[],["normalEn","BorderBlock","DotBlock","GaintBold","Btalic","GaintItalic","Alphol","Bubble","BubbleFill","Cursive"].map((function(e){var t={font:e,style:""};o.data.push({font:e,data:Ie()("Fontify Text",t)})})),o.state={_text:"Fontify text",_data:o.data},o._changed_name=o._changed_name.bind(Object(u.a)(o)),o}return Object(o.a)(n,[{key:"_changed_name",value:function(){var e=Object(Te.a)(we.a.mark((function e(t){var n,a;return we.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(e){""==e&&(e=" ");var t=[];return n.map((function(n){var a={font:n,style:""};t.push({font:n,data:Ie()(e,a)})})),console.log(t),t},this.state._text=t.target.value,n=["normalEn","BorderBlock","DotBlock","GaintBold","Btalic","GaintItalic","Alphol","Bubble","BubbleFill","Cursive"],this.setState({_data:a(t.target.value)});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_get_list",value:function(){console.log(this.state);var e=[];this.setState((function(t){return{list:e}}))}},{key:"handleListItemClick",value:function(e){}},{key:"render",value:function(){var e=this;return console.log(this.state),i.a.createElement("div",null,i.a.createElement("div",{className:"side-padding-20"},i.a.createElement(y,{_value:this.state._text,_onChange:this._changed_name,_label:"Enter Text"}),i.a.createElement(v.a,null,this.state._data.map((function(t){return i.a.createElement(E.a,{button:!0,onClick:function(){return e.handleListItemClick(t.font)},id:t.font},i.a.createElement(_.a,{primary:t.data}))})))),i.a.createElement("br",null))}}]),n}(c.Component),Re=n(78);function Le(e){return i.a.createElement("svg",Object.assign({viewBox:"0 0 512 512"},e),i.a.createElement("path",{d:"M219.057 14.61l-27.546 42.152a55.344 55.344 0 00-5.356 50.067l11.093 28.972h69.901l11.093-28.972a55.347 55.347 0 00-5.356-50.067L245.339 14.61c-6.196-9.48-20.086-9.48-26.282 0z",fill:"#ffda8f"}),i.a.createElement("path",{d:"M235.858 111.956a55.347 55.347 0 015.356-50.067l17.511-26.795-13.386-20.484c-6.196-9.481-20.086-9.48-26.281 0l-27.546 42.152a55.341 55.341 0 00-5.356 50.067l11.093 28.972h47.74l-9.131-23.845z",fill:"#fcd26d"}),i.a.createElement("circle",{cx:232.2,cy:68.08,r:15,fill:"#f4a240"}),i.a.createElement("path",{d:"M296.412 443.827c28.944 0 53.775-20.632 59.078-49.085l22.315-119.737c2.7-14.49-16.139-22.634-24.788-10.699-19.141 26.413-42.477 68.388-58.827 130.321l2.222 49.2z",fill:"#fcd26d"}),i.a.createElement("path",{d:"M358.115 380.658c-3.535-34.999-14.354-63.911-25.025-84.945-13.862 24.898-27.946 57.423-38.9 98.914l2.222 49.2c28.944 0 53.775-20.632 59.078-49.085l2.625-14.084z",fill:"#ffc73b"}),i.a.createElement("path",{d:"M257.573 122.832h-50.75c-15.211 0-28.428 10.639-31.471 25.543-8.915 43.661-10.466 89.397-10.466 89.397H299.51s-1.55-45.736-10.466-89.397c-3.043-14.904-16.26-25.543-31.471-25.543z",fill:"#57565c"}),i.a.createElement("path",{d:"M270.484 125.524a32.242 32.242 0 00-12.911-2.692h-50.75c-15.211 0-28.428 10.639-31.471 25.542-8.915 43.661-10.466 89.397-10.466 89.397h76.557s1.551-45.736 10.466-89.397c2.132-10.441 9.269-18.787 18.575-22.85z",fill:"#3e3d42"}),i.a.createElement("path",{d:"M292.613 213.084h-120.83c-20.357 0-37.064 16.191-37.605 36.542-1.339 50.373 1.785 144.265 35.801 226.538 7.084 17.133 23.766 28.336 42.306 28.336h39.826c18.54 0 35.223-11.203 42.306-28.336 34.016-82.273 37.14-176.165 35.801-226.539-.541-20.35-17.248-36.541-37.605-36.541z",fill:"#787680"}),i.a.createElement("path",{d:"M231.352 238.192l11.242-25.109h-70.811c-20.383 0-37.067 16.225-37.607 36.601-1.337 50.462 1.809 144.516 35.954 226.844 7.048 16.993 23.758 27.971 42.155 27.971h39.826c-43.362-38.446-43.463-135.851-39.389-192.356a219.617 219.617 0 0118.63-73.951z",fill:"#57565c"}),i.a.createElement("path",{d:"M166.765 468.112a365.57 365.57 0 003.214 8.051c7.084 17.133 23.767 28.336 42.306 28.336h39.826c18.54 0 35.222-11.203 42.306-28.336a375.755 375.755 0 003.214-8.051H166.765z",fill:"#fcd26d"}),i.a.createElement("path",{d:"M227.876 468.112h-61.111a370.592 370.592 0 003.214 8.051c7.084 17.133 23.767 28.336 42.306 28.336h39.826c-10.381-9.204-18.277-21.794-24.235-36.387z",fill:"#ffc73b"}),i.a.createElement("path",{d:"M372.6 252.843c-9.368-4.024-19.679-1.186-25.656 7.063a300.233 300.233 0 00-9.002 13.177 701.93 701.93 0 00-.226-23.656c-.313-11.807-5.159-22.846-13.644-31.083a44.952 44.952 0 00-19.115-11.045c-1.45-15.899-4.068-38.406-8.564-60.423-2.071-10.143-8.025-18.737-16.117-24.383l4.97-12.98c7.188-18.772 4.915-40.025-6.081-56.852L251.618 10.51C247.317 3.928 240.059 0 232.198 0s-15.119 3.928-19.419 10.507L185.232 52.66c-10.996 16.827-13.271 38.08-6.082 56.852l4.97 12.981c-8.092 5.645-14.046 14.24-16.118 24.383-2.092 10.247-3.955 21.458-5.539 33.32a7.5 7.5 0 0014.868 1.984c1.538-11.523 3.344-22.392 5.368-32.303 2.313-11.325 12.458-19.544 24.123-19.544h50.75c11.665 0 21.811 8.219 24.122 19.543 4.081 19.981 6.573 40.455 8.036 55.708H171.783c-11.813 0-22.984 4.531-31.458 12.758-8.485 8.238-13.331 19.277-13.645 31.084-1.321 49.704 1.646 145.625 36.367 229.604 8.282 20.028 27.608 32.97 49.238 32.97h39.826c21.629 0 40.955-12.942 49.236-32.971 4.02-9.724 7.61-19.608 10.821-29.562 25.721-6.161 45.789-27.036 50.695-53.352l22.314-119.737c1.872-10.042-3.183-19.5-12.577-23.535zM232.198 75.58c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zm7.5 39.752V89.29c8.729-3.096 15-11.432 15-21.21 0-12.407-10.094-22.5-22.5-22.5s-22.5 10.093-22.5 22.5c0 9.777 6.271 18.114 15 21.21v26.042h-17.875c-3.076 0-6.084.363-8.984 1.04l-4.681-12.225c-5.472-14.291-3.741-30.471 4.631-43.282l27.547-42.152c1.542-2.359 4.043-3.713 6.862-3.713s5.32 1.354 6.862 3.713l27.547 42.151c8.371 12.811 10.103 28.991 4.63 43.283l-4.68 12.224a39.485 39.485 0 00-8.984-1.04l-17.875.001zm47.788 357.966C281.533 487.696 267.647 497 252.111 497h-39.826c-14.686 0-27.886-8.318-34.317-21.388h87.411c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-93.431c-28.98-78.259-31.496-164.776-30.273-210.788.437-16.396 13.661-29.241 30.108-29.241h120.83c16.446 0 29.671 12.844 30.107 29.241 1.291 48.512-1.571 142.053-35.234 223.474zm82.946-199.668l-22.314 119.737c-3.24 17.381-14.982 31.705-30.694 38.573 12.496-45.004 17.747-90.349 19.63-127.821 6.829-12.733 14.235-24.646 22.037-35.413 2.739-3.782 6.501-2.549 7.59-2.082 1.097.473 4.614 2.373 3.751 7.006z"}))}function Me(e){return i.a.createElement(Re.a,e,i.a.createElement(Le,null))}var Ke=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.call(this)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:"/react/giphy1.webp",style:{width:"12em"}}),i.a.createElement("div",{className:"side-padding-20"}),i.a.createElement("br",null),i.a.createElement("div",null))}}]),n}(c.Component),Fe=(c.Component,c.Component,function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this))._openapp=function(e){switch(e,e){case"manga":Object(s.render)([i.a.createElement(p,null)],document.getElementById("root"));break;case"editor":Object(s.render)([i.a.createElement(Q,null)],document.getElementById("root"));break;case"bookmarks":Object(s.render)([i.a.createElement(T,null)],document.getElementById("root"));break;case"bookmarksipad":fetch("/react/getbookmarks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify([])}).then((function(e){return e.json()})).then((function(e){Object(s.render)([i.a.createElement(Ne,{list_arr:e})],document.getElementById("root"))}));break;case"fonts":Object(s.render)([i.a.createElement(Ne,null)],document.getElementById("root"))}},e.buttons=[{_text:"Fonts App",_onClick:function(){e._openapp("fonts")},_icon:Me}],e}return Object(o.a)(n,[{key:"_login",value:function(e){window.localStorage.setItem("sel_account",e),Object(s.render)([],document.getElementById("head")),Object(s.render)([i.a.createElement(Ke,null)],document.getElementById("root")),console.log("ACCOUNT SELECTED",e)}},{key:"render",value:function(){return i.a.createElement(je,{comps:this.buttons,login:this._login})}}]),n}(c.Component));Object(s.render)([i.a.createElement(Fe,null)],document.getElementById("top")),Object(s.render)([i.a.createElement(Ne,null)],document.getElementById("root"))},45:function(e,t,n){}},[[163,1,2]]]);
//# sourceMappingURL=main.d7210802.chunk.js.map