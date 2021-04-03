var pronouns = ["This", "That", "Her", "His", "Their"];
var animals = ["cat", "dog", "horse", "fish", "squirrel", "bunny", "snake"]
var adjectives = ["cool", "cute", "funny", "scary", "weird"]

var randomPronoun = Math.floor(Math.random() * pronouns.length)
var randomAnimal = Math.floor(Math.random() * animals.length)
var randomAdjective = Math.floor(Math.random() * adjectives.length)

console.log(pronouns[randomPronoun] + " " + animals[randomAnimal] + " is " +
adjectives[randomAdjective])
