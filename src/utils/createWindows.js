import * as THREE from 'three';

function CreateWindows(layers) {

    let window = new THREE.Group();
    window.name = 'Windows';

    let textures = [];
    layers.map(layer =>
        textures.push(new Promise(resolve => new THREE.TextureLoader().load(layer.texture, resolve))),
    );

    Promise.all(textures).then(texturesLoaded => {
        texturesLoaded.map((texture, i) => {
            let sprite = CreateSprite(texture);
            sprite.position.z = i ;
            sprite.position.x = i;
            // sprite.visible = { isvisible: isVisible};
            window.add(sprite);
        });
    });

    return window;
}

function CreateSprite(texture) {

    let spriteMaterial = new THREE.SpriteMaterial({
        map: texture
    });

    let sprite = new THREE.Sprite(spriteMaterial);

    sprite.visible = texture.isVisible;
    sprite.scale.set(0.73, 0.98);

    return sprite;
}

export default CreateWindows;