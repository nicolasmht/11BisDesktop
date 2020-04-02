import * as THREE from 'three';

function CreateApartment(layers) {
    
    let apartment = new THREE.Group();
    apartment.name = 'Apartment';

    let textures = [];
    layers.map(layer =>
        textures.push(new Promise(resolve => new THREE.TextureLoader().load(layer.texture, resolve))),
    );

    Promise.all(textures).then(texturesLoaded => {
        texturesLoaded.map((texture, i) => {
            let sprite = CreateSprite(texture);
            sprite.position.z = i * 0.001 - 0.1;
            sprite.parallax = {
                level: layers[i].level,
            };
            apartment.add(sprite);
        });
    });

    return apartment;
}

function CreateSprite(texture) {
    
    let spriteMaterial = new THREE.SpriteMaterial({
        map: texture,
    });

    let sprite = new THREE.Sprite(spriteMaterial);

    sprite.scale.set(1.2, 1.2 / 1.4, 1);

    return sprite;
}

export default CreateApartment;