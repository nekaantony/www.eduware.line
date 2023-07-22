function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function view_sub_work(sub) {
    document.getElementById('websites').style.display = "none";
    document.getElementById('webapps').style.display = "none";
    document.getElementById('softwares').style.display = "none";
    document.getElementById(sub).style.display = "block";
}