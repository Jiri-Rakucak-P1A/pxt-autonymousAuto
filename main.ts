    radio.setGroup(160)
    
    let m1 = PCAmotor.Motors.M1
    let m4 = PCAmotor.Motors.M4

    let leftldx = 0
    let rightldx = 0
    let speed = [0, -255]
    let speed2 = [0, -240]
    let nspeed = [0, 240]
    let nspeed2 = [0, 255]
    

radio.onReceivedString(function(receivedString: string) {
    if (receivedString == "go") {
        PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
        PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])
    }
    if (receivedString == "back"){
        PCAmotor.MotorRun(m1, nspeed[++rightldx % speed.length])
        PCAmotor.MotorRun(m4, nspeed2[++leftldx % speed.length])
    }
    

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
























    


/*

input.onButtonPressed(Button.A, function () {
    control.inBackground(() => {
        PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
        PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])
    })

     basic.pause(1000)

    control.inBackground(() => {
        PCAmotor.MotorRun(m1, nspeed[++rightldx % speed.length])
        PCAmotor.MotorRun(m4, nspeed2[++leftldx % speed.length])
    })
    
    
})

control.inBackground(() => {
    
})


input.onButtonPressed(Button.A, function() {
    
})

*/

    



   
 /*       
if (x < 4) { x++ }
if (x == 4) { x = 1 }


if (x == 2) {
    PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
    PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])
}

if (x == 3) {
    PCAmotor.MotorRun(m1, nspeed[++rightldx % speed.length])
    PCAmotor.MotorRun(m4, nspeed2[++leftldx % speed.length])
}
if (x == 1) {
    PCAmotor.MotorRun(m1, stop[++rightldx % speed.length])
    PCAmotor.MotorRun(m4, stop[++leftldx % speed.length])
}
*/


