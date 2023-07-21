import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura!:number;
  @Output() getAutor = new EventEmitter();
  public autor: any;

  constructor() {

    this.autor = {
      nombre: 'Bryan',
      apellido: 'Soria',
      edad: '20'
    }
  }
    
  

  ngOnInit(): void {
    $("#logo").click(function(e:any){
      e.preventDefault();
      $("header").css("background-color", "green")
                  .css("heigth", "50px");
    })

    $(".galeria").bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: this.anchura,
    });
  }

  lanzar(event:any){
    this.getAutor.emit(this.autor);
    
  }
  

}
