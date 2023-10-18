// ---------- HTML ---------- 
let divmid2 = document.createElement("div");
divmid2.className = "mid2";
document.body.appendChild(divmid2);



let theprodtxt = document.createElement("p");
theprodtxt.textContent = "The Product";
theprodtxt.className = "the-prod-txt";
divmid2.appendChild(theprodtxt);

let kionoffers = document.createElement("p");
kionoffers.textContent = "Kion offers the only single platform approach to cloud enablement, transcending cloud management and cloud governance by offering all three pillars necessary for total cloud control.";
kionoffers.className = "kion-offers";
divmid2.appendChild(kionoffers);

let moreabt = document.createElement("div");
moreabt.className = "more-abt";
divmid2.appendChild(moreabt);

let moreabttxt = document.createElement("p");
moreabttxt.textContent = "More About the Product";
moreabttxt.className = "more-abt-txt";
moreabt.appendChild(moreabttxt);

let m2kwadratdiv = document.createElement("div");
m2kwadratdiv.className = "m2kwadrat";
divmid2.appendChild(m2kwadratdiv);

let m2img = document.createElement("img");
m2img.className = "m2img";
m2img.src = ("img/sberbanka.png");
m2kwadratdiv.appendChild(m2img);

let autoorch = document.createElement("p");
autoorch.textContent = "Automation & Orchestration";
autoorch.className = "auto-orch";
m2kwadratdiv.appendChild(autoorch);

let provaccs = document.createElement("p");
provaccs.textContent = "Provision accounts, get enterprise-wide visibility, and fully integrate the cloudwith your tech stack to automate the full cloud lifecycle.";
provaccs.className = "prov-accs";
m2kwadratdiv.appendChild(provaccs);

let learnmore = document.createElement("p");
learnmore.textContent = "Learn More";
learnmore.className = "learn-more";
m2kwadratdiv.appendChild(learnmore);

// ---------- 

let divmid3 = document.createElement("div");
divmid3.className = "mid3";
document.body.appendChild(divmid3);

let ourres = document.createElement("p");
ourres.textContent = "Our Results";
ourres.className = "our-res";
divmid3.appendChild(ourres);

let _10x = document.createElement("p");
_10x.textContent = "10x";
_10x.className = "_10x";
divmid3.appendChild(_10x);

let faster = document.createElement("p");
faster.textContent = "Faster cloud account setup and provisioning";
faster.className = "faster";
divmid3.appendChild(faster);

let _30pc = document.createElement("p");
_30pc.textContent = "30%";
_30pc.className = "_30pc";
divmid3.appendChild(_30pc);

let savings = document.createElement("p");
savings.textContent = "Savings, on average, in cloud bills";
savings.className = "savings";
divmid3.appendChild(savings);

let _4000p = document.createElement("p");
_4000p.textContent = "4,000+";
_4000p.className = "_4000p";
divmid3.appendChild(_4000p);

let oneclick = document.createElement("p");
oneclick.textContent = "One-click resources to automate compliance and security";
oneclick.className = "one-click";
divmid3.appendChild(oneclick);

const {children} = document.body;
children[(children.length / 2) >> 0].appendChild(divmid2.cloneNode(true))

children[(children.length / 2) >> 0].appendChild(divmid3.cloneNode(true))

// ---------- CSS ----------

divmid2.style.width = "1440px"
divmid2.style.height = "728px"
divmid2.style.backgroundColor= "#ffffff"


theprodtxt.style.margin = "74px 0px 0px 160px"
theprodtxt.style.width = "326px"
theprodtxt.style.color = "#283337"
theprodtxt.style.fontFamily = "Times New Roman"
theprodtxt.style.fontSize = "60px"
theprodtxt.style.fontStyle = "normal"
theprodtxt.style.fontWeight = "400"
theprodtxt.style.lineHeight = "60px"
theprodtxt.style.letterSpacing = "1px"

kionoffers.style.margin = "28px 0px 0px 163px"
kionoffers.style.width = "363px"
kionoffers.style.color = "#40494D"
kionoffers.style.fontFamily = "Arial"
kionoffers.style.fontSize = "17px"
kionoffers.style.fontStyle = "normal"
kionoffers.style.fontWeight = "400"
kionoffers.style.lineHeight = "26px"

moreabt.style.display = "flex"
moreabt.style.margin = "39px 0px 0px 160px"
moreabt.style.width = "243px"
moreabt.style.height = "56px"
moreabt.style.flexShrink = "0"
moreabt.style.borderRadius = "56px"
moreabt.style.background = "#283337"

moreabttxt.style.width = "193px"
moreabttxt.style.color = "#FFF"
moreabttxt.style.textAlign = "center"
moreabttxt.style.fontFamily = "Arial"
moreabttxt.style.fontSize = "17px"
moreabttxt.style.fontStyle = "normal"
moreabttxt.style.fontWeight = "400"
moreabttxt.style.lineHeight = "21px"
moreabttxt.style.margin = "18px auto"

