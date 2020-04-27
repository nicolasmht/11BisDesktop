import * as THREE from 'three';

function createWindows(WindowTexture, TextureShadow, TextureFrame) {

    let windows = new THREE.Group();
    windows.name = 'Windows';

    let windowLeft = createWindowLayers(WindowTexture, TextureShadow, TextureFrame),
        windowRight = createWindowLayers(WindowTexture, TextureShadow, TextureFrame);

    windows.add(windowLeft, windowRight);

    windowLeft.position.x = 0.35;
    windowRight.position.x -= 0.35;
    
    return windows;
}

function createWindowLayers(WindowTexture, TextureShadow, TextureFrame) {

    let group = new THREE.Group();
    group.position.z = 0.1;

    let window = CreateSprite(new THREE.TextureLoader().load(WindowTexture));
    let shadow = CreateSprite(new THREE.TextureLoader().load(TextureShadow));
    let frame = CreateSprite(new THREE.TextureLoader().load(TextureFrame));

    window.position.z = 0.2;
    shadow.position.z = 0.0;
    frame.position.z = 0.1;

    group.add(window, shadow, frame);

    return group;
}

function CreateSprite(texture) {
    
    let spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
    });

    let sprite = new THREE.Sprite(spriteMaterial);

    sprite.scale.set(0.725, 1, 1);

    return sprite;
}

export default createWindows;