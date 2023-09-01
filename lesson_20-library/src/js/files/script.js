// Підключення функціоналу "Чертоги Фрілансера"

// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// self assessment
import { isMobile, bodyLockStatus, bodyLock, bodyUnlock, bodyLockToggle, FLS } from "../files/functions.js";



// self assessment

console.log('1.Вёрстка валидная - 10 \n2.Вёрстка семантическая- 16 \n3.Вёрстка соответствует макету +52 \n - секция About +4 \n4.Общие требования к верстке +20 \nОценка: 98')

// RADIO BUTTONS
const radioBtns = document.querySelectorAll("input[name = 'seasonGroup']+span");
    const seasonImages = document.querySelectorAll(".library-block__content > img");
    const texts = document.querySelectorAll(".library-block__text");
    const subTitles = document.querySelectorAll(".library-block__subtitle");
    const fadeTarget = document.querySelectorAll(".library-block__item");
    // document.querySelector(".common-button.active-own");
    
    const seasons = [ "winter", "spring", "summer", "autumn" ];
    const winterContent = [ "", "An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.", "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.", "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.", "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them." ];
    const sprintContent = [ "", "Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.", "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.", "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.", "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez." ];
    const summerContent = [ "", "Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people", "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.", "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.", "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers." ];
    const autumnContent = [ "", "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. ", "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide", "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?", "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds." ];
    const winterSubT = [ "", "The Book Eaters<br><span>by sunyi dean</span>", "Cackle<br><span>by rachel harrison</span>", "Dante: Poet of the Secular World<br><span>by erich auerbach</span>", "The Last Queen<br><span>by clive irving</span>" ];
    const springSubT = [ "", "The Body<br><span>By Stephen King</span>", "Carry: A Memoir of Survival on Stolen Land<br><span>By Toni Jenson</span>", "Days of Distraction<br><span>By Alexandra Chang</span>", "Dominicana<br><span>By Angie Cruz</span>" ];
    const summerSubT = [ "", "Crude: A Memoir<br><span>By Pablo Fajardo & ​​Sophie Tardy-Joubert</span>", "Let My People Go Surfing<br><span>By Yvon Chouinard</span>", "The Octopus Museum: Poems<br><span>By Brenda Shaughnessy</span>", "Shark Dialogues: A Novel<br><span>By Kiana Davenport</span>" ];
    const autumnSubT = [ "", "Casual Conversation<br><span>By Renia White</span>", "The Great Fire<br><span>By Lou Ureneck</span>", "Rickey: The Life and Legend<br><span>By Howard Bryant</span>", "Slug: And Other Stories<br><span>By Megan Milksv</span>" ];
    texts.forEach(((text, index) => {
        text.innerHTML = winterContent[index + 1];
    }));
    subTitles.forEach(((subt, index) => {
        subt.innerHTML = winterSubT[index + 1];
    }));
    let selectedSeason = "";
    const seasonData = {
        spring: {
            content: sprintContent,
            subTitle: springSubT,
            buttonText: "Buy"
        },
        summer: {
            content: summerContent,
            subTitle: summerSubT,
            buttonText: "Buy"
        },
        autumn: {
            content: autumnContent,
            subTitle: autumnSubT,
            buttonText: "Buy"
        },
        winter: {
            content: winterContent,
            subTitle: winterSubT,
            buttonText: "Buy"
        }
    };
    radioBtns.forEach(((radioBtn, index) => {
        radioBtn.addEventListener("click", (() => {
            radioBtns.forEach((btn => {
                btn.classList.remove("active");
            }));
            radioBtn.classList.add("active");
            selectedSeason = seasons[index];
            changeSeason();

        }));
    }));
    function fadeOut() {
        fadeTarget.forEach((item => {
            item.classList.toggle("fade-out");
        }));
    }
 
    function changeSeason() {
      const seasonInfo = seasonData[selectedSeason];
      fadeOut();
  
      setTimeout(() => {
          texts.forEach((text, index) => {
              text.innerHTML = seasonInfo.content[index + 1];
          });
          
          subTitles.forEach((subt, index) => {
              subt.innerHTML = seasonInfo.subTitle[index + 1];
          });
          
          seasonImages.forEach((image, index) => {
              image.src = `./img/image/${selectedSeason}${index + 1}.jpg`;
          });
          fadeOut();
      }, 400);
  }

  // buttonText.classList.toggle('active-own', !(selectedSeason === 'summer' || selectedSeason === 'autumn'));
  // buttonText.classList.toggle('disabled', !(selectedSeason === 'summer' || selectedSeason === 'autumn'));
  // buttonText.innerHTML = seasonInfo.buttonText;


// restrict input to accept only numbers and dashes

