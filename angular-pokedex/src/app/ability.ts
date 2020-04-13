import {Deserializable} from "./deserializable.model";

export class Ability{
    name:string;
    url:string;
    is_hidden:boolean;
    slot:number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
      }
}