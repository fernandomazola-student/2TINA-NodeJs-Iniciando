//SEPARAR DE 1 A 100 OS NÚMEROS PARES
//DICA: USE FOR E IF
//RODAR COM NodeJS

for(i = 0; i < 101; i++){
  var resultado = (i%2);
  if(resultado == 0){
    console.log('O número ' + i + ' é par');
  }else{
    console.log('O número ' + i + ' é impar');
  }
}
