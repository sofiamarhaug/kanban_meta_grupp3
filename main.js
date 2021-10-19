//Import modules
import { checkLoginStatus } from './modules/checkLoginStaus.mjs';
import { loginFunction } from './modules/loginFunction.mjs';
import { logout } from './modules/logout.mjs';
import { removeCards } from './modules/removeCards.mjs';
import { DragAndDrop } from './modules/DragAndDrop.mjs';
//import { funktionsnamn } from './modules/filnamn.mjs';
import { newCard } from './modules/newCard.mjs';

// Global
const global = {
  loginForm: document.getElementById('loginform'),
  userName: document.getElementById('username'),
  passWord: document.getElementById('password'),
  loginBtn: document.getElementById('loginBtn'),
  logoutBtn: document.getElementById('logoutBtn'),
  kanbanboardClass: document.querySelector('.kanbanBoard'),
  kanbanboardTodo: document.getElementById('Todo'),
  kanbanboardDoing: document.getElementById('Doing'),
  kanbanboardTest: document.getElementById('Test'),
  kanbanboardDone: document.getElementById('Done'),
  todoBtn: document.getElementById('todoBtn'),
  doingBtn: document.getElementById('doingBtn'),
  testBtn: document.getElementById('testBtn'),
  doneBtn: document.getElementById('doneBtn'),
  kanbanCard: document.querySelector('.kanbanCard'),
  kanbanNewCardBtn: document.querySelectorAll('.kanbanNewCardBtn'),
  wrongCredentials: document.getElementById('wrongCredentials')
}
export { global };

// Cards cointainer
let allCards = [];
export { allCards };

// Loggar in om användaren finns i LocalStorage.
// Kör då loginTrue() som döljer div:ar och som i sin tur kör funktion printExistingCard() som skriver ut korten.
checkLoginStatus();

// Test av LS innan alla moduler är klara
let allCardsToLokSto = [
  {cardId: 1, cardText: 'Donec ullamcorper nulla non metus auctor fringilla.', cardColumn: 'Todo'},
  {cardId: 2, cardText: 'Nullam quis risus eget urna mollis ornare vel eu leo.', cardColumn: 'Doing'},
  {cardId: 3, cardText: 'Maecenas faucibus mollis interdum.', cardColumn: 'Test'},
  {cardId: 4, cardText: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et.', cardColumn: 'Done'}
];

//localStorage.setItem('allCards', JSON.stringify(allCardsToLokSto));

// Kör drag and drop funktionen.
DragAndDrop();

// Lägger till ett klickevent på knappen för utloggning som kör utloggningsfunktionen.
global.logoutBtn.addEventListener("click", logout);

// Event listener for new card buttons
global.todoBtn.addEventListener("click", function() {
  newCard("todo");
});
global.doingBtn.addEventListener("click", function() {
  newCard("doing");
});
global.testBtn.addEventListener("click", function(){
  newCard("test");
});
global.doneBtn.addEventListener("click", function(){
  newCard("done");
});