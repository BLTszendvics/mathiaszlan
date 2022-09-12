function changed() {

    var e = document.getElementById("jatek");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;


    if (text == "FIFA") {

        var TextElements = document.getElementsByName("tbap");

        for (var i = 0, max = TextElements.length; i < max; i++) {

            TextElements[i].style.display = "none";
        }

    }
    else {

        var TextElements = document.getElementsByName("tbap");

        for (var i = 0, max = TextElements.length; i < max; i++) {

            TextElements[i].style.display = "block";
        }

    }

}
