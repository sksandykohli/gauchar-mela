(function(){

var NAV=[['','Home'],['history','History'],['about','About'],['culture','Culture'],['events','Events'],['gallery','Gallery'],['notices','Notices'],['reach','Reach us'],['contact','Contact']];
var $=function(i){return document.getElementById(i)};
$('menu').innerHTML=NAV.map(function(n){return '<li><a data-r="'+n[0]+'" href="#/'+n[0]+'">'+n[1]+'</a></li>'}).join('')+'<li class="cta"><a data-r="stalls" href="#/stalls">Book a stall</a></li>';
var mb=$('mb'),nav=$('nav');
mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};

function head(t,l){return '<div class="pg"><div class="w"><h1>'+t+'</h1><p class="lead">'+l+'</p>'}
var END='</div></div>';
function cards(a){return '<div class="grid">'+a.map(function(x){return '<div class="card"><h3>'+x[0]+'</h3><p>'+x[1]+'</p></div>'}).join('')+'</div>'}

var P={};
P['']=function(){
 var tiles=[['events','Events','Seven days of programmes','c0'],['stalls','Shops &amp; stalls','Book your place in the mela','c1'],['gallery','Gallery','Faces and colours of the fair','c2'],['notices','Notices &amp; tenders','Official documents','c3'],['culture','Culture','Songs, homes, food and dress','c1'],['reach','Reach us','How to get to Gauchar','c0']];
 return SLIDER()+'<div class="pg"><div class="w"><div class="grid">'+tiles.map(function(t){return '<a class="tile '+t[3]+'" href="#/'+t[0]+'"><h3>'+t[1]+'</h3><p>'+t[2]+'</p></a>'}).join('')+'</div>'
 +'<div class="card" style="margin-top:24px"><h3>Patrons</h3><p>Governor Lt. Gen. Gurmit Singh, PVSM, UYSM, AVSM, VSM &nbsp;|&nbsp; Chief Minister Shri Pushkar Singh Dhami</p></div></div></div>';
};
P.history=function(){return head('History','A field with a long memory.')+'<ol class="tl"><li><b>Panwar kings</b><p>The flat land belonged to the Panwar kings of Garhwal, who donated it to the Badrinath Temple. It still belongs to the temple.</p></li><li><b>1920s</b><p>Lady Willingdon, wife of the Viceroy, lands here by air.</p></li><li><b>1938</b><p>Pandit Jawaharlal Nehru and Vijaya Lakshmi Pandit land here on the way to Badrinath.</p></li><li><b>1943</b><p>The trade fair begins. Bhotia traders sell woollens, jewels and heeng, and buy cloth and salt.</p></li><li><b>1962</b><p>Trans-border trade with Tibet stops.</p></li><li><b>1994</b><p>Gauchar becomes a Nagar Panchayat.</p></li></ol>'+END};
P.about=function(){return head('About Gauchar','One of the largest flat open spaces in the hills of Uttarakhand.')+'<div class="prose"><p>The field has served as an airstrip, hosted dignitaries and, since 1943, one of the largest trade fairs in the state.</p><p>The Bhotias of Chamoli, from the border regions of the Garhwal Himalayas, are known for woollen garments and for processing and colouring wool. People travelled from as far as Bijnor and Kotdwar to trade here.</p><p>Gauchar was part of the Pal (later Shah) dynasty of Garhwal until the Gorkha rule of 1803 to 1815, then British Garhwal. Chamoli became a district on 24 February 1960.</p></div>'+END};
function topic(t,l,items){return function(){return head(t,l)+cards(items)+END}}
P.culture=function(){return head('Culture','Garhwali life in six chapters.')+'<div class="grid">'+[['housing','Housing','c0'],['food','Food','c1'],['jewellery','Jewellery','c2'],['costumes','Costumes','c3'],['festivals','Fairs &amp; festivals','c1']].map(function(x){return '<a class="tile '+x[2]+'" href="#/'+x[0]+'"><h3>'+x[1]+'</h3></a>'}).join('')+'</div><div class="card" style="margin-top:22px"><h3>Music and dance</h3><p>Folk songs and dances such as Thadya, Chhopati and Jhumelo, played with the dhol and damau drums.</p></div>'+END};
P.housing=topic('Housing','Homes built for the mountains.',[['Stone and slate','Thick stone walls and slate roofs keep out cold and rain.'],['Carved wood','Doors and window frames are often decorated with wood carving.'],['Multi-storey','Families live upstairs, and the ground floor traditionally shelters cattle.']]);
P.food=topic('Food','Simple mountain food, rich in millets and pulses.',[['Mandua roti','Flatbread from finger millet, eaten with ghee.'],['Jhangora kheer','A sweet pudding made from barnyard millet.'],['Kafuli and phanu','Leafy greens and lentil dishes cooked slowly in iron pots.'],['Arsa','A sweet made of rice flour and jaggery.']]);
P.jewellery=topic('Jewellery','Ornaments worn at weddings and festivals.',[['Nath','The large nose ring, a mark of Garhwali brides.'],['Gulobandh','A neck ornament of gold-coloured bands.'],['Pauncha and hansuli','Wrist and neck pieces, often in silver.']]);
P.costumes=topic('Costumes','Clothing shaped by weather and wool.',[['Angdi and ghagri','Traditional women\'s blouse and long skirt, worn with an odhni.'],['Kurta and topi','Men\'s kurta, churidar and cap.'],['Bhotia woollens','Hand-woven wool garments from the border communities.']]);
P.festivals=topic('Fairs &amp; festivals','The calendar of the hills.',[['Gauchar Mela','Held every November since 1943.'],['Nanda Devi Raj Jat','A pilgrimage procession held about every twelve years.'],['Harela and Phool Dei','Seasonal festivals welcoming the monsoon and spring.']]);

var days=['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6','Day 7'],dn=['14 Nov','15 Nov','16 Nov','17 Nov','18 Nov','19 Nov','20 Nov'];
P.events=function(){return head('Events','Seven days, 14 to 20 November 2026.')+'<div class="tabs" role="tablist" id="tabs">'+days.map(function(d,i){return '<button role="tab" data-i="'+i+'" class="'+(i?'':'on')+'">'+d+' · '+dn[i]+'</button>'}).join('')+'</div><div id="ev" class="empty"></div>'+END};
P.gallery=function(){var c=['c0','c1','c2','c3'],n=['Dhol and damau','Woollen stalls','Evening music','Folk dance','Garhwali food','Handicrafts','Mela ground','Village crafts'];
 return head('Gallery','Tap a tile to read more.')+'<div class="gal">'+n.map(function(x,i){return '<button class="'+c[i%4]+'" data-t="'+x+'">'+x+'</button>'}).join('')+'</div><p class="note" style="margin-top:20px">Photos from past melas are on the <a href="https://gauchermela.in/gallery.html">official gallery</a>.</p>'+END};
P.stalls=function(){return head('Shops &amp; stalls','Send a booking request to the Mela Adhikari office.')+'<form id="sf"><label>Name<input name="n" required autocomplete="name"></label><label>Phone<input name="p" type="tel" required autocomplete="tel"></label><label>Stall type<select name="t"><option>Shop / trade stall</option><option>Food stall</option><option>Handicraft stall</option><option>Jhula / charkhi (rides)</option></select></label><label>What will you sell?<textarea name="d" rows="3"></textarea></label><button class="btn" type="submit">Send request</button><p class="note">This opens your email app with the request ready to send. For current rates, see the <a href="https://gauchermela.in/Rate.html">official rate page</a>.</p></form>'+END};
P.notices=function(){return head('Notices &amp; tenders','Official documents from the mela committee.')+'<div class="tabs" id="nt"><button class="on" data-f="n">Notices</button><button data-f="t">Tenders</button><button data-f="p">Policies</button></div><div id="nl"></div>'+END};
P.reach=function(){return head('Reach us','Gauchar lies on the Rishikesh to Badrinath highway near Karnaprayag.')+cards([['By road','Take the Rishikesh to Badrinath highway through Devprayag and Srinagar. Gauchar is on the way.'],['By train','The nearest major railhead is Rishikesh, then continue by road.'],['By air','Jolly Grant airport in Dehradun is the nearest major airport, then continue by road.']])+'<p class="note" style="margin-top:20px">Check distances and road conditions before you travel.</p>'+END};
P.contact=function(){return head('Contact','Write to the Gauchar Mela Committee.')+'<form id="cf"><label>Your name<input name="n" required></label><label>Email<input name="e" type="email" required></label><label>Message<textarea name="m" rows="5" required></textarea></label><button class="btn" type="submit">Send message</button></form><div class="card" style="margin-top:26px;max-width:560px"><h3>Office</h3><p>Mela Adhikari Office, Gauchar, Karanprayag, District Chamoli, Uttarakhand, India, 246444<br><a href="mailto:gaucharmela@gmail.com">gaucharmela@gmail.com</a></p></div>'+END};

var SL=[['Welcome to Gauchar Mela 2026','Uttarakhand\'s oldest trade fair, 14 to 20 November','#F7A21B','#D7263D','#23306B','#1B2559','#0E8A7D'],['Woollens and handicrafts','Bhotia traders have sold here since 1943','#D7263D','#F7A21B','#6B2A6B','#3E1A47','#23306B'],['Music, dance and culture','Dhol, damau and Garhwali folk evenings','#0E8A7D','#FFF6E0','#23306B','#162052','#F7A21B'],['Taste the hills','Mandua, jhangora and mountain sweets','#23306B','#F7A21B','#0E8A7D','#0A5C53','#D7263D']];
var IMG=['images/slide1.jpg','images/slide2.jpg','images/slide3.jpg','images/slide4.jpg'];
var REM=['https://gauchermela.in/images/slide1.jpg','https://gauchermela.in/images/slide2.jpg','https://gauchermela.in/images/slide3.jpg','https://gauchermela.in/images/slide4.jpg'];
/* Banner photos: save 4 photos in the images/ folder as slide1.jpg ... slide4.jpg. If a local file is missing, the site tries the original gauchermela.in image, then shows the drawing. */
function scene(s){return '<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="800" height="400" fill="'+s[2]+'"/><circle cx="620" cy="130" r="60" fill="'+s[3]+'"/><path d="M0 300 L150 140 L260 250 L380 110 L520 280 L650 170 L800 300 V400 H0Z" fill="'+s[4]+'"/><path d="M0 350 L120 250 L250 330 L400 220 L560 340 L700 260 L800 340 V400 H0Z" fill="'+s[5]+'"/><path d="M0 400 V370 Q200 330 400 372 T800 360 V400Z" fill="'+s[6]+'"/></svg>'}
function SLIDER(){return '<div class="sl" aria-roledescription="carousel" aria-label="Mela highlights"><div class="tr" id="tr">'+SL.map(function(s,i){return '<div class="sd">'+scene(s)+'<img src="'+IMG[i]+'" data-alt="'+REM[i]+'" alt="" onerror="var a=this.dataset.alt;if(a){this.dataset.alt=\'\';this.src=a}else{this.remove()}"><div class="tx"><div class="w"><h2>'+s[0]+'</h2><p>'+s[1]+'</p></div></div></div>'}).join('')+'</div><button class="ar l" id="pv" aria-label="Previous slide">&#8249;</button><button class="ar r" id="nx" aria-label="Next slide">&#8250;</button><div class="dots" id="dots">'+SL.map(function(s,i){return '<button aria-label="Slide '+(i+1)+'" class="'+(i?'':'on')+'"></button>'}).join('')+'</div></div>'}
function slider(){var tr=$('tr'),n=SL.length,i=0,tm,x0=0;
 function go(k){i=(k+n)%n;tr.style.transform='translateX(-'+i*100+'%)';[].forEach.call($('dots').children,function(d,j){d.classList.toggle('on',j===i)})}
 function play(){clearInterval(tm);if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;tm=setInterval(function(){if(!$('tr')){clearInterval(tm);return}go(i+1)},5000)}
 $('pv').onclick=function(){go(i-1);play()};$('nx').onclick=function(){go(i+1);play()};
 $('dots').onclick=function(e){var b=e.target.closest('button');if(!b)return;go([].indexOf.call($('dots').children,b));play()};
 tr.ontouchstart=function(e){x0=e.touches[0].clientX};tr.ontouchend=function(e){var d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){go(d<0?i+1:i-1);play()}};
 play()}
