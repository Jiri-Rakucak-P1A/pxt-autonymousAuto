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

const c: DigitalPin = DigitalPin.P15
const l: DigitalPin = DigitalPin.P14
const r: DigitalPin = DigitalPin.P13

let c1: number = 1
let r1: number = 1
let l1: number = 1

let speed = 0
let speed2 = 0


basic.forever(function() {
    c1 = pins.digitalReadPin(c)
    l1 = pins.digitalReadPin(l)
    r1 = pins.digitalReadPin(r)

    if (c1 === 0){
        speed = -150
        speed2 = -130
        console.log(1)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    }
    if (r1 === 0){
        speed = -150
        speed2 = -80
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)
    }
    if (l1 === 0){
        speed = -100
        speed2 = -130
        PCAmotor.MotorRun(PCAmotor.Motors.M1, speed)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, speed2)

    }
    basic.pause(50)

})