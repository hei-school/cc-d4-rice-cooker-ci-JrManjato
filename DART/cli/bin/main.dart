import 'dart:async';
import 'dart:io';

class RiceCooker {
  late bool _ricePresent = false;
  late bool _riceCooked = false;
  late bool _heatingInProgress = false;

  bool get isRicePresent => _ricePresent;

  bool get isRiceCooked => _riceCooked;

  bool get isHeatingInProgress => _heatingInProgress;

  void setRicePresent(bool value) {
    _ricePresent = value;
  }

  void setHeatingInProgress(bool value) {
    _heatingInProgress = value;
  }

  void setRiceCooked(bool value) {
    _riceCooked = value;
  }

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
    if (_ricePresent) {
      _ricePresent = false;
      _riceCooked = false;
      _heatingInProgress = false;
      print('The rice has been removed from the rice cooker.');
    }
    else {
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

    if (input == null) {
      print('No input provided. Exiting.');
      return;
    }

    var choice = int.tryParse(input);
    if (choice != null) {
      switch (choice) {
        case 1:
          riceCooker.addRice();
          break;
        case 2:
          await riceCooker.cookRice();
          break;
        case 3:
          riceCooker.keepWarm();
          break;
        case 4:
          riceCooker.removeRice();
          break;
        case 5:
          print('Thank you for using the Rice Cooker Simulator. Goodbye!');
          return;
        default:
          print('Invalid choice. Please select a valid option.');
      }
    } else {
      print('Invalid input. Please enter a valid number.');
    }
  }
}

void main() {
  simulateRiceCooker();
}
