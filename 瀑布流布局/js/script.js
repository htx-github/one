//window.onload=function(){
//	waterfall("main","box");
//	var jsondata={"data":[{"src":"21.jpg"},{"src":"22.jpg"},{"src":"23.jpg"},{"src":"24.jpg"},{"src":"25.jpg"},{"src":"26.jpg"},{"src":"27.jpg"},{"src":"28.jpg"},{"src":"29.jpg"},{"src":"30.jpg"},{"src":"31.jpg"},
//	{"src":"32.jpg"},{"src":"33.jpg"},{"src":"34.jpg"}]};
//	window.onscroll=function(){
//		if(SlideDown){
//			//将数据块渲染到页面尾部
//			for(var i=0;i<jsondata.data.length;i++){
//			var Box=document.createElement("div");
//			Box.className="box";
//			document.getElementById("main").appendChild(Box);
//			var Pic=document.createElement("div");
//			Pic.className="pic";
//			Box.appendChild(Pic);
//			var Img=document.createElement("img");
//			Img.src="img/"+jsondata.data[i].src;
//			Pic.appendChild(Img);
//			}
//			waterfall("main","box");
//		}
////console.log(SlideDown());
//	}
//}
//function waterfall(parent,box){
//	//取出所有main下的box元素
//	var oParent=document.getElementById(parent);
//	var oBox=getByClass(oParent,box);
//	//	console.log(oBox.length);
//	//计算一个box的宽度
//	var oBoxwidth=oBox[0].offsetWidth;
//	//计算一个页面有几列
//	var cols=Math.floor(document.documentElement.clientWidth/oBoxwidth);
////	console.log(cols);
//	oParent.style.cssText+="width:" +oBoxwidth*cols+"px;margin:0 auto";
//	//存取第一列的box中的所有offsetHeight
//	var arrHeight=[];
//	for(var j=0;j<oBox.length;j++){
//		if(j<cols){
//			arrHeight.push(oBox[j].offsetHeight);
////			console.log(arrHeight);
//		}
//		else{
//			//求出box的高度，哪个最小
//			var minH=Math.min.apply(null,arrHeight);
//			//获得他的索引
//			var index=getarrHeightIndex(arrHeight,minH);
//			//如果不写getarrHeightIndex这个函数
////			var index=arrHeight.indexOf(minH);
////			console.log(index);
//			oBox[j].style.position="absolute";
//			oBox[j].style.top=minH+"px";
//			//两种方法获取它距页面左端的宽
////			oBox[j].style.left=oBoxwidth*index+"px";
//			oBox[j].style.left=oBox[index].offsetLeft+"px";
//			arrHeight[index]+=oBox[j].offsetHeight;
////			console.log()
//		}
//	}
//}
//function getByClass(parent,cls){
//	var array=[],
//	elements=parent.getElementsByTagName("*");
//	for(var i=0;i<elements.length;i++){
//		if(elements[i].className==cls){
//			array.push(elements[i]);
//		}
//	}
//	return array;
//}
//function getarrHeightIndex(arr,val){
//	for(var m in arr){
//		if(arr[m]==val){
//			return m;
//		}
//	}
//}
////判断滚动条滚动时数据能否加载
//function SlideDown(){
//	var oParent=document.getElementById("main");
//	var oBoxs=getByClass(oParent,"box");
//	var lastBox=oBoxs[oBoxs.length-1].offsetTop;
//	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
//	var Heigth=document.documentElement.clientHeight||document.body.clientHeight;
//	return (lastBox<scrollTop+Heigth)? true:false;
//}

$(document).ready(function(){
	alert("ni");
});