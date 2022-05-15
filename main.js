namesArray = [];

function submit()
{
    var n1 = document.getElementById("name1").value;
    var n2 = document.getElementById("name2").value;
    var n3 = document.getElementById("name3").value;
    var n4 = document.getElementById("name4").value;

    namesArray.push(n1);
    namesArray.push(n2);
    namesArray.push(n3);
    namesArray.push(n4);
    
    document.getElementById("display_name").innerHTML = namesArray;
    document.getElementById("sub_btn").style.display = "none";
    document.getElementById("sort_btn").style.display = "inline-block";

    
}

function sorting()
{
    namesArray.sort();
    document.getElementById("display_name").innerHTML = namesArray;
    
    
}
