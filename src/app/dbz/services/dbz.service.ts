import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid"

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    id: uuid(),
    power: 9500
  },{
    name: 'Vegeta',
    id: uuid(),
    power: 7500
  }];

  addCharacter(character: Character):void{
    const newCharacter:Character = {id:uuid(), ...character};
    this.characters.push(newCharacter);
  }

  /*onDeleteCharacter(index:number){
    this.characters.splice(index, 1);
  }*/
  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
