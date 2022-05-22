// active header when begin web 
const btnShopNow = document.querySelector('.banner-btn');
const btnHeaders = document.querySelectorAll('.nav-link');
const btnMenu = document.querySelector('.navbar-toggler');
const smallMenu = document.querySelector('.navbar-collapse');
const btnInfor = document.querySelector('.about-btn ');
var btnActives = [];

for (let i = 0;i < btnHeaders.length; i++) {
    btnActives[i] = btnHeaders[i];
}

btnActives[btnHeaders.length] = btnShopNow;
btnActives[++btnHeaders.length] = btnInfor;

function activeHeader() {
    const header = document.querySelector('.header');
    const classHeader = header.classList;
    var check = false;
    classHeader.forEach(function(className) {
        if(className === 'active') {
           check = true;
        }
    });

    if(check) {
        header.classList.remove('active');
        smallMenu.classList.remove('show');
    }else {
        header.classList.add('active');
    }   
}

btnActives.forEach(function(btn) {
    btn.onclick = function() {
        activeHeader();
    }
});


// show list pet
var Cats = [
    {
        name : 'British shorthair',
        img : './images/cat/pexels-leonardo-de-oliveira-1770918.jpg',
    },
    {
        name : 'Tabby cat',
        img : './images/cat/pexels-evg-kowalievska-1170986.jpg',
    },
    {
        name : 'Japanese Bobtail',
        img : './images/cat/pexels-just-a-couple-photos-3777622.jpg',
    },
    {
        name : 'Exotic shorthair',
        img : './images/cat/pexels-orlando-allo-3423805.jpg',
    },
    {
        name : 'Sphynx',
        img : './images/cat/pexels-наталья-семенкова-991831.jpg',
    },
    
];

var Dogs = [
    {
        name : 'Husky',
        img : './images/dog/husky.jpg',
    },
    {
        name : 'Berger',
        img : './images/dog/Berger.jpg',
    },
    {
        name : 'Shiba Inu',
        img : './images/dog/ShibaInu.jpg',
    },
    {
        name : 'Dachshund',
        img : './images/dog/Dachshund.jpg',
    },
    {
        name : 'Boxer',
        img : './images/dog/Boxer.jpg',
    },
    
];
    // click show cat or dog
const btnShows = document.querySelectorAll('.tablink');
btnShows.forEach(function(btn) {   
    var check = '' 
    btn.onclick = function() {

        btnShows.forEach(function(element){
            if(element.className === 'tablink active') {
                if(element.innerHTML === 'Cat') {
                    check = 'dog';
                }
                if(element.innerHTML === 'Dog') {
                    check = 'cat';
                }
                element.classList.remove('active');
            }
        });
        btn.classList.add('active');
        showCatOrDog(check);
    }
});

    // list Cat or Dogs
const showContainer = document.querySelector('.tabscontent .container .row')


function showCatOrDog(check) {
    if(check === 'cat') {
        // showContainer.innerHTML = '';
        showContainer.innerHTML = '';
        Cats.forEach(function(cat) {
            showContainer.innerHTML += `
                    <div class=" col-xl-3 col-lg-4 col-md-6 mt-4">
                        <div class="item p-3">
                            <div class="card-img" style="background-image: url(${cat.img});"></div>
                                <div class="card-content">
                                    <h2>${cat.name}</h2>
                                </div>
                            </div>
                         </div>             
                    </div>
                    `;
        }); 
    };
    
    if(check === 'dog') {
        // showContainer.innerHTML = '';
        showContainer.innerHTML = '';
        Dogs.forEach(function(dog) {   
            showContainer.innerHTML += `
            <div class=" col-xl-3 col-lg-4 col-md-6 mt-4">
                <div class="item p-3">
                    <div class="card-img" style="background-image: url(${dog.img});"></div>
                        <div class="card-content">
                            <h2>${dog.name}</h2>
                        </div>
                    </div>
                 </div>             
            </div>
            `;
        });
    };

};

showCatOrDog('cat');
    // from contact
const email = document.querySelector("#contact input[type = 'email']");
const name = document.querySelector("#contact input[type = 'name']");
const number = document.querySelector("#contact input[type = 'phone']");
const textarea = document.querySelector("#contact textarea");

const formContact = document.querySelector(".contact__form form");

function checkContact() {

    if(name.value === "") {
        alert("The name box is not empty.");
        return false;
    };

    if(email.value === "") {
        alert("The email box is not empty.");
        return false;
    };

    if(number.value === "") {
        alert("The number box is not empty.");
        return false;  
    };

    if(textarea.value === "" ) {
        alert("The massage box is not empty.");
        return false; 
    }
    return true;
}

console.log(email);
