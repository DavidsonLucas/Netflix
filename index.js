let botao0 = document.getElementsByClassName('bt-pergunta')
let dif = document.getElementById('pergunta')
let imagem = document.getElementById('img-fechar')


    
        
        for(let i=0;i<botao0.length;i++){
            botao0[i].addEventListener("click",abacate)
            
            
        }

        function abacate(){
            
            if(dif.style.display == 'none' ){
                dif.style.display = 'block'
                imagem.id = 'img-pergnta-girar'
            }else{
                dif.style.display ='none'
                imagem.id = 'img-fechar'
            }

            
        };

let botao1 = document.getElementsByClassName('bt-custa')
let gift1 = document.getElementById('pa-custar')
let imagem1 = document.getElementById('img-fechar1')

    
                  for(let i=0;i<botao1.length;i++){
                        botao1[i].addEventListener("click",melancia)
                    }
            
                  function melancia(){
                        
                        if(gift1.style.display == 'none'){
                            gift1.style.display = 'block'
                            imagem1.id = 'img-pergnta-girar'
                        }else{
                            gift1.style.display ='none'
                            imagem1.id = 'img-fechar'
                        }
                    };

let botao2 = document.getElementsByClassName('onde-posso')
let lumv2 = document.getElementById('pa-onde')
let imagem2 = document.getElementById('img-fechar2')
                                
                    for(let i=0;i<botao2.length;i++){
                    botao2[i].addEventListener("click",melão)
                   }
                                
                    function melão(){
                    if(lumv2.style.display == 'none'){
                       lumv2.style.display = 'block'
                       imagem2.id = 'img-pergnta-girar'
                    }else{
                       lumv2.style.display ='none'
                       imagem2.id = 'img-fechar'
                    }
                 };   
let botao3 = document.getElementsByClassName('bt-cancelar')
let gift3 = document.getElementById('pa-cancelar')
let imagem3 = document.getElementById('img-fechar3')
                                                         
                         for(let i=0;i<botao3.length;i++){
                        botao3[i].addEventListener("click",xuxu)

                       }
         
                     function xuxu(){
                    if(gift3.style.display == 'none'){
                       gift3.style.display = 'block'
                       imagem3.id = 'img-pergnta-girar'

                     }else{
                       gift3.style.display ='none'
                       imagem3.id = 'img-fechar'

                     }
                      } 
       
let botao4 = document.getElementsByClassName('bt-ass-oq')
let gift4 = document.getElementById('pa-ass-oq')
let imagem4 = document.getElementById('img-fechar4')
                                                                                  
              for(let i=0;i<botao4.length;i++){
              botao4[i].addEventListener("click",morango)
              }
                                 
             function morango(){
             if(gift4.style.display == 'none'){
             gift4.style.display = 'block'
             imagem4.id = 'img-pergnta-girar'

             }else{
             gift4.style.display ='none'
             imagem4.id = 'img-fechar'

             }
              }                                    

let botao5 = document.getElementsByClassName('bt-crianças')
let gift5= document.getElementById('pa-criança')
let imagem5 = document.getElementById('img-fechar5')

                                                                                                
                      for(let i=0;i<botao5.length;i++){
                      botao5[i].addEventListener("click",banana)
                     }
                                               
                      function banana(){
                      if(gift5.style.display == 'none'){
                         gift5.style.display = 'block'
                         imagem5.id = 'img-pergnta-girar'

                      }else{
                         gift5.style.display ='none'
                         imagem5.id = 'img-fechar'

                         }
                        }                   


                           