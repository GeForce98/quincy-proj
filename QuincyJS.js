/* Function to welcome users to the website Alert */
function myFunction() {
	alert("Hello\nWelcome to my gaming website! INF 201 Final Project by Quincy Asemota");
}

/* Function that displays the time of day on webpage. Bonus Assignment*/
function getDate() {
	var d = new Date();
	var time = d.getHours();
	var hours = "";
	if (time < 12) {
		hours = "Good morning!";
	} else if (time < 17) {
		hours = "Good afternoon!";
	} else if (time >= 17 && time <= 24) {
		hours = "Good evening!";
	}
	var node = document.createElement("H1");
	var textnode = document.createTextNode(hours);
	node.appendChild(textnode);
	document.getElementById("TimePeriod").appendChild(node);
}

/* Function that changes the header background . */
function changeBackground(){
	document.body.style.backgroundImage = "url('abstract4k.jpg')";
}

/* Function that reverts header background to original. */
function revertBackground(){
	document.body.style.backgroundImage = "url('galaxy4k.jpg')";
}



/* Interactive function that asks user to input any game on the list, displays an a message if game on list is not found or is found. */
function UserFunction() {
	var usertext;
	var favGame = prompt("What's your favorite game out of the list?", "*Must be typed exactly the same way as list*");
	switch (favGame) {
		case "Halo Master Chief Collection":
			usertext = "Excellent Choice, this is one of my personal favorites on the Xbox 360/ONE";
			break;
		case "Batman Arkham Knight":
			usertext = "This is actually in my top three favorites. One of my favorite games of the decade.";
			break;
		case "Super Smash Bros. Ultimate":
			usertext = "This is an all time favorite, I can see that you have good taste in games.";
			break;
		case "DMC: Devil May Cry 5":
			usertext = "I recommend this game to people who are interested in the hack and slash genre.";
		case "Sekiro Shadows Die Twice":
			usertext = "This might be game of the year in my opinion, Good Choice.";
		case "The Witcher 3 Wild Hunt GOTY":
			usertext = "This is a 10/10 Video Game Highly recommend.";
			break;
		case "Elder Scrolls V Special Edition":
			usertext = "This is a good game one of the best Elder Scrolls.";
			break;
		case "Metro Exodus: Day One":
			usertext = "Good horror FPS game I recommend this.";
			break;
		case "Electronic Arts : Anthem":
			usertext = "This is an average game, I would not recommend this game.";
			break;
		case "Persona 5 Standard Edition":
			usertext = "This is a good JRPG, highly recommend this game.";
			break;
		case "God of War Playstation 4":
			usertext = "This is a PS4 Exclusive, I highly recommend this game.";
			break;
		case "Days Gone Playstation 4":
			usertext = "This is a PS4 Exclusive, game is buggy and I would not recommend this game unless you like the Zombie genre.";
			break;
		case "Middle Earth: Shadow of War":
			usertext = "This is a good game 8/10 I recommend this if you are into Lord of the Rings.";
			break;
		case "Monster Hunter World":
			usertext = "This is a good game if you are interested in JRPGs.";
			break;
		case "Resident Evil 2 Biohazard":
			usertext = "This is a very good game 9/10, I recommend this game to all Resident Evil fans.";
			break;
		case "FROMSOFTWARE: Dark Souls 3":
			usertext = "This is a hard game, if you enjoy dying over and over this game is for you.";
			break;
		case "Nier: Automata Complete Edition":
			usertext = "This is a good JRPG highly recommend.";
			break;
		case "Kingdom Hearts Chain of Memories":
			usertext = "This is a good PS2 game all time favorite.";
			break;
		default:
			usertext = "That game is not on the list. Try again next time!";
	}
	document.getElementById("gamelist").innerHTML = usertext;
}


/* This is referenced from dynamicdrive.com Circle Text Trail - Created by Tim Tilton
   Website: http://www.tempermedia.com/

   Visit: http://www.dynamicdrive.com/ for Original Source and tons of scripts

   Modified Here for more flexibility and modern browser support

   Modifications as first seen in http://www.dynamicdrive.com/forums/

   username:jscheuer1 - This notice must remain for legal use

   */
