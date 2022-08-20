//=============================================================================
// data/Troops.json
//=============================================================================
declare interface $dataTroop {
    id: number;
    members: {
        enemyId: number;
        x: number;
        y: number;
        hidden: boolean;
    }[];
    name: string;
    pages: {
        conditions: {
            actorHp: number;
            actorId: number;
            actorValid: boolean;
            enemyHp: number;
            enemyIndex: number;
            enemyValid: boolean;
            switchId: number;
            switchValid: boolean;
            turnA: number;
            turnB: number;
            turnEnding: boolean;
            turnValid: boolean;
        };
        list: {
            code: number;
            indent: number;
            parameters: {
                [key: string]: any;
            }[];
        }[];
        span: number;
    }[];
};

declare const $dataTroops: ($dataTroop | null)[];
