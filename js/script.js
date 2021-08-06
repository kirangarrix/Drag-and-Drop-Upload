// select all requirements

const dropArea = document.querySelector(".drag-area");
let file; //global variable
// if user dargged inside
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  console.log("drag inside");
  dropArea.classList.add("active");
});

dropArea.addEventListener("dragleave", () => {
  console.log("darg outside");
  dropArea.classList.remove("active");
});

// if user drop file on Dragarea

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log("darg area file upload");
  file = event.dataTransfer.files[0];
  let fileType = file.type;

  let validExtention = ["image/jpeg", "image/jpg", "image/png"]; //adding some image extention
  if (validExtention.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let fileUrl = fileReader.result;
     //  console.log(fileUrl);

      let imgTag = `<img src="${fileUrl}">`;
      dropArea.innerHTML = imgTag; //adding image to drop area
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("this is not an image");
    dropArea.classList.remove("active");
  }
});
