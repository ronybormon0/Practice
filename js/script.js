// ///////// constructor function

// function biskitOpadan(color) {
//   this.width = 12;
//   this.height = 12;
//   this.color = color;
//   this.shape = "circle";
// }

// var bis1 = new biskitOpadan("red");
// var bis2 = new biskitOpadan("green");

// //////////////exampel

// function button(color, Size) {
//   this.width = 12;
//   this.height = 12;
//   this.redius =20;
//   this.color = color;
//   this.Size = Size;
// }

// var buttonstyle1 = new button("red", "20");
// var buttonstyle2 = new button("green", "30");
// var buttonstyle3 = new button("black","40");

// //////////// frist class function

// function abcd(){

// }

// var abcd = function (){

// }

////////// New keyword is blnk object

///////
// (function () {})();

// ///iife
// var ans = (function () {
//     var a = 12;
//     return{
//         getter:function(){
//             console.log(a);
//         },
//         setter: function(val){
//             a = val
//         }
//     }
// })()








var human ={
    canfly: false,
    cantalk: true,
    canWalk: true,
    haveEmotion: true

}


var sheryanStudent = {
    canMakeWebsite: true,
    canMakeApp: true,
    canMakeGame: true,
    canMakeMovie: true
}


sheryanStudent.__proto__ = human;