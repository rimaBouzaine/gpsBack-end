let map ;
function intiMap(){
    map = new google.map.Map(document.getElementById("map"),{
        center : { lat: -34.397, lng: 150.644},
        zoom: 8,
    
    });
}