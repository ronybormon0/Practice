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



//crtl +shift +L




// var human ={
//     canfly: false,
//     cantalk: true,
//     canWalk: true,
//     haveEmotion: true

// }


// var sheryanStudent = {
//     canMakeWebsite: true,
//     canMakeApp: true,
//     canMakeGame: true,
//     canMakeMovie: true
// }


// sheryanStudent.__proto__ = human;

//////call


// function abcd(){
//     console.log(this.age);
// }
// var ok ={age:20}
// abcd.call(ok);
 

///////bind

// function abcd(){
//     console.log(this.age);
// }
// var ok ={age:20}
// var ronyfun = abcd.bind(ok);

// ronyfun();



// function abcd  (val){
//     return Math.random()*val;
// }

// var ans1 = abcd(2)
// var ans2 = abcd(2)


// function abcd(a,b){
//     return a*b;
// }

// var ans1 = abcd(1,2)
// var ans2 = abcd(1,2)