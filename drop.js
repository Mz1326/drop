function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown = function(ev){
		var oEvent = ev ||window.event;
		disX = oEvent.pageX - obj.offsetLeft;
		disY = oEvent.pageY - obj.offsetTop;

		obj.onmousemove = function(ev){
			obj.style.left = ev.clientX -disX+"px";
			obj.style.top = ev.clientY -disY+"px";
		}
		obj.onmouseup = function(){}
	}
}