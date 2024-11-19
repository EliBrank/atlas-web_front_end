class studentHogwarts {
  constructor(privateScore = 0, name = null) {
    this.privateScore = privateScore;
    this.name = name;
  }

  #changeScoreBy(points) {
    this.privateScore += points;
  }
}
