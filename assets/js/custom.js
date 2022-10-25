/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
 
/* --------------------------- TmplateTrip JS ------------------------------ */

/* ----------- Start Page-loader ----------- */
		$(window).load(function() 
		{ 
			$(".ttloading-bg").fadeOut("slow");
		})
/* ----------- End Page-loader ----------- */
	

$(document).ready(function(){
				   
/* Go to Top JS START */
		if ($('.goToTop').length) {
			var scrollTrigger = 100, // px
				backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('.goToTop').addClass('show');
					} else {
						$('.goToTop').removeClass('show');
					}
				};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('.goToTop').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}
	/* Go to Top JS END */
	
	var simplebar = new Nanobar();
	simplebar.go(100);
	
	/*---------------- Search ---------------- */

	$(".top-nav .ttsearch_button").click(function() {
	
	$('#page').toggleClass('ttsearch-fixed');
	$('#header .header-nav .right-nav').toggleClass('container');
	$('.top-nav .ttsearchtoggle').parent().toggleClass('active');
	$('.top-nav .ttsearchtoggle').toggle('fast', function() {
	});
	$('.top-nav #search_query_top').attr('autofocus', 'autofocus').focus();
	});
	
	/*---------------- End Search ---------------- */
	
	/* ----------- Start Templatetrip User-info ----------- */
	
	$('.ttuserheading').click(function(event){
	$(this).toggleClass('active');
	event.stopPropagation();
	$(".user-info").slideToggle("fast");
	});
	$(".user-info").on("click", function (event) {
	event.stopPropagation();
	});
	/* ----------- End Templatetrip User-info ----------- */
	/* -------------- Start Homepage Tab ------------------- */

$("#hometab").prepend("<div class='tabs'><ul class='nav nav-tabs'></ul></div>");
$("#hometab .ttfeatured-products .tab-title").wrap("<li class='nav-item'><a class='nav-link' data-toggle='tab' href='#ttfeatured-content'></a></li>");
$("#hometab .ttbestseller-products .tab-title").wrap("<li class='nav-item'><a class='nav-link' data-toggle='tab' href='#ttbestseller-content'></a></li>");
$("#hometab .ttnew-products .tab-title").wrap("<li class='nav-item'><a class='nav-link' data-toggle='tab' href='#ttnew-content'></a></li>");
$("#hometab .tabs ul.nav-tabs").append($("#hometab > section li.nav-item"));

$("#hometab > section.ttfeatured-products").wrap("<div class='tab-pane row fade' id='ttfeatured-content'>");
$("#hometab > section.ttbestseller-products").wrap("<div class='tab-pane row fade' id='ttbestseller-content'>");
$("#hometab > section.ttnew-products").wrap("<div class='tab-pane row fade' id='ttnew-content'>");
$("#hometab > .tab-pane").wrapAll("<div class='home-tab-content' id='home-tab-content' />");
$("#hometab").append($("#hometab > .home-tab-content"));

$('#hometab .tabs ul.nav-tabs > li:first-child a').addClass('active');
$('#hometab #home-tab-content .tab-pane:first-child').addClass('in active');

