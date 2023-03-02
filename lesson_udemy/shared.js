let backdrop = document.querySelector('.backdrop');
let selectPlanButton = document.querySelectorAll('.plan button');
let modal = document.querySelector('.modal');

console.dir(selectPlanButton);

selectPlanButton.forEach(element => {
    element.addEventListener('click', openModal);
});
backdrop.addEventListener('click', closeModal);


function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}
function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}
