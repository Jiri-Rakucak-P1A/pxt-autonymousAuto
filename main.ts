    let m1 = PCAmotor.Motors.M1
    let m4 = PCAmotor.Motors.M4

    let leftldx = 0
    let rightldx = 0
    const speed = [0, -210]
    const speed2 = [0, -225]

    input.onButtonPressed(Button.A, function () {

        PCAmotor.MotorRun(m1, speed[++rightldx % speed.length])
    })

    input.onButtonPressed(Button.B, function () {

        PCAmotor.MotorRun(m4, speed2[++leftldx % speed.length])
    })

    input.onButtonPressed(Button.AB, function () {
        
    })

