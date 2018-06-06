/*
function myMove() {
  var elem = document.getElementById("large");
//  var pos = 0;
  function moveDown() {
    xAxis++;
    yAxis++;
  //  elem.style.top = pos + 'px';
//    elem.style.left = pos + 'px';

    if (pos === 350) {
    pos = 0;
    }
}
    setInterval(moveDown, 10);
//    setInterval(draw, 10);
      document.getElementById("test").innerHTML = xAxis;
} */


/*
function myMove() {
  var elem = document.getElementById("large");
  var pos = 100;
  function drawQ() {
      pos++;
      elem.style.bottom = pos + 'px';
      elem.style.right = pos + 'px';
  }
  setInterval(drawQ, .01);
} */

var xAxis = 0;
var yAxis = 0;

function draw() {
  var canvas = document.getElementById('canvas');
 var cc = canvas.getContext('2d');
 var canvasWidth = canvas.width;
 var canvasHeight = canvas.height;
 //var requestAnimationFrame = window.requestAnimationFrame ||
    //                        window.mozRequestAnimationFrame ||
    //                        window.webkitRequestAnimationFrame ||
      //                      window.msRequestAnimationFrame;

   cc.beginPath();
   //E

   cc.moveTo(60 + xAxis, 20 + yAxis); //
   cc.lineTo(20 + xAxis, 20 + yAxis);
   cc.moveTo(20 + xAxis, 20 + yAxis);
   cc.lineTo(20 + xAxis, 80 + yAxis); //
   cc.moveTo(20 + xAxis, 80 + yAxis);
   cc.lineTo(60 + xAxis, 80 + yAxis); //
   cc.moveTo(20 + xAxis, 45 + yAxis);
   cc.lineTo(55 + xAxis, 45 + yAxis); //
   //D
   cc.moveTo(75 + xAxis, 20 + yAxis);
   cc.lineTo(75 + xAxis, 80 + yAxis);
   cc.moveTo(75 + xAxis, 20 + yAxis);
   cc.lineTo(85 + xAxis, 20 + yAxis);
   cc.moveTo(75 + xAxis, 80 + yAxis);
   cc.lineTo(85 + xAxis, 80 + yAxis);
   cc.moveTo(85 + xAxis, 20 + yAxis);
   cc.arc(85 + xAxis, 50 + yAxis, 30, Math.PI * 1.5, Math.PI * 0.5, false);
//D
   cc.moveTo(130 + xAxis, 20 + yAxis);
   cc.lineTo(130 + xAxis, 80 + yAxis);
   cc.moveTo(130 + xAxis, 20 + yAxis);
   cc.lineTo(140 + xAxis, 20 + yAxis);
   cc.moveTo(130 + xAxis, 80 + yAxis);
   cc.lineTo(140 + xAxis, 80 + yAxis);
   cc.moveTo(140 + xAxis, 20 + yAxis);
   cc.arc(140 + xAxis, 50 + yAxis, 30, Math.PI * 1.5, Math.PI * 0.5, false);
//I
   cc.moveTo(185 + xAxis, 20 + yAxis);
   cc.lineTo(235 + xAxis, 20 + yAxis);
   cc.moveTo(210 + xAxis, 20 + yAxis);
   cc.lineTo(210 + xAxis, 80 + yAxis);
   cc.moveTo(185 + xAxis, 80 + yAxis);
   cc.lineTo(235 + xAxis, 80 + yAxis);
//E
   cc.moveTo(290 + xAxis, 20 + yAxis);
   cc.lineTo(250 + xAxis, 20 + yAxis);
   cc.moveTo(250 + xAxis, 20 + yAxis);
   cc.lineTo(250 + xAxis, 80 + yAxis);
   cc.moveTo(250 + xAxis, 80 + yAxis);
   cc.lineTo(290 + xAxis, 80 + yAxis);
   cc.moveTo(250 + xAxis, 45 + yAxis);
   cc.lineTo(285 + xAxis, 45 + yAxis);
//Harris
  //H
  cc.moveTo(330 + xAxis, 18 + yAxis);
  cc.lineTo(330 + xAxis, 82 + yAxis);
  cc.moveTo(330 + xAxis, 45 + yAxis);
  cc.lineTo(370 + xAxis, 45 + yAxis);
  cc.moveTo(370 + xAxis, 18 + yAxis);
  cc.lineTo(370 + xAxis, 82 + yAxis);
// A
  cc.moveTo(385 + xAxis, 82 + yAxis);
  cc.lineTo(405 + xAxis, 18 + yAxis);
  cc.moveTo(405 + xAxis, 18 + yAxis);
  cc.lineTo(425 + xAxis, 82 + yAxis);
  cc.moveTo(395 + xAxis, 50 + yAxis);
  cc.lineTo(415 + xAxis, 50 + yAxis);
// R
  cc.moveTo(440 + xAxis, 82 + yAxis);
  cc.lineTo(440 + xAxis, 18 + yAxis);
  cc.bezierCurveTo(485 + xAxis, 18 + yAxis, 485 + xAxis, 55 + yAxis, 440 + xAxis, 55 + yAxis);
  cc.moveTo(458 + xAxis, 52 + yAxis);
  cc.lineTo(475 + xAxis, 82 + yAxis);
// R
cc.moveTo(490 + xAxis, 82 + yAxis);
cc.lineTo(490 + xAxis, 18 + yAxis);
cc.bezierCurveTo(535 + xAxis, 18 + yAxis, 535 + xAxis, 55 + yAxis, 490 + xAxis, 55 + yAxis);
cc.moveTo(508 + xAxis, 52 + yAxis);
cc.lineTo(525 + xAxis, 82 + yAxis);
//  cc.moveTo(495, 80);
//  cc.lineTo(495, 20);
//  cc.moveTo(495, 23);
//  cc.arc(506, 38, 19, Math.PI * 1.3, Math.PI * 0.7, false);
//  cc.moveTo(515, 55);
//  cc.lineTo(525, 80);
//I
  cc.moveTo(540 + xAxis, 20 + yAxis);
  cc.lineTo(590 + xAxis, 20 + yAxis);
  cc.moveTo(565 + xAxis, 20 + yAxis);
  cc.lineTo(565 + xAxis, 80 + yAxis);
  cc.moveTo(540 + xAxis, 80 + yAxis);
  cc.lineTo(590 + xAxis, 80 + yAxis);
//S
cc.moveTo(650 + xAxis, 25 + yAxis);
cc.bezierCurveTo(595 + xAxis, 0 + yAxis, 590 + xAxis, 48 + yAxis, 630 + xAxis, 50 + yAxis);
cc.moveTo(600 + xAxis, 75 + yAxis);
cc.bezierCurveTo(660 + xAxis, 100 + yAxis, 665 + xAxis, 50 + yAxis, 630 + xAxis, 50 + yAxis);
//underlinw
cc.moveTo(10 + xAxis, 90 + yAxis);
cc.lineTo(660 + xAxis, 90 + yAxis);

cc.stroke();
cc.closePath();

xCut = 10;
yCut = 10;
  if (xAxis > 20 && yAxis > 20) {
    clearInterval(draw);
    clearInterval(startDraw);
    xAxis = 0;
    yAxis = 0;
  } else {
 //E
  cc.clearRect(19 + (xAxis - xCut), 19 + (yAxis - yCut), 41, 1);
  cc.clearRect(19 + (xAxis - xCut), 19 + (yAxis - yCut), 1, 61);
  cc.clearRect(21 + (xAxis - xCut), 79 + (yAxis - yCut), 49, 1);
  cc.clearRect(21 + (xAxis - xCut), 44 + (yAxis - yCut), 34, 1);
 //D   + 12
  cc.clearRect(74 + (xAxis - xCut), 19 + (yAxis - yCut), 1, 65);
  cc.clearRect(74 + (xAxis - xCut), 19 + (yAxis - yCut), 10, 1);
  cc.clearRect(74 + (xAxis - xCut), 79 + (yAxis - yCut), 10, 1);
//  cc.clearRect()
}

xAxis++;
yAxis++;
document.getElementById("test").innerHTML = xAxis;
}
//var start = setInterval(moveDown, 1000);
//var startDraw = setInterval(draw, 100);

