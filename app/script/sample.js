var map
function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.6807527,139.7670716)
  };
  map = new google.maps.Map(document.getElementById('map'), opts);
  return map;

}


window.onload = function () {
  initMap()
}