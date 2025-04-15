export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    // insertar propiedades name y level
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}