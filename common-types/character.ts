import { RaceInterfaces } from "./race";
import { SkillInterfaces } from "./skill";
import { WorldviewInterfaces } from "./worldview";
import { MoneyInterfaces } from "./money";
import { WeaponsInterfaces } from "./weapons";
import { SpellsInterfaces } from "./spells";
import { HitsInterfaces } from "./hits";

export interface CharacterInterfaces {
    name: string;
    image?: ImageBitmap;
    class: string;
    level: number;
    history: string;
    race: RaceInterfaces;
    worldview: WorldviewInterfaces;
    experience: number;
    armorСlass: number;
    initiative: number;
    speed: number;
    health: HitsInterfaces;
    tempHits: HitsInterfaces;
    diceHits: HitsInterfaces;
    skill: SkillInterfaces;
    money: MoneyInterfaces;
    weapon: WeaponsInterfaces;
    spell: SpellsInterfaces;
    deathSavingThrows: number;
    notes: string;
  }