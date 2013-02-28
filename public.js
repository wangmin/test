window.onload = function () {
	add_a_mouseoverandoutevent();
	add_hover_mouseoverandoutevent();
};

//-------------------------验证(开始)------------------------------------
function testEmail(data)
{
	var regex="^[a-zA-Z_0-9]{1,}[@][a-zA-Z_0-9.]{1,}(([.][Cc]{1}[Nn]{1})|" +
	"((([.][Cc]{1}[Oo]{1}[Mm]{1})|([.][Nn]{1}[Ee]{1}[Tt]{1})|([.][Oo]{1}[Rr]{1}[Gg]{1})|" +
	"([.][Mm]{1}[Oo]{1}[Bb]{1}[Ii]{1})|([.][MM]{1}[Ee]{1})|" +
	"([.][Cc]{1}[Cc]{1})|([.][Bb]{1}[Ii]{1}[Zz]{1})|([.][Tt]{1}[Vv]{1})|" +
	"([.][Hh]{1}[Kk]{1})|([.][Ii]{1}[Nn]{1}[Ff]{1}[Oo]{1})){1,2}([.][Cc]{1}[Nn]{1}){0,1}))$";
    var reg=RegExp(regex,'g');
    var strEmail=data;
   return reg.test(strEmail);
}
//------------------------验证(结束)--------------------------------------

//------------------------------------添加好友申请(开始)------------------------------
function addFriend(obj,friendid)
{
   $temp=$(obj);
   $temp.hide();
   $temp.next().show();
   var url = 'ajax/MessageAjax_addFriend.action';
		    var params = {
		    		
		    		friendId:friendid
		    };
		    jQuery.post(url, params, addFriendCallBack);
}
function addFriendCallBack(data)
{
    if(data=="unlogin")
    {
       onpenNormalMessageWindow("对不起,你还未登陆,不能对该用户关注");
       setTimeout("closeMessageWindow()",2000);
    }
    else
    {
      $temp.text("已关注");
      //$temp.removeAttr("onClick");
    }
    $temp.show();
    $temp.next().hide();
}
//------------------------------------添加好友申请(结束)------------------------------





//------------------------------------关注公司(开始)------------------------------
function attentionCorp(obj,corpid)
{
    $temp=$(obj);
    $temp.hide();
    $temp.next().show();
     var url = 'ajax/UsersAjax_attentionCorp.action';
		    var params = {
		    		
		    		corpId:corpid
		    };
   jQuery.post(url, params, attentionCorpCallBack);
}
function attentionCorpCallBack(data)
{
    if(data=="unlogin")
    {
       onpenNormalMessageWindow("对不起,你还未登陆,不能收听该公司");
       setTimeout("closeMessageWindow()",2000);
    }
    else
    {
      $temp.text("已收听");
      $temp.removeAttr("onClick");
    }
    $temp.show();
    $temp.next().hide();
}
//------------------------------------关注公司(结束)------------------------------



//---------------------用户日志和公司日志里面元素显示或隐藏(开始)-----------------
function add_hover_mouseoverandoutevent()
{
   $('.talk_body').mouseover(function (event) {
        var $temp=$(event.srcElement||event.target);
        $temp=findfatherclass($temp,"talk_body");
        $temp.find('.hover_show_or_hide').css("visibility","visible");
   });
   $('.talk_body').mouseout(function (event) {
        var $temp=$(event.srcElement||event.target);
        $temp=findfatherclass($temp,"talk_body");
        $temp.find('.hover_show_or_hide').css("visibility","hidden");
   });
   $('.log_body').mouseover(function (event) {
        var $temp=$(event.srcElement||event.target);
        $temp=findfatherclass($temp,"log_body");
        $temp.find('.hover_show_or_hide').css("visibility","visible");
   });
   $('.log_body').mouseout(function (event) {
        var $temp=$(event.srcElement||event.target);
        $temp=findfatherclass($temp,"log_body");
        $temp.find('.hover_show_or_hide').css("visibility","hidden");
   });
   
   $('.master_body').mouseover(function (event) {
        var $temp=$(event.srcElement||event.target);
        $temp=findfatherclass($temp,"master_body");
        $temp.find('.master_context').children('a').css("color","#0A8CD2");
        $temp.find('.master_bottom ul a').css("color","#0A8CD2");
   });
   $('.master_body').mouseout(function (event) {
        var $temp=$(event.srcElement||event.target);
        $temp=findfatherclass($temp,"master_body");
        $temp.find('.master_context').children('a').css("color","#565656");
        $temp.find('.master_bottom ul a').css("color","#C2E0EF");
   });
    $('.accessInfo_img').mouseover(function (event) {
        var $temp=$(event.srcElement||event.target);
       $temp=findfatherclass($temp,"accessInfo_img");
        $temp.find('.hover_show_or_hide').css("visibility","visible");
   });
   $('.accessInfo_img').mouseout(function (event) {
        var $temp=$(event.srcElement||event.target);
       $temp=findfatherclass($temp,"accessInfo_img");
        $temp.find('.hover_show_or_hide').css("visibility","hidden");
   });
   $('.access_left').mouseover(function (event) {
        var $temp=$(event.srcElement||event.target);
       $temp=findfatherclass($temp,"access_left");
        $temp.find('.hover_show_or_hide').css("visibility","visible");
   });
   $('.access_left').mouseout(function (event) {
        var $temp=$(event.srcElement||event.target);
       $temp=findfatherclass($temp,"access_left");
        $temp.find('.hover_show_or_hide').css("visibility","hidden");
   });
   // $('.img_wrap').mouseover(function (event) {
   //     var $temp=$(event.srcElement||event.target);
   //     $temp=findfatherclass($temp,"img_wrap");
   //     $temp.find('.hover_show_or_hide').css("visibility","visible");
   //});
   //$('.img_wrap').mouseout(function (event) {
   //     var $temp=$(event.srcElement||event.target);
   //     $temp=findfatherclass($temp,"img_wrap");
   //     $temp.find('.hover_show_or_hide').css("visibility","hidden");
   //});
  // $('.small_fileNameMap').mouseover(function (event) {
    //    var $temp=$(event.srcElement||event.target);
   //     $temp=findfatherclass($temp,"small_fileNameMap");
   //     $temp.find('.hover_show_or_hide').css("visibility","visible");
   //});
  // $('.small_fileNameMap').mouseout(function (event) {
   //     var $temp=$(event.srcElement||event.target);
    //    $temp=findfatherclass($temp,"small_fileNameMap");
    //    $temp.find('.hover_show_or_hide').css("visibility","hidden");
   //});
   // $('.fileNameMap_detail').mouseover(function (event) {
   //     var $temp=$(event.srcElement||event.target);
   //     $temp=findfatherclass($temp,"fileNameMap_detail");
   //     $temp.find('.hover_show_or_hide').css("visibility","visible");
  // });
  // $('.fileNameMap_detail').mouseout(function (event) {
   //     var $temp=$(event.srcElement||event.target);
  //      $temp=findfatherclass($temp,"fileNameMap_detail");
   //     $temp.find('.hover_show_or_hide').css("visibility","hidden");
   //});
}
function findfatherclass($temp,classname)
{
    
    while(!$temp.hasClass(classname))
    {
       $temp=$temp.parent();
    }
    return $temp;
}
//---------------------用户日志和公司日志里面元素显示或隐藏(结束)-----------------



//-----------------------------------根据链接弹出信息提示框的处理(开始)-----------------------------

function add_a_mouseoverandoutevent()
{
  jQuery("[link]").mouseover(function () {
	   var url=jQuery(this).attr('link');
	
		popup_show_infopopup(this,url);
	});
	jQuery("[link]").mouseout(function () {
	
	var url=jQuery(this).attr('link');
	
	   setTimeout(function(){
	   if(!mouse_movein_infopopup)
	   {
	      info_popup_cancel();
	   }
	   },100);
	});
}


function create_corpInfo_pupup(data) {
	var htmlstr = "";
	htmlstr +="<div class=\"a_info_popup_class\" id=\"info_popup\" style=\"display: none;\" onmouseover=\"cusour_movein_infopoput()\" onmouseout=\"cusour_moveout_infopoput(event,this)\">";
	htmlstr+="<div class=\"a_info_popup_class2\">"
	htmlstr+="<div class=\"a_info_popup_class3\">"
	htmlstr+="<div class=\"a_info_popup_left\">";
	htmlstr+="<div class=\"a_info_image\"><a href='"+data.url+"'><img src='"+data.image+"' height=\"70\" width=\"70\"/></a></div>";
	htmlstr+="</div>"; 
	htmlstr+="<div class=\"a_info_popup_right\">";
	htmlstr+="<div class=\"a_info_name\">名称:<a href='"+data.url+"'>"+data.name+"</a></div>";
	htmlstr+="<div class=\"a_info_address\">地址:<a href='javascript:void(0)' title='查看公司地图' onclick='showCorpMap("+data.id+")'>"+(data.address==""?"其它":data.address)+"</a></div>";
	htmlstr+="<div class=\"a_info_business\">行业:"+data.business+"</div>";
	htmlstr+="<div class=\"a_info_industry\">标签:"+data.industry+"</div>";
	htmlstr+="</div>";
	if(data.description=="")
	{
	htmlstr+="<div class=\"a_info_description\">暂未填写简介</div>";
	}
	else
	{
	htmlstr+="<div class=\"a_info_description\">简介:"+data.description+"</div>";
	}
	htmlstr+="<div class=\"a_info_popup_bottom\">";
	if(data.attend=="no")
	{
		htmlstr += "<div class=\"a_f_c_Button a_f_c_1_position_color\"><A href=\"javascript:void(0)\"  onclick=\"attentionCorp(this,"+data.id+")\">+收听</A><A href=\"javascript:void(0)\" style=\"display: none;\">处理中..<img src=\"/imges/loading.jpg\"></img></A></div>";
	}
	else if(data.attend=="yes")
	{
	 htmlstr += "<div class=\"a_f_c_Button a_f_c_1_position_color\"><A  href=\"javascript:void(0)\" >已收听</A></div>";
	}
	htmlstr += "</div>";
	htmlstr += "</div>";
	htmlstr += "</div>";
	htmlstr += "</div>";
	return htmlstr;
}
function create_usersInfo_pupup(data) {
	var htmlstr = "";
	htmlstr += "<div class=\"a_info_popup_class\" id=\"info_popup\" style=\"display: none;\"  onmouseover=\"cusour_movein_infopoput()\" onmouseout=\"cusour_moveout_infopoput(event,this)\">";
	htmlstr+="<div class=\"a_info_popup_class2\">"
	htmlstr+="<div class=\"a_info_popup_class3\">"
	htmlstr+="<div class=\"a_info_popup_left\">";
	htmlstr+="<div class=\"a_info_image\"><a href='"+data.url+"'><img src='"+data.image+"' height=\"70\" width=\"70\"/></a></div>";
	htmlstr+="</div>"; 
	htmlstr+="<div class=\"a_info_popup_right\">";
	htmlstr+="<div class=\"a_info_name\"><a href='"+data.url+"'>"+data.name+"</a>"+(data.isvip==false?"":"<a class='vip'></a>")+"</div>";
	htmlstr+="<div class=\"a_info_relation\">关注<a href='Users_listFriend.action?users.id="+data.id+"'>"+data.friendSize+"</a>|收听<a href='Users_listAttentionCorp.action?users.id="+data.id+"'>"+data.attentionSize+"</a>|粉丝<a href='Users_listFenSi.action?users.id="+data.id+"'>"+data.fensiSize+"</a></div>";
	htmlstr+="<div class=\"a_info_address\">"+(data.address==""?"其它":data.address)+"</div>";
	htmlstr+="</div>"; 
	if(data.description=="")
	{
	htmlstr+="<div class=\"a_info_description\">暂未填写简介</div>";
	}
	else
	{
	htmlstr+="<div class=\"a_info_description\">简介:"+data.description+"</div>";
	}
	htmlstr+="<div class=\"a_info_popup_bottom\">";
	if(data.addfriend=="no")
	{
	 htmlstr += "<div class=\"a_f_c_Button a_f_c_1_position_color\"><A  href=\"javascript:void(0)\"  onclick=\"addFriend(this,"+data.id+")\">+关注</A><A href=\"javascript:void(0)\" style=\"display: none;\">处理中..<img src=\"/imges/loading.jpg\"></img></A></div>";
	}
	else if(data.addfriend=="yes")
	{
	 htmlstr += "<div class=\"a_f_c_Button a_f_c_1_position_color\"><A  href=\"javascript:void(0)\" >已关注</A></div>";
	}
	htmlstr += "</div>";
	htmlstr += "</div>";
	htmlstr += "</div>";
	htmlstr += "</div>";
	return htmlstr;
}



