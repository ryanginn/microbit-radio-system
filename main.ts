/**
 * I suggest you use PUTTY or something to read the messages via serial as reading from the Micro:bit display can be a bit of a pain.
 * 
 * (see https://makecode.microbit.org/device/serial for driver if your OS is not Windows 10 and above.
 * 
 * -R
 */
let frq = 0
let optionmsg = 0
radio.setTransmitPower(7)
serial.writeString("Press A to set frequency to 22 and B to set to 33.")
basic.showString("A = 22 B = 33.")
for (let index = 0; index < 1212121212121212200; index++) {
    if (frq == 0) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . # # # #
                . . . . #
                . # # # #
                . # . . .
                . # # # #
                `)
            radio.setGroup(22)
            serial.writeString("Radio freq set to channel 22 with success")
            frq = 1
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . # # # #
                . . . . #
                . # # # #
                . . . . #
                . # # # #
                `)
            radio.setGroup(33)
            serial.writeString("Radio freq set to channel 33 with success")
            frq = 1
        }
    }
    while (1 + 1 == 2) {
        serial.writeLine("Ready to send messages - please select a message to send by pressing A to select and B for next message")
        if (optionmsg == 0) {
            basic.showString("H")
            if (input.buttonIsPressed(Button.A)) {
                radio.sendString("HELLO.")
                serial.writeLine("\"HELLO.\" sent in seconds to channel desired.")
            }
            if (input.buttonIsPressed(Button.B)) {
                serial.writeLine("Button B pushed - loading next message")
                basic.showString("C")
                serial.writeLine("Message is: coming in loud and clear.")
                if (input.buttonIsPressed(Button.A)) {
                    radio.sendString("Coming in loud and clear")
                    serial.writeLine("\"Coming in loud and clear\" sent in seconds to chosen channel.")
                }
            }
        }
    }
}
basic.forever(function () {
	
})
