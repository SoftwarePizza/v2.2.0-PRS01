/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
/* --------------------------- TeplateTrip JS ------------------------------ */

/*------------------------------------ Start Page-loader------------------------------------------------ */
	$(window).load(function() 
	{ 
		$(".loadingdiv").fadeOut("slow");
	})
/*------------------------------------ End Page-loader------------------------------------------------- */
/* ------------ Start Content-width JS --------------- */
function contentwidth() {
	colsWidth = $('#right-column, #left-column').length;
	if($( window ).width() >= 1500) {
		$( "#content-wrapper" ).addClass( "Cwidth" );
		$( "#left-column" ).addClass( "Lwidth" );
		$( "#right-column" ).addClass( "Rwidth" );
		if (colsWidth == 2) {
			$('.Cwidth').css('width', '60%');
			$('.Lwidth').css('width', '20%');
			$('.Rwidth').css('width', '20%');
		} else if (colsWidth == 1) {
			$('.Cwidth').css('width', '75%');
			$('.Lwidth').css('width', '25%');
			$('.Rwidth').css('width', '25%');
		} else {
			$('.Cwidth').css('width', '100%');
		}
	} else if($( window ).width() > 991) {
		$( "#content-wrapper" ).addClass( "Cwidth" );
		$( "#left-column" ).addClass( "Lwidth" );
		$( "#right-column" ).addClass( "Rwidth" );
	if (colsWidth == 2) {
		$('.Cwidth').css('width', '75%');
		$('.Lwidth').css('width', '25%');
		$('.Rwidth').css('width', '100%');
		$("#right-column" ).addClass("Rtoggle" );
		$("#right-column h1.text-uppercase").click(function() {
			$(this).parent().toggleClass('active').find('.rightcolumn-toggle').slideToggle( "200" );
		});
	} else if (colsWidth == 1) {
		$('.Cwidth').css('width', '75%');
		$('.Lwidth').css('width', '25%');
		$('.Rwidth').css('width', '25%');
	} else {
		$('.Cwidth').css('width', '100%');
	}
	} else {
	$("#content-wrapper").removeClass("Cwidth");
	$("#left-column").removeClass("Lwidth");
	$("#right-column").removeClass("Rwidth");
	$("#right-column" ).removeClass("Rtoggle" );
	$('#content-wrapper').removeAttr("style");
	$('#left-column').removeAttr("style");
	$('#right-column').removeAttr("style");
	} 
}
$(document).ready(function(){contentwidth();});
$(window).resize(function() {contentwidth();});

/* ------------ End Content-width JS --------------- */


