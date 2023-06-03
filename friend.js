var i=1;
var button=document.getElementById("Click");
button.addEventListener('click',function(){
    i++;
    if(i<=9)
    {
        randomNumber=i;
        if (randomNumber===1) {
            document.querySelector("p").innerHTML="Priyanka💖";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        else if (randomNumber===2) {
            document.querySelector("p").innerHTML="Vyshu💗";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        else if (randomNumber===3) {
            document.querySelector("p").innerHTML="Sindhusha";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        else if (randomNumber===4) {
            document.querySelector("p").innerHTML="Kavya";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        else if (randomNumber===5) {
            document.querySelector("p").innerHTML="Divya";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        else if (randomNumber===6) {
            document.querySelector("p").innerHTML="Nikki";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        else if (randomNumber===7) {
            document.querySelector("p").innerHTML="Saranya";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        else if (randomNumber===8) {
            document.querySelector("p").innerHTML="Satwika";
            var randomFriendImage="friend"+randomNumber+".jpg";
            var randomImageSource="images/"+randomFriendImage;
            var image= document.querySelectorAll("img")[0];
            image.setAttribute("src",randomImageSource);
        }
        
    }
    
});
    
    