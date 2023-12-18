const readlineSync = require('readline-sync');

class RiceCooker {
  constructor() {
    this._ricePresent = false;
    this._riceCooked = false;
    this._heatingInProgress = false;
  }

  addRice() {
    if (!this._ricePresent) {
      this._ricePresent = true;
      console.log('Rice has been added.');
    } else {
      console.log('There\'s already rice in the rice cooker.');
    }
  }

  cookRice() {
    if (this._ricePresent && !this._riceCooked) {
      console.log('Cooking rice...');
      this._riceCooked = true;
      console.log('The rice has been cooked!');
    } else if (!this._ricePresent) {
      console.log('Cannot cook. The rice cooker is empty.');
    } else {
      console.log('The rice is already cooked.');
    }
  }

  keepWarm() {
    if (this._ricePresent && this._riceCooked && !this._heatingInProgress) {
      console.log('The rice is now being kept warm.');
      this._heatingInProgress = true;
    } else if (!this._ricePresent) {
      console.log('Cannot keep warm. The rice cooker is empty.');
    } else if (!this._riceCooked) {
      console.log('Cannot keep warm. The rice is not cooked.');
    } else {
      console.log('Keeping warm is already in progress.');
    }
  }

  removeRice() {
    if (this._ricePresent && this._heatingInProgress) {
      this._ricePresent = false;
      this._heatingInProgress = false;
      this._riceCooked = false;
      console.log('The rice has been removed from the rice cooker.');
    } else if (this._ricePresent && this._riceCooked) {
      this._ricePresent = false;
      this._riceCooked = false;
      this._heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else if (this._ricePresent && !this._riceCooked) {
      this._ricePresent = false;
      this._riceCooked = false;
      this._heatingInProgress = false;
      console.log('The rice has been removed from the rice cooker.');
    } else {
      console.log('There\'s no rice to remove or it is not cooked yet.');
    }
  }

}

function displayMenu() {
  console.log('\nWelcome to the Rice Cooker Simulator!');
  console.log('1. Add rice');
  console.log('2. Cook rice');
  console.log('3. Keep warm');
  console.log('4. Remove rice');
  console.log('5. Quit');
}

function simulateRiceCooker() {
  const riceCooker = new RiceCooker();
  let input;
  const condition = true;

  while (condition) {
    displayMenu();
    input = readlineSync.question('Enter your choice: ');

    if (input) {
      const choice = parseInt(input);

      if (!isNaN(choice)) {
        if (choice === 1) {
          riceCooker.addRice();
        } else if (choice === 2) {
          riceCooker.cookRice();
        } else if (choice === 3) {
          riceCooker.keepWarm();
        } else if (choice === 4) {
          riceCooker.removeRice();
        } else if (choice === 5) {
          console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
          break;
        } else {
          console.log('Invalid choice. Please select a valid option.');
        }
      } else {
        console.log('Invalid input. Please enter a valid number.');
      }
    } else {
      console.log('No input provided.');
    }
  }
}

simulateRiceCooker();