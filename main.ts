input.onButtonPressed(Button.A, function () {
    SUMA = N1 + N2
    basic.showNumber(SUMA)
    Palabra1 = "SUMASTE"
})
input.onButtonPressed(Button.AB, function () {
    MULTIPLICACIÓN = N1 * N2
    basic.showNumber(MULTIPLICACIÓN)
    Palabra1 = "MULTIPLICASTE"
})
input.onButtonPressed(Button.B, function () {
    RESTA = N1 - N2
    basic.showNumber(RESTA)
    Palabra1 = "RESTASTE"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(N1)
    basic.showNumber(N2)
    basic.showString(Palabra1)
})
let MULTIPLICACIÓN = 0
let RESTA = 0
let SUMA = 0
let Palabra1 = ""
let N2 = 0
let N1 = 0
N1 = randint(1, 5)
N2 = randint(1, 5)
Palabra1 = "-"
SUMA = 0
RESTA = 0
MULTIPLICACIÓN = 0