function cusour_movein_infopoput()
{
   mouse_movein_infopopup=true;
}




//王敏
var id = 0;
var temp;
var url;
var info_popup_mouseposX;
var info_popup_mouseposY;
var mouse_movein_infopopup=false;
function popup_show_infopopup(object,ajaxurl)
{

    var h = object.offsetHeight;
    for (var sumTop=0,sumLeft=0;object!=document.body;sumTop+=object.offsetTop,sumLeft+=object.offsetLeft, object=object.offsetParent);
    sumTop = h+sumTop;
    info_popup_mouseposX=sumLeft;
    info_popup_mouseposY=sumTop;
    jQuery('#info_popup').remove();
    //用户名片
    if(ajaxurl.indexOf("usersCard_")!=-1)
    {
       var re=new RegExp("usersCard_","g"); 
       var id=ajaxurl.replace(re,"");
        jQuery.ajax({ //一个Ajax过程 
        type: "post", //以post方式与后台沟通 
        url : 'ajax/UsersAjax_loadByDnsMap.action', //"ajax/UsersTalkAjax_loadById.action"与此页面沟通 
        dataType:'json',//返回的值以 JSON方式 解释 
        data: 'id='+id, //发给php的数据有两项，分别是上面传来的u和p 
         success: function(json){//如果调用php成功 
         if(json.error=="error")
         {
            return;
         }
         else
         {
         var html=create_usersInfo_pupup(json);
         jQuery('body').append(html);
         info_popup_show();
         //setTimeout(function(){jQuery('#info_popup').show()},1000);
         }
         } 
         }); 
    }
    //公司名片
    else if(ajaxurl.indexOf("corpCard_")!=-1)
    {
       var re=new RegExp("corpCard_","g"); 
       var id=ajaxurl.replace(re,"");
        jQuery.ajax({ //一个Ajax过程 
        type: "post", //以post方式与后台沟通 
        url :'ajax/CorpAjax_loadByDnsMap.action', //"ajax/UsersTalkAjax_loadById.action"与此页面沟通 
        dataType:'json',//返回的值以 JSON方式 解释 
        data: 'id='+id, //发给php的数据有两项，分别是上面传来的u和p 
         success: function(json){//如果调用php成功 
         if(json.error=="error")
         {
            return;
         }
         else
         {
         var html=create_corpInfo_pupup(json);
         jQuery('body').append(html);
         info_popup_show();
         //setTimeout(function(){jQuery('#info_popup').show()},1000);
         } 
         }
         }); 
    }
}
function info_popup_show() {
	element = document.getElementById("info_popup");
	element.style.position = "absolute";
	//element.style.visibility = "visible";
	element.style.display = "block";
	var width=$(element).width();
	var height=$(element).height();
	if(info_popup_mouseposX+width>document.body.clientWidth)
	{
	    info_popup_mouseposX=info_popup_mouseposX-width;
	}
	if(info_popup_mouseposY+height>document.body.clientHeight)
	{
	info_popup_mouseposY=info_popup_mouseposY-height;
	}
	element.style.left = (info_popup_mouseposX) + "px";
	element.style.top =  (info_popup_mouseposY) + "px";
	
}

function info_popup_cancel() {
    mouse_movein_infopopup=false;
	jQuery('#info_popup').remove();
}



function cusour_moveout_infopoput(e,o) { 
        if(window.navigator.userAgent.indexOf("Firefox")>=1) { 
            var x = e.clientX + document.body.scrollLeft;
            var y = e.clientY + document.body.scrollTop ;
            var left = o.offsetLeft;
            var top = o.offsetTop;
            var w = o.offsetWidth;
            var h = o.offsetHeight;
            if(y < top||y > (h+top)||x > (left+w)||x < left)
            {
               info_popup_cancel();
            }
        }

        if(o.contains(event.toElement ) == false) 
              info_popup_cancel();
        
}


//-----------------------------------根据链接弹出信息提示框的处理(结束)-----------------------------

























//------------------------------弹出删除框的处理(开始)-------------------------------------->
function create_pupup(str1,str2) {
	var htmlstr = "";
	htmlstr += "<div class=\"sample_popup\" id=\"popup\" style=\"visibility: hidden; display: none;\">";
	htmlstr += "<div class=\"menu_form_header\" id=\"popup_drag\">";
	htmlstr += "<img class=\"menu_form_exit\" id=\"popup_exit\" src=\"/imges/close.jpg\" />";
	htmlstr += str1;
	htmlstr += "</div>";
	htmlstr += "<div class=\"menu_form_body\">";
	htmlstr += "<form method=\"post\" action=\"\">";
	htmlstr += "<table>";
	htmlstr += "<tr>";
	htmlstr += "<td>";
	htmlstr += "\t<input class=\"btn\" type=\"button\" value=\"确定\" onclick=\""+str2+"\" />";
	htmlstr += "\t<br>";
	htmlstr += "\t<br>";
	htmlstr += "</td>";
	htmlstr += "\t<td><input class=\"btn\" type=\"button\" onclick=\"popup_cancel()\" value=\"取消\" />";
	htmlstr += "\t<br>";
	htmlstr += "\t<br>";
	htmlstr += "</td>";
	htmlstr += "</tr>";
	htmlstr += "</table>";
	htmlstr += "</form>";
	htmlstr += "<div id=\"loaddelete\"  style='display: none;height:56px;'><A href='javascript:void(0)' >处理中..<img src='/imges/loading.jpg'></img></A></div>";
	htmlstr += "</div>";
	htmlstr += "</div>";
	return htmlstr;
}
//王敏
var id = 0;
var temp;
var url;
var popup_dragging = false;
var popup_target;
var popup_mouseX;
var popup_mouseY;
var popup_mouseposX;
var popup_mouseposY;
var popup_oldfunction;
function popup_display(x) {
	var win = window.open();
	for (var i in x) {
		win.document.write(i + " = " + x[i] + "<br>");
	}
}
// ----- popup_mousedown -------------------------------------------------------
function popup_mousedown(e) {
	var ie = navigator.appName == "Microsoft Internet Explorer";
	if (ie && window.event.button != 1) {
		return;
	}
	if (!ie && e.button != 0) {
		return;
	}
	popup_dragging = true;
	popup_target = this["target"];
	popup_mouseX = ie ? window.event.clientX : e.clientX;
	popup_mouseY = ie ? window.event.clientY : e.clientY;
	if (ie) {
		popup_oldfunction = document.onselectstart;
	} else {
		popup_oldfunction = document.onmousedown;
	}
	if (ie) {
		document.onselectstart = new Function("return false;");
	} else {
		document.onmousedown = new Function("return false;");
	}
}
// ----- popup_mousemove -------------------------------------------------------
function popup_mousemove(e) {
	if (!popup_dragging) {
		return;
	}
	var ie = navigator.appName == "Microsoft Internet Explorer";
	var element = document.getElementById(popup_target);
	var mouseX = ie ? window.event.clientX : e.clientX;
	var mouseY = ie ? window.event.clientY : e.clientY;
	element.style.left = (element.offsetLeft + mouseX - popup_mouseX) + "px";
	element.style.top = (element.offsetTop + mouseY - popup_mouseY) + "px";
	popup_mouseX = ie ? window.event.clientX : e.clientX;
	popup_mouseY = ie ? window.event.clientY : e.clientY;
}
// ----- popup_mouseup ---------------------------------------------------------
function popup_mouseup(e) {
	if (!popup_dragging) {
		return;
	}
	popup_dragging = false;
	var ie = navigator.appName == "Microsoft Internet Explorer";
	var element = document.getElementById(popup_target);
	if (ie) {
		document.onselectstart = popup_oldfunction;
	} else {
		document.onmousedown = popup_oldfunction;
	}
}
// ----- popup_exit ------------------------------------------------------------
function popup_exit(e) {
	var ie = navigator.appName == "Microsoft Internet Explorer";
	var element = document.getElementById(popup_target);
	popup_mouseup(e);
	element.style.visibility = "hidden";
	element.style.display = "none";
	$('#popup').remove();
}
// ----- popup_show ------------------------------------------------------------

function popup_show_deletepopup(object, delete_id, d_url)
{
    $('#popup').remove();
    
    //王敏
	temp = object;
	id = delete_id;
	url = d_url;
	
    var html=create_pupup("你确定要删除吗","deleteObject()");
    $('body').append(html);
    popup_show();
}

function show_cancelAttention_popup(usersid,corpid,object)
{
   $('#popup').remove();
    temp = object;
    //王敏
    var html=create_pupup("确定要解除关注吗","deleteAttentionCorp("+usersid+","+corpid+")");
    $('body').append(html);
    popup_show();
}
function show_cancelAttention_popup_inDy(corpid,object)
{
    $('#popup').remove();
    temp = object;
    //王敏
    var html=create_pupup("确定要解除关注吗","deleteAttentionCorp_inDy("+corpid+")");
    $('body').append(html);
    popup_show();
}
function show_deleteFriend_popup(usersid,friendid,object)
{
    $('#popup').remove();
    temp = object;
    //王敏
    var html=create_pupup("确定要解除吗","deleteFriend("+usersid+","+friendid+")");
    $('body').append(html);
    popup_show();
}
function show_deleteFenSi_popup(usersid,friendid,object)
{
    $('#popup').remove();
    temp = object;
    //王敏
    var html=create_pupup("确定要解除吗","deleteFenSi("+usersid+","+friendid+")");
    $('body').append(html);
    popup_show();
}
function show_deleteCorpFenSi_popup(corpId,usersId,object)
{
    $('#popup').remove();
    temp = object;
    //王敏
    var html=create_pupup("确定要解除吗","deleteCorpFenSi("+corpId+","+usersId+")");
    $('body').append(html);
    popup_show();
}
function popup_show() {
	element = document.getElementById("popup");
	drag_element = document.getElementById("popup_drag");
	exit_element = document.getElementById("popup_exit");
	element.style.position = "absolute";
	element.style.visibility = "visible";
	element.style.display = "block";
	element.style.left = ($(document).scrollLeft() + popup_mouseposX) + "px";
	element.style.top = ($(document).scrollTop() + popup_mouseposY) + "px";
	drag_element["target"] = "popup";
	drag_element.onmousedown = popup_mousedown;
	exit_element.onclick = popup_exit;
}
// ----- popup_mousepos --------------------------------------------------------
function popup_mousepos(e) {
	var ie = navigator.appName == "Microsoft Internet Explorer";
	popup_mouseposX = ie ? window.event.clientX : e.clientX;
	popup_mouseposY = ie ? window.event.clientY : e.clientY;
}
// ----- Attach Events ---------------------------------------------------------
if (navigator.appName == "Microsoft Internet Explorer") {
	document.attachEvent("onmousedown", popup_mousepos);
} else {
	document.addEventListener("mousedown", popup_mousepos, false);
}
if (navigator.appName == "Microsoft Internet Explorer") {
	document.attachEvent("onmousemove", popup_mousemove);
} else {
	document.addEventListener("mousemove", popup_mousemove, false);
}
if (navigator.appName == "Microsoft Internet Explorer") {
	document.attachEvent("onmouseup", popup_mouseup);
} else {
	document.addEventListener("mouseup", popup_mouseup, false);
}
//王敏
//关闭
function popup_cancel() {
	$('#popup').remove();
}


