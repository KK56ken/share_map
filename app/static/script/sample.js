var map

function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.6807527,139.7670716)
  };
  map = new google.maps.Map(document.getElementById('map'), opts);

  //ボタンの追加
  var ingressButtonDiv = document.createElement("div");
  var ingressButton = new ingressControl(ingressButtonDiv, map);

  ingressButtonDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(ingressButtonDiv);

  //クリックイベントを追加
  map.addListener('click', function (e) {
    getClickLatLng(e.latLng, map)
  });
}

function ingressControl(buttonDiv, map) {
  var buttonUI = document.createElement("div");

    buttonUI.style.backgroundColor = "rgb(0, 79, 74)";
    buttonUI.style.border = "1px solid #59fbea";
    buttonUI.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px";
    buttonUI.style.cursor = "pointer";
    buttonUI.style.padding = "1px 6px";

    buttonUI.style.color = "#59fbea";
    buttonUI.style.fontFamily = "Coda, Arial,sans-serif";
    buttonUI.style.fontSize = "15px";
    buttonUI.style.textAlign = "center";

    buttonUI.title = "Dive google";
    buttonUI.innerHTML = "Dive google";

    buttonDiv.style.padding = "5px";
    buttonDiv.appendChild(buttonUI);

    google.maps.event.addDomListener(buttonUI, "click", function() {
      window.open("https://www.google.com");
    });
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