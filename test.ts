/* 
tests for Bitwise Logic.
Each operator is checked
*/
/* 
run this code, and either:

a) connect a webUSB terminal to the connected microbit, or 
b) use the MakeCode simulator's console

then check that all tests result in a P on the terminal/console
*/
function checkAnd (stra: string, strb: string) {
    let b = parseInt(stra,16)
    let c = parseInt(strb,16) 
    let jsResult2 = (b & c) & 0xff
    let myResult2 = BitwiseLogic.bitwise2arg(b, operator.and,c) & 0xff
    serial.writeLine("js: " + decToHex(jsResult2) + " myCode:  " + decToHex(myResult2))
    if (jsResult2 == myResult2) {
        serial.writeLine("P")
    } else {
        serial.writeLine("F")
    }
}
function checkOr (stra: string, strb: string) {
    let d = parseInt(stra,16)
    let e = parseInt(strb,16) 
    let jsResult3 = (d | e) & 0xff
    let myResult3 = BitwiseLogic.bitwise2arg(d, operator.or,e) & 0xff
    serial.writeLine("js: " + decToHex(jsResult3) + " myCode:  " + decToHex(myResult3))
    if (jsResult3 == myResult3) {
        serial.writeLine("P")
    } else {
        serial.writeLine("F")
    }
}
function checkXor (stra: string, strb: string) {
    let d = parseInt(stra,16)
    let e = parseInt(strb,16) 
    let jsResult3 = (d ^ e) & 0xff
    let myResult3 = BitwiseLogic.bitwise2arg(d, operator.xor,e) & 0xff
    serial.writeLine("js: " + decToHex(jsResult3) + " myCode:  " + decToHex(myResult3))
    if (jsResult3 == myResult3) {
        serial.writeLine("P")
    } else {
        serial.writeLine("F")
    }
}
function checkLeftShift (stra: string, strb: string) {
    let d = parseInt(stra,16)
    let e = parseInt(strb,16) 
    let jsResult3 = (d << e) & 0xff
    let myResult3 = BitwiseLogic.bitwise2arg(d, operator.leftShift,e) & 0xff
    serial.writeLine("js: " + decToHex(jsResult3) + " myCode:  " + decToHex(myResult3))
    if (jsResult3 == myResult3) {
        serial.writeLine("P")
    } else {
        serial.writeLine("F")
    }
}

function checkRightShift (stra: string, strb: string) {
    let d = parseInt(stra,16)
    let e = parseInt(strb,16)
    let jsResult3 = (d >> e) & 0xff
    let myResult3 = BitwiseLogic.bitwise2arg(d, operator.rightShift,e) & 0xff
    serial.writeLine("js: " + decToHex(jsResult3) + " myCode:  " + decToHex(myResult3))
    if (jsResult3 == myResult3) {
        serial.writeLine("P")
    } else {
        serial.writeLine("F")
    }
}
function checkZeroFillRightShift (stra: string, strb: string) {
    let d = parseInt(stra,16)
    let e = parseInt(strb,16) 
    let jsResult3 = (d >>> e) & 0xff
    let myResult3 = BitwiseLogic.bitwise2arg(d, operator.zeroFillRightShift,e) & 0xff
    serial.writeLine("js: " + decToHex(jsResult3) + " myCode:  " + decToHex(myResult3))
    if (jsResult3 == myResult3) {
        serial.writeLine("P")
    } else {
        serial.writeLine("F")
    }
}
function checkNot (str: string) {
    // convert to number
    let a = parseInt(str,16)
    // convert to 8-bit unsigned result
    let jsResult = ~a   & 0xff
    let myResult = BitwiseLogic.bitwiseNot(a)  & 0xff
    serial.writeLine("js: " + decToHex(jsResult) + " myCode:  " + decToHex(myResult))
    if (jsResult == myResult) {
        serial.writeLine("P")
    } else {
        serial.writeLine("F")
    }
}

function decToHex (num: number) {
    result = "0x"
    nibble = Math.floor(num / 16)
    for (let i = 0; i <= 1; i++) {
        if (nibble < 10) {
            result = "" + result + convertToText(nibble)
        } else {
            nibble = nibble - 10
            result = "" + result + "abcdef".charAt(nibble)
        }
        nibble = num % 16
    }
    return result
}
let nibble = 0
let result = ""
serial.writeLine("Testing ~")
checkNot("a5")
checkNot("5a")
serial.writeLine("Testing &")
checkAnd("a5", "0f")
checkAnd("a5", "f0")
serial.writeLine("Testing |")
checkOr("a5", "0f")
checkOr("a5", "f0")
serial.writeLine("Testing ^")
checkXor("a5", "0f")
checkXor("a5", "f0")
serial.writeLine("Testing <<")
checkLeftShift("a5", "1")
checkLeftShift("a5", "4")
serial.writeLine("Testing >>")
checkRightShift("a5", "1")
checkRightShift("a5", "4")
serial.writeLine("Testing >>")
checkZeroFillRightShift("a5", "1")
checkZeroFillRightShift("a5", "4")
