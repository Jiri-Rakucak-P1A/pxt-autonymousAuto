radio.setGroup(160)
let speed1 = 0
let speed2 = 0
let nasobitel = 0
let a = 0
let b = 0

radio.onReceivedValue(function (name: string, value: number) {
    if (name === "n"){
    nasobitel = value  
    }
})
basic.forever(function () {

    radio.onReceivedString(function (receivedString: string) {
        if (receivedString === "Go") {
            speed1 = -255 * nasobitel
            speed2 = (speed1 * 0.92) * nasobitel
        }

        if (receivedString === "L") {
            speed1 = -100 * nasobitel
        }
        if (receivedString === "R") {
            speed2 = -50 * nasobitel
        }
        if (receivedString === "LGo") {
            speed1 = -255 * nasobitel
        }
        if (receivedString === "RGo") {
            speed2 = (-255 * 0.92) * nasobitel
        }

        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)

    })
})




