import k from '/game.js'

k.loadSpriteAtlas('/assets/walking.tunic1.png', {
    'link':{
        'x':0,
        'y':0,
        'width':960,
        'height':128,
        'sliceX':32,
        'sliceY':32,
        'anims':{
            'walk-right': { from: 0, to:29, loop:true, speed:15},
            'walk-up':{ from: 30, to:59, loop:true, speed:15},
            'walk-left':{ from: 60, to:99, loop:true, speed:15},
            'walk-down':{ from: 100, to:129, loop:true, speed:15},
            'idle-down':{from : 100, to : 100},
            'idle-side':{from:60, to:60},
            'idle-up':{from : 30,to:30},
        }
    }
})

const player = add([
    sprite("hero"),
])

player.play("run")