'use strict';
// 1 task start
let breadCrumbs = document.querySelector('.ba-breadcrumbs__item');
let ul = document.querySelectorAll('.ba-breadcrumbs')[0];
let textBreadCrumbs = document.createTextNode('Company');
let newBreadCrumbs = breadCrumbs.cloneNode(true);
ul.appendChild(newBreadCrumbs);
let link = document.querySelectorAll('.ba-breadcrumbs__link')[2];
link.textContent = ' Company';

// end 1 task

// start 2 task
let title = document.querySelectorAll('.ba-benefit__title span');
for (let i = 0; i < title.length - 3; i++) {
  title[i].style.color = 'red';
}
// title[0].style.color = 'red';
// title[1].style.color = 'red';
// title[2].style.color = 'red';
// end task 2

// start task 3

let team = document.querySelectorAll('.ba-team-member img');
for (let i = 0; i < team.length; i++) {
  team[i].setAttribute('src', 'shorturl.at/nsuFK');
}
