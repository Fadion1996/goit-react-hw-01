(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,a,t){e.exports=t(276)},178:function(e,a,t){},179:function(e){e.exports=[{label:"Bronze",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/bronze-icon.png",capacity:"2TB",price:39,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{label:"Silver",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/silver-icon.png",capacity:"20TB",price:99,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."},{label:"Gold",icon:"https://raw.githubusercontent.com/goitacademy/react-homework/master/homework-01/pricing-plan/assets/gold-icon.png",capacity:"400TB",price:499,description:"Praesent blandit laoreet nibh. Vivamus quis mi. Vestibulum eu odio. Ut tincidunt tincidunt erat. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam."}]},270:function(e,a,t){},271:function(e,a,t){},272:function(e,a,t){},273:function(e,a,t){},274:function(e){e.exports=[{id:"1e0700a2-5183-4291-85cc-2065a036a683",type:"invoice",amount:"964.82",currency:"LRD"},{id:"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",type:"payment",amount:"686.50",currency:"WST"},{id:"44dca67a-8e5a-4798-bf8e-b15efd4e1abd",type:"invoice",amount:"828.62",currency:"UGX"},{id:"ea8ed3dc-2b68-4a53-905a-53ecb0adef33",type:"withdrawal",amount:"527.80",currency:"ALL"},{id:"ea76146a-0b00-4b80-bc02-a8c822176712",type:"withdrawal",amount:"371.43",currency:"MUR"},{id:"63ca02f9-d637-46b5-9237-f3b24425e029",type:"payment",amount:"862.44",currency:"AUD"},{id:"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",type:"withdrawal",amount:"907.00",currency:"GEL"},{id:"6013bad0-750c-4691-8bc2-d8f2b43969c4",type:"withdrawal",amount:"352.52",currency:"UGX"},{id:"252c7be4-8b06-4fa7-8d42-61fb835b70d5",type:"payment",amount:"388.98",currency:"TOP"},{id:"4eaab41b-b967-40ac-82ed-85fc66f646f1",type:"deposit",amount:"103.10",currency:"BWP"},{id:"9648a350-8469-42d5-8bf3-18090de5fe67",type:"withdrawal",amount:"322.32",currency:"MRO"},{id:"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",type:"invoice",amount:"14.79",currency:"PYG"},{id:"43ef232c-80e9-4d6f-b48a-b22405620de3",type:"payment",amount:"904.86",currency:"CHF"},{id:"5161682e-e620-4019-ab0a-24ceb10fbd20",type:"withdrawal",amount:"307.08",currency:"NOK"},{id:"7b119d71-42e6-4c42-a141-6818b07bb9ff",type:"invoice",amount:"275.07",currency:"AWG"},{id:"a4f65722-65c4-4c28-b1f4-b8ed988bb205",type:"deposit",amount:"213.10",currency:"STD"},{id:"c6e5784b-0ca3-48d6-86e5-b5128af5a523",type:"invoice",amount:"116.11",currency:"CUP CUC"},{id:"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd",type:"invoice",amount:"878.67",currency:"HKD"},{id:"a4a98b0e-b22c-438b-9f83-de2df52110c8",type:"invoice",amount:"725.03",currency:"UYU UYI"},{id:"b39bfa7a-0166-4c47-94d6-87d20590f746",type:"payment",amount:"405.45",currency:"MDL"}]},275:function(e,a,t){},276:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(25),i=t.n(r),l=t(11),s=t(12),o=t(14),m=t(13),u=t(15),d=t(2),p=t(70),b=t.n(p),f=(t(178),function(e){function a(){var e,n;Object(l.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).pricingData=t(179),n}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return this.pricingData.map(function(e){return c.a.createElement(d.b,{key:b.a.generate(),className:"pricing-item"},c.a.createElement("div",{className:"pricing-item-img"},c.a.createElement(d.e,{component:"img",alt:"user avatar",className:"img",image:e.icon,title:"Petra Marica"})),c.a.createElement(d.d,{className:"pricing-item-discription"},c.a.createElement("h2",{className:"label"},e.label),c.a.createElement("p",{className:"capacity"},e.capacity," Storage"),c.a.createElement("p",{className:"description"},e.description),c.a.createElement("p",{className:"price"},"$",e.price,"/MO"),c.a.createElement(d.a,{className:"button",variant:"contained",color:"primary"},"Get Started")))})}}]),a}(n.Component)),y=(t(270),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"pricing-plan"},c.a.createElement(f,null))}}]),a}(n.Component)),h=(t(271),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.user,a=e.name,t=e.tag,n=e.location,r=e.avatar,i=e.stats;return c.a.createElement(d.b,{className:"profile-wrapper"},c.a.createElement(d.e,{component:"img",alt:"user avatar",className:"profile-avatar",image:r,title:"Petra Marica"}),c.a.createElement(d.d,{className:"profile-discription"},c.a.createElement("div",{className:"profile-about"},c.a.createElement("div",{className:"name"},a),c.a.createElement("div",{className:"tag"},t),c.a.createElement("div",{className:"location"},n)),c.a.createElement("div",{className:"profile-social"},c.a.createElement(d.c,{className:"profile-social-stats"},c.a.createElement("p",{className:"label"},"Followers"),c.a.createElement("p",{className:"quantity"},i.followers)),c.a.createElement(d.c,{className:"profile-social-stats"},c.a.createElement("p",{className:"label"},"Views"),c.a.createElement("p",{className:"quantity"},i.views)),c.a.createElement(d.c,{className:"profile-social-stats"},c.a.createElement("p",{className:"label"},"Likes"),c.a.createElement("p",{className:"quantity"},i.likes)))))}}]),a}(n.Component)),E=(t(272),function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.stats;return c.a.createElement(d.b,{className:"stats-wrapper"},c.a.createElement(d.d,{className:"stats-discription"},c.a.createElement("div",{className:"stats-title"},c.a.createElement("h2",null,"Upload stats")),c.a.createElement("div",{className:"stats-list"},e.map(function(e){return c.a.createElement(d.c,{key:e.id,className:"stats-list-item"},c.a.createElement("p",{className:"label"},e.label),c.a.createElement("p",{className:"percentage"},e.percentage))}))))}}]),a}(n.Component)),g=(t(273),function(e){function a(){var e,n;Object(l.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).data=t(274),n}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(d.f,{className:"transaction-history"},c.a.createElement(d.i,null,c.a.createElement(d.j,null,c.a.createElement(d.h,null,"Type"),c.a.createElement(d.h,null,"Amount"),c.a.createElement(d.h,null,"Currency"))),c.a.createElement(d.g,null,this.data.map(function(e){return c.a.createElement(d.j,{key:e.id},c.a.createElement(d.h,null,e.type),c.a.createElement(d.h,null,e.amount),c.a.createElement(d.h,null,e.currency))})))}}]),a}(n.Component)),v=(t(275),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).user={name:"Jacques Gluke",tag:"@jgluke",location:"Ocho Rios, Jamaica",avatar:"http://okcolab.sasquatchstudio.co/wp-content/uploads/2017/05/avatar-sample.jpg",stats:{followers:5603,views:4827,likes:1308}},t.stats=[{id:"id-1",label:".docx",percentage:22},{id:"id-2",label:".pdf",percentage:4},{id:"id-3",label:".mp3",percentage:17},{id:"id-4",label:".psd",percentage:47},{id:"id-5",label:".pdf",percentage:10}],t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container"},c.a.createElement(h,{user:this.user}),c.a.createElement(E,{stats:this.stats}),c.a.createElement(y,null),c.a.createElement(g,null))}}]),a}(n.Component));i.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.f802f254.chunk.js.map