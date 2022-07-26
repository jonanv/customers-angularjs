import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public autor: any = {
      nombre: 'Giovanni',
      apellidos: 'Vargas'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
