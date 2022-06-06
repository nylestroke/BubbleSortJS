let table = Array.from({length: 20}, () => Math.floor(Math.random() * 20));

document.getElementById("unsortedArray").innerHTML = table.join(' , ');

function sort() {
    let tableWidth = table.length;

    for (let i = 0; i < tableWidth; i++) {
        for (let j = 0; j < tableWidth - 1; j++) {
            if (table[j] > table[j + 1]) {
                let temporary = table[j];
                table[j] = table[j + 1];
                table[j + 1] = temporary;
            }
        }
    }
    document.getElementById("sortedArray").innerHTML = table.join(' , ');
}
