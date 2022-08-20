//=============================================================================
// data/System.json
//=============================================================================
declare namespace $dataSystem {
    export namespace advanced {
        const gameId: number;
        const screenWidth: number;
        const screenHeight: number;
        const uiAreaWidth: number;
        const uiAreaHeight: number;
        const numberFontFilename: string;
        const fallbackFonts: string;
        const fontSize: number;
        const mainFontFilename: string;
        const windowOpacity: number;
    }
    export namespace airship {
        namespace bgm {
            const name: string;
            const pan: number;
            const pitch: number;
            const volume: number;
        }
        const characterIndex: number;
        const characterName: string;
        const startMapId: number;
        const startX: number;
        const startY: number;
    }
    export const armorTypes: string[];
    export const attackMotions: {
        type: number;
        weaponImageId: number;
    }[];
    export namespace battleBgm {
        const name: string;
        const pan: string;
        const pitch: number;
        const volume: number;
    }
    export const battleback1Name: string;
    export const battleback2Name: string;
    export const battlerHue: number;
    export const battlerName: string;
    export const battleSystem: number;
    export namespace boat {
        export namespace bgm {
            const name: string;
            const pan: number;
            const pitch: number;
            const volume: number;
        }
        const characterIndex: number;
        const characterName: string;
        const startMapId: number;
        const startX: number;
        const startY: number;
    }
    export const currencyUnit: string;
    export namespace defeatMe {
        const name: string;
        const pan: number;
        const pitch: number;
        const volume: number;
    }
    export const editMapId: number;
    export const elements: string[];
    export const equipTypes: string[];
    export const gameTitle: string;
    export namespace gameoverMe {
        const name: string;
        const pan: number;
        const pitch: number;
        const volume: number;
    }
    export const itemCategories: boolean[];
    export const locale: string;
    export const magicSkills: number[];
    export const menuCommands: boolean[];
    export const optAutosave: boolean;
    export const optDisplayTp: boolean;
    export const optDrawTitle: boolean;
    export const optExtraExp: boolean;
    export const optFloorDeath: boolean;
    export const optFollowers: boolean;
    export const optKeyItemsNumber: boolean;
    export const optSideView: boolean;
    export const optSlipDeath: boolean;
    export const optTransparent: boolean;
    export const partyMembers: number[];
    export namespace ship {
        export namespace bgm {
            const name: string;
            const pan: number;
            const pitch: number;
            const volume: number;
        }
        const characterIndex: number;
        const characterName: string;
        const startMapId: number;
        const startX: number;
        const startY: number;
    }
    export const skillTypes: string[];
    export const sounds: {
        name: string;
        pan: number;
        pitch: number;
        volume: number;
    }[];
    const startMapId: number;
    const startX: number;
    const startY: number;
    export const switches: string[];
    export namespace terms {
        const basic: string[];
        const commands: (string | null)[];
        const params: string[];
        namespace messages {
            const alwaysDash: string;
            const commandRemember: string;
            const touchUI: string;
            const bgmVolume: string;
            const bgsVolume: string;
            const meVolume: string;
            const seVolume: string;
            const possession: string;
            const expTotal: string;
            const expNext: string;
            const saveMessage: string;
            const loadMessage: string;
            const file: string;
            const autosave: string;
            const partyName: string;
            const emerge: string;
            const preemptive: string;
            const surprise: string;
            const escapeStart: string;
            const escapeFailure: string;
            const victory: string;
            const defeat: string;
            const obtainExp: string;
            const obtainGold: string;
            const obtainItem: string;
            const levelUp: string;
            const obtainSkill: string;
            const useItem: string;
            const criticalToEnemy: string;
            const criticalToActor: string;
            const actorDamage: string;
            const actorRecovery: string;
            const actorGain: string;
            const actorLoss: string;
            const actorDrain: string;
            const actorNoDamage: string;
            const actorNoHit: string;
            const enemyDamage: string;
            const enemyRecovery: string;
            const enemyGain: string;
            const enemyLoss: string;
            const enemyDrain: string;
            const enemyNoDamage: string;
            const enemyNoHit: string;
            const evasion: string;
            const magicEvasion: string;
            const magicReflection: string;
            const counterAttack: string;
            const substitute: string;
            const buffAdd: string;
            const debuffAdd: string;
            const buffRemove: string;
            const actionFailure: string;
        }
    }
    export const testBattlers: {
        actorId: number;
        level: number;
        equips: number[];
    }[];
    export const testTroopId: number;
    export const title1Name: string;
    export const title2Name: string;
    export namespace titleBgm {
        const name: string;
        const pan: number;
        const pitch: number;
        const volume: number;
    }
    export namespace titleCommandWindow {
        const background: number;
        const offsetX: number;
        const offsetY: number;
    }
    export const variables: string[];
    export const versionId: number;
    export namespace victoryMe {
        const name: string;
        const pan: number;
        const pitch: number;
        const volume: number;
    }
    export const weaponTypes: string[];
    export const windowTone: number[];
    export const tileSize: number;
}