$(document).ready(function() {

    /* Go to Top JS START */
    if ($('#goToTop').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#goToTop').addClass('show');
                } else {
                    $('#goToTop').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#goToTop').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    /* Go to Top JS END */

	AOS.init({
		duration: 1200
	});

	$('#ttcmsheader .close-btn').on('click', function(e) {
            e.preventDefault();
           $(".nav1").slideToggle("fast");
		   $("#header").addClass("offer-close");
        });
	
/*--------------- Start langauge-currency toggle -----------*/
$(".language-selector-wrapper").click(function() {
	$("#search_widget").removeClass("active");
	$(".user-info").slideUp("slow");
	$(".ttuserheading").removeClass("active");
	$("body").removeClass("cart-active");
	$(".cart_block").slideUp("slow");
	$("body").removeClass("search-open");
	$("body").toggleClass("language-open");
	$("body").removeClass("currency-open");
	$("body").removeClass("user-open");
});

$(".currency-selector").click(function() {
	$("#search_widget").removeClass("active");
	$(".user-info").slideUp("slow");
	$(".ttuserheading").removeClass("active");
	$("body").removeClass("cart-active");
	$(".cart_block").slideUp("slow");
	$("body").removeClass("search-open");
	$("body").removeClass("language-open");
	$("body").toggleClass("currency-open");
	$("body").removeClass("user-open");
});
/*--------------- End langauge-currency toggle -----------*/
/*---------------- Start Search ---------------- */

$(".nav2 .ttsearchtoggle button").click(function() {
$('.nav2 .ttsearchtoggle').parent().toggleClass('active');
$(".language-selector-wrapper .dropdown-menu").css('display','none');
$(".currency-selector .dropdown-menu").css('display','none');
	$(".language-selector-wrapper .dropdown-menu").slideUp("slow");
	$(".language-selector").removeClass("open");
	$(".currency-selector .dropdown-menu").slideUp("slow");
	$(".currency-selector").removeClass("open");
	$("body").removeClass("user-open");
	$(".user-info").slideUp("slow");
	$("body").removeClass("cart-active");
	$(".cart_block").slideUp("slow");
	$(".ttuserheading").removeClass("active");
	$('.nav2 #search_query_top').attr('autofocus', 'autofocus').focus();
	$("body").toggleClass("search-open");
});

$('.ttsearchtoggle form').submit(function () {

    // Get the Login Name value and trim it
    var name = $.trim($('#search_query_top').val());

    // Check if empty of not
    if (name  === '') {
        //alert('Text-field is empty.');
        return false;
    }
});

$(".nav2 .ttsearchtoggle").click(function() {
	$('.nav2 .ttsearchtoggle').parent().addClass('active');
	$("body").addClass("search-open");
});

  	jQuery(document).on("click", function(event) {

		var trigger = jQuery(".search-widget")[0];
		var dropdown = jQuery(".search-widget");
		
		if (dropdown !== event.target && !dropdown.has(event.target).length && trigger !== event.target) {
			jQuery('.search-widget').removeClass("active");
			jQuery('body').removeClass("search-open");
		}
	});
/*---------------- End Search ---------------- */
function header() {	
 if (jQuery(window).width() > 1199){
	 if (jQuery(this).scrollTop() > 300)
		{    
			jQuery('.header-nav').addClass("fixed");
			jQuery('#tt-menu-horizontal').insertAfter("#_desktop_logo");
		}else{
		 jQuery('.header-nav').removeClass("fixed");
		 jQuery('#tt-menu-horizontal').appendTo(".position-static");
		}
	} else {
	  jQuery('.header-nav').removeClass("fixed");
	  jQuery('#tt-menu-horizontal').appendTo(".position-static");
	  }
}

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("header-sticky").style.top = "0";
} else {
  document.getElementById("header-sticky").style.top = "-160px";
}
prevScrollpos = currentScrollPos;
}
 
$(document).ready(function(){header();});
jQuery(window).resize(function() {header();});
jQuery(window).scroll(function() {header();});


 /* ----------- Start Templatetrip User-info ----------- */

    $('.ttuserheading').click(function(event){
	$(this).toggleClass('active');
	event.stopPropagation();
	$(".user-info").slideToggle("slow");
	$("body").toggleClass("user-active");
	$("body").removeClass("cart-active");
	$(".cart_block").slideUp("slow");
	$("#search_widget").removeClass("active");
	$(".language-selector-wrapper .dropdown-menu").slideUp("slow");
	$(".language-selector").removeClass("open");
	$(".currency-selector .dropdown-menu").slideUp("slow");
	$(".currency-selector").removeClass("open");
	$("body").removeClass("language-open");
	$("body").removeClass("currency-open");
	return false;
	});
	$(".user-info").on("click", function (event) {
	event.stopPropagation();
	});

    /* ----------- End Templatetrip User-info ----------- */
	
	
		
$('.homeslider .caption:odd').addClass('odd');
$('.homeslider .caption:even').addClass('even');
/* ----------- Start special & banner ----------- */
		
				
		$(".blockcart .header").on("click", function (event) {
			event.stopPropagation();
			$("body").toggleClass("cart-active");
			$(".cart_block").slideToggle("slow");
			$("body").removeClass("user-active");
			$(".ttuserheading").removeClass('active');
			$(".user-info").slideUp("slow");
			$("#search_widget").removeClass("active");
			$(".language-selector-wrapper .dropdown-menu").slideUp("slow");
            $(".language-selector").removeClass("open");
            $(".currency-selector .dropdown-menu").slideUp("slow");
            $(".currency-selector").removeClass("open");
        });

	
	/* ----------- Start Carousel For Featured / ViewProduct / CategoryProduct ----------- */
	
		var ttproducts = $(".view-product .products,.crossselling-product .products,.category-products .products,.featured-products .products").owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : true,
				dots : false,
				rtl:false,
				navText: [
				"<i class='material-icons'>&#xE5CB;</i>",
				"<i class='material-icons'>&#xE5CC;</i>"
				],
				responsive: {
					0:{
						items:1
					},
					481:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:3
					},
					1200:{
						items:4
					}
				}
			});

	var accessories = $(".product-accessories .products").owlCarousel({
			items : 4, //1 items above 1000px browser width
			nav : false,
			dots : false,
			autoplay:false,	
			rtl:false,
			responsive: {
				0:{
					items:1
				},
				481:{
					items:2
				},
				768:{
					items:3
				},
				992:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});
		// Custom Navigation Events
      $(".accessories_prev").click(function(){
			 accessories.trigger('prev.owl.carousel',[700]);
	  })
	  $(".accessories_next").click(function(){
		 	 accessories.trigger('next.owl.carousel',[700]);
	  })

	/* ----------- Start Carousel For SpecialProduct ----------- */
	 
		var ttspecial = $(".ttspecial-products .products").owlCarousel({
				items : 3, //1 items above 1000px browser width
				nav : false,
				dots : false,
				rtl:false,
				responsive: {
					0:{
						items:1
					},			
					671:{
						items:1
					},		
					768:{
						items:2
					},	
					992:{
						items:3
					}
				}
			});

		// Custom Navigation Events
      $(".ttspecial_next").click(function(){
			ttspecial.trigger('next.owl.carousel',[700]);
	  })
	  $(".ttspecial_prev").click(function(){
		 	ttspecial.trigger('prev.owl.carousel',[700]);
	  }) 

		var featuredproducts = $(".featured-products .products").owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : false,
				dots : false,
				rtl:false,
				responsive: {
					0:{
						items:1
					},			
					671:{
						items:2
					},		
					768:{
						items:3
					},	
					992:{
						items:4
					}
				}
			});

		// Custom Navigation Events
      $(".featured-products_next").click(function(){
			featuredproducts.trigger('next.owl.carousel',[700]);
	  })
	  $(".featured-products_prev").click(function(){
		 	featuredproducts.trigger('prev.owl.carousel',[700]);
	  }) 


    /* -----------Start carousel For TT- brand logo ----------- */
	
	var ttbrandlogo = $("#ttbrandlogo-carousel").owlCarousel({
				items : 5, //1 items above 1000px browser width
				nav : true,
				dots : false,
				rtl:false,
				autoplay:true,
				navText: [
				"<i class='material-icons'>&#xE5CB;</i>",
				"<i class='material-icons'>&#xE5CC;</i>"
				],
				responsive: {
					0:{
						items:2
					},
					481:{
						items:3
					},
					768:{
						items:4
					},
					992:{
						items:4
					},
					1201:{
						items:5
					}
				}
			});

    /* -----------End carousel For TT brand logo ----------- */
	
	
	/*  --- start new-product custome nevigation js--*/	

		   var ttleftnew = $('.new-products #new-product .products').owlCarousel({
			items : 1, //1 items above 1000px browser width
			nav : true,
			dots : false,
			rtl:false,
			navText: [
			"<i class='material-icons'>&#xE5CB;</i>",
			"<i class='material-icons'>&#xE5CC;</i>"
			],
			responsive: {
				0:{
					items:1
				}
			}
		});

	/*------- end new-product custome nevigation js ---- */
    /* ----------- Start Carousel For ttcategoryfeature  ----------- */


    var cat_feature = $('#tt_cat_featured').owlCarousel({
				items : 3, //1 items above 1000px browser width
				nav : false,
				dots : false,
				loop: false,
				autoplay:true,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					481:{
						items:2
					},
					544:{
						items:2
					},
					992:{
						items:3
					},
					1200:{
						items:3
					}
				}
			});
	  	 
		// Custom Navigation Events
      $(".ttcategoryfeature_next").click(function(){
			cat_feature.trigger('next.owl.carousel',[700]);
	  })
	  $(".ttcategoryfeature_prev").click(function(){
		 	cat_feature.trigger('prev.owl.carousel',[700]);
	  }) 
    /* ----------- End Carousel For ttcategoryfeature  ----------- */    	

