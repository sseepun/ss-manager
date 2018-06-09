/*
Template Name    : Dice - Media Studio Bootstrap 4 One Page
Version          : 1.0.0
Author           : SVYYAT
Author URI       : https://themeforest.net/user/svyyat
Created.         : May 2018
File Description : Main JS file of the template

// ------------------------------------------ //
//              Table Of Content              //
// ------------------------------------------ //

1. Preloader
2. Navbar
3. Change Theme
4. Smooth Scroll
5. Mobile Menu
6. Counter (Statistic)
7. Project (Isotope)
8. Magnific Popup
9. Ajax Contact Form
*/

$(function() {
	'use strict';

	/*========== Start Preloader ==========*/

	$('.loader').delay(1000).fadeOut('slow');

	/*========== End Preloader ==========*/
	/*========== Start Navbar ==========*/

	$('.nav li a').on('click', function() {
		$('.nav li a').removeClass('active');
		$(this).addClass('active')
	});

	$(window).on('scroll', function(){
		if ($(window).scrollTop() > 55) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	});

	$('body').scrollspy({
		offset: 70
	});

	/*========== End Navbar ==========*/
	/*========== Start Change Theme ==========*/

	$('.theme a').on('click', function() {
		$('.theme a').removeClass('active-theme');
		$(this).addClass('active-theme');
	});

	$('#day').on('click', function (){
		$('head link#theme').attr('href',$(this).data('theme'));
	});
	$('#night').on('click', function (){
		$('head link#theme').attr('href',$(this).data('theme'));
	});

	/*========== End Change Theme ==========*/
	/*========== Start Smooth Scroll ==========*/

	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 0
		}, 1555, 'easeInOutCubic');
	});

	/*========== End Smooth Scroll ==========*/
	/*========== Start Mobile Menu ==========*/

	var sideslider = $('[data-toggle=menu-side]');
	var sel = sideslider.attr('data-target');
	var sel2 = sideslider.attr('data-target-2');
	sideslider.on('click', function(){
			$(sel).toggleClass('in');
			$(sel2).toggleClass('out');
	});

	/*========== End Mobile Menu ==========*/
	/*========== Start Counter (Statistic) ==========*/

	$('.counter').countUp({
		delay: 8,
		time: 1000
	});

	/*========== End Counter (Statistic) ==========*/
	/*========== Start Project (Isotope) ==========*/

	$('.filter li a').on('click', function() {
		$('.filter li a').removeClass('active-f');
		$(this).addClass('active-f')
	});

	$('.project-container').isotope({
		itemSelector: '.project-item',
		layoutMode: 'fitRows'
	});

	var $gallery = $('.project-container').isotope();

	$('.filter li a').on( 'click', function() {
		var filterValue = $(this).attr('data-filter');
		$gallery.isotope({ filter: filterValue });
	});

	/*========== End Project (Isotope) ==========*/
	/*========== Start Magnific Popup ==========*/

	$('.item-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		gallery: {
			enabled: true,
			preload: [0, 1]
		},
	});

	$('.item-video').magnificPopup({
		type: 'iframe',
		closeOnContentClick: true,
		gallery: {
			enabled: true,
			preload: [0, 1]
		}
	});

	/*========== End Magnific Popup ==========*/
	/*========== Start Ajax Contact Form ==========*/

	$('#form').on('submit', function() {
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: $(this).serialize(),
			success: function (data)
			{
				$(this).find('input').val('');
				alert('Thank you for your request! Soon we will contact you.');
				$('#form').trigger('reset');
			}
		});
		return false;
	});

	/*========== End Ajax Contact Form ==========*/

});