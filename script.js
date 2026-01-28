const display=document.getElementById("inputBox");
function append(input)
{
    display.value+=input;
}
function cleardisplay(){
    display.value="";
}
function calc(){
    try{
    display.value=eval(display.value);}
    catch(error){display.value="Error";}
}