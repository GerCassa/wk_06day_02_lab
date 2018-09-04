const Player = function(name) {
  this.name = name;
  this.cards = [];
  this.category = null;
};

Player.prototype.addCard = function (card) {
  this.cards.push(card)
};

Player.prototype.topCard = function () {
  return this.cards.pop()
};

Player.prototype.chooseCategory = function (category) {
  this.category = category;
};


module.exports = Player;
