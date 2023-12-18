import '../bin/main.dart';
import 'package:test/test.dart';

void main() {
  group('RiceCooker', () {
    late RiceCooker riceCooker;

    setUp(() {
      riceCooker = RiceCooker();
    });

    test('should add rice when not already present', () {
      riceCooker.addRice();
      expect(riceCooker.isRicePresent, isTrue);
    });

    test('should not add rice when already present', () {
      riceCooker.setRicePresent(true);
      riceCooker.addRice();
      expect(riceCooker.isRicePresent, isTrue);
    });

    test('should cook rice when rice is present and not already cooked', () async {
      riceCooker.setRicePresent(true);
      await riceCooker.cookRice();
      expect(riceCooker.isRiceCooked, isTrue);
    });

    test('should not cook rice when rice is not present', () async {
      await riceCooker.cookRice();
      expect(riceCooker.isRiceCooked, isFalse);
    });

    test('should keep warm when rice is present, cooked, and heating not in progress', () {
      riceCooker.setRicePresent(true);
      riceCooker.setRiceCooked(true);
      riceCooker.keepWarm();
      expect(riceCooker.isHeatingInProgress, isTrue);
    });

    test('should not keep warm when rice is not present', () {
      riceCooker.keepWarm();
      expect(riceCooker.isHeatingInProgress, isFalse);
    });

    test('should not keep warm when rice is present but not cooked', () {
      riceCooker.setRicePresent(true);
      riceCooker.keepWarm();
      expect(riceCooker.isHeatingInProgress, isFalse);
    });

    test('should not keep warm when rice is present, cooked, and heating already in progress', () {
      riceCooker.setRicePresent(true);
      riceCooker.setRiceCooked(true);
      riceCooker.setHeatingInProgress(true);
      riceCooker.keepWarm();
      expect(riceCooker.isHeatingInProgress, isTrue); // Remains true as it was already in progress
    });

    test('should remove rice when heating in progress', () {
      riceCooker.setRicePresent(true);
      riceCooker.setRiceCooked(true);
      riceCooker.setHeatingInProgress(true);
      riceCooker.removeRice();
      expect(riceCooker.isHeatingInProgress, isFalse);
      expect(riceCooker.isRicePresent, isFalse);
      expect(riceCooker.isRiceCooked, isFalse);
    });

    test('should remove rice when rice is present and cooked', () {
      riceCooker.setRicePresent(true);
      riceCooker.setRiceCooked(true);
      riceCooker.removeRice();
      expect(riceCooker.isHeatingInProgress, isFalse);
      expect(riceCooker.isRicePresent, isFalse);
      expect(riceCooker.isRiceCooked, isFalse);
    });

    test('should remove rice when rice is present but not cooked', () {
      riceCooker.setRicePresent(true);
      riceCooker.removeRice();
      expect(riceCooker.isHeatingInProgress, isFalse);
      expect(riceCooker.isRicePresent, isFalse);
      expect(riceCooker.isRiceCooked, isFalse);
    });

    test('should not remove rice when rice is not present', () {
      riceCooker.removeRice();
      expect(riceCooker.isHeatingInProgress, isFalse);
      expect(riceCooker.isRicePresent, isFalse);
      expect(riceCooker.isRiceCooked, isFalse);
    });
  });
}
