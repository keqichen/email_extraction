import fs from "fs";
import { text } from "stream/consumers";

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    let textString = data.toString();

    // for (let i = 0; i < textString.length; i++) {

    //     if (textString.substring(textString.length-13,textString.length) == '@softwire.com'){
    //         counter++;
    //     } else if (textString.substring(i, i+14) == '@softwire.com ') {
    //         counter++;
    //     }
    
    let regex = new RegExp ('^[A-Za-z.\'+%_]@\bsoftwire\b+\.\bcom\b$','g');
    
    let result = textString.matchAll(regex).length;
        
    console.log(result);
})




