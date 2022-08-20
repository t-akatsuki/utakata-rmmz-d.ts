//=============================================================================
// data/Classes.json
//=============================================================================
declare interface $dataClass {
    id: number;
    expParams: number[];
    traits: {
        code: number;
        dataId: number;
        value: number;
    }[];
    learnings: {
        level: number;
        note: string;
        skillId: number;
    }[];
    name: string;
    note: string;
    params: number[][];
};

declare const $dataClasses: ($dataClass | null)[];
