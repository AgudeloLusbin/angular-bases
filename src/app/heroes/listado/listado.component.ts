import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string[] = [];
  borrarHeroe(){
    //console.log( this.heroes.pop());
    this.heroeBorrado[this.heroeBorrado.length] = this.heroes.shift() || '';
    
  }

}
