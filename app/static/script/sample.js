var map
var url

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

function createHash() {
  var num = "http://localhost?url="+Math.floor(Math.random() * Math.floor(10000));
  return num
}

function ingressControl(buttonDiv, map) {
  var buttonUI = document.createElement("div");

  buttonUI.setAttribute("id", "share");

  buttonUI.style.backgroundColor = "white";
  buttonUI.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px";
  buttonUI.style.cursor = "pointer";
  buttonUI.style.padding = "1px 6px";

  buttonUI.style.color = "black";
  buttonUI.style.fontSize = "30px";
  buttonUI.style.textAlign = "center";

  buttonUI.title = "Share";
  buttonUI.innerHTML = "Share";

  buttonDiv.style.padding = "5px";
  buttonDiv.appendChild(buttonUI);

  google.maps.event.addDomListener(buttonUI, "click", function () {

    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    document.getElementById("url").textContent = url;

    modal.classList.remove('hidden');
    mask.classList.remove('hidden');

    close.addEventListener('click', function () {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
    mask.addEventListener('click', function () {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });


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

function copyUrl() {
  const element = document.createElement('input');
  element.value = url;
  document.body.appendChild(element);
  element.select();
  document.execCommand('copy');
  document.body.removeChild(element);
}

window.onload = function () {
  initMap()
  url = createHash()
}


