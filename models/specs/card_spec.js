const assert = require("assert");
const Card = require("../card.js");

let card1;
let card2;
let card3;
let card4;
let card5;
let card6;

beforeEach(function () {
  card1 = new Card("Superman", 6, 9, 7);
  card2 = new Card("Scarlet Witch", 7, 10, 5);
  card3 = new Card("Black Widow", 8, 6, 9);
  card4 = new Card("The Flash", 7, 4, 10);
  card5 = new Card("Wonder Woman", 8, 7, 5);
  card6 = new Card("Batman", 10, 5, 6);
});

describe("Card", function() {
  it("should have a name", function() {
    const actual = card1.name;
    assert.strictEqual(actual, "Superman")
  });

  it("should have an intelligence", function() {
    const actual = card2.intelligence;
    assert.strictEqual(actual, 7);
  });

  it("should have an strength", function() {
    const actual = card3.strength;
    assert.strictEqual(actual, 6);
  });

  it("should have an agility", function() {
    const actual = card4.agility;
    assert.strictEqual(actual, 10);
  });
});
