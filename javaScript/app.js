let blenderStatus = "OFF";

const blender = document.getElementById("blender");
const button = document.getElementById("blender_button");
const blenderSound = document.getElementById("blender_sound");
const blenderButtonSound = document.getElementById("blender_button_sound");

button.addEventListener('click', ()=>{
    if(blenderStatus==="OFF"){
        blenderStatus = "ON";
        blenderButtonSound.play();
        setTimeout(function() {
            blenderSound.play();
            blender.classList.add("active");
        }, 100);
    }else{
        blenderStatus = "OFF";
        blender.classList.remove("active");
        blenderButtonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    };
});  