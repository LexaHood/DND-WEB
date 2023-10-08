import { CharacterInterfaces } from "./character";

export interface UserInterfaces {
    name: string;
    image: ImageBitmap;
    token: string;
    characters: [CharacterInterfaces];
  }