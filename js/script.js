
const cart = function(){
    const cartBtn = document.querySelector('.button-cart');
    const modalCart = document.querySelector('#modal-cart');
    const closeBtn = modalCart.querySelector('.modal-close');
    cartBtn.addEventListener('click', function(){
        modalCart.style.display='flex';
    });
    closeBtn.addEventListener('click', function(){
        modalCart.style.display='';
    });
}
cart();

const getGoods = function (){
    const getData = () =>{
        fetch('')
    }
};
getGoods();