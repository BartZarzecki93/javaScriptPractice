var randomImage = document.querySelector(".random-image");
console.log("randomImage:", randomImage);

fetch("https://source.unsplash.com/random")
  .then(function(response) {
    if (!response.ok) {
      console.log(response);
      return new Error(response);
    }
    console.log("Response:", response);
    return response.blob();
  })
  .then(function(photoBlob) {
    console.log("My Blob:", photoBlob);
    var objectURL = URL.createObjectURL(photoBlob); //creates url
    console.log("Object URL:", objectURL);
    randomImage.src = objectURL; //put random image (url) from fetching

    console.log("randomImage.src:", randomImage.src);
  })
  .catch(function(err) {
    console.log(err); //catching any error
  });
