//=============================================================================
// data/Map.json
//=============================================================================
declare namespace $dataMap {
    const autoplayBgm: boolean;
    const autoplayBgs: boolean;
    const battleback1Name: string;
    const battleback2Name: string;
    namespace bgm {
        const name: string;
        const pan: number;
        const pitch: number;
        const volume: number;
    }
    namespace bgs {
        const name: string;
        const pan: number;
        const pitch: number;
        const volume: number;
    }
    const disableDashing: boolean;
    const displayName: string;
    const encounterList: never[];
    const encounterStep: number;
    const height: number;
    const note: string;
    const parallaxLoopX: boolean;
    const parallaxLoopY: boolean;
    const parallaxName: string;
    const parallaxShow: boolean;
    const parallaxSx: number;
    const parallaxSy: number;
    const scrollType: number;
    const specifyBattleback: boolean;
    const tilesetId: number;
    const width: number;
    const data: number[];
    const events: ({
        id: number;
        name: string;
        note: string;
        pages: {
            conditions: {
                actorId: number;
                actorValid: boolean;
                itemId: number;
                itemValid: boolean;
                selfSwitchCh: string;
                selfSwitchValid: boolean;
                switch1Id: number;
                switch1Valid: boolean;
                switch2Id: number;
                switch2Valid: boolean;
                variableId: number;
                variableValid: boolean;
                variableValue: number;
            };
            directionFix: boolean;
            image: {
                tileId: number;
                characterName: string;
                direction: number;
                pattern: number;
                characterIndex: number;
            };
            list: ({
                code: number;
                indent: number;
                parameters: {
                    [key: string]: any;
                }[];
            } | {
                code: number;
                indent: number;
                parameters: (string | {
                    message1: string;
                    message2: string;
                })[];
            })[];
            moveFrequency: number;
            moveRoute: {
                list: {
                    code: number;
                    parameters: {
                        [key: string]: any;
                    }[];
                }[];
                repeat: boolean;
                skippable: boolean;
                wait: boolean;
            };
            moveSpeed: number;
            moveType: number;
            priorityType: number;
            stepAnime: boolean;
            through: boolean;
            trigger: number;
            walkAnime: boolean;
        }[];
        x: number;
        y: number;
    } | null)[];
}
