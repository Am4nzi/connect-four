(function() {
	var body = $("body");
	var headingYellow = $(".heading-winner-yellow");
	$(headingYellow).hide();
	var headingRed = $(".heading-winner-red");
	$(headingRed).hide();
	var board = $(".board-wrapper");
	var buttonYellow = $(".next-game-button-yellow-wrapper");
	$(buttonYellow).hide();
	var buttonRed = $(".next-game-button-red-wrapper");
	$(buttonRed).hide();
	var fireworks = $(".fireworks");
	$(fireworks).hide();
	var hands = $("img").val("showhand");
	var currentPlayer = "player1";
	var column = $(".column");
	var column1 = $("#pointer01 .hole");
	var column2 = $("#pointer02 .hole");
	var column3 = $("#pointer03 .hole");
	var column4 = $("#pointer04 .hole");
	var column5 = $("#pointer05 .hole");
	var column6 = $("#pointer06 .hole");
	var column7 = $("#pointer07 .hole");

	$("div").on("mouseover", function() {
		var hands;
		var showHand;
		var hand;

		if ($(this).is($("#pointer01"))) {
			hands = "#pointer0" + 1;
			showHand = $(".showhand0" + 1);
			hand = $(".hand0" + 1);
		} else if ($(this).is($("#pointer02"))) {
			hands = "#pointer0" + 2;
			showHand = $(".showhand0" + 2);
			hand = $(".hand0" + 2);
		} else if ($(this).is($("#pointer03"))) {
			hands = "#pointer0" + 3;
			showHand = $(".showhand0" + 3);
			hand = $(".hand0" + 3);
		} else if ($(this).is($("#pointer04"))) {
			hands = "#pointer0" + 4;
			showHand = $(".showhand0" + 4);
			hand = $(".hand0" + 4);
		} else if ($(this).is($("#pointer05"))) {
			hands = "#pointer0" + 5;
			showHand = $(".showhand0" + 5);
			hand = $(".hand0" + 5);
		} else if ($(this).is($("#pointer06"))) {
			hands = "#pointer0" + 6;
			showHand = $(".showhand0" + 6);
			hand = $(".hand0" + 6);
		} else if ($(this).is($("#pointer07"))) {
			hands = "#pointer0" + 7;
			showHand = $(".showhand0" + 7);
			hand = $(".hand0" + 7);
		}

		$(hands).on("mouseover", function() {
			hand.removeAttr("class");
			showHand.css("position", "absolute");
			showHand.css("top", "-32px");
			showHand.css("transform", "translatey(0px)");
			showHand.css("animation", "bounce 1s");
			showHand.css("animation-direction", "alternate");
			showHand.css("animation-iteration-count", "infinite");
		});

		$(hands).on("mouseleave", function() {
			showHand.css("top", "-500px");
		});
	});

	var winArrays = [
		[0, 7, 14, 21],
		[1, 8, 15, 22],
		[2, 9, 16, 23],
		[6, 13, 20, 27],

		[7, 14, 21, 28],
		[8, 15, 22, 29],
		[12, 19, 26, 33],
		[14, 21, 28, 35],

		[18, 25, 32, 39],
		[19, 26, 33, 40],
		[20, 27, 34, 41],
		[36, 31, 26, 21],

		[37, 32, 27, 22],
		[38, 33, 28, 23],
		[30, 25, 20, 15],
		[31, 26, 21, 16],

		[32, 27, 22, 17],
		[24, 19, 13, 9],
		[25, 20, 15, 10],
		[26, 21, 16, 11],

		[18, 13, 8, 3],
		[19, 14, 9, 4],
		[20, 15, 10, 5],
		[13, 20, 27, 34]
	];

	column.on("click", function(e) {
		var slotsInColumn = $(e.currentTarget).find(".slot");
		for (var i = 5; i >= 0; i--) {
			var slotInColumn = slotsInColumn.eq(i);

			if (
				!slotInColumn.hasClass("player1") &&
				!slotInColumn.hasClass("player2")
			) {
				slotInColumn.addClass(currentPlayer);

				break;
			}
		}
		if (i == -1) {
			return;
		}

		if (checkForVictory(slotsInColumn)) {
			win();
		} else if (checkForVictory($(".row" + i))) {
			win();
		} else if (checkForVictoryDiag()) {
			win();
		} else {
			switchPlayers();
		}
	});

	function switchPlayers() {
		if (currentPlayer == "player1") {
			currentPlayer = "player2";
		} else {
			currentPlayer = "player1";
		}
	}

	function checkForVictory(slot) {
		var count = 0;
		for (var i = 0; i < slot.length; i++) {
			if (slot.eq(i).hasClass(currentPlayer)) {
				count++;

				if (count == 4 && currentPlayer == "player1") {
					setTimeout(function() {
						column1.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
					}, 200);
					setTimeout(function() {
						column2.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
					}, 400);
					setTimeout(function() {
						column3.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
					}, 600);
					setTimeout(function() {
						column4.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
					}, 800);
					setTimeout(function() {
						column5.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
					}, 1000);
					setTimeout(function() {
						column6.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
					}, 1200);
					setTimeout(function() {
						column7.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
					}, 1400);
					setTimeout(function() {
						body.css(
							"background",
							"linear-gradient(270deg, #eccf2d, #f9b200)"
						);
						body.css(
							"background-size",
							"400% 400%"
						);
						body.css(
							"-webkit-animation",
							"background-gradient 2s ease infinite"
						);
						body.css(
							"-moz-animation",
							"background-gradient 2s ease infinite"
						);
						body.css(
							"animation",
							"background-gradient 2s ease infinite"
						);
						headingYellow.addClass(
							"heading-winner-yellow"
						);
						buttonYellow.addClass(
							"next-game-button-wrapper-yellow"
						);
						board.css("margin-top", "21px");
						$(buttonYellow).show();
						buttonYellow.css(
							"visibility",
							"visible"
						);
						$(fireworks).show();
						$(headingYellow).show();
						headingYellow.css(
							"visibility",
							"visible"
						);
						$(hands).hide();
						buttonYellow.css(
							"visibility",
							"visible"
						);
					}, 1400);
					$(buttonYellow).on("click", function() {
						location.reload();
					});
				} else if (
					count == 4 &&
					currentPlayer == "player2"
				) {
					setTimeout(function() {
						column1.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
					}, 200);
					setTimeout(function() {
						column2.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
					}, 400);
					setTimeout(function() {
						column3.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
					}, 600);
					setTimeout(function() {
						column4.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
					}, 800);
					setTimeout(function() {
						column5.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
					}, 1000);
					setTimeout(function() {
						column6.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
					}, 1200);
					setTimeout(function() {
						column7.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
					}, 1400);
					setTimeout(function() {
						body.css(
							"background",
							"linear-gradient(270deg, #ff250d, #ff0059)"
						);
						body.css(
							"background-size",
							"400% 400%"
						);
						body.css(
							"-webkit-animation",
							"background-gradient 2s ease infinite"
						);
						body.css(
							"-moz-animation",
							"background-gradient 2s ease infinite"
						);
						body.css(
							"animation",
							"background-gradient 2s ease infinite"
						);
						headingRed.addClass(
							"heading-winner-yellow"
						);
						buttonRed.addClass(
							"next-game-button-wrapper-yellow"
						);
						board.css("margin-top", "21px");
						$(buttonRed).show();
						buttonRed.css(
							"visibility",
							"visible"
						);
						$(fireworks).show();
						$(headingRed).show();
						headingRed.css(
							"visibility",
							"visible"
						);
						$(hands).hide();
						buttonRed.css(
							"visibility",
							"visible"
						);
					}, 1400);
					$(buttonRed).on("click", function() {
						location.reload();
					});
				}
			}
		}
	}

	function checkForVictoryDiag() {
		for (var i = 0; i < winArrays.length; i++) {
			var count = 0;
			for (var j = 0; j < winArrays[i].length; j++) {
				if (
					$(".slot")
						.eq(winArrays[i][j])
						.hasClass(currentPlayer)
				) {
					count++;
				}
			}
			if (count == 4 && currentPlayer == "player1") {
				setTimeout(function() {
					column1.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
				}, 200);
				setTimeout(function() {
					column2.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
				}, 400);
				setTimeout(function() {
					column3.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
				}, 600);
				setTimeout(function() {
					column4.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
				}, 800);
				setTimeout(function() {
					column5.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
				}, 1000);
				setTimeout(function() {
					column6.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
				}, 1200);
				setTimeout(function() {
					column7.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
				}, 1400);
				setTimeout(function() {
					body.css(
						"background",
						"linear-gradient(270deg, #eccf2d, #f9b200)"
					);
					body.css(
						"background-size",
						"400% 400%"
					);
					body.css(
						"-webkit-animation",
						"background-gradient 2s ease infinite"
					);
					body.css(
						"-moz-animation",
						"background-gradient 2s ease infinite"
					);
					body.css(
						"animation",
						"background-gradient 2s ease infinite"
					);

					buttonYellow.addClass(
						"next-game-button-wrapper-yellow"
					);
					board.css("margin-top", "21px");
					$(buttonYellow).show();
					buttonYellow.css(
						"visibility",
						"visible"
					);
					$(fireworks).show();
					headingYellow.addClass(
						"heading-winner-yellow"
					);
					$(headingYellow).show();
					headingYellow.css(
						"visibility",
						"visible"
					);
					$(hands).hide();
					buttonYellow.css(
						"visibility",
						"visible"
					);
				}, 1400);
				$(buttonYellow).on("click", function() {
					location.reload();
				});
			} else if (count == 4 && currentPlayer == "player2") {
				setTimeout(function() {
					column1.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
				}, 200);
				setTimeout(function() {
					column2.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
				}, 400);
				setTimeout(function() {
					column3.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
				}, 600);
				setTimeout(function() {
					column4.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
				}, 800);
				setTimeout(function() {
					column5.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
				}, 1000);
				setTimeout(function() {
					column6.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
				}, 1200);
				setTimeout(function() {
					column7.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
				}, 1400);
				setTimeout(function() {
					body.css(
						"background",
						"linear-gradient(270deg, #ff250d, #ff0059)"
					);
					body.css(
						"background-size",
						"400% 400%"
					);
					body.css(
						"-webkit-animation",
						"background-gradient 2s ease infinite"
					);
					body.css(
						"-moz-animation",
						"background-gradient 2s ease infinite"
					);
					body.css(
						"animation",
						"background-gradient 2s ease infinite"
					);
					headingRed.addClass(
						"heading-winner-yellow"
					);
					buttonRed.addClass(
						"next-game-button-wrapper-yellow"
					);
					board.css("margin-top", "21px");
					$(buttonRed).show();
					buttonRed.css("visibility", "visible");
					$(fireworks).show();
					$(headingRed).show();
					headingRed.css("visibility", "visible");
					$(hands).hide();
					buttonRed.css("visibility", "visible");
				}, 1400);
				$(buttonRed).on("click", function() {
					location.reload();
				});
			}
		}
	}
})();
