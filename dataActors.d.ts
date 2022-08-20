//=============================================================================
// data/Actors.json
//=============================================================================
declare interface $dataActor {
    id: number;
    battlerName: string;
    characterIndex: number;
    characterName: string;
    classId: number;
    equips: number[];
    faceIndex: number;
    faceName: string;
    traits: {
        code: number;
        dataId: number;
        value: number;
    }[];
    initialLevel: number;
    maxLevel: number;
    name: string;
    nickname: string;
    note: string;
    profile: string;
};

declare const $dataActors: ($dataActor | null)[];
