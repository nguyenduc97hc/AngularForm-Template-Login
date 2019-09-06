import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teampalte',
  templateUrl: './teampalte.component.html',
  styleUrls: ['./teampalte.component.scss']
})
export class TeampalteComponent implements OnInit {
  profile = {
    username: 'Bob',
    email: 'abc@deg.com',
    facebook: 'facebook.com',
    twitter: 'twitter.com',
    website: 'example.com',
    tel: '1234-5678-90'
  };
  constructor() { }

  ngOnInit() {
  }
  onSubmit(profileForm) {
    console.log(profileForm);
  }
}