/* -----------Start carousel For TT-Services ----------- */
var ttservices = $('#ttcmsservice .ttcmsservice .ttservicecontent').owlCarousel({
		items : 4, //1 items above 1000px browser width
		nav : false,
		dots : false,
		stopOnHover: true,
		autoplay:true,
		autoplaySpeed: 1000,
		autoplayHoverPause:true,
		rtl:false,
		responsive: {
			0:{
				items:1
			},
			481:{
				items:2
			},
			601:{
				items:3
			},
			1200:{
				items:4
			},
			1600:{
				items:4
			}
			
		}
	});

/* -----------End carousel For TT-Services ----------- */	

	    /* -----------Start carousel For Testimonial ----------- */
	  var tttestimonial = $(".tt-carousel").owlCarousel({
				items : 1, //1 items above 1000px browser width
				nav : false,
				dots : true,
				autoplay:true,	
				rtl:false,
				responsive: {
					0:{
						items:1
					}
				}
			});
	  
 /* ----------- End carousel For Testimonial ----------- */

	/* ------------ Start TemplateTrip Parallax JS ------------ */
 
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
		if(!isMobile) {
			if($(".parallex").length){  $(".parallex").sitManParallex({  invert: false });};    
		}else{
			$(".parallex").sitManParallex({  invert: true });
		}	

	/* ------------ End TemplateTrip Parallax JS ------------ */  


		/* -----------Start carousel For TT-Megamenu Product 1----------- */

	var ttmegamenuproduct1 = $("#tt-menu-horizontal .product-block .ul-column").owlCarousel({
				items : 1, //1 items above 1000px browser width
				nav : true,
				dots : false,
				autoplay:false,	
				rtl:false,
				navText: [
				"<i class='material-icons'>&#xE5CB;</i>",
				"<i class='material-icons'>&#xE5CC;</i>"
				],
				responsive: {
					0:{
						items:1
					},
					481:{
						items:2
					},
					768:{
						items:3
					},
					1201:{
						items:1
					}
				}
			});
		/* -----------End carousel For TT-Megamenu Product 1----------- */
	
	/* -----------Start carousel For TT-Megamenu Product 2----------- */
		
	var ttmegamenuproduct2 = $("#tt-menu-horizontal .ttproduct-block").owlCarousel({
				items : 5, //1 items above 1000px browser width
				nav : true,
				dots : false,
				autoplay:false,	
				rtl:false,
				navText: [
				"<i class='material-icons'>&#xE5CB;</i>",
				"<i class='material-icons'>&#xE5CC;</i>"
				],
				responsive: {
					0:{
						items:1
					},
					481:{
						items:1
					},
					768:{
						items:1
					},
					992:{
						items:4
					},
					1201:{
						items:5
					}
				}
			});

    /* -----------End carousel For TT-Megamenu Product 2----------- */
		
    /* ----------- Start Smart Blog JS ----------- */

	var smartblog = $("#smartblog-carousel").owlCarousel({
				items : 3, //1 items above 1000px browser width
				nav : true,
				dots : false,
				rtl:false,
				navText: [
				"<i class='material-icons'>&#xE5CB;</i>",
				"<i class='material-icons'>&#xE5CC;</i>"
				],
				responsive: {
					0:{
						items:1
					},
					543:{
						items:1
					},
					600:{
						items:1
					},
					767:{
						items:1
					},
					1200:{
						items:1
					}
				}
			});

	        $(".ttblog_next").click(function(){
			smartblog.trigger('next.owl.carousel',[700]);
	  })
	  $(".ttblog_prev").click(function(){
		 	smartblog.trigger('prev.owl.carousel',[700]);
	  }) 

	    /* ----------- Start Templatetrip AddToCart Button ----------- */

    $(".tt-button-container .add-to-cart").mousedown(function() {
        var form_className = $(this).parent().attr('class');
        $(this).parent().attr('id', form_className);

        var hidden_page_className = $(this).parent().find('.product-quantity .product_page_product_id').attr('class');
        $(this).parent().find('.product-quantity .product_page_product_id').attr('id', hidden_page_className);

        var customization_className = $(this).parent().find('.product-quantity .product_customization_id').attr('class');
        $(this).parent().find('.product-quantity .product_customization_id').attr('id', customization_className);

        var quantity_className = $(this).parent().find('.product-quantity .quantity_wanted').attr('class');
        $(this).parent().find('.product-quantity .quantity_wanted').attr('id', quantity_className);
    });

    $(".tt-button-container .add-to-cart").mouseup(function() {
        $(this).parent().removeAttr('id');
        $(this).parent().find('.product-quantity > input').removeAttr('id');
    });
	
	$("#product-comments-list-header").click(function(){
			$(this).toggleClass("active");
			$(".product-comments-list-main").slideToggle();
	});

    /* ----------- End Templatetrip AddToCart Button ----------- */