const inputNumber = document.getElementById('card-number');
const inputName = document.getElementById('card-name');
inputNumber.addEventListener('input', restrictInput.bind(null, /[^\d-]/g));
inputName.addEventListener('input', restrictInput.bind(null, /[^a-zA-Z- ]/g));

function restrictInput(pattern, event) {
  const inputElement = event.target;
  const sanitizedValue = inputElement.value.replace(pattern, '');
  inputElement.value = sanitizedValue;
}
// restrict input to accept only numbers and dashes

// SCROLL

const carousel = document.querySelector(".about-block__carousel");
const arrows = document.querySelectorAll(".about-block__slider");
const images = carousel.querySelectorAll("img");
const imageWidth = images[0].clientWidth + 25; // Ширина слайда + отступ
const paginationItems = document.querySelectorAll(".pagination__body .pagination__item");

let currentSlideIndex = 0;
updateArrow();

arrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    if (arrow.classList.contains('slider--forward')) {
      currentSlideIndex = (currentSlideIndex + 1) % images.length;
    } else {
      currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
    }
    updateSliderPosition();
    updatePagination();
    updateArrow();
  });
});

paginationItems.forEach((paginationItem, index) => {
  paginationItem.addEventListener('click', () => {
    currentSlideIndex = index;
    updateSliderPosition();
    updatePagination();
  });
});

function updateSliderPosition() {
  carousel.scrollLeft = currentSlideIndex * imageWidth;
}

function updatePagination() {
  paginationItems.forEach((paginationItem, index) => {
    if (index === currentSlideIndex) {
      paginationItem.classList.add('active');
    } else {
      paginationItem.classList.remove('active');
    }
    updateArrow();
  });
}
function updateArrow() {
  arrows.forEach((arrow, index) => {
    if (currentSlideIndex === 0 && index === 0) {
      arrow.classList.add('arrow-disabled');
    } else if (currentSlideIndex === images.length - 1 && index === 1) {
      arrow.classList.add('arrow-disabled');
    } else {
      arrow.classList.remove('arrow-disabled');
    }
  });
} 
let userState = false; // Initialize userLoggedIn as false
let userInitials;
const profileIcon = document.querySelector(".action--header__login > img");
const profileIcon2 = document.querySelector(".action--header__login > span");


const changeProfileIcon = (userState) => {
  
  if(userState){
    profileIcon.classList.toggle('loggedIn');
    profileIcon2.classList.toggle('loggedIn');

    profileIcon2.classList.contains('loggedIn') ? profileIcon2.textContent = userInitials : profileIcon2.textContent = '';    
  }
  console.log(userState)
};

// SCROLL


if(localStorage.length !== 0){
    const storedUser = JSON.parse(localStorage.getItem('user'));
    // const storedUserState = storedUser ? storedUser.userState : console.log(false);

// Initialize userState based on stored value
    userState = storedUser.userState;
    userInitials = storedUser.userInitials;

    changeProfileIcon();
}
// Authorisation menu

// const profileMenu = document.querySelector(".profile");
const logIn = document.querySelector(".profile--login");
const loggedIn = document.querySelector(".profile--loggedin");

function menuLogin() {
  if (!profileIcon.classList.contains('loggedIn')) { 
    profileIcon.addEventListener('click', function(e) {
      if (e.target.closest(".action--header__login > img")) {
        toggleLogIn();
      }
    });

    // Listen for clicks outside of the profile icon and profile lists
  
  }
  else if (profileIcon.classList.contains('loggedIn')) { 
    profileIcon2.addEventListener('click', function(e) {
      if (e.target.closest(".action--header__login > span")) {
        toggleLoggedIn();
      }
    });
  }
    document.addEventListener('click', function(e) {
      if (!e.target.closest(".action--header__login > img") && !e.target.closest(".action--header__profile") && !e.target.closest(".action--header__login > span")) {
        removeLogIn();
        removeLoggedIn();
    }
    });
}
menuLogin();

function toggleLogIn() {
  logIn.classList.toggle('activate');
}
function removeLogIn() {
  logIn.classList.remove('activate');
}

function toggleLoggedIn() {
  loggedIn.classList.toggle('activate');
}
function removeLoggedIn() {
  loggedIn.classList.remove('activate');
}

// POPUPS MENU

const popupLinks = document.querySelectorAll(".popup--link");
const registerLinks = document.querySelectorAll(".register--link");
const popupClose = document.querySelectorAll(".popup--close");

// const userState = { userLoggedIn: false };

const timeout = 500;
let unlock = true;

// Register/Login switch

function handlePopupLinkClick(e) {
  const popupName = e.currentTarget.getAttribute('href').replace('#', '');
  let currentPopUp = document.getElementById(popupName);

  openPopup(currentPopUp);
  removeLogIn();
  e.preventDefault();
}

if (popupLinks.length > 0) {
  popupLinks.forEach((popupLink) => {
    popupLink.addEventListener('click', handlePopupLinkClick);
  });
}

