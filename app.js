// make text
const $drinking = $("<div class='landingTitle'>").text("Drinking.").slideUp( 300 ).delay( 800 ).fadeIn( 100 );
const $bluff = $("<span>").text("Bluff.").slideUp( 300 ).delay( 1800 ).fadeIn( 100 );
const $dice = $("<span>").text("Dice!").slideUp( 300 ).delay( 2800 ).fadeIn(  100 );
const $tyler = $("<div class='tyler'>").text("by Tyler111").slideUp( 300 ).delay( 3800 ).fadeIn(  100 );
const $player1 = $("<div class='playerDisplay'>").text("Player 1")
const $player2 = $("<div class='playerDisplay'>").text("Player 2")
const $player1Bid = $("<div class='playerDisplay'>").text("Player 1 Bid")
const $player2Bid = $("<div class='playerDisplay'>").text("Player 2 Bid")
const $player2CatchesBluff = $("<div class='playerDisplay'>").text("Player 2 Caught Player 1's Bluff").css("color", "red");
const $player1CatchesBluff = $("<div class='playerDisplay'>").text("Player 1 Caught Player 2's Bluff").css("color", "red");
const $player2Wrong = $("<div class='playerDisplay'>").text("Player 1 is Master of Deception, Player 1 WINS").css("color", "red");
const $player1Wrong = $("<div class='playerDisplay'>").text("Player 2 is Master of Deception, Player 2 WINS").css("color", "red");



let $landingTitle = $drinking.append($bluff).append($dice)


const landingDice = ($("<img class='dice'>").attr("src", "https://i.ibb.co/kMqHdjN/5dices.jpg").height(200).width(200))
// const inputName = document.createElement("input").type("text");

// make buttons
const $rollButton1 = $("<button>").addClass("rollButton").text("Lets Roll Baby")
const $reRollButton1 = $("<button>").addClass("reRollButton").text("NOT HAPPY RE-Roll")
const $acceptBtn = $("<button>").addClass("reRollButton").text("HAPPY")
const $rollButton2 = $("<button>").addClass("rollButton").text("Lets Roll Baby")
const $reRollButton2 = $("<button>").addClass("reRollButton").text("NOT HAPPY RE-Roll")
const $acceptBtn2 = $("<button>").addClass("reRollButton").text("HAPPY")
const $leggo = $("<button>").addClass("leggo").text("LEGGO")
const $sryIBlur1 = $("<button>").addClass("sorry").text("Sry I Blurr")
const $sryIBlur2 = $("<button>").addClass("sorry").text("Sry I Blurr")
const $okCan = $("<button>").addClass("okCan").text("OK Can!").css("color", "red");
const $okCan2 = $("<button>").addClass("okCan").text("OK Can!").css("color", "red");
const $bid2 = $("<button>").addClass("sweat").text("I  want  to  BID!").css("color", "red");
const $bid1 = $("<button>").addClass("sweat").text("I  want  to  BID!").css("color", "red");
const $callBluff2 = $("<button>").addClass("sweat").text("I  call  BLUFF!").css("color", "red");
const $callBluff1 = $("<button>").addClass("sweat").text("I  call  BLUFF!").css("color", "red");

// $callBluff2.on("click", () => {
//   $(".container").empty().append($player1)
//   numToDice1($player1Arr, $player1)
//   $(".container").append($player2)
//   numToDice1($player2Arr, $player2)
//   $(".container").append($player1Bid)
//   // $player1Bid.append()
//   for (let i =0; i < +$bidConfirmP1[0]; i++) {
//     console.log($bidConfirmP1[0]);
//     if ($bidDice1[0] === 1) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", 1).height(100).width(100))} 
//     else if ($bidDice1[0] === 2) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", 2).height(100).width(100))}
//     else if ($bidDice1[0] === 3) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", 3).height(100).width(100))}
//     else if ($bidDice1[0] === 4) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", 4).height(100).width(100))}
//     else if ($bidDice1[0] === 5) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", 5).height(100).width(100))}
//     else if ($bidDice1[0] === 6) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", 6).height(100).width(100))}
//   }
//   ////// WIN CONDITION for Player 2
//   const $countOccurrences = (arr, n, x) => {
  
