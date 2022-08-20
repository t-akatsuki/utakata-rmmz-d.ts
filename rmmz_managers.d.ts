//=============================================================================
// rmmz_managers.js
//=============================================================================
/// <reference path="dataActors.d.ts"/>
/// <reference path="dataClasses.d.ts"/>
/// <reference path="dataSkills.d.ts"/>
/// <reference path="dataItems.d.ts"/>
/// <reference path="dataWeapons.d.ts"/>
/// <reference path="dataArmors.d.ts"/>
/// <reference path="dataEnemies.d.ts"/>
/// <reference path="dataTroops.d.ts"/>
/// <reference path="dataStates.d.ts"/>
/// <reference path="dataAnimations.d.ts"/>
/// <reference path="dataTilesets.d.ts"/>
/// <reference path="dataCommonEvents.d.ts"/>
/// <reference path="dataCommonEvents.d.ts"/>
/// <reference path="dataSystem.d.ts"/>
/// <reference path="dataMapInfos.d.ts"/>
/// <reference path="dataMap.d.ts"/>
//-----------------------------------------------------------------------------
declare function DataManager(): void;
declare namespace DataManager {
    const _globalInfo: any;
    const _errors: any[];
    const _databaseFiles: {
        name: string;
        src: string;
    }[];
    function loadGlobalInfo(): void;
    function removeInvalidGlobalInfo(): void;
    function saveGlobalInfo(): void;
    function isGlobalInfoLoaded(): boolean;
    function loadDatabase(): void;
    function loadDataFile(name: any, src: any): void;
    function onXhrLoad(xhr: any, name: any, src: any, url: any): void;
    function onXhrError(name: any, src: any, url: any): void;
    function isDatabaseLoaded(): boolean;
    function loadMapData(mapId: any): void;
    function makeEmptyMap(): void;
    function isMapLoaded(): boolean;
    function onLoad(object: any): void;
    function isMapObject(object: any): boolean;
    function extractArrayMetadata(array: any): void;
    function extractMetadata(data: any): void;
    function checkError(): void;
    function isBattleTest(): any;
    function isEventTest(): any;
    function isSkill(item: any): any;
    function isItem(item: any): any;
    function isWeapon(item: any): any;
    function isArmor(item: any): any;
    function createGameObjects(): void;
    function setupNewGame(): void;
    function setupBattleTest(): void;
    function setupEventTest(): void;
    function isAnySavefileExists(): any;
    function latestSavefileId(): any;
    function earliestSavefileId(): any;
    function emptySavefileId(): any;
    function loadAllSavefileImages(): void;
    function loadSavefileImages(info: any): void;
    function maxSavefiles(): number;
    function savefileInfo(savefileId: any): any;
    function savefileExists(savefileId: any): any;
    function saveGame(savefileId: any): any;
    function loadGame(savefileId: any): any;
    function makeSavename(savefileId: any): any;
    function selectSavefileForNewGame(): void;
    function makeSavefileInfo(): {
        title: any;
        characters: any;
        faces: any;
        playtime: any;
        timestamp: number;
    };
    function makeSaveContents(): {
        system: any;
        screen: any;
        timer: any;
        switches: any;
        variables: any;
        selfSwitches: any;
        actors: any;
        party: any;
        map: any;
        player: any;
    };
    function extractSaveContents(contents: any): void;
    function correctDataErrors(): void;
}

//-----------------------------------------------------------------------------
declare function ConfigManager(): void;
declare namespace ConfigManager {
    const alwaysDash: boolean;
    const commandRemember: boolean;
    const touchUI: boolean;
    const _isLoaded: boolean;
    const bgmVolume: number;
    const bgsVolume: any;
    const meVolume: any;
    const seVolume: any;
    function load(): void;
    function save(): void;
    function isLoaded(): boolean;
    function makeData(): {
        alwaysDash: boolean;
        commandRemember: boolean;
        touchUI: boolean;
        bgmVolume: number;
        bgsVolume: any;
        meVolume: any;
        seVolume: any;
    };
    function applyData(config: any): void;
    function readFlag(config: any, name: any, defaultValue: any): any;
    function readVolume(config: any, name: any): any;
}