setInterval(draw, 100);
//setInterval(moveDown, 10);


/*
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, ); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // 4 right + 2
    ctx.moveTo(129, 75);
    ctx.arc(79, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(114, 75);
    ctx.arc(79, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(69, 65);
    ctx.arc(64, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(99, 65);
    ctx.arc(94, 65, 5, 0, Math.PI * 2, true);  // Right eye

    // 8 right 8
    ctx.moveTo(133, 75)
    ctx.arc(83, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(118, 75);
    ctx.arc(83, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(73, 65);
    ctx.arc(68, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(103, 65);
    ctx.arc(98, 65, 5, 0, Math.PI * 2, true);  // Right eye
// 16 right
  ctx.moveTo(141, 75)
  ctx.arc(91, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(126, 75);
  ctx.arc(91, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(81, 65);
  ctx.arc(76, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(111, 65);
   ctx.arc(106, 65, 5, 0, Math.PI * 2, true);  // Right eye
// 32 right
   ctx.moveTo(157, 75)
   ctx.arc(107, 75, 50, 0, Math.PI * 2, true); // Outer circle
   ctx.moveTo(142, 75);
   ctx.arc(107, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
   ctx.moveTo(97, 65);
   ctx.arc(92, 65, 5, 0, Math.PI * 2, true);  // Left eye
   ctx.moveTo(127, 65);
   ctx.arc(122, 65, 5, 0, Math.PI * 2, true);  // Right eye

   // 64 right
  ctx.moveTo(189, 75)
  ctx.arc(139, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(174, 75);
  ctx.arc(139, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(129, 65);
  ctx.arc(124, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(159, 65);
  ctx.arc(154, 65, 5, 0, Math.PI * 2, true);  // Right eye
  // 128 right
  ctx.moveTo(253, 75)
  ctx.arc(203, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(238, 75);
  ctx.arc(203, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(193, 65);
  ctx.arc(188, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(223, 65);
  ctx.arc(218, 65, 5, 0, Math.PI * 2, true);  // Right eye
// 256 right
  ctx.moveTo(381, 75)
  ctx.arc(331, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(366, 75);
  ctx.arc(331, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(321, 65);
  ctx.arc(316, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(351, 65);
  ctx.arc(346, 65, 5, 0, Math.PI * 2, true);  // Right eye

// 512 right
  ctx.moveTo(637, 75)
  ctx.arc(587, 75, 50, 0, Math.PI * 2, true); // Outer circle
  ctx.moveTo(622, 75);
  ctx.arc(587, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(577, 65);
  ctx.arc(572, 65, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(607, 65);
  ctx.arc(602, 65, 5, 0, Math.PI * 2, true);  // Right eye
*/
