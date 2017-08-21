
	function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown=function(ev){
		var oEvent = ev ||window.event;
		disX = oEvent.pageX - obj.offsetLeft;
		disY = oEvent.pageY - obj.offsetTop;

		document.onmousemove = function(ev){
			obj.style.left = ev.pageX -disX +"px";
			obj.style.top = ev.pageY -disY +"px";
		}
		document.onmouseup = function(){
			document.onmousemove =null;
			document.onmouseup = null;
		}
	}
	return false;
}