/* -------------- End Homepage Tab ------------------- */



	/* ------------ Start Add Product Bootsrap class JS --------------- */
	
	colsCarousel = $('#right-column, #left-column').length;
	if (colsCarousel == 2) {
		ci=2;
	} else if (colsCarousel == 1) {
		ci=3;
	} else {
		ci=3;
	}

	
		var cols_count = $('#right-column, #left-column').length;
		if (cols_count == 2) {
			$('#content .products .product-miniature, #content-wrapper .products .product-miniature').attr('class', 'product-miniature js-product-miniature product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
		} else if (cols_count == 1) {
			$('#content .products .product-miniature, #content-wrapper .products .product-miniature').attr('class', 'product-miniature js-product-miniature product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
		} else {
			$('#content .products .product-miniature, #content-wrapper .products .product-miniature').attr('class', 'product-miniature js-product-miniature product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
		}
		
	/* ------------ End Add Product Bootsrap class JS --------------- */
	
	
	 /* ----------- carousel For ttspecial ----------- */
	  
	  var ttspecial = $('.ttspecial-products .products').owlCarousel({
				items : 3, //1 items above 1000px browser width
				nav : true,
				dots : false,
				autoplay:false,	
				rtl:false,
				responsive: {
					0:{
						items:1
					},
					481:{
						items:1
					},
					768:{
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
      $(".ttspecial_prev").click(function(){
			ttspecial.trigger('prev.owl.carousel',[700]);
	  })
	  $(".ttspecial_next").click(function(){
		 	ttspecial.trigger('next.owl.carousel',[700]);
	  })
	  
	  
	 /* ----------- carousel For viewproduct ----------- */
	  var viewproduct = $('.view-product .products').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : true,
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
      $(".viewproduct_prev").click(function(){
			viewproduct.trigger('prev.owl.carousel',[700]);
	  })
	  $(".viewproduct_next").click(function(){
		 	viewproduct.trigger('next.owl.carousel',[700]);
	  })
	  
	  
	/* ----------- carousel For Crossselling ----------- */
	
	  var Crossselling = $('.crossselling-product .products').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : true,
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
      $(".Crossselling_prev").click(function(){
			Crossselling.trigger('prev.owl.carousel',[700]);
	  })
	  $(".Crossselling_next").click(function(){
		 	Crossselling.trigger('next.owl.carousel',[700]);
	  })
	  
	  
	  /* ----------- carousel For Categoryproducts ----------- */
	  
	   var Categoryproducts = $('.category-products .products').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : true,
				dots : false,
				loop: false,
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
      $(".Categoryproducts_prev").click(function(){
			Categoryproducts.trigger('prev.owl.carousel',[700]);
	  })
	  $(".Categoryproducts_next").click(function(){
		 	Categoryproducts.trigger('next.owl.carousel',[700]);
	  })
	  
	  
	  /* ----------- carousel For accessories ----------- */
	  
	  var accessories = $('.product-accessories .products').owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : true,
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
	  
	 /* ----------- carousel For Featured yproducts ----------- */
	  var Featuredproducts = $(".featured-products .products").owlCarousel({
				items : 4, //1 items above 1000px browser width
				nav : true,
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
      $(".featuredproduct_prev").click(function(){
			Featuredproducts.trigger('prev.owl.carousel',[700]);
	  })
	  $(".featuredproduct_next").click(function(){
		 	Featuredproducts.trigger('next.owl.carousel',[700]);
	  })
	  
	  
	
 	/* -----------Start carousel For TT- brand logo ----------- */
	var ttbrandlogo = $('#ttbrandlogo-carousel').owlCarousel({
				items : 5, //1 items above 1000px browser width
				nav : true,
				dots : false,
				navigationText: [
					"<i class='material-icons'>&#xE5CB;</i>",
					"<i class='material-icons'>&#xE5CC;</i>"],
				autoplay:true,	
				autoplayHoverPause:true,
				rtl:false,
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
						items:5
					},
					1200:{
						items:5
					}
				}
			});
		// Custom Navigation Events
      $(".ttbrandlogo_prev").click(function(){
			ttbrandlogo.trigger('prev.owl.carousel',[700]);
	  })
	  $(".ttbrandlogo_next").click(function(){
		 	ttbrandlogo.trigger('next.owl.carousel',[700]);
	  })
	  
	 /* var ttbrandlogo = $("#ttbrandlogo-carousel");
		  ttbrandlogo.owlCarousel({
			navigation:true,
			navigationText: [
					"<i class='material-icons'>&#xE5CB;</i>",
					"<i class='material-icons'>&#xE5CC;</i>"],
		  autoPlay : true,
			 items :5, //10 items above 1000px browser width
			 itemsDesktop : [1200,5], 
			 itemsDesktopSmall : [991,4], 
			 itemsTablet: [767,3], 
			 itemsMobile : [480,2] 
		  });
	
	
	 -----------End carousel For TT brand logo ----------- */
	
		
	 /* -----------End carousel For Footer Catalog ----------- */
	 
		  var smartblog = $('#smartblog-carousel').owlCarousel({
			items : 3, //1 items above 1000px browser width
			nav : true,
			dots : false,
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
				992:{
					items:3
				},
				1200:{
					items:3
				}
				
			}
		});
				 // Custom Navigation Events
		 $(".ttblog_prev").click(function(){
			smartblog.trigger('prev.owl.carousel',[800]);
		  })
		  $(".ttblog_next").click(function(){
			smartblog.trigger('next.owl.carousel',[800]);
		  })

 	 /* ----------- carousel For CMS Gallery ----------- */
 		
		var ttcmsgallery = $('.ttcmsgallery').owlCarousel({
			items : 3, //1 items above 1000px browser width
			nav : true,
			dots : false,
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
				992:{
					items:3
				},
				1200:{
					items:3
				}
				
			}
		});
				 // Custom Navigation Events
		 $(".ttcmsgallery_prev").click(function(){
			ttcmsgallery.trigger('prev.owl.carousel',[800]);
		  })
		  $(".ttcmsgallery_next").click(function(){
			ttcmsgallery.trigger('next.owl.carousel',[800]);
		  })

 	/* ----------- Start Templatetrip Homeslider ----------- */
	
	$('.carousel-item:odd').addClass('odd');
	$('.carousel-item:even').addClass('even');
	
	/* ----------- End Templatetrip Homeslider ----------- */
	
	/* -----------Start carousel For TT- cms Testimonial ----------- */
	
		  var tttestimonial = $('#tttestimonial-carousel').owlCarousel({
			items : 1, //1 items above 1000px browser width
			nav : false,
			dots : true,
			autoplay:true,
			autoplaySpeed: 1000,
			autoplayHoverPause:true,
			rtl:false,
			responsive: {
				0:{
					items:1
				},
				481:{
					items:1
				},
				992:{
					items:1
				},
				1200:{
					items:1
				}
				
			}
		});
			// Custom Navigation Events
		 $(".tttestimonial_prev").click(function(){
			tttestimonial.trigger('prev.owl.carousel',[800]);
		  })
		  $(".tttestimonial_next").click(function(){
			tttestimonial.trigger('next.owl.carousel',[800]);
		  })
	  
	/* -----------End carousel For TT- cms Testimonial ----------- */

//   ------------ Start TemplateTrip Parallax JS ------------ 
//	 
//	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
//	if(!isMobile) {
//	if($(".parallex").length){  $(".parallex").sitManParallex({  invert: false });};    
//	}else{
//	$(".parallex").sitManParallex({  invert: true });
//	}	
//
// ------------ End TemplateTrip Parallax JS ------------   
 
 /* ----------- Start Templatetrip AddToCart Button ----------- */
 
$( ".tt-button-container .add-to-cart" ).mousedown(function() {
  var form_className = $(this).parent().attr('class');
  $(this).parent().attr('id',form_className);

  var hidden_page_className = $(this).parent().find('.product-quantity .product_page_product_id').attr('class');
  $(this).parent().find('.product-quantity .product_page_product_id').attr('id',hidden_page_className);

  var customization_className = $(this).parent().find('.product-quantity .product_customization_id').attr('class');
  $(this).parent().find('.product-quantity .product_customization_id').attr('id',customization_className);

  var quantity_className = $(this).parent().find('.product-quantity .quantity_wanted').attr('class');
  $(this).parent().find('.product-quantity .quantity_wanted').attr('id',quantity_className);
});

$( ".tt-button-container .add-to-cart" ).mouseup(function() {
  $(this).parent().removeAttr('id');
  $(this).parent().find('.product-quantity > input').removeAttr('id');
});

	$("#product-comments-list-header").click(function(){
			$(this).toggleClass("active");
			$(".product-comments-list-main").slideToggle();
	});

/* ----------- End Templatetrip AddToCart Button ----------- */
	
    productadditional("#main #tt-jqzoom");
	
	initialize_owl($('#owl1'));
	
		$('a[href="#ttfeatured-content"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl1'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl1'));
		});
	
		$('a[href="#ttbestseller-content"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl2'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl2'));
		});
	
		$('a[href="#ttnew-content"]').on('shown.bs.tab', function () {
			initialize_owl($('#owl3'));
		}).on('hide.bs.tab', function () {
			destroy_owl($('#owl3'));
		});

});

function initialize_owl(el) {
    el.owlCarousel({
        items : 4, //1 items above 1000px browser width
		nav : true,
		dots : false,
		loop: false,
		autoplay:false,	
		autoplayHoverPause:true,
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
					}		}
    });
			// Custom Navigation Events
	  $(".ttfeature_prev,.ttbestseller_prev,.ttnew_prev").click(function(){
			el.trigger('prev.owl.carousel',[700]);
	  })
	  $(".ttfeature_next,.ttbestseller_next,.ttnew_next").click(function(){
		 	el.trigger('next.owl.carousel',[700]);
	  })
}