//-----------------------------------------------------------------------------
declare namespace StorageManager {
    const _forageKeys: any[];
    const _forageKeysUpdated: boolean;
    function isLocalMode(): boolean;
    function saveObject(saveName: any, object: any): Promise<any>;
    function loadObject(saveName: any): any;
    function objectToJson(object: any): Promise<any>;
    function jsonToObject(json: any): Promise<any>;
    function jsonToZip(json: any): Promise<any>;
    function zipToJson(zip: any): Promise<any>;
    function saveZip(saveName: any, zip: any): any;
    function loadZip(saveName: any): any;
    function exists(saveName: any): any;
    function remove(saveName: any): any;
    function saveToLocalFile(saveName: any, zip: any): Promise<any>;
    function loadFromLocalFile(saveName: any): Promise<any>;
    function localFileExists(saveName: any): any;
    function removeLocalFile(saveName: any): void;
    function saveToForage(saveName: any, zip: any): any;
    function loadFromForage(saveName: any): any;
    function forageExists(saveName: any): any;
    function removeForage(saveName: any): any;
    function updateForageKeys(): any;
    function forageKeysUpdated(): boolean;
    function fsMkdir(path: any): void;
    function fsRename(oldPath: any, newPath: any): void;
    function fsUnlink(path: any): void;
    function fsReadFile(path: any): any;
    function fsWriteFile(path: any, data: any): void;
    function fileDirectoryPath(): any;
    function filePath(saveName: any): string;
    function forageKey(saveName: any): string;
    function forageTestKey(): string;
}

//-----------------------------------------------------------------------------
declare function FontManager(): void;
declare namespace FontManager {
    const _urls: {};
    const _states: {};
    function load(family: any, filename: any): void;
    function isReady(): boolean;
    function startLoading(family: any, url: any): void;
    function throwLoadError(family: any): never;
    function makeUrl(filename: any): string;
}

//-----------------------------------------------------------------------------
declare function ImageManager(): void;
declare namespace ImageManager {
    const iconWidth: number;
    const iconHeight: number;
    const faceWidth: number;
    const faceHeight: number;
    const _cache: {};
    const _system: {};
    const _emptyBitmap: any;
    function loadAnimation(filename: any): any;
    function loadBattleback1(filename: any): any;
    function loadBattleback2(filename: any): any;
    function loadEnemy(filename: any): any;
    function loadCharacter(filename: any): any;
    function loadFace(filename: any): any;
    function loadParallax(filename: any): any;
    function loadPicture(filename: any): any;
    function loadSvActor(filename: any): any;
    function loadSvEnemy(filename: any): any;
    function loadSystem(filename: any): any;
    function loadTileset(filename: any): any;
    function loadTitle1(filename: any): any;
    function loadTitle2(filename: any): any;
    function loadBitmap(folder: any, filename: any): any;
    function loadBitmapFromUrl(url: any): any;
    function clear(): void;
    function isReady(): boolean;
    function throwLoadError(bitmap: any): never;
    function isObjectCharacter(filename: any): any;
    function isBigCharacter(filename: any): any;
    function isZeroParallax(filename: any): boolean;
}

//-----------------------------------------------------------------------------
declare function EffectManager(): void;
declare namespace EffectManager {
    const _cache: {};
    const _errorUrls: any[];
    function load(filename: any): any;
    function startLoading(url: any): any;
    function clear(): void;
    function onLoad(): void;
    function onError(url: any): void;
    function makeUrl(filename: any): string;
    function checkErrors(): void;
    function throwLoadError(url: any): never;
    function isReady(): boolean;
}

