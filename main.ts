controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraShake(4, 500)
    mySprite.startEffect(effects.fountain, randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(12)
game.splash("ROTH MOBOT")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    f f f f f f f f f f f f f f f f 
    f . . f . . f . . f f f f . . f 
    f . . f . . f . . f f f f . . f 
    f . . f f f f . . f f f f . . f 
    f . . f . . f . . f . . f . . f 
    f . . f . . f . . f . . f . . f 
    f . . f . . f . . f . . f . . f 
    f . . f . . f . . f . . f . . f 
    f f f f . . f f f f . . f f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
