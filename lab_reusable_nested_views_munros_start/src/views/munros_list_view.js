const PubSub = require("../helpers/pub_sub.js")

const MunrosListView = function (container) {
  this.container = container;
}

MunrosListView.prototype.bindEvents = function () {
  PubSub.subscribe("Munros:munros-data-ready", (evt) => {
// console.log("got the data in list view", this.munros);
    this.container.innerHTML = "";
    // munros = evt.detail
    const munros = evt.detail;
    // munros.forEach
    munros.forEach((munro) => {
      console.log(munro.name);
      this.render("h1", munro.name);
      this.render("h3", munro.meaning);
      this.render("h3", munro.height);
    })

  });
};

MunrosListView.prototype.render = function (tag, element_name) {
  // console.log(element_name);
  const item = document.createElement(tag);
  item.textContent = element_name;
  this.container.appendChild(item);
};


module.exports = MunrosListView;
