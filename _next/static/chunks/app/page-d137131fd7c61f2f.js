(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2620:(e,i,l)=>{Promise.resolve().then(l.bind(l,9862)),Promise.resolve().then(l.t.bind(l,5717,23)),Promise.resolve().then(l.bind(l,1451)),Promise.resolve().then(l.bind(l,8998)),Promise.resolve().then(l.bind(l,1050)),Promise.resolve().then(l.bind(l,4665)),Promise.resolve().then(l.bind(l,2479)),Promise.resolve().then(l.bind(l,457)),Promise.resolve().then(l.bind(l,8848)),Promise.resolve().then(l.bind(l,152)),Promise.resolve().then(l.bind(l,6805)),Promise.resolve().then(l.bind(l,810)),Promise.resolve().then(l.t.bind(l,7970,23)),Promise.resolve().then(l.bind(l,6480))},9862:(e,i,l)=>{"use strict";l.r(i),l.d(i,{Calculator:()=>D,Phase:()=>E});var t=l(5155),a=l(2115),r=l(8998),s=l(4665),n=l(2479),A=l(1050),o=l(810),d=l(5295),h=l(8848),c=l(152),u=l(1441),g=l(8130),m=l(507),x=l(1321),f=l(5480),p=l(405);let b=e=>{let{title:i,icon:l,value:a}=e;return(0,t.jsx)(s.default,{sx:{height:"100%"},children:(0,t.jsxs)(n.default,{children:[(0,t.jsxs)(r.default,{sx:{display:"flex",mb:3,alignItems:"center"},children:[l,(0,t.jsx)(o.default,{sx:{ml:2,fontWeight:100},variant:"h6",children:i})]}),(0,t.jsx)(o.default,{variant:"h3",sx:{fontWeight:"100"},children:a})]})})};var v=l(6883),j=l(59),P=l(2086),C=l(2257);let _={src:"/less-than-zero//_next/static/media/pexels-pixabay-356049.9fc1428a.jpg"};var y=l(5761),E=function(e){return e.Single="single",e.Three="three",e}({});function D(){let[e,i]=a.useState({units:"",phase:"single"}),l=(0,y.A)(),D=(0,d.A)(l.breakpoints.up("sm")),[Q,k]=a.useState({billAmount:0,panelsRequired:0,dailyProduction:0,panelCapacity:0});return(0,t.jsx)(s.default,{sx:{minWidth:275,py:6,px:{md:3,xs:2}},style:{backgroundImage:"url(".concat(_.src,")"),width:"100%",height:"100%",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",boxShadow:"inset 0 0 0 1000px rgb(0 0 0 / 43%)"},children:(0,t.jsx)(n.default,{sx:{px:{md:3,xs:0}},children:(0,t.jsxs)(h.default,{container:!0,spacing:2,children:[(0,t.jsxs)(h.default,{size:{xs:12,lg:6},children:[(0,t.jsx)(o.default,{color:"#fff",variant:"h5",component:"div",my:2,children:"Discover Your Solar Potential: Calculate Your Plan and Savings"}),(0,t.jsx)(o.default,{color:"#fff",component:"div",my:2,children:"Please enter the number of units of electricity you have consumed"}),(0,t.jsx)(r.default,{display:"flex",children:(0,t.jsx)(c.default,{onChange:l=>{Number(l.target.value)>=0&&i({...e,units:l.target.value})},label:"Units",placeholder:"Enter your bill units",id:"outlined-start-adornment",sx:{flex:1,width:"100%",backgroundColor:"#fff"},type:"number",variant:"filled",value:e.units,slotProps:{htmlInput:{min:0,inputMode:"numeric"},input:{startAdornment:(0,t.jsx)(u.A,{position:"start",children:(0,t.jsx)(p.A,{})})}}})}),(0,t.jsx)(r.default,{children:(0,t.jsxs)(g.A,{variant:"filled",fullWidth:!0,sx:{my:2,backgroundColor:"#fff"},children:[(0,t.jsx)(m.A,{id:"phase-select-label",children:"Select Phase"}),(0,t.jsxs)(x.A,{labelId:"phase-select-label",fullWidth:!0,variant:"filled",label:"Select Phase",sx:{backgroundColor:"#fff"},value:e.phase,onChange:l=>{i({...e,phase:l.target.value})},children:[(0,t.jsx)(f.A,{value:"single",children:"Single Phase"}),(0,t.jsx)(f.A,{value:"three",children:"Three Phase"})]})]})}),(0,t.jsx)(r.default,{children:(0,t.jsx)(A.default,{sx:{display:"flex"},size:"large",variant:"contained",fullWidth:!0,onClick:()=>{let{billDetails:{billAmount:i},solarDetails:{panelsRequired:l,dailyProduction:t,totalCapacity:a}}=function(e,i){let l=parseFloat(e),t=i===E.Single?6:15,a=0;for(let e of({single:[{limit:40,charge:0},{limit:50,charge:45},{limit:100,charge:75},{limit:150,charge:95},{limit:200,charge:130},{limit:250,charge:145},{limit:300,charge:190},{limit:350,charge:215},{limit:400,charge:235},{limit:500,charge:265},{limit:1/0,charge:290}],three:[{limit:40,charge:0},{limit:50,charge:120},{limit:100,charge:160},{limit:150,charge:190},{limit:200,charge:200},{limit:250,charge:220},{limit:300,charge:225},{limit:350,charge:235},{limit:400,charge:240},{limit:500,charge:265},{limit:1/0,charge:290}]})[i])if(l<=e.limit){a=e.charge;break}let r=l,s=0;if(l<=250)for(let e of[{limit:50,rate:3.3},{limit:50,rate:4.15},{limit:50,rate:5.25},{limit:50,rate:7.1},{limit:50,rate:8.35},{limit:50,rate:6.55},{limit:50,rate:7.4},{limit:50,rate:7.75},{limit:100,rate:8.05},{limit:1/0,rate:9}]){if(r<=0)break;let i=Math.min(r,e.limit);console.log("unit sla",i,r,e.rate),s+=i*e.rate,r-=i,console.log("variable charge",s)}else l>250&&l<=300?s=6.55*l:l>300&&l<=350?s=7.4*l:l>350&&l<=400?s=7.75*l:l>400&&l<=500?s=8.05*l:l>500&&(s=9*l);let n=.1*s,A=.1*l,o=a+s+n+t+A,d=Math.ceil(l/30/4),h=560*d;return{billDetails:{fixedCharge:a,variableCharge:s,duty:n,meterRent:t,fuelSurcharge:A,billAmount:Math.round(o)},solarDetails:{unitsConsumed:l,panelsRequired:d,dailyProduction:4*d,totalCapacityKW:(h/1e3).toFixed(2),totalCapacity:h}}}(e.units,e.phase);k({billAmount:i,panelsRequired:l,dailyProduction:t,panelCapacity:a})},children:"Calculate"})})]}),(0,t.jsx)(h.default,{size:{xs:12,lg:6},children:(0,t.jsxs)(h.default,{container:!0,spacing:2,children:[(0,t.jsx)(h.default,{size:{xs:6},children:(0,t.jsx)(b,{title:"Bill Amount",value:Q.billAmount,icon:(0,t.jsx)(j.A,{fontSize:D?"large":"medium"})})}),(0,t.jsx)(h.default,{size:{xs:6},children:(0,t.jsx)(b,{title:"Panels Required",value:Q.panelsRequired,icon:(0,t.jsx)(v.A,{fontSize:D?"large":"medium"})})}),(0,t.jsx)(h.default,{size:{xs:6},children:(0,t.jsx)(b,{title:"Daily Production",value:Q.dailyProduction,icon:(0,t.jsx)(P.A,{fontSize:D?"large":"medium"})})}),(0,t.jsx)(h.default,{size:{xs:6},children:(0,t.jsx)(b,{title:"Panel Capacity",value:Q.panelCapacity,icon:(0,t.jsx)(C.A,{fontSize:D?"large":"medium"})})})]})})]})})})}},5717:e=>{e.exports={page:"page_page__556_G",main:"page_main__nw1Wk",ctas:"page_ctas__rfsth",primary:"page_primary__2CBMe",secondary:"page_secondary__jzhTV",footer:"page_footer__F3MD0",header:"page_header__oRW75",logo:"page_logo__ikIZE"}},6480:(e,i,l)=>{"use strict";l.r(i),l.d(i,{default:()=>t});let t={src:"/less-than-zero//_next/static/media/logo.c59270c4.jpg",height:1024,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArAT/xAAdEAAABQUAAAAAAAAAAAAAAAAAAhEUMQEDEhMh/9oACAEBAAE/ADvXdjGhW6m2QscH/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AIj/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8}}},e=>{var i=i=>e(e.s=i);e.O(0,[938,299,776,441,517,358],()=>i(2620)),_N_E=e.O()}]);