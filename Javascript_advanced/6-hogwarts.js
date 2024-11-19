class studentHogwarts {
  // declare private variables
  #name;
  #privateScore;

  constructor(name = null, privateScore = 0) {
    this.#name = name;
    this.#privateScore = privateScore;
  }

  setName(newName) {
    this.#name = newName;
  }

  #changeScoreBy(points) {
    this.#privateScore += points;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    return `${this.#name}: ${this.#privateScore}`;
  }
}

const harry = new studentHogwarts('Harry');

harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

console.log(harry.getScore());

const draco = new studentHogwarts('Draco');

draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

console.log(draco.getScore());
