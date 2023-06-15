radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (input.buttonIsPressed(Button.A)) {
        if (receivedNumber == 2) {
            basic.showString("GANASTES")
        } else if (receivedNumber == 1) {
            basic.showString("EMPATASTES")
        } else {
            basic.showString("PERDISTES")
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        if (receivedNumber == 0) {
            basic.showString("GANASTES")
        } else if (receivedNumber == 2) {
            basic.showString("EMPATASTES")
        } else {
            basic.showString("PERDISTES")
        }
    }
    if (input.buttonIsPressed(Button.AB)) {
        if (receivedNumber == 1) {
            basic.showString("GANASTES")
        } else if (receivedNumber == 0) {
            basic.showString("EMPATASTES")
        } else {
            basic.showString("PERDISTES")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Scissors)
})
radio.setGroup(11)
