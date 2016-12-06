var FireSprite, backgroundSprite, foregroundSprite, helicopterSprite, splosion;

function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function (renderingContext, x, y){
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img) {



FireSprite =[
    new Sprite(img, 0, 540, 170, 170),
    new Sprite(img, 170, 540, 170, 170),
    new Sprite(img, 340, 540, 170, 170),
    new Sprite(img, 510, 540, 170, 170),
    new Sprite(img, 680, 540, 170, 170),
    new Sprite(img, 850, 540, 170, 170)

];

    splosion =[
        new Sprite(img, 0, 0, 0, 0),
        new Sprite(img, 0, 0, 0, 0),
        new Sprite(img, 0, 0, 0, 0),
        new Sprite(img, 0, 0, 0, 0)
    ];

    helicopterSprite = new Sprite(img, 1010, 560, 200, 90);

    foregroundSprite = new Sprite(img, 0, 0, 2937, 450);
    backgroundSprite = new Sprite(img, 0, 0, 100, 40);

}