$('#zoom1').zoom();
    productadditional("#main #tt-jqzoom");

});

function productadditional(productId){
	var ttadditional = $(productId).owlCarousel({
		items : 3, //1 items above 1000px browser width
		nav : true,
		dots : false,
		rtl:false,
		navText: [
		"<i class='material-icons'>&#xE5CB;</i>",
		"<i class='material-icons'>&#xE5CC;</i>"
		],
		responsive: {
			0:{
				items:2
			},
			544:{
				items:3
			},
			768:{
				items:2
			},
			992:{
				items:2
			},
			1300:{
				items:3
			}
		}
	});
}

	
/*----------------------- Start Homepage header JS -----------------------*/


/*--------------------- End Homepage header JS -------------------*/

function Grid() {
		if($(window).width() < 1500) {
			if($("#tab-gridview3").hasClass("active")) {
			$("#tab-gridview2").toggleClass("active");
			$(".grid_list .grid_view2").toggleClass("active");
			$("#tab-gridview3").removeClass("active");
			$(".grid_list .grid_view3").removeClass("active");
			}
		}
		if($(window).width() < 768) {
			if($("#tab-gridview2").hasClass("active")) {
			$("#tab-gridview").toggleClass("active");
			$(".grid_list .grid_view").toggleClass("active");
			$("#tab-gridview2").removeClass("active");
			$(".grid_list .grid_view2").removeClass("active");
			}
		}
	}
	$(document).ready(function(){Grid();});
	$(window).resize(function(){Grid();});
	$(window).load(function(){Grid();});

