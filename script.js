function llamadaApi(ciudad){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ ciudad + "?unitGroup=metric&include=days&key=XDDQSTKV57QNT95MTQZQP3EPK&contentType=json")
    .then(response => response.json())
    .then(data =>  mostrarContenido(data,ciudad) );
    

}




let input = document.querySelector(".city")
let boton = document.querySelector(".search")
let container = document.querySelector(".container-weather")

boton.addEventListener("click",(e)=> {
    e.preventDefault();
    container.innerHTML =  ` 
   `;


    setTimeout(() => {
        llamadaApi(input.value);
      }, 5000);


})

function mostrarContenido(data,ciudad){
    let dias = data.days;
    let title = document.querySelector(".title-city")
    container.innerHTML = "";
    title.innerHTML =  `${ciudad}`;
    console.log(data)
    

    
    dias.forEach(x => {
        container.innerHTML +=  `

          
         <div class="card" id=${x.datetime} >
                <p class="text-center"><strong>${x.datetime}</strong></p>
                <div class="card-img">
                  
                     ${
                        x.icon =="rain"? `<i class="fa-solid fa-cloud-rain"></i>` :
                        x.icon =="partly-cloudy-day"? `<i class="fa-solid fa-cloud"></i>` :
                        x.icon == "clear-day" ? ` <i class="fa-solid fa-sun"></i>` :
                        x.icon == "wind"?`<i class="fa-solid fa-wind"></i>`:
                        x.icon == "cloudy"?`<i class="fa-solid fa-cloud"></i>`:
                        `<i class="fa-solid fa-snowflake"></i>`



                    }




                    
                </div>
                <div class="card-body text-center">
                    <p>${x.conditions}</p>
                    <div class="cont-temps">
                        <h3>Min : <span>${x.tempmin}°</span></h3> 
                        <hr>
                        <h3>Max: <span>${x.tempmax}°</span></h3>

                        
                    </div>
                    <span>Precipitation: <span>${x.precip}</span></span>
                </div>

            </div>



         `
        
    });


}