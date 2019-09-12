(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,a,i){"use strict";i.r(a),i.d(a,"default",function(){return P});i(163),i(74),i(75),i(77),i(78);var t=i(7),n=i.n(t),l=i(0),s=i.n(l),r=i(4),d=i.n(r),c=i(156),o=i.n(c),m=i(33),u=i.n(m),p=(i(147),i(155)),N=i(161),b="GIF",y="PNG",P=function(e){function a(){return e.apply(this,arguments)||this}n()(a,e);var i=a.prototype;return i.extractComponentsInfo=function(e){var a=/@\w*\:/,i={description:o.a.get(e,"description.text")};if(e.docblock){var t=o.a.split(e.docblock,"\n");o.a.forEach(t,function(e){if(e&&a.test(e)){var t=e.match(a)[0].slice(1,-1);i[t]=e.split(a)[1].trim()}})}return i},i.renderLink=function(e){var a=e.extendslink;return a?a.includes("http")?s.a.createElement("span",null,s.a.createElement("a",{href:e.extendslink,rel:"noopener noreferrer",target:"_blank"},s.a.createElement("b",null,e.extends))," ",e.extendsnotes,s.a.createElement("br",null)):s.a.createElement("span",null,s.a.createElement(u.a,{to:e.extendslink},s.a.createElement("b",null,e.extends))," ",e.extendsnotes,s.a.createElement("br",null)):s.a.createElement("span",null,s.a.createElement("b",null,e.extends),e.extendsnotes,s.a.createElement("br",null))},i.renderImage=function(e,a){return s.a.createElement("img",{key:a,alt:"",src:e,style:{marginRight:20,width:320,border:"1px solid black"}})},i.renderGif=function(e,a){return s.a.createElement("img",{key:a,alt:"",src:e,style:{marginRight:20,width:320}})},i.renderImages=function(e,a){switch(a){case b:return e.map(this.renderGif);default:return e.map(this.renderImage)}},i.renderImportant=function(e){return s.a.createElement("div",{alt:"",style:{marginBottom:10}},s.a.createElement("span",{style:{fontWeight:"700"}},"IMPORTANT: ")," ",e.important,"  ",e.importantLink&&s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.importantLink},"here"))},i.renderNote=function(e,a){return s.a.createElement("div",{key:a,alt:"",style:{marginBottom:10}},e)},i.renderNotes=function(e){return e.map(this.renderNote)},i.renderComponentPage=function(){var e=this.props.pathContext.componentNode,a=this.extractComponentsInfo(e),i=o.a.get(e,"props"),t=a.gif?a.gif.split(","):void 0,n=a.image?a.image.split(","):void 0,l=a.notes?a.notes.split(";"):void 0;return s.a.createElement("div",{className:"docs-page"},s.a.createElement("div",{className:"docs-page__content"},s.a.createElement("h1",null,e.displayName),s.a.createElement("h3",null,a.description),a.extends&&s.a.createElement("div",null,"Extends: ",this.renderLink(a),"(meaning you can pass the super component's props as well)."),a.modifiers&&s.a.createElement("div",null,s.a.createElement("p",null,"Supported modifiers: ",s.a.createElement("b",null,a.modifiers),". ",s.a.createElement("br",null),"Read more about modifiers ",s.a.createElement(u.a,{to:"/modifiers/"},"here"),".")),a.notes&&s.a.createElement("div",null,s.a.createElement("h4",{style:{marginBottom:10}},"NOTES"),this.renderNotes(l)),a.important&&s.a.createElement("div",null,this.renderImportant(a)),i.length>0&&s.a.createElement("div",null,s.a.createElement("h3",null,"PROPS"),s.a.createElement(g,{props:i})),n&&s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"EXAMPLE"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 text-center"},this.renderImages(n,y)))),t&&s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"LIVE EXAMPLE"),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 text-center"},this.renderImages(t,b)))),a.example&&s.a.createElement("div",null,s.a.createElement("h3",null,"CODE SAMPLE"),s.a.createElement("p",null,"See example"," ",s.a.createElement("a",{target:"_blank",href:a.example},"here"),"."))))},i.render=function(){return s.a.createElement(p.a,{navbar:s.a.createElement(N.a,null)},this.renderComponentPage())},a}(l.Component);P.propTypes={pathContext:d.a.object};var g=function(e){var a=e.props;return s.a.createElement("div",{className:"component-props"},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("th",null,"name"),s.a.createElement("th",null,"description"),s.a.createElement("th",null,"type"),s.a.createElement("th",null,"default")),o.a.map(a,function(e,a){return s.a.createElement("tr",{key:a},s.a.createElement("td",null,e.name),s.a.createElement("td",null,o.a.get(e,"description.text")),s.a.createElement("td",null,o.a.get(e,"type.name")),s.a.createElement("td",null,o.a.get(e,"defaultValue.value")))}))))}},153:function(e,a,i){e.exports=i.p+"static/logo-7930350852368569acb02b9433209639.png"},154:function(e,a,i){var t;e.exports=(t=i(159))&&t.default||t},155:function(e,a,i){"use strict";var t=i(0),n=i.n(t),l=i(4),s=i.n(l),r=i(157),d=i.n(r),c=i(33),o=i.n(c),m=(i(143),i(153)),u=i.n(m),p=function(){return n.a.createElement("div",{className:"header"},n.a.createElement(o.a,{to:"/"},n.a.createElement("img",{className:"logo",src:u.a,alt:"logo"})),n.a.createElement(o.a,{to:"/docs/"},"DOCS"),n.a.createElement("a",{target:"_blank",href:"https://github.com/wix-private/wix-react-native-ui-lib"},"GITHUB"),n.a.createElement("a",{target:"_blank",href:"https://github.com/wix-private/wix-react-native-ui-lib/wiki"},"WIKI"))},N=(i(144),function(e){var a=e.children,i=e.navbar;e.data;return n.a.createElement("div",{className:"layout"},n.a.createElement(d.a,{title:"RNUILIB",meta:[{name:"description",content:"React Native UI Library"},{name:"keywords",content:"react native, uilib"}]}),n.a.createElement(p,null),n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"sidebar"},i),n.a.createElement("div",{className:"content"},a)))});N.propTypes={navbar:s.a.element,children:s.a.func};a.a=N},158:function(e){e.exports={data:{allComponentMetadata:{edges:[{node:{displayName:"AnimatedFeedback",isPublic:!1}},{node:{displayName:"Star",isPublic:!1}},{node:{displayName:"AutocompleteList",isPublic:!1}},{node:{displayName:"BadgedButton",isPublic:!1}},{node:{displayName:"AnimatedImage",isPublic:!1}},{node:{displayName:"Avatar",isPublic:!1}},{node:{displayName:"AvatarStrip",isPublic:!1}},{node:{displayName:"Banner",isPublic:!1}},{node:{displayName:"ColorSwatch",isPublic:!1}},{node:{displayName:"Divider",isPublic:!1}},{node:{displayName:"ConnectivityBar",isPublic:!1}},{node:{displayName:"FlatList",isPublic:!1}},{node:{displayName:"DurationPicker",isPublic:!1}},{node:{displayName:"FormField",isPublic:!1}},{node:{displayName:"Form",isPublic:!1}},{node:{displayName:"InAppNotification",isPublic:!1}},{node:{displayName:"DraggableItem",isPublic:!1}},{node:{displayName:"GridView",isPublic:!1}},{node:{displayName:"GridListItem",isPublic:!1}},{node:{displayName:"ListItem",isPublic:!1}},{node:{displayName:"ListItemMiddlePart",isPublic:!1}},{node:{displayName:"ListItemLeftPart",isPublic:!1}},{node:{displayName:"ListItemRightPart",isPublic:!1}},{node:{displayName:"Label",isPublic:!1}},{node:{displayName:"SectionHeader",isPublic:!1}},{node:{displayName:"MapView",isPublic:!1}},{node:{displayName:"Loader",isPublic:!1}},{node:{displayName:"LocationPicker",isPublic:!1}},{node:{displayName:"TopBarButtonLoader",isPublic:!1}},{node:{displayName:"BadgedButton",isPublic:!0}},{node:{displayName:"CustomTopBarTitle",isPublic:!1}},{node:{displayName:"NumberSpinner",isPublic:!1}},{node:{displayName:"Picker",isPublic:!1}},{node:{displayName:"LottieAnimation",isPublic:!1}},{node:{displayName:"ScrollView",isPublic:!1}},{node:{displayName:"PickerHeader",isPublic:!1}},{node:{displayName:"Selectable",isPublic:!1}},{node:{displayName:"SectionList",isPublic:!1}},{node:{displayName:"GradientSlider",isPublic:!1}},{node:{displayName:"ThemeView",isPublic:!1}},{node:{displayName:"TabBar.Item",isPublic:!1}},{node:{displayName:"Thumbnail",isPublic:!1}},{node:{displayName:"Toast",isPublic:!1}},{node:{displayName:"WixImage",isPublic:!1}},{node:{displayName:"ToastButton",isPublic:!1}},{node:{displayName:"WixMedia",isPublic:!1}},{node:{displayName:"WixStepper",isPublic:!1}},{node:{displayName:"WixVideo",isPublic:!1}},{node:{displayName:"ActionSheet",isPublic:!1}},{node:{displayName:"ColorPicker",isPublic:!1}},{node:{displayName:"ColorPalette",isPublic:!1}},{node:{displayName:"FontPicker",isPublic:!1}},{node:{displayName:"CollapsingHeader",isPublic:!1}},{node:{displayName:"CollapsingHeader",isPublic:!0}},{node:{displayName:"Slider",isPublic:!1}},{node:{displayName:"TabBar",isPublic:!1}},{node:{displayName:"Toast",isPublic:!1}},{node:{displayName:"ActionSheet",isPublic:!0}},{node:{displayName:"IGNORE",isPublic:!1}},{node:{displayName:"ActionBar",isPublic:!1}},{node:{displayName:"AnimatedImage",isPublic:!0}},{node:{displayName:"AnimatedScanner",isPublic:!1}},{node:{displayName:"Badge",isPublic:!1}},{node:{displayName:"Card.Image",isPublic:!1}},{node:{displayName:"Card.Item",isPublic:!1}},{node:{displayName:"Card.Section",isPublic:!1}},{node:{displayName:"Card",isPublic:!1}},{node:{displayName:"Carousel",isPublic:!1}},{node:{displayName:"Checkbox",isPublic:!1}},{node:{displayName:"ConnectionStatusBar",isPublic:!1}},{node:{displayName:"TextArea",isPublic:!1}},{node:{displayName:"MaskedInput",isPublic:!1}},{node:{displayName:"Dialog",isPublic:!1}},{node:{displayName:"Image",isPublic:!1}},{node:{displayName:"PageControl",isPublic:!1}},{node:{displayName:"PanGestureView",isPublic:!1}},{node:{displayName:"ListItem.Part",isPublic:!1}},{node:{displayName:"ListItem",isPublic:!0}},{node:{displayName:"Notification",isPublic:!1}},{node:{displayName:"SourceElement",isPublic:!1}},{node:{displayName:"SharedArea",isPublic:!1}},{node:{displayName:"TargetElement",isPublic:!1}},{node:{displayName:"RadioButton",isPublic:!1}},{node:{displayName:"RadioGroup",isPublic:!1}},{node:{displayName:"Switch",isPublic:!1}},{node:{displayName:"TabBar.Item",isPublic:!0}},{node:{displayName:"PickerDialog",isPublic:!1}},{node:{displayName:"PickerDialog",isPublic:!0}},{node:{displayName:"IGNORE",isPublic:!1}},{node:{displayName:"NativePicker",isPublic:!1}},{node:{displayName:"ProgressBar",isPublic:!1}},{node:{displayName:"Picker.Item",isPublic:!1}},{node:{displayName:"Tour",isPublic:!1}},{node:{displayName:"IGNORE",isPublic:!1}},{node:{displayName:"View",isPublic:!1}},{node:{displayName:"Text",isPublic:!1}},{node:{displayName:"TouchableOpacity",isPublic:!1}},{node:{displayName:"IGNORE",isPublic:!1}},{node:{displayName:"Stepper",isPublic:!1}},{node:{displayName:"Avatar",isPublic:!0}},{node:{displayName:"Button",isPublic:!1}},{node:{displayName:"FeatureHighlight",isPublic:!1}},{node:{displayName:"Hint",isPublic:!1}},{node:{displayName:"TabBar",isPublic:!0}},{node:{displayName:"Picker",isPublic:!0}},{node:{displayName:"TagsInput",isPublic:!1}},{node:{displayName:"Toast",isPublic:!1}},{node:{displayName:"TextField",isPublic:!1}},{node:{displayName:"TextInput",isPublic:!1}}]}}}},159:function(e,a,i){"use strict";i.r(a);i(34);var t=i(0),n=i.n(t),l=i(4),s=i.n(l),r=i(56),d=i(2),c=function(e){var a=e.location,i=d.default.getResourcesForPathnameSync(a.pathname);return i?n.a.createElement(r.a,Object.assign({location:a,pageResources:i},i.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},a.default=c},160:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTYuOTY2IDU2Ljk2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTYuOTY2IDU2Ljk2NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMNCglzMTAuMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4yMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyDQoJYzAuNzc5LDAsMS41MTgtMC4yOTcsMi4wNzktMC44MzdDNTYuMjU1LDU0Ljk4Miw1Ni4yOTMsNTMuMDgsNTUuMTQ2LDUxLjg4N3ogTTIzLjk4NCw2YzkuMzc0LDAsMTcsNy42MjYsMTcsMTdzLTcuNjI2LDE3LTE3LDE3DQoJcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},161:function(e,a,i){"use strict";i(74),i(75);var t=i(35),n=i.n(t),l=i(7),s=i.n(l),r=i(158),d=i(0),c=i.n(d),o=i(4),m=i.n(o),u=i(33),p=i.n(u),N=(i(154),c.a.createContext({})),b=function(e){return c.a.createElement(N.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};b.propTypes={data:m.a.object,query:m.a.string.isRequired,render:m.a.func,children:m.a.func};var y=i(156),P=i.n(y),g=(i(145),i(160)),E=i.n(g),h=function(e){function a(a){var i;return(i=e.call(this,a)||this).state={filter:""},i.renderNavbar=function(e){var a=i.state.filter,t=i.getNavbarComponents(e),n=P.a.filter(t,function(e){return P.a.includes(P.a.lowerCase(e.node.displayName),P.a.lowerCase(a))});return c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"search"},c.a.createElement("img",{src:E.a}),c.a.createElement("input",{placeholder:"Search...",onChange:i.setFilter})),c.a.createElement("ul",null,P.a.map(n,function(e,a){return c.a.createElement("li",{key:a,className:e.node.isPublic&&"public"},c.a.createElement(p.a,{key:e.node.displayName,to:"/docs/"+(e.node.isPublic?"public/":"")+e.node.displayName+"/"},e.node.displayName))})))},i.setFilter=i.setFilter.bind(n()(i)),i}s()(a,e);var i=a.prototype;return i.setFilter=function(e){var a=e.target.value;this.setState({filter:a})},i.getNavbarComponents=function(e){var a=e.allComponentMetadata.edges;return P.a.chain(a).filter(function(e){return"IGNORE"!==e.node.displayName}).sortBy("node.displayName").value()},i.render=function(){return c.a.createElement(b,{query:"685926556",render:this.renderNavbar,data:r})},a}(d.Component);h.propTypes={components:m.a.array};a.a=h},163:function(e,a,i){var t=i(25).f,n=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in n||i(18)&&t(n,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-templates-component-js-8800ce0ab135d2bd2034.js.map