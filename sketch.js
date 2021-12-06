function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(530, 150);
    video = createCapture(VIDEO)
}

function draw() {
    image(video, 0, 0, 350, 350);
}

function takeSnapShot() {
    save('screenshot.png')
}