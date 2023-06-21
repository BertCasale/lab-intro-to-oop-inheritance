// Create class below
class Food {
  constructor(name, daysToSpoil = 0, fresh = true){
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare(){
    console.log(`${this.name} is being prepared`);
  }

  isFresh(){
    if (this.daysToSpoil <= 0){
      this.fresh = false;
    }

    this.fresh ? 
    console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils.`) :
    console.log(`${this.name} has spoiled.`);
  }

  aDayPasses(){
    this.daysToSpoil--;
    this.isFresh()
  }
}

// Do not edit below this line
module.exports = Food;