import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})
export class ElectionsComponent implements OnInit {
  public isToggleGeneral: boolean = true;

  constructor() {}

  ngOnInit() {

  }

  toggleElectionType(toggler: boolean) {
    this.isToggleGeneral = toggler;
  }
}
