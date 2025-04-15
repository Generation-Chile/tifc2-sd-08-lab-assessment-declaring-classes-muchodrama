export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  // muestra el nombre y nivel
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  // incrementa el nivel en 1
  levelUp() {
    this.level += 1; // Incrementa el nivel en 1
    console.log(`${this.name} has leveled up to Level ${this.level}!`);
  }
}