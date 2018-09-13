const PubSub = require("../helpers/pub_sub.js")

const MunrosListView = function (container) {
  this.container = container;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe("Munros:munros-data-ready", (evt) => {
    this.munros = evt.detail;

// console.log("got the data in list view", this.munros);
  })
};

module.exports = MunrosListView;
