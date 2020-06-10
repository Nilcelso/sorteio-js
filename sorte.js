function executarSorteio() 
{
  numeroAleatorio= Math.round(Math.random()*10)
  console.log(numeroAleatorio) 
  chute = prompt("Seu numero da sorte entre 0 e 10 é?")
  
  while (chute > 10 || chute < 0){
    chute = prompt("Número invalido, tente outro número:")
  }
  
  numeroCerto= chute ==numeroAleatorio
  
  if(numeroCerto) {
     paragrafoResultado.innerHTML= "Você ganhou o sorteio"
     }
  if(!numeroCerto) {
     paragrafoResultado.innerHTML= "Tente novamente"
     }
}