function updateImage(){
    const timestamp = new Date().getTime();
  
        // Get the image element 
        const image = document.getElementById("humanImg");

        //wait 2000ms
        setTimeout(() => {
            // Adding the timestamp parameter to image src
            image.src = "https://thispersondoesnotexist.com/image?t=" + timestamp;
            console.log("New image");
            
        }, 2000)
  
}
