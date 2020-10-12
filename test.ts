
/*** test the NOT function */
function checkNot(str: string){
    let a = parseInt(str,10)    //convert to number
    let jsResult = ~a & 0xff        // convert to 8-bit unsigned result
    let myResult = BitwiseLogic.bitwiseNot(a) & 0xff
    //basic.showNumber(jsResult)
    //basic.showNumber(myResult)
    if(jsResult == myResult){
        basic.showString("P")
    }
    else {
        basic.showString("F")
    }
}
basic.showString("~")
checkNot("a5")
basic.showString(":")
checkNot("5a")
basic.showString(":")

