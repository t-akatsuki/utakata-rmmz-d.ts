//=============================================================================
// data/Classes.json
//=============================================================================
declare var $dataClasses: ({
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
} | null)[];
