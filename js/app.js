/*************
**************
   Enemy
*************
**************/

// Enemies our player must avoid
 class Enemy {

    constructor(params) {
      this.x = params.x;
      this.y = params.y;
      this.sprite = params.sprite;
      this.speed = params.speed;
      this.width = 80;
      this.height = 83;
   }

   // Update the enemy's position, required method for game
   // Parameter: dt, a time delta between ticks
   update(dt) {
      ctx.beginPath();
      //moves the enemy by adding its position with its speed
      if(this.x < 505) {
         this.x = this.x + this.speed * dt;
      } else {
         //when out of canvas, put back at beginning canvas
         this.x = -101;
      }
      ctx.closePath();

      // tests collision with player
      if(this.x < player.x + player.width &&
   this.x + this.width > player.x &&
   this.y < player.y + player.height &&
   this.height + this.y > player.y) {
         player.x = (505 - 101) / 2;
         player.y = 605 - 220;
      }
   }

   // Draw the enemy on the screen, required method for game
   render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }

}


/*************
**************
   Player
*************
**************/

class Player {
   constructor(params) {
      this.sprite = params.sprite;
      this.x = params.x;
      this.y = params.y;
      this.width = 80;
      this.height = 83;
   }

   update(dt) {
      ctx.beginPath();
      // limits the position of the player inside the canvas window
      if(this.x < 0) {
         this.x = 0;
      } else if (this.x > 101 * 4) {
         this.x = 101 * 4;
         //when water reached, set the player at it's original position
      } else if ( this.y < 0) {
         this.y = 385;
      } else if (this.y > 385) {
         this.y = 385;
      } else {
         this.x = this.x;
         this.y = this.y;
      }

      ctx.closePath();
   }

   render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }
   //mouvements of plyaer depending the key pressed
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


const enemyY = [53, 219, 136, 53, 219, 136];
const enemySprite = 'images/enemy-bug.png';

const allEnemies = [];

enemyY.forEach(function(y) {
   allEnemies.push(new Enemy({
      x: -(Math.random()*300),
      y: y,
      sprite: enemySprite,
      speed: Math.random()*500 + 101
   }));
});

const player = new Player({
   sprite: 'images/char-cat-girl.png',
   x: 101 * 2 ,
   y:83 * 5
});

// listens for key presses and sends the keys to the Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/*************
**************
   Title
*************
**************/

class MenuTitle {
   constructor(params) {
      this.x = params.x || 0;
      this.y = params.y || 0;
      this.width = params.width || 505;
      this.height = params.height || 606;
      this.sprite = 'images/title-bg.png';
      this.title = 'images/title-logo.png';
      this.titleY = params.titleY;
   }

   renderBackground() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }

   renderTitle() {
      ctx.drawImage(Resources.get(this.title), this.x, this.titleY);
   }

   movingTitle(dt) {
      this.titleY = this.titleY + 100 * dt;
   }
}

const menuTitle = new MenuTitle({
   x: 0,
   y: 0,
   width: 505,
   height: 606,
   titleY: - 606
});
