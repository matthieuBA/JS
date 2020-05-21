let numberofrows = prompt("choose the number of rows for your pyramid")

function Pyramid(numberofrows) {

    var pyramid = '';
    var outputBlock='\n';
    for (var i = 1; i <= numberofrows; i++) 
    {
        for (var j = 1; j <= i; j++) 
        {
            outputBlock += '#' ;
        }
        pyramid += outputBlock  + '\n';
        console.log(outputBlock);
        outputBlock='';
    }
    return pyramid;
}

alert ('here is your pyramid : ' + Pyramid(numberofrows));

console.log("here is your pyramid : " + Pyramid(numberofrows));