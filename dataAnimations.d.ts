//=============================================================================
// data/Animations.json
//=============================================================================
declare var $dataAnimations: ({
    id: number;
    displayType: number;
    effectName: string;
    flashTimings: {
        frame: number;
        duration: number;
        color: number[];
    }[];
    name: string;
    offsetX: number;
    offsetY: number;
    rotation: {
        x: number;
        y: number;
        z: number;
    };
    scale: number;
    soundTimings: {
        frame: number;
        se: {
            name: string;
            pan: number;
            pitch: number;
            volume: number;
        };
    }[];
    speed: number;
} | null)[];
