//Placeholders för import av modulfiler (exempel nedan)
import { funktionsnamn } from '.modules/filnamn.mjs';
import { funktionsnamn } from '.modules/filnamn.mjs';
import { funktionsnamn } from '.modules/filnamn.mjs';
import { funktionsnamn } from '.modules/filnamn.mjs';
import { funktionsnamn } from '.modules/filnamn.mjs';
import { funktionsnamn } from '.modules/filnamn.mjs';

// Global
const global = {
loginForm = document.getElementById('loginform'),
userName = document.getElementById('username'),
passWord = document.getElementById('password'),
loginBtn = document.getElementById('loginBtn'),
logoutBtn = document.getElementById('logoutBtn'),
kanbanboardClass = document.getElementById('kanbanboard'),
kanbanboardTodo = document.getElementById('Todo'),
kanbanboardDoing = document.getElementById('Doing'),
kanbanboardTest = document.getElementById('Test'),
kanbanboardDone = document.getElementById('Done')
}
export { global };