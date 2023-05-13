let m1 = PCAmotor.Motors.M1
let m4 = PCAmotor.Motors.M4
radio.setGroup(160)
let leftldx = 0
let rightldx = 0
let SpeedLeft = 0
let SpeedRight = 0


radio.onReceivedValue(function(name: string, value: number) {
    if (name == "GOL"){
        SpeedLeft = value
        }
    if (name == "GOR") {
        SpeedRight = value
    }
    if (name == "ReverseL") {
        SpeedLeft = value
    }
    if (name == "ReverseR") {
        SpeedRight = value
    }
    if (name == "Left") {
        SpeedLeft = value
    }
    if (name == "Right") {
        SpeedRight = value
    }
    radio.onReceivedString(function(receivedString: string) {
        if(receivedString === "Stop"){
            PCAmotor.MotorStopAll()
        }
    })
})
basic.forever(function() {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, SpeedLeft)
    PCAmotor.MotorRun(PCAmotor.Motors.M4, SpeedRight)
})
    























// radio.onReceivedValue(function(name: string, value: number) {
//     if (name = "speed"){
//         speed.unshift(value)
//         speed2.unshift(value - (value * 0.059))
//         speed.pop()
//         speed2.pop()
//     }
//     if (name = "brake") {
//         speed.push(value)
//         speed2.push(value)
//         speed.shift()
//         speed2.shift()
        
//     }

//     if (name = "turn") {
//         if (value < 0 || value > -1023) {
//             let neco = speed[value]
//             speed.push(speed[value] + 100)
            
//         }

//         if (value > 0 || value < 1023) {
//             speed2.push(speed[value] + 100)
//         }
//     }

    
// })
// basic.forever(function() {
//     PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
//     PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])
// })