function destroy_owl(el) {
    if(typeof el.data('owlCarousel') != 'undefined') {
		el.data('owlCarousel').destroy();
		el.removeClass('owl-carousel');
	}
}

function productadditional(productId){
	var ttadditional = $(productId).owlCarousel({
		items : 3, //1 items above 1000px browser width
		nav : true,
		dots : false,
		loop: false,
		autoplay:false,	
		rtl:false,
		navigationText: [
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
			1200:{
				items:3
			}
		}
	});
}

	
/* Start Homepage header JS */

function header() {
    if (jQuery(window).width() > 1199) {
        if (jQuery(this).scrollTop() > 200) {
            jQuery('.position-static').addClass("fixed");

        } else {
            jQuery('.position-static').removeClass("fixed");
        }
    } else {
        jQuery('.position-static').removeClass("fixed");
    }
}

$(document).ready(function() {
    header();
});
jQuery(window).resize(function() {
    header();
});
jQuery(window).scroll(function() {
    header();
});

/* End Homepage header JS */

	
		/*--------- Start js for left-column -------------*/
	
	function responsivecolumn()
	{
		if ($(document).width() <= 991) 
		{
			$('.container #left-column').insertAfter('#content-wrapper');
		}
		else if($(document).width() >= 992)
		{
			$('.container #left-column').insertBefore('#content-wrapper');
		}
	}
	$(document).ready(function(){responsivecolumn();});
	$(window).resize(function(){responsivecolumn();});
	
	/*--------- End js for left-column -------------*/
	
	
