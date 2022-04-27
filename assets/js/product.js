// PRODUCT
function changeProductList(type , element){
    let tabs = document.getElementsByClassName('home-filter-btn');
    for(i=0 ; i<tabs.length ; i++){
        tabs[i].style.background='#576062';
    }
    element.style.background='#0b1b20';
    document.getElementById(type).style.display ='block';
    switch (type) {
        case 'trend':
            document.getElementById('new').style.display ='none';
            document.getElementById('selling').style.display ='none';
            break;
        case 'new':
            document.getElementById('trend').style.display ='none';
            document.getElementById('selling').style.display ='none';
            break;
        case 'selling':
            document.getElementById('trend').style.display ='none';
            document.getElementById('new').style.display ='none';
            break;
        default:
            break;
    }
}

function rederdata(){
    let tabs = document.getElementsByClassName('best_Seller');
    for(i=0 ; i<tabs.length ; i++){
        tabs[i].style.color='#c9c9c9';
    }
    tabs[0].style.color='#0b1b20';
}
rederdata()
function changeBestSeller(type , element){
    let tabs = document.getElementsByClassName('best_Seller');
    for(i=0 ; i<tabs.length ; i++){
        tabs[i].style.color='#c9c9c9';
    }
    element.style.color='#0b1b20';
    document.getElementById(type).style.display ='block';
    switch (type) {
        case 'women':
            document.getElementById('men').style.display ='none';
            document.getElementById('kids').style.display ='none';
            break;
        case 'men':
            document.getElementById('women').style.display ='none';
            document.getElementById('kids').style.display ='none';
            break;
        case 'kids':
            document.getElementById('men').style.display ='none';
            document.getElementById('women').style.display ='none';
            break;
        default:
            break;
    }
}
//SLIDE SHOW 
var counter =1;
setInterval(function(){
    document.getElementById('radio'+counter).checked = true;
    counter ++;
    if(counter >4){
        counter =1;
    }
},5000);
//BACK TO TOP 
window.onscroll = function() {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


