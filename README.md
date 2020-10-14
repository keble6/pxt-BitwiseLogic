# Bitwise Logic operators

These are useful when you are using an external device which has, for example, 8-bit status and control bytes. Examples include real-time clocks and various sensors for measuring temperature and so on.

You might need to set some bits and mask other bits. These operations can be done using MakeCode math operators, but they can be confusing!

So try using bitwise operators instead. Each of the operators maps directly to a JavaScript operator, with the same symbol.

## Operators
Two "reporter" blocks are provided - one has 2 parameters and a drop-down to select the operator. 

The operator can be (a and b are the two parameters):
- **&**   a and b
- **|**   a or b
- **^**   a xor b
- **<<**  left shift a by b bits 
- **>>**  right shift a by b bits
- **>>>** right shift a by b bits with 0 fill 

The second bock is the **bitwise not** which has just one parameter.

![blocks](https://github.com/keble6/pxt-BitwiseLogic/blob/master/Screenshot%202020-10-13%20at%2010.11.16.png)

## Example useage

Set bit 0 of a DS3231 control register (to enable an alarm interrupt):

```blocks
let controlreg = BitwiseLogic.bitwise2arg(DS3231.control(), operator.or, 1)
```

In JavaScript this is:

`let controlreg = BitwiseLogic.bitwise2arg(DS3231.control(), operator.or, 1)`

## Supported targets
* PXT/microbit
