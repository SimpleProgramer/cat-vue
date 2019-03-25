export default {
  ws: {},
  rest_api: 'http://192.168.0.101:8081',
  ws_api: 'ws://192.168.0.101:8080',
  imMessage: {
    accounts: [1125334796],
    type: 1,
    code: 200,
    body: 'online',
    timestamp: new Date().getTime(),
    account: 1,
    password: 'waitgd250'
  },
  setWs: function (newWs) {
    this.ws = newWs;
  },
  setWs_api: function () {
    this.ws_api = 'ws://192.168.0.101:8080'
  }
}