function strip(){var t=new Date('2026-11-14T00:00:00+05:30').getTime(),p=function(n){return n<10?'0'+n:n};
 var f=function(){var x=t-Date.now();$('sc').innerHTML=x<=0?'<b>Starting now</b>':'<b>'+Math.floor(x/864e5)+'</b> days <b>'+p(Math.floor(x/36e5)%24)+'</b> hrs <b>'+p(Math.floor(x/6e4)%60)+'</b> min <b>'+p(Math.floor(x/1e3)%60)+'</b> sec'};f();setInterval(f,1000)}
var T={};
var docs={n:[],t:[],p:[['Terms &amp; Conditions','https://gauchermela.in/Terms and Conditions.pdf'],['Refund and Cancellation Policy','https://gauchermela.in/Refund And Cancellation Policy.pdf']]};
function showDocs(k){var a=docs[k],el=$('nl');
 el.innerHTML=a.length?'<div class="docs">'+a.map(function(d){return '<a href="'+d[1]+'"><span>'+d[0]+'</span><span>PDF</span></a>'}).join('')+'</div>':'<div class="empty"><b>Nothing posted here yet</b><p>The latest official documents are on the <a href="https://gauchermela.in/notices.html">notices page of the official site</a>.</p></div>'}
function mail(to,sub,body){location.href='mailto:'+to+'?subject='+encodeURIComponent(sub)+'&body='+encodeURIComponent(body)}

