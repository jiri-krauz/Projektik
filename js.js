var sound = new Audio("meow.mp3")
$(document).ready(function(){
    $(".img").click(function(){
        sound.play()
    })
})