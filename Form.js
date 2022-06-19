class Form{

  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your Name");
    this.playButton = createButton("Play");
    this.text = createElement("h2");
    this.goButton = createButton("GO!");
    this.startButton = createButton("Start");

  }

  setElementsPosition() { 
    this.input.position(width / 2 - 110, height / 2 - 20);
    this.playButton.position(width / 2 - 90, height / 2 + 40);
    this.text.position(width / 2 - 340, height / 2 - 230);
    this.goButton.position(width / 2 - 900, height / 2 + 240);
    this.startButton.position(width / 2 - 9000, height / 2 + 240);
  }

  setElementsStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.text.class("greeting");
    this.goButton.class("customButton");
    this.startButton.class("customButton");
  
  }

 handleMousePressed(){
    this.playButton.mousePressed(()=>{
        this.input.hide();
        this.playButton.hide();
        this.goButton.position(width / 2 - 90, height / 2 + 10);
        gameState = 1;
        var message = `
        Hello ${this.input.value()}
        </br> Will you help me cleaning up the trash ?  `
        this.text.html(message);
    })

    this.goButton.mousePressed(()=>{
        this.text.hide();
        this.goButton.hide();
        gameState = 2; 
    })
    
 }


  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}