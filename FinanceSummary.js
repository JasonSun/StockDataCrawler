FinanceSummary = new function()
{
	this.scriptid ="GetFinanceSummary";
	// this.url加载数据的数据源，right addr, important addr
	this.url = "/Newdata/cwsj/datacw/ssgscw.aspx";
	this.type = "";
	this.sorttype = "3";
	this.report="";
	this.updown = "up";
	this.count = 25;     // 每页条目数量
	this.page = 1;       // 当前页码
	this.totalpage = 1;  // 总页数

    // 设置URL
	this.SetLinkURL = function()
	{
		var request = this.url + "?";
	
	  	if(this.code != "" && this.code != null)
		{
			request += "code=" + this.code + "&";
		}
		
	    if(this.report != "" && this.report != null)
		{
			request += "report=" + this.report + "&";
		}
		
		request += "sorttype=" + this.sorttype + "&updown=" + this.updown + "&page=" + this.page + "&count=" + this.count;
    
		return request;
	}

    // 首次加载
	this.Request = function()
	{
		Common.AppendData(this.scriptid, this.SetLinkURL());
	}

    // 设置首页按钮的URL并刷新数据
	this.FirstPage = function()
	{
		this.page = 1;
		Common.AppendData(this.scriptid, this.SetLinkURL());
	}

    // 设置末页按钮的URL并刷新数据
	this.EndPage = function()
	{
		this.page = this.totalpage;
		Common.AppendData(this.scriptid, this.SetLinkURL());
	}

    // 设置下一页按钮的URL并刷新数据
	this.NextPage = function()
	{
		if(this.page < this.totalpage)
		{
			this.page += 1;
			Common.AppendData(this.scriptid, this.SetLinkURL());
		}
	}

    // 设置前一页按钮的URL并刷新数据
	this.PrevPage = function()
	{
		if(this.page >1)
		{
			this.page -= 1;
			Common.AppendData(this.scriptid, this.SetLinkURL());
		}
	}
    
    // 跳转按钮的onclick事件设置为FinanceSummary.GoToPage()方法
    // 刷新数据
	this.GoToPage = function(input)
	{
		if(Common.IsNumber(input))
		{
			if(input > 0 && input <= this.totalpage && input != this.page)
			{
				this.page = Number(input);
				Common.AppendData(this.scriptid, this.SetLinkURL());
			}
		}
	}
}
