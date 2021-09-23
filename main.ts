let smile = 0
basic.forever(function () {
    smile = pins.digitalReadPin(DigitalPin.P0)
    basic.showIcon(IconNames.Happy)
})