//弱出小层的删除处理
function deleteObject() {
    $('#loaddelete').prev().hide();
    $('#loaddelete').show();
	var params = {id:id};
	jQuery.post(url, params, deleteObjectCallBack);
}
function deleteObjectCallBack(data) {
	var $temp = $(temp);
	var $parent = $temp.parent().parent().parent();
	$parent.hide(500, function() {
	   $parent.remove();
	   popup_cancel();
     });
	
}


//解除对公司的关注
function deleteAttentionCorp(usersid,corpid)
{
   $('#loaddelete').prev().hide();
    $('#loaddelete').show();
   $obj=$(temp);
   var url = 'ajax/MessageAjax_deleteAttentionCorp.action';
		    var params = {
		    		
		    		usersId:usersid,
		    		corpId:corpid
		    };
		    jQuery.post(url, params, deleteAttentionCorpCallBack);

}
function deleteAttentionCorpCallBack(data)
{
         var $parent=$obj.parent().parent();
          $parent.hide(500, function() {
	        $parent.remove();
	        popup_cancel();
          });
}
function deleteAttentionCorp_inDy(corpId)
{
   $('#loaddelete').prev().hide();
    $('#loaddelete').show();
      $obj=$(temp);
   var url = 'ajax/MessageAjax_deleteAttentionCorp.action';
		    var params = {
		    		
		    		corpId:corpId
		    };
		    jQuery.post(url, params, deleteAttentionCorp_inDyCallBack);
}
function deleteAttentionCorp_inDyCallBack(data)
{
        var $parent=$obj.parent().parent().parent().parent();
       
          $parent.hide(500, function() {
          $parent.next().remove();
	        $parent.remove();
	        popup_cancel();
          });
}
//解除好友关系
function deleteFriend(usersid,friendid)
{
   $('#loaddelete').prev().hide();
    $('#loaddelete').show();
   $obj=$(temp);
   var url = 'ajax/MessageAjax_deleteFriend.action';
		    var params = {
		    		
		    		usersId:usersid,
		    		friendId:friendid
		    };
		    jQuery.post(url, params, deleteFriendCallBack);

}
function deleteFriendCallBack(data)
{
         $parent=$obj.parent();
         $obj.remove();
         $parent.prepend("<span>与该好友解除成功</span>");
         popup_cancel();
}
//移除粉丝
function deleteFenSi(usersid,friendid)
{
   $('#loaddelete').prev().hide();
    $('#loaddelete').show();
   $obj=$(temp);
   var url = 'ajax/MessageAjax_deleteFenSi.action';
		    var params = {
		    		
		    		usersId:usersid,
		    		friendId:friendid
		    };
		    jQuery.post(url, params, deleteFenSiCallBack);

}
function deleteFenSiCallBack(data)
{
         $parent=$obj.parent();
         $obj.remove();
         $parent.prepend("<span>移除成功</span>");
         popup_cancel();
}

//
function deleteCorpFenSi(corpId,usersId)
{
   $('#loaddelete').prev().hide();
    $('#loaddelete').show();
   $obj=$(temp);
   var url = 'ajax/MessageAjax_deleteCorpFenSi.action';
		    var params = {
		    		
		    		usersId:usersId,
		    		corpId:corpId
		    };
		    jQuery.post(url, params, deleteCorpFenSiCallBack);

}
function deleteCorpFenSiCallBack(data)
{
         $parent=$obj.parent();
         $obj.remove();
         $parent.prepend("<span>移除成功</span>");
         popup_cancel();
}

//------------------------------弹出删除框的处理(开始)-------------------------------------->

















//------------------------------------弹出背部隐藏对话框(开始)---------------------------------------->





function createMessageWindow(msgw,msgh,bordercolor,backgroundColor,html) {
	//var msgw, msgh, bordercolor;
	//msgw = 400;// 提示窗口的宽度
	//msgh = 250;// 提示窗口的高度
	//bordercolor = "#c51100";// 提示窗口的边框颜色

	var sWidth, sHeight;
	sWidth = screen.width;
	sHeight = jQuery(document).height();

	var bgObj = document.createElement("div");
	bgObj.setAttribute('id', 'bgDiv');
	bgObj.style.position = "absolute";
	bgObj.style.top = "0";
	bgObj.style.background = backgroundColor;
	bgObj.style.filter = "progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75";
	bgObj.style.opacity = "0.6";
	bgObj.style.left = "0";
	bgObj.style.width = sWidth + "px";
	bgObj.style.height = sHeight + "px";
	bgObj.style.zIndex = "10000";
	//document.body.appendChild(bgObj);
    jQuery('body').prepend(bgObj);
	var msgObj = document.createElement("div");
	msgObj.setAttribute("id", "msgDiv");
	msgObj.setAttribute("align", "center");
	msgObj.style.background = "white";
	msgObj.style.border = "1px solid " + bordercolor;
	msgObj.style.position = "absolute";
	//msgObj.style.left = "50%";
	msgObj.style.left = (sWidth-msgw)/2+"px";
	var objtop=jQuery(document).scrollTop()+130;
	msgObj.style.top =objtop+"px";
	msgObj.style.font = "12px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif";
	//msgObj.style.marginLeft = "-225px";
	var sto=jQuery(document).scrollTop();
	msgObj.style.width = msgw + "px";
	msgObj.style.height = msgh + "px";
	msgObj.style.textAlign = "center";
	msgObj.style.lineHeight = "25px";
	msgObj.style.zIndex = "10001";
    
	//document.body.appendChild(msgObj);
     jQuery('body').prepend(msgObj);
	// 真正的表单内容添加
	msgObj.innerHTML = html;
}

function closeMessageWindow() {
    if(document.getElementById("bgDiv"))
    {
      document.body.removeChild(document.getElementById("bgDiv"));
    }
	if(document.getElementById("msgDiv"))
	{
	document.body.removeChild(document.getElementById("msgDiv"));
	}
}



//加载中对话框
function onpenLoadingMessageWindow(normalMessage)
{
    var html=getLoadingMessageHtml();
    createMessageWindow(420,50,'#FFFFFF','black',html);
}
function getLoadingMessageHtml() {
	var str = "";
	//添加表单
	str+="<div style=\"text-align: center;font-weight: 900;font-size: 20px;padding-top: 10px;\">页面加载中..<img src=\"/imges/loading.jpg\"/></div>";
	return str;
}



//一般消息对话框
function onpenNormalMessageWindow(normalMessage)
{
    var html=getNormalMessageHtml(normalMessage);
    createMessageWindow(420,50,'#FFFFFF','black',html);
}
function getNormalMessageHtml(normalMessage) {
	var str = "";
	//添加表单
	str+="<div style=\"text-align: center;font-weight: 900;font-size: 20px;color: red;padding-top: 10px;\">"+normalMessage+"</div>";
	return str;
}

//创建公司对话框
function openCreateCorpWindow()
{
   var html=getCreateCorpHtml();
   createMessageWindow(400,100,'#FFFFFF','black',html);
}
function getCreateCorpHtml()
{
   var str = "";
	//添加表单
	str+="<form id=\"createCorp\"  method=\"post\">"
	str+="<div style=\"text-align: center;\">"
	str+="<div class=\"float_right\">";
	str += "<a href=\"javascript:void(0)\" onclick=\"closeMessageWindow()\">关闭</a>";
	str+="</div>";
	str+="<div class=\"MyButton\" style=\"margin: 10px 10px 10px 150px;\" ><A href=\"javascript:void(0)\"  onclick=\"createCorp()\">创建公司</A></div>"
	str+="<div id=\"createCorpMessage\">对不起,您还没有创建公司,请点击\"创建公司\"以建立您的公司</div>"
	str+="</div>";
	str+="</form>"
	return str;
}

function createCorp()
{
//$("#createCorp").submit();
    var url = 'ajax/CorpAjax_save.action';
	var params = {
	};
	jQuery.post(url, params, createCorpbackFun);
   
}
function createCorpbackFun(data)
{
   if(data=="error")
   {
      $('#createCorpMessage').empty();
      $('#createCorpMessage').html("对不起,要创建公司必需得是会员,<a href='javascript:void(0)' onclick='openVip()'>马上免费开通>></a>");
   }
   else
   {
   var href="Corp_manage.action";
   window.location.href=href;
   }
}



//创建类别对话框
function openCreateThemeWindow(url) {
	
	var html=getCreateThemeHtml(url);
	createMessageWindow(400,180,'#2495CE',"black",html);
}

function getCreateThemeHtml(url) {
	var str = "";
	//添加标题
	str+="<h4 align=\"right\"";
	str+=" style=\"color: red;margin: 0;padding: 3px;background: #2495CE;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid #2495CE;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="创建新类别";
	str+="</h4>";
	//添加表单
	
	str+="<form action=\"";
	str+=url;
	str+="\" id=\"themeform\" method=\"post\">"; 
    str+="类别名称:<input type=\"text\" id=\"themename\" name=\"theme.name\" >";
    str+="<br>";
    str+="温馨小提示:";
    str+="<br>";
    str+="1.类别名称长度最多4个字";
    str+="<br>";
    str+="2.类别名称可以为中文、英文、数字、\"-\"、\"_\"、\"~\"";
    str+="<br>";
       str+="<div align=\"center\">";
         str+=" <input type=\"button\" id=\"ok\" value=\"确定\" onclick=\"return validateTheme()\">";
         str+="<input type=\"button\" id=\"cancel\" value=\"取消\" onclick=\"closeMessageWindow()\">";
       str+="</div>";
    
    str+="</form>";
	
	
	str += "<span id=\"errorInfo\" style=\"color: red;\"></span>";
	return str;

}

function validateTheme() {

	submitOk();
	return false;
}

function submitOk() {
	var url = 'ajax/ThemeAjax_savetheme_validate.action';
	var themename= $('#themename').attr('value');
	var params = {
		themename : themename
	};
	jQuery.post(url, params, createThemcallbackFun);
}

function createThemcallbackFun(data) {
	if ($.trim(data) == "success") {
		// 验证成功则真正执行表单提交
		$('#themeform').submit();
		closeMessageWindow();
	} else {
		$('#errorInfo').text(data);
	} 
}




//添加外链接图片对话框
 function openAddLinkPicWindow()
{
   var html=getAddLinkPicHtml();
   createMessageWindow(400,100,'#2580B0','black',html);
}


function getAddLinkPicHtml()
{
   var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: red;margin: 0;padding: 3px;background: #2580B0;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid #2580B0;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<div>";
    str+="<input type=\"text\" id=\"addLinkPicId\"/>";
    str+="</div>";
    str+="<div>";
    str+="<button onclick=\"addLinkPicOk()\">";
    str+="确定";
    str+="</button>";
    str+="</div>";
    str += "<span id=\"errorInfo\" style=\"color: red;\"></span>";
	return str;
}



function addLinkPicOk()
{
   var value=$('#addLinkPicId').attr('value');
   if($.trim(value)=="")
   {
      $('#errorInfo').text("输入的地址为能为空");
   }
   else
   {
     value = "<img src='" + value+"' height=\"200\" width=\"180\"></img>";
     upmAddLinkPink(value);
     closeMessageWindow();
   }
   
}





//添加外部链接
function openAddOutLinkWindow()
{
 var html=getAddOutLinkHtml();
   createMessageWindow(400,100,'#2580B0','black',html);
}


