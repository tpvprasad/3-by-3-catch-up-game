var p1currentIndex = 5;
var p2currentIndex = 9;
var targetIndex = 1;
// var Index;
var count1 = 0;
var count2 = 0;

function player1() {
  count1++;
  document.getElementById("player1").innerHTML = count1;
  do {
    targetIndex = Math.floor(Math.random() * 9) + 1;
  } while (targetIndex == p1currentIndex || targetIndex == p2currentIndex);
  document.getElementById("g" + targetIndex).style.backgroundColor = "red";
}

function player2() {
  count2++;
  document.getElementById("player2").innerHTML = count2;
  do {
    targetIndex = Math.floor(Math.random() * 9) + 1;
  } while (targetIndex == p1currentIndex || targetIndex == p2currentIndex);
  document.getElementById("g" + targetIndex).style.backgroundColor = "red";
}

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  // console.log(e.keyCode);

  positions = {
    1: {
      87: 1,
      68: 2,
      83: 4,
      65: 1,
    },
    2: {
      87: 2,
      68: 3,
      83: 5,
      65: 1,
    },
    3: {
      87: 3,
      68: 3,
      83: 6,
      65: 2,
    },
    4: {
      87: 1,
      68: 5,
      83: 7,
      65: 4,
    },
    5: {
      87: 2,
      68: 6,
      83: 8,
      65: 4,
    },
    6: {
      87: 3,
      68: 6,
      83: 9,
      65: 5,
    },
    7: {
      87: 4,
      68: 8,
      83: 7,
      65: 7,
    },
    8: {
      87: 5,
      68: 9,
      83: 8,
      65: 7,
    },
    9: {
      87: 6,
      68: 9,
      83: 9,
      65: 8,
    },
  };

  if (e.keyCode == 87) {
    console.log("UP");
    // console.log(p1currentIndex);
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if(updatedIndex != p2currentIndex){
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "lightblue";
    p1currentIndex = updatedIndex;
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "green";
    console.log(p1currentIndex);

    if (p1currentIndex == targetIndex) player1();

     } // let id = g+p1currentIndex;
    // document.getElementById()
  } else if (e.keyCode == 68) {
    console.log("RIGHT");
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if(updatedIndex != p2currentIndex){
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "lightblue";
    p1currentIndex = updatedIndex;
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "green";
    console.log(p1currentIndex);

    if (p1currentIndex == targetIndex) player1();}
  } else if (e.keyCode == 83) {
    console.log("DOWN");
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if(updatedIndex != p2currentIndex){
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "lightblue";
    p1currentIndex = updatedIndex;
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "green";
    console.log(p1currentIndex);

    if (p1currentIndex == targetIndex) player1();}
  } else if (e.keyCode == 65) {
    console.log("LEFT");
    let updatedIndex = positions[p1currentIndex][e.keyCode];
    if(updatedIndex != p2currentIndex){
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "lightblue";
    p1currentIndex = updatedIndex;
    document.getElementById("g" + p1currentIndex).style.backgroundColor =
      "green";
    console.log(p1currentIndex);

    if (p1currentIndex == targetIndex) player1();}
  }

  positions = {
    1: {
      38: 1,
      39: 2,
      40: 4,
      37: 1,
    },
    2: {
      38: 2,
      39: 3,
      40: 5,
      37: 1,
    },
    3: {
      38: 3,
      39: 3,
      40: 6,
      37: 2,
    },
    4: {
      38: 1,
      39: 5,
      40: 7,
      37: 4,
    },
    5: {
      38: 2,
      39: 6,
      40: 8,
      37: 4,
    },
    6: {
      38: 3,
      39: 6,
      40: 9,
      37: 5,
    },
    7: {
      38: 4,
      39: 8,
      40: 7,
      37: 7,
    },
    8: {
      38: 5,
      39: 9,
      40: 8,
      37: 7,
    },
    9: {
      38: 6,
      39: 9,
      40: 9,
      37: 8,
    },
  };

  if (e.keyCode == 38) {
    console.log("UP");
    // console.log(p1currentIndex);
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if(updatedIndex != p1currentIndex){
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "lightblue";
    p2currentIndex = updatedIndex;
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "yellow";
    console.log(p2currentIndex);

    if (p2currentIndex == targetIndex) player2();}

    // let id = g+p1currentIndex;
    // document.getElementById()
  } else if (e.keyCode == 39) {
    console.log("RIGHT");
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if(updatedIndex != p1currentIndex){
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "lightblue";
    p2currentIndex = updatedIndex;
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "yellow";
    console.log(p2currentIndex);

    if (p2currentIndex == targetIndex) player2();}
  } else if (e.keyCode == 40) {
    console.log("DOWN");
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if(updatedIndex != p1currentIndex){
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "lightblue";
    p2currentIndex = updatedIndex;
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "yellow";
    console.log(p2currentIndex);

    if (p2currentIndex == targetIndex) player2();}
  } else if (e.keyCode == 37) {
    console.log("LEFT");
    let updatedIndex = positions[p2currentIndex][e.keyCode];
    if(updatedIndex != p1currentIndex){
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "lightblue";
    p2currentIndex = updatedIndex;
    document.getElementById("g" + p2currentIndex).style.backgroundColor =
      "yellow";
    console.log(p2currentIndex);

    if (p2currentIndex == targetIndex) player2();}
  }
}

