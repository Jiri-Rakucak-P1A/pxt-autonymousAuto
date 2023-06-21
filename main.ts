radio.setGroup(160)
let speed1 = 0
let speed2 = 0
let index = 0
let a = 0
let b = 0
let serialnum = 0 // číslo microbitu
function motor_run(left: number = 0, right: number = 0) {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
}
basic.forever(function () {
    radio.onReceivedString(function (receivedString: string) {
        if (serialnum != radio.receivedPacket(RadioPacketProperty.SerialNumber)) return
        if (receivedString === "plus"){
            index + 0.5
        }
        if (receivedString === "minus"){
            index - 0.5
        }
        if (receivedString === "Go") {
            speed1 = -255 * index
            speed2 = (speed1 * 0.92) * index
            motor_run
        }



        if (receivedString === "L") {
            speed1 = -100 * index
            motor_run
        }
        if (receivedString === "R") {
            speed2 = -50 * index
            motor_run
        }
        if (receivedString === "LGo") {
            speed1 = -255 * index
            motor_run
        }
        if (receivedString === "RGo") {
            speed2 = (-255 * 0.92) * index
            motor_run
        }
        if (receivedString === "Stop"){
            speed1 = 0
            speed2 = 0
            index = 0
            motor_run
        }

    })
})
