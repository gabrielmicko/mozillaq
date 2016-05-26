//action menu
//document.querySelector('#btn-action-menu').addEventListener ('click', function () {
//  document.querySelector('#action-menu').className = 'fade-in';
//});
//document.querySelector('#action-menu').addEventListener ('click', function () {
//  this.className = 'fade-out';
//});

 $.ajaxSetup( {
    xhr: function() {return new window.XMLHttpRequest({mozSystem: true});}
});

//buttons
document.querySelector('#btn-about-firefox-os').addEventListener ('click', function () {
  document.querySelector('#about-firefox-os').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-buttons-back').addEventListener ('click', function () {
  document.querySelector('#about-firefox-os').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

document.querySelector('.btn-server-address').addEventListener ('click', function () {
    if(!isEmpty(localStorage.getItem("ip")) && !isEmpty(localStorage.getItem("client_name"))){
	$('#settings input[name=ip]').attr('value', localStorage.getItem("ip"));
	$('#settings input[name=client_name]').attr('value', localStorage.getItem("client_name"));
    }
  document.querySelector('#server-address').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-server-address-back').addEventListener ('click', function () {
  document.querySelector('#server-address').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});

//confirm
//document.querySelector('#btn-confirm').addEventListener ('click', function () {
//  document.querySelector('#confirm').className = 'fade-in';
//});
//document.querySelector('#confirm').addEventListener ('click', function () {
//  this.className = 'fade-out';
//});
//
////edit mode
//document.querySelector('#btn-edit-mode').addEventListener ('click', function () {
//  document.querySelector('#edit-mode').className = 'edit';
//});
//document.querySelector('#edit-mode').addEventListener ('click', function () {
//  this.className = '';
//});
//
////headers
//document.querySelector('#btn-headers').addEventListener ('click', function () {
//  document.querySelector('#headers').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-headers-back').addEventListener ('click', function () {
//  document.querySelector('#headers').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
//input areas
document.querySelector('.btn-developer-quiz').addEventListener ('click', function () {
  document.querySelector('#developer-quiz').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-developer-quiz-back').addEventListener ('click', function () {
  document.querySelector('#developer-quiz').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});


document.querySelector('.btn-questions').addEventListener ('click', function () {
  document.querySelector('#questions').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-questions-back').addEventListener ('click', function () {
  document.querySelector('#questions').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});


document.querySelector('.btn-beginner-quiz').addEventListener ('click', function () {
  document.querySelector('#beginner-quiz').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-beginner-quiz-back').addEventListener ('click', function () {
  document.querySelector('#beginner-quiz').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});


document.querySelector('.btn-result').addEventListener ('click', function () {
  document.querySelector('#result').className = 'current';
  document.querySelector('[data-position="current"]').className = 'left';
});
document.querySelector('#btn-result-back').addEventListener ('click', function () {
  document.querySelector('#result').className = 'right';
  document.querySelector('[data-position="current"]').className = 'current';
});
//
////status
//document.querySelector('#btn-status').addEventListener ('click', function () {
//  utils.status.show('The Alarm is set for 7 hours and 14 minutes from now');    
//});
//
////switches
//document.querySelector('#btn-switches').addEventListener ('click', function () {
//  document.querySelector('#switches').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-switches-back').addEventListener ('click', function () {
//  document.querySelector('#switches').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
////lists
//document.querySelector('#btn-lists').addEventListener ('click', function () {
//  document.querySelector('#lists').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-lists-back').addEventListener ('click', function () {
//  document.querySelector('#lists').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
////progress
//document.querySelector('#btn-progress').addEventListener ('click', function () {
//  document.querySelector('#progress').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-progress-back').addEventListener ('click', function () {
//  document.querySelector('#progress').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
////scrolling
//document.querySelector('#btn-scrolling').addEventListener ('click', function () {
//  document.querySelector('#scrolling').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-scrolling-back').addEventListener ('click', function () {
//  document.querySelector('#scrolling').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
////seek bars
//document.querySelector('#btn-seek-bars').addEventListener ('click', function () {
//  document.querySelector('#seek-bars').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//  var animend = (/webkit/i).test(navigator.appVersion) ? 'webkitAnimationEnd' : 'animationend';
//
//  document.addEventListener(animend, function animationend() {
//    document.removeEventListener(animend, animationend);
//    utils.seekbars.init();
//  });
//});
//document.querySelector('#btn-seek-bars-back').addEventListener ('click', function () {
//  document.querySelector('#seek-bars').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
////tabs
//document.querySelector('#btn-tabs').addEventListener ('click', function () {
//  document.querySelector('#tabs').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-tabs-back').addEventListener ('click', function () {
//  document.querySelector('#tabs').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
////filters
//document.querySelector('#btn-filters').addEventListener ('click', function () {
//  document.querySelector('#filters').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-filters-back').addEventListener ('click', function () {
//  document.querySelector('#filters').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});
//
////toolbars
//document.querySelector('#btn-toolbars').addEventListener ('click', function () {
//  document.querySelector('#toolbars').className = 'current';
//  document.querySelector('[data-position="current"]').className = 'left';
//});
//document.querySelector('#btn-toolbars-back').addEventListener ('click', function () {
//  document.querySelector('#toolbars').className = 'right';
//  document.querySelector('[data-position="current"]').className = 'current';
//});

$(document).ready(function(){
   $('#settings').submit(function(event){
       event.preventDefault();
       var $inputs = $('#settings :input');
	var values = {};
	$inputs.each(function() {
	    values[this.name] = $(this).val();
	});
	var pw = "9a91598b38fbc26743ad5bc8d353c760";
	
	if(!isEmpty(values.password) && md5(values.password) == pw){
	    if(!isEmpty(values.ip) && !isEmpty(values.client_name) && values.client_name.length > 5  && values.ip.length > 5){
		localStorage.setItem("ip", values.ip);
		localStorage.setItem("client_name", values.client_name);
		alert("Sikeresen beállítva");
	    }else{
		alert('Helytelen adatok');
	    }
	}else{
	    alert('Hibás jelszó');
	}
	
	
	return false;
   });
   $('.quiz-form').submit(function(event){
       event.preventDefault();
       
       if(!isEmpty(localStorage.getItem("client_name")) && 
	       !isEmpty(localStorage.getItem("ip"))){
	var button = $(this).find('button[type=submit]');
	button.attr('disabled', 'disabled');
       
	$(this).find('input[name=client_name]').val(localStorage.getItem("client_name"));
       var $inputs = $(this).serialize();
	$.ajax({
	    type: "POST",
	    url: 'http://'+localStorage.getItem("ip")+"/server/api.php",
	    data: $inputs,
	    timeout: 5000,
	})
	.done(function( msg ) {
	    var msg = JSON.parse(msg);
	    if(msg.result == 'true'){
		alert(msg.msg);
		document.querySelector('.quiz-form').reset();
	    }else{
		alert(msg.msg);
	    }
	    button.removeAttr('disabled');
	})
	.fail(function(msg, t, m){
	    if(t==="timeout") {
		alert("Hiba: hálózati probléma");
	    } else {
		alert('Hiba: szerver oldali probléma');
	    }
	    console.log(msg);
	    console.log(t);
	    console.log(m);
	    button.removeAttr('disabled');
	});
	
	}else{
	    alert('Állítsd be a szervert!');
	    button.removeAttr('disabled');
	}
	
	
   });
   $('#erdeklodo').on("change", function(){
      if($(this).val() == "dev"){
	  $('#appname').removeClass('not-visible');
      }else{
	  $('#appname').addClass('not-visible');
      }
   });
   
   
   
   $('#smallsearch-form').submit(function(event){
       event.preventDefault();
       var data = localStorage.getItem("lastresult");
       var name = $(this).find('input[type=text]').val();
       if(!isEmpty(data)){
	   var str = ('<table><tr><th>Top</th><th>Név</th><th>Pont</th></tr>');
	
		$.each(JSON.parse(data), function(key, value){
		    console.log(value);
		    if(!value.name.search(new RegExp(name, "i")) || value.name.toLowerCase().indexOf(name) >= 0){
		
			str += ('<tr><td>'+(key+1)+'.</td><td>'+value.name+'</td><td>'+value.points+'</td></tr>');
		    }
		});
		$('#search-result').html(str+'</table>');
       }else{
	   alert("Először keresned kell, hogy tovább tudj szűrni.");
       }
   });
   
   
   
   
   
   $('#questions-form').submit(function(event){
       event.preventDefault();
       var button = $(this).find('button[type=submit]');
       button.attr('disabled', 'disabled');
       if(!isEmpty(localStorage.getItem("client_name")) && 
	       !isEmpty(localStorage.getItem("ip"))){
	   
       var $inputs = $(this).find(':input');
	$.ajax({
	    type: "POST",
	    url: 'http://'+localStorage.getItem("ip")+"/server/poll.php",
	    data: $inputs,
	    timeout: 5000,
	})
	.done(function( msg ) {
	    var msg = JSON.parse(msg);
	    if(msg.result == 'true'){
		document.querySelector('#questions-form').reset();
		alert(msg.msg);
	    }else{
		alert(msg.msg);
	    }
	    button.removeAttr('disabled');
	})
	.fail(function(msg, t, m){
	    if(t==="timeout") {
		alert("Hiba: hálózati probléma");
	    } else {
		alert('Hiba: szerver oldali probléma');
	    }
	    console.log(msg);
	    console.log(t);
	    console.log(m);
	    button.find('button[type=submit]').removeAttr('disabled');
	});
	
	}else{
	    alert('Állítsd be a szervert!');
	    button.removeAttr('disabled');
	}
   });
   
   
   $('#datepicker_t').on("change", function(){
      if($(this).val() == "all"){
	  $('#datepicker').addClass('not-visible');
      }else{
	  $('#datepicker').removeClass('not-visible');
      }
   });
   
   
   
   
   
   $('#result-form').submit(function(event){
       event.preventDefault();
       if(!isEmpty(localStorage.getItem("client_name")) && 
	       !isEmpty(localStorage.getItem("ip"))){
       var $inputs = $(this).find(':input');
       var values = {};
	$inputs.each(function() {
	    values[this.name] = $(this).val();
	});
	var concat = '?type='+values.type;
	if(values.datech == "all"){
	    concat += '&all=true';
	}else{
	    concat += '&date='+values.date;
	}
       $.ajax({
	    type: "GET",
	    url: 'http://'+localStorage.getItem("ip")+"/server/api.php"+concat,
	    timeout: 5000,
	})
	.done(function( msg ) {
	    var msg = JSON.parse(msg);
	    if(msg.result == true){
		var str = ('<table><tr><th>Top</th><th>Név</th><th>Pont</th></tr>');
		localStorage.setItem("lastresult", JSON.stringify(msg.msg));
		$.each(msg.msg, function(key, value){
		    str += ('<tr><td>'+(key+1)+'.</td><td>'+value.name+'</td><td>'+value.points+'</td></tr>');
		});
		$('#search-result').html(str+'</table>');
	    }else{
		alert(msg.msg);
	    }
	})
	.fail(function(msg, t, m){
	    if(t==="timeout") {
		alert("Hiba: hálózati probléma");
	    } else {
		alert('Hiba: szerver oldali probléma');
	    }
	    console.log(msg);
	    console.log(t);
	    console.log(m);
	});
	
	}else{
	    alert('Állítsd be a szervert!');
	}
   });
});

function isEmpty(variable){
    if(typeof variable == "undefined" ||variable == null|| variable == '' || variable == false || variable.length == 0){
	return true;
    }
    return false;
}

function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
var md5blks = [], i; /* Andy King said do it this way. */
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}