//     //first index
//   if(p1currentIndex == 5) {
//     if (e.keyCode == '38') {
//         // up arrow
//         document.getElementById('g2').style.backgroundColor= "green";
//         document.getElementById('g5').style.backgroundColor= "lightblue";
//         currentIndex = 2;
//         if(currentIndex == targetIndex) {
//          points();
//         }
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         document.getElementById('g8').style.backgroundColor= "green";
//         document.getElementById('g5').style.backgroundColor= "lightblue";
//         currentIndex = 8;
//         if(currentIndex == targetIndex) {
//             points();
//             }
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//        document.getElementById('g4').style.backgroundColor= "green";
//        document.getElementById('g5').style.backgroundColor= "lightblue";
//        currentIndex = 4;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//        document.getElementById('g6').style.backgroundColor= "green";
//        document.getElementById('g5').style.backgroundColor= "lightblue";
//        currentIndex = 6;
//        if(currentIndex == targetIndex) {
//         points();
//        }
//     }
// }

// //next index arrowing

//  else if (p1currentIndex == 2) {
//     if (e.keyCode == '40') {
//         // down arrow
//         document.getElementById('g5').style.backgroundColor= "green";
//         document.getElementById('g2').style.backgroundColor= "lightblue";
//         currentIndex = 5;
//         if(currentIndex == targetIndex) {
//             points();
//             }
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//        document.getElementById('g1').style.backgroundColor= "green";
//        document.getElementById('g2').style.backgroundColor= "lightblue";
//        currentIndex = 1;
//        if(currentIndex == targetIndex) {
//          points();
//         }
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//        document.getElementById('g3').style.backgroundColor= "green";
//        document.getElementById('g2').style.backgroundColor= "lightblue";
//        currentIndex = 3;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
//  }

//  // next index arrowing

//  else if (p1currentIndex == 1) {
//     if (e.keyCode == '40') {
//         // down arrow
//         document.getElementById('g4').style.backgroundColor= "green";
//         document.getElementById('g1').style.backgroundColor= "lightblue";
//         currentIndex = 4;
//         if(currentIndex == targetIndex) {
//          points();

//             }
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//        document.getElementById('g2').style.backgroundColor= "green";
//        document.getElementById('g1').style.backgroundColor= "lightblue";
//        currentIndex = 2;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
//  }
//  // next index arrowing

