var images = 
["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://i.postimg.cc/L6HcYQM0/grand/father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg", 
"https://i.postimg.cc/5ymDKL83/bro.jpg", 
"https://i.postimg.cc/JnL6wtrd/sister.jpg", 
"https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names = ["Álbum de Família", "Pedro", "Ronaldo", "Octávio", "Sofia", "Edília"];

var i = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 6
    if(i > numbersOfFamilyMemberInArray)
    {
         i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("faammilyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}