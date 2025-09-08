import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  title_index = "IPSA CHILE";
  value_current = "1.234.567";
  value_point_current = "1.234.567";

}
