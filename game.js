kaboom({
  global: true,
  scale: 3,
  debug: true,
  clearColor: [0, 0, 0],
});

loadSpriteAtlas("/assets/sprites/hero/walkingtunic1.png", {
  link: {
    x: 0,
    y: 0,
    width: 960,
    height: 128,
    sliceX: 30,
    sliceY: 4,
    anims: {
      "walk-right": { from: 0, to: 29, loop: true, speed: 30 },
      "walk-up": { from: 30, to: 59, loop: true, speed: 30 },
      "walk-left": { from: 60, to: 89, loop: true, speed: 30 },
      "walk-down": { from: 100, to: 119, loop: true, speed: 30 },
      "idle-down": { from: 100, to: 100 },
      "idle-left": { from: 60, to: 60 },
      "idle-right": { from: 0, to: 0 },
      "idle-up": { from: 30, to: 30 },
    },
  },
});

function CharacterMovement() {
  const player = add([sprite("link"), pos(center())]);
  player.play("idle-up");
  player.action(() => {
    const left = keyIsDown("left");
    const right = keyIsDown("right");
    const up = keyIsDown("up");
    const down = keyIsDown("down");
    const speed = 1;
    const curAnim = player.curAnim();

    if (left) {
      if (curAnim !== "walk-left") {
        player.play("walk-left");
      }
      player.pos.x -= speed;
    } else if (right) {
      if (curAnim !== "walk-right") {
        player.play("walk-right");
      }
      player.pos.x += speed;
    } else if (up) {
      if (curAnim !== "walk-up") {
        player.play("walk-up");
      }
      player.pos.y -= speed;
    } else if (down) {
      if (curAnim !== "walk-down") {
        player.play("walk-down");
      }
      player.pos.y += speed;
    } else {
      const direction = curAnim.split("-").pop() ?? "down";
      player.play("idle-" + direction);
    }
  });
}

CharacterMovement();
