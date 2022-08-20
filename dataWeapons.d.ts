//=============================================================================
// data/Weapons.json
//=============================================================================
declare var $dataWeapons: ({
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
} | null)[];
