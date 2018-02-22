jQuery(document).ready(function() {

	/***************** Waypoints ******************/

	function onScrollInit( items, trigger ) {
		items.each( function() {
			var osElement = jQuery(this),
			osAnimationClass = osElement.attr('data-os-animation'),
			osAnimationDelay = osElement.attr('data-os-animation-delay');

			osElement.css({
				'-webkit-animation-delay':  osAnimationDelay,
				'-moz-animation-delay':     osAnimationDelay,
				'animation-delay':          osAnimationDelay
			});

			var osTrigger = ( trigger ) ? trigger : osElement;

			osTrigger.waypoint(function() {
				osElement.addClass('animated').addClass(osAnimationClass);
			},{
				triggerOnce: true,
				offset: '75%'
			});
		});
	}

	onScrollInit( jQuery('.os-animation') );
	onScrollInit( jQuery('.staggered-animation'), jQuery('.staggered-animation-container') );
	
	/***************** Smooth Scrolling ******************/

	jQuery('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
			if (target.length) {	
				jQuery('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});

	/***************** Page on Scroll ******************/
    var handleHeaderOnScroll = function() {
        if (jQuery(window).scrollTop() > 60) {
            jQuery('body').addClass('page-on-scroll');
        } else {
            jQuery('body').removeClass('page-on-scroll');
        }
    }
    jQuery(window).scroll(function() {
        handleHeaderOnScroll();
    });

	jQuery(window).init(function() {
		handleHeaderOnScroll();
	});
	
	/***************** Datepicker ******************/
	jQuery('#year_month_day').bootstrapMaterialDatePicker({ 
		time: false,
		clearButton: true
	});

	/***************** Dialogs ******************/

	// // when you have just 1 dialog called by many buttons
	// var dialog = document.querySelector('.site-dialog.add');
	// var showButtons = document.querySelectorAll('.show-modal-add');
	// // alert(showButtons.length);
	// // iterate and add listeners to each button
	// showButtons.forEach(function(showModalButton) {
	// 	if (! dialog.showModal) {
	// 	  dialogPolyfill.registerDialog(dialog);
	// 	}
	// 	showModalButton.addEventListener('click', function() {
	// 		dialog.showModal();
	// 	});
	// 	dialog.querySelector('.close').addEventListener('click', function() {
	// 		dialog.close();
	// 	});
	// });

	// when you have just 1 dialog called by many buttons
	var dialogEdit = document.querySelector('.site-dialog.edit');
	var dialogAdd = document.querySelector('.site-dialog.add');
	var showButtonsEdit = document.querySelectorAll('.show-modal-edit');
	var showButtonsAdd = document.querySelectorAll('.show-modal-add');
	// alert(showButtons.length);

	// forEach doesnt work with IE -------------------------------------------
	// // iterate and add listeners to each button
	// showButtonsEdit.forEach(function(showModalButton) {
	// 	if (! dialogEdit.showModal) {
	// 	  dialogPolyfill.registerDialog(dialogEdit);
	// 	}
	// 	showModalButton.addEventListener('click', function() {
	// 		dialogEdit.showModal();
	// 	});
	// 	dialogEdit.querySelector('.close').addEventListener('click', function() {
	// 		dialogEdit.open = true;
	// 		dialogEdit.close();
	// 	});
	// });
	// // iterate and add listeners to each button
	// showButtonsAdd.forEach(function(showModalButton) {
	// 	if (! dialogAdd.showModal) {
	// 	  dialogPolyfill.registerDialog(dialogAdd);
	// 	}
	// 	showModalButton.addEventListener('click', function() {
	// 		dialogAdd.showModal();
	// 	});
	// 	dialogAdd.querySelector('.close').addEventListener('click', function() {
	// 		dialogAdd.open = true;
	// 		dialogAdd.close();
	// 	});
	// });

	for(var index=0; index<showButtonsEdit.length; index++) {
		if (! dialogEdit.showModal) {
			dialogPolyfill.registerDialog(dialogEdit);
		  }
		  showButtonsEdit[index].addEventListener('click', function() {
			dialogEdit.showModal();
		  });
		  dialogEdit.querySelector('.close').addEventListener('click', function() {
			dialogEdit.open = true;
			dialogEdit.close();
		  });
	}

	for(var index=0; index<showButtonsAdd.length; index++) {
		if (! dialogAdd.showModal) {
			dialogPolyfill.registerDialog(dialogAdd);
		  }
		  showButtonsAdd[index].addEventListener('click', function() {
			  dialogAdd.showModal();
		  });
		  dialogAdd.querySelector('.close').addEventListener('click', function() {
			  dialogAdd.open = true;
			  dialogAdd.close();
		  });
	}

});