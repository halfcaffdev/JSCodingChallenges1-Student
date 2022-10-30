//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";

//driver function used for display and passing values.
function checkBrackets() {

    //change testbrackets here. makes easire to change in one place.
    let testbrackets = testbrackets1;

    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalanced(testbrackets);

    //used for display no need to change
    let msg = "";

    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }

    //display the message
    document.getElementById("results").innerHTML = msg;

}

//takes an array of strings and returns the longest one. 
function isBalanced(brackets) {
    // declare and initialize an array
    let stack = [];

    // loop over the string
    for (let i = 0; i < brackets.length; i++) {
        let item = brackets[i];

       // if current character is a open bracket add to array
        if (item == '[' || item == '{' || item == '(') {
            stack.push(item);
            continue;
        }
        // if current character is a close bracket, remove last open character from array
        else if (item == ']' || item == '}' || item ==')') {
            
            if(stack.length == 0){
                return false;
            }

            let previousItem = stack.pop();
            
            switch (item) {
                case ')':
                    if (previousItem != '('){
                        return false;
                    }
                    break;
                case '}':
                    if (previousItem != '{'){
                        return false;
                    }
                    break;
                case ']':
                    if (previousItem != '['){
                        return false;
                    }
                    break;                    
            }
        }
    };
    return stack.length == 0;
}