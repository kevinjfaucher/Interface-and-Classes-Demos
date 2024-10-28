interface Character {
    name: string;
    health: number;
    attack(): string;
    takeDamage(amount: number): void;
    specialMove(): string;
} 

class BaseCharacter implements Character {
    name: string;
    health: number;

    constructor(name: string, health: number) {
        this.name = name;
        this.health = health;
    }

    attack(): string {
        return `${this.name} attacks with a basic weapon!`;
    }

    takeDamage(amount: number): void {
        this.health -= amount;
        console.log(`${this.name} takes ${amount} damage! Health left: ${this.health}`);
    }

    specialMove(): string {
        return `${this.name} uses a special move!`;
    }
}


class Warrior extends BaseCharacter {
    constructor(name: string, health: number){
        super(name, health);
    }

    attack(): string {
        return `${this.name} swings a mighty sword!`;
    }

    specialMove(): string {
        return `${this.name} charges forward with a shield bash!!!`;
    }
}


class Wizard extends BaseCharacter {
    constructor(name: string, health: number) {
        super(name, health);
    }

    attack(): string {
        return `${this.name} casts a fireball spell`;
    }

    specialMove(): string {
        return `${this.name} summons a mystical barrier of protection!`;
    }
}

const aragorn = new Warrior("Aragorn", 120);
const guts = new Warrior("Guts", 100)
const gandalf = new Wizard("Gandalf", 100);

const characters: Character[] = [aragorn, gandalf, guts];

characters.forEach(character => {
    console.log(character.attack());
    console.log(character.specialMove());
    character.takeDamage(25);
});



