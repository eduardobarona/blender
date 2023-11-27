let blenderStatus = "OFF";

const blender = document.getElementById("blender");
const button = document.getElementById("blenderButton");


button.addEventListener('click', function() {
    if(blenderStatus==="OFF"){
        blenderStatus = "ON";
    }else{
        blenderStatus = "OFF";
    }
});