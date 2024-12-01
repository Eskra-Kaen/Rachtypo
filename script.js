const data = {
  T: [
    { img: "https://via.placeholder.com/150?text=T1", desc: "Description for T1" },
    { img: "https://via.placeholder.com/150?text=T2", desc: "Description for T2" },
    { img: "https://via.placeholder.com/150?text=T3", desc: "Description for T3" },
    { img: "https://via.placeholder.com/150?text=T4", desc: "Description for T4" },
    { img: "https://via.placeholder.com/150?text=T5", desc: "Description for T5" }
  ],
  P: [
    { img: "https://via.placeholder.com/150?text=P1", desc: "Description for P1" },
    { img: "https://via.placeholder.com/150?text=P2", desc: "Description for P2" },
    { img: "https://via.placeholder.com/150?text=P3", desc: "Description for P3" },
    { img: "https://via.placeholder.com/150?text=P4", desc: "Description for P4" },
    { img: "https://via.placeholder.com/150?text=P5", desc: "Description for P5" }
  ],
  C: [
    { img: "https://via.placeholder.com/150?text=C1", desc: "Description for C1" },
    { img: "https://via.placeholder.com/150?text=C2", desc: "Description for C2" },
    { img: "https://via.placeholder.com/150?text=C3", desc: "Description for C3" },
    { img: "https://via.placeholder.com/150?text=C4", desc: "Description for C4" },
    { img: "https://via.placeholder.com/150?text=C5", desc: "Description for C5" }
  ],
  M: [
    { img: "https://via.placeholder.com/150?text=M1", desc: "Description for M1" },
    { img: "https://via.placeholder.com/150?text=M2", desc: "Description for M2" },
    { img: "https://via.placeholder.com/150?text=M3", desc: "Description for M3" },
    { img: "https://via.placeholder.com/150?text=M4", desc: "Description for M4" },
    { img: "https://via.placeholder.com/150?text=M5", desc: "Description for M5" }
  ]
};

function handleButtonClick(type, imageContainerId, descriptionContainerId) {
  const images = data[type];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  const imageContainer = document.getElementById(imageContainerId);
  const descriptionContainer = document.getElementById(descriptionContainerId);

  imageContainer.innerHTML = "";  // 기존 이미지 삭제
  descriptionContainer.innerHTML = "";  // 기존 설명문 삭제

  const imgElement = document.createElement("img");
  imgElement.src = randomImage.img;
  imageContainer.appendChild(imgElement);

  const descElement = document.createElement("p");
  descElement.textContent = randomImage.desc;
  descriptionContainer.appendChild(descElement);
}

document.getElementById("buttonT").addEventListener("click", () => handleButtonClick('T', 'container1', 'container2'));
document.getElementById("buttonP").addEventListener("click", () => handleButtonClick('P', 'container3', 'container4'));
document.getElementById("buttonC").addEventListener("click", () => handleButtonClick('C', 'container5', 'container6'));
document.getElementById("buttonM").addEventListener("click", () => handleButtonClick('M', 'container7', 'container8'));