//	/* ---------------- start Templatetrip link more menu ----------------------*/
//	
//		var max_link = 3;
//		var items = $('.topmenu .menu ul#top-menu > li');
//		var surplus = items.slice(max_link, items.length);
//		surplus.wrapAll('<li class="more_menu ttmenu"><div class="top-menu sub-menu clearfix">');
//		$('.more_menu').prepend('<a href="#" class="level-top">More</a>');
//		$('.more_menu').mouseover(function(){
//		$(this).children('div').addClass('shown-link');
//		})
//		$('.more_menu').mouseout(function(){
//		$(this).children('div').removeClass('shown-link');
//		});
//	
//	/* ---------------- End Templatetrip link more menu ----------------------*/

/* ------------ Start Grid List JS --------------*/
function bindGrid()
{
	var view = localStorage.getItem('display');
	if (view == 'list')
		display(view);
	else
		$('.display').find('#ttgrid').addClass('active');
	//Grid	
	$(document).on('click', '#ttgrid', function(e){
		e.preventDefault();
		display('grid');
	});
	//List
	$(document).on('click', '#ttlist', function(e){
		e.preventDefault();
		display('list');		
	});	
}
$(".ttspecial-products .thumbnail-container .ttproducthover").each(function(){
	$(this).appendTo($(this).parent().parent().find(".ttproduct-desc"));
});
$(".ttspecial-products .thumbnail-container .hook-reviews").each(function(){
	$(this).insertAfter($(this).parent().parent().find(".product-title"));
});
$(".ttspecial-products .thumbnail-container .hook-reviews").each(function(){
	$(this).appendTo($(this).parent().parent().parent().find(".ttproduct-desc .product-title"));
});
$("#products .product-list .thumbnail-container .ttproduct-image .hook-reviews").each(function(){
	$(this).insertAfter($(this).parent().parent().parent().find(".ttproduct-desc .product-title"));
});
$("#products .product-grid .thumbnail-container .ttproduct-desc .hook-reviews").each(function(){
	$(this).appendTo($(this).parent().parent().parent().find(".ttproduct-image"));
});
$("#products .product-list .thumbnail-container .ttproduct-image .ttproducthover").each(function(){
    $(this).appendTo($(this).parent().parent().find(".ttproduct-desc"));
});
$("#products .product-grid .thumbnail-container .ttproduct-desc .ttproducthover").each(function(){
    $(this).appendTo($(this).parent().parent().parent().find(".ttproduct-image"));
});

