
document.addEventListener('DOMContentLoaded', function() {
    var canvas = document.getElementById('gameCanvas');
    var ctx = canvas.getContext('2d');

    var scale = 20;
    var rows = 20;
    var columns = 20;

    var snake;
    var fruit;

    //init game
    function setup() {
        canvas.width = 800;
        canvas.height = 800;
        
        //objects
        snake = new Snake();
        fruit = new Fruit();
        fruit.pickLocation();

       //this loops the game state every 250 milliseconds
        window.setInterval(function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear
            fruit.draw();
            snake.update(); //update snake position
            snake.draw();

            if (snake.eat(fruit)) {
                fruit.pickLocation(); //move fruit once eaten
            }

            snake.checkCollision(); //check collision
        }, 250);
    }

    //listener for keydow events to control snake
    window.addEventListener('keydown', function(e) {
        switch(e.keyCode) {
            case 37: // Left arrow
                snake.changeDirection('Left');
                break;
            case 38: // Up arrow
                snake.changeDirection('Up');
                break;
            case 39: // Right arrow
                snake.changeDirection('Right');
                break;
            case 40: // Down arrow
                snake.changeDirection('Down');
                break;
        }
    });

    //this creates the danger noodle
    function Snake() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1; //speed
        this.ySpeed = 0;
        this.total = 0; //length of snake
        this.tail = []; //holds the snakes segments

        //draw snake
        this.draw = function() {
            ctx.fillStyle = "#FFFFFF";
            //for each segment in tail, draw a rectangle at x, y position
            for (var i = 0; i < this.tail.length; i++) {
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            }
            //snakes head
            ctx.fillRect(this.x, this.y, scale, scale);
        };

        //handles the position of the snake
        this.update = function() {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

            this.tail[this.total - 1] = { x: this.x, y: this.y };

            this.x += this.xSpeed;
            this.y += this.ySpeed;
     
            //wrap around edges of canvas
            if (this.x >= canvas.width) {
                this.x = 0;
            }

            if (this.y >= canvas.height) {
                this.y = 0;
            }

            if (this.x < 0) {
                this.x = canvas.width - scale;
            }

            if (this.y < 0) {
                this.y = canvas.height - scale;
            }
        };

        //changes the direction the snake is going
        this.changeDirection = function(direction) {
            switch (direction) {
                case 'Up':
                    if (this.ySpeed === 0) {
                        this.xSpeed = 0;
                        this.ySpeed = -scale * 1;
                    }
                    break;
                case 'Down':
                    if (this.ySpeed === 0) {
                        this.xSpeed = 0;
                        this.ySpeed = scale * 1;
                    }
                    break;
                case 'Left':
                    if (this.xSpeed === 0) {
                        this.xSpeed = -scale * 1;
                        this.ySpeed = 0;
                    }
                    break;
                case 'Right':
                    if (this.xSpeed === 0) {
                        this.xSpeed = scale * 1;
                        this.ySpeed = 0;
                    }
                    break;
            }
        };

       //Check if snake has eaten fruit boolean 
        this.eat = function(fruit) {
            if (this.x === fruit.x && this.y === fruit.y) {
                this.total++;
                return true;
            }

            return false;
        };

        //collision with itself
        this.checkCollision = function() {
            for (var i = 0; i < this.tail.length; i++) {
                if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                    this.total = 0;
                    this.tail = []; //sets segments back to empty array
                }
            }
        };
    }

    function Fruit() {
        this.x;
        this.y;
        //random location for fruit
        this.pickLocation = function() {
            this.x = Math.floor(Math.random() * rows) * scale;
            this.y = Math.floor(Math.random() * columns) * scale;
        };
        
        //draw fruit
        this.draw = function() {
            ctx.fillStyle = "#4cafab";
            ctx.fillRect(this.x, this.y, scale, scale);
        };
    }
    //starts game
    setup();
});