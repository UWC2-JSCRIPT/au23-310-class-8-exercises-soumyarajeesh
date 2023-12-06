describe('dealerShouldDraw', function() {
    it('should return false for hand with 10 and 9', function() {
        expect(dealerShouldDraw([{displayVal: '10', val: 10}, {displayVal: '9', val: 9}])).toBe(false);
    });

    it('should return true for hand with Ace and 6', function() {
        expect(dealerShouldDraw([{displayVal: 'Ace', val: 1}, {displayVal: '6', val: 6}])).toBe(true);
    });

    it('should return false for hand with 10, 6, Ace', function() {
        expect(dealerShouldDraw([{displayVal: '10', val: 10}, {displayVal: '6', val: 6}, {displayVal: 'Ace', val: 1}])).toBe(false);
    });

    it('should return true for hand with 2, 4, 2, 5', function() {
        expect(dealerShouldDraw([{displayVal: '2', val: 2}, {displayVal: '4', val: 4}, {displayVal: '2', val: 2}, {displayVal: '5', val: 5}])).toBe(true);
    });
});
