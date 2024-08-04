
document.getElementById("add").addEventListener("click",function(){
 const caseInput = document.getElementById("unit");
 const caseCount = parseFloat(caseInput.value);
 const caseNewCount = caseCount + 1;
 caseInput.value = caseNewCount;
 const price = caseNewCount * 100;
 document.getElementById("price").innerText = 'Price $' + price;
 
});


document.getElementById("sub").addEventListener("click",function(){
  const caseInput = document.getElementById("unit");
  const caseCount = parseFloat(caseInput.value);

  const caseNewCount = caseCount - 1;
  caseInput.value = caseNewCount;
  const price = caseNewCount * 100 ;
  document.getElementById("price").innerText = 'Price $' + price;
});