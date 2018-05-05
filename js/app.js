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


/*************
**************
  Game Title
*************
**************/

class MenuTitle {
   constructor(y = 0) {
      this.x = 0;
      this.y = y;
      this.width = 505;
      this.height = 606;
      this.title = 'images/title-logo.png';
   }

   renderTitle() {
      ctx.beginPath();
      ctx.drawImage(Resources.get(this.title), this.x, this.y);
      ctx.closePath();
   }

   movingTitle(dt) {
      this.y = this.y + 10;
   }
}

const menuTitle = new MenuTitle(-606);

/*************
**************
Choose character
*************
**************/


class MenuCharacter {
   constructor(x = 0, y = 0, sprite ='') {
      this.insctructions = 'images/char-instructions.png';
      this.x = x;
      this.y = y;
      this.sprite = sprite;
      this.index = 2;
   }

   renderInstructions() {
      ctx.drawImage(Resources.get(this.insctructions), this.x, this.y);
   }

   render() {
       ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   }
   //selects the character
   handleInput(keyNumber) {
      if(keyNumber === 'left'|| keyNumber === 'up') {
         this.index = this.index - 1;
      } else if(keyNumber === 'down' || keyNumber === 'right') {
         this.index  = this.index  + 1;
      }
      this.update();
      player.sprite = allCharacterSprites[menuCharacter.index];
   }

   update(){
      if (this.index < 0) {
         this.index=0;
      } else if (this.index > 4) {
         this.index=4;
      }

      // empties then changed the sprite of the caracters depending the index
      allCharacters = [];
      for (let index in characterX ) {
         allCharacters.push(new MenuCharacter(characterX[index],83 * 5,characterSprites[this.index][index]));
      }
      allCharacters.forEach(function(character) {
           character.render();
      });
   }
}

const menuCharacter = new MenuCharacter();

let allCharacters = []

const characterX = [0, 101, 202, 303, 404];
let characterSprites = [
   ['images/char-cat-girl-selected.png',
   'images/char-pink-girl-not-selected.png',
   'images/char-boy-not-selected.png',
   'images/char-horn-girl-not-selected.png',
   'images/char-princess-girl-not-selected.png'],
   ['images/char-cat-girl-not-selected.png',
      'images/char-pink-girl-selected.png',
      'images/char-boy-not-selected.png',
      'images/char-horn-girl-not-selected.png',
      'images/char-princess-girl-not-selected.png'
   ],
   ['images/char-cat-girl-not-selected.png',
      'images/char-pink-girl-not-selected.png',
      'images/char-boy-selected.png',
      'images/char-horn-girl-not-selected.png',
      'images/char-princess-girl-not-selected.png'
   ],
   ['images/char-cat-girl-not-selected.png',
      'images/char-pink-girl-not-selected.png',
      'images/char-boy-not-selected.png',
      'images/char-horn-girl-selected.png',
      'images/char-princess-girl-not-selected.png'
   ],
   ['images/char-cat-girl-not-selected.png',
      'images/char-pink-girl-not-selected.png',
      'images/char-boy-not-selected.png',
      'images/char-horn-girl-not-selected.png',
      'images/char-princess-girl-selected.png'
   ]
];

for (let index in characterX ) {
   allCharacters.push(new MenuCharacter(characterX[index],83 * 5,characterSprites[2][index]));
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
   //mouvements of player depending the key pressed
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

const allCharacterSprites = ['images/char-cat-girl.png',
'images/char-pink-girl.png',
'images/char-boy.png',
'images/char-horn-girl.png',
'images/char-princess-girl.png'];

const player = new Player({
   sprite: allCharacterSprites[menuCharacter.index],
   x: 101 * 2 ,
   y:83 * 5
});



document.addEventListener('keyup', characterHandledKeys);

function characterHandledKeys(e){
   const allowedKeys = {
      13: 'enter',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
   };
   menuCharacter.handleInput(allowedKeys[e.keyCode]);
}
function playerHandledKeys(e){
   const allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
   };
   player.handleInput(allowedKeys[e.keyCode]);
}