m2kwadratdiv.style.float = "right"
m2kwadratdiv.style.margin = "-280px 80px 0px 0px"
m2kwadratdiv.style.backgroundColor = "#f3f7f4"
m2kwadratdiv.style.width = "560px"
m2kwadratdiv.style.height = "548px"
m2kwadratdiv.style.flexShrink = "0"
m2kwadratdiv.style.borderRadius = "6px"
m2kwadratdiv.style.background = "#F3F7F4"

m2img.style.margin = "80px 0px 0px 80px"

autoorch.style.margin = "27px 0px 0px 80px"
autoorch.style.width = "203px"
autoorch.style.color = "#283337"
autoorch.style.fontFamily = "Arial"
autoorch.style.fontSize = "32px"
autoorch.style.fontStyle = "normal"
autoorch.style.fontWeight = "400"
autoorch.style.lineHeight = "33.882px"

provaccs.style.margin = "51px 0px 0px 80px"
provaccs.style.width = "391px"
provaccs.style.color = "#40494D"
provaccs.style.fontFamily = "Arial"
provaccs.style.fontSize = "18px"
provaccs.style.fontStyle = "normal"
provaccs.style.fontWeight = "400"
provaccs.style.lineHeight = "26px"

learnmore.style.margin = "38px 113px 80px 334px"
learnmore.style.width = "113px"
learnmore.style.color = "#283337"
learnmore.style.textAlign = "right"
learnmore.style.fontFamily = "Arial"
learnmore.style.fontSize = "18px"
learnmore.style.fontStyle = "normal"
learnmore.style.fontWeight = "700"
learnmore.style.lineHeight = "36px"

// ----------

divmid3.style.width = "1440px"
divmid3.style.height = "533px"
divmid3.style.backgroundColor = "#f3f7f4"
divmid3.style.padding = "230px 0px 0px 0px"

ourres.style.margin = "0px 539px 0px 571px"
ourres.style.width = "330px"
ourres.style.color = "#283337"
ourres.style.textAlign = "center"
ourres.style.fontFamily = "'Times New Roman', Times, serif"
ourres.style.fontSize = "60px"
ourres.style.fontStyle = "normal"
ourres.style.fontWeight = "700"
ourres.style.lineHeight = "60px"
ourres.style.letterSpacing = "1px"

_10x.style.margin = "75px 0px 0px 228px"
_10x.style.width = "84px"
_10x.style.color = "#283337"
_10x.style.textAlign = "center"
_10x.style.fontFamily = "Arial"
_10x.style.fontSize = "52px"
_10x.style.fontStyle = "normal"
_10x.style.fontWeight = "400"
_10x.style.lineHeight = "70px"

faster.style.margin = "19px 0px 0px 160px"
faster.style.width = "220px"
faster.style.color = "#40494D"
faster.style.textAlign = "center"
faster.style.fontFamily = "Arial"
faster.style.fontSize = "16px"
faster.style.fontStyle = "normal"
faster.style.fontWeight = "400"
faster.style.lineHeight = "24px"

_30pc.style.margin = "-150px 0px 0px 658px"
_30pc.style.width = "125px"
_30pc.style.color = "#283337"
_30pc.style.textAlign = "center"
_30pc.style.fontFamily = "Arial"
_30pc.style.fontSize = "60px"
_30pc.style.fontStyle = "normal"
_30pc.style.fontWeight = "400"
_30pc.style.lineHeight = "70px"

savings.style.margin = "19px 0px 0px 620px"
savings.style.width = "201px"
savings.style.color = "#40494D"
savings.style.textAlign = "center"
savings.style.fontFamily = "Arial"
savings.style.fontSize = "16px"
savings.style.fontStyle = "normal"
savings.style.fontWeight = "400"
savings.style.lineHeight = "24px"

_4000p.style.margin = "-150px 0px 0px 1071px"
_4000p.style.width = "198px"
_4000p.style.color = "#283337"
_4000p.style.textAlign = "center"
_4000p.style.fontFamily = "Arial"
_4000p.style.fontSize = "60px"
_4000p.style.fontStyle = "normal"
_4000p.style.fontWeight = "400"
_4000p.style.lineHeight = "70px"

oneclick.style.margin = "19px 0px 0px 1077px"
oneclick.style.width = "186px"
oneclick.style.color = "#40494D"
oneclick.style.textAlign = "center"
oneclick.style.fontFamily = "Arial"
oneclick.style.fontSize = "16px"
oneclick.style.fontStyle = "normal"
oneclick.style.fontWeight = "400"
oneclick.style.lineHeight = "24px"
