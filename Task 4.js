Task4 ----------------------------------------------------------------------------------------

function task4 (num1,num2) {
      let i = num1;
      const intId = setInterval(()=>{if (i == num2) {clearInterval(intId)}; console.log(i); i++}, 1000);
}
   
task4 (3,8)