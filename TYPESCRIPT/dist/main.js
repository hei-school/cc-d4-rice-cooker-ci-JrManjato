"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateRiceCooker = exports.inputFunctions = exports.RiceCooker = void 0;
const readlineSync = __importStar(require("readline-sync"));
class RiceCooker {
    constructor() {
        this._ricePresent = false;
        this._riceCooked = false;
        this._heatingInProgress = false;
        this._isPowered = true;
    }
    addRice() {
        if (!this._ricePresent) {
            this._ricePresent = true;
            console.log('Rice has been added.');
        }
        else {
            console.log('There\'s already rice in the rice cooker.');
        }
    }
    cookRice() {
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
    }
    keepWarm() {
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
    }
    removeRice() {
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
    }
    quit() {
        console.log('Thank you for using the Rice Cooker Simulator. Goodbye!');
        this._isPowered = false;
    }
}
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
    getUserInput: () => readlineSync.question('Enter your choice: '),
};
const simulateRiceCooker = () => {
    const riceCooker = new RiceCooker();
    let input;
    while (riceCooker._isPowered) {
        displayMenu();
        input = exports.inputFunctions.getUserInput();
        if (input) {
            const choice = parseInt(input);
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
