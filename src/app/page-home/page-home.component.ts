import { Component, OnInit, AfterViewInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit, AfterViewInit  {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.loader').delay(100).fadeOut('slow');

    $('#home').YTPlayer({
      fitToBackground: true,
      videoId: 'Gk_yPWU-Sw0'
    });

    $('a[href*="#"]').on('click', function (e) {
      let id = $(this).attr('href');
      if (id!=='#') {
        let selector = $(id);
        if (selector.val()!==undefined) {
          e.preventDefault();				
          $('html, body').animate({
            scrollTop: selector.offset().top - 0
          }, 1000, 'easeInOutCubic');
        }
      }
    });

    $('.counter').countUp({
      delay: 8,
      time: 600
    });
    
  } 

}
