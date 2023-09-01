/****************************** ADD DOG BUTTON ******************************/

const bodyHtmlCollection = document.body.children;
const gallery = bodyHtmlCollection[1].children;
const ul = gallery[0].children;

const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image
    console.log(url);

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here
    const messageParts = data.message.split("/");
    const breedName = messageParts[4];

    console.log(url);
    const galleryList = document.getElementById("gallery-list");

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here
    const newDog = `
        <li>
            <figure>
                <img src= 
                "${url}" />
                <figcaption >${breedName}</figcaption>
            </figure>
        </li>
    `;
    galleryList.innerHTML += newDog;

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  const firstListItem = ul[0];
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
  firstListItem.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  const lastListItem = ul[ul.length - 1];
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  lastListItem.remove();
});
