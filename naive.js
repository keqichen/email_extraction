import fs from "fs";
import { text } from "stream/consumers";

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    let textString = data.toString();
    let counter=0;

    for (let i = 0; i < textString.length; i++) {

        if (textString.substring(i, i+14)=='@softwire.com ' || textString.substring(i, i+15) == '@softwire.com'+'\r\n') {
            counter++;
        }
} 
    console.log(counter);

})




