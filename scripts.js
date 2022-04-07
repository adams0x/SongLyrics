
writeLyrics();

function writeLyrics(){
    var i;
 
    for(i=99; i>=1; i--){
        if(i>2){
            document.getElementById("idLyricsParagraph").innerHTML+=i + " bottles of beer on the wall, " + i + " bottles of beer"+ "<br>";
            document.getElementById("idLyricsParagraph").innerHTML+="Take one down and pass it around, " + (i-1) + " bottles of beer on the wall"+ "<br>";
        }
        else if(i>1){
            document.getElementById("idLyricsParagraph").innerHTML+=i + " bottles of beer on the wall, " + i + " bottles of beer"+ "<br>";
            document.getElementById("idLyricsParagraph").innerHTML+="Take one down and pass it around, " + (i-1) + " bottle of beer on the wall"+ "<br>";
        }
        else{
            document.getElementById("idLyricsParagraph").innerHTML+="1 bottle of beer on the wall, 1 bottle of beer"+ "<br>";
            document.getElementById("idLyricsParagraph").innerHTML+="Take one down and pass it around, no more bottles of beer on the wall"+ "<br>";
        }
        document.getElementById("idLyricsParagraph").innerHTML+="<br>";
    }
    document.getElementById("idLyricsParagraph").innerHTML+="No more bottles of beer on the wall, no more bottles of beer"+ "<br>";
    document.getElementById("idLyricsParagraph").innerHTML+="Go to the store and buy some more, 99 bottles of beer on the wall"+ "<br>";

    return;

}