;
(function() {
	// Your message here (QUOTED STRING)
	var msg = "Gamers Paradise!";
	/* THE REST OF THE EDITABLE VALUES BELOW ARE ALL UNQUOTED NUMBERS */
	// Set font's style size for calculating dimensions
	// Set to number of desired pixels font size (decimal and negative numbers not allowed)
	var size = 24;
	// Set both to 1 for plain circle, set one of them to 2 for oval
	// Other numbers & decimals can have interesting effects, keep these low (0 to 3)
	var circleY = 0.75;
	var circleX = 2;
	// The larger this divisor, the smaller the spaces between letters
	// (decimals allowed, not negative numbers)
	var letter_spacing = 5;
	// The larger this multiplier, the bigger the circle/oval
	// (decimals allowed, not negative numbers, some rounding is applied)
	var diameter = 10;
	// Rotation speed, set it negative if you want it to spin clockwise (decimals allowed)
	var rotation = 0.4;
	// This is not the rotation speed, its the reaction speed, keep low!
	// Set this to 1 or a decimal less than one (decimals allowed, not negative numbers)
	var speed = 0.3;
	////////////////////// Stop Editing //////////////////////
	if (!window.addEventListener && !window.attachEvent || !document.createElement) return;
	msg = msg.split('');
	var n = msg.length - 1,
		a = Math.round(size * diameter * 0.208333),
		currStep = 20,
		ymouse = a * circleY + 20,
		xmouse = a * circleX + 20,
		y = [],
		x = [],
		Y = [],
		X = [],
		o = document.createElement('div'),
		oi = document.createElement('div'),
		b = document.compatMode && document.compatMode != "BackCompat" ? document.documentElement : document.body,
		mouse = function(e) {
			e = e || window.event;
			ymouse = !isNaN(e.pageY) ? e.pageY : e.clientY; // y-position
			xmouse = !isNaN(e.pageX) ? e.pageX : e.clientX; // x-position
		},
		makecircle = function() { // rotation/positioning
			if (init.nopy) {
				o.style.top = (b || document.body).scrollTop + 'px';
				o.style.left = (b || document.body).scrollLeft + 'px';
			};
			currStep -= rotation;
			for (var d, i = n; i > -1; --i) { // makes the circle
				d = document.getElementById('iemsg' + i).style;
				d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
				d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
			};
		},
		drag = function() { // makes the resistance
			y[0] = Y[0] += (ymouse - Y[0]) * speed;
			x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
			for (var i = n; i > 0; --i) {
				y[i] = Y[i] += (y[i - 1] - Y[i]) * speed;
				x[i] = X[i] += (x[i - 1] - X[i]) * speed;
			};
			makecircle();
		},
		init = function() { // appends message divs, & sets initial values for positioning arrays
			if (!isNaN(window.pageYOffset)) {
				ymouse += window.pageYOffset;
				xmouse += window.pageXOffset;
			} else init.nopy = true;
			for (var d, i = n; i > -1; --i) {
				d = document.createElement('div');
				d.id = 'iemsg' + i;
				d.style.height = d.style.width = a + 'px';
				d.appendChild(document.createTextNode(msg[i]));
				oi.appendChild(d);
				y[i] = x[i] = Y[i] = X[i] = 0;
			};
			o.appendChild(oi);
			document.body.appendChild(o);
			setInterval(drag, 25);
		},
		ascroll = function() {
			ymouse += window.pageYOffset;
			xmouse += window.pageXOffset;
			window.removeEventListener('scroll', ascroll, false);
		};
	o.id = 'outerCircleText';
	o.style.fontSize = size + 'px';
	if (window.addEventListener) {
		window.addEventListener('load', init, false);
		document.addEventListener('mouseover', mouse, false);
		document.addEventListener('mousemove', mouse, false);
		if (/Apple/.test(navigator.vendor)) window.addEventListener('scroll', ascroll, false);
	} else if (window.attachEvent) {
		window.attachEvent('onload', init);
		document.attachEvent('onmousemove', mouse);
	};
})();