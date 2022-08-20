//=============================================================================
// data/Skills.json
//=============================================================================
declare interface $dataSkill {
    id: number;
    animationId: number;
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
    message1: string;
    message2: string;
    mpCost: number;
    name: string;
    note: string;
    occasion: number;
    repeats: number;
    requiredWtypeId1: number;
    requiredWtypeId2: number;
    scope: number;
    speed: number;
    stypeId: number;
    successRate: number;
    tpCost: number;
    tpGain: number;
    messageType: number;
};

declare const $dataSkills: ($dataSkill | null)[];
