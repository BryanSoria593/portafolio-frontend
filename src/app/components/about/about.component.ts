import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string ="" ;
  public subtitle: string ="";
  public email: string = "";
  constructor() { 
    this.title = "Bryan Soria";
    this.subtitle = "Soy desarrollador web";
    this.email = "zansoriam@gmail.com"
  }

  ngOnInit(): void {
  }

}
