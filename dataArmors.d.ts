//=============================================================================
// data/Armors.json
//=============================================================================
declare var $dataArmors: ({
    id: number;
    atypeId: number;
    description: string;
    etypeId: number;
    traits: {
        code: number;
        dataId: number;
        value: number;
    }[];
    iconIndex: number;
    name: string;
    note: string;
    params: number[];
    price: number;
} | null)[];