//     for (let i = 0; i < n; i++) {
//       if (x === arr[i]) $countPool++;
//     }
       
//   }
  
//   $countOccurrences($pool, $pool.length, $bidDice1[0])
  
//   if (count >= $bidConfirmP1[0]) {
//     console.log("player 1 was truthful");
//     $(".container").append($player2Wrong)
//   } else {
//     console.log("player 1 caught");
//     $(".container").append($player2CatchesBluff)
//     }


// })

let $player1Arr = []
let $player2Arr = []
let $pool = $player1Arr.concat($player2Arr)
let $countPool = 0
const NUMBER_OF_DICE = 5

// create and store player dices
const $rollDice1 = (arr) => {
  for (i=0; i<NUMBER_OF_DICE; i++) {
    const randNum = Math.ceil(Math.random()*6);
    arr.push(randNum);

  };
};

// present pictures of players dices
const numToDice1 = (arr, parent) => {
  for (i = 0; i <NUMBER_OF_DICE; i++){ 
  if (arr[i] === 1) {diceURL= "https://i.ibb.co/tqvRF9n/oneFace.png"}
  else if (arr[i] === 2) {diceURL = "https://i.ibb.co/ctWXC65/twoFace.png"}
  else if (arr[i] === 3) {diceURL= "https://i.ibb.co/x5tVtcF/three-Face.png"}
  else if (arr[i] === 4) {diceURL= "https://i.ibb.co/0QsBwD8/fourFace.png"}
  else if (arr[i] === 5) {diceURL= "https://i.ibb.co/P4W27hm/fiveFace.png"}
  else if (arr[i] === 6) {diceURL="https://i.ibb.co/hWr196n/sixFace.png"}
  parent.append($("<img class='dice'>").attr("src", diceURL).height(100).width(100))
  };

}

const $divAssignToDialog = $("<div class='dialog'>")



// build quantity table
let $bidQuantityTable = $("<table>")
let bidQuantity = [3, 4, 5, 6, 7, 8, 9, 10];
const $buildBidQuantityTable = () => {
  // const $bidQuantityTable = $("<table>")
  $bidQuantityTable.html(
    `<thead>
        <th colspan="3"> Quantity -> (HOW MANY AHH??)</th>
    </thead>`
  );
 for (let i in bidQuantity) {
    console.log(bidQuantity[i]);

    const $quantityRow = $("<td>");
    const $qtyCell = $("<button>").addClass("qty-btn").text(bidQuantity[i]);
    $quantityRow.append($qtyCell)
    $bidQuantityTable.append($quantityRow)
    
    $quantityRow.append($qtyCell)
    $bidQuantityTable.append($quantityRow)
  $(".container").append($bidQuantityTable);
}}

//build face-value table
let bidFace = [ 1, 2 , 3, 4, 5, 6]
const $bidFaceRow = $("<td>");
const $oneFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", 1).height(100).width(100)
const $twoFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", 2).height(100).width(100)
const $threeFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", 3).height(100).width(100)
const $fourFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", 4).height(100).width(100)
const $fiveFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", 5).height(100).width(100)
const $sixFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", 6).height(100).width(100)
const $dicePicToArray = () => {
  console.log(bidFace);
  if (bidFace.includes(1)) {$bidFaceRow.append($oneFace)}
  if (bidFace.includes(2)) {$bidFaceRow.append($twoFace)}
  if (bidFace.includes(3)) {$bidFaceRow.append($threeFace)}
  if (bidFace.includes(4)) {$bidFaceRow.append($fourFace)}
  if (bidFace.includes(5)) {$bidFaceRow.append($fiveFace)}
  if (bidFace.includes(6)) {$bidFaceRow.append($sixFace)}
  $(".bidDice").on("click", (event) => {
      
    $bidDice2 = []
    $bidDice2.push(parseInt(event.target.id))
    console.log($bidDice2)
    $bidConfirmCell.empty();
    for (let i =0; i < +$bidConfirmP2[0]; i++) {
      console.log($bidConfirmP2[0]);
      console.log($bidDice2);
      if ($bidDice2[0] === 1) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", "1").height(100).width(100))} 
      else if ($bidDice2[0] === 2) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", "2").height(100).width(100))}
      else if ($bidDice2[0] === 3) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", "3").height(100).width(100))}
      else if ($bidDice2[0] === 4) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", "4").height(100).width(100))}
      else if ($bidDice2[0] === 5) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", "5").height(100).width(100))}
      else if ($bidDice2[0] === 6) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", "6").height(100).width(100))}
    }
   
  })
}

