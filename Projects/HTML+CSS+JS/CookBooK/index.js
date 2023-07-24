// ========================  MY DATA =============================

let data = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Gnocchi",
    imageSrc: "https://source.unsplash.com/random?gnocchi",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?Tacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

// ===========================================================

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
//    ==================function for create card =====================

function createCard(name, imageSrc, type, ratingText, delTime, isLiked) {
  const menueCard = document.createElement("div");
  const cardImg = document.createElement("div");
  const descDiv = document.createElement("div");
  const vegNonvegDiv = document.createElement("div");
  const titleRating = document.createElement("div");
  const h3Node = document.createElement("h3");
  const rating = document.createElement("div");
  const icon = document.createElement("i");
  const h6Text = document.createElement("h6");
  const h6Text2 = document.createElement("h6");
  const timeLove = document.createElement("div");
  const timeLoveIcon = document.createElement("div");

  menueCard.className = "menueCard";
  cardImg.className = "menueImg";
  descDiv.className = "menueDesc";
  vegNonvegDiv.className = "vegNonVeg";
  titleRating.className = "titleRating";
  rating.className = "rating";
  timeLove.className = "timeLove";
  timeLoveIcon.className = "timeLoveIcon";

  cardImg.style = `background-image:url(${imageSrc})`;
  menueCard.appendChild(cardImg);
  menueCard.appendChild(descDiv);
  descDiv.appendChild(vegNonvegDiv);
  h6Text.textContent = type;
  h6Text.style.color = "gray";
  vegNonvegDiv.appendChild(h6Text);
  h3Node.textContent = name;
  titleRating.appendChild(h3Node);
  descDiv.appendChild(titleRating);

  icon.className = "fi fi-sr-star";
  h6Text2.innerText = ratingText;
  rating.appendChild(icon);
  rating.appendChild(h6Text2);

  titleRating.appendChild(rating);

  const h4Node = document.createElement("h4");
  h4Node.innerText = delTime;

  const heart = document.createElement("i");
  const chat = document.createElement("i");

  heart.className = "fi fi-rr-heart";
  chat.className = "fi fi-rr-beacon";
  heart.id = "love";

  if (!isLiked) {
    heart.style = "color:black";
  }
  timeLoveIcon.appendChild(heart);
  timeLoveIcon.appendChild(chat);

  timeLove.appendChild(h4Node);
  timeLove.appendChild(timeLoveIcon);
  descDiv.appendChild(timeLove);

  return menueCard;
}
// ==============================================================
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
//. ====================   Item Selector, AllFilter Button, VegFilter Button, non-veg Button    ==============================
const itemArea = document.getElementById("menueItems");
const allRec = document.getElementById("all");
const veg = document.getElementById("veg");
const nonVeg = document.getElementById("non-veg");
//=============================================================================================

// .
// .
// .
// .
// .
// .
// .

// .
// .
// .
// ============= Created  a replace Item wheather it can update with previous one
const faka = document.createElement("div");
faka.style = "display:none;";
// .===========================================================
// .
// .
//.
//.======================================================================
//  this is the first trigered event when thw whole data is loaded
data.forEach((e) => {
  itemArea.appendChild(
    createCard(e.name, e.imageSrc, e.type, e.rating, e.time, e.isLiked)
  );
});
//==============================================================
// .
// .
// .
// .
// .===================== RATINGS CHECKED ======================
let fourAbove = function () {
  let isFourAbove = document.getElementById("four").checked;
  return isFourAbove;
};

let fourBelow = function () {
  let isFourAbove = document.getElementById("below").checked;
  return isFourAbove;
};
// .
// .
// .
// .
// .
//====================  FILTER FUNCTIONS ======================
let isFilterAll = function () {
  itemArea.replaceChildren(faka);
  allRec.style = "background-color: white; color:#eaaa00; border:5px solid;";
  veg.style = "background-color: #c4d600;";
  nonVeg.style = "background-color: #dc582a;";
  data.forEach((e) => {
    itemArea.appendChild(
      createCard(e.name, e.imageSrc, e.type, e.rating, e.time, e.isLiked)
    );
  });

  return true;
};

let isFilterVeg = function () {
  itemArea.replaceChildren(faka);
  allRec.style = "background-color: #eaaa00;";
  veg.style = "background-color: white; color:#c4d600; border:5px solid;";
  nonVeg.style = "background-color: #dc582a;";
  data.forEach((e) => {
    if (e.type === "veg") {
      itemArea.appendChild(
        createCard(e.name, e.imageSrc, e.type, e.rating, e.time, e.isLiked)
      );
    }
  });
  return true;
};

let isFilterNonVeg = function () {
  itemArea.replaceChildren(faka);
  allRec.style = "background-color: #eaaa00;";
  veg.style = "background-color: #c4d600;";
  nonVeg.style = "background-color: white; color:#dc582a; border:5px solid;";
  data.forEach((e) => {
    if (e.type === "non-veg") {
      itemArea.appendChild(
        createCard(e.name, e.imageSrc, e.type, e.rating, e.time, e.isLiked)
      );
    }
  });
  return true;
};

///////////////////////////////////////////////////////////////////////////////////

allRec.addEventListener("click", isFilterAll);
veg.addEventListener("click", isFilterVeg);
nonVeg.addEventListener("click", isFilterNonVeg);

document.getElementById("four").addEventListener("click", () => {
  document.getElementById("below").checked = false;
  itemArea.replaceChildren(faka);
  data.forEach((e) => {
    if (e.rating >= 4 && document.getElementById("four").checked == true) {
      itemArea.appendChild(
        createCard(e.name, e.imageSrc, e.type, e.rating, e.time, e.isLiked)
      );
    }
  });
});

document.getElementById("below").addEventListener("click", () => {
  document.getElementById("four").checked = false;
  itemArea.replaceChildren(faka);
  data.forEach((e) => {
    if (e.rating < 4 && document.getElementById("below").checked == true) {
      itemArea.appendChild(
        createCard(e.name, e.imageSrc, e.type, e.rating, e.time, e.isLiked)
      );
    }
  });
});

////////////// SEARCH FUNCTIONALTY /////////////
document.getElementById("dhur").addEventListener("click", () => {
  let srchInput = document.getElementById("korona").value;
  data.forEach((e) => {
    if (srchInput.includes(e.name)) {
      itemArea.replaceChildren(faka);
      itemArea.appendChild(
        createCard(e.name, e.imageSrc, e.type, e.rating, e.time, e.isLiked)
      );
    }
    // else {
    //   let textNode = document.createElement("h1");
    //   textNode.innerText = "Sorry !! No result found";
    //   itemArea.replaceChild(textNode);
    // }
  });
});

//////////////////// LIKED Feture /////////////////

document.querySelector("#love").addEventListener("click", (e) => {
  e.currentTarget.style = "color:red";
});

/////////////////// Mobile drawer ////////////////////
document.getElementById("cross").addEventListener("click", () => {
  document.getElementById("drawer").style = "display:none";
});

document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("drawer").style = "display:block";
});
