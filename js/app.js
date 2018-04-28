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
      ctx.beginPath();
      if(this.x < 505) {
         this.x = this.x + this.speed * dt;
      } else {
         this.x = -(Math.random()*101);
      }

      ctx.closePath();
      if(this.x < player.x + 83 &&
   this.x + 83 > player.x &&
   this.y === player.y) {
            debugger;
         player.x = (505 - 101) / 2;
         player.y = 605 - 220;
      }
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
      this.sprite = params.sprite;
      this.x = params.x;
      this.y = params.y;
      this.width = '101px';
      this.height = '171px';
   }

   update(dt) {

   }

   render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }

   handleInput(keyNumber) {
      if(keyNumber === 'left') {
         this.x = this.x - 101;

      } else if(keyNumber === 'up') {
         this.y = this.y - 83;

      }  else if(keyNumber === 'right') {
         this.x = this.x + 101;

      }  else if(keyNumber === 'down') {
         this.y = this.y + 83;
      }
   }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const enemyY = [53, 219, 136, 53, 219, 136];
const enemySprite = 'images/enemy-bug.png';

const allEnemies = [];

enemyY.forEach(function(y) {
   allEnemies.push(new Enemy({
      x: -(Math.random()*300),
      y: y,
      sprite: enemySprite,
      speed: Math.random()*101 + 101
   }));
});

const player = new Player({
   sprite: 'images/char-cat-girl.png',
   x: 101 * 2 ,
   y:83 * 5
});

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
