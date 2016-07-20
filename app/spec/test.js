$(function() {
    'use strict';

    describe('On Load Game State', function() {

        describe('The Board', function() {

            it('should be empty on load', function() {
                $.each($('.play-area img'), function(n, playArea) {
                    expect($(playArea).attr('src')).toBe('images/blank.png');
                });
            });

            it('should have a hidden Play Again button', function() {
                newGame();
                expect($('.play-again').css('display') === 'none').toBe(true);
            });
        });

        describe('Current Turn', function() {

            it('should be Player X', function() {
                expect(currentTurn).toBe('X');
            });

            it('should be displayed properly', function() {
                expect($('.status').text()).toBe('Current Turn: X');
            });
        });
    });


    describe('Playing The Game', function() {
        it('should alternate turns correctly', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            $('.s1-2').trigger($.Event("click", {target: $('.s1-2 img')}));
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            $('.s2-1').trigger($.Event("click", {target: $('.s2-1 img')}));
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });

        it('should start a new game when Play Again? is clicked', function() {
            $('.play-again').click();
            $.each($('.play-area img'), function(n, playArea) {
                    expect($(playArea).attr('src')).toBe('images/blank.png');
                });
            expect($('.play-again').css('display') === 'none').toBe(true);
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
        });

        it('should not update when clicking on a square already occupied', function() {
            console.log("first click");
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            expect(currentTurn).toBe('O');
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            expect(currentTurn).toBe('O');
        })
    });

    describe('Various Winning Scenarios', function() {
        beforeEach(function() {
            newGame();
        });

        afterAll(function() {
            newGame();
        });

        it('should correctly identify wins in the top row for X', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the top row for O', function() {
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the middle row for X', function() {
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s1-2').trigger($.Event("click", {target: $('.s1-2 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the middle row for O', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            $('.s1-2').trigger($.Event("click", {target: $('.s1-2 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the bottom row for X', function() {
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s2-1').trigger($.Event("click", {target: $('.s2-1 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the bottom row for O', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s2-1').trigger($.Event("click", {target: $('.s2-1 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the first column for X', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the first column for O', function() {
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the second column for X', function() {
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s2-1').trigger($.Event("click", {target: $('.s2-1 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the second column for O', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            $('.s2-1').trigger($.Event("click", {target: $('.s2-1 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the third column for X', function() {
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-2').trigger($.Event("click", {target: $('.s1-2 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the third column for O', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s1-2').trigger($.Event("click", {target: $('.s1-2 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the first diagonal for X', function() {
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the first diagonal for O', function() {
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the second diagonal for X', function() {
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s2-2').trigger($.Event("click", {target: $('.s2-2 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the second diagonal for O', function() {
            $('.s0-1').trigger($.Event("click", {target: $('.s0-1 img')}));
            $('.s2-0').trigger($.Event("click", {target: $('.s2-0 img')}));
            $('.s0-0').trigger($.Event("click", {target: $('.s0-0 img')}));
            $('.s1-1').trigger($.Event("click", {target: $('.s1-1 img')}));
            $('.s1-0').trigger($.Event("click", {target: $('.s1-0 img')}));
            $('.s0-2').trigger($.Event("click", {target: $('.s0-2 img')}));
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
    });
});
