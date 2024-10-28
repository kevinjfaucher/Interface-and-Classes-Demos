"use strict";
class BaseCharacter {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
    attack() {
        return `${this.name} attacks with a basic weapon!`;
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage! Health left: ${this.health}`);
    }
    specialMove() {
        return `${this.name} uses a special move!`;
    }
}
class Warrior extends BaseCharacter {
    constructor(name, health) {
        super(name, health);
    }
    attack() {
        return `${this.name} swings a mighty sword!`;
    }
    specialMove() {
        return `${this.name} charges forward with a shield bash!!!`;
    }
}
class Wizard extends BaseCharacter {
    constructor(name, health) {
        super(name, health);
    }
    attack() {
        return `${this.name} casts a fireball spell`;
    }
    specialMove() {
        return `${this.name} summons a mystical barrier of protection!`;
    }
}
const aragorn = new Warrior("Aragorn", 120);
const guts = new Warrior("Guts", 100);
const gandalf = new Wizard("Gandalf", 100);
const characters = [aragorn, gandalf, guts];
characters.forEach(character => {
    console.log(character.attack());
    console.log(character.specialMove());
    character.takeDamage(25);
});
