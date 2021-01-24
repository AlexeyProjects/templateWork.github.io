let cart = document.querySelector('.card');

let cartImg = cart.querySelector('.cardImg');
let cartName = cart.querySelector('.cardName');
let cardPrice = cart.querySelector('.cardPrice');


let orderPopup = document.getElementById('orderPopup');
let wrap = document.getElementById('cardNew');
let imgCart = wrap.querySelector('.imgCart');
let nameCart = wrap.querySelector('.name');
let priceCart = wrap.querySelector('.price');
let descr = wrap.querySelector('.descr');
let artik = wrap.querySelector('.artik');
let stepper = wrap.querySelector('.stepper');
let qtyOrder = stepper.querySelector('.qty');
let stepFor = stepper.children[0];
let stepAway = stepper.children[2];
let qty = 0;
let body = document.body;

let popup = document.querySelector('.pop-up');
let popupBody = document.querySelector('.pop-up-body');

popup.addEventListener('click',(e) => {
	if ( event.target.parentNode == body ) {
        popup.style.display = 'none';
        document.body.classList.remove('noScroll');
    };
});
function popupShow(){
	document.querySelector('.pop-up').style.display = "block";
	document.body.classList.add('noScroll');
}

function getChild(el){
	let ulEl = el.children;
	imgCart.src = ulEl[0].src;
	nameCart.textContent = ulEl[1].textContent;
	priceCart.innerHTML = ulEl[2].textContent+`<span> &#8381</span>`;
	artik.textContent = ulEl[3].textContent;
	descr.textContent = ulEl[4].textContent;
	qtyOrder.textContent = 0;
	popupShow();
}

stepFor.addEventListener('click',() => {
	qty++;
	console.log(qty);
	qtyOrder.textContent = qty;
	return
});

stepAway.addEventListener('click',() => {
	if (qty == 0) {
		return
	}
	else {
		qty--;
	}
	console.log(qty);
	qtyOrder.textContent = qty;
});

// cart.addEventListener('click', (e) => {
// 	let nodelist = e.target.childNodes;
// 	console.log (nodelist);
//   // Todo...
// });