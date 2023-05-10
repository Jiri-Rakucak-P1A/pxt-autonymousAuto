    let m1 = PCAmotor.Motors.M1
    let m4 = PCAmotor.Motors.M4

    let leftldx = 0
    let rightldx = 0
    const speed = [0, -210]
    const speed2 = [0, -225]

    function car_motor(lm: number = 0, rm: number = 0) {
        const ul = Math.map (lm, -100, 100, -255, 255)
        const ur = Math.map(rm, -100, 100, -255, 255)
        PCAmotor.MotorRun(PCAmotor.Motors.M1, -ul)
        PCAmotor.MotorRun(PCAmotor.Motors.M4, -ur)
    }

radio.onReceivedValue(function(name: string, value: number) {
    if (name = "")
    PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
    PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])
})

input.onButtonPressed(Button.A, function() {

    PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
    PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])
   
    PCAmotor.MotorRun(m4, speed[++rightldx % speed.length])
    PCAmotor.MotorRun(m1, speed2[++leftldx % speed.length])
    
    PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
    PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])

})

        



   
        




