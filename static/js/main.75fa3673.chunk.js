(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{221:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(21),c=n.n(a),r=n(37),s=n(46),l=n(47),d=n(53),b=n(51),j=(n(145),n(39)),u=n(38),h=n(227),O=n(225),f=n(226),p=n(107),m="TODO_LIST",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(j.a)({type:e},t)},v=function(e){return function(t,n){var o=n().Todos,i=Object(p.a)(o).map((function(t){return t.id===e.id?e:t}));console.log("should be updated --\x3e",o),t(x(m,{data:i}))}},y=n(8),T=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={isModalVisible:!1},o.reference=i.a.createRef(),o.showModal=function(){o.setState({isModalVisible:!0})},o.handleCancel=function(){o.setState({isModalVisible:!1})},o.onFinish=function(e){var t=Object(j.a)({id:Math.floor(1e3*Math.random())+1,isChecked:!1},e);o.props.addTodo(t),o.reference.current.resetFields(),o.setState({isModalVisible:!1})},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.isModalVisible;return Object(y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(y.jsx)("h1",{children:"ToDo"}),Object(y.jsx)(u.a,{type:"primary",onClick:this.showModal,children:"New"}),Object(y.jsx)(h.a,{title:"Add New Todo",visible:e,onCancel:this.handleCancel,footer:null,children:Object(y.jsxs)(O.a,{name:"todo-form",layout:"vertical",onFinish:this.onFinish,ref:this.reference,children:[Object(y.jsx)(O.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please Enter Title!"}],children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(O.a.Item,{label:"Description",name:"description",children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(O.a.Item,{children:Object(y.jsx)(u.a,{type:"primary",htmlType:"submit",block:!0,children:"Add Todo"})})]})})]})}}]),n}(o.Component),g={addTodo:function(e){return function(t,n){var o=n().Todos,i=[e].concat(Object(p.a)(o));t(x(m,{data:i}))}}},C=Object(r.b)((function(e){return{todos:e.Todos}}),g)(T),S=n(224),k=n(228),M=n(97),I=n(229),F=n(230),V=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).onFinish=function(e){var t=o.props,n=t.handleUpdate,i=t.handleCancel;n(e),i()},o.ref=i.a.createRef(),o.componentDidUpdate=function(){var e=o.props,t=e.isModalVisible,n=e.item;t&&n&&n.id&&o.ref.current.setFieldsValue(Object(j.a)({},n))},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isModalVisible,n=e.handleCancel;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(h.a,{title:"Edit Todo",visible:t,onCancel:n,footer:null,children:Object(y.jsxs)(O.a,{name:"form-modal",layout:"vertical",ref:this.ref,onFinish:this.onFinish,children:[Object(y.jsx)(O.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input title!"}],children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(O.a.Item,{label:"Description",name:"description",children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(O.a.Item,{hidden:!0,name:"id",children:Object(y.jsx)(f.a,{})}),Object(y.jsx)(O.a.Item,{children:Object(y.jsx)(u.a,{type:"primary",htmlType:"submit",block:!0,children:"Update"})})]})})})}}]),n}(o.Component),w={handleUpdate:v},D=Object(r.b)((function(e){return{todos:e.Todos}}),w)(V),U=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={item:{},isModalVisible:!1},o.handleComplete=function(e){var t=o.props.handleUpdate,n=Object(j.a)(Object(j.a)({},e),{},{isChecked:!e.isChecked});t(n),o.setState({item:n})},o.handleEdit=function(e){o.setState({isModalVisible:!0,item:Object(j.a)({},e)})},o.handleCancel=function(){o.setState({isModalVisible:!1,item:{}})},o}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,o=t.deleteTodo,i=this.state,a=i.isModalVisible,c=i.item;return console.log("todo list --\x3e ",n),Object(y.jsx)(S.b,{header:"ToDo List",dataSource:n,renderItem:function(t,n){return Object(y.jsxs)(S.b.Item,{children:[Object(y.jsx)(S.b.Item.Meta,{title:t.title,description:t.description}),Object(y.jsx)(M.a,{style:t.isChecked?{fontSize:"125%",color:"green"}:{fontSize:"125%",color:"gray"},onClick:function(){e.handleComplete(t)}}),Object(y.jsx)(I.a,{style:{fontSize:"125%",margin:"0 17px",color:"#096dd9"},onClick:function(){e.handleEdit(t)}}),Object(y.jsx)(D,{isModalVisible:a,handleCancel:e.handleCancel,item:c}),Object(y.jsx)(k.a,{title:"Are you sure delete ".concat(t.title," task ?"),onConfirm:function(){o(n),console.log("deleted")},okText:"Yes",cancelText:"No",placement:"bottom",children:Object(y.jsx)(F.a,{style:{fontSize:"125%",color:"red"}})})]})}})}}]),n}(o.Component),E={deleteTodo:function(e){return function(t,n){var o=n().Todos;o.splice(e,1),console.log("should be one item deletes--\x3e",o),t(x(m,{data:o}))}},handleUpdate:v},N=Object(r.b)((function(e){return{todos:e.Todos}}),E)(U),z=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.todos;return Object(y.jsxs)("div",{style:{margin:"5px 100px 0"},children:[Object(y.jsx)(C,{}),0===e.length?Object(y.jsx)("h1",{align:"center",style:{paddingTop:"250px"},children:"There is no task to do :("}):Object(y.jsx)(N,{})]})}}]),n}(o.Component),J=Object(r.b)((function(e){return{todos:e.Todos}}))(z),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),a(e),c(e)}))},P=n(73),A=n(126),R=[n(127).a],q=Object(P.combineReducers)({Todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.data;switch(n){case m:return o;default:return e}}}),B=function(){try{var e=localStorage.getItem("todos");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),W=Object(P.createStore)(q,B,Object(A.composeWithDevTools)(P.applyMiddleware.apply(void 0,R)));W.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("todos",t)}catch(n){}}({Todos:W.getState().Todos})}));var Y=W;c.a.render(Object(y.jsx)(r.a,{store:Y,children:Object(y.jsx)(J,{})}),document.getElementById("root")),L()}},[[221,1,2]]]);
//# sourceMappingURL=main.75fa3673.chunk.js.map