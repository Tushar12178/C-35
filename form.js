class Form{
constructor(){

}

display(){
    var title=createElement('h2')
    title.html("ULTIMATE CAR RACING")
    title.position(700,200)

    var input=createInput("enter your name")
    input.position(700,400)
    var button=createButton('play')
    button.position(800,500)
    var greeting=createElement('h3')
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount+=1
        player.update(name)
        player.updateCount(playerCount)
    

   
    
    greeting.html("Welcome To The Game "+ name) 
    greeting.position(680,300) 
})
}

}