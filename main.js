const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < firstRow.length; i++) {
        if (firstRow.charAt(i) == "а") {
            count1++;
        }
        // console.log(count1);
    }
    for (let i = 0; i < secondRow.length; i++) {
        if (secondRow.charAt(i) == 'а') {
            count2++;
        }
        // console.log(count2)
    }
    if (count1 > count2) {
        console.log(firstRow);
    } else {
        console.log(secondRow);
    }
}   

console.log(getRow(firstRow, secondRow)); // мама мыла раму