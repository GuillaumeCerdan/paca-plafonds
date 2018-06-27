$(document).ready(function () {
    $('.slider-child').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        dots: false,
        accessibility: true,
        speed: 800,
        fade: true,
        //autoplay: true,
        prevArrow: '<span id="back" class="bck-arrows arrows-custom-g slick-prev"><img src="../templates/frontOffice/default/assets/dist/img/back.svg" height="50" width="30"/></span>',
        nextArrow: '<span id="next" class="bck-arrows arrows-custom-g slick-next"><img src="../templates/frontOffice/default/assets/dist/img/next.svg" height="50" width="30"/></span>'
    });

    var elm = $(".photo-home");
    var maxSlides = elm.length-1;
	var currentNbr = 0;
	var previousNbr = 0;

    $("#btn-moins").click(function(){
		previousNbr = currentNbr;
        currentNbr--;
        if (currentNbr < 0) {
            currentNbr = maxSlides;
        }
        console.log(currentNbr);
        displaySlides();
    });
    $("#btn-plus").click(function(){
		previousNbr = currentNbr;
        currentNbr++;
        if (currentNbr > maxSlides) {
            currentNbr = 0;
        }
        console.log(currentNbr);
        displaySlides();
    });
    function displaySlides() {
        $('.slider-child').each(function() {
            $(this).css('display', 'none');
		});
        $(elm[previousNbr]).css('display', 'block');
        $(elm[currentNbr]).fadeIn(300);
		$(elm[previousNbr]).fadeOut(300);
        
    }



    function goToParticuliers() {
        window.location.href='particuliers.php';
      }
    function goToProfessionnels() {
        window.location.href='professionnels.php';
    }

});


























/*     PERLIN NOISE    */

/*
var particles_a = [];
var particles_b = [];
var particles_c = [];
var nums = 200;
var noiseScale = 800;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(21, 8, 50);
	for(var i = 0; i < nums; i++){
		particles_a[i] = new Particle(random(0, width),random(0,height));
		particles_b[i] = new Particle(random(0, width),random(0,height));
		particles_c[i] = new Particle(random(0, width),random(0,height));
	}
}

function draw(){
	noStroke();
	smooth();
		for(var i = 0; i < nums; i++){
		var radius = map(i,0,nums,1,2);
		var alpha = map(i,0,nums,0,250);

		fill(69,33,124,alpha);
		particles_a[i].move();
		particles_a[i].display(radius);
		particles_a[i].checkEdge();

		fill(7,153,242,alpha);
		particles_b[i].move();
		particles_b[i].display(radius);
		particles_b[i].checkEdge();

		fill(255,255,255,alpha);
		particles_c[i].move();
		particles_c[i].display(radius);
		particles_c[i].checkEdge();
	}  
}


function Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
	this.speed = 0.4;

	this.move = function(){
		var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(50, width);
			this.pos.y = random(50, height);
		}
	}

	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
	}
}*/