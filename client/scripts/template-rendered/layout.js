/**
 * Created by momchillgorchev on 01/07/15.
 */

Template.mainLayout.rendered = function(){
    var canvas = document.querySelector('#scene');
    var ctx = canvas.getContext('2d');

    var WIDTH = canvas.width = window.innerWidth / 2;
    var HEIGHT = canvas.height = window.innerHeight / 2;

    var starsAmount = 200;
    var stars = [];


    ctx.fillStyle = 'rgb(100, 123, 214)';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);


    function Star(x, y, radius, color){

        var _this = this;
        _this.x = x || WIDTH / 2;
        _this.y = y || HEIGHT / 2;
        _this.radius = radius || Math.random() * 3;
        _this.color = color || 'rgb(255, 255, 255)';

        _this.draw = function(ctx){
            ctx.fillStyle = _this.color;
            ctx.beginPath();
            ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.closePath();
        }

    }

    function Draw(){
        for(var i = 0; i < starsAmount; i++){
            var x = Math.random() * WIDTH;
            var y = Math.random() * HEIGHT;
            var radius = Math.random() * 3;
            var color = 'rgb(255, 255, 255)';

            var star = new Star(x, y, radius, color);

            stars.push(star);
        }

        console.log(stars);
        for(var j = 0; j < stars.length; j++){
            stars[j].draw(ctx);
        }
    }

    Draw();

};