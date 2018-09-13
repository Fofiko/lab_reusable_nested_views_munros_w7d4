const PubSub = require("../helpers/pub_sub.js")
const RequestHelper = require("../helpers/request_helper.js")

const Munros = function () {
  this.munros = [];
};

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper("https://munroapi.herokuapp.com/api/munros");
  requestHelper.get((data) => {
    // this.handleDataReady(data);
    // console.log("data:", data);
    this.munros = data;
    PubSub.publish("Munros:munros-data-ready", this.munros);
    // console.log("got the data", this.munros);
  });

};


module.exports = Munros;
