import {Component, OnDestroy, OnInit} from '@angular/core';
declare var $;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {


  constructor() { }

  ngOnInit() {
    $('body').layout('fix');
    $('.sidebar-menu').tree();
  }

  ngOnDestroy() {}

}
