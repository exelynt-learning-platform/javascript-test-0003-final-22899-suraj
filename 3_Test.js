let n = 6;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {

        if ((i + j) % 2 === 0) {
            row += "1 ";
        } else {
            row += "0 ";
        }

    }

    console.log(row.trim());
}