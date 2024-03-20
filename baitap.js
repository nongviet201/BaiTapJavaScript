//BT 2:

function reverseString(string) {
    let reverse = "";
    for (let index = string.length - 1; index >= 0; index--) {
        reverse += string[index];
    }
    return reverse;
}


//BT 3: 

switch (nation) {
    case "VN" :
        {
          console.log("Xin Chào");  
          break;  
        } 
    case "EN" :
        {
          console.log("Xin Chào");  
          break;  
        } 
    case "CN" :
        {
          console.log("你好");
          break;  
        } 
    case "JP" :
        {
            console.log("こんにちは");
        }
    default: {
        console.log("vui lòng nhập đúng mã quốc gia")
    }
}

//BT 4:

function cutString(string) {
    if (string.length > 10) {
        let newString = "";
        for (let i = 0; i < 11; i++) {
            newString += string[i];
        }
       return newString += "...";
    } else {
        return string;
    }
}