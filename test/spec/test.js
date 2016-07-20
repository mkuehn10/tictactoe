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
            document.elementFromPoint(500, 100).click();
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            document.elementFromPoint(700, 100).click();
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            document.elementFromPoint(900, 100).click();
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            document.elementFromPoint(500, 500).click();
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            document.elementFromPoint(700, 500).click();
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            document.elementFromPoint(500, 700).click();
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            document.elementFromPoint(900, 500).click();
            expect(currentTurn).toBe('O');
            expect($('.status').text()).toBe('Current Turn: O');
            document.elementFromPoint(700, 700).click();
            expect(currentTurn).toBe('X');
            expect($('.status').text()).toBe('Current Turn: X');
            document.elementFromPoint(900, 700).click();
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
            document.elementFromPoint(500, 100).click();
            console.log(currentTurn)
            document.elementFromPoint(500, 100).click();
            console.log(currentTurn)
        })
    });

    describe('Various Winning Scenarios', function() {
        beforeEach(function() {
            newGame();
        });

        it('should correctly identify wins in the top row for X', function() {
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(900, 100).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the top row for O', function() {
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(500, 700).click();
            document.elementFromPoint(900, 100).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the middle row for X', function() {
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(900, 500).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the middle row for O', function() {
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(500, 700).click();
            document.elementFromPoint(900, 500).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the bottom row for X', function() {
            document.elementFromPoint(500, 700).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 700).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(900, 700).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the bottom row for O', function() {
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(500, 700).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(700, 700).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(900, 700).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the first column for X', function() {
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(500, 700).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the first column for O', function() {
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(900, 100).click();
            document.elementFromPoint(500, 700).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the second column for X', function() {
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(700, 700).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the second column for O', function() {
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(900, 100).click();
            document.elementFromPoint(700, 700).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the third column for X', function() {
            document.elementFromPoint(900, 100).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(900, 500).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(900, 700).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins in the third column for O', function() {
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(900, 100).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(900, 500).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(900, 700).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the first diagonal for X', function() {
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(900, 100).click();
            document.elementFromPoint(900, 700).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the first diagonal for O', function() {
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(900, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(500, 700).click();
            document.elementFromPoint(900, 700).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the second diagonal for X', function() {
            document.elementFromPoint(500, 700).click();
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(900, 700).click();
            document.elementFromPoint(900, 100).click();
            expect($('.status').text()).toBe('X WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
        it('should correctly identify wins on the second diagonal for O', function() {
            document.elementFromPoint(700, 100).click();
            document.elementFromPoint(500, 700).click();
            document.elementFromPoint(500, 100).click();
            document.elementFromPoint(700, 500).click();
            document.elementFromPoint(500, 500).click();
            document.elementFromPoint(900, 100).click();
            expect($('.status').text()).toBe('O WON');
            expect($('.play-again').css('display')).toBe('inline-block');
        });
    });
});
