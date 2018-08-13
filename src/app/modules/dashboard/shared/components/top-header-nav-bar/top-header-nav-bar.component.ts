import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-top-header-nav-bar',
  templateUrl: './top-header-nav-bar.component.html',
  styleUrls: ['./top-header-nav-bar.component.css']
})
export class TopHeaderNavBarComponent implements OnInit {
  private toggleButton: any;

  private sidebarVisible :boolean;
  constructor(private element: ElementRef) { 
    this.sidebarVisible = false;
   
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('sidebar-toggle');
  }

  sidebarToggle() {
    var $toggle = document.getElementsByClassName('sidebar-toggle');
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
        this.sidebarClose();
    }
  }

  sidebarOpen(){
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
   

    body.classList.add('is-collapsed');

    this.sidebarVisible = true;
  }
  sidebarClose(){
    const body = document.getElementsByTagName('body')[0];
    this.sidebarVisible = false;
    body.classList.remove('is-collapsed');
  }
}