/*--------- Start js for left-column -------------*/

function responsivecolumn() {
    if ($(document).width() <= 991) {
        $('.container #left-column').insertAfter('#content-wrapper');
    } else if ($(document).width() >= 992) {
        $('.container #left-column').insertBefore('#content-wrapper');
    }
}
$(document).ready(function() {
    responsivecolumn();
});
$(window).resize(function() {
    responsivecolumn();
});

function productcart() {
    if ($(document).width() <= 767) {
        $('.products .product-grid .thumbnail-container .ttproduct-image .tt-button-container').each(function() {
    $(this).insertAfter($(this).parent().parent().parent().find(".ttproduct-desc .product-price-and-shipping"))});
    } else if ($(document).width() >= 768) {
       $('.products .product-grid .thumbnail-container .tt-button-container').each(function() {
    $(this).insertAfter($(this).parent().parent().parent().find(".ttproduct-image .product-flags"))});
    }
}
$(document).ready(function() {
    productcart();
});
$(window).resize(function() {
    productcart();
});		

function specialproductcart() {
	$('.ttspecial-products .products .product-grid .thumbnail-container .ttproduct-image .tt-button-container').each(function() {
$(this).insertAfter($(this).parent().parent().parent().find(".ttproduct-desc .product-price-and-shipping"))});
}
$(document).ready(function() {
specialproductcart();
});
$(window).resize(function() {
specialproductcart();
});	
/*--------- End js for left-column -------------*/
$("#smartblog_block,#ttcmstestimonial").wrapAll("<div class='smartblog-testimonial'><div class='container'><div class='row'></div></div></div>");
		$("#ttcmsfooter,.block-social").wrapAll("<div class='footer-social col-sm-4'></div>");

	 /*================Strat same height==================*/

 	function sameheight(){
    	if ($(document).width() >= 992){    
    	var maxHeight = $(".ttcmstestimonial").height();
		$("#smartblog_block").height(maxHeight);
		} else {
			$("#smartblog_block").height("auto");
		  }
    }
    $(document).ready(function(){sameheight();});
    $(window).resize(function(){sameheight();});

	/*================End same height==================*/