//  else if(p1currentIndex == 4) {
//     if (e.keyCode == '38') {
//         // up arrow
//         document.getElementById('g1').style.backgroundColor= "green";
//         document.getElementById('g4').style.backgroundColor= "lightblue";
//         currentIndex = 1;
//         if(currentIndex == targetIndex) {
//         points();
//         }
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         document.getElementById('g7').style.backgroundColor= "green";
//         document.getElementById('g4').style.backgroundColor= "lightblue";
//         currentIndex = 7;
//         if(currentIndex == targetIndex) {
//             points();
//             }
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//        document.getElementById('g5').style.backgroundColor= "green";
//        document.getElementById('g4').style.backgroundColor= "lightblue";
//        currentIndex = 5;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
// }
// // next index arrowing

// else if(p1currentIndex == 7) {
//     if (e.keyCode == '38') {
//         // up arrow
//         document.getElementById('g4').style.backgroundColor= "green";
//         document.getElementById('g7').style.backgroundColor= "lightblue";
//         currentIndex = 4;
//         if(currentIndex == targetIndex) {
//          points();
//         }
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//        document.getElementById('g8').style.backgroundColor= "green";
//        document.getElementById('g7').style.backgroundColor= "lightblue";
//        currentIndex = 8;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
// }
// // next index arrowing

// else if(p1currentIndex == 8) {
//     if (e.keyCode == '38') {
//         // up arrow
//         document.getElementById('g5').style.backgroundColor= "green";
//         document.getElementById('g8').style.backgroundColor= "lightblue";
//         currentIndex = 5;
//         if(currentIndex == targetIndex) {
//         points();
//         }
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//        document.getElementById('g7').style.backgroundColor= "green";
//        document.getElementById('g8').style.backgroundColor= "lightblue";
//        currentIndex = 7;
//        if(currentIndex == targetIndex) {
//          points();
//         }
//     }
//     else if (e.keyCode == '39') {
//        // right arrow
//        document.getElementById('g9').style.backgroundColor= "green";
//        document.getElementById('g8').style.backgroundColor= "lightblue";
//        currentIndex = 9;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
// }
// // next index arrowing

// else if(p1currentIndex == 9) {
//     if (e.keyCode == '38') {
//         // up arrow
//         document.getElementById('g6').style.backgroundColor= "green";
//         document.getElementById('g9').style.backgroundColor= "lightblue";
//         currentIndex = 6;
//         if(currentIndex == targetIndex) {
//         points();
//         }
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//        document.getElementById('g8').style.backgroundColor= "green";
//        document.getElementById('g9').style.backgroundColor= "lightblue";
//        currentIndex = 8;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
// }
// // next index arrowing

// else if(p1currentIndex == 6) {
//     if (e.keyCode == '38') {
//         // up arrow
//         document.getElementById('g3').style.backgroundColor= "green";
//         document.getElementById('g6').style.backgroundColor= "lightblue";
//         currentIndex = 3;
//         if(currentIndex == targetIndex) {
//           points();
//         }
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         document.getElementById('g9').style.backgroundColor= "green";
//         document.getElementById('g6').style.backgroundColor= "lightblue";
//         currentIndex = 9;
//         if(currentIndex == targetIndex) {
//             points();
//             }
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//        document.getElementById('g5').style.backgroundColor= "green";
//        document.getElementById('g6').style.backgroundColor= "lightblue";
//        currentIndex = 5;
//        if(currentIndex == targetIndex) {
//        points();
//         }
//     }
// }

// // next index arrowing

// else if(p1currentIndex == 3) {
//     if (e.keyCode == '40') {
//         // down arrow
//         document.getElementById('g6').style.backgroundColor= "green";
//         document.getElementById('g3').style.backgroundColor= "lightblue";
//         currentIndex = 6;
//         if(currentIndex == targetIndex) {
//             points();
//             }
//     }
//     else if (e.keyCode == '37') {
//        // left arrow
//        document.getElementById('g2').style.backgroundColor= "green";
//        document.getElementById('g3').style.backgroundColor= "lightblue";
//        currentIndex = 2;
//        if(currentIndex == targetIndex) {
//         points();
//         }
//     }
// }
// }
//Another Player
