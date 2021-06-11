class Form{
    constructor(){
        this.title=createElement('h2'),
        this.input=createInput("Name"),
        this.button=createButton('play'),
        this.greetings=createElement('h3');
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greetings.hide()
    }
    display(){
    
    this.title.html("CAR RACING GAME")
    this.title.position(displayWidth/2+150,0)

    
    this.input.position(displayWidth/2-40,displayHeight/2-60)

    
    this.button.position(displayWidth/2+90,displayHeight/2)

    
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
    player.name=this.input.value()
    playerCount+=1
    player.index=playerCount;
    player.update()
    player.updateCount(playerCount)
    this.greetings.html("hello "+ player.name)
    this.greetings.position(displayWidth/2-70,displayHeight/4)    
    })
}
}