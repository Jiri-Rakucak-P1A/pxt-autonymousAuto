    let m1 = PCAmotor.Motors.M1
    let m4 = PCAmotor.Motors.M4

    let leftldx = 0
    let rightldx = 0
    const speed = [0,-255]
    const speed2 = [0,-240]
    const nspeed = [240]
    const nspeed2 = [255]
    const stop = [0]
    let block = false
    let block1 = false



    




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


