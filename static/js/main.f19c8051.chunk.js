(this["webpackJsonpmicardgo-web"]=this["webpackJsonpmicardgo-web"]||[]).push([[0],{257:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(96),o=n.n(r),i=n(9),c=n.n(i),l=n(18),d=n(43),m=n.n(d),u=n(8),b=n(4),j=n.p+"static/media/MICardLogo-Grad.47e2c634.png",h=n(15),p=n(7),x=n(16),f=n(47),g=n(0),O=function(e){var t=e.label,n=Object(f.a)(e,["label"]),a=Object(p.d)(n),s=Object(x.a)(a,2),r=s[0],o=s[1];return Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)("label",{htmlFor:r.name,style:{fontSize:13,fontWeight:"bold",textAlign:"left",color:"#C64156",paddingBottom:5},children:t}),Object(g.jsx)("input",Object(h.a)(Object(h.a)(Object(h.a)({className:"form-control shadow-none ".concat(o.touched&&o.error&&"is-invalid")},r),n),{},{autoComplete:"on",style:{backgroundColor:"#e5e7eb",padding:15,paddingLeft:55,paddingRight:55,borderRadius:10,fontSize:16,fontFamily:"Nunito",height:45,marginVertical:3,marginBottom:10}})),Object(g.jsx)(p.a,{component:"div",name:r.name,style:{color:"red",fontFamily:"Nunito"}})]})},y=n(2),v=m.a.create({baseURL:"http://localhost:8000"}),N=function(){var e=Object(b.f)(),t=y.a({email:y.c().email("Email is invalid! Please try again!").required("Email is required!"),password:y.c().min(6,"Password must contain at least 6 characters.").required("Password is required!")}),n=function(){var t=Object(l.a)(c.a.mark((function t(n,a){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.post("/login",Object(h.a)({},n)).then(e.push("/info"));case 2:s=t.sent,console.log(s.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return s.a.useEffect((function(){n()})),Object(g.jsx)(p.c,{initialValues:{email:"",password:""},validationSchema:t,onSubmit:n,children:function(e){var t=e.values,n=e.errors,a=e.touched,s=e.isSubmitting,r=(e.handleChange,e.handleBlur),o=e.handleSubmit,i=t.email,c=t.password;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"18px",color:"#733bc3",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"Welcome Back! Please Login."}),Object(g.jsxs)(p.b,{children:[Object(g.jsx)(O,{value:i,error:a.email&&n.email,onBlur:r("email"),type:"email",label:"Email",name:"email",placeholder:"Your email address..."}),Object(g.jsx)(O,{value:c,error:a.password&&n.password,onBlur:r("password"),type:"password",label:"Password",name:"password",placeholder:"Your password..."}),Object(g.jsx)("button",{className:"btn btn-dark mt-3 col-sm-12",submitting:s.toString(),onClick:o,type:"submit",style:{padding:15,backgroundColor:"#C64156",justifyContent:"center",alignItems:"center",borderRadius:15,marginVertical:5,height:50,marginBottom:20,border:"none",minWidth:"100%"},children:"Login"})]})]})}})};function w(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row d-flex align-items-center min-vh-100",children:[Object(g.jsxs)("div",{className:"col-md-4",children:[Object(g.jsx)("img",{className:"img-fluid",src:j,alt:"Logo",style:{width:"170",height:"160"}}),Object(g.jsx)("h2",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"38px",color:"#c64156",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"MICard Go"})]}),Object(g.jsx)("div",{className:"col-md-2"}),Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)(N,{}),Object(g.jsx)("br",{}),Object(g.jsx)(u.b,{to:"/signup",className:"AuthSwitchLink",style:{textDecoration:"none"},children:Object(g.jsx)("p",{style:{fontSize:"18px",fontFamily:"Nunito",fontWeight:"700",textAlign:"center",color:"#c64156"},children:"Don't have an account? Please sign up."})})]})]})})}var C=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,S=function(){var e=Object(b.f)(),t=y.a({firstName:y.c().min(2,"First name must be at least 2 characters long.").max(255,"First name cannot be more than 255 characters.").required("First name is required!"),lastName:y.c().min(2,"Last name must be at least 2 characters long.").max(255,"Last name cannot be more than 255 characters.").required("Last name is required!"),phoneNumber:y.c().matches(C,"Phone number is not valid").required("Phone number is required!"),email:y.c().email("Email is invalid! Please try again!").required("Email is required!"),password:y.c().min(6,"Password must contain at least 6 characters.").required("Password is required!"),confirmPassword:y.c().oneOf([y.b("password"),null],"Password does not match!").required("Confirm password is required!")}),n=function(){var t=Object(l.a)(c.a.mark((function t(n,a){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.post("/signup",Object(h.a)({},n)).then(e.push("/login"));case 2:s=t.sent,console.log(s.data),a.resetForm(),a.setSubmitting(!1);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(g.jsx)(p.c,{initialValues:{firstName:"",lastName:"",phoneNumber:"",email:"",password:"",confirmPassword:""},validationSchema:t,onSubmit:n,children:function(e){var t=e.values,n=e.errors,a=e.touched,s=e.isSubmitting,r=(e.handleChange,e.handleBlur),o=e.handleSubmit,i=t.firstName,c=t.lastName,l=t.phoneNumber,d=t.email,m=t.password,u=t.confirmPassword;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h4",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"18px",color:"#733bc3",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"Welcome! Please Sign Up."}),Object(g.jsxs)(p.b,{children:[Object(g.jsx)(O,{value:i,error:a.firstName&&n.firstName,onBlur:r("firstName"),type:"text",label:"First Name",name:"firstName",placeholder:"Your first name..."}),Object(g.jsx)(O,{value:c,error:a.lastName&&n.lastName,onBlur:r("lastName"),type:"text",label:"Last Name",name:"lastName",placeholder:"Your last name..."}),Object(g.jsx)(O,{value:l,error:a.phoneNumber&&n.phoneNumber,onBlur:r("phoneNumber"),type:"text",label:"Phone Number",name:"phoneNumber",placeholder:"Your phone number..."}),Object(g.jsx)(O,{value:d,error:a.email&&n.email,onBlur:r("email"),type:"email",label:"Email",name:"email",placeholder:"Your email address..."}),Object(g.jsx)(O,{value:m,error:a.password&&n.password,onBlur:r("password"),type:"password",label:"Password",name:"password",placeholder:"Your password..."}),Object(g.jsx)(O,{value:u,error:a.confirmPassword&&n.confirmPassword,onBlur:r("confirmPassword"),type:"password",label:"Confirm Password",name:"confirmPassword",placeholder:"Confirm your password..."}),Object(g.jsx)("button",{className:"btn btn-dark mt-3 col-sm-12",submitting:s.toString(),onClick:o,type:"submit",style:{padding:15,backgroundColor:"#C64156",justifyContent:"center",alignItems:"center",borderRadius:15,marginVertical:5,height:50,marginBottom:20,border:"none",minWidth:"100%"},children:"Sign Up"})]})]})}})};var q=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row d-flex align-items-center min-vh-100",children:[Object(g.jsxs)("div",{className:"col-md-4",children:[Object(g.jsx)("img",{className:"img-fluid",src:j,alt:"Logo",style:{width:"170",height:"160"}}),Object(g.jsx)("h2",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"38px",color:"#c64156",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"MICard Go"})]}),Object(g.jsx)("div",{className:"col-md-2"}),Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)(S,{}),Object(g.jsx)("br",{}),Object(g.jsx)(u.b,{to:"/login",className:"AuthSwitchLink",style:{textDecoration:"none"},children:Object(g.jsx)("p",{style:{fontSize:"18px",fontFamily:"Nunito",fontWeight:"700",textAlign:"center",color:"#c64156"},children:"Already have an account? Please login."})})]})]})})},A=n.p+"static/media/Lunch.4bd9cec2.png",k=function(e){var t=e.label,n=Object(f.a)(e,["label"]),a=Object(p.d)(n),s=Object(x.a)(a,2),r=s[0],o=s[1];return Object(g.jsxs)("div",{className:"mb-2",children:[Object(g.jsx)("label",{htmlFor:r.name,style:{fontSize:13,fontWeight:"bold",textAlign:"left",color:"#C64156",paddingBottom:5},children:t}),Object(g.jsx)("input",Object(h.a)(Object(h.a)(Object(h.a)({className:"form-control shadow-none ".concat(o.touched&&o.error&&"is-invalid")},r),n),{},{autoComplete:"off",style:{backgroundColor:"#e5e7eb",padding:15,paddingLeft:55,paddingRight:55,borderRadius:10,fontSize:16,fontFamily:"Nunito",height:45,marginVertical:3,marginBottom:10}})),Object(g.jsx)(p.a,{component:"div",name:r.name,style:{color:"red",fontFamily:"Nunito"}})]})},B=n(48),P=function(){var e=y.a({dob:y.c().required("Date of birth is required!"),gender:y.c().min(4,"Gender must be at least 4 characters long.").max(6,"Your gender cannot be more than 6 characters.").required("Your gender is required!"),address1:y.c().required("Your address is required!"),address2:y.c().required("Your address is required!"),city:y.c().required("Your city is required!"),state:y.c().required("Your state, county or province is required!"),country:y.c().required("Your country is required!"),postalCode:y.c().required("Your postal or zip code is required!"),allergies:y.c().required('If you do not have any allergies, please answer "No"'),illness:y.c().required('If you do not suffer from any illness, please answer "No"'),medication:y.c().required('If you do not use any medications, please answer "No"')});return Object(g.jsx)(p.c,{initialValues:{dob:"",gender:"",address1:"",address2:"",city:"",county:"",country:"",postalCode:""},validationSchema:e,onSubmit:function(e){console.log(e)},children:function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)(p.b,{children:[Object(g.jsx)(k,{type:"text",label:"Date of Birth",name:"dob",placeholder:"dd / mm / yyyy"}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm-4 d-flex justify-content-center",children:Object(g.jsxs)(u.b,{to:"#",style:{textDecoration:"none"},children:[Object(g.jsx)(B.MaterialCommunityIcons,{name:"gender-male",color:"red",size:50}),Object(g.jsx)("p",{style:{fontSize:13,fontWeight:"bold",textAlign:"left",color:"#C64156",paddingBottom:5},children:"Male"})]})}),Object(g.jsx)("div",{className:"col-sm-4 d-flex justify-content-center",children:Object(g.jsxs)(u.b,{to:"#",style:{textDecoration:"none"},children:[Object(g.jsx)(B.MaterialCommunityIcons,{name:"gender-female",color:"#733BC3",size:50}),Object(g.jsx)("p",{style:{fontSize:13,fontWeight:"bold",textAlign:"left",color:"#C64156",paddingBottom:5},children:"Female"})]})}),Object(g.jsx)("div",{className:"col-sm-4 d-flex justify-content-center",children:Object(g.jsxs)(u.b,{to:"#",style:{textDecoration:"none"},children:[Object(g.jsx)(B.MaterialCommunityIcons,{name:"gender-transgender",color:"#733BC3",size:50}),Object(g.jsx)("p",{style:{fontSize:13,fontWeight:"bold",textAlign:"left",color:"#C64156",paddingBottom:5},children:"Other"})]})})]}),Object(g.jsx)(k,{type:"text",label:"Address Line 1",name:"address1",placeholder:"Your address..."}),Object(g.jsx)(k,{type:"text",label:"Address Line 2",name:"address2",placeholder:"Your address continued..."}),Object(g.jsx)(k,{type:"text",label:"City",name:"city",placeholder:"Your city..."}),Object(g.jsx)(k,{type:"text",label:"State / County / Province",name:"state",placeholder:"Your state, county or province..."}),Object(g.jsx)(k,{type:"text",label:"Country",name:"country",placeholder:"Your country..."}),Object(g.jsx)(k,{type:"text",label:"Postal / Zip Code",name:"postalCode",placeholder:"Your postal or zip code..."}),Object(g.jsx)(u.b,{to:"/medical",children:Object(g.jsx)("button",{className:"btn btn-dark mt-3 col-sm-12",type:"submit",style:{padding:15,backgroundColor:"#C64156",justifyContent:"center",alignItems:"center",borderRadius:15,marginVertical:5,height:50,marginBottom:20,border:"none",minWidth:"100%"},children:"Continue"})}),Object(g.jsx)("br",{})]})})}})},z=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row d-flex align-items-center min-vh-100",children:[Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h2",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"38px",color:"#c64156",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center",marginTop:"50px"},children:"Basic Information"}),Object(g.jsx)("h4",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"18px",color:"#733bc3",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"Add to your profile by completing your basic information."}),Object(g.jsx)("img",{className:"img-fluid",src:A,alt:"lunch",style:{width:"170",height:"160"}})]}),Object(g.jsx)("div",{className:"col-md-6",children:Object(g.jsx)(P,{})})]})})},I=n.p+"static/media/Doctor.51748132.png",W=function(){var e=y.a({allergies:y.c().required('If you do not have any allergies, please answer "No"'),illness:y.c().required('If you do not suffer from any illness, please answer "No"'),medication:y.c().required('If you do not use any medications, please answer "No"')});return Object(g.jsx)(p.c,{initialValues:{allergies:"",illness:"",medication:""},validationSchema:e,onSubmit:function(e){console.log(e)},children:function(e){return Object(g.jsx)("div",{children:Object(g.jsxs)(p.b,{children:[Object(g.jsx)(k,{type:"text",label:"Allergies",name:"allergies",placeholder:"If 'Yes', please let us know..."}),Object(g.jsx)(k,{type:"text",label:"Illness(es)",name:"illness",placeholder:"If 'Yes', please let us know..."}),Object(g.jsx)(k,{type:"text",label:"Vitamins, Supplements & Medications",name:"medication",placeholder:"If 'Yes', please let us know..."}),Object(g.jsx)(u.b,{to:"/profile",children:Object(g.jsx)("button",{className:"btn btn-dark mt-3 col-sm-12",type:"submit",style:{padding:15,backgroundColor:"#C64156",justifyContent:"center",alignItems:"center",borderRadius:15,marginVertical:5,height:50,marginBottom:20,border:"none",minWidth:"100%"},children:"Continue"})}),Object(g.jsx)("br",{})]})})}})},F=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row d-flex align-items-center min-vh-100",children:[Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h2",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"38px",color:"#c64156",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"Medical Information"}),Object(g.jsx)("h4",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"18px",color:"#733bc3",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"Complete your profile by adding your medical information."}),Object(g.jsx)("img",{className:"img-fluid",src:I,alt:"doctor",style:{width:"170",height:"160"}})]}),Object(g.jsx)("div",{className:"col-md-6",children:Object(g.jsx)(W,{})})]})})},Y=n(103),L=n.n(Y),V=function(){var e=Object(a.useState)({}),t=Object(x.a)(e,2),n=t[0],s=t[1],r=Object(b.f)();Object(a.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get({user:n});case 2:t=e.sent,s(t.user),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(n)}));var o=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.post("/logout").then(r.push("/login"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"container",style:{textAlign:"center"},children:Object(g.jsxs)("div",{className:"row d-flex align-items-center min-vh-100",children:[Object(g.jsx)("div",{className:"col-md-12 ",children:Object(g.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(g.jsx)("h2",{style:{fontSize:"42px",color:"#c64156",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:"MIProfile"}),Object(g.jsx)("h4",{className:"mv-4 font-weight-bold-display-4",style:{fontSize:"18px",color:"#733bc3",fontFamily:"Nunito",fontWeight:"bold",textAlign:"center"},children:n.firstName+" "+n.lastName})]})}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-md-4"}),Object(g.jsxs)("div",{className:"col-md-4 d-flex justify-content-center",children:[Object(g.jsx)(L.a,{data:"https://www.google.com",size:280,framed:!0}),Object(g.jsx)("hr",{})]}),Object(g.jsx)("div",{className:"col-md-4"}),Object(g.jsx)("div",{className:"col-md-4"}),Object(g.jsx)("div",{className:"col-md-4",children:Object(g.jsx)(u.b,{to:"#",children:Object(g.jsx)("img",{src:"../../assets/images/Add_to_Apple_Wallet_rgb_US-UK.svg",alt:"Add to Apple Wallet",style:{width:"170",height:"50px"}})})}),Object(g.jsx)("div",{className:"col-md-4"}),Object(g.jsx)("div",{className:"col-md-4"}),Object(g.jsxs)("div",{className:"col-md-4 d-flex justify-content-center",children:[Object(g.jsx)("hr",{}),Object(g.jsx)("button",{className:"btn btn-dark mt-3 col-sm-12",type:"submit",onClick:o,style:{padding:15,backgroundColor:"#C64156",justifyContent:"center",alignItems:"center",borderRadius:15,marginVertical:5,height:50,marginBottom:20,border:"none"},children:"Logout"})]}),Object(g.jsx)("div",{className:"col-md-4"})]})]})})};var M=function(){var e=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("http://localhost:8000/");case 3:t=e.sent,console.log(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){e()})),Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(u.a,{basename:"/micardgo-web",children:Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/",exact:!0,component:w}),Object(g.jsx)(b.a,{path:"/signup",component:q}),Object(g.jsx)(b.a,{path:"/login",exact:!0,component:w}),Object(g.jsx)(b.a,{path:"/info",exact:!0,component:z}),Object(g.jsx)(b.a,{path:"/medical",exact:!0,component:F}),Object(g.jsx)(b.a,{path:"/profile",exact:!0,component:V})]})})})};n(243);n(244),o.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root"))}},[[257,1,2]]]);
//# sourceMappingURL=main.f19c8051.chunk.js.map