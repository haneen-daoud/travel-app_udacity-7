import { calculateTripLength } from "../app.js";

describe('calculateTripLength function', () => {
    it('should return the correct number of days between the start and end dates', () => {
        const startDate = '2024-08-28';
        const endDate = '2024-08-31';
        const expectedDuration = 2;

        // Call the function with the given dates
        const duration = calculateTripLength(startDate, endDate);

        // Assert that the returned duration matches the expected value
        expect(duration).toBe(expectedDuration);
    });
});
