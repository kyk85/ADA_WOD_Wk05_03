function arrayProduct(x){
  var x = document.getElementById("userInput").value;
  var z = x.split(",");
  var counter = 0;
  var msg1 = document.getElementById("answer");
  var msg2 = document.getElementById("results");
  //Clear answer and results for new tries
  msg1.innerHTML = "";
  msg2.innerHTML = "";
  //console.log(z)
  var tempSum1 = 0
  var num1 = 0
  var num2 = 0
 
  tempSum1 = z[0]*z[1]
  for (i=1;i<z.length;i++){
    if (z[i]*z[(i+1)]>tempSum1){
      num1 = z[i]
      num2 = z[(i+1)]
      tempSum1=z[i]*z[(i+1)]
    }
  }
  console.log(tempSum1)
  answer.innerHTML="The largest product of two numbers in your array is between " + "(" + num1 + "," + num2 + ")"
  results.innerHTML="The product is " + tempSum1
}
  

