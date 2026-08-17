function display(sectionId) {
    document.getElementById("sectionHome").style.display = "none";
    document.getElementById("sectionFavouritePlaces").style.display = "none";
    document.getElementById("sectionTajMahalDetailedView").style.display = "none";
    document.getElementById("sectionGoldenTempleDetailedView").style.display = "none";
    document.getElementById("sectionMysorePalaceDetailedView").style.display = "none";
    document.getElementById("sectionVaranasiTempleDetailedView").style.display = "none";

    document.getElementById(sectionId).style.display = "block";
}

display("sectionHome");



