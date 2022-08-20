//=============================================================================
// data/Items.json
//=============================================================================
declare interface $dataItem {
    id: number;
    animationId: number;
    consumable: boolean;
    damage: {
        critical: boolean;
        elementId: number;
        formula: string;
        type: number;
        variance: number;
    };
    description: string;
    effects: {
        code: number;
        dataId: number;
        value1: number;
        value2: number;
    }[];
    hitType: number;
    iconIndex: number;
    itypeId: number;
    name: string;
    note: string;
    occasion: number;
    price: number;
    repeats: number;
    scope: number;
    speed: number;
    successRate: number;
    tpGain: number;
};

declare const $dataItems: ($dataItem | null)[];
