import fs from "fs";

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    let textString = data.toString();

    let regex = /@softwire\.com\b/gi;
    let array = textString.match(regex);

    console.log(array.length);

})


    // The following wrong solution gives 301:
    // for (let i = 0; i < textString.length; i++) {
    //     let result = textString.substring(i, i + 13).match(regex);
    //     if (result !== null) {
    //         counter++;
    //     }
    // }