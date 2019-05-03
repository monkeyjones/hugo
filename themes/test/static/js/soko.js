var vars=getUrlVars();
var site_lng="en";
if(vars["lng"])
{ 
	site_lng=vars["lng"];
}

function getUrlVars() 
{
	var vars = {};
	var parts = window.location.href.replace(/[?&#]+([^=&#]+)=([^&#]*)/gi, function(m,key,value) 
	{
		vars[key] = value;
	});
	return(vars);
}

function change_links()
{
	var link=$("a");
	for(a=0;a<link.length;a++)
	{
		var url=$(link[a]).attr("href");		
		url=url.replace("?lng=es","");
		url=url.replace("?lng=en","");
		$(link[a]).attr("href",url+"?lng="+site_lng);
	}
}
$(document).ready(function()
{
	var lang=$(".btn_lng");
	for(a=0;a<lang.length;a++)
	{
		$(lang[a]).attr("href",$(lang[a]).attr("href")+"?lng="+$(lang[a]).attr("aria-lng"));	
		$(lang[a]).click(function(){
   		site_lng=$(this).attr("aria-lng");	
			$(".lng").addClass("hidden");
			$(".lng_"+site_lng).removeClass("hidden");
			change_links();
			return(false);
		});
	}
	$(".lng_"+site_lng).removeClass("hidden");
	
	change_links();
});
