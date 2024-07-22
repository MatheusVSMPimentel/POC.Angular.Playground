import { Component } from '@angular/core';
import { Nav } from './nav-model';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styles: ``
})
export class MenuComponent {
  navLinks: Nav[] =
    [
      {
        name: "Home",
        link: "/home",
        admin: false,
        exact: true
      },{
        name: "About Us",
        link: "/about-us",
        admin: false,
        exact: true
      },{
        name: "Register",
        link: "/register",
        admin: false,
        exact: true
      },{
        name: "Contact Us",
        link: "/contact-us",
        admin: false,
        exact: true
      },{
        name: "Products",
        link: "/products",
        admin: false,
        exact: false
      },{
        name: "Admin Panel",
        link: "/admin",
        admin: true,
        exact: true
      }
    ]


}