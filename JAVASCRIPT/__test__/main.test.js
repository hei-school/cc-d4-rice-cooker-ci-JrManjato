const { RiceCooker } = require('../main');

describe('RiceCooker', () => {
    let riceCooker;
    let consoleSpy;

    beforeEach(() => {
        riceCooker = new RiceCooker();
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('should display menu', () => {
        riceCooker.addRice();
        expect(riceCooker._ricePresent).toBeTruthy();
        expect(consoleSpy).toHaveBeenCalledWith('Rice has been added.');
    });

    it('should not add rice when already present', () => {
        riceCooker._ricePresent = true;
        riceCooker.addRice();
        expect(riceCooker._ricePresent).toBeTruthy();
        expect(consoleSpy).toHaveBeenCalledWith("There's already rice in the rice cooker.");
    });

    it('should cook rice when rice is present and not already cooked', () => {
        riceCooker._ricePresent = true;
        riceCooker.cookRice();
        expect(riceCooker._riceCooked).toBeTruthy();
        expect(consoleSpy).toHaveBeenCalledWith('Cooking rice...');
        expect(consoleSpy).toHaveBeenCalledWith('The rice has been cooked!');
    });

    it('should not cook rice when rice is not present', () => {
        riceCooker.cookRice();
        expect(riceCooker._riceCooked).toBeFalsy();
        expect(consoleSpy).toHaveBeenCalledWith('Cannot cook. The rice cooker is empty.');
    });

    it('should not cook rice when rice is already cooked', () => {
        riceCooker._ricePresent = true;
        riceCooker._riceCooked = true;
        riceCooker.cookRice();
        expect(riceCooker._riceCooked).toBeTruthy(); // Make sure it's still true
        expect(consoleSpy).toHaveBeenCalledWith('The rice is already cooked.');
    });

    it('should keep warm when rice is present, cooked, and heating is not in progress', () => {
        riceCooker._ricePresent = true;
        riceCooker._riceCooked = true;
        riceCooker._heatingInProgress = false;

        riceCooker.keepWarm();

        expect(riceCooker._heatingInProgress).toBeTruthy();
        expect(consoleSpy).toHaveBeenCalledWith('The rice is now being kept warm.');
    });

    it('should not keep warm when rice is not present', () => {
        riceCooker.keepWarm();

        expect(riceCooker._heatingInProgress).toBeFalsy();
        expect(consoleSpy).toHaveBeenCalledWith('Cannot keep warm. The rice cooker is empty.');
    });

    it('should not keep warm when rice is not cooked', () => {
        riceCooker._ricePresent = true;

        riceCooker.keepWarm();

        expect(riceCooker._heatingInProgress).toBeFalsy();
        expect(consoleSpy).toHaveBeenCalledWith('Cannot keep warm. The rice is not cooked.');
    });

    it('should not keep warm when heating is already in progress', () => {
        riceCooker._ricePresent = true;
        riceCooker._riceCooked = true;
        riceCooker._heatingInProgress = true;

        riceCooker.keepWarm();

        expect(riceCooker._heatingInProgress).toBeTruthy(); // Make sure it's still true
        expect(consoleSpy).toHaveBeenCalledWith('Keeping warm is already in progress.');
    });

    it('should remove rice when rice is present and heating is in progress', () => {
        riceCooker._ricePresent = true;
        riceCooker._heatingInProgress = true;

        riceCooker.removeRice();

        expect(riceCooker._ricePresent).toBeFalsy();
        expect(riceCooker._heatingInProgress).toBeFalsy();
        expect(riceCooker._riceCooked).toBeFalsy();
        expect(consoleSpy).toHaveBeenCalledWith('The rice has been removed from the rice cooker.');
    });

    it('should remove rice when rice is present and not cooked', () => {
        riceCooker._ricePresent = true;
        riceCooker._heatingInProgress = false;

        riceCooker.removeRice();

        expect(riceCooker._ricePresent).toBeFalsy();
        expect(riceCooker._heatingInProgress).toBeFalsy();
        expect(riceCooker._riceCooked).toBeFalsy();
        expect(consoleSpy).toHaveBeenCalledWith('The rice has been removed from the rice cooker.');
    });

    it('should not remove rice when rice is not present', () => {
        riceCooker.removeRice();

        expect(riceCooker._ricePresent).toBeFalsy(); // Make sure it's still false
        expect(riceCooker._heatingInProgress).toBeFalsy();
        expect(riceCooker._riceCooked).toBeFalsy();
        expect(consoleSpy).toHaveBeenCalledWith("There's no rice to remove or it is not cooked yet.");
    });

});