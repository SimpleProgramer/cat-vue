var websock = null;
var global_callback = null;
var serverPort = '8080';	//webSocket连接端口
function getWebIP(){
  var curIP = window.location.hostname;
  return curIP;
}
function initWebSocket(){ //初始化weosocket
  //ws地址
  var cacheSock = null; //sessionStorage.socket
  if (cacheSock != '' && cacheSock != 'undefined' && cacheSock != null) {
    //console.log(cacheSock.socket)
    websock =   cacheSock.socket
  } else {
    //console.log("新建链接")
    var wsuri = "ws://" +getWebIP()+ ":" + serverPort + "/websocket";
    websock = new WebSocket(wsuri);

  }
  websock.onmessage = function(e){
    if (websock.readyState != 1) {
      initWebSocket()
    }
    //console.log("返回数据:" + e.data);
    if (e.data != null) {
      if (JSON.parse(e.data).type == 666) {
        //console.log("心跳:pong：{}", JSON.stringify(e.data));
      } else {
        websocketonmessage(e);
      }
    }
  }
  websock.onclose = function(e){
    websocketclose(e);
  }
  websock.onopen = function () {
    //console.log("连接成功:" + sessionStorage.getItem("nowLogin"));
    websocketOpen();
  }

  //连接发生错误的回调方法
  websock.onerror = function () {
    //console.log("WebSocket连接发生错误");
  }
}

// 实际调用的方法
function sendSock(agentData,callback){
  global_callback = callback;
  if (websock.readyState === websock.OPEN) {
    //若是ws开启状态
    websocketsend(agentData)
  }else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData,callback);
    }, 1000);
  }else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData,callback);
    }, 1000);
  }
}

//数据接收
function websocketonmessage(e){
  global_callback(JSON.parse(e.data));
}

//数据发送
function websocketsend(agentData){
  websock.send(JSON.stringify(agentData));
}

//关闭
function websocketclose(e){
  //console.log("connection closed (" + e.code + ")");
  sessionStorage.removeItem("nowSocket")
}

function websocketOpen(e){
  var loginUser = sessionStorage.getItem("nowLogin")
  var json = JSON.parse(loginUser);
  if (json != null) {
    var refresh = {
      "accounts":[json.accounts[0]],
      "type": 999
    };
    //console.log(JSON.stringify(refresh))
    setInterval(function () {
      refresh.type = 666
      websocketsend(refresh);
    }, 30 * 1000);
  }


}
function saveJson(jsonE) {
  var jsonEse = JSON.stringify(jsonE);
  sessionStorage.socket = jsonEse;
  //  sessionStorage.removeItem('jsonEsesession');
}
function setCallback(callback) {
  global_callback = callback
}

initWebSocket();

export{sendSock}
export{setCallback}
