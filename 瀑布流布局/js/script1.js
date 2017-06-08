$(document).ready(function(){
	waterfall();
	var jsondata={"data":[{"src":"21.jpg"},{"src":"22.jpg"},{"src":"23.jpg"},{"src":"24.jpg"},{"src":"25.jpg"},{"src":"26.jpg"},{"src":"27.jpg"},{"src":"28.jpg"},{"src":"29.jpg"},{"src":"30.jpg"},{"src":"31.jpg"},
	{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"}]};
	$(window).on('scroll',function(){
//		console.log(SlideDown());
		if(SlideDown()){
			$.each(jsondata.data, function(key,value) {
//				console.log(value);
				var Box=$("<div>").addClass("box").appendTo($("#main"));
				console.log(Box);
				var Pic=$("<div>").addClass("pic").appendTo(Box);
				$('<img>').attr("src","img/"+$(value).attr("src")).appendTo(Pic);
				
			});
			waterfall();
		}
	});
});
function waterfall(){
	var $Boxes=$("#main>.box");
	var w=$Boxes.eq(0).outerWidth();
	var cols=Math.floor(($(window).width())/w);
	$("#main").css({"width":w*cols,"margin":"0 auto"});
	var arr=[];
	$Boxes.each(function(index,value){
		var h=$Boxes.eq(index).outerHeight();
		if(index<cols){
			arr.push(h);			
		}else{
			var minh=Math.min.apply(null,arr);
			var minhIndex=$.inArray(minh,arr);
//			console.log(value);
			$(value).css({"position":"absolute","top":minh+"px","left":minhIndex*w+"px"});
			arr[minhIndex]+=$Boxes.eq(index).outerHeight();
//		console.log(minhIndex);
		}
	});
}
function SlideDown(){
	var $lastbox=$("#main>.box").last();
	var lastboxh=$lastbox.offset().top;
	console.log(lastboxh);
	var scrollTop=$(window).scrollTop();
	var docunmentH=$(window).height();
	return (lastboxh<scrollTop+docunmentH)? true:false;
}