if (registerLinks.length > 0) {
  registerLinks.forEach((registerLink) => {
    registerLink.addEventListener('click', handlePopupLinkClick);
  });
}

if(popupClose){
  popupClose.forEach((item) => {
    item.addEventListener('click', function(e){
      closePopup(e.target.closest('.popup'));
      e.preventDefault(); // Забороняє перехід по посиланню
  });
});
}

function openPopup(currentPopUp){
  if(currentPopUp && unlock){
    const popupActivate = document.querySelector(".popup.open");
    if(popupActivate){
      closePopup(popupActivate, false);
    } else {
      bodyLock();
    }
    currentPopUp.classList.add("open");
  
    currentPopUp.addEventListener('click', e => {
      if(!e.target.closest('.popup__content')){
        closePopup(e.target.closest('.popup'));
      }
    })
  }
}

function closePopup(popupActivate, doUnlock = true){
    if(unlock){
      popupActivate.classList.remove("open")
    } if (doUnlock) {
      bodyUnlock;
    }
  };

// Close popup with ESC button

document.addEventListener('keydown', e => {
  if(e.key === "Escape" || e.key === "Esc"){
      const popupActivate = document.querySelector(".popup.open");
      closePopup(popupActivate);
  }
});

unlock = false;
setTimeout(function () { unlock = true;}, timeout); // Захист від подвійного кліку
 

// CLIENT SIDE FORM VALIDATION

const validateForm = formSelector => {
  return new Promise((resolve, reject) => {
  const formElement = document.querySelector(formSelector);
  
  const validationOptions = [
    {
      attribute: 'minlength',
      isValid: input => input.value && input.value.length >= parseInt(input.minLength),
      errorMessage: (input, label) => `${label.textContent} needs to be at least ${parseInt(input.minLength)} characters`,
    },
    {
      attribute: 'required',
      isValid: input => input.value.trim() !== '' ,
      errorMessage: (input, label) => `${label.textContent} is required`,
    },
    {
      attribute: 'pattern',
      isValid: input => {
        const regExression = new RegExp(input.pattern); 
        return regExression.test(input.value);
      },
      errorMessage: (input, label) => `Not a valid ${label.textContent}`,
    }
  ]
  
  const validateSingleFormGroup = formGroup => {

    const label = formGroup.querySelector('label');
    const input = formGroup.querySelector('input');
    const error = formGroup.querySelector('.popup__error');
  
    let checkGroupError = false;
    
    for(const option of validationOptions){
      if(input.hasAttribute(option.attribute) && !option.isValid(input)){
        error.textContent = option.errorMessage(input, label);
        input.classList.remove('success');
        input.classList.add('error');
        checkGroupError = true;
      }
    }

    if(!checkGroupError){
      error.textContent = '';
      input.classList.remove('error');
      input.classList.add('success');
    }
    return !checkGroupError;
  }

  formElement.setAttribute('novalidate', '');
  
  Array.from(formElement.elements).forEach( element => {
    element.addEventListener('blur', e => {
      validateFormGroups(e.srcElement.parentElement.parentElement);
    });
  }) 

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formValid = validateFormGroups(formElement);
    if(formValid){
      console.log('form is valid')
      resolve(formElement);
    }
   
  });
  
  const validateFormGroups = formToValidate => {
    const formGroups = Array.from(formToValidate.querySelectorAll('.formGroup'));
   
    return formGroups.every(formGroup => validateSingleFormGroup(formGroup));
  }
});
} 

  const sendToLocalStorage = (formSelector) => {
    const formObject = Array.from(formSelector.elements).reduce((accumulator, element) => ({...accumulator, [element.id]: element.value}), {});
    formObject.cardNumber = Math.floor(Math.random() * 1000000000);
    userInitials = (formObject['register-first_name'].slice(0,1) + formObject['register-last_name'].slice(0,1)).toUpperCase();
    userState = true;
    formObject.userState = userState;
    formObject.userInitials = userInitials;
    // cardNumber = formObject.cardNumber; 
    
    localStorage.setItem('user', JSON.stringify(formObject)); // Save users data to localStorage
    return userState; // Change userLoggedIn to true
  }

  validateForm('#registrationForm')
  .then(formElement => {
    sendToLocalStorage(formElement);
  })
  .then(() => {
    changeProfileIcon();
  })
  // .then(() => {
  //   closePopup(e.target.closest('.popup'))
  // })



  // set const login to true
  // get CardNumber and First letters of user name
  // change user icon and cardNumber
  // change login to logout form on icon click
  // close register popup


  

// FORM VALIDATION
// document.addEventListener('click', e => {
//   console.log(e.target);
// });

// POPUPS MENU




// LocalStorage

// function checkUserLoggedIn() {
//   if (localStorage.getItem('user')) {
//    
//   } else {
//     
//   }
// }
