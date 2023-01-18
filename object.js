import fs from "fs";
import { text } from "stream/consumers";

fs.readFile('test.txt', (err, data) => {
    if (err) throw err;

    let textString = data.toString();

    const emailReg = /(@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;

    let emailArray = textString.match(emailReg); 

    let object = emailArray.reduce(function(count,currentValue){
        return (count[currentValue]? ++count[currentValue] : (count[currentValue] = 1),
        count);
    },
{});

console.log(object);

    // For-loop and map solution:
    //let domainMap=new Map();

    // for (let i=0;i<emailArray.length;i++){
    //     let counter=0;
    //     for (let j=0;j<emailArray.length;j++){
    //         if (emailArray[i]==emailArray[j]){
    //             counter++;
    //         }

    //     domainMap.set(emailArray[i],counter);
    //     }
    // }

    // console.log(domainMap);
})

