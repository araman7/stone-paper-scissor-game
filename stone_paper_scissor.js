

$("button").click(function(event){
	var computerRandom= Math.floor(Math.random()*3);
	var x=event.currentTarget.value;
	console.log(computerRandom,x);
	if(computerRandom>x){
	$(".win").text("You Loose");
	}
else if(computerRandom<x){
		$(".win").text("You Win");

}
else if(computerRandom==x){
		$(".win").text("Draw");


}
//alert("computer no "+computerRandom+" and your no "+userNo);
});
