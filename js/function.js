// function define
function firstt (a=0,b=0,op='+'){
    // console.log(`value of a is ${a} and value of b is ${b}`)
    if(op=='+'){
    console.log(`value of a is ${a} and value of b is ${b} and the addision is ${a+b}`)
    }
    else if(op=='-'){
        console.log(`value of a is ${a} and value of b is ${b} and the sub is ${a-b}`)
    }
    else if(op=='*'){
        console.log(`value of a is ${a} and value of b is ${b} and the Multiplication is ${a*b}`)
    }
    else if(op=='/'){
        console.log(`value of a is ${a} and value of b is ${b} and the Divison is ${a/b}`)
    }
    else{
        console.log('Invalid Operator')
    }
}

// funName(argument) -> calling
// funName    -> passing
firstt(10,20);