//-----------------------------------------------------------------------------
declare function AudioManager(): void;
declare namespace AudioManager {
    const _bgmVolume: number;
    const _bgsVolume: number;
    const _meVolume: number;
    const _seVolume: number;
    const _currentBgm: any;
    const _currentBgs: any;
    const _bgmBuffer: any;
    const _bgsBuffer: any;
    const _meBuffer: any;
    const _seBuffers: any[];
    const _staticBuffers: any[];
    const _replayFadeTime: number;
    const _path: string;
    const bgmVolume: any;
    const bgsVolume: any;
    const meVolume: any;
    const seVolume: any;
    function playBgm(bgm: any, pos: any): void;
    function replayBgm(bgm: any): void;
    function isCurrentBgm(bgm: any): any;
    function updateBgmParameters(bgm: any): void;
    function updateCurrentBgm(bgm: any, pos: any): void;
    function stopBgm(): void;
    function fadeOutBgm(duration: any): void;
    function fadeInBgm(duration: any): void;
    function playBgs(bgs: any, pos: any): void;
    function replayBgs(bgs: any): void;
    function isCurrentBgs(bgs: any): any;
    function updateBgsParameters(bgs: any): void;
    function updateCurrentBgs(bgs: any, pos: any): void;
    function stopBgs(): void;
    function fadeOutBgs(duration: any): void;
    function fadeInBgs(duration: any): void;
    function playMe(me: any): void;
    function updateMeParameters(me: any): void;
    function fadeOutMe(duration: any): void;
    function stopMe(): void;
    function playSe(se: any): void;
    function updateSeParameters(buffer: any, se: any): void;
    function cleanupSe(): void;
    function stopSe(): void;
    function playStaticSe(se: any): void;
    function loadStaticSe(se: any): void;
    function isStaticSe(se: any): boolean;
    function stopAll(): void;
    function saveBgm(): {
        name: string;
        volume: number;
        pitch: number;
    } | {
        name: any;
        volume: any;
        pitch: any;
        pan: any;
        pos: any;
    };
    function saveBgs(): {
        name: string;
        volume: number;
        pitch: number;
    } | {
        name: any;
        volume: any;
        pitch: any;
        pan: any;
        pos: any;
    };
    function makeEmptyAudioObject(): {
        name: string;
        volume: number;
        pitch: number;
    };
    function createBuffer(folder: any, name: any): any;
    function updateBufferParameters(buffer: any, configVolume: any, audio: any): void;
    function audioFileExt(): string;
    function checkErrors(): void;
    function throwLoadError(webAudio: any): never;
}

//-----------------------------------------------------------------------------
declare function SoundManager(): void;
declare namespace SoundManager {
    function preloadImportantSounds(): void;
    function loadSystemSound(n: any): void;
    function playSystemSound(n: any): void;
    function playCursor(): void;
    function playOk(): void;
    function playCancel(): void;
    function playBuzzer(): void;
    function playEquip(): void;
    function playSave(): void;
    function playLoad(): void;
    function playBattleStart(): void;
    function playEscape(): void;
    function playEnemyAttack(): void;
    function playEnemyDamage(): void;
    function playEnemyCollapse(): void;
    function playBossCollapse1(): void;
    function playBossCollapse2(): void;
    function playActorDamage(): void;
    function playActorCollapse(): void;
    function playRecovery(): void;
    function playMiss(): void;
    function playEvasion(): void;
    function playMagicEvasion(): void;
    function playReflection(): void;
    function playShop(): void;
    function playUseItem(): void;
    function playUseSkill(): void;
}

//-----------------------------------------------------------------------------
declare function TextManager(): void;
declare namespace TextManager {
    function basic(basicId: any): any;
    function param(paramId: any): any;
    function command(commandId: any): any;
    function message(messageId: any): any;
    function getter(method: any, param: any): {
        get: () => any;
        configurable: boolean;
    };
    const currencyUnit: any;
}

