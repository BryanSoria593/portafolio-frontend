import { Component, OnInit, ViewChild } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

public widthSlider!:number ;
public anchuraToSlider!:number;
public autor: any;

@ViewChild('textos', {static: true}) textos: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.textos);
  
  }
  // cargarSlider(){

  //   this.anchuraToSlider = this.widthSlider;
    
  // }
  cargarSlider(){
    this.anchuraToSlider = 0;
    setTimeout(() => {
      this.anchuraToSlider = this.widthSlider;}, 10);

}
  getAutor(event:any){
    this.autor = event;
  } 

}
