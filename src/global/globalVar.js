export default {
  ws: {},
  ws_api: 'ws://127.0.0.1:8080',
  imMessage: {
    accounts: [1125334796],
    type: 1,
    code: 200,
    body: '',
    timestamp: new Date().getTime(),
    account: 1,
    password: 'waitgd250'
  },
  setWs: function (newWs) {
    this.ws = newWs;
  },
  setWs_api: function () {
    this.ws_api = 'ws://127.0.0.1:8080'
  }
}