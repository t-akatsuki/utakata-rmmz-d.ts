//=============================================================================
// data/CommonEvents.json
//=============================================================================
declare interface $dataCommonEvent {
    id: number;
    list: {
        code: number;
        indent: number;
        parameters: never[];
    }[];
    name: string;
    switchId: number;
    trigger: number;
};

declare const $dataCommonEvents: ($dataCommonEvent | null)[];
