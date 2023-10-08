import { CharactersInterfaces } from "./characters";

export interface UserInterfaces {
    name: string;
    image?: ImageBitmap;
    token: string;
    characters: CharactersInterfaces;
  }