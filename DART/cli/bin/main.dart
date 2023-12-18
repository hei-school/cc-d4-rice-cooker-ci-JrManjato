import 'dart:async';
import 'dart:io';

class RiceCooker {
  bool _ricePresent = false;
  bool _riceCooked = false;
  bool _heatingInProgress = false;

  void addRice() {
    if (!_ricePresent) {
      _ricePresent = true;
      print('Rice has been added.');
    } else {
      print('There\'s already rice in the rice cooker.');
    }
  }

  Future<void> cookRice() async {
    if (_ricePresent && !_riceCooked) {
      print('Cooking rice...');
      await Future.delayed(Duration(seconds: 3));
      _riceCooked = true;
      print('The rice has been cooked!');
    } else if (!_ricePresent) {
      print('Cannot cook. The rice cooker is empty.');
    } else {
      print('The rice is already cooked.');
    }
  }

  void keepWarm() {
    if (_ricePresent && _riceCooked && !_heatingInProgress) {
      print('The rice is now being kept warm.');
      _heatingInProgress = true;
    } else if (!_ricePresent) {
      print('Cannot keep warm. The rice cooker is empty.');
    } else if (!_riceCooked) {
      print('Cannot keep warm. The rice is not cooked.');
    } else {
      print('Keeping warm is already in progress.');
    }
  }

  void removeRice() {
    if (_heatingInProgress) {
      _heatingInProgress = false;
      _ricePresent = false;
      print('The rice has been removed from the rice cooker.');
    }else if (_ricePresent && _riceCooked) {
      _ricePresent = false;
      _riceCooked = false;
      print('The rice has been removed from the rice cooker.');
    } else if(_ricePresent && !_riceCooked){
        _ricePresent= false;
        print('The rice has been removed from the rice cooker.');
    }else {
      print('There\'s no rice to remove or it is not cooked yet.');
    }
  }
}

void displayMenu() {
  print('\nWelcome to the Rice Cooker Simulator!');
  print('1. Add rice');
  print('2. Cook rice');
  print('3. Keep warm');
  print('4. Remove rice');
  print('5. Quit');
}

Future<void> simulateRiceCooker() async {
  var riceCooker = RiceCooker();
  String? input;

  while (true) {
    displayMenu();
    print('Enter your choice: ');
    input = stdin.readLineSync();

    if (input != null) {
      var choice = int.tryParse(input);
      if (choice != null) {
        if (choice == 1) {
          riceCooker.addRice();
        } else if (choice == 2) {
          await riceCooker.cookRice();
        } else if (choice == 3) {
          riceCooker.keepWarm();
        } else if (choice == 4) {
          riceCooker.removeRice();
        } else if (choice == 5) {
          print('Thank you for using the Rice Cooker Simulator. Goodbye!');
          break;
        } else {
          print('Invalid choice. Please select a valid option.');
        }
      } else {
        print('Invalid input. Please enter a valid number.');
      }
    } else {
      print('No input provided.');
    }
  }
}

void main() {
  simulateRiceCooker();
}
