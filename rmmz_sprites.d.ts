//=============================================================================
// rmmz_sprites.js
//=============================================================================
declare function Sprite_Clickable(...args: any[]): void;
declare class Sprite_Clickable {
    constructor(...args: any[]);
    initialize(): void;
    _pressed: boolean | undefined;
    _hovered: boolean | undefined;
    update(): void;
    processTouch(): void;
    isPressed(): boolean | undefined;
    isClickEnabled(): any;
    isBeingTouched(): any;
    hitTest(x: any, y: any): any;
    onMouseEnter(): void;
    onMouseExit(): void;
    onPress(): void;
    onClick(): void;
}
declare function Sprite_Button(...args: any[]): void;
declare class Sprite_Button {
    constructor(...args: any[]);
    initialize(buttonType: any): void;
    _buttonType: any;
    _clickHandler: any;
    _coldFrame: Rectangle | null | undefined;
    _hotFrame: Rectangle | null | undefined;
    setupFrames(): void;
    blockWidth(): number;
    blockHeight(): number;
    loadButtonImage(): void;
    bitmap: any;
    buttonData(): any;
    update(): void;
    checkBitmap(): void;
    updateFrame(): void;
    updateOpacity(): void;
    opacity: number | undefined;
    setColdFrame(x: any, y: any, width: any, height: any): void;
    setHotFrame(x: any, y: any, width: any, height: any): void;
    setClickHandler(method: any): void;
    onClick(): void;
}
declare function Sprite_Character(...args: any[]): void;
declare class Sprite_Character {
    constructor(...args: any[]);
    initialize(character: any): void;
    initMembers(): void;
    _character: any;
    _balloonDuration: number | undefined;
    _tilesetId: any;
    _upperBody: Sprite | null | undefined;
    _lowerBody: Sprite | null | undefined;
    setCharacter(character: any): void;
    checkCharacter(character: any): boolean;
    update(): void;
    updateVisibility(): void;
    visible: boolean | undefined;
    isTile(): any;
    isObjectCharacter(): any;
    isEmptyCharacter(): boolean;
    tilesetBitmap(tileId: any): any;
    updateBitmap(): void;
    _tileId: any;
    _characterName: any;
    _characterIndex: any;
    isImageChanged(): boolean;
    setTileBitmap(): void;
    bitmap: any;
    setCharacterBitmap(): void;
    _isBigCharacter: any;
    updateFrame(): void;
    updateTileFrame(): void;
    updateCharacterFrame(): void;
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): any;
    characterPatternY(): number;
    patternWidth(): any;
    patternHeight(): any;
    updateHalfBodySprites(): void;
    createHalfBodySprites(): void;
    updatePosition(): void;
    x: any;
    y: any;
    z: any;
    updateOther(): void;
    opacity: any;
    blendMode: any;
    _bushDepth: any;
}
declare function Sprite_Battler(...args: any[]): void;
declare class Sprite_Battler {
    constructor(...args: any[]);
    initialize(battler: any): void;
    initMembers(): void;
    _battler: any;
    _damages: any[] | undefined;
    _homeX: any;
    _homeY: any;
    _offsetX: any;
    _offsetY: any;
    _targetOffsetX: any;
    _targetOffsetY: any;
    _movementDuration: any;
    _selectionEffectCount: number | undefined;
    setBattler(battler: any): void;
    checkBattler(battler: any): boolean;
    mainSprite(): Sprite_Battler;
    setHome(x: any, y: any): void;
    update(): void;
    bitmap: any;
    updateVisibility(): void;
    visible: boolean | undefined;
    updateMain(): void;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updatePosition(): void;
    x: any;
    y: any;
    updateDamagePopup(): void;
    updateSelectionEffect(): void;
    setupDamagePopup(): void;
    createDamageSprite(): void;
    destroyDamageSprite(sprite: any): void;
    damageOffsetX(): number;
    damageOffsetY(): number;
    startMove(x: any, y: any, duration: any): void;
    onMoveEnd(): void;
    isEffecting(): boolean;
    isMoving(): boolean;
    inHomePosition(): boolean;
    onMouseEnter(): void;
    onPress(): void;
    onClick(): void;
}
declare function Sprite_Actor(...args: any[]): void;
declare class Sprite_Actor {
    constructor(...args: any[]);
    initialize(battler: any): void;
    initMembers(): void;
    _battlerName: any;
    _motion: any;
    _motionCount: number | undefined;
    _pattern: any;
    mainSprite(): Sprite | undefined;
    createMainSprite(): void;
    _mainSprite: Sprite | undefined;
    createShadowSprite(): void;
    _shadowSprite: Sprite | undefined;
    createWeaponSprite(): void;
    _weaponSprite: Sprite_Weapon | undefined;
    createStateSprite(): void;
    _stateSprite: Sprite_StateOverlay | undefined;
    setBattler(battler: any): void;
    _actor: any;
    moveToStartPosition(): void;
    setActorHome(index: any): void;
    update(): void;
    updateShadow(): void;
    updateMain(): void;
    setupMotion(): void;
    setupWeaponAnimation(): void;
    startMotion(motionType: any): void;
    updateTargetPosition(): void;
    shouldStepForward(): any;
    updateBitmap(): void;
    updateFrame(): void;
    updateMove(): void;
    updateMotion(): void;
    updateMotionCount(): void;
    motionSpeed(): number;
    refreshMotion(): void;
    startEntryMotion(): void;
    stepForward(): void;
    stepBack(): void;
    retreat(): void;
    onMoveEnd(): void;
    damageOffsetX(): number;
    damageOffsetY(): any;
}
declare namespace Sprite_Actor {
    namespace MOTIONS {
        namespace walk {
            const index: number;
            const loop: boolean;
        }
        namespace wait {
            const index_1: number;
            export { index_1 as index };
            const loop_1: boolean;
            export { loop_1 as loop };
        }
        namespace chant {
            const index_2: number;
            export { index_2 as index };
            const loop_2: boolean;
            export { loop_2 as loop };
        }
        namespace guard {
            const index_3: number;
            export { index_3 as index };
            const loop_3: boolean;
            export { loop_3 as loop };
        }
        namespace damage {
            const index_4: number;
            export { index_4 as index };
            const loop_4: boolean;
            export { loop_4 as loop };
        }
        namespace evade {
            const index_5: number;
            export { index_5 as index };
            const loop_5: boolean;
            export { loop_5 as loop };
        }
        namespace thrust {
            const index_6: number;
            export { index_6 as index };
            const loop_6: boolean;
            export { loop_6 as loop };
        }
        namespace swing {
            const index_7: number;
            export { index_7 as index };
            const loop_7: boolean;
            export { loop_7 as loop };
        }
        namespace missile {
            const index_8: number;
            export { index_8 as index };
            const loop_8: boolean;
            export { loop_8 as loop };
        }
        namespace skill {
            const index_9: number;
            export { index_9 as index };
            const loop_9: boolean;
            export { loop_9 as loop };
        }
        namespace spell {
            const index_10: number;
            export { index_10 as index };
            const loop_10: boolean;
            export { loop_10 as loop };
        }
        namespace item {
            const index_11: number;
            export { index_11 as index };
            const loop_11: boolean;
            export { loop_11 as loop };
        }
        namespace escape {
            const index_12: number;
            export { index_12 as index };
            const loop_12: boolean;
            export { loop_12 as loop };
        }
        namespace victory {
            const index_13: number;
            export { index_13 as index };
            const loop_13: boolean;
            export { loop_13 as loop };
        }
        namespace dying {
            const index_14: number;
            export { index_14 as index };
            const loop_14: boolean;
            export { loop_14 as loop };
        }
        namespace abnormal {
            const index_15: number;
            export { index_15 as index };
            const loop_15: boolean;
            export { loop_15 as loop };
        }
        namespace sleep {
            const index_16: number;
            export { index_16 as index };
            const loop_16: boolean;
            export { loop_16 as loop };
        }
        namespace dead {
            const index_17: number;
            export { index_17 as index };
            const loop_17: boolean;
            export { loop_17 as loop };
        }
    }
}
declare function Sprite_Enemy(...args: any[]): void;
declare class Sprite_Enemy {
    constructor(...args: any[]);
    initialize(battler: any): void;
    initMembers(): void;
    _enemy: any;
    _appeared: any;
    _battlerName: any;
    _battlerHue: any;
    _effectType: any;
    _effectDuration: any;
    _shake: number | undefined;
    createStateIconSprite(): void;
    _stateIconSprite: Sprite_StateIcon | undefined;
    setBattler(battler: any): void;
    update(): void;
    updateBitmap(): void;
    loadBitmap(name: any): void;
    bitmap: any;
    setHue(hue: any): void;
    updateFrame(): void;
    updatePosition(): void;
    updateStateSprite(): void;
    initVisibility(): void;
    opacity: number | undefined;
    setupEffect(): void;
    startEffect(effectType: any): void;
    startAppear(): void;
    startDisappear(): void;
    startWhiten(): void;
    startBlink(): void;
    startCollapse(): void;
    startBossCollapse(): void;
    startInstantCollapse(): void;
    updateEffect(): void;
    isEffecting(): boolean;
    revertToNormal(): void;
    blendMode: number | undefined;
    updateWhiten(): void;
    updateBlink(): void;
    updateAppear(): void;
    updateDisappear(): void;
    updateCollapse(): void;
    updateBossCollapse(): void;
    updateInstantCollapse(): void;
    damageOffsetX(): any;
    damageOffsetY(): number;
}
declare function Sprite_Animation(...args: any[]): void;
declare class Sprite_Animation {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _targets: any;
    _animation: any;
    _mirror: any;
    _delay: any;
    _previous: any;
    _effect: any;
    _handle: any;
    _playing: boolean | undefined;
    _started: boolean | undefined;
    _frameIndex: number | undefined;
    _maxTimingFrames: any;
    _flashColor: any;
    _flashDuration: any;
    _viewportSize: number | undefined;
    z: number | undefined;
    destroy(options: any): void;
    setup(targets: any, animation: any, mirror: any, delay: any, previous: any): void;
    update(): void;
    canStart(): boolean;
    shouldWaitForPrevious(): boolean;
    updateEffectGeometry(): void;
    updateMain(): void;
    processSoundTimings(): void;
    processFlashTimings(): void;
    checkEnd(): void;
    updateFlash(): void;
    isPlaying(): boolean | undefined;
    setRotation(x: any, y: any, z: any): void;
    _render(renderer: any): void;
    setProjectionMatrix(renderer: any): void;
    setCameraMatrix(): void;
    setViewport(renderer: any): void;
    targetPosition(renderer: any): Point;
    targetSpritePosition(sprite: any): any;
    resetViewport(renderer: any): void;
    onBeforeRender(renderer: any): void;
    onAfterRender(renderer: any): void;
}
declare function Sprite_AnimationMV(...args: any[]): void;
declare class Sprite_AnimationMV {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _targets: any;
    _animation: any;
    _mirror: any;
    _delay: any;
    _rate: number | undefined;
    _duration: number | undefined;
    _flashColor: any;
    _flashDuration: any;
    _screenFlashDuration: any;
    _hidingDuration: any;
    _hue1: any;
    _hue2: any;
    _bitmap1: any;
    _bitmap2: any;
    _cellSprites: any[] | undefined;
    _screenFlashSprite: ScreenSprite | null | undefined;
    z: number | undefined;
    setup(targets: any, animation: any, mirror: any, delay: any): void;
    setupRate(): void;
    setupDuration(): void;
    update(): void;
    updateFlash(): void;
    updateScreenFlash(): void;
    absoluteX(): number;
    absoluteY(): number;
    updateHiding(): void;
    isPlaying(): boolean;
    loadBitmaps(): void;
    isReady(): any;
    createCellSprites(): void;
    createScreenFlashSprite(): void;
    updateMain(): void;
    updatePosition(): void;
    x: any;
    y: any;
    updateFrame(): void;
    currentFrameIndex(): number;
    updateAllCellSprites(frame: any): void;
    updateCellSprite(sprite: any, cell: any): void;
    processTimingData(timing: any): void;
    startFlash(color: any, duration: any): void;
    startScreenFlash(color: any, duration: any): void;
    startHiding(duration: any): void;
    onEnd(): void;
}
declare function Sprite_Battleback(...args: any[]): void;
declare class Sprite_Battleback {
    constructor(...args: any[]);
    initialize(type: any): void;
    bitmap: any;
    adjustPosition(): void;
    width: number | undefined;
    height: number | undefined;
    x: number | undefined;
    y: number | undefined;
    battleback1Bitmap(): any;
    battleback2Bitmap(): any;
    battleback1Name(): any;
    battleback2Name(): any;
    overworldBattleback1Name(): string;
    overworldBattleback2Name(): string;
    normalBattleback1Name(): string;
    normalBattleback2Name(): string;
    terrainBattleback1Name(type: any): "Wasteland" | "DirtField" | "Desert" | "Lava1" | "Lava2" | "Snowfield" | "Clouds" | "PoisonSwamp" | null;
    terrainBattleback2Name(type: any): "Wasteland" | "Desert" | "Snowfield" | "Clouds" | "PoisonSwamp" | "Forest" | "Cliff" | "Lava" | undefined;
    defaultBattleback1Name(): string;
    defaultBattleback2Name(): string;
    shipBattleback1Name(): string;
    shipBattleback2Name(): string;
    autotileType(z: any): any;
}
declare function Sprite_Damage(...args: any[]): void;
declare class Sprite_Damage {
    constructor(...args: any[]);
    initialize(): void;
    _duration: number | undefined;
    _flashColor: number[] | undefined;
    _flashDuration: number | undefined;
    _colorType: number | undefined;
    destroy(options: any): void;
    setup(target: any): void;
    setupCriticalEffect(): void;
    fontFace(): any;
    fontSize(): any;
    damageColor(): any;
    outlineColor(): string;
    outlineWidth(): number;
    createMiss(): void;
    createDigits(value: any): void;
    createChildSprite(width: any, height: any): Sprite;
    createBitmap(width: any, height: any): Bitmap;
    update(): void;
    updateChild(sprite: any): void;
    updateFlash(): void;
    updateOpacity(): void;
    opacity: number | undefined;
    isPlaying(): boolean;
}
declare function Sprite_Gauge(...args: any[]): void;
declare class Sprite_Gauge {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _battler: any;
    _statusType: any;
    _value: any;
    _maxValue: any;
    _targetValue: any;
    _targetMaxValue: any;
    _duration: number | undefined;
    _flashingCount: number | undefined;
    destroy(options: any): void;
    createBitmap(): void;
    bitmap: Bitmap | undefined;
    bitmapWidth(): number;
    bitmapHeight(): number;
    textHeight(): number;
    gaugeHeight(): number;
    gaugeX(): number;
    labelY(): number;
    labelFontFace(): any;
    labelFontSize(): number;
    valueFontFace(): any;
    valueFontSize(): number;
    setup(battler: any, statusType: any): void;
    update(): void;
    updateBitmap(): void;
    updateTargetValue(value: any, maxValue: any): void;
    smoothness(): 5 | 20;
    updateGaugeAnimation(): void;
    updateFlashing(): void;
    flashingColor1(): number[];
    flashingColor2(): number[];
    isValid(): any;
    currentValue(): any;
    currentMaxValue(): any;
    label(): any;
    gaugeBackColor(): any;
    gaugeColor1(): any;
    gaugeColor2(): any;
    labelColor(): any;
    labelOutlineColor(): any;
    labelOutlineWidth(): number;
    valueColor(): any;
    valueOutlineColor(): string;
    valueOutlineWidth(): number;
    redraw(): void;
    drawGauge(): void;
    drawGaugeRect(x: any, y: any, width: any, height: any): void;
    gaugeRate(): number;
    drawLabel(): void;
    setupLabelFont(): void;
    measureLabelWidth(): number;
    labelOpacity(): 255 | 160;
    drawValue(): void;
    setupValueFont(): void;
}
declare function Sprite_Name(...args: any[]): void;
declare class Sprite_Name {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _battler: any;
    _name: any;
    _textColor: any;
    destroy(options: any): void;
    createBitmap(): void;
    bitmap: Bitmap | undefined;
    bitmapWidth(): number;
    bitmapHeight(): number;
    fontFace(): any;
    fontSize(): any;
    setup(battler: any): void;
    update(): void;
    updateBitmap(): void;
    name(): any;
    textColor(): any;
    outlineColor(): any;
    outlineWidth(): number;
    redraw(): void;
    setupFont(): void;
}
declare function Sprite_StateIcon(...args: any[]): void;
declare class Sprite_StateIcon {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _battler: any;
    _iconIndex: any;
    _animationCount: number | undefined;
    _animationIndex: number | undefined;
    loadBitmap(): void;
    bitmap: any;
    setup(battler: any): void;
    update(): void;
    animationWait(): number;
    updateIcon(): void;
    shouldDisplay(): any;
    updateFrame(): void;
}
declare function Sprite_StateOverlay(...args: any[]): void;
declare class Sprite_StateOverlay {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _battler: any;
    _overlayIndex: any;
    _animationCount: number | undefined;
    _pattern: number | undefined;
    loadBitmap(): void;
    bitmap: any;
    setup(battler: any): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    updateFrame(): void;
}
declare function Sprite_Weapon(...args: any[]): void;
declare class Sprite_Weapon {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _weaponImageId: any;
    _animationCount: number | undefined;
    _pattern: number | undefined;
    x: number | undefined;
    setup(weaponImageId: any): void;
    update(): void;
    animationWait(): number;
    updatePattern(): void;
    loadBitmap(): void;
    bitmap: any;
    updateFrame(): void;
    isPlaying(): boolean;
}
declare function Sprite_Balloon(...args: any[]): void;
declare class Sprite_Balloon {
    constructor(...args: any[]);
    initialize(): void;
    initMembers(): void;
    _target: any;
    _balloonId: any;
    _duration: number | undefined;
    z: number | undefined;
    loadBitmap(): void;
    bitmap: any;
    setup(targetSprite: any, balloonId: any): void;
    update(): void;
    updatePosition(): void;
    x: any;
    y: number | undefined;
    updateFrame(): void;
    speed(): number;
    waitTime(): number;
    frameIndex(): number;
    isPlaying(): boolean;
}
declare function Sprite_Picture(...args: any[]): void;
declare class Sprite_Picture {
    constructor(...args: any[]);
    initialize(pictureId: any): void;
    _pictureId: any;
    _pictureName: any;
    picture(): any;
    update(): void;
    updateBitmap(): void;
    visible: boolean | undefined;
    bitmap: any;
    updateOrigin(): void;
    updatePosition(): void;
    x: number | undefined;
    y: number | undefined;
    updateScale(): void;
    updateTone(): void;
    updateOther(): void;
    opacity: any;
    blendMode: any;
    rotation: number | undefined;
    loadBitmap(): void;
}
declare function Sprite_Timer(...args: any[]): void;
declare class Sprite_Timer {
    constructor(...args: any[]);
    initialize(): void;
    _seconds: any;
    destroy(options: any): void;
    createBitmap(): void;
    bitmap: Bitmap | undefined;
    fontFace(): any;
    fontSize(): any;
    update(): void;
    updateBitmap(): void;
    redraw(): void;
    timerText(): string;
    updatePosition(): void;
    x: number | undefined;
    y: number | undefined;
    updateVisibility(): void;
    visible: any;
}
declare function Sprite_Destination(...args: any[]): void;
declare class Sprite_Destination {
    constructor(...args: any[]);
    initialize(): void;
    _frameCount: number | undefined;
    destroy(options: any): void;
    update(): void;
    visible: boolean | undefined;
    createBitmap(): void;
    bitmap: Bitmap | undefined;
    blendMode: number | undefined;
    updatePosition(): void;
    x: number | undefined;
    y: number | undefined;
    updateAnimation(): void;
    opacity: number | undefined;
}
declare function Spriteset_Base(...args: any[]): void;
declare class Spriteset_Base {
    constructor(...args: any[]);
    initialize(): void;
    _animationSprites: any[] | undefined;
    destroy(options: any): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createUpperLayer(): void;
    update(): void;
    createBaseSprite(): void;
    _baseSprite: Sprite | undefined;
    _blackScreen: ScreenSprite | undefined;
    createBaseFilters(): void;
    _baseColorFilter: ColorFilter | undefined;
    createPictures(): void;
    _pictureContainer: Sprite | undefined;
    pictureContainerRect(): Rectangle;
    createTimer(): void;
    _timerSprite: Sprite_Timer | undefined;
    createOverallFilters(): void;
    filters: any[] | undefined;
    _overallColorFilter: ColorFilter | undefined;
    updateBaseFilters(): void;
    updateOverallFilters(): void;
    updatePosition(): void;
    x: number | undefined;
    y: number | undefined;
    findTargetSprite(): null;
    updateAnimations(): void;
    processAnimationRequests(): void;
    createAnimation(request: any): void;
    createAnimationSprite(targets: any, animation: any, mirror: any, delay: any): void;
    isMVAnimation(animation: any): boolean;
    makeTargetSprites(targets: any): any[];
    lastAnimationSprite(): any;
    isAnimationForEach(animation: any): boolean;
    animationBaseDelay(): number;
    animationNextDelay(): number;
    animationShouldMirror(target: any): any;
    removeAnimation(sprite: any): void;
    removeAllAnimations(): void;
    isAnimationPlaying(): boolean;
}
declare function Spriteset_Map(...args: any[]): void;
declare class Spriteset_Map {
    constructor(...args: any[]);
    initialize(): void;
    _balloonSprites: any[] | undefined;
    destroy(options: any): void;
    loadSystemImages(): void;
    createLowerLayer(): void;
    update(): void;
    hideCharacters(): void;
    createParallax(): void;
    _parallax: TilingSprite | undefined;
    createTilemap(): void;
    _effectsContainer: Tilemap | undefined;
    _tilemap: Tilemap | undefined;
    loadTileset(): void;
    _tileset: any;
    createCharacters(): void;
    _characterSprites: any[] | undefined;
    createShadow(): void;
    _shadowSprite: Sprite | undefined;
    createDestination(): void;
    _destinationSprite: Sprite_Destination | undefined;
    createWeather(): void;
    _weather: Weather | undefined;
    updateTileset(): void;
    updateParallax(): void;
    _parallaxName: any;
    updateTilemap(): void;
    updateShadow(): void;
    updateWeather(): void;
    updateBalloons(): void;
    processBalloonRequests(): void;
    createBalloon(request: any): void;
    removeBalloon(sprite: any): void;
    removeAllBalloons(): void;
    findTargetSprite(target: any): any;
    animationBaseDelay(): number;
}
declare function Spriteset_Battle(...args: any[]): void;
declare class Spriteset_Battle {
    constructor(...args: any[]);
    initialize(): void;
    _battlebackLocated: boolean | undefined;
    loadSystemImages(): void;
    createLowerLayer(): void;
    createBackground(): void;
    _backgroundFilter: any;
    _backgroundSprite: Sprite | undefined;
    createBattleback(): void;
    _back1Sprite: Sprite_Battleback | undefined;
    _back2Sprite: Sprite_Battleback | undefined;
    createBattleField(): void;
    _battleField: Sprite | undefined;
    _effectsContainer: Sprite | undefined;
    battleFieldOffsetY(): number;
    update(): void;
    updateBattleback(): void;
    createEnemies(): void;
    _enemySprites: Sprite_Enemy[] | undefined;
    compareEnemySprite(a: any, b: any): number;
    createActors(): void;
    _actorSprites: any[] | undefined;
    updateActors(): void;
    findTargetSprite(target: any): Sprite_Enemy | undefined;
    battlerSprites(): Sprite_Enemy[];
    isEffecting(): boolean;
    isAnyoneMoving(): boolean;
    isBusy(): any;
}
