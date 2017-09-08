var strTime = 30;
var incorrect = 0;
var correct = 0;
var cntdwn;
var onq = 0;
var questions = ["Who lives in a pineapple under the sea?", 
				 "How many different categories of towels does Monia (from FRIENDS) have in her bathroom?",
				 "What is superman's weakness?"]
var choices = { 
				"first" : ["Rick", "Whales", "Fish", "Spongebob squarepants"],
				"second" : ["7", "11", "13","5"],
				"third" : ["Kryptonite" , "Batman" , "Yellow sun", "Cats"]


			};
				

var num = ["chBtn1","chBtn2","chBtn3","chBtn4"];



function runtime () {
	cntdwn = setInterval(qtimer, 1000);
}
function stop() {
    clearInterval(cntdwn);
    $("#timer").html("");
    $(".chText").html("<img src='https://media.giphy.com/media/wdh1SvEn0E06I/giphy.gif'/>");
	$(".qText").html("<h2>TOO SLOW!!</h2>");
	setTimeout(timedout, 5000);
	incorrect++;
	onq++;
}
function qtimer() {
	$("#timer").html(strTime-1);
	strTime--;
	if (strTime === 0) {
		stop();
	}
};
function timedout(){
		if (onq === 1) {
		secquestion();
		};
		if (onq === 2) {
			trdquestion();
		};
		if (onq === 3) {
			scscrn();
		};
}




$(".strBtn").on("click", function(){
	//start question 1
	$("#timer").html(strTime);
	runtime();
	$(".qText").html(questions[0]);
	$(".chText").html("");

	for (var i = 0; i < choices.first.length; i++) {
		$(".chText").append("<button id=" + num[i] + " class='btn btn-default' type='button'>" + choices.first[i] + "</button><br>");
	};
	$(".btn-default").on("click", function(){
			if ($(this).is("#chBtn1")) {
				$(".chText").html("<img src='https://media.giphy.com/media/oZBwIcPvKhP8c/giphy.gif'/>");
				$(".qText").html("<h2>Are you serious Mooooortyyyyy?!</h2>");
				incorrect++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(secquestion, 5000)
			}
			if ($(this).is("#chBtn2")) {
				$(".chText").html("<img src='https://media.giphy.com/media/qhhamrBnxSKNG/giphy.gif'/>");
				$(".qText").html("<h2>Whaleeeee noooo...</h2>");
				incorrect++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(secquestion, 5000)
			}
			if ($(this).is("#chBtn3")) {
				$(".chText").html("<img src='https://media.giphy.com/media/Ri36aXH6NzQ76/giphy.gif'/>");
				$(".qText").html("<h2>It could, but no.</h2>");
				incorrect++;
				onq++;;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(secquestion, 5000)
			}
			if ($(this).is("#chBtn4")) {
				$(".chText").html("<img src='https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif'/>");
				$(".qText").html("<h2>YUP!</h2>");
				correct++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(secquestion, 5000)
			}
		
		});

});
//second question
function secquestion(){
	strTime = 30;
	$("#timer").html(strTime);
	runtime();
	$(".qText").html(questions[1]);
	$(".chText").html("");

	for (var i = 0; i < choices.second.length; i++) {
		$(".chText").append("<button id=" + num[i] + " class='btn btn-default' type='button'>" + choices.second[i] + "</button><br>");
	};
	$(".btn-default").on("click", function(){
			if ($(this).is("#chBtn1")) {
				$(".chText").html("<img src='https://media.giphy.com/media/3o6Ztfc9Z1KOlMF2dW/giphy.gif'/>");
				$(".qText").html("<h2>NOPE!</h2>");
				incorrect++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(trdquestion, 5000)
			}
			if ($(this).is("#chBtn2")) {
				$(".chText").html("<img src='https://media.giphy.com/media/3ohhwtBU5eyOiuM61a/giphy.gif'/>");
				$(".qText").html("<h2>Fancy, Guest, Fancy guest, everyday use....Ding Ding Ding!</h2>");
				correct++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(trdquestion, 5000)
			}
			if ($(this).is("#chBtn3")) {
				$(".chText").html("<img src='https://media.giphy.com/media/11NWkdLdD1MAkE/giphy.gif'/>");
				$(".qText").html("<h2>Jason is disappointed, but expected</h2>");
				incorrect++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(trdquestion, 5000)
			}
			if ($(this).is("#chBtn4")) {
				$(".chText").html("<img src='https://media.giphy.com/media/3o7TKBIp7kPDK9sD96/giphy.gif'/>");
				$(".qText").html("<h2>Go Go Powe...Nope!</h2>");
				incorrect++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(trdquestion, 5000)
			}
	});
};
//third question
function trdquestion(){
	strTime = 30;
	$("#timer").html(strTime);
	runtime();
	$(".qText").html(questions[2]);
	$(".chText").html("");

	for (var i = 0; i < choices.third.length; i++) {
		$(".chText").append("<button id=" + num[i] + " class='btn btn-default' type='button'>" + choices.third[i] + "</button><br>");
	};
	$(".btn-default").on("click", function(){
			if ($(this).is("#chBtn1")) {
				$(".chText").html("<img src='https://media.giphy.com/media/E1BpGnTL6gdPO/giphy.gif'/>");
				$(".qText").html("<h2>Dirth from his home planet. Yup.</h2>");
				correct++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(scscrn, 5000)
			}
			if ($(this).is("#chBtn2")) {
				$(".chText").html("<img src='https://media.giphy.com/media/wLDXxrBcH4FPO/giphy.gif'/>");
				$(".qText").html("<h2>Correct! That's right, I said it.</h2>");
				correct++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(scscrn, 5000)
			}
			if ($(this).is("#chBtn3")) {
				$(".chText").html("<img src='https://media.giphy.com/media/10d3NDzD40xb0s/giphy.gif'/>");
				$(".qText").html("<h2>Nah man, he loves that stuff.</h2>");
				incorrect++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(scscrn, 5000)
			}
			if ($(this).is("#chBtn4")) {
				$(".chText").html("<img src='https://media.giphy.com/media/3oriNNjlNHW2GT8ZDG/giphy.gif'/>");
				$(".qText").html("<h2>Uhhh...no..</h2>");
				incorrect++;
				onq++;
				$("#timer").html("");
				clearInterval(cntdwn);
				setTimeout(scscrn, 5000)
			}
	});
};

function scscrn(){
	$("#timer").html("YOUR FINAL SCORE IS!");
	$(".qText").html("<h2>You got " + correct + " correct!</h2><br><h2>You got " + incorrect + " wrong!</h2>");
	$(".chText").html("<button id='restart' class='btn btn-info' type='button'>Play Again?</button><br>");

	$("#restart").on("click", function(){
		reStart();
	});


}

function reStart(){
    window.location.reload();
};