//-----------------------------------------------------------------------------
declare function ColorManager(): void;
declare namespace ColorManager {
    function loadWindowskin(): void;
    function textColor(n: any): any;
    function normalColor(): any;
    function systemColor(): any;
    function crisisColor(): any;
    function deathColor(): any;
    function gaugeBackColor(): any;
    function hpGaugeColor1(): any;
    function hpGaugeColor2(): any;
    function mpGaugeColor1(): any;
    function mpGaugeColor2(): any;
    function mpCostColor(): any;
    function powerUpColor(): any;
    function powerDownColor(): any;
    function ctGaugeColor1(): any;
    function ctGaugeColor2(): any;
    function tpGaugeColor1(): any;
    function tpGaugeColor2(): any;
    function tpCostColor(): any;
    function pendingColor(): any;
    function hpColor(actor: any): any;
    function mpColor(): any;
    function tpColor(): any;
    function paramchangeTextColor(change: any): any;
    function damageColor(colorType: any): "#ffffff" | "#b9ffb5" | "#ffff90" | "#80b0ff" | "#808080";
    function outlineColor(): string;
    function dimColor1(): string;
    function dimColor2(): string;
    function itemBackColor1(): string;
    function itemBackColor2(): string;
}

//-----------------------------------------------------------------------------
declare function SceneManager(): void;
declare namespace SceneManager {
    const _scene: any;
    const _nextScene: any;
    const _stack: any[];
    const _exiting: boolean;
    const _previousScene: any;
    const _previousClass: any;
    const _backgroundBitmap: any;
    const _smoothDeltaTime: number;
    const _elapsedTime: number;
    function run(sceneClass: any): void;
    function initialize(): void;
    function checkBrowser(): void;
    function checkPluginErrors(): void;
    function initGraphics(): void;
    function initAudio(): void;
    function initVideo(): void;
    function initInput(): void;
    function setupEventHandlers(): void;
    function update(deltaTime: any): void;
    function determineRepeatNumber(deltaTime: any): number;
    function terminate(): void;
    function onError(event: any): void;
    function onReject(event: any): void;
    function onUnload(): void;
    function onKeyDown(event: any): void;
    function reloadGame(): void;
    function showDevTools(): void;
    function catchException(e: any): void;
    function catchNormalError(e: any): void;
    function catchLoadError(e: any): void;
    function catchUnknownError(e: any): void;
    function updateMain(): void;
    function updateFrameCount(): void;
    function updateInputData(): void;
    function updateEffekseer(): void;
    function changeScene(): void;
    function updateScene(): void;
    function isGameActive(): any;
    function onSceneTerminate(): void;
    function onSceneCreate(): void;
    function onBeforeSceneStart(): void;
    function onSceneStart(): void;
    function isSceneChanging(): boolean;
    function isCurrentSceneBusy(): any;
    function isNextScene(sceneClass: any): any;
    function isPreviousScene(sceneClass: any): boolean;
    function goto(sceneClass: any): void;
    function push(sceneClass: any): void;
    function pop(): void;
    function exit(): void;
    function clearStack(): void;
    function stop(): void;
    function prepareNextScene(...args: any[]): void;
    function snap(): any;
    function snapForBackground(): void;
    function backgroundBitmap(): any;
    function resume(): void;
}

