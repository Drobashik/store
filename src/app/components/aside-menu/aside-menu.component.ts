import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {

  @Output() valueEvent = new EventEmitter<string>()

  searchValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }


  outputEvent() {
    this.valueEvent.emit(this.searchValue)
  }
}
