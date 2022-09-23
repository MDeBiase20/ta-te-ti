const ListaCaja = document.querySelectorAll('.table .box');
let turno =true
function ganador(i, j , k){
    if (moviemientoArray[i] == moviemientoArray[j] && 
        moviemientoArray[j] == moviemientoArray[k] &&
        moviemientoArray[i] !=null) 
         return true
   return false                 
}

function numeroGanador(){
    if(ganador(0, 1, 2)){
        return 1
    }
    if(ganador(3, 4, 5)){
        return 2
    }
    if(ganador(6, 7, 8)){
        return 3
    }
    if(ganador(0, 3, 6)){
        return 4
    }
    if(ganador(1, 4, 7)){
        return 5
    }
    if(ganador(2, 5, 8)){
        return 6
    }
    if(ganador(0, 4, 8)){
        return 7
    }
    if(ganador(2, 4, 6)){
        return 8
    }
    return null
}
const moviemientoArray = new Array(9).fill(null) /*Tiene 9 posiciones y se le llena con espacios nulos*/

ListaCaja.forEach(function(caja, indice){
    //caja.textContent = indice 
    caja.addEventListener('click', function(){
            if (turno) {
               caja.classList.add('x');
            }else{
                caja.classList.add('o');
            }
            moviemientoArray[indice] = turno /*En este índice se marque con el turno del jugador que esté en ese momento */
            const mayWinner = numeroGanador()
            if (mayWinner) {                
                    const lineWinner = document.createElement('div')
                    lineWinner.classList.add('linea')
                    lineWinner.classList.add('linea-ganadora-' + mayWinner)
                    document.querySelector('.table').append(lineWinner)
            }             
            turno = !turno
    }, {once: true}) /*este parámetro lo que hace que una vez que se active el evento ya no se pueda utilizar más
                       es del addEventListener*/     
})

function restart(){
    location.reload();
}