//-----------------------------------------------------------------------------
declare function BattleManager(): void;
declare namespace BattleManager {
    function setup(troopId: any, canEscape: any, canLose: any): void;
    function initMembers(): void;
    function isTpb(): boolean;
    function isActiveTpb(): boolean;
    function isBattleTest(): any;
    function setBattleTest(battleTest: any): void;
    function setEventCallback(callback: any): void;
    function setLogWindow(logWindow: any): void;
    function setSpriteset(spriteset: any): void;
    function onEncounter(): void;
    function ratePreemptive(): any;
    function rateSurprise(): any;
    function saveBgmAndBgs(): void;
    function playBattleBgm(): void;
    function playVictoryMe(): void;
    function playDefeatMe(): void;
    function replayBgmAndBgs(): void;
    function makeEscapeRatio(): void;
    function update(timeActive: any): void;
    function updatePhase(timeActive: any): void;
    function updateEvent(): boolean;
    function updateEventMain(): boolean;
    function isBusy(): any;
    function updateTpbInput(): void;
    function checkTpbInputClose(): void;
    function checkTpbInputOpen(): void;
    function isPartyTpbInputtable(): any;
    function needsActorInputCancel(): any;
    function isTpbMainPhase(): any;
    function isInputting(): any;
    function isInTurn(): boolean;
    function isTurnEnd(): boolean;
    function isAborting(): boolean;
    function isBattleEnd(): boolean;
    function canEscape(): any;
    function canLose(): any;
    function isEscaped(): any;
    function actor(): any;
    function startBattle(): void;
    function displayStartMessages(): void;
    function startInput(): void;
    function inputtingAction(): any;
    function selectNextCommand(): void;
    function selectNextActor(): void;
    function selectPreviousCommand(): void;
    function selectPreviousActor(): void;
    function changeCurrentActor(forward: any): void;
    function startActorInput(): void;
    function finishActorInput(): void;
    function cancelActorInput(): void;
    function updateStart(): void;
    function startTurn(): void;
    function updateTurn(timeActive: any): void;
    function updateTpb(): void;
    function updateAllTpbBattlers(): void;
    function updateTpbBattler(battler: any): void;
    function checkTpbTurnEnd(): void;
    function processTurn(): void;
    function endBattlerActions(battler: any): void;
    function endTurn(): void;
    function updateTurnEnd(): void;
    function endAllBattlersTurn(): void;
    function displayBattlerStatus(battler: any, current: any): void;
    function getNextSubject(): any;
    function allBattleMembers(): any;
    function makeActionOrders(): void;
    function startAction(): void;
    function updateAction(): void;
    function endAction(): void;
    function invokeAction(subject: any, target: any): void;
    function invokeNormalAction(subject: any, target: any): void;
    function invokeCounterAttack(subject: any, target: any): void;
    function invokeMagicReflection(subject: any, target: any): void;
    function applySubstitute(target: any): any;
    function checkSubstitute(target: any): any;
    function isActionForced(): boolean;
    function forceAction(battler: any): void;
    function processForcedAction(): void;
    function abort(): void;
    function checkBattleEnd(): boolean;
    function checkAbort(): boolean;
    function processVictory(): void;
    function processEscape(): any;
    function onEscapeSuccess(): void;
    function onEscapeFailure(): void;
    function processPartyEscape(): void;
    function processAbort(): void;
    function processDefeat(): void;
    function endBattle(result: any): void;
    function updateBattleEnd(): void;
    function makeRewards(): void;
    function displayVictoryMessage(): void;
    function displayDefeatMessage(): void;
    function displayEscapeSuccessMessage(): void;
    function displayEscapeFailureMessage(): void;
    function displayRewards(): void;
    function displayExp(): void;
    function displayGold(): void;
    function displayDropItems(): void;
    function gainRewards(): void;
    function gainExp(): void;
    function gainGold(): void;
    function gainDropItems(): void;
}

//-----------------------------------------------------------------------------
declare function PluginManager(): void;
declare namespace PluginManager {
    const _scripts: any[];
    const _errorUrls: any[];
    const _parameters: {};
    const _commands: {};
    function setup(plugins: any): void;
    function parameters(name: any): any;
    function setParameters(name: any, parameters: any): void;
    function loadScript(filename: any): void;
    function onError(e: any): void;
    function makeUrl(filename: any): string;
    function checkErrors(): void;
    function throwLoadError(url: any): never;
    function registerCommand(pluginName: string, commandName: string, func: Function): void;
    function callCommand(self: any, pluginName: any, commandName: any, args: any): void;
}
//-----------------------------------------------------------------------------
