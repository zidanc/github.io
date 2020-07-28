// JavaScript Document
$(document).ready(function(e) {
    $(".mainmu").mouseover(
		function() {
			$(this).children(".mw").stop().show()
		}
	)
	$(".mainmu").mouseout(
		function () {
			$(this).children(".mw").hide()
		})
});


function lo(x) {
	location.replace(x)
}


function op(x,y,url) {
	$(x).fadeIn()
	if(y)
	$(y).fadeIn()
	if(y&&url)
	$(y).load(url)
}


function cl(x) {
	$(x).fadeOut();
}

//Jquery寫法
//scroll to specific id
$(document).ready(function(){

	$("#mynavbar a, #scrollToBanner").click(function(){
		// console.log(this);
		let who=$(this).attr("href");
		// console.log($(who).offset().top);
		let val=$(who).offset().top;
		$("html").animate({
			scrollTop : val
		},1000,"swing");
	});
	
	// scroll spy
	$(window).scroll(function(){ spy() });
		spy();
	

	function spy(){
		let nowAt=$(window).scrollTop();

		$("section").each(function(){
			let 
				id=$(this).attr("id"),
				offset=$(this).offset().top,
				height=$(this).innerHeight();
			
				if(offset<nowAt && nowAt<offset+height){
					// this section is nowAt's zone
					$("#mynavbar a").removeClass("active");
					$(`#mynavbar a[href='#${id}']`).addClass("active");
				}

		});

	}


});

