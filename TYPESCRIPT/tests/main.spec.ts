import { RiceCooker } from '../main';

describe('RiceCooker', () => {
    let riceCooker: RiceCooker;

    beforeEach(() => {
        riceCooker = new RiceCooker();
    });

    it('should add rice', () => {
        riceCooker.addRice();
        expect(riceCooker['_ricePresent']).toBe(true);
    });

    it('should keep warming', () => {
        riceCooker.addRice();
        riceCooker.cookRice();
        riceCooker.keepWarm();
        riceCooker.quit();
        expect(riceCooker['_heatingInProgress']).toBe(true);
    });

});

