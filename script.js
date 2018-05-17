function c(val){
	document.getElementById('result').value=val;
}
function chan()
{
	if(document.getElementById("input").value>0){
		document.getElementById("input").value='-'+document.getElementById("input").value;
     }
	else if(document.getElementById("input").value<0){
		document.getElementById("input").value=Math.abs(document.getElementById("input").value);
	}
}
function v(val) {
	document.getElementById('input').value+=val;
}
function e(){
	try{
		 c(eval(document.getElementById('input').value))
	}
	catch(e){
		c(Error)
	}
}
function cl(val){
	document.getElementById('result').value=val;
	document.getElementById('input').value=val;
}
function root(){
	c(Math.sqrt(document.getElementById('input').value));
}
function fact() {
    var x = document.getElementById("input").value;
    var f=1;
    for (var i=1; i <= x ; i++){
        f = f*i;
    }
    document.getElementById('result').value= f;
}
function tan(){
	c(Math.tan(document.getElementById('input').value));
}
function ntan(){
	c(1/Math.tan(document.getElementById('input').value));
}

function sin(){
	c(Math.sin(document.getElementById('input').value));
}

function nsin(){
	c(1/Math.sin(document.getElementById('input').value));
}

function cos(){
	c(Math.sin(document.getElementById('input').value));
}

function ncos(){
	c(1/Math.sin(document.getElementById('input').value));
}

function pow(x){
	c(Math.pow(document.getElementById('input').value, x));
}

function pow2(x){
	c(Math.pow(x, document.getElementById('input').value));
}

function div(){
     c(1/document.getElementById('input').value);
}

function log(){
	c(Math.log(document.getElementById('input').value));
}
