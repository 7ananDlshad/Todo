(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{211:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(22),l=n.n(s),c=n(50),o=n(102),r=n(41),d=n(42),h=n(47),j=n(46),b=(n(134),n(51)),u=n(217),O=n(215),p=n(216),f=n(9),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).state={isModalVisible:!1};var s=i.props.handleForm;return i.reference=a.a.createRef(),i.showModal=function(){i.setState({isModalVisible:!0})},i.handleCancel=function(){i.setState({isModalVisible:!1})},i.onFinish=function(e){s(e),i.reference.current.resetFields(),i.setState({isModalVisible:!1})},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.isModalVisible;return Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsx)("h1",{children:"ToDo"}),Object(f.jsx)(b.a,{type:"primary",onClick:this.showModal,children:"New"}),Object(f.jsx)(u.a,{title:"Add New Todo",visible:e,onCancel:this.handleCancel,footer:null,children:Object(f.jsxs)(O.a,{name:"todo-form",layout:"vertical",onFinish:this.onFinish,ref:this.reference,children:[Object(f.jsx)(O.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please Enter Title!"}],children:Object(f.jsx)(p.a,{})}),Object(f.jsx)(O.a.Item,{label:"Description",name:"description",children:Object(f.jsx)(p.a,{})}),Object(f.jsx)(O.a.Item,{children:Object(f.jsx)(b.a,{type:"primary",htmlType:"submit",block:!0,children:"Add Todo"})})]})})]})}}]),n}(i.Component),x=n(214),v=n(92),C=n(218),y=n(219),S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;Object(r.a)(this,n);var s=(i=t.call(this,e)).props,l=s.handelUpdate,o=s.handleCancel,d=s.isModalVisible,h=s.item;return i.onFinish=function(e){l(e),o()},i.ref=a.a.createRef(),i.componentDidUpdate=function(){d&&h&&h.id&&i.ref.current.setFieldsValue(Object(c.a)({},h))},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isModalVisible,n=e.handleCancel;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(u.a,{title:"Edit Todo",visible:t,onCancel:n,footer:null,children:Object(f.jsxs)(O.a,{name:"form-modal",layout:"vertical",ref:this.ref,onFinish:this.onFinish,children:[Object(f.jsx)(O.a.Item,{label:"Title",name:"title",rules:[{required:!0,message:"Please input title!"}],children:Object(f.jsx)(p.a,{})}),Object(f.jsx)(O.a.Item,{label:"Description",name:"description",children:Object(f.jsx)(p.a,{})}),Object(f.jsx)(O.a.Item,{hidden:!0,name:"id",children:Object(f.jsx)(p.a,{})}),Object(f.jsx)(O.a.Item,{children:Object(f.jsx)(b.a,{type:"primary",htmlType:"submit",block:!0,children:"Update"})})]})})})}}]),n}(i.Component),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).state={item:{},isModalVisible:!1};var a=i.props,s=a.handleDeleteSetstate,l=a.handelUpdate;return i.handleDelete=function(e){s(e)},i.handleComplete=function(e){var t=Object(c.a)(Object(c.a)({},e),{},{isChecked:!e.isChecked});l(t),i.setState({item:t})},i.handleEdit=function(e){i.setState({isModalVisible:!0,item:Object(c.a)({},e)})},i.handleCancel=function(){i.setState({isModalVisible:!1,item:{}})},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.todos,i=t.handelUpdate,a=this.state,s=a.isModalVisible,l=a.item;return Object(f.jsx)(x.b,{header:"ToDo List",dataSource:n,renderItem:function(t,n){return Object(f.jsxs)(x.b.Item,{children:[Object(f.jsx)(x.b.Item.Meta,{title:t.title,description:t.description}),Object(f.jsx)(v.a,{style:t.isChecked?{fontSize:"125%",color:"green"}:{fontSize:"125%",color:"gray"},onClick:function(){e.handleComplete(t)}}),Object(f.jsx)(C.a,{style:{fontSize:"125%",margin:"0 17px",color:"#096dd9"},onClick:function(){e.handleEdit(t)}}),Object(f.jsx)(S,{isModalVisible:s,handleCancel:e.handleCancel,item:l,handelUpdate:i}),Object(f.jsx)(y.a,{style:{fontSize:"125%",color:"red"},onClick:function(){return e.handleDelete(n)}})]})}})}}]),n}(i.Component),k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;Object(r.a)(this,n),(i=t.call(this,e)).state={todos:[]};var a=i.state.todos;return i.handleForm=function(e){i.setState({todos:[Object(c.a)({id:Math.floor(1e3*Math.random())+1,isChecked:!1},e)].concat(Object(o.a)(a))})},i.handelUpdate=function(e){var t=Object(o.a)(a).map((function(t){return t.id===e.id?e:t}));i.setState({todos:t})},i.handleDeleteSetstate=function(e){i.setState({todos:a.splice(e,1)})},i}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.todos;return console.log(e),Object(f.jsxs)("div",{style:{margin:"5px 100px 0"},children:[Object(f.jsx)(m,{handleForm:this.handleForm}),0===e.length?Object(f.jsx)("h1",{align:"center",style:{paddingTop:"250px"},children:"There is no task to do :("}):Object(f.jsx)(g,{todos:e,handelUpdate:this.handelUpdate,handleDeleteSetstate:this.handleDeleteSetstate})]})}}]),n}(i.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,220)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),s(e),l(e)}))};l.a.render(Object(f.jsx)(k,{}),document.getElementById("root")),F()}},[[211,1,2]]]);
//# sourceMappingURL=main.e5aad98f.chunk.js.map