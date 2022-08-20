//=============================================================================
// data/Enemies.json
//=============================================================================
declare interface $dataEnemie {
    id: number;
    actions: {
        conditionParam1: number;
        conditionParam2: number;
        conditionType: number;
        rating: number;
        skillId: number;
    }[];
    battlerHue: number;
    battlerName: string;
    dropItems: {
        dataId: number;
        denominator: number;
        kind: number;
    }[];
    exp: number;
    traits: {
        code: number;
        dataId: number;
        value: number;
    }[];
    gold: number;
    name: string;
    note: string;
    params: number[];
};

declare const $dataEnemies: ($dataEnemie | null)[];