function getAddOutLinkHtml()
{
   var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: red;margin: 0;padding: 3px;background: #2580B0;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid #2580B0;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<div>";
    str+="http://<input type=\"text\" id=\"addOutLinkId\"/>";
    str+="</div>";
    str+="<div>";
    str+="<button onclick=\"addOutLinkHtmlOk()\">";
    str+="确定";
    str+="</button>";
     str+="</div>";
    str += "<span id=\"errorInfo\" style=\"color: red;\"></span>";
	return str;
}



function addOutLinkHtmlOk()
{
   var value=$('#addOutLinkId').attr('value');
   if($.trim(value)=="")
   {
      $('#errorInfo').text("输入的地址为能为空");
   }
   else
   {
     value = "<a href='http://" + value+"'>"+value+"</a>";
     upmAddOutLink(value);
     closeMessageWindow();
   }

}





var intervalProcess=0;
var uploaderror=false;
//上传图片
function onpenUploadImageWindow(url)
{
    var html=getUploadImageHtml(url);
    createMessageWindow(400,100,'#2580B0','black',html);
   
}
function getUploadImageHtml(url) {
	var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: red;margin: 0;padding: 3px;background: #2580B0;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid #2580B0;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<form action=\""+url+"\" id=\"uploadImg_form\" method=\"post\" enctype=\"multipart/form-data\">";
    str+="<input type=\"file\" name=\"upload\" id=\"fileupload\" onchange=\"btOk(this);\">";
    str+="<span class=\"progressBar\" id=\"progressBar\"></span>";
    str+="<span class=\"\" id=\"\" style=\"display:none;\">上传中...</span>";
    str+="<img src=\"/imges/loading.jpg\" style=\"display:none;\"></img>";
    str+="</form>";
    str += "<span id=\"errorInfo\" style=\"color: red;\"></span>";
	return str;
}
function btOk(object)
{
   $obj=$(object);
   $("#errorInfo").text('');
   uploaderror=false;
   var upload=$("#fileupload").attr("value");
   if(upload==undefined||$.trim(upload)=="")
   {
      $("#errorInfo").text('您还未选择图片');
      return false;
   }
      var houzui=upload.lastIndexOf(".");
      var houzuimin=upload.substring(houzui+1);
      if(houzuimin=="JPG"||houzuimin=="jpg"||houzuimin=="JPEG"||houzuimin=="jpeg"||houzuimin=="PNG"||houzuimin=="png"||houzuimin=="GIF"||houzuimin=="gif"||houzuimin=="BMP"||houzuimin=="bmp"||houzuimin=="X-PNG"||houzuimin=="x-png"||houzuimin=="PJPEG"||houzuimin=="pjpeg")
      {
          //$obj.next().show();
          $("#progressBar").show();
          $("#progressBar").next().show();
	      $('#uploadImg_form').ajaxSubmit(function(data){
	  if(window.ActiveXObject){	//在IE浏览器环境下(js提交表单方式返回值会自动在内容外部加上<PRE></PRE>包围,所以得去掉)
	     re1=new RegExp("<PRE>","i"); 
         re2=new RegExp("</PRE>","i"); 
         data=data.replace(re1,"");
         data=data.replace(re2,"");
	  }
	  if(data=="error")
	  {
	    uploaderror=true;
	    $("#progressBar").hide();
	    $("#progressBar").next().hide();
	    $("#progressBar").next().next().hide();
	    $("#errorInfo").text('上传失败!您上传的图片大小超过了2M');
	    $("#progressBar").progressBar(0);
	    $("#progressBar").next().text("上传中.....")
	  }
	  else
	  {
	  //$("#progressBar").progressBar(100);
      upimg(data);
      closeMessageWindow();
      }
      //$obj.next().hide();
      });
    
     //每隔500毫秒发送一次ajax请求上传进度
      intervalProcess = setInterval("getProceseStatus(uploadProcessInCkeditorCallBackFunction)", 500);
      }
      else
      {
       $("#errorInfo").text('上传失败!您上传的图片格式不对');
      }
    
	
}
var uploadProcessCallBackFunction;
function getProceseStatus(uploadProcessCallBackFunction)
{
   uploadProcessCallBackFunction=uploadProcessCallBackFunction;
   jQuery.ajax({ //一个Ajax过程 
   type: "post", //以post方式与后台沟通 
   url : 'ajax/ProgressAjax_getProcessStatus.action?t='+new Date(), 
   dataType:'json',//返回的值以 JSON方式 解释 
   success: function(json){
         if(json.finished=="true")
         {
             uploadProcessCallBackFunction();
             clearInterval(intervalProcess);
         }
         else
         {
           var temp=json.percentage;
           var tempint=parseInt(100*temp);
           jQuery("#progressBar").progressBar(tempint); 
         }   
   }
   }); 
}
function uploadProcessInCkeditorCallBackFunction()
{
        if(!uploaderror)
        {
              $("#progressBar").progressBar(100);
              $("#progressBar").next().text("上传完成,后台正在分析图片")
              $("#progressBar").next().next().show();
        }
}
function btCancle()
{
    closeMessageWindow();
}




//转发对话框
var forwardType="usersIndex";//corpIndex,usersTalkDetail,corpLogDetail
function onpenForwardDialog(url1,url2,id,type)
{
   forwardType=type;
   $.ajax({ //一个Ajax过程 
   type: "post", //以post方式与后台沟通 
   url : url1, //"ajax/UsersTalkAjax_loadById.action"与此页面沟通 
   dataType:'json',//返回的值以 JSON方式 解释 
   data: 'id='+id, //发给php的数据有两项，分别是上面传来的u和p 
   success: function(json){//如果调用php成功 
   
   //如果主贴被删除的话
   if(json.error=="delete")
   {
       onpenNormalMessageWindow("对不起,该贴的主贴已被删除,不能转发");
        setTimeout("closeMessageWindow()",2000);
   }
   else if(json.error=="unlogin")
   {
      onpenNormalMessageWindow("对不起,您还未登陆,请先登陆才能执行该操作");
      setTimeout("lazyOpenLoginDialog()",2000);
      
   }
   else
   {
   var html=getCreateForwardHtml(url2,id,json.name,json.context,json.href,json.link,json.masterid,json.type);
	createMessageWindow(450,300,'#2580B0','black',html);
	
	
	                //实例化主体内容显示
	                if(CKEDITOR.instances['forwardmastercontext'])
					{ 
					CKEDITOR.instances['forwardmastercontext'].destroy(true);
					}
					CKEDITOR.replace( 'forwardmastercontext',
                              {
                                  width : 460, //宽度   
                                  height : 100, //高度
                                 // startupFocus : true,
                                  resize_enabled : false,
                                  toolbarStartupExpanded : false,
                                  toolbar : 'ForwardToolbar'
                                  });
                                  
             CKEDITOR.instances.forwardmastercontext.setData("<div style=\"background-color: #F3F3F3;\"><a href='"+json.href+"' link='"+json.link+"'>@"+json.name+"</a>:"+json.context+"</div>");                  
	               //实例化转发中的ckeditor
	                if(CKEDITOR.instances['forwardcontext'])
					{ 
					CKEDITOR.instances['forwardcontext'].destroy(true);
					}
					CKEDITOR.replace( 'forwardcontext',
                              {
                                  width : 400, //宽度   
                                  height : 100, //高度
                                  resize_enabled : false,
                                  toolbarStartupExpanded : false,
                                  toolbar : 'ForwardToolbar',
                                  startupFocus : true
                                  });
	   CKEDITOR.instances.forwardcontext.setData(json.appendcontext);
	   // CKEDITOR.instances.forwardcontext.insertHtml(json.appendcontext);
	}
    } 
   }); 
   
}
function lazyOpenLoginDialog()
{
closeMessageWindow();
openLoginWindow();
}
function getCreateForwardHtml(url,id,name,context,href,link,masterid,type)
{
    var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: blue;margin: 0;padding: 3px;background: #2580B0;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid white;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<div class=\"master_contain\">"
 str+="<div class=\"master_forward\">"
 str+="<textarea id=\"forwardmastercontext\" name=\"forwardmastercontext\"  rows=\"4\" cols=\"50\" disabled=\"disabled\"></textarea>"
 //str+="<a href='"+href+"' link='"+link+"'>@"+name+"</a>:"+context;
 str+="</div>"
  str+="<div class=\"\">";
  if(type=="corpLog")
  {
   str+="<a href='CorpLog_listForward.action?corpLog.id="+masterid+"'>查看原文</a>";
  }
  else
  {
   str+="<a href='UsersTalk_listForward.action?usersTalk.id="+masterid+"'>查看原文</a>";
  }
 
 str+="</div>";
 str+="<div class=\"forwardtextaera\">"
 str+="<textarea id=\"forwardcontext\" name=\"forwardcontext\"  rows=\"8\" cols=\"50\" class=\"forward_textarea\"></textarea>"
 str+="</div>"
 str+="<div>"
 str+="<div id=\"forwardErrorMessage\" style=\"display:none;color:red;\"></div>";
 str+="<div  class=\"forwardButton float_right\" onclick=\"beginForward('"+url+"',"+id+")\"></div>"
 str+="</div>"
 str+="</div>"
 return str;
}

function beginForward(url,id)
{
            var context=CKEDITOR.instances.forwardcontext.getData();
            var contextTemp=context;
            var re1=new RegExp("&nbsp;","g"); 
            contextTemp=contextTemp.replace(re1,"");
            var re2=new RegExp("<[^>]*>","g");
            length=contextTemp.replace(re2,"").length;
            if(length>500)
            {
               $('#forwardErrorMessage').text("转的的内容不能超过500个字");
               $('#forwardErrorMessage').show();
               return;
            }
		    var params = {
		    		
		    		id:id,
		    		context:context
		    };
   jQuery.post(url, params, forwadUsersTalkCallBack);
}
function forwadUsersTalkCallBack(data)
{
    closeMessageWindow();
    if(forwardType=="usersIndex"||forwardType=="usersTalkDetail"||forwardType=="corpLogDetail")
    {
       $('#thumbs').prepend(data);
       add_a_mouseoverandoutevent();
       add_hover_mouseoverandoutevent();
        onpenNormalMessageWindow("转发成功");
        setTimeout("closeMessageWindow()",2000);
    }
    else if(forwardType="corpIndex"||forwardType=="otherUsersIndex")
    {
       onpenNormalMessageWindow("转发成功");
       setTimeout("closeMessageWindow()",2000);
    }
    
}


function forwardInDetail(id,url)
{
            
            var context=CKEDITOR.instances.forwardcontextindetail.getData();
		    var params = {
		    		
		    		id:id,
		    		context:context
		    };
   jQuery.post(url, params, forwardInDetailCallBack);
}
function forwardInDetailCallBack(data)
{
   if(data=="unlogin")
   {
     onpenNormalMessageWindow("对不起,您还未登陆,请先登陆才能执行该操作");
   }
   else
   {
   CKEDITOR.instances.forwardcontextindetail.setData("");
    $('#thumbs').prepend(data);
    add_a_mouseoverandoutevent();
    add_hover_mouseoverandoutevent();
    onpenNormalMessageWindow("转发成功");
   }
   setTimeout("closeMessageWindow()",2000);
    
}

//用户回复

function showReply(object,id,url)
{
        $obj=$(object);
        $obj.parent().next().find('.c_talk_reply').show();
        loadAllreply(object,id,url);
}
function loadAllreply(object,id,url)
{
      $obj=$(object);
       //var url = 'ajax/UsersTalkAjax_loadReplyByUsersTalkId.action';
		    var params = {
		    		
		    		id:id
		    };
      jQuery.post(url, params, loadReplyByIdCallBack);
      
}
function loadReplyByIdCallBack(data)
{
  $obj.parent().next().find(".reply_body").empty();
  $obj.parent().next().find(".reply_body").prepend(data);
}





