function llamadaApi(ciudad){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+ ciudad + "?unitGroup=metric&include=days&key=XDDQSTKV57QNT95MTQZQP3EPK&contentType=json")
    .then(response => response.json())
    .then(data => console.log(data));

}


llamadaApi("palermo");