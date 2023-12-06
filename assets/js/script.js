const data = document.getElementById('data')
const tempo = document.getElementById('tempo')
  

const relogio = setInterval(function time() {
    let datahoje = new Date();
    let array = datahoje.toString().split(" ")
    
    let options ={
        month:"long",
        day: "numeric",
        year: "numeric"
    }

    data.textContent = datahoje.toLocaleDateString("pt-br",options)
    tempo.textContent = array[4]
 
})