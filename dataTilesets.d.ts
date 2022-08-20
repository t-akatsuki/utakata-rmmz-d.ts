//=============================================================================
// data/Tilesets.json
//=============================================================================
declare interface $dataTileset {
    id: number;
    flags: number[];
    mode: number;
    name: string;
    note: string;
    tilesetNames: string[];
};

declare var $dataTilesets: ($dataTileset | null)[];
