Common = new function(){

	this.$ = function(name)
	{
		return document.getElementById(name);
	}

	this._ = function(tagName)
	{
		return document.createElement(tagName);
	}

	this.GetDate = function(obj)
	{
		var date = new Date();
		var temp_month = date.getMonth()+1;
		var month = temp_month;
		if(temp_month < 10 ) month = "0" + temp_month; 
		var temp_day = date.getDate();
		var day = temp_day;
		if(temp_day < 10 ) day = "0" + temp_day;
		var tradedate = date.getFullYear()+ "-"  + month + "-" + day;
		Common.$(obj).value = tradedate;
	}

	this.Time = function()
	{
		var time = new Date();
		var h = time.getHours();
		var m = time.getMinutes();		
		var s = Math.floor(time.getSeconds()/10) * 10; 
		var arg = (h<10 ? "0" + h : h) + "" + (m<10 ? "0" + m : m) + "" + (s<10 ? "0" + s : s);
		return arg;
	}

    // \d{N}表示有N个\d
	this.IsDate = function(str)
	{
		var re = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
		return re.test(str); // test方法返回true or false
	}

    // \d{N,}表示至少有个N个\d
	this.IsNumber = function(str)
	{
		var re = new RegExp(/^\d{1,}$/);
		return re.test(str);
	}

    // ( )括号中表示具体的字符
    // (.\d{1,}){0,1}表示匹配至少0个最多1个的(.\d{1,})
	this.IsDecimal = function(str)
	{
		var re = new RegExp(/^\d{1,}(.\d{1,}){0,1}$/);
		return re.test(str);
	}

	this.IsCode = function(str)
	{
		var re = new RegExp(/^\d{6}$/);
		return re.test(str);
	}

	this.IsCodeMarket = function(str)
	{
		var re = new RegExp(/^(\d{6}_\d{1}){1}(\|\d{6}_\d{1}){0,}$/);//
		return re.test(str);
	}

	this.MarketString = function(str)
	{
		if(str == "1")
		{
			return "SH";
		}
		else
		{
			return "SZ";
		}
		return "SH";
	}

	//
	// 并不是通过简单的设置链接,href = 某URL
	// 而是在DOM中添加了一个javascript标签
	// 将javascript的src属性指向要加载的数据源
	//
	this.AppendData = function(id, url)
	{
		var obj = Common.$(id);
		if(obj)
		{
			obj.parentNode.removeChild(obj);
		}
		var newscript = Common._("script");
		newscript.type = "text/javascript";
		newscript.src = url;
		newscript.id = id;
		document.body.appendChild(newscript);
	}
} 
