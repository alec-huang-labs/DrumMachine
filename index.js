const soundURLs = {
    heaterOne: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    heaterTwo: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    heaterThree: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    heaterFour: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    heaterSix: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    dsc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    kickAndHat: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    closedHH: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    chordOne: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    chordTwo: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    chrodThree: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    lighter: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    openHH: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    SnareAndHH: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    PunchyKick: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    SideStickSnare: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    Snare: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
}
function playQ(){
    var audio = new Audio(soundURLs["heaterOne"]);
    audio.play();
}
function playW(){
    var audio = new Audio(soundURLs["heaterTwo"]);
    audio.play();
}
function playE(){
    var audio = new Audio(soundURLs["heaterThree"]);
    audio.play();
}
function playT(){
    var audio = new Audio(soundURLs["chordOne"])
    audio.play();
}
function playY(){
    var audio = new Audio(soundURLs["chordTwo"])
    audio.play();
}
function playU(){
    var audio = new Audio(soundURLs["chrodThree"])
    audio.play();
}
function playA(){
    var audio = new Audio(soundURLs["heaterFour"])
    audio.play()
}
function playS(){
    var audio = new Audio(soundURLs["heaterSix"])
    audio.play()
}
function playD(){
    var audio = new Audio(soundURLs["dsc"])
    audio.play()
}
function playG(){
    var audio = new Audio(soundURLs["lighter"])
    audio.play()
}
function playH(){
    var audio = new Audio(soundURLs["openHH"])
    audio.play()
}
function playJ(){
    var audio = new Audio(soundURLs["SnareAndHH"])
    audio.play()
}
function playZ(){
    var audio = new Audio(soundURLs["kickAndHat"])
    audio.play()
}
function playX(){
    var audio = new Audio(soundURLs["kick"])
    audio.play()
}
function playC(){
    var audio = new Audio(soundURLs["closedHH"])
    audio.play()
}
function playB(){
    var audio = new Audio(soundURLs["PunchyKick"])
    audio.play()
}
function playN(){
    var audio = new Audio(soundURLs["SideStickSnare"])
    audio.play()
}
function playM(){
    var audio = new Audio(soundURLs["Snare"])
    audio.play()
}
$(document).ready(function(){
    $(".container-fluid").css("background-color", "whitesmoke")
    $(".drum-pad").height("5vmin");
    $(".drum-pad").width("0.5vmin");
    $(".drum-pad").addClass("btn btn-outline-light btn-sm m-2");
    $(".drum-pad").css({"color": "lightgrey",
                        "border-width":"3px",
                        "border-color":"lightgrey",
                        "border-radius": "5px"});
    $("#desc").css({"position": "absolute",
                    "bottom": "10px",
                    "right":"10px",
                    "color":"lightgrey",
                    "width":"33vmin"});
    $("#drum-machine").addClass("animated fadeInDown");
    $("#desc").addClass("animated fadeInRight");
})


$(document).keypress(function(e){
    var key = e.which;
    //alert(key);
    if (key == 113){
        playQ();
    }else if (key == 119){
        playW();
    }else if (key == 101){
        playE();
    }else if (key == 97){
        playA();
    }else if (key == 115){
        playS();
    }else if (key == 100){
        playD();
    }else if (key == 122){
        playZ();
    }else if (key == 120){
        playX();
    }else if (key == 99){
        playC();
    }else if (key == 116){
        playT();
    }else if (key == 121){
        playY();
    }else if (key == 117){
        playU();
    }else if (key == 103){
        playG();
    }else if (key == 104){
        playH();
    }else if (key == 106){
        playJ();
    }else if (key == 98){
        playB();
    }else if (key == 110){
        playN();
    }else if (key == 109){
        playM();
    }
});
