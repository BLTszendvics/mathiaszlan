function changed() {

    var e = document.getElementById("jatek");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;


    if (text == "FIFA") {

        var TextElements = document.getElementsByName("tbap");

        for (var i = 0, max = TextElements.length; i < max; i++) {

            TextElements[i].style.display = "none";
        }

        document.getElementById("peter").style.position = "absolute";
        document.getElementById("peter").style.bottom = "0px";

    }
    else {

        var TextElements = document.getElementsByName("tbap");

        for (var i = 0, max = TextElements.length; i < max; i++) {

            TextElements[i].style.display = "block";
        }

        document.getElementById("peter").style.position = "relative";
        document.getElementById("peter").style.bottom = "0px";

    }

}