/////////////// bidding dices to choose from
const $bidFaceTable = $("<table>").addClass("faceValueTable")
// const $oneFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", 1).height(100).width(100)
//   const $twoFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", 2).height(100).width(100)
//   const $threeFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", 3).height(100).width(100)
//   const $fourFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", 4).height(100).width(100)
//   const $fiveFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", 5).height(100).width(100)
//   const $sixFace = $("<img class='bidDice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", 6).height(100).width(100)
  
const $buildBidFaceTable = () => {
  // const $bidFaceTable = $("<table>").addClass("faceValueTable")
  $bidFaceTable.html(
    `<thead>
      <tr>
        <th th colspan="3">Face-Value -> (What Dice??)</th>     
      </tr>
    </thead>`
  );
  
  $dicePicToArray();
  // if (bidFace.includes(1)) {$bidFaceRow.append($oneFace)}
  // if (bidFace.includes(2)) {$bidFaceRow.append($twoFace)}
  // if (bidFace.includes(3)) {$bidFaceRow.append($threeFace)}
  // if (bidFace.includes(4)) {$bidFaceRow.append($fourFace)}
  // if (bidFace.includes(5)) {$bidFaceRow.append($fiveFace)}
  // if (bidFace.includes(6)) {$bidFaceRow.append($sixFace)}
  $bidFaceTable.append($bidFaceRow)
  $(".container").append($bidFaceTable);
  // for (let i in bidFace) {
  
 


  // }
}

// build bid table
let $bidConfirmP1 = [];
let $bidDice1 = [];
let $bidConfirmP2 = [];
let $bidDice2 = [];
let $currentBid = [];
const $bidConfirmTable = $("<table>").attr("ID", "myBid")
$bidConfirmTable.html(
  `<thead>
      <th colspan="3"> My Bid</th>
  </thead>`
);
const $bidConfirmRow = $("<td >");
    const $bidConfirmCell = $("<tr  colspan='3' >").attr("ID", "$bidConfirm")
const $buildBidConfirmTable = () => {

 
    console.log($bidConfirmP1);

    
    
    $bidConfirmRow.append($bidConfirmCell)
    $bidConfirmTable.append($bidConfirmRow)
    $(".container").append($bidConfirmTable);

    $currentBid = $bidConfirm
}

