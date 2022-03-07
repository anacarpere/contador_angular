import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contador';
  num:number = 0

  adicionar():void{
    this.num++
  }
  reduzir():void{
    if(this.num > 0)
    this.num--
  }
}

