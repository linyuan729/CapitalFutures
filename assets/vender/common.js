$(function(){
	
	//mobile menu
	$(".btn-remove, .overlay-nav").click(function(){
		
		$(".menu").removeClass("active");
		$(".overlay-nav").removeClass("active");
		$(".lightbox").fadeOut();
		
	});
	$(".btn-bars").click(function(){
		
		$(".menu").addClass("active");
		$(".overlay-nav").addClass("active");
		
	});	
	
	//menu hover
	$(".menu li").mouseenter(function(){
		var N = $(this).index() + 1;
		$(this).find("img").attr("src","assets/images/menu" + N + "h.png");
		$(this).find(".submenu").show();
	});
	$(".menu li").mouseleave(function(){
		var N = $(this).index() + 1;
		$(this).find("img").attr("src","assets/images/menu" + N + ".png");
		$(this).find(".submenu").hide();	
	});
		
	//submenu click
	$(".submenu li").click(function(){
		$(this).parent().hide();
		$(".menu").removeClass("active");
		$(".overlay-nav").removeClass("active");
	});
	
	//lightbox
	$(".overlay, .cancelbtn, .closebtn").click(function(){
		
		$(".overlay").fadeOut();
		$(".lightbox").fadeOut();
		
	});
	
	$(".profile").fadeIn();
	$(".sharefbbtn").click(function(){
		
		$(".overlay").fadeIn();
		$(".sharefb").fadeIn();
		
	});
	$(".userinfobtn").click(function(){
		
		$(".overlay").fadeIn();
		$(".userinfo").fadeIn();
		
	});
	$(".finishbtn").click(function(){
		
		$(".overlay").fadeIn();
		$(".lightbox").fadeIn();
		
	});
	$(".powerbtn").click(function(){
		
		$(".overlay").fadeIn();
		$(".lightbox").fadeIn();
		
	});
	
	//tab
	$(".tab .thumb li").click(function(){
		
		var N = $(this).index();
		
		$(this).addClass("active").siblings(".active").removeClass("active");
		$(".panel li.panel_c").hide();
		$($(".panel li.panel_c")[N]).show();
		
	});
	
	//goto
	$(document).ready(init);
	function init(){
		$(".gotop").click(function(){
			$("html, body").animate({scrollTop: "0px"}, 500);
		});
		$(".m1-1").click(function(){
			$('html, body').animate({scrollTop:$("#method1").offset().top+-50}, 500);
		});
		$(".m1-2").click(function(){
			$('html, body').animate({scrollTop:$("#method2").offset().top+-50}, 500);
		});
		$(".m1-3").click(function(){
			$('html, body').animate({scrollTop:$("#method3").offset().top+-50}, 500);
		});
		$(".m1-4").click(function(){
			$('html, body').animate({scrollTop:$("#method4").offset().top+-50}, 500);
		});
		$(".m3").click(function(){
			$('html, body').animate({scrollTop:$("#m3").offset().top+-50}, 500);
		});
		$(".m5-1").click(function(){
			$('html, body').animate({scrollTop:$("#m5-1").offset().top+-50}, 500);
		});
		$(".m5-2").click(function(){
			$('html, body').animate({scrollTop:$("#m5-2").offset().top+-100}, 500);
		});
		$(".m5-3").click(function(){
			$('html, body').animate({scrollTop:$("#m5-3").offset().top+-100}, 500);
		});
	}
	
	//navfixed
	var navTop = $(".nav").offset().top; //離頂部的高度
	var winScrollTop = $(window).scroll(function() {
		if(winScrollTop.scrollTop() >= navTop ) {
			$(".nav").addClass("navfixed");
		}else{
			$(".nav").removeClass("navfixed");
		}
	});
	
	console.log();
});
