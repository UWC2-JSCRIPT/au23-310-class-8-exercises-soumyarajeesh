describe("Soccer Team Standings", () => {
    describe("getPointsFromResult", () => {
        it("should return 3 for a win", () => {
            expect(getPointsFromResult('w')).toBe(3);
        });

        it("should return 1 for a draw", () => {
            expect(getPointsFromResult('d')).toBe(1);
        });

        it("should return 0 for a loss", () => {
            expect(getPointsFromResult('l')).toBe(0);
        });
    });

    describe("getTotalPoints", () => {
        it("should return the correct total points for a series of results", () => {
            expect(getTotalPoints('wwdlw')).toBe(10); // 3+3+1+0+3
        });
    });

    describe("orderTeams", () => {
        it("should return a correctly formatted standings string", () => {
            const teams = [
                { name: 'Team A', results: 'wwd' }, // 7 points
                { name: 'Team B', results: 'lld' }, // 1 point
            ];
            const expectedOutput = 'Team A: 7\nTeam B: 1';
            expect(orderTeams(...teams)).toBe(expectedOutput);
        });
    });
});
