import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  person = {
    name: '',
    email: '',
    message: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    alert(`My name is ${this.person.name}, my email is ${this.person.email}
    and my message is ${this.person.message}`)
  }

}
