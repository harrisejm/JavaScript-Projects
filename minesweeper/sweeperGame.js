var test = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
var tempArr = test.slice();
let arr1 = [];
let mineNumb = 36;
let selection;
function fillArr(){
   if (mineNumb > 26) {
     let selection = test[Math.floor(Math.random()*(mineNumb))];
     arr1.push(selection);
     let remove = test.indexOf(selection);
     test.splice(remove, 1);
     mineNumb--;
     fillArr();
   } else {
     tempArr = test.slice();
   }
}
fillArr();
document.getElementById("test").innerHTML = arr1;
