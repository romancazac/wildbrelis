
const cart = function(){
    const cartBtn = document.querySelector('.button-cart');
    const modalCart = document.querySelector('#modal-cart');
    const closeBtn = modalCart.querySelector('.modal-close');
     cartBtn.addEventListener('click', function(){
        modalCart.style.display='flex';
        modalCart.classList.add('open');
    });
    closeBtn.addEventListener('click', function(){
        modalCart.style.display='';
        modalCart.classList.remove('open');
    });
}
cart();

const getGoods = function (){
    const getLinks = document.querySelectorAll('.navigation-link');
    const getData = () =>{
        fetch('https://project1-754e0-default-rtdb.firebaseio.com/db.json')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        }) 
    }
    
    getLinks.forEach((item)=>{
        item.addEventListener("click", (e) => {
            e.preventDefault();
            getData();
            console.log(e.target)
            
        })
    })
    localStorage.setItem('goods', JSON.stringify('getData'))
    const goods = JSON.parse(localStorage.getItem('goods'))
    console.log(goods)
    // localStorage.removeItem('goods')

};
getGoods();