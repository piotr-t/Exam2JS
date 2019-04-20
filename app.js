const board = [
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
    ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
    ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
];
let c = 0;
let aaa = 0;
let direction = { x: 1, y: 1 };
board[7][10] = "1";
board[1][1] = "0";
let position = { x: 10, y: 7 };
let start = {};
start.x = position.x;
start.y = position.y;
direction.y = -direction.y;
const canvas = document.getElementById('canvas');


const creaTeplate = () => {
    let zero = 50;
    for (let index = 0; index < board[0].length; index++) {
        let inn = index;
        let pozY = zero + index * 50;
        let pozX;
        for (let index1 = 0; index1 < board.length; index1++) {
            pozX = zero + index1 * 50;
            let ctx = canvas.getContext('2d');
            ctx.strokeRect(pozY, pozX, 50, 50);
            if (board[index1][inn] === "X") {
                ctx.fillStyle = "#217a12";
                ctx.fillRect(pozY, pozX, 50, 50);
            }
            if (board[index1][inn] === "0") {
                ctx.fillStyle = "#bed3f4";
                ctx.fillRect(pozY, pozX, 50, 50);
            }
            if (board[index1][inn] === "Y") {
                ctx.fillStyle = "#492610";
                ctx.fillRect(pozY, pozX, 50, 50);
            }
            if (board[index1][inn] === "2") {
                ctx.fillStyle = "blue";
                ctx.fillRect(pozY, pozX, 50, 50);
            }
            if (board[index1][inn] === "1") {
                ctx.fillStyle = "#e50b0b";
                ctx.fillRect(pozY, pozX, 50, 50);
            }
        }

    }

}
creaTeplate();
let move = () => {
    let setDirection;
    if (board[position.y][position.x] !== "2") {
        board[position.y][position.x] = "0";
        if (board[position.y + direction.y][position.x] === "X") {
            direction.y = -direction.y;
        }
        if (board[position.y + direction.y][position.x] === "Y") {
            board[position.y + direction.y][position.x] = "0";
            setDirection = Math.floor(Math.random() * 100);
            setDirection > 75 ? direction.x = direction.x : direction.y = direction.y;
            setDirection > 50 && setDirection <= 75 ? direction.x = -direction.x : direction.y = direction.y;
            setDirection > 25 && setDirection <= 50 ? direction.y = -direction.y : direction.x = direction.x;

        }
        if (board[position.y][position.x + direction.x] === "Y") {
            board[position.y][position.x + direction.x] = "0"
            setDirection = Math.floor(Math.random() * 100);
            setDirection > 75 ? direction.x = direction.x : direction.y = direction.y;
            setDirection > 50 && setDirection <= 75 ? direction.x = -direction.x : direction.y = direction.y;
            setDirection > 25 && setDirection <= 50 ? direction.y = -direction.y : direction.x = direction.x;

        }
        if (board[position.y][position.x + direction.x] === "X") {
            direction.x = -direction.x;
        }
        if (board[position.y + direction.y][position.x + direction.x] === "X") {
            direction.x = -direction.x;
            direction.y = -direction.y;
        }
        if (board[position.y + direction.y][position.x + direction.x] === "Y") {
            setDirection = Math.floor(Math.random() * 100);
            setDirection > 75 ? direction.x = direction.x : direction.y = direction.y;
            setDirection > 50 && setDirection <= 75 ? direction.x = -direction.x : direction.y = direction.y;
            setDirection > 25 && setDirection <= 50 ? direction.y = -direction.y : direction.x = direction.x;
        }
        position.y += direction.y;
        position.x += direction.x;
        board[position.y][position.x] = "1";

    }

    if (start.x === position.x && start.y === position.y) {


        position.y = position.y;
        position.x = position.x;
        board[position.y][position.x] = "2";
        clearInterval(tim);

        creaTeplate();
        alert("wygrana");

    }
    if (c === 30) {
        alert("nie udało się");
        clearInterval(tim);
    }

    c++;
    creaTeplate();

}
let tim = setInterval(move, 100);




