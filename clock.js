
//Setup hands
var secondHand = document.getElementById("second");
var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var face = document.getElementById("face");


var crazy =0;

// console.log(123);

function setSeconds(s) {
   var secondDeg =s*6;
   secondHand.style.transform = "rotate("+secondDeg+"deg)";
}

function setMinute(m,s) {
   var  minuteDeg = m*6+s/10;
   minuteHand.style.transform = "rotate("+minuteDeg+"deg)";
}

function setHour(h,m) {
   var hourDeg = h*30+m/2;
   hourHand.style.transform = "rotate("+hourDeg+"deg)";
}

function updateHands() {
   var date = new Date();
   var s = date.getSeconds();
   var m = date.getMinutes();
   var h = date.getHours();

   // -- crazy will make the hands move fast!
   // crazy ++;
   // s = crazy;
   // m = s/10;
   // h = m/10;

   setSeconds(s);
   setMinute(m,s);
   setHour(h,m);
}

setInterval(updateHands, 1000);
