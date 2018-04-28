// Enemies our player must avoid
 class Enemy {

    constructor(params) {
      // Variables applied to each of our instances go here,
      // we've provided one for you to get started

      // The image/sprite for our enemies, this uses
      // a helper we've provided to easily load images
      this.x = params.x;
      this.y = params.y;
      this.sprite = params.sprite;
      this.speed = params.speed;
      this.width = 101;
      this.height = 171;
   }

   // Update the enemy's position, required method for game
   // Parameter: dt, a time delta between ticks
   update(dt) {

   }

   // Draw the enemy on the screen, required method for game
   render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }

}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
   constructor(params) {

   }

   update(dt) {

   }

   render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }

   handleInput(keyNumber) {

   }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
