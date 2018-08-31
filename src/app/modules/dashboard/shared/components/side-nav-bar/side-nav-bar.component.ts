
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import NavLink from '../../../models/NavLink.model';
import { navLinks } from '../../../_nav';
@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  navItems :NavLink [] = navLinks;
  constructor() { }

  ngOnInit() {
    console.log(this.navItems);
   $(function () { 
  $('.sidebar  .sidebar-menu li a').on('click', function () {
    const $this = $(this);
   
    if ($this.parent().hasClass('open')) {
      $this
        .parent()
        .children('.dropdown-menu')
        .slideUp(200, () => {
          $this.parent().removeClass('open');
        });
    } else {
      $this
        .parent()
        .parent()
        .children('li.open')
        .children('.dropdown-menu')
        .slideUp(200);

      $this
        .parent()
        .parent()
        .children('li.open')
        .children('a')
        .removeClass('open');

      $this
        .parent()
        .parent()
        .children('li.open')
        .removeClass('open');

      $this
        .parent()
        .children('.dropdown-menu')
        .slideDown(200, () => {
          $this.parent().addClass('open');
        });
    }
  });

/*   const sidebarLinks = $('.sidebar').find('.sidebar-link');
 */
  /* sidebarLinks
    .each((index, el) => {
      $(el).removeClass('active');
    })
    .filter(function () {
      const href = $(this).attr('href');
      const pattern = href[0] === '/' ? href.substr(1) : href;
      return pattern === (window.location.pathname).substr(1);
    })
    .addClass('active'); */
 
  // ٍSidebar Toggle
 /*  $('.sidebar-toggle').on('click', e => {
    $('.app').toggleClass('is-collapsed');
    e.preventDefault();
  });*/

 
  }); 
  }

}
