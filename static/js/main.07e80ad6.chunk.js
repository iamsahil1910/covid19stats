(this.webpackJsonpworldcoronavirus_stats=this.webpackJsonpworldcoronavirus_stats||[]).push([[0],{176:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(58),s=a.n(l),c=a(3),i=a(4),o=a(6),u=a(5),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"ui one center aligned fixed menu"},n.a.createElement("a",{href:"/"},n.a.createElement("h2",{className:"ui center aligned item"},"Covid-19 Stats")),n.a.createElement("h3",{style:{margin:"auto"},className:"ui center  "},"Stay Home, Stay Safe"))}}]),a}(n.a.Component),d=a(7),h=a.n(d),v=a(10),p=a(12),y=a.n(p),g=y.a.create({baseURL:"https://api.thevirustracker.com/free-api?global=stats"}),E=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={total:0,death:0,recovered:0,activeCases:0,seriousCases:0,newCases:0,newDeath:0,newRecoverd:0},e.totalCasesRequest=Object(v.a)(h.a.mark((function t(){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get();case 2:a=t.sent,r=a.data.results[0],e.setState({total:r.total_cases,death:r.total_deaths,recovered:r.total_recovered,activeCases:r.total_active_cases,seriousCases:r.total_serious_cases,newCases:r.total_new_cases_today,newDeath:r.total_new_deaths_today,newRecoverd:r.total_new_recovered_today});case 5:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.totalCasesRequest()}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginLeft:"10px",marginRight:"10px",marginTop:"40px",align:"center"},className:"ui column center page grid"},n.a.createElement("div",{style:{marginBottom:"0"},class:"ui five item menu"},n.a.createElement("div",{className:"item"},"Total Cases"),n.a.createElement("div",{className:"item active"},"Total Deaths"),n.a.createElement("div",{className:"item"},"Total Recovered"),n.a.createElement("div",{className:"item"},"Active Cases"),n.a.createElement("div",{className:"item"},"Serious Cases")),n.a.createElement("div",{style:{marginTop:"0"},className:"ui five item menu"},n.a.createElement("div",{class:"item"},n.a.createElement("div",{style:{color:"gray"},className:"value"},n.a.createElement("h3",null,this.state.total," \xa0 (+",this.state.newCases,")"))),n.a.createElement("div",{class:"item"},n.a.createElement("div",{style:{color:"red"},className:"value"},n.a.createElement("h3",null,this.state.death," \xa0 (+",this.state.newDeath,")"))),n.a.createElement("div",{style:{color:"lightgreen"},className:"item"},n.a.createElement("div",{class:"value"},n.a.createElement("h3",null,this.state.recovered))),n.a.createElement("div",{style:{color:"darkyellow"},className:"item"},n.a.createElement("div",{class:"value"},n.a.createElement("h3",null,this.state.activeCases))),n.a.createElement("div",{style:{color:"red"},className:"item"},n.a.createElement("div",{class:"value"},n.a.createElement("h3",null,this.state.seriousCases)))))}}]),a}(n.a.Component),b=y.a.create({baseURL:"https://api.thevirustracker.com/free-api?countryTotals=ALL"}),f=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={data:[]},e.allCountryCasesData=Object(v.a)(h.a.mark((function t(){var a,r,n,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get();case 2:for(a=t.sent,r=a.data.countryitems[0],n=[],l=1;l<=182;l++)n.push(r[l]);n.sort((function(e,t){return e.total_cases<t.total_cases?1:e.total_cases>t.total_cases?-1:0})),e.setState({data:n});case 8:case"end":return t.stop()}}),t)}))),e.AllRecord=function(){return e.state.data.map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",{style:{textAlign:"center"}},e.title),n.a.createElement("td",null,e.total_cases," \xa0 ",0!==e.total_new_cases_today?"(+"+e.total_new_cases_today+")":" "),n.a.createElement("td",{className:"negative"},e.total_deaths," \xa0 ",0!==e.total_new_deaths_today?"(+"+e.total_new_deaths_today+")":""),n.a.createElement("td",null,0!==e.total_recovered?e.total_recovered:"Not Available or 0"),n.a.createElement("td",null,e.total_active_cases),n.a.createElement("td",{className:"negative"},e.total_serious_cases))}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.allCountryCasesData()}},{key:"render",value:function(){return n.a.createElement("div",{style:{marginTop:"20px"},className:"ui sticky left align container"},n.a.createElement("table",{className:"ui stackable celled table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Country Name"),n.a.createElement("th",null,"Total Cases"),n.a.createElement("th",null,"Total Deaths"),n.a.createElement("th",null,"Total Recovered"),n.a.createElement("th",null,"Active Cases"),n.a.createElement("th",null,"Serious Cases"))),n.a.createElement("tbody",null,this.AllRecord())))}}]),a}(n.a.Component),C=y.a.create({baseURL:"https://api.thevirustracker.com/free-api?countryTimeline="}),_=a(23),w=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={requiredDate:"",country:"",month:0,year:0,mlist:["January","February","March","April","May","June","July","August","September","October","November","December"],allRecord:[],labels:[],datasets:[{label:"",fill:!1,lineTension:.5,barThickness:8,backgroundColor:"",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:[]}]},e.totalCasesRequest=function(){var t=Object(v.a)(h.a.mark((function t(a,r){var n,l,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get(a);case 2:n=t.sent,l=n.data,console.log(r),s=r.map((function(e){return l.timelineitems[0][e].new_daily_deaths})),e.setState({country:l.countrytimelinedata[0].info.title,allRecord:l.timelineitems,datasets:[{label:"Death",fill:!1,lineTension:.5,barThickness:8,backgroundColor:"",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:s}]});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.requiredDate=function(){for(var t=new Date,a=t.getDate(),r=t.getMonth()+1,n=t.getFullYear(),l=n%10,s=10*(parseInt(n/10)%10)+l,c=r.toString()+"/"+a.toString()+"/"+s.toString(),i=[],o=1;o<a;o++)o<10?i.push(r.toString()+"/0"+o.toString()+"/"+s.toString()):i.push(r.toString()+"/"+o.toString()+"/"+s.toString());return e.setState({todayDate:c,month:r,year:s,labels:i}),i},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.requiredDate();this.totalCasesRequest("US",e)}},{key:"render",value:function(){return n.a.createElement("div",{style:{height:"200px",marginTop:"10px"}},n.a.createElement(_.a,{data:this.state,options:{title:{display:!0,text:"Death Graph (Hover over Bar to know Exact Value)",fontSize:15},legend:{display:!0,position:"right"}}}))}}]),a}(n.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={requiredDate:"",country:"",month:0,year:0,mlist:["January","February","March","April","May","June","July","August","September","October","November","December"],allRecord:[],labels:[],datasets:[{label:"",fill:!1,lineTension:.5,barThickness:8,backgroundColor:"",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:[]}]},e.totalCasesRequest=function(){var t=Object(v.a)(h.a.mark((function t(a,r){var n,l,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get(a);case 2:n=t.sent,l=n.data,console.log(r),s=r.map((function(e){return l.timelineitems[0][e].new_daily_cases})),e.setState({country:l.countrytimelinedata[0].info.title,allRecord:l.timelineitems,datasets:[{label:"Cases",fill:!1,lineTension:.5,barThickness:8,backgroundColor:"",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:s}]});case 7:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e.requiredDate=function(){for(var t=new Date,a=t.getDate(),r=t.getMonth()+1,n=t.getFullYear(),l=n%10,s=10*(parseInt(n/10)%10)+l,c=r.toString()+"/"+a.toString()+"/"+s.toString(),i=[],o=1;o<a;o++)o<10?i.push(r.toString()+"/0"+o.toString()+"/"+s.toString()):i.push(r.toString()+"/"+o.toString()+"/"+s.toString());return e.setState({todayDate:c,month:r,year:s,labels:i}),i},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.requiredDate();this.totalCasesRequest("US",e)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"ui message"},n.a.createElement("div",{className:"header"},"Country : ",this.state.country," \xa0 (",this.state.mlist[this.state.month-1],")"),n.a.createElement("div",{style:{height:"200px"}},n.a.createElement(_.a,{data:this.state,options:{title:{display:!0,text:"Cases Graph (Hover over Bar to know Exact Value)",fontSize:15},legend:{display:!0,position:"right"}}})),n.a.createElement(w,null)))}}]),a}(n.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(m,null),n.a.createElement(E,null),n.a.createElement("div",{className:"ui conatiner"},n.a.createElement("div",{className:"ui grid"},n.a.createElement("div",{className:"ui row"},n.a.createElement("div",{style:{margin:"auto"},className:"nine wide column"},n.a.createElement(f,null)),n.a.createElement("div",{style:{marginTop:"20px"},className:"ui sticky fixed six wide column center page grid"},n.a.createElement("div",{className:"ui fixed sticky"},n.a.createElement(S,null),n.a.createElement("div",{className:"ui message"},n.a.createElement("div",{className:"header"},"Support"),n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"To Contribute : ",n.a.createElement("a",{href:"https://github.com/iamsahil1910/covid19stats"},"Click Here")),n.a.createElement("li",null,"To provide detailed data country API: Email: ",n.a.createElement("a",{href:"mailto:iamsahil1910@gmail.com"},"iamsaihl1910@gmail.com")))),n.a.createElement("div",{className:"ui message"},n.a.createElement("div",{className:"header"},"New Site Features"),n.a.createElement("ul",{className:"list"},n.a.createElement("li",null,"World Data: ",n.a.createElement("a",{href:"https://thevirustracker.com/"},"The Virus Tracker")),n.a.createElement("li",null,"India data (coming soon): ",n.a.createElement("a",{href:"https://www.covid19india.org"},"Covid19India"))))))))))}}]),a}(n.a.Component);s.a.render(n.a.createElement(N,null),document.querySelector("#root"))},60:function(e,t,a){e.exports=a(176)}},[[60,1,2]]]);
//# sourceMappingURL=main.07e80ad6.chunk.js.map