function replyOk(object,id,url)
{
    $obj=$(object);
    var rcontext=$obj.parent().prev().find('.usersTalk_reply').attr('value');
    //var url = 'ajax/UsersTalkAjax_reply.action';
		    var params = {
		    		
		    		context:rcontext,
		    		id:id
		    };
   jQuery.post(url, params, replyOkCallBack);
   
}
function replyOkCallBack(data)
{
  $obj.parent().prev().find('.usersTalk_reply').attr('value','');
  $obj.parent().next().prepend(data);
    
}

function closeReply(object)
{
    $obj=$(object);
    $obj.parent().parent().hide();
}


function childrenReply(object,usersname)
{
  $obj=$(object);
  $obj.parent().parent().parent().prev().prev().find('.usersTalk_reply').attr('value','回复 @'+usersname+": ")
}

function detailchildrenReply(object,usersname)
{
  $obj=$(object);
  $temp=$obj.parent().next();
  $temp.show();
  $temp.find('.u_f_t').attr('value','回复 @'+usersname+": ")
}



function detailreplyok(obj,id,url)
{
   $object=$(obj);
    var rcontext=$object.prev().attr('value');
   // var url = 'ajax/UsersTalkAjax_replyindetail.action';
		    var params = {
		    		
		    		context:rcontext,
		    		id:id
		    };
   jQuery.post(url, params, detailreplyokindetailCallBack);
}
function detailreplyokindetailCallBack(data)
{
  $('#reply_contain').prepend(data);
  $temp=$obj.parent().next();
  $temp.hide();
  onpenNormalMessageWindow("回复成功");
  setTimeout("closeMessageWindow()",2000);
}


function replyInDetail(id,url)
{
    var rcontext=$("#reply_editor").attr('value');
   // var url = 'ajax/UsersTalkAjax_replyindetail.action';
		    var params = {
		    		context:rcontext,
		    		id:id
		    };
   jQuery.post(url, params, replyInDetailCallBack);
}
function replyInDetailCallBack(data)
{
   $("#reply_editor").attr('value',"");
   $('#reply_contain').prepend(data);
}


//查看大图

function showBigImg(imgUrl)
{
  var object=document.getElementById("blk6");
  if(object==null)
  {
  var html=createShowBigImgHtml(imgUrl);
   $('body').prepend(html);
   new PopupLayer({ trigger: "#ele6", popupBlk: "#blk6", closeBtn: "#close6", useOverlay: true, offsets: { x: 50, y:50} });
  }
  else
  {
     $('#img_iframe').attr('src',"showBigImg.jsp?imgUrl="+imgUrl);
  }
  showImg();
   
}
function showImg() {

    $("#ele6")[0].click();
}
function closeImg() {
    $("#close6")[0].click();
}
function createShowBigImgHtml(imgUrl)
{
   var str="";
   str+="<div id=\"ele6\" style=\"cursor:hand; color: blue; display:none;\">";
   str+="<div id=\"blk6\" style=\"display:none;\">";
   str+="<div class=\"main\">"; 
   str+="<div><img id=\"close6\" style=\"cursor: pointer;\" title=\"关闭\" src=\"/imges/close.png\" width=\"50\" height=\"50\"/></div> ";     
   str+="<iframe id=\"img_iframe\" height=\"600\"  width=\"1000\" src=\"showBigImg.jsp?imgUrl="+imgUrl+"\"></iframe> ";                   
   str+="</div>";            
   str+="</div>";
   str+="</div>";
   return str;
   
}




//举报
function createReportDialog(url1,url2,id,type)
{
   $.ajax({ //一个Ajax过程 
   type: "post", //以post方式与后台沟通 
   url : url1, //"ajax/UsersTalkAjax_loadByIdforReport.action"与此页面沟通 
   dataType:'json',//返回的值以 JSON方式 解释 
   data: 'id='+id, //发给php的数据有两项，分别是上面传来的u和p 
   success: function(json){//如果调用php成功 
   
   if(json.error=="unlogin")
   {
     onpenNormalMessageWindow("对不起,您还未登陆,请先登陆才能执行该操作");
      setTimeout("closeMessageWindow()",2000);
   }
   else
   {
   var html=getCreateReportHtml(url2,id,type,json.name,json.link);
   
	createMessageWindow(400,310,'#2580B0','black',html);
	                if(CKEDITOR.instances['reportcontext'])
					{ 
					CKEDITOR.instances['reportcontext'].destroy(true);
					}
					CKEDITOR.replace( 'reportcontext',
                              {
                                  width : 380, //宽度   
                                  height : 100, //高度
                                 // startupFocus : true,
                                  resize_enabled : false,
                                  toolbarStartupExpanded : false,
                                  toolbar : 'ForwardToolbar'
                                  });
	CKEDITOR.instances.reportcontext.setData(getReportCkeditorHtml(json.context,json.master,json.masterlink,json.mastercontext,json.mastername));
	//$('#reportcontext').attr('value',getReportCkeditorHtml(json.context,json.master,json.masterlink,json.mastercontext,json.mastername));
	$('#cke_contents_reportcontext').attr();
    }
    } 
   }); 
}
function getReportCkeditorHtml(context,master,masterLink,masterContext,masterName)
{
    var str="<div>";
	str+="<div>"+context+"</div>";
	if(master!="none")
	{
	   if(master=="delete")
	   {
	    str+="<div style=\"background-color:#CCCCCC\">";
	    str+="<div>主贴已被删除</div>";
	    str+="</div>";
	   }
	   else
	   {
	    str+="<div style=\"background-color:#CCCCCC\">";
	    str+="<div>";
	    str+="<a href=\""+masterLink+"\">@"+masterName+":</a>";
	    str+="<div>"+masterContext+"</div>";
	    str+="</div>";
	    str+="</div>";
	   }
	}
	str+="</div>";
	return str;
}
function getCreateReportHtml(url,id,type,name,link)
{
    var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: blue;margin: 0;padding: 3px;background: #2580B0;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid white;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<div style=\"margin-left: 10px;margin-right: 10px;\">";
	
	
	str+="<div>你举报的是&nbsp;(<a href=\""+link+"\" style=\"display: inline-block;color:red;max-width: 100px;white-space: nowrap;word-wrap: normal;overflow: hidden;text-overflow: ellipsis;\" title='"+name+"'>@"+name+"</a>)的日志:</div>";
	str+="<textarea id=\"reportcontext\" rows=\"8\" cols=\"50\" disabled=\"disabled\"></textarea>";
	
	
	
	
	str+="<div style=\"text-align:left\">";
	str+="<div>举报类型:</div>";
	str+="<input type=\"radio\" name=\"reportType\" value=\"色情\" /> 色情";
	str+="<input type=\"radio\" name=\"reportType\" value=\"广告欺诈\" /> 广告欺诈";
	str+="<input type=\"radio\" name=\"reportType\" value=\"反动政治\" /> 反动政治";
	str+="<input type=\"radio\" name=\"reportType\" value=\"谩骂骚扰\" /> 谩骂骚扰";
	str+="<input type=\"radio\" name=\"reportType\" value=\"伪造他人言论\" /> 伪造他人言论";
	str+="<input type=\"radio\" name=\"reportType\" value=\"机器人\" /> 机器人";
	str+="<input type=\"radio\" name=\"reportType\" value=\"恶意@\" /> 恶意@";
	str+="<input type=\"radio\" name=\"reportType\" checked value=\"其他\" /> 其他";
	str+="</div>";
	
	str+="<div>";
	str+="<div style=\"text-align:left\">举报说明(可选):</div>";
	str+="<div style=\"text-align:left\"><input type=\"text\" id=\"description\" style=\"width:380px\"></input><div>";
	str+="</div>";
	
	
	str+="<div style=\"text-align:center\">";
	str+="<button onclick=\"reportOk('"+url+"','"+type+"','"+id+"')\">确定</button>";
	str+="<button onclick=\"closeMessageWindow()\">取消</button>";
	str+="</div>";
	
	
   
   
    str+="</div>";
	return str;
}
function reportOk(url,type,id)
{
       var description=$('#description').attr('value');
       var reportType="";
       var reportTypes=document.getElementsByName('reportType');
       for(var i=0;i<reportTypes.length;i++)
       {
         $temp=$(reportTypes[i]);
         if($temp.attr('checked'))
         {
           reportType=$temp.attr('value');
           break;
         }
       }
		    var params = {
		            reportType:reportType,
		            description:description,
		            type:type,
		    		id:id
		    };
   jQuery.post(url, params, reportCallBack);
}
function reportCallBack(data)
{
       closeMessageWindow();
       onpenNormalMessageWindow("举报成功");
       setTimeout("closeMessageWindow()",2000);
}

//------------------------------------弹出背部隐藏对话框(结束)---------------------------------------->




















//-------------------------在users_index.jsp与corp_index.jsp与index.jsp中共用的(开始)------------------

//开关(当更新未结束时阻止再次发送请求更新)
var offOn=true;
var urltemp;
// 给浏览器窗口绑定 scroll 事件 
function refreshData(url) {   
    urltemp=url;  
// 判断窗口的滚动条是否接近页面底部     
	if ((($(document).scrollTop() + $(window).height()) > ($(document).height() - 250))&&offOn) {
	offOn=false;         
// 判断是否需要更新         
    var isneedupdate = $("#isneedupdate").text();
		if ($.trim(isneedupdate)=="false") {  
		     // 隐藏加载数据提示模块
		     $("#loading").hide();
			 offOn=true;           
		} else {
            $("#loading").show();
		    var params = {};
		    jQuery.post(url, params, updateCallback);
		}
		
	}
}
function updateCallback(data)
{
        var result =data;
        $("#isneedupdate").remove(); 
        
        //如果是index.jsp页发送的请求
        if(urltemp.indexOf("IndexAjax_updateAjaxRefreshData.action")!=-1)
        {
           var $result=$(result);
           $('#thumbs').append($result).masonry( 'appended', $result );
        }
        else
        {
           $("#thumbs").append(result); 
           add_hover_mouseoverandoutevent();
        }
	//	$("#page_loading").hide("slow");
		offOn=true;
		add_a_mouseoverandoutevent();
		 //如果是用户首页则执行
		if(urltemp.indexOf("UsersAjax_updateAjaxRefreshData.action")!=-1)
		{
		  	checkOverflow_context();
		}
		else if(urltemp.indexOf("CorpAjax_updateAjaxRefreshData.action")!=-1)
		{
		   refreshCss();
		}
		$("#loading").hide();
}