function display(view)
{
	if (view == 'list')
	{
		$('#ttgrid').removeClass('active');
		$('#ttlist').addClass('active');	
		$('#content-wrapper .products.product-thumbs .product-miniature').attr('class', 'product-miniature js-product-miniature product-list col-xs-12');
		$('#content-wrapper .products.product-thumbs .product-miniature .ttproduct-image').attr('class', 'ttproduct-image col-xs-5 col-sm-5 col-md-4');
		$('#content-wrapper .products.product-thumbs .product-miniature .ttproduct-desc').attr('class', 'ttproduct-desc col-xs-7 col-sm-7 col-md-8');
		$("#products .product-list .thumbnail-container .ttproduct-image .ttproducthover").each(function(){
			$(this).appendTo($(this).parent().parent().find(".ttproduct-desc"));
		});
		$("#products .product-list .thumbnail-container .ttproduct-image .hook-reviews").each(function(){
			$(this).insertAfter($(this).parent().parent().parent().find(".ttproduct-desc .product-title"));
		});

		$('#ttlist').addClass('active');
		$('.grid-list').find('#ttlist').addClass('selected');
		$('.grid-list').find('#ttgrid').removeAttr('class');
		localStorage.setItem('display', 'list');
	}
	else
	{
		$('#ttlist').removeClass('active');
		$('#ttgrid').addClass('active');

		var cols_count = $('#right-column, #left-column').length;
		if (cols_count == 2) {
			$('#js-product-list .products.product-thumbs .product-miniature').attr('class', 'product-miniature js-product-miniature product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
		} else if (cols_count == 1) {
			$('#js-product-list .products.product-thumbs .product-miniature').attr('class', 'product-miniature js-product-miniature product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
		} else {
			$('#js-product-list .products.product-thumbs .product-miniature').attr('class', 'product-miniature js-product-miniature product-grid col-lg-3 col-md-3 col-sm-6 col-xs-12');
		}

		$("#products .product-grid .thumbnail-container .ttproduct-desc .ttproducthover").each(function(){
			$(this).appendTo($(this).parent().parent().parent().find(".ttproduct-image"));
		});
		$("#products .product-grid .thumbnail-container .ttproduct-desc .hook-reviews").each(function(){
			$(this).appendTo($(this).parent().parent().parent().find(".ttproduct-image"));
		});

		$('#content-wrapper .products.product-thumbs .product-miniature .ttproduct-image').attr('class', 'ttproduct-image');
		$('#content-wrapper .products.product-thumbs .product-miniature .ttproduct-desc').attr('class', 'ttproduct-desc');
		
		$('.grid-list').find('#ttgrid').addClass('selected');
		$('.grid-list').find('#ttlist').removeAttr('class');
		localStorage.setItem('display', 'grid');
	}
}
$(document).ready(function(){
	bindGrid();
});



/* ------------ End Grid List JS --------------*/

// function showMoreText() {
// 	var moreText = document.getElementById("more");
// 	if (moreText.style.display === "none") {
// 	  moreText.style.display = "block";
// 	} else {
// 	  moreText.style.display = "none";
// 	}
//   }
$(document).ready(function(){
	$("#showMore").click(function(){
		var moreText = document.getElementById("more");
		if (moreText.style.display === "block") {
		moreText.style.display = "none";
		} else {
		moreText.style.display = "block";
		}
	});
});