const callBluff = () => {
  $(".container").append(currentBid)
  $(".container").append($player1);
  numToDice1($player1Arr, $(".container"));
  $(".container").append($player2);
  numToDice1($player2Arr, $(".container"));
}













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

  });
  
  // click roll button
  $rollButton1.one('click',  () =>{
    $rollDice1($player1Arr);
    console.log("player 1", $player1Arr);
    
      numToDice1($player1Arr, $(".container"));
      $rollButton1.remove();
      $(".playerDisplay").append($reRollButton1).append($acceptBtn);
  });

  //click REROLL
  $reRollButton1.on('click',  () =>{
    $player1Arr = [];
    $(".dice").remove();
    console.log("player 1", $player1Arr);
    $rollDice1($player1Arr);
  
      numToDice1($player1Arr, $(".container"));
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
    $rollDice1($player2Arr);
    console.log("player2", $player2Arr);
    
      numToDice1($player2Arr, $(".container"));
      $rollButton2.remove();
      $(".playerDisplay").append($reRollButton2).append($acceptBtn2);
  })
  //click REROLL
  $reRollButton2.on('click',  () =>{
    $player2Arr = [];
    $(".dice").remove();
    console.log("player 2", $player2Arr);
    $rollDice1($player2Arr);
  
      numToDice1($player2Arr, $(".container"));
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
    $pool = $player1Arr.concat($player2Arr)
  })


  //gameplay
  //////////////////////
  //player 1 start bid
  //////////////////////
  $leggo.one('click',  () =>{
    ($reRollButton1).remove();
    ($acceptBtn).remove();
    $(".container").empty().append($player1)
    // $player1.append($("<div>").text(": Bid"));
    $(".container").append($sryIBlur1);
  
    $sryIBlur1.one("click", () => {
      $("body").append($divAssignToDialog);
      numToDice1($player1Arr, $divAssignToDialog)
      $(".dialog").dialog()
   })      
    // BID tables creation
    $buildBidQuantityTable();
    $buildBidFaceTable();
    $buildBidConfirmTable();

    $(".qty-btn").on("click", () =>{
      $divAssignToDialog.remove();
      $bidConfirmP1 = []
      // $bidConfirm = (event.target.innerText)
      $bidConfirmP1.push(parseInt(event.target.innerText));
      console.log($bidConfirmP1)
    
      // $bidConfirmCell.text($bidConfirm[0])

    });

    $(".bidDice").on("click", (event) => {
      
      $bidDice1 = []
      $bidDice1.push(parseInt(event.target.id))
      console.log($bidDice1)
      $bidConfirmCell.empty();
      for (let i =0; i < +$bidConfirmP1[0]; i++) {
        console.log($bidConfirmP1[0]);
        if ($bidDice1[0] === 1) {$bidConfirmCell.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", 1).height(100).width(100))} 
        else if ($bidDice1[0] === 2) {$bidConfirmCell.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", 2).height(100).width(100))}
        else if ($bidDice1[0] === 3) {$bidConfirmCell.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", 3).height(100).width(100))}
        else if ($bidDice1[0] === 4) {$bidConfirmCell.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", 4).height(100).width(100))}
        else if ($bidDice1[0] === 5) {$bidConfirmCell.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", 5).height(100).width(100))}
        else if ($bidDice1[0] === 6) {$bidConfirmCell.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", 6).height(100).width(100))}
      }
      $bidConfirmTable.append($okCan)
    })
  })

    //////////////////////
  // start player 2 call bluff
  //////////////////////
  $callBluff2.on("click", () => {
    $(".container").empty().append($player1)
    numToDice1($player1Arr, $player1)
    $(".container").append($player2)
    numToDice1($player2Arr, $player2)
    $(".container").append($player1Bid)
    // $player1Bid.append()
    for (let i =0; i < +$bidConfirmP1[0]; i++) {
      console.log($bidConfirmP1[0]);
      if ($bidDice1[0] === 1) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", 1).height(100).width(100))} 
      else if ($bidDice1[0] === 2) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", 2).height(100).width(100))}
      else if ($bidDice1[0] === 3) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", 3).height(100).width(100))}
      else if ($bidDice1[0] === 4) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", 4).height(100).width(100))}
      else if ($bidDice1[0] === 5) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", 5).height(100).width(100))}
      else if ($bidDice1[0] === 6) {$player1Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", 6).height(100).width(100))}
    }
    ////// WIN CONDITION for Player 2
    const $countOccurrences = (arr, n, x) => {
    
      for (let i = 0; i < n; i++) {
        if (x === arr[i] || arr[i] === 1) $countPool++;
      }
         
    }
    
    $countOccurrences($pool, $pool.length, $bidDice1[0])
    
    if ($countPool >= $bidConfirmP1[0]) {
      console.log("player 1 was truthful");
      $(".container").append($player2Wrong)
    } else {
      console.log("player 1 caught");
      $(".container").append($player2CatchesBluff)
      }
  
  
  })



  //////////////////////
  // start player 2 bid
  //////////////////////
     $okCan.on("click", () => {
      
      $(".container").empty().append($player2)
      $okCan.remove();
      $reRollButton2.remove()
      $acceptBtn2.remove()
      $bidConfirmTable.remove();

      $(".container").append($bid2).append($callBluff2)
     })

  $bid2.on("click", () => {
    $bid2.remove();
    $callBluff2.remove();
    $player2.append($("<div>").text(": Bid"));
    $(".container").append($sryIBlur2);
  
    $sryIBlur2.one("click", () => {
      $("body").append($divAssignToDialog);
      console.log($player2Arr)
      numToDice1($player2Arr, $divAssignToDialog)
      
      $(".dialog").dialog()
   })      
   //////// this removes quantity buttons of lower number
   for (let i = bidQuantity.length; i> 0 ; i--) {
    if (bidQuantity[i] === $bidConfirmP1[0]) {
       
       bidQuantity = (bidQuantity.slice(i))
       
      }
    }

    // BID tables creation
    $buildBidQuantityTable();
    $buildBidFaceTable();
    $buildBidConfirmTable();
    $bidConfirmCell.empty();
    $bidConfirmTable.append($okCan2)
    $(".qty-btn").on("click", () =>{

     $bidConfirmCell.empty();
      $bidConfirmP2 = []
      $bidConfirmP2.push(parseInt(event.target.innerText));
      console.log("player 2 bid quantity ", $bidConfirmP2)
      console.log("player 1 bid quantity ", $bidConfirmP1)
      bidFace = [1, 2, 3, 4, 5, 6]
      $dicePicToArray();
      console.log($bidDice1[0])

      ////// if clicked the same quantity, this removes smaller dice faces
      if ($bidConfirmP2[0] === $bidConfirmP1[0]) {
          console.log($bidDice1[0])
        const findSameDice = bidFace.indexOf($bidDice1[0])
        bidFace = bidFace.slice(findSameDice +1);
        console.log(bidFace)
        $bidFaceRow.empty();
        $dicePicToArray();
      } 
     

    });

    // $(".bidDice").on("click", (event) => {
      
    //   $bidDice2 = []
    //   $bidDice2.push(parseInt(event.target.id))
    //   console.log($bidDice2)
    //   $bidConfirmCell.empty();
    //   for (let i =0; i < +$bidConfirmP2[0]; i++) {
    //     console.log($bidConfirmP2[0]);
    //     console.log($bidDice2);
    //     if ($bidDice2[0] === 1) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", "1").height(100).width(100))} 
    //     else if ($bidDice2[0] === 2) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", "2").height(100).width(100))}
    //     else if ($bidDice2[0] === 3) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", "3").height(100).width(100))}
    //     else if ($bidDice2[0] === 4) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", "4").height(100).width(100))}
    //     else if ($bidDice2[0] === 5) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", "5").height(100).width(100))}
    //     else if ($bidDice2[0] === 6) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", "6").height(100).width(100))}
    //   }
    //   $bidConfirmTable.append($okCan2)
    // })
  })




  //////////////////////
  // start player 1 call bluff
  //////////////////////
  $callBluff1.on("click", () => {
    $(".container").empty().append($player1)
    numToDice1($player1Arr, $player1)
    $(".container").append($player2)
    numToDice1($player2Arr, $player2)
    $(".container").append($player2Bid)
    // $player2Bid.append()
    for (let i =0; i < +$bidConfirmP2[0]; i++) {
      console.log($bidConfirmP2[0]);
      if ($bidDice2[0] === 1) {$player2Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", 1).height(100).width(100))} 
      else if ($bidDice2[0] === 2) {$player2Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", 2).height(100).width(100))}
      else if ($bidDice2[0] === 3) {$player2Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", 3).height(100).width(100))}
      else if ($bidDice2[0] === 4) {$player2Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", 4).height(100).width(100))}
      else if ($bidDice2[0] === 5) {$player2Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", 5).height(100).width(100))}
      else if ($bidDice2[0] === 6) {$player2Bid.append($("<img class='bidDice'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", 6).height(100).width(100))}
    }
    ////// WIN CONDITION for Player 1
    const $countOccurrences = (arr, n, x) => {
    
      for (let i = 0; i < n; i++) {
        if (x === arr[i] || arr[i] === 1) $countPool++;
      }
         
    }
    
    $countOccurrences($pool, $pool.length, $bidDice2[0])
    
    if ($countPool >= $bidConfirmP2[0]) {
      console.log("player 2 was truthful");
      $(".container").append($player1Wrong)
      } else {
        console.log("player 2 caught");
        $(".container").append($player1CatchesBluff)
      }
  
  
  })
  /////////////////////////////
  //Player 1 bid again
  /////////////////////////////
  $okCan2.on("click", () => {
    
    $(".container").empty().append($player1)
   
    
    
    $(".container").append($bid1).append($callBluff1);
    $okCan2.remove();



  })
  $bid1.on("click", () => {
        $bid1.remove();
        $callBluff1.remove();
        
        $(".container").append($sryIBlur1);
      
        $sryIBlur1.one("click", () => {
          $("body").append($divAssignToDialog);
          console.log($player1Arr)
          numToDice1($player1Arr, $divAssignToDialog)
          
          $(".dialog").dialog()
       })      
       //////// this removes quantity buttons of lower number
       for (let i = bidQuantity.length; i> 0 ; i--) {
        if (bidQuantity[i] === $bidConfirmP2[0]) {
           
           bidQuantity = (bidQuantity.slice(i))
           
          }
        }
    
        // BID tables creation
        $buildBidQuantityTable();
        $buildBidFaceTable();
        $buildBidConfirmTable();
        $bidConfirmCell.empty();
        $bidConfirmTable.append($okCan)

        $(".qty-btn").on("click", () =>{
    
         $bidConfirmCell.empty();
          $bidConfirmP1 = []
          $bidConfirmP1.push(parseInt(event.target.innerText));
          console.log("player 2 bid quantity ", $bidConfirmP2)
          console.log("player 1 bid quantity ", $bidConfirmP1)
          bidFace = [1, 2, 3, 4, 5, 6]
          $dicePicToArray();
          console.log("bidDice1 ", $bidDice1[0])
          console.log("bidDice2 ", $bidDice2[0])
    
          ////// if clicked the same quantity, this removes smaller dice faces
          if ($bidConfirmP1[0] === $bidConfirmP2[0]) {
              console.log("bidDice2 ", $bidDice2[0])
            const findSameDice = bidFace.indexOf($bidDice2[0])
            bidFace = bidFace.slice(findSameDice +1);
            console.log(bidFace)
            $bidFaceRow.empty();
            $dicePicToArray();
          } 
         
    
        });


 




    
        // $(".bidDice").on("click", (event) => {
          
        //   $bidDice2 = []
        //   $bidDice2.push(parseInt(event.target.id))
        //   console.log($bidDice2)
        //   $bidConfirmCell.empty();
        //   for (let i =0; i < +$bidConfirmP2[0]; i++) {
        //     console.log($bidConfirmP2[0]);
        //     console.log($bidDice2);
        //     if ($bidDice2[0] === 1) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/tqvRF9n/oneFace.png").attr("id", "1").height(100).width(100))} 
        //     else if ($bidDice2[0] === 2) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/ctWXC65/twoFace.png").attr("id", "2").height(100).width(100))}
        //     else if ($bidDice2[0] === 3) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/x5tVtcF/three-Face.png").attr("id", "3").height(100).width(100))}
        //     else if ($bidDice2[0] === 4) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/0QsBwD8/fourFace.png").attr("id", "4").height(100).width(100))}
        //     else if ($bidDice2[0] === 5) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/P4W27hm/fiveFace.png").attr("id", "5").height(100).width(100))}
        //     else if ($bidDice2[0] === 6) {$bidConfirmCell.append($("<img class='bidDice2'>").attr("src", "https://i.ibb.co/hWr196n/sixFace.png").attr("id", "6").height(100).width(100))}
          // }
        //   $bidConfirmTable.append($okCan2)
        // })
      })
 





}
$(main);