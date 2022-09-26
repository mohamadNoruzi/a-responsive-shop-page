function sideNav () {
    var width = document.getElementById("mySideNav").style.width;
    if (width === "0px" || width == "") {
        document.getElementById("mySideNav").style.width = "300px";
        document.getElementById("blur").style.filter = "blur(2px)";

    }
    else {
        document.getElementById("mySideNav").style.width = "0px";
        document.getElementById("side-nav-child").style.width = "0px";
        document.getElementById("blur").style.filter = "blur(0px)";
    }
}

function sideNavChildOpen (pointer) {
    let width = document.getElementById("side-nav-child").style.width;
    if (width === "0px" || width =="" ) {
        document.getElementById("side-nav-child").style.width = "200px";
    }
    document.getElementById(pointer).classList = "d-flex flex-column";
    document.querySelectorAll("div[id=item-child] div").forEach((div) => {
        if (div.id !== pointer){
            div.classList = "d-none";
        }
    });
}
function sideNavChildClose () {
    let width = document.getElementById("side-nav-child").style.width;
    if (width === "200px") {
        document.getElementById("side-nav-child").style.width = "0px";
    }
}
function showValueOfRange(pointer){
    document.getElementById(pointer.id + "-lable").innerHTML = pointer.value;
}