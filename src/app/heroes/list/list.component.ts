import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesList:string [] = ['Spiderman', 'Hulk', 'Thor', 'Ironman', 'She Hulk'];
  public removedHero?:string;

  removeLastHeroList():void{
    this.removedHero = this.heroesList.pop();
  }
}
