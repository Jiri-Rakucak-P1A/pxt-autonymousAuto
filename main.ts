// radio.setGroup(160)
// let speed1 = 0
// let speed2 = 0
// let nasobitel = 0
// let a = 0
// let b = 0

// radio.onReceivedValue(function (name: string, value: number) {
//     if (name === "n"){
//     nasobitel = value  
//     }
// })
// basic.forever(function () {

//     radio.onReceivedString(function (receivedString: string) {
//         if (receivedString === "Go") {
//             speed1 = -255 * nasobitel
//             speed2 = (speed1 * 0.92) * nasobitel
//         }

//         if (receivedString === "L") {
//             speed1 = -100 * nasobitel
//         }
//         if (receivedString === "R") {
//             speed2 = -50 * nasobitel
//         }
//         if (receivedString === "LGo") {
//             speed1 = -255 * nasobitel
//         }
//         if (receivedString === "RGo") {
//             speed2 = (-255 * 0.92) * nasobitel
//         }

//         PCAmotor.MotorRun(PCAmotor.Motors.M1, speed1)
//         PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)

//     })
// })




pins.setPull(DigitalPin.P15, PinPullMode.PullNone)
pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P13, PinPullMode.PullNone)

const center: DigitalPin = DigitalPin.P15
const left: DigitalPin = DigitalPin.P14
const right: DigitalPin = DigitalPin.P13

let center1: number = 0
let right1: number = 0
let left1: number = 0

let speed = 0
let speed2 = 0


basic.forever(function() {
    center1 = pins.digitalReadPin(center)
    left1 = pins.digitalReadPin(left)
    right1 = pins.digitalReadPin(right)

    if (center1 === 1){
        speed = -190
        speed2 = -250
        console.log(1)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    }
    if (center1 === 0){
        speed = 0
        speed2 = 0
        console.log(0)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)

    }

    

})