const $drinking = $("<div class='landingTitle'>").text("Drinking.")//.slideUp( 300 ).delay( 800 ).fadeIn( 100 );
const $bluff = $("<span>").text("Bluff.")//.slideUp( 300 ).delay( 1800 ).fadeIn( 100 );
const $dice = $("<span>").text("Dice!")//.slideUp( 300 ).delay( 2800 ).fadeIn(  100 );
const $player1 = $("<div class='playerDisplay'>").text("Player 1")
const $player2 = $("<div class='playerDisplay'>").text("Player 2")

let $landingTitle = $drinking.append($bluff).append($dice)

const $tyler = $("<div class='tyler'>").text("by Tyler111")//.slideUp( 300 ).delay( 3800 ).fadeIn(  100 );
const landingDice = ($("<img class='dice'>").attr("src", "https://i.ibb.co/kMqHdjN/5dices.jpg").height(200).width(200))
// const inputName = document.createElement("input").type("text");

const $rollButton1 = $("<button>").addClass("rollButton").text("Lets Roll Baby")
const $reRollButton1 = $("<button>").addClass("reRollButton").text("NOT HAPPY RE-Roll")
const $acceptBtn = $("<button>").addClass("reRollButton").text("HAPPY")
const $rollButton2 = $("<button>").addClass("rollButton").text("Lets Roll Baby")
const $reRollButton2 = $("<button>").addClass("reRollButton").text("NOT HAPPY RE-Roll")
const $acceptBtn2 = $("<button>").addClass("reRollButton").text("HAPPY")
const $leggo = $("<button>").addClass("leggo").text("LEGGO")
const $sryIBlur1 = $("<button>").addClass("sorry").text("Sry I Blurr")
const $sryIBlur2 = $("<button>").addClass("sorry").text("Sry I Blurr")

let $player1Arr = []
let $player2Arr = []

const $rollDice1 = () => {
  for (i=0; i<5; i++) {
    const randNum = Math.ceil(Math.random()*6);
    $player1Arr.push(randNum);

  };
};

const $rollDice2 = () => {
  for (i=0; i<5; i++) {
    const randNum = Math.ceil(Math.random()*6);
    $player2Arr.push(randNum);

  };
};

const numToDice1 = () =>{
  if ($player1Arr[i] === 1) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").height(100).width(100))}
  else if ($player1Arr[i] === 2) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").height(100).width(100))}
  else if ($player1Arr[i] === 3) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").height(100).width(100))}
  else if ($player1Arr[i] === 4) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").height(100).width(100))}
  else if ($player1Arr[i] === 5) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").height(100).width(100))}
  else if ($player1Arr[i] === 6) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").height(100).width(100))}
};

const numToDice2 = () =>{
  if ($player2Arr[i] === 1) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").height(100).width(100))}
  else if ($player2Arr[i] === 2) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").height(100).width(100))}
  else if ($player2Arr[i] === 3) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").height(100).width(100))}
  else if ($player2Arr[i] === 4) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").height(100).width(100))}
  else if ($player2Arr[i] === 5) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").height(100).width(100))}
  else if ($player2Arr[i] === 6) {$(".container").append($("<img class='dice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").height(100).width(100))}
};


// build quantity table
const quantity = [3, 4, 5, 6, 7, 8, 9, 10];
const $buildQuantityTable = () => {
  const $quantityTable = $("<table>").addClass("qty-table");
  $quantityTable.html(
    `<thead>
      <tr>
        <th>Quantity</th>
        
      </tr>
    </thead>`
  );
 for (let i in quantity) {
    console.log(quantity[i]);

    const $quantityRow = $("<tr>");
    const $qtyCell = $("<td>").addClass("qty").text(quantity[i]);
    $quantityRow.append($qtyCell)
    $quantityTable.append($quantityRow)
  
  $(".container").append($quantityTable);
}}

//build face-value table
const faceValue = ["oneFace", "twoFace", "threeFace", "fourFace", "fiveFace", "sixFace"]
const $buildFVTable = () => {
  const $FVTable = $("<table>").addClass("FV-table");
  $FVTable.html(
    `<thead>
      <tr>
        <th>Face-Value</th>
        
      </tr>
    </thead>`
  );
 for (let i in faceValue) {
    console.log(faceValue[i]);

    const $FVRow = $("<tr>");
    const $FVCell = $("<td>").addClass("FV").text(faceValue[i]);
    $FVRow.append($FVCell)
    $FVTable.append($FVRow)
  
  $(".qty-table").append($FVTable);
}}



const main = () => {
 
  //landing page
  $(".container").append($landingTitle).append($tyler)
  // const $image = $("<img>").attr("src", `${landDiceURL}`)
  // // image.src = landDiceURL;

  
// on click
  $(document).one('click', () => { 
    console.log("lets go");
    $landingTitle.remove();
    $tyler.remove();
    $(".container").append($player1)
    $(".container").append($rollButton1);
    // $image.remove();

//   //   $(".container").append($('<input>').attr({
//   //     type: 'text',
//   //     id: 'player1',
//   //     name: 'Player 1 Name:'
//   // }));
    
  });
  
  // click roll button
  $rollButton1.one('click',  () =>{
    $rollDice1();
    console.log("player 1", $player1Arr);
    for (i = 0; i <5; i++){ 
      numToDice1()};
      $rollButton1.remove();
      $(".playerDisplay").append($reRollButton1).append($acceptBtn);
  });
  //click REROLL
  $reRollButton1.on('click',  () =>{
    $player1Arr = [];
    $(".dice").remove();
    console.log("player 1", $player1Arr);
    $rollDice1();
    for (i = 0; i <5; i++){ 
      numToDice1()};
    console.log("player 1", $player1Arr);
  })
  //player 1 click ACCEPT, 
  
  //start player 2 turn
  $acceptBtn.one('click',  () =>{
    $player1.remove();
    $(".dice").remove();
    $(".container").append($player2)
    $(".container").append($rollButton2);
  })
  $rollButton2.one('click',  () =>{
    $rollDice2();
    console.log("player2", $player2Arr);
    for (i = 0; i <5; i++){ 
      numToDice2()};
      $rollButton2.remove();
      $(".playerDisplay").append($reRollButton2).append($acceptBtn2);
  })
  //click REROLL
  $reRollButton2.on('click',  () =>{
    $player2Arr = [];
    $(".dice").remove();
    console.log("player 2", $player2Arr);
    $rollDice2();
    for (i = 0; i <5; i++){ 
      numToDice2()};
    console.log("player2", $player2Arr);
  })
  $acceptBtn2.on('click',  () =>{
    console.log("player1", $player1Arr)
    console.log("player2", $player2Arr)
    $player2.remove();
    $(".dice").remove();
    $(".container").append($("<div class='playerDisplay'>").text("Player 1")).css("font-size", "10px")
    $(".container").append($("<div class='playerDisplay'>").text("Player 2")).css("font-size", "10px")

    $(".container").append($leggo);
  })


  //gameplay
  $leggo.on('click',  () =>{
    ($reRollButton1).remove();
    ($acceptBtn).remove();
    $(".container").empty().append($player1)
    $player1.append($("<div>").text(": Bid"));
    $(".container").append($sryIBlur1);
    $sryIBlur1.on("click", "window.alert(numToDice1())");
   
    

// BID tables creation
  $buildQuantityTable();
  $buildFVTable();
  })


}
$(main);