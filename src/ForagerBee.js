class ForagerBee extends HoneyMakerBee {
  // TODO..
  constructor() {
    super();

    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(value = '$pollen$') {
    this.treasureChest.push(value);
  }
};
