import { Component, OnInit,Input,HostBinding } from '@angular/core';
import NavLink from '../../../models/NavLink.model';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.css']
})
export class SideMenuItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  
  @Input()
  item:NavLink;
  constructor(private router:Router) { }

  ngOnInit() {

    console.log(this.item)
  }

  onItemSelected(item:NavLink){
    if (!item.subLinks || !item.subLinks.length) {
      console.log(item.path);
      debugger;
      this.router.navigate([item.path])
    }
    if (item.subLinks && item.subLinks.length) {
      this.expanded = !this.expanded;
    }

  }

}