function after(r){
 if(r===''){slider()}
 if(r==='events'){var show=function(i){$('ev').innerHTML='<b>'+days[i]+' · '+dn[i]+'</b><p>The programme for this day will be announced by the committee.<br>Check <a href="#/notices">Notices</a> for updates.</p>'};show(0);
  $('tabs').onclick=function(e){var b=e.target.closest('button');if(!b)return;[].forEach.call($('tabs').children,function(x){x.classList.toggle('on',x===b)});show(+b.dataset.i)}}
 if(r==='gallery'){document.querySelector('.gal').onclick=function(e){var b=e.target.closest('button');if(!b)return;$('dt').textContent=b.dataset.t;$('dp').textContent='Photos for this theme are on the official gallery page.';$('dlg').showModal()}}
 if(r==='notices'){showDocs('n');$('nt').onclick=function(e){var b=e.target.closest('button');if(!b)return;[].forEach.call($('nt').children,function(x){x.classList.toggle('on',x===b)});showDocs(b.dataset.f)}}
 if(r==='stalls'){$('sf').onsubmit=function(e){e.preventDefault();var f=e.target;mail('gaucharmela@gmail.com','Stall booking request, Gauchar Mela 2026','Name: '+f.n.value+'\nPhone: '+f.p.value+'\nStall type: '+f.t.value+'\nDetails: '+f.d.value)}}
 if(r==='contact'){$('cf').onsubmit=function(e){e.preventDefault();var f=e.target;mail('gaucharmela@gmail.com','Message from website','Name: '+f.n.value+'\nEmail: '+f.e.value+'\n\n'+f.m.value)}}
}
function route(){var r=(location.hash.replace(/^#\/?/,'')||'');if(!P[r])r='';
 $('app').innerHTML=P[r]();
 var on=['housing','food','jewellery','costumes','festivals'].indexOf(r)>-1?'culture':r;
 [].forEach.call(document.querySelectorAll('#menu a'),function(a){a.classList.toggle('on',a.dataset.r===on)});
 nav.classList.remove('open');mb.setAttribute('aria-expanded',false);
 document.title=(r?r.charAt(0).toUpperCase()+r.slice(1)+' | ':'')+'Gauchar Mela 2026';
 window.scrollTo(0,0);after(r)}
window.addEventListener('hashchange',route);strip();route();
})();