var locationHrefTemp="";
var idTemp;
var pagerMethodTemp;
var currentPageTemp;
function queryByPage(url,id,pagerMethod,historyUrl)
{
   onpenLoadingMessageWindow();
   urltemp=url;
   var currentPage=1;
   //如果是跳转操作
    if(pagerMethod=="go")
	{
	  currentPage=$('#pager_go').attr('value');
	}
	else
	{
      currentPage=$('#currentPage').text();
    }
   currentPageTemp=currentPage;
   pagerMethodTemp=pagerMethod;
   idTemp=id;
   if(urltemp.indexOf("ajax/CorpAjax")!=-1)
   {
     var themeId=$('#themeId').text();
     idTemp=themeId;
     if(historyUrl.indexOf("Corp_index")!=-1)
     {
        locationHrefTemp=historyUrl+"&theme.id="+themeId+"&currentPage="+currentPage+"&pagerMethod="+pagerMethod;
     }
     else
     {
        locationHrefTemp=historyUrl+"?theme.id="+themeId+"&currentPage="+currentPage+"&pagerMethod="+pagerMethod;
     }
   }
   else
   {
   locationHrefTemp=historyUrl+"?currentPage="+currentPage+"&pagerMethod="+pagerMethod;
   }
   var params = {
     id:idTemp,
     currentPage:currentPage,
     pagerMethod:pagerMethod
   };
   jQuery.post(url, params, updatePageCallback);
}
function updatePageCallback(data)
{
    var result =data;
    $("#thumbs").empty();
    //如果是index.jsp页发送的请求
    $("#thumbs").append(result); 
    add_hover_mouseoverandoutevent();
    var now_page=$("#nowPage").text();
	if(!(now_page==undefined||$.trim(now_page)==""))
	{
	   $("#pager_go").attr('value',now_page);
	}
	if($('#previousPage').text()=="show")
	{
	  $('#pager_previous').show();
	}
	else if($('#previousPage').text()=="hidden")
	{
	  $('#pager_previous').hide();
	}
	if($('#nextPage').text()=="show")
	{
		$('#pager_next').show();
	}
	else if($('#nextPage').text()=="hidden")
	{
		$('#pager_next').hide();
	}
	$('#currentPage').text(now_page)
	
	$('#previousPage').remove();
	$('#nextPage').remove();
    $("#nowPage").remove();
    $("#pageSize").remove();
    
    //如果是用户首页则执行
    if(urltemp.indexOf("ajax/UsersAjax")!=-1)
	{
		  	checkOverflow_context();
	}
	else if(urltemp.indexOf("ajax/CorpAjax")!=-1)
	{
	   refreshCss();
	}
	add_a_mouseoverandoutevent();
    window.scrollBy(0,(0-$(window).height()-$(document).scrollTop())); 
    closeMessageWindow();
    //$("#loading").show();
    
    
    var state = { 
    title: document.title, 
    url: locationHrefTemp,
    urlaction:urltemp,
    id:idTemp,
    currentPage:currentPageTemp,
    pagerMethod:pagerMethodTemp
    }; 
    window.history.pushState(state, document.title, locationHrefTemp);
}

window.addEventListener('popstate', function(e){
  if (history.state){
    var state = e.state;
    if(state!=undefined||state!=null)
    {
    queryByPageHistory(state.urlaction,state.id,state.pagerMethod,state.currentPage)
    }
    // alert("*");
    //do something(state.url, state.title);
  }
}, false);


var urltempHistory;
var id_s;
function queryByPageHistory(url,id,pagerMethod,currentPage)
{
   urltempHistory=url;
   id_s=id;
   var params = {
     id:id,
     currentPage:currentPage,
     pagerMethod:pagerMethod
   };
   jQuery.post(url, params, updatePageCallbackHistory);
}
function updatePageCallbackHistory(data)
{
    var result =data;
    $("#thumbs").empty();
    //如果是index.jsp页发送的请求
    if(urltempHistory.indexOf("ajax/IndexAjax")!=-1)
    {
      var $result=$(result);
      $('#thumbs').masonry('reload');
      $('#thumbs').prepend( $result ).masonry( 'reload');
    }
    else
    {
      $("#thumbs").append(result); 
      add_hover_mouseoverandoutevent();
    }
    var pageSize=$('#pageSize').text();
    $('#pager_go').empty();
    var page_goHtml="";
    for(var i=1;i<=pageSize;i++)
    {
        page_goHtml+="<option value='"+i+"'>第"+i+"页 </option>";
    }
    $('#pager_go').append(page_goHtml);
    
    var now_page=$("#nowPage").text();
	if(!(now_page==undefined||$.trim(now_page)==""))
	{
	   $("#pager_go").attr('value',now_page);
	}
	if($('#previousPage').text()=="show")
	{
	  $('#pager_previous').show();
	}
	else if($('#previousPage').text()=="hidden")
	{
	  $('#pager_previous').hide();
	}
	if($('#nextPage').text()=="show")
	{
		$('#pager_next').show();
	}
	else if($('#nextPage').text()=="hidden")
	{
		$('#pager_next').hide();
	}
	$('#currentPage').text(now_page)
	
	$('#previousPage').remove();
	$('#nextPage').remove();
    $("#nowPage").remove();
    $("#pageSize").remove();
    
    //如果是用户首页则执行
    if(urltempHistory.indexOf("ajax/UsersAjax")!=-1)
	{
		  	checkOverflow_context();
	}
	else if(urltempHistory.indexOf("ajax/CorpAjax")!=-1)//如果是公司页的话,除了取得上一页数据,还得把公司主题当前被选中的颜色改变和themeId
	{
		  	var $temp= $(".themeselected");
	        $temp.removeClass("themeselected");
		    $temp.addClass("themeunselect");
		    $temp=$('.findthemeidkey');
		    for(var i=0;i<$temp.length;i++)
		    {
		        var select=$temp.get(i);
		        if(select.innerText==id_s)
		        {
		           $select=$(select);
		           $select.parent().removeClass("themeunselect");
		           $select.parent().addClass("themeselected");
		           break;
		        }
		    }
		    $('#themeId').text(id_s);
		    refreshCss();
	}
	add_a_mouseoverandoutevent();
    window.scrollBy(0,(0-$(window).height()-$(document).scrollTop())); 
    closeMessageWindow();
    //$("#loading").show();
}







//添加附件话框
function openAddattachmentWindow(url)
{
   var html=getAddattachmentHtml(url);
  createMessageWindow(400,100,'#2580B0','black',html);
}


function getAddattachmentHtml(url)
{
   var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: red;margin: 0;padding: 3px;background: #2580B0;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid #2580B0;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<form action=\""+url+"\" id=\"uploadAttachment_form\" method=\"post\" enctype=\"multipart/form-data\">";
    str+="<input type=\"file\" name=\"upload\" id=\"fileupload\" onchange=\"addAttchmentOk(this);\">";
    str+="<span class=\"progressBar\" id=\"progressBar\"></span>";
    str+="<span class=\"\" id=\"\" style=\"display:none;\">上传中...</span>";
    str+="<img src=\"/imges/loading.jpg\" style=\"display:none;\"></img>";
    str+="</form>";
    str += "<span id=\"errorInfo\" style=\"color: red;\"></span>";
	return str;
}
function addAttchmentOk(object)
{
    $obj=$(object);
    $("#errorInfo").text('');
    uploaderror=false;
    var upload=$("#fileupload").attr("value");
    if(upload==undefined||$.trim(upload)=="")
    {
      $("#errorInfo").text('您还未选择文件');
      return false;
    }
    //$obj.next().show();
     $("#progressBar").show();
     $("#progressBar").next().show();
	 $('#uploadAttachment_form').ajaxSubmit(function(data){
	 try{
	  var result=eval("(" + data + ")");
	  if(result.success==false)
	  {
	    uploaderror=true;
	    $("#progressBar").hide();
	    $("#progressBar").next().hide();
	    $("#progressBar").next().next().hide();
	    $("#errorInfo").text('上传失败!附件上传文件大小不能大于10M');
	    $("#progressBar").progressBar(0);
	    $("#progressBar").next().text("上传中.....")
	  }
	  else
	  {
      upmAddattachment(result);
      closeMessageWindow();
      }
      }
      catch(e){
      
       clearInterval(intervalProcess);
        uploaderror=true;
	    $("#progressBar").hide();
	    $("#progressBar").next().hide();
	    $("#progressBar").next().next().hide();
	    $("#errorInfo").text('上传失败!附件上传文件大小不能大于10M');
	    $("#progressBar").progressBar(0);
	    $("#progressBar").next().text("上传中.....")
	    
      }
      
      
      });
    
     //每隔500毫秒发送一次ajax请求上传进度
      intervalProcess = setInterval("getProceseStatus(uploadAttachmentProcessCallBackFunction)", 500);
}
function upmAddattachment(data)
{
  var str="<a href='javascript:void(0)' onclick='downloadAttachment("+data.id+")' title='下载'>"+data.realName+"<img src='/imges/down.jpg' height='10' width='15'></img></a>";
  if(data.showQuick==true)
  {
     str+="<a href='javascript:void(0)' onclick='showQuick(this,"+data.id+")'>查看快照</a><a href='javascript:void(0)' style='display: none; '>加载中..<img src='/imges/loading.jpg'></a><div class='qucikDiv' style='display:none;' onclick='hideQuick2(this,event)' title='点击隐藏快照'></div>";
  }
  CKEDITOR.instances.ckcontext.insertHtml(str+"<br>");
  CKEDITOR.instances.ckcontext.focus();
 // var temp=CKEDITOR.instances.ckcontext.getData();
  //CKEDITOR.instances.ckcontex.setData(temp);
}

var downId;
function downloadAttachment(id)
{
   downId=id;
   var url="ajax/Ajax_validate_download.action";
   var params={id:id};
   jQuery.post(url, params, validateDownloadCallback);
}
function validateDownloadCallback(data)
{
   if(data=="success")
   {
      var url="Download.action?id="+downId;
      window.location.href=url;
   }
   else if(data=="login")
   {
      onpenNormalMessageWindow("对不起!你还未登陆,不能下载该文件,请先登陆");
      setTimeout("lazyOpenLoginDialog()",2000);
   }
   else 
   {
     onpenNormalMessageWindow("对不起!该文件已被作者删除,不能下载!");
     setTimeout("closeMessageWindow()",2000);
   }
}

var quickObj;
var quickId;
function showQuick(object,id)
{
   quickObj=$(object);
   quickId=id;
   var buffre=quickObj.next().next().text();
   if($.trim(buffre)=="")
   {
   quickObj.hide();
   quickObj.next().show();
   var url="ajax/Ajax_showQuick.action";
   var params = {
     id:quickId
   };
   jQuery.post(url, params, showQuickCallback);
   }
   else
   {
     quickObj.hide();
     quickObj.next().show();
     quickObj.next().next().show();
     quickObj.next().hide();
     
   }
}
function showQuickCallback(data)
{
   quickObj.next().hide();
   quickObj.next().next().show();
   data+="<br><a href='javascript:void(0)' onclick='hideQuick(this)' style='color:blue;'>隐藏快照</a>";
   quickObj.next().next().prepend(data);
}
function hideQuick(object)
{
   var $temp=$(object);
   var $parent=$temp.parent();
   
   var height=$parent.height();
   window.scrollBy(0,0-height);
	
   $parent.prev().hide();
   $parent.prev().prev().show();
   $parent.hide();
}
function hideQuick2(object,eve)
{
   var $temp=$(object);
  // var pointy=eve.clientY;
  // var height=$temp.offset().top;
   //var height=$temp.height();
  // var ie = navigator.appName == "Microsoft Internet Explorer";
   //var pointy = ie ? window.event.clientY : eve.clientY;
   pointy=$(document).scrollTop()+50;
   var top = object.offsetTop;
   window.scrollBy(0,0-(pointy-top));
   $temp.prev().hide();
   $temp.prev().prev().show();
   $temp.hide();
}



function uploadAttachmentProcessCallBackFunction()
{
        if(!uploaderror)
        {
              $("#progressBar").progressBar(100);
              $("#progressBar").next().text("上传完成,后台正在分析文件")
              $("#progressBar").next().next().show();
        }
}


function upimg(str) {
  if (str == "undefined" || str == "") {
       return;
   }
  // str = "<img class=\"picimg\" onclick=\"showBigImg('"+str+"')\" title=\"点击查看大图\" src='"+ str+"'/>";
   str = "<img class=\"picimg\"  src='"+ str+"'/>";
   CKEDITOR.instances.ckcontext.insertHtml(str);
}
function showaddlinkpic()
{
  openAddLinkPicWindow();
}
function upmAddLinkPink(data)
{
  CKEDITOR.instances.ckcontext.insertHtml(data);
}
function showaddoutlink()
{
    openAddOutLinkWindow();
}
function upmAddOutLink(data)
{
  CKEDITOR.instances.ckcontext.insertHtml(data);
}



