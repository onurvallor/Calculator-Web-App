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
