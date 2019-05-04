function insert(num){
  document.form.equation.value = document.form.equation.value + num;
}
function reset(){
  document.form.equation.value = "";
}
function equal(){
  var exp = document.form.equation.value;
  if (exp){
      document.form.equation.value = eval(exp);
  }else{
    alert("enter an equation");
  }
}


// document.addEventListener("keypress", function(){
//     console.log(event);
// });




document.addEventListener("keypress", useKeyboard);

var abc = ["a", "b", "c"];


// function useKeyboard(event){
//
//   for (i = 0; i < abc.length; i++){
//     var key = event.key;
//     document.form.equation.value = document.form.equation.value + num;
//     var keynum = insert(num);
//     if(key === 'a'){
//       alert("this is restricted.");
//     }else{
//       document.getElementById("equation").value = document.form.equation.value;
//     }
//
//   }
//
// }

function useKeyboard(event)
      {
//          var charCode = (event.which) ? event.which : event.keyCode
//           if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 106 || charCode > 111)){
//             return false;
// }
//
//       if (charCode < 106 || charCode > 111){
//         document.getElementById("equation").value = event.key;
//                return true;
//       }
        var charCode = (event.which) ? event.which : event.keyCode
        if (charCode > 31 && (charCode < 48 && charCode > 57) && (charCode < 106 && charCode > 111)){
          event.preventDefault();
          alert("That key is not allowed.");
        }else{
          var prevKey = document.form.equation.value + event.key;
          document.getElementById("equation").value = prevKey;
        }

      }

// TODO: make it so letters are restricted and connot be typed.
