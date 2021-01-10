var map

function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.6807527,139.7670716)
  };
  map = new google.maps.Map(document.getElementById('map'), opts);

  //クリックイベントを追加
  map.addListener('click', function (e) {
    getClickLatLng(e.latLng, map)
  });
  // return map;
}

function getClickLatLng(lat_lng, map) {

  //座標を表示
  document.getElementById('lat').textContent = lat_lng.lat();
  document.getElementById('lng').textContent = lat_lng.lng();

  //マーカーを設置
  var marker = new google.maps.Marker({
    position: lat_lng,
    map: map
  });

  //座標の中心をずらす
  map.panTo(lat_lng)

}

window.onload = function () {
  initMap()
}