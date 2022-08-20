//=============================================================================
// data/MapInfos.json
//=============================================================================
declare interface $dataMapInfo {
    id: number;
    expanded: boolean;
    name: string;
    order: number;
    parentId: number;
    scrollX: number;
    scrollY: number;
};

declare const $dataMapInfos: ($dataMapInfo | null)[];
