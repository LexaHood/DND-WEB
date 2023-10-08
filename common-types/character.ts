import { RaceInterfaces } from "./race";
import { SkillInterfaces } from "./skill";
import { WorldviewInterfaces } from "./worldview";
import { MoneyInterfaces } from "./money";
import { WeaponInterfaces } from "./weapon";

export interface CharacterInterfaces {
    name: string;
    image: ImageBitmap;
    class: string;
    level: number;
    history: string;
    race: RaceInterfaces;
    worldview: WorldviewInterfaces;
    experience: number;
    skill: SkillInterfaces;
    money: MoneyInterfaces;
    weapon: [WeaponInterfaces];
  }