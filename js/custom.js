$(document).ready(function() {
	$(".search-desktop").mouseenter(function() {
		$(this).addClass("active");
		$(".search-focus").focus();
	});

	$(".search-desktop").mouseleave(function() {
		$(this).removeClass("active");
	});

	$(".btn-search-mobile").click(function() {
		$(".search-mobile").toggleClass("d-none");
		$(".search-focus").focus();
		$(this).toggleClass("active");
	});

	$(".navbar-toggler").click(function() {
		$("#navbarTop").toggleClass("active");
		$("body").toggleClass("mobile-active");
		$(".overlay-bg").toggleClass("active");
	});

	$(".mobile-close, .overlay-bg").click(function() {
		$("#navbarTop").removeClass("active");
		$("body").removeClass("mobile-active");
		$(".overlay-bg").removeClass("active");
	});
});
