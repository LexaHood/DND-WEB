export interface WeaponInterfaces {
    name: string;
    view: string;
    image?: ImageBitmap;
    slot: number; //одно или двуруч
    equipped: boolean;
    attack: number;
    damage: number;
    distance: number;
  }