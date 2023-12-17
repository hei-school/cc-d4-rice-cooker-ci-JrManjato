"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateRiceCooker = exports.inputFunctions = exports.RiceCooker = void 0;
var readlineSync = require("readline-sync");
var RiceCooker = /** @class */ (function () {
    function RiceCooker() {
        this._ricePresent = false;
        this._riceCooked = false;
        this._heatingInProgress = false;
        this._isPowered = true;
    }
    RiceCooker.prototype.addRice = function () {
        if (!this._ricePresent) {
            this._ricePresent = true;
            console.log('Rice has been added.');
        }
        else {
            console.log('There\'s already rice in the rice cooker.');
        }
    };
    RiceCooker.prototype.cookRice = function () {
        if (this._ricePresent && !this._riceCooked) {
            console.log('Cooking rice...');
            this._riceCooked = true;
            console.log('The rice has been cooked!');
        }
        else if (!this._ricePresent) {
            console.log('Cannot cook. The rice cooker is empty.');
        }
        else {
            console.log('The rice is already cooked.');
        }
    };
    RiceCooker.prototype.keepWarm = function () {
        if (this._ricePresent && this._riceCooked && !this._heatingInProgress) {
            console.log('The rice is now being kept warm.');
            this._heatingInProgress = true;
        }
        else if (!this._ricePresent) {
            console.log('Cannot keep warm. The rice cooker is empty.');
        }
        else if (!this._riceCooked) {
            console.log('Cannot keep warm. The rice is not cooked.');
        }
        else {
            console.log('Keeping warm is already in progress.');
        }
    };
    RiceCooker.prototype.removeRice = function () {
        if (this._ricePresent && this._heatingInProgress) {
            this._ricePresent = false;
            this._heatingInProgress = false;
            this._riceCooked = false;
            console.log('The rice has been removed from the rice cooker.');
        }
        else if (this._ricePresent && this._riceCooked) {
            this._ricePresent = false;
            this._riceCooked = false;
            this._heatingInProgress = false;
            console.log('The rice has been removed from the rice cooker.');
        }
        else if (this._ricePresent && !this._riceCooked) {
            this._ricePresent = false;
            this._riceCooked = false;
            this._heatingInProgress = false;
            console.log('The rice has been removed from the rice cooker.');
        }
        else {
            console.log('There\'s no rice to remove or it is not cooked yet.');
        }
    };
    RiceCooker.prototype.quit = function () {
        console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
        this._isPowered = false;
        process.exit(0);
    };
    return RiceCooker;
}());
exports.RiceCooker = RiceCooker;
function displayMenu() {
    console.log('\nWelcome to the Rice Cooker Simulator!');
    console.log('1. Add rice');
    console.log('2. Cook rice');
    console.log('3. Keep warm');
    console.log('4. Remove rice');
    console.log('5. Quit');
}
exports.inputFunctions = {
    getUserInput: function () { return readlineSync.question('Enter your choice: '); },
};
var simulateRiceCooker = function () {
    var riceCooker = new RiceCooker();
    var input;
    while (riceCooker._isPowered) {
        displayMenu();
        input = exports.inputFunctions.getUserInput();
        if (input) {
            var choice = parseInt(input);
            if (!isNaN(choice)) {
                if (choice === 1) {
                    riceCooker.addRice();
                }
                else if (choice === 2) {
                    riceCooker.cookRice();
                }
                else if (choice === 3) {
                    riceCooker.keepWarm();
                }
                else if (choice === 4) {
                    riceCooker.removeRice();
                }
                else if (choice === 5) {
                    riceCooker.quit();
                }
                else {
                    console.log('Invalid choice. Please select a valid option.');
                }
            }
            else {
                console.log('Invalid input. Please enter a valid number.');
            }
        }
        else {
            console.log('No input provided.');
        }
    }
};
exports.simulateRiceCooker = simulateRiceCooker;
(0, exports.simulateRiceCooker)();
