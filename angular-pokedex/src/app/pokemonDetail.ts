import{Ability} from "./ability";
import {Deserializable} from "./deserializable.model";

export class PokemonDetail{
    height:number;
    id:number;
    name:string;
    weight:number;
    type: any;
    abilities:Ability;

    deserialize(input: any): this {

        Object.assign(this, input);
        this.abilities = new Ability().deserialize(input.abilities);
        return this;
      }
}