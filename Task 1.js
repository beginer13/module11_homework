//Task1 ---------------------------------------------------------------------------------

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в
// массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится  
// отдельно. При выполнении задания необходимо учесть, что массив может содержать // не только числа, но и, например, знаки, null и так далее.

let arr =[1, 2, 345, 'jhlh', 17, 782, 185, 0, 0, 66, 799, null, null, 'asd']

function analysisArray(arr1) {
  let i = 0
  let chet = 0
  let nechet = 0
  let elem0 =0
  let elemnull =0
  let string = 0
  do { 
      if (isNaN(+ arr1[i])) { string ++}
       else if (arr1[i] == null) { elemnull ++ }
       else if (arr1[i] == 0) { elem0 ++ }    
       else if (arr1[i]%2 > 0) { nechet ++ } 
       else if (arr1[i]%2 == 0) { chet ++}
      i++
    } while (i < arr.length)       
  console.log ('Всего элементов - ' + arr1.length)
  console.log ("Нечетных - " + nechet)
  console.log ("Четных - " + chet)
  console.log ("Строк - " + string)
  console.log ("Нулей - " + elem0)
  console.log ("null - " + elemnull)
}

analysisArray(arr)