//上传本地视频
function showaddmovielocal()
{
    
    $.ajax({ //一个Ajax过程 
        type: "post", //以post方式与后台沟通 
        url : 'ajax/MovieAjax_getUploadMoviePage.action', 
        data:'',
        success: function(data){//如果调用php成功 
             openAddMoveLocalWindow(data);
          } 
       }); 
}


function openAddMoveLocalWindow(url)
{
   var html=getAddMoveLocalHtml(url);
   createMessageWindow(400,200,'rgba(176, 37, 59, 0.3)','black',html);
}


function getAddMoveLocalHtml(url)
{
   var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: rgba(176, 37, 59, 0.3);margin: 0;padding: 3px;background: rgba(176, 37, 59, 0.3);filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid rgba(176, 37, 59, 0.3);height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<div>";
	str+="<iframe id=\"movie_iframe\" class=\"movieiframe\"  src=\""+url+"\"></iframe>";
	str+="</div>";
	return str;
}   








//添加外部视频链接
function showaddmovielink()
{
   openAddMoveLinkWindow();
}
function openAddMoveLinkWindow()
{
 var html=getAddMoveLinkHtml();
   createMessageWindow(400,130,'#2580B0','black',html);
}


function getAddMoveLinkHtml()
{
   var str = "";
	//添加标题
	str+="<h4 align=\"right\" onclick=\"closeMessageWindow()\"";
	str+=" style=\"color: red;margin: 0;padding: 3px;background: #2580B0;filter: progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20, finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100);opacity: 0.75;border: 1px solid #2580B0;height: 18px;font: 12px Verdana, Geneva, Arial, Helvetica, sans-serif;color: white;cursor: pointer;\"";
	str+=">";
	str+="关闭";
	str+="</h4>";
	//添加表单
	str+="<div>";
    str+="<input type=\"text\" id=\"addMovieLink\"/>";
    str+="</div>";
    str+="<span>本站暂时只支持56视频和酷6视频的外部链接</span>"
    str+="<div>";
    str+="<button onclick=\"addMoveLinkOk()\">";
    str+="确定";
    str+="</button>";
     str+="</div>";
    str += "<span id=\"errorInfo\" style=\"color: red;\"></span>";
	return str;
}
function addMoveLinkOk()
{
   var value=$('#addMovieLink').attr('value');
   if($.trim(value)=="")
   {
      $('#errorInfo').text("输入的地址为不能为空");
   }
   else
   {
      $.ajax({ //一个Ajax过程 
        type: "post", //以post方式与后台沟通 
        url : 'ajax/MovieAjax_loadByVid.action', 
        dataType:'json',//返回的值以 JSON方式 解释 
        data: 'vid='+value, //发给php的数据有两项，分别是上面传来的u和p 
         success: function(json){//如果调用php成功 
              
              insertCkByMoviedJson(json);
          } 
       }); 
   }

}
function insertCkByMoviedJson(json)
{
              if("notFount"==json.error)
              {
                   $('#errorInfo').text("该链接地址不合法");
              }
              else
              {
                  var vid=json.vid;
                  var img=json.img;
                  var moviehtml=buitlMovieImg(vid,img);
                  upmAddMovieLink(moviehtml);
                  closeMessageWindow();
              }
}
function buitlMovieImg(movieUrl,movieImg)
{
        //防止插入视频的时候会撑破原先的div容器,所以每当插入时都先换行再插入
        var html="<br>";
        
        html+="<div class='movieContain' style='max-width:660px;'>";
        html+="<div style='cursor: pointer;position: relative;' onclick='showMovieStart(this)' title='点击播放'>";
        html+="<img src='"+movieImg+"' width=\"660\" height='493'></img>"
        //html+="<div style='position: absolute;left: 305px;top: 220px;'><img  src='../imges/start1.png' width=\"50\" height='50'></img></div>";
        html+="<div class='startMovie' style=\"position:absolute;width:50px;height:50px;left:305px;top:220px;background-repeat:no-repeat;background-size:100% 100%;\"></div>";
        html+="</div>";
        html+=butiltMoviePanelByUrl(movieUrl);
        html+="</div>";
        return html;
}
function showMovieStart(object)
{
   var $obj=$(object);
   $obj.next().show();
   $obj.hide();
   
}
function hideMovieStart(object)
{
   var $obj=$(object);
   $obj.parent().hide();
   $obj.parent().prev().show();
}
function butiltMoviePanelByUrl(url)
{       
        var html="";
        html+="<div class=\"playmovie\" style='display:none;'>";// onclick='hideMovieStart(this)' title='隐藏视频'
        html+="<div onclick='hideMovieStart(this)'><a href='javascript:void(0)'>隐藏视频>></a></div>";
        html+="<object id=\"video\" width=\"660\" height=\"493\" border=\"0\" classid=\"clsid:CFCDAA03-8BE4-11cf-B84B-0020AFBBCCFA\">"; 
        html+="<param name=\"AutoStart\" value=\"0\"/>"; 
        html+="<param name=\"movie\" value='"+url+"'/>"; 
        html+="<param name=\"FileName\" value=\"\"/>";
       // html+="<embed width=\"660\" height=\"493\" border=\"0\" showdisplay=\"0\" showcontrols=\"1\" autostart=\"1\" autorewind=\"0\" playcount=\"0\" filename=\"\" src='"+url+"'>"; 
        //html+="</embed>"; 
        html+="<embed src='"+url+"' type='application/x-shockwave-flash' allowFullScreen='true' allowscriptaccess=\"never\" width='100%' height='100%' autostart=\"1\" allowNetworking='all' wmode='opaque' playcount=\"0\" allowScriptAccess='always' ></embed>";//isAutoPlay='false'
        html+="</object>"; 
        html+="</div>";
        return html;
}
function upmAddMovieLink(data)
{
  CKEDITOR.instances.ckcontext.insertHtml(data+"<br>");
  
  //防止多次连续插入视频的时候会在视频标签内部继续插入
  //var htmlData=CKEDITOR.instances.ckcontext.getData();
  //CKEDITOR.instances.ckcontext.setData(htmlData+"<br>");
}

















function checkOverflow_context() {
	var obj = document.getElementsByTagName("div");
	var length=obj.length;
	for (var i = 0; i < length; i++) {
		if (obj[i].className == "context_all") {
			var getObj = obj[i];
			var $temp = jQuery(getObj);
			var value = $temp.height();
			if (value > 500) {
				$temp.addClass("context_hiden");
				$temp.next().css("display", "block");
				$temp.next().next().css("display", "none");
			}
		}
	}
}
function openAll(object) {
	$temp1 = jQuery(object);
	$temp1.css("display", "none");
	$temp1.prev().removeClass("context_hiden");
	$temp1.next().css("display", "block");
}
function closeAll(object) {
	$temp = jQuery(object);
	var height=$temp.prev().prev().height()-500;
	window.scrollBy(0,0-height); 
	$temp.css("display", "none");
	$temp.prev().prev().addClass("context_hiden");
	$temp.prev().css("display", "block");
}
//-------------------------在users_index.jsp与corp_index.jsp与index.jsp中共用的(开始)------------------




//查看公司地图
function showCorpMap(corpId)
{
		    var params = {
		    		corpId:corpId
		    };
   jQuery.post("ajax/CorpAjax_showMap.action", params, corpShowMapCallBack);
}
function corpShowMapCallBack(data)
{
  if($.trim(data)=="error")
  {
      onpenNormalMessageWindow("对不起,该公司还未对其地址进行地图标注");
      setTimeout("closeMessageWindow()",2000);
  }
  else
  {
      window.location.href="Corp_showMap.action?corp.id="+data;
  }
}

