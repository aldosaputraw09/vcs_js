//Memilih Element petama class product__cards dan card__1, card__2, card__3
const card1 = document.querySelector(".product__cards .card__1");
const card2 = document.querySelector(".product__cards .card__2");
const card3 = document.querySelector(".product__cards .card__3");

//Memilih Element petama class product dan product__image__1, product__image__2, product__image__3
const cardImage1 = document.querySelector(".product .product__image__1")
const cardImage2 = document.querySelector(".product .product__image__2")
const cardImage3 = document.querySelector(".product .product__image__3")

// melakukan manipulasi terhadap DOM saat melakukan event click
card1.addEventListener("click", () => {
  //saat click card1 maka akan menambahkan classlist dimana card1 akan active sebagai background sedangkan 2 dan 3 tidak.
  console.log("card1");
  card1.classList.add("card--active");
  card2.classList.remove("card--active");
  card3.classList.remove("card--active");
//maka untuk cardimage1 akan aktif atau ditambahkan sedangakan cardimage2 dan 3 akan dihapus
	cardImage1.classList.add("product__image--active");
  cardImage2.classList.remove("product__image--active");
  cardImage3.classList.remove("product__image--active");
});
  //saat click card2 maka akan menambahkan classlist dimana card2 akan active sebagai background sedangkan 1 dan 3 tidak.
card2.addEventListener("click", () => {
  console.log("card2");
  card1.classList.remove("card--active");
  card2.classList.add("card--active");
  card3.classList.remove("card--active");
  //maka untuk cardimage2 akan aktif atau ditambahkan sedangakan cardimage1 dan 3 akan dihapus
	cardImage1.classList.remove("product__image--active");
  cardImage2.classList.add("product__image--active");
  cardImage3.classList.remove("product__image--active");
});
 //saat click card3 maka akan menambahkan classlist dimana card3 akan active sebagai background sedangkan 1 dan 2 tidak.
card3.addEventListener("click", () => {
  console.log("card3");
  card1.classList.remove("card--active");
  card2.classList.remove("card--active");
  card3.classList.add("card--active");
  //maka untuk cardimage3 akan aktif atau ditasmbahkan sedangakan cardimage1 dan 2 akan dihapus
	cardImage1.classList.remove("product__image--active");
  cardImage2.classList.remove("product__image--active");
  cardImage3.classList.add("product__image--active"); 
});
