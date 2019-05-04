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

document.addEventListener("keypress", useKeyboard);

function useKeyboard(event){
        var charCode = (event.which) ? event.which : event.keyCode
        if (charCode > 31 && (charCode < 48 && charCode > 57) && (charCode < 106 && charCode > 111)){
          event.preventDefault();
          alert("That key is not allowed.");
        }else{
          var prevKey = document.form.equation.value + event.key;
          document.getElementById("equation").value = prevKey;
        }

      }

