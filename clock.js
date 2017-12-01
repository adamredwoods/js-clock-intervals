
//Setup hands
var secondHand = document.getElementById("second");
var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var face = document.getElementById("face");


var crazy =0;
var tick=0;
var oldsec=0;

// console.log(123);

function setTime(s,m,h) {
   //console.log(6*tick/100);
   var secondDeg =s*6 + 6*tick/100;
   secondHand.style.transform = "rotate("+secondDeg+"deg)";
   var  minuteDeg = m*6+s/10;
   minuteHand.style.transform = "rotate("+minuteDeg+"deg)";
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
   tick++;
   if (oldsec!=s) {
      oldsec=s;
      tick=0;
   }

   setTime(s,m,h);
}

updateHands();
setInterval(updateHands, 10);
