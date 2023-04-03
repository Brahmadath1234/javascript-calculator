function myFunction(){
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let c = document.getElementById("num3").value;
    switch(b){
        case "*":
            document.getElementById("ans").value=parseFloat(a) * parseFloat(c);
            break;
        case "+":
            document.getElementById("ans").value=parseFloat(a) + parseFloat(c);
            break;
        case "/":
            document.getElementById("ans").value=parseFloat(a) / parseFloat(c);
            break;
        case "-":
            document.getElementById("ans").value=parseFloat(a) - parseFloat(c);
            break;
        default:
            console.log("sassi");
    }
}