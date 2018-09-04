const assert = require("assert");
const Player = require("../player.js");
const Cards = require("../card.js");
const Game = require("../game.js");

let player1;
let player2;

let card1;
let card2;
let card3;
let card4;
let card5;
let card6;

beforeEach(function (){
  card1 = new Card("Superman", 6, 9, 7);
  card2 = new Card("Scarlet Witch", 7, 10, 5);
  card3 = new Card("Black Widow", 8, 6, 9);
  card4 = new Card("The Flash", 7, 4, 10);
  card5 = new Card("Wonder Woman", 8, 7, 5);
  card6 = new Card("Batman", 10, 5, 6);

  player1 = new Player("Germán");
  player2 = new Player("Jesse");
});


describe("Game", function(){

  it("should compare card values", function(){
    
  })
})
