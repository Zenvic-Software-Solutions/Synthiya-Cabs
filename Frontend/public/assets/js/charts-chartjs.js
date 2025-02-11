"use strict";!function(){var o="#836AF9",r="#ffe800",t="#28dac6",e="#EDF1F4",a="#2B9AFF",l="#84D0FF";let i,n,d,s,c;s=(isDarkStyle?(i=config.colors_dark.cardColor,n=config.colors_dark.headingColor,d=config.colors_dark.textMuted,c=config.colors_dark.bodyColor,config.colors_dark):(i=config.colors.cardColor,n=config.colors.headingColor,d=config.colors.textMuted,c=config.colors.bodyColor,config.colors)).borderColor;document.querySelectorAll(".chartjs").forEach(function(o){o.height=o.dataset.height});var p=document.getElementById("barChart"),p=(p&&new Chart(p,{type:"bar",data:{labels:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12"],datasets:[{data:[275,90,190,205,125,85,55,87,127,150,230,280,190],backgroundColor:t,borderColor:"transparent",maxBarThickness:15,borderRadius:{topRight:15,topLeft:15}}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},plugins:{tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s},legend:{display:!1}},scales:{x:{grid:{color:s,drawBorder:!1,borderColor:s},ticks:{color:d}},y:{min:0,max:400,grid:{color:s,drawBorder:!1,borderColor:s},ticks:{stepSize:100,color:d}}}}}),document.getElementById("horizontalBarChart")),p=(p&&new Chart(p,{type:"bar",data:{labels:["MON","TUE","WED ","THU","FRI","SAT","SUN"],datasets:[{data:[710,350,470,580,230,460,120],backgroundColor:"#1D9FF2",borderColor:"transparent",maxBarThickness:15}]},options:{indexAxis:"y",responsive:!0,maintainAspectRatio:!1,animation:{duration:500},elements:{bar:{borderRadius:{topRight:15,bottomRight:15}}},plugins:{tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s},legend:{display:!1}},scales:{x:{min:0,grid:{color:s,borderColor:s},ticks:{color:d}},y:{grid:{borderColor:s,display:!1,drawBorder:!1},ticks:{color:d}}}}}),document.getElementById("lineChart")),p=(p&&new Chart(p,{type:"line",data:{labels:[0,10,20,30,40,50,60,70,80,90,100,110,120,130,140],datasets:[{data:[80,150,180,270,210,160,160,202,265,210,270,255,290,360,375],label:"Europe",borderColor:config.colors.danger,tension:.5,pointStyle:"circle",backgroundColor:config.colors.danger,fill:!1,pointRadius:1,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBorderColor:i,pointHoverBackgroundColor:config.colors.danger},{data:[80,125,105,130,215,195,140,160,230,300,220,170,210,200,280],label:"Asia",borderColor:config.colors.primary,tension:.5,pointStyle:"circle",backgroundColor:config.colors.primary,fill:!1,pointRadius:1,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBorderColor:i,pointHoverBackgroundColor:config.colors.primary},{data:[80,99,82,90,115,115,74,75,130,155,125,90,140,130,180],label:"Africa",borderColor:r,tension:.5,pointStyle:"circle",backgroundColor:r,fill:!1,pointRadius:1,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBorderColor:i,pointHoverBackgroundColor:r}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{color:s,drawBorder:!1,borderColor:s},ticks:{color:d}},y:{scaleLabel:{display:!0},min:0,max:400,ticks:{color:d,stepSize:100},grid:{color:s,drawBorder:!1,borderColor:s}}},plugins:{tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s},legend:{position:"top",align:"start",rtl:isRtl,labels:{usePointStyle:!0,padding:35,boxWidth:6,boxHeight:6,color:c}}}}}),document.getElementById("radarChart")),p=(p&&((y=p.getContext("2d").createLinearGradient(0,0,0,150)).addColorStop(0,"rgba(85, 85, 255, 0.9)"),y.addColorStop(1,"rgba(151, 135, 255, 0.8)"),(b=p.getContext("2d").createLinearGradient(0,0,0,150)).addColorStop(0,"rgba(255, 85, 184, 0.9)"),b.addColorStop(1,"rgba(255, 135, 135, 0.8)"),new Chart(p,{type:"radar",data:{labels:["STA","STR","AGI","VIT","CHA","INT"],datasets:[{label:"Donté Panlin",data:[25,59,90,81,60,82],fill:!0,pointStyle:"dash",backgroundColor:b,borderColor:"transparent",pointBorderColor:"transparent"},{label:"Mireska Sunbreeze",data:[40,100,40,90,40,90],fill:!0,pointStyle:"dash",backgroundColor:y,borderColor:"transparent",pointBorderColor:"transparent"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},scales:{r:{ticks:{maxTicksLimit:1,display:!1,color:d},grid:{color:s},angleLines:{color:s},pointLabels:{color:d}}},plugins:{legend:{rtl:isRtl,position:"top",labels:{padding:25,color:c}},tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s}}}})),document.getElementById("polarChart")),b=(p&&new Chart(p,{type:"polarArea",data:{labels:["Africa","Asia","Europe","America","Antarctica","Australia"],datasets:[{label:"Population (millions)",backgroundColor:[o,r,"#FF8132","#299AFF","#4F5D70",t],data:[19,17.5,15,13.5,11,9],borderWidth:0}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:500},scales:{r:{ticks:{display:!1,color:d},grid:{display:!1}}},plugins:{tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s},legend:{rtl:isRtl,position:"right",labels:{usePointStyle:!0,padding:25,boxWidth:8,boxHeight:8,color:c}}}}}),document.getElementById("bubbleChart")),y=(b&&new Chart(b,{type:"bubble",data:{animation:{duration:1e4},datasets:[{label:"Dataset 1",backgroundColor:o,borderColor:o,data:[{x:20,y:74,r:10},{x:10,y:110,r:5},{x:30,y:165,r:7},{x:40,y:200,r:20},{x:90,y:185,r:7},{x:50,y:240,r:7},{x:60,y:275,r:10},{x:70,y:305,r:5},{x:80,y:325,r:4},{x:100,y:310,r:5},{x:110,y:240,r:5},{x:120,y:270,r:7},{x:130,y:300,r:6}]},{label:"Dataset 2",backgroundColor:r,borderColor:r,data:[{x:30,y:72,r:5},{x:40,y:110,r:7},{x:20,y:135,r:6},{x:10,y:160,r:12},{x:50,y:285,r:5},{x:60,y:235,r:5},{x:70,y:275,r:7},{x:80,y:290,r:4},{x:90,y:250,r:10},{x:100,y:220,r:7},{x:120,y:230,r:4},{x:110,y:320,r:15},{x:130,y:330,r:7}]}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{min:0,max:140,grid:{color:s,drawBorder:!1,borderColor:s},ticks:{stepSize:10,color:d}},y:{min:0,max:400,grid:{color:s,drawBorder:!1,borderColor:s},ticks:{stepSize:100,color:d}}},plugins:{legend:{display:!1},tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s}}}}),document.getElementById("lineAreaChart")),p=(y&&new Chart(y,{type:"line",data:{labels:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12",""],datasets:[{label:"Africa",data:[40,55,45,75,65,55,70,60,100,98,90,120,125,140,155],tension:0,fill:!0,backgroundColor:a,pointStyle:"circle",borderColor:"transparent",pointRadius:.5,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBackgroundColor:a,pointHoverBorderColor:i},{label:"Asia",data:[70,85,75,150,100,140,110,105,160,150,125,190,200,240,275],tension:0,fill:!0,backgroundColor:l,pointStyle:"circle",borderColor:"transparent",pointRadius:.5,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBackgroundColor:l,pointHoverBorderColor:i},{label:"Europe",data:[240,195,160,215,185,215,185,200,250,210,195,250,235,300,315],tension:0,fill:!0,backgroundColor:e,pointStyle:"circle",borderColor:"transparent",pointRadius:.5,pointHoverRadius:5,pointHoverBorderWidth:5,pointBorderColor:"transparent",pointHoverBackgroundColor:e,pointHoverBorderColor:i}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",rtl:isRtl,align:"start",labels:{usePointStyle:!0,padding:35,boxWidth:6,boxHeight:6,color:c}},tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s}},scales:{x:{grid:{color:"transparent",borderColor:s},ticks:{color:d}},y:{min:0,max:400,grid:{color:"transparent",borderColor:s},ticks:{stepSize:100,color:d}}}}}),document.getElementById("doughnutChart")),b=(p&&new Chart(p,{type:"doughnut",data:{labels:["Tablet","Mobile","Desktop"],datasets:[{data:[10,10,80],backgroundColor:[t,"#FDAC34",config.colors.primary],borderWidth:0,pointStyle:"rectRounded"}]},options:{responsive:!0,animation:{duration:500},cutout:"68%",plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(o){return" "+(o.labels||"")+" : "+o.parsed+" %"}},rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s}}}}),document.getElementById("scatterChart"));b&&new Chart(b,{type:"scatter",data:{datasets:[{label:"iPhone",data:[{x:72,y:225},{x:81,y:270},{x:90,y:230},{x:103,y:305},{x:103,y:245},{x:108,y:275},{x:110,y:290},{x:111,y:315},{x:109,y:350},{x:116,y:340},{x:113,y:260},{x:117,y:275},{x:117,y:295},{x:126,y:280},{x:127,y:340},{x:133,y:330}],backgroundColor:config.colors.primary,borderColor:"transparent",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:5},{label:"Samsung Note",data:[{x:13,y:95},{x:22,y:105},{x:17,y:115},{x:19,y:130},{x:21,y:125},{x:35,y:125},{x:13,y:155},{x:21,y:165},{x:25,y:155},{x:18,y:190},{x:26,y:180},{x:43,y:180},{x:53,y:202},{x:61,y:165},{x:67,y:225}],backgroundColor:r,borderColor:"transparent",pointRadius:5},{label:"OnePlus",data:[{x:70,y:195},{x:72,y:270},{x:98,y:255},{x:100,y:215},{x:87,y:240},{x:94,y:280},{x:99,y:300},{x:102,y:290},{x:110,y:275},{x:111,y:250},{x:94,y:280},{x:92,y:340},{x:100,y:335},{x:108,y:330}],backgroundColor:t,borderColor:"transparent",pointBorderWidth:2,pointHoverBorderWidth:2,pointRadius:5}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:800},plugins:{legend:{position:"top",rtl:isRtl,align:"start",labels:{usePointStyle:!0,padding:25,boxWidth:6,boxHeight:6,color:c}},tooltip:{rtl:isRtl,backgroundColor:i,titleColor:n,bodyColor:c,borderWidth:1,borderColor:s}},scales:{x:{min:0,max:140,grid:{color:s,drawTicks:!1,drawBorder:!1,borderColor:s},ticks:{stepSize:10,color:d}},y:{min:0,max:400,grid:{color:s,drawTicks:!1,drawBorder:!1,borderColor:s},ticks:{stepSize:100,color:d}}}}})}();
