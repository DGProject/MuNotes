window.onload = function() {
	var btnShow = document.getElementById('btnShow');
	var showItem = document.getElementById('showItem');
	var oDiv;
	btnShow.onclick = function() {
		if(showItem.style.height == '0px'|| showItem.style.height == '') {
			showItem.style.left = btnShow.offsetLeft + 'px';
			showItem.style.top = btnShow.offsetTop + 50 + 'px';
			showItem.style.height = "inherit";
		} else {
			showItem.style.height = "0px";
		}
	}
	var classItem = showItem.getElementsByTagName('div')[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
	oDiv = document.createElement('div');
	oDiv.setAttribute("class", "box");
	var count= 0;
	for(var i = 0; i < classItem.length; i++) {
		var oUl;
		if(i%16 == 0) {
			count++;
			oUl = document.createElement('ul');
			oUl.setAttribute("class", "item");
			oDiv.appendChild(oUl);
			oUl.appendChild(classItem[i].cloneNode(true));
		} else {
			oUl.appendChild(classItem[i].cloneNode(true));
		}
	}
    console.log(count);
    console.log(showItem.offsetWidth*count);
    oDiv.style.width = showItem.offsetWidth*count+"px";
	//生成div
	var currentPage = 0;
	var sUl = document.createElement('ul');
	sUl.setAttribute("class", "nav");
	sUl.style.width = count * 20 + 'px';
	for(var i = 0; i < count; i++) {
		var sLi = document.createElement('li');
		sUl.appendChild(sLi);
		sLi.onclick = function() {
			var brother = this.parentNode.childNodes;
			for(var j = 0; j<brother.length; j++) {
				removeClass(brother[j],"active");
				if(brother[j]==this) {
					addClass(this, "active");
					oDiv.style.marginLeft = -j * 100 + '%';
				}
			}
		}
		if(i == 0) {
			addClass(sLi, "active");
		}
	}
	//初始化弹出层
	showItem.innerHTML = '';
	showItem.appendChild(oDiv);
	showItem.appendChild(sUl);
	
	///////////////css控制封装方法//////////////////////////////
	function hasClass( elements,cName ){
		return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
	}; 
	function addClass( elements,cName ){
		if( !hasClass( elements,cName ) ){
			elements.className += " " + cName;
		};
	};
	function removeClass( elements,cName ){
		if( hasClass( elements,cName ) ){
			elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换
		};
	};
	///////////////css控制封装方法//////////////////////////////
}