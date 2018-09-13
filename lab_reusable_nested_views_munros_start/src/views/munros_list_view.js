const PubSub = require("../helpers/pub_sub.js")
const MunroDetailView = require("./munro_detail_view.js")

const MunrosListView = function (container) {
  this.container = container;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe("Munros:munros-data-ready", (evt) => {
// console.log("got the data in list view", this.munros);
    // munros = evt.detail
    this.munros = evt.detail;
    this.render();
    // munros.forEach
  });
};

MunrosListView.prototype.render = function (tag, element_name) {
  // console.log(element_name);
  this.munros.forEach((munro) => {
    const munroDetailView = new MunroDetailView(this.container, munro);
    munroDetailView.render();
  });
};


module.exports = MunrosListView;
