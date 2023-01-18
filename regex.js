import fs from "fs";

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    let textString = data.toString();

    let regex = /@softwire.com\b/;
    let counter=0;

    for (let i=0;i<textString.length;i++){
        let result = textString.substring(i,i+13).match(regex);
        if (result !== null){
            counter++;
        }
    }

    console.log(counter);

})