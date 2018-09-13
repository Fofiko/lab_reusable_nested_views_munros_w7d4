const MunroDetailView = function (container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};

MunroDetailView.prototype.render = function () {
  const munroContainer = document.createElement('div');

  const name = this.createMunroHeading();
  munroContainer.appendChild(name);

  const detailsList = this.createMunroDetailsList();
  munroContainer.appendChild(detailsList);

this.munrosContainer.appendChild(munroContainer);
};

MunroDetailView.prototype.createMunroHeading = function () {
  const name = document.createElement('h1');
  name.textContent = this.munro.name;
  return name;
};

MunroDetailView.prototype.createMunroDetailsList = function () {
  const detailsList = document.createElement('ul');
  this.populateList(detailsList);
  return detailsList;
};

MunroDetailView.prototype.populateList = function (detailsList) {
    const height = document.createElement('li');
    height.textContent = this.munro.height;
    detailsList.appendChild(height);
    const meaning = document.createElement('li');
    meaning.textContent = this.munro.meaning;
    detailsList.appendChild(meaning);
};



module.exports = MunroDetailView;
