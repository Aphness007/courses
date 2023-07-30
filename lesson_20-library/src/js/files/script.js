// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// self assessment




// self assessment

console.log('1.Вёрстка валидная - 10 \n2.Вёрстка семантическая- 16 \n3.Вёрстка соответствует макету +52 \n - секция About +4 \n4.Общие требования к верстке +20 \nОценка: 98')

// RADIO BUTTONS
const radioBtns = document.querySelectorAll("input[name = 'seasonGroup']+span");
const seasonImages = document.querySelectorAll(".library-block__content > img");
const texts = document.querySelectorAll(".library-block__text");
const subTitles = document.querySelectorAll(".library-block__subtitle");
const buttonText = document.querySelector(".common-button.active-own");

const seasons = ['winter', 'spring', 'summer', 'autumn'];

const winterContent = ["","An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.", "Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.", "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.", "A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them."];
const sprintContent = ["","Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.", "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.", "A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.", "A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez."];
const summerContent = ["","Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people", "Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual." , "This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics." , "An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers."]
const autumnContent = ["","White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity. ", "The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide", "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?", "Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds."]

const winterSubT = ["", "The Book Eaters<br><span>by sunyi dean</span>", "Cackle<br><span>by rachel harrison</span>", "Dante: Poet of the Secular World<br><span>by erich auerbach</span>", "The Last Queen<br><span>by clive irving</span>"];
const springSubT = ["", "The Body<br><span>By Stephen King</span>", "Carry: A Memoir of Survival on Stolen Land<br><span>By Toni Jenson</span>", "Days of Distraction<br><span>By Alexandra Chang</span>", "Dominicana<br><span>By Angie Cruz</span>"];
const summerSubT = ["", "Crude: A Memoir<br><span>By Pablo Fajardo & ​​Sophie Tardy-Joubert</span>", "Let My People Go Surfing<br><span>By Yvon Chouinard</span>","The Octopus Museum: Poems<br><span>By Brenda Shaughnessy</span>","Shark Dialogues: A Novel<br><span>By Kiana Davenport</span>"];
const autumnSubT = ["", "Casual Conversation<br><span>By Renia White</span>", "The Great Fire<br><span>By Lou Ureneck</span>", "Rickey: The Life and Legend<br><span>By Howard Bryant</span>", "Slug: And Other Stories<br><span>By Megan Milksv</span>"];

texts.forEach((text, index) => {
  text.innerHTML = winterContent[index + 1];
});

subTitles.forEach((subt, index) => {
  subt.innerHTML = winterSubT[index + 1];
});

let selectedSeason = '';

const seasonData = {
  spring: {
    content: sprintContent,
    subTitle: springSubT,
    buttonText: 'Own',
  },
  summer: {
    content: summerContent,
    subTitle: summerSubT,
    buttonText: 'Buy',
  },
  autumn: {
    content: autumnContent,
    subTitle: autumnSubT,
    buttonText: 'Buy',
  },
  winter: {
    content: winterContent,
    subTitle: winterSubT,
    buttonText: 'Own',
  },
};

radioBtns.forEach((radioBtn, index) => {
  radioBtn.addEventListener('click', () => {
    radioBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    radioBtn.classList.add('active');
    selectedSeason = seasons[index];
    changeSeason();
  });
});

function changeSeason() {
  const seasonInfo = seasonData[selectedSeason];

  texts.forEach((text, index) => {
    text.innerHTML = seasonInfo.content[index + 1];
  });

  subTitles.forEach((subt, index) => {
    subt.innerHTML = seasonInfo.subTitle[index + 1];
  });

  seasonImages.forEach((image, index) => {
    image.classList.add('hide-image');

    setTimeout(() => {
      image.src = `./img/image/${selectedSeason}${index + 1}.jpg`;
    }, 500);

    setTimeout(() => {
      image.classList.remove('hide-image');
    }, 550);

  });

  buttonText.classList.toggle('active-own', !(selectedSeason === 'summer' || selectedSeason === 'autumn'));
  buttonText.classList.toggle('disabled', !(selectedSeason === 'summer' || selectedSeason === 'autumn'));
  buttonText.innerHTML = seasonInfo.buttonText;
}

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
