function deretAngka(n){
    let hasil = ''
    for(i=1;i<=n;i++){
      if(i%15 ===0){hasil +='FizzBuzz'}
      else if(i%5 ===0){hasil +='Buzz'}
      else if(i%3 ===0){hasil +='Fizz'}
      else{hasil += i+ ''}
      hasil +='\n';
    }
    return hasil
  }
console.log(deretAngka(15))