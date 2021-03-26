// Services We Provide section interactive content

let serviceItemsWrapper = document.querySelector('.services-items');

let serviceItems = document.querySelectorAll('.inter-item')

let itemText = document.querySelectorAll('.text-item')

function hideItemText() {
    itemText.forEach(element => {
        element.classList.add('hide');
        element.classList.remove('show');
    })
}

function showItem(i = 0) {
    itemText[i].classList.add('show');
    itemText[i].classList.remove('hide');
}

hideItemText();
showItem();

serviceItemsWrapper.addEventListener('click', function(e) {
    let target = e.target
    
console.log(target);

    if(target.classList.contains('inter-item')) {
        serviceItems.forEach((item,i) => {
            if(item === target) {
                hideItemText();
                showItem(i);
            }
        })
    }
})

// slider by slick

$('.slider-block').slick({
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });

// burger menu 

let burgerMenu = document.querySelector('.burger-menu')

let navigation = document.querySelector('.menu')

// function hideMenu() {
//     if(navigation.classList.contains('show')) {
//         navigation.classList.add('hide');
//         navigation.classList.remove('show');
//     } 
// }

// function showMenu() {
//     if(navigation.classList.contains('hide')) {
//         navigation.classList.add('show');
//         navigation.classList.remove('hide');
//     } 
// }

burgerMenu.addEventListener('click',function() {
    if(navigation.classList.contains('hide')) {
        navigation.classList.remove('hide');
        navigation.classList.add('show')
    } else {
        navigation.classList.remove('show');
        navigation.classList.add('hide');
    }
})


// modal window from footer Contact Us

let contactButton = document.querySelector('.cotact-us-button');

let modalWindow = document.querySelector('.modal');

let closeButton = document.querySelector('.cls-btn');

contactButton.addEventListener('click',function() {
    modalWindow.classList.add('show-modal');
})

closeButton.addEventListener('click',function() {
    modalWindow.classList.remove('show-modal');
})

modalWindow.addEventListener('click',function(e) {
    let target = e.target
    if(target.classList.contains('modal')) {
        modalWindow.classList.remove('show-modal');
    }
})