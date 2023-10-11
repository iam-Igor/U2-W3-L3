fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Error! Page not found.");
    }
  })

  .then((database) => {
    console.log(database);

    database.forEach((element) => {
      const bookContainer = document.getElementById("book-container");
      const newCol = document.createElement("div");
      newCol.classList.add("col");
      const newcard = document.createElement("div");
      newcard.classList.add("card");
      const newImg = document.createElement("img");
      newImg.classList.add("card-img-top");
      newcard.appendChild(newImg);
      newImg.src = element.img;
      const cardBodyDiv = document.createElement("div");
      cardBodyDiv.classList.add("card-body");
      newcard.appendChild(cardBodyDiv);
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = element.title;
      const pricetag = document.createElement("p");
      pricetag.classList.add("card-text");
      pricetag.innerText = "Price: " + element.price + "$";
      const buttonDiscard = document.createElement("a");
      buttonDiscard.classList.add("btn");
      buttonDiscard.classList.add("btn-danger");
      const buttonCart = document.createElement("a");
      buttonCart.classList.add("btn");
      buttonCart.classList.add("btn-success");

      // EVENT LISTENER-1 (SCARTA)
      buttonDiscard.addEventListener("click", function () {
        newcard.classList.add("swing");
      });

      // EVENT LISTENER-2 (CARRELLO)
      buttonCart.addEventListener("click", function () {
        const cartMenu = document.getElementById("menu-cart");

        const liItem = document.createElement("li");
        const icontrash = document.createElement("i");

        icontrash.classList.add("bi");
        icontrash.classList.add("bi-trash");
        liItem.appendChild(icontrash);

        cartMenu.appendChild(liItem);
        const titleCart = document.createElement("a");
        titleCart.innerText = element.title;
        titleCart.href = "#";
        liItem.appendChild(titleCart);

        // EVENT LISTENER-3 (TRASH)
        icontrash.addEventListener("click", function () {
          icontrash.parentElement.remove();
        });
        const priceTagCart = document.createElement("span");
        priceTagCart.innerText = element.price;
        liItem.appendChild(priceTagCart);
      });

      buttonDiscard.innerText = "Scarta";
      buttonCart.innerText = "Carrello";
      cardBodyDiv.appendChild(cardTitle);
      cardBodyDiv.appendChild(pricetag);
      cardBodyDiv.appendChild(buttonDiscard);
      cardBodyDiv.appendChild(buttonCart);

      newCol.appendChild(newcard);
      bookContainer.appendChild(newCol);
    });

    const ulcart = document.querySelector("ul");
    const badgeNotifications = document.getElementById("badge-notifications");

    if (ulcart && ul.querySelectorAll("li").length > 0) {
      badgeNotifications.classList.remove("badge");
    }
  })

  .catch((err) => {
    // inserirò il toggle modal
  });