var mp;
var po;
var begin;
var end;
function show_map_by_jw(zoom,jin,wei,province,corpName,corpAddress,corpId)
{
   mp = new BMap.Map("mapshowcontain"); // 创建Map实例      
   po = new BMap.Point(jin, wei);
   mp.centerAndZoom(po,parseInt(zoom)); 
   mp.addControl(new BMap.NavigationControl());  
   mp.addControl(new BMap.ScaleControl());  
   mp.addControl(new BMap.OverviewMapControl());  
   mp.enableScrollWheelZoom();   //启用滚轮放大缩小
   //mp.addControl(new BMap.MapTypeControl());  
   //mp.setCurrentCity(province);
    
   //生成标注
    var marker=new BMap.Marker(po)
    mp.addOverlay(marker);
    
    //在标注上加信息框
    var opts = {  
    width : 250,     // 信息窗口宽度  
    height: 100,     // 信息窗口高度  
    title : corpName  // 信息窗口标题  
    }  
    var infoWindow = new BMap.InfoWindow(corpAddress, opts);  // 创建信息窗口对象  
    marker.openInfoWindow(infoWindow); 
    marker.addEventListener("click", function(){  
       this.openInfoWindow(infoWindow);  
    });
    
    //添加右键菜单(在地图上点击手标右键选取一个点做为你的初始位置来快速搜索到该公司的路线)
    var cm=new BMap.ContextMenu();
    var mi=new BMap.MenuItem("设为起始位置", function (pTemp)
    {
           var transittemp = new BMap.TransitRoute(mp, {  
             renderOptions: {map: mp,panel: "serach_result"}  
           });
           transittemp.setSearchCompleteCallback(function(results){
            //清除原先的标柱
            mp.clearOverlays();  
           if (transittemp.getStatus() != BMAP_STATUS_SUCCESS){ 
               alert("对不起,您设置的地图位置与该公司无公交路线互通");
               var polyline = new BMap.Polyline([pTemp,po],{strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  
               mp.addOverlay(polyline);
             }
           });
          transittemp.search(pTemp, po);
          window.scrollBy(0,500);
    });
    cm.addItem(mi)
    mp.addContextMenu(cm);




    
    
  var type = "";
  type = TRANSIT_ROUTE; //公交检索
  type = DRIVING_ROUTE; //驾车检索
  type = LOCAL_SEARCH ; //本地检索


//创建检索控件
var searchControl = new BMapLib.SearchControl({
    container : "searchBox" //存放控件的容器
    , map     : mp  //关联地图对象
    , type    : type  //检索类型
});

document.getElementById("selectType").onchange = function () {
    searchControl.setType(this.value);
    $("#BMapLib_sc_b2").css('cursor','pointer');
    $("#BMapLib_sc_b2").attr('title','搜索');
    $("#BMapLib_sc_b1").css('cursor','pointer');
    $("#BMapLib_sc_b1").attr('title','切换起始和终点位置');
    document.getElementById("BMapLib_sc_b2").onclick=function () {
    //公交
    if($('#selectType').attr('value')==2)
    {
      begin=$.trim($('#BMapLib_txtNavS').attr('value'));
      end=$.trim($('#BMapLib_txtNavE').attr('value'));
       if(begin=='(默认为当前公司地址)')
       {
          begin=po;
       }
       if(end=='(默认为当前公司地址)')
       {
          end=po;
       }
      var transit = new BMap.TransitRoute(mp, {  
        renderOptions: {map: mp,panel: "serach_result"}  
      });  
      transit.setSearchCompleteCallback(function(results){  
      if (transit.getStatus() != BMAP_STATUS_SUCCESS){ 
          mp.clearOverlays();
          if(typeof begin== "string")
          {
              var localbegin = new BMap.LocalSearch(mp,{  
                renderOptions: {  
                 map   : mp,   
                autoViewport: true
                },
                pageCapacity: 1  
               });   
          localbegin.setSearchCompleteCallback(function(results){  
          if (localbegin.getStatus() != BMAP_STATUS_SUCCESS){ 
              alert("对不起,您搜索的起始位置可能不在当前地图对应城市区域或者开始地址输入有误");
          }
          else
          {
                  begin=results.getPoi(0).point;
                  if(typeof end=="string")
                  { 
                  var localend = new BMap.LocalSearch(mp,{  
                     renderOptions: {  
                     map   : mp,   
                     autoViewport: true
                     },
                     pageCapacity: 1  
                    });    
                  localend.setSearchCompleteCallback(function(results){  
                  if (localend.getStatus() != BMAP_STATUS_SUCCESS){ 
                       alert("对不起,您搜索的结束地址可能不在当前地图对应城市区域或者结束地址输入有误");
                   }
                  else
                  {
                        end=results.getPoi(0).point; 
                        //第二次搜索
                        var transittemp = new BMap.TransitRoute(mp, {  
                        renderOptions: {map: mp,panel: "serach_result" }  
                        });
                        transittemp.setSearchCompleteCallback(function(results){  
                           if (transittemp.getStatus() != BMAP_STATUS_SUCCESS){ 
                                alert("对不起,您搜索的起始地址和结束地址可能不在同一个城市或者无公交路线互通");
                                var polyline = new BMap.Polyline([begin,end],{strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  
                                mp.addOverlay(polyline);
                           }
                        });
                        transittemp.search(begin, end);
                  }
                  }); 
                  localend.search(end,true);
                  }
                  else
                  {
                      //重新生成一个结束标柱
                      var markerend=new BMap.Marker(po)
                      markerend.addEventListener("click", function(){  
                          this.openInfoWindow(infoWindow);  
                        });
                       mp.addOverlay(markerend);
                     //第二次搜索
                        var transittemp = new BMap.TransitRoute(mp, {  
                        renderOptions: {map: mp,panel: "serach_result" }  
                        });
                        transittemp.setSearchCompleteCallback(function(results){  
                           if (transittemp.getStatus() != BMAP_STATUS_SUCCESS){ 
                                alert("对不起,您搜索的起始地址和结束地址可能不在同一个城市或者无公交路线互通");
                                var polyline = new BMap.Polyline([begin,end],{strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  
                                mp.addOverlay(polyline);
                           }
                        });
                        transittemp.search(begin, end);
                  }
                  
          
          }
          }); 
          localbegin.search(begin,true);
          }
          else
          {
                  //重新生成一个起始标柱
                  var markerbegin=new BMap.Marker(po)
                  markerbegin.addEventListener("click", function(){  
                          this.openInfoWindow(infoWindow);  
                        });
                  mp.addOverlay(markerbegin);
                  
                  
                  if(typeof end=="string")
                  { 
                  var localend = new BMap.LocalSearch(mp,{  
                     renderOptions: {  
                     map   : mp,   
                     autoViewport: true 
                     },
                     pageCapacity: 1  
                    });  
                  localend.setSearchCompleteCallback(function(results){  
                  if (localend.getStatus() != BMAP_STATUS_SUCCESS){ 
                       alert("对不起,您搜索的结束地址可能不在当前地图对应城市区域或者结束地址输入有误");
                  }
                  else
                  {
                        end=results.getPoi(0).point; 
                        //第二次搜索
                        var transittemp = new BMap.TransitRoute(mp, {  
                        renderOptions: {map: mp,panel: "serach_result" }  
                        });
                        transittemp.setSearchCompleteCallback(function(results){  
                           if (transittemp.getStatus() != BMAP_STATUS_SUCCESS){ 
                                alert("对不起,您搜索的起始地址和结束地址可能不在同一个城市或者无公交路线互通");
                                var polyline = new BMap.Polyline([begin,end],{strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  
                                mp.addOverlay(polyline);
                           }
                        });
                        transittemp.search(begin, end);
                        
                        
                  }
                  }); 
                  localend.search(end,true);
                  }
                  else
                  {    //重新生成一个结束标柱
                      var markerend=new BMap.Marker(po)
                      markerend.addEventListener("click", function(){  
                          this.openInfoWindow(infoWindow);  
                        });
                      mp.addOverlay(markerend);
                     //第二次搜索
                        var transittemp = new BMap.TransitRoute(mp, {  
                        renderOptions: {map: mp,panel: "serach_result" }  
                        });
                        transittemp.setSearchCompleteCallback(function(results){  
                           if (transittemp.getStatus() != BMAP_STATUS_SUCCESS){ 
                                alert("对不起,您搜索的起始地址和结束地址可能不在同一个城市或者无公交路线互通");
                                var polyline = new BMap.Polyline([begin,end],{strokeColor:"blue", strokeWeight:6, strokeOpacity:0.5});  
                                mp.addOverlay(polyline);  
                           }
                        });
                        transittemp.search(begin, end);
                  }
          }
          
      }
      else
      {
         //清除原先的标柱
       mp.clearOverlays();
      }
     });
      transit.search(begin, end);
    }
    //驾车
    else
    {
       begin=$.trim($('#BMapLib_txtNavS').attr('value'));
       end=$.trim($('#BMapLib_txtNavE').attr('value'));
       if(begin=='(默认为当前公司地址)')
       {
          begin=po;
       }
       if(end=='(默认为当前公司地址)')
       {
          end=po;
       }
       var driving = new BMap.DrivingRoute(mp, {  
       renderOptions: {  
         map   : mp,   
         panel : "serach_result",  
         autoViewport: true 
       }  
       });  
      driving.setSearchCompleteCallback(function(results){  
      if (driving.getStatus() != BMAP_STATUS_SUCCESS){ 
          alert("对不起,未搜索到匹配结果");
      }
      else
      {
         //清除原先的标柱
       mp.clearOverlays();
      }
      });
       
       driving.search(begin, end);
    }
    };
    $('#BMapLib_txtNavS').attr('value','(默认为当前公司地址)');
    $('#BMapLib_txtNavE').attr('value','(默认为当前公司地址)');
    
};


//本地搜索
$("#BMapLib_sc_b0").css('cursor','pointer');
$("#BMapLib_sc_b0").attr('title','搜索');
document.getElementById("BMapLib_sc_b0").onclick=function () {
var citytemp=$('#BMapLib_cityTab span').text();
var addresstemp=$.trim($('#BMapLib_PoiSearch').attr('value'));

var local = new BMap.LocalSearch(citytemp,{  
       renderOptions: {  
         map   : mp,   
         panel : "serach_result",  
         autoViewport: true 
       }  
       });   
local.setSearchCompleteCallback(function(results){  
      if (local.getStatus() != BMAP_STATUS_SUCCESS){ 
          alert("对不起,未搜索到匹配结果");
      }
      else
      {
          //清除原先的标柱
          mp.clearOverlays();
      }
      }); 

local.search(addresstemp); 
 }
  
}













function show_anothor_fileNameMap(id)
{
   
   $.ajax({ //一个Ajax过程 
   type: "post", //以post方式与后台沟通 
   url : 'ajax/FileNameMapAjax_loadRelatePathById.action', 
   dataType:'json',//返回的值以 JSON方式 解释 
   data: 'id='+id, //发给php的数据有两项，分别是上面传来的u和p 
   success: function(json){//如果调用php成功 
     $('#fileNameMap_id').attr('value',json.id);
     $('#fileNameMap_src').attr('src',json.src);
   } 
   }); 
}









//从显示图片上删除照片
function show_deleteImg()
{
    $('#popup').remove();
    temp = obj;
    //王敏
    var html=create_pupup("确定要解除吗","show_deleteImg()");
    $('body').append(html);
    popup_show();
}
function show_deleteImg()
{
   
   var id=$('#fileNameMap_id').attr('value');
   var smalltemps=$('.small_fileNameMap');
   newshowId=-1;
   for(var i=0;i<smalltemps.length;i++)
   {
      var $smalltemp=$(smalltemps.get(i));
      if($smalltemp.find('input').attr('value')==id)
      {
         var $othersmalltemp=$smalltemp.parent().next();
         if($othersmalltemp.length==0)
         {
             var $othersmalltemp=$smalltemp.parent().prev();
             if($othersmalltemp.length==0)
             {
                newshowId=-1;
             }
             else
             {
                newshowId=$othersmalltemp.find('input').attr('value');
             }
         }
         else
         {
              newshowId=$othersmalltemp.find('input').attr('value');
         }
         $smalltemp.parent().remove();
         break;
      }
   }
  $.ajax({ //一个Ajax过程 
   type: "post", //以post方式与后台沟通 
   url : 'ajax/FileNameMap_deleteById.action', 
   dataType:'json',//返回的值以 JSON方式 解释 
   data: 'id='+id+'&newshowId='+newshowId, //发给php的数据有两项，分别是上面传来的u和p 
   success: function(json){//如果调用php成功 
       if(newshowId==-1)
       {
            var $mainshow=$('#fileNameMap_id').parent();
            $mainshow.empty();
            $mainshow.append('<span>本专辑肉已无图片</span>');
       }
       else
       {
         $('#fileNameMap_id').attr('value',json.newId);
         $('#fileNameMap_src').attr('src',json.newSrc);
       }
       popup_cancel();
   }
   }); 

}

























//------------------------------------赞


function praiseOk(object,type,usersId,id)
{
   $temp=$(object);
   var url = 'ajax/PraiseAjax_praiseOk.action';
		    var params = {
		    		
		    		usersId:usersId,
		    		id:id,
		    		type:type
		    };
		    jQuery.post(url, params, praiseOkCallBack);
}
function praiseOkCallBack(data)
{
   if(data=="login")
   {
      onpenNormalMessageWindow("对不起,您还未登陆,请先登陆才能执行该操作");
      setTimeout("lazyOpenLoginDialog()",2000);
   }
   else
   {
   var $now=$temp.parent();
   $now.hide();
   var $prev=$now.prev();
   var $count=$prev.find('span');
   var count=$count.text().replace('(','').replace(')','');
   count=parseInt(count)+1;
   $count.text('('+count+')');
   $prev.show();
   $count=$now.find('span');
   //count=$count.text();
   //count=parseInt(count)+1;
   $count.text('('+count+')');
   }
  
}

function praiseCancle(object,type,usersId,id)
{
   $temp=$(object);
   var url = 'ajax/PraiseAjax_praiseCancel.action';
		    var params = {
		    		
		    		usersId:usersId,
		    		id:id,
		    		type:type
		    };
		    jQuery.post(url, params, praiseCancelCallBack);
}
function praiseCancelCallBack(data)
{
   var $now=$temp.parent();
   $now.hide();
   var $next=$now.next();
   var $count=$next.find('span');
   var count=$count.text().replace('(','').replace(')','');
   count=parseInt(count)-1;
   $count.text('('+count+')');
   $next.show();
   $count=$now.find('span');
  // count=$count.text();
  // count=parseInt(count)-1;
   $count.text('('+count+')');
}










//开通会员
function openVip()
{
   closeMessageWindow();
   var html=getCreateVipHtml();
   createMessageWindow(400,100,'#FFFFFF','black',html);
}
function getCreateVipHtml()
{
   var str = "";
	//添加表单
	str+="<form id=\"createVip\" action=\"Users_createVip.action\" method=\"post\">"
	str+="<div style=\"text-align: center;\">"
	str+="<div class=\"float_right\">";
	str += "<a href=\"javascript:void(0)\" onclick=\"closeMessageWindow()\">关闭</a>";
	str+="</div>";
	str+="<div class=\"MyButton\" style=\"margin: 10px 10px 10px 150px;\" ><A href=\"javascript:void(0)\"  onclick=\"createVip()\">马上开通</A></div>"
	str+="<div><a href=\"javascript:void(0)\">什么是会员?</a></div>"
	str+="</div>";
	str+="</form>"
	return str;
}

function createVip()
{
$("#createVip").submit();
closeMessageWindow();
}



function inDaohang(divid,obj){
	var f = false;
	while(obj){
		if(obj.id==divid){
			return true;
		}
		obj = obj.parentElement||obj.parentNode;
	}
	return false;
}












