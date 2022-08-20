//=============================================================================
// data/Weapons.json
//=============================================================================
declare interface $dataWeapon {
    id: number;
    animationId: number;
    description: string;
    etypeId: number;
    traits: {
        code: number;
        dataId: number;
        value: number;
    }[];
    iconIndex: number;
    name: string;
    note: string;
    params: number[];
    price: number;
    wtypeId: number;
};

declare const $dataWeapons: ($dataWeapon | null)[];
