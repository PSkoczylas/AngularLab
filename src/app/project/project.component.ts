import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  tasks: string[];
  address: Address;

  constructor() { }

  ngOnInit() {
    this.tasks = [];
    // this.address.street = 'Abramowice'; <-- it doesn't work
    // this.address.postalCode = '20';
    // this.address.city = 'Nowy Jojk';
    this.address = {
      street: 'Abramowice',
      postalCode: '20',
      city: 'Nowy Jojk'
    };
  }

  add() {
    this.tasks.push("Kolejny task");
  }
}

interface Address {
  street: string;
  postalCode: string;
  city: string;
}
