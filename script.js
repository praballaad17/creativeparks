// function switchImages() {
//   const imageContainer = document.getElementById("imageContainer");
//   const images = imageContainer.getElementsByTagName("img");
//   const totalImages = images.length;
//   let currentIndex = 0;

//   setInterval(() => {
//     const nextIndex = (currentIndex + 1) % totalImages;
//     images[currentIndex].style.opacity = 0;
//     images[nextIndex].style.opacity = 1;
//     currentIndex = nextIndex;
//   }, 3000);
// }

// switchImages();

function switchImages() {
  const imageContainer = document.getElementById("imageContainer");
  const images = imageContainer.getElementsByTagName("img");
  const totalImages = images.length;
  let currentIndex = 0;
  images[currentIndex].style.opacity = 1;

  const detailsContainer = document.getElementById("projectDetails");
  const details = document.querySelectorAll(".project-right");

  console.log(details);
  const totaldetails = details.length;
  currentDetail = 0;
  details[currentIndex].style.opacity = 1;

  setInterval(() => {
    const nextIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.transform = "translateX(50%)";
    images[currentIndex].style.opacity = 0;

    details[currentIndex].style.transform = "translateX(100px)";
    details[currentIndex].style.opacity = 0;

    //   images[nextIndex].style.transform = "translateX(50%)";
    //   images[nextIndex].style.opacity = 1;

    setTimeout(() => {
      // images[currentIndex].style.opacity = 0;
      //   images[currentIndex].style.transform = "translateX(0)";
      images[nextIndex].style.transform = "translateX(0)";
      images[nextIndex].style.opacity = 1;

      details[nextIndex].style.transform = "translateX(0)";
      details[nextIndex].style.opacity = 1;
      currentIndex = nextIndex;
    }, 1000); // Adjust the duration as needed
  }, 4000); // Adjust the interval as needed
}

switchImages();