/* ------ left-column  sticky js ---*/	
	function stickyleft() {
	if ($(document).width() <= 1199) {
	jQuery('#content-wrapper, #left-column, #right-column').theiaStickySidebar({
	  additionalMarginBottom: 30,
	  additionalMarginTop: 60
	});
	} else if ($(document).width() >= 1200) {
	jQuery('#content-wrapper, #left-column, #right-column').theiaStickySidebar({
	  additionalMarginBottom: 30,
	  additionalMarginTop: 160
	});
	}
	}
	$(document).ready(function() {
	stickyleft();
	});
	$(window).resize(function() {
	stickyleft();
	});	
	/* ---  end left-column stick js---*/

/*****************start animation script*******************/
	function hb_animated_contents() {
		$(".hb-animate-element:in-viewport").each(function (i) {
		var $this = $(this);
		if (!$this.hasClass('hb-in-viewport')) {
			setTimeout(function () {
				$this.addClass('hb-in-viewport');
				}, 100 * i);
				}
			});
	}
		
		$(window).scroll(function () {
			hb_animated_contents();
		});
		$(window).load(function () {
			hb_animated_contents();
		});
		
		
	
/*****************end animation script*******************/
/* ------------ Start Grid List JS --------------*/
function bindGrid() {
    var view = localStorage.getItem('display');
        display(view);		
}
function display(view) {
 
	if (view === null || localStorage.getItem('display') == 'grid3') {
		$('.grid_view3').trigger('click');
		if ($(document).width() <= 767) {
		    $('.grid_view').trigger('click');
		}
	}
	else if (localStorage.getItem('display') == 'grid2') {
		$('.grid_view2').trigger('click');
		if ($(document).width() <= 767) {
		    $('.grid_view').trigger('click');
		}
	}
	else if (localStorage.getItem('display') == 'grid') {
		$('.grid_view').trigger('click');
	}
	else if (localStorage.getItem('display') == 'list') {
		$('.list_view').trigger('click');
	} 
	else if (localStorage.getItem('display') == 'sortlist') {
		$('.sort_view').trigger('click');
	}
	
	//Grid	
    $(document).on('click', '.grid_view', function(e) {
        localStorage.setItem('display', 'grid');
    });
	//Grid2
    $(document).on('click', '.grid_view2', function(e) {
        localStorage.setItem('display', 'grid2');
	});
	//Grid3
    $(document).on('click', '.grid_view3', function(e) {
        localStorage.setItem('display', 'grid3');
	});
    //List
    $(document).on('click', '.list_view', function(e) {
        localStorage.setItem('display', 'list');
    });
    //ShortList
    $(document).on('click', '.sort_view', function(e) {
        localStorage.setItem('display', 'sortlist');
	});
}
$(document).ready(function(){
	bindGrid();
});
$(window).load(function(){
	bindGrid();
});
/* ------------ End Grid List JS --------------*/
function qtyminus(product_id) {
  var input = $("input[data-id='input-quantity-" + product_id + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
      var minValue = parseInt(input.attr('min'));
      if (!minValue) minValue = 1;
      if (currentVal > minValue) {
          input.val(currentVal - 1).change();
      }
      if (parseInt(input.val()) == minValue) {
          $(this).attr('disabled', true);
      }
  }
  else {
      input.val(1);
  }
}

function qtyplus(product_id) {
  var input = $("input[data-id='input-quantity-" + product_id + "']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
      var maxValue = parseInt(input.attr('max'));
      if (!maxValue) maxValue = 999;
      if (currentVal < maxValue) {
          input.val(currentVal + 1).change();
          $('.dis-' + product_id).prop('disabled', false);    
      }
      if (parseInt(input.val()) == maxValue) {
          $(this).attr('disabled', true);
      }
  }
  else {
      input.val(1);
  }
}
