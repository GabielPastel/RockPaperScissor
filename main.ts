input.onGesture(Gesture.Shake, function () {
    Mão = randint(1, 3)
    if (Mão == 1) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # # . .
            . # . # .
            `)
    } else if (Mão == 2) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . . .
            . # . . .
            `)
    } else if (Mão == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
let Mão = 0
basic.showString("OI CRUSH")
