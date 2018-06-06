
function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  function draw() {
  var startPX = 0;
  var endPX = 350;
  var startPY = 0;
  var endPY = 350;

      pos++;
      elem.style.bottom = pos + 'px';
      elem.style.right = pos + 'px';

      if (pos === 350) {
      pos = 0;
      }


  //    clearInterval(id);
//    } else {
//      pos++;
//      elem.style.top = pos + 'px';
  //    elem.style.left = pos + 'px';
  //  }

        document.getElementById("test").innerHTML = pos;
  }
  setInterval(draw, 30);
}
