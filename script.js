var matrix = [

];

let xerk = 10;
let ylay = 10;

var side = 50;
var grassArr = [];
var grasseaterArr = [];
var predatorArr = [];
var spiderArr = [];
var dambArr = []


function setup() {

  for (let i = 0; i < ylay; i++) {
      matrix.push([])
      for (let l = 0; l < xerk; l++) {
          matrix[i].push(random([0, 0, 0, 2,2,3, 3, 1, 1, 1, 2,3,4,5,1,1,1]))
      }
  }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grasseaterArr.push(ge);

            } else if (matrix[y][x] == 3) {
                var pe = new Predator(x, y, 3)
                predatorArr.push(pe);

            }else if (matrix[y][x] == 4) {
                var sp = new spider(x, y, 4)
                spiderArr.push(sp);

            }else if (matrix[y][x] == 5) {
                var sp = new damb(x, y, 5)
                dambArr.push(sp);

            }
        }
    }
}



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 5) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }for(var i in spiderArr){
      spiderArr[i].move();
      spiderArr[i].eat();
      spiderArr[i].mul();
      spiderArr[i].die();
  }for(var i in dambArr) {
      dambArr[i].move();
      dambArr[i].eat();
      dambArr[i].mul();
      dambArr[i].die();
  }
}
