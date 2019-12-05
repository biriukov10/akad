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
// end task 2

// start task 3

let team = document.querySelectorAll('.ba-team-member img');
for (let i = 0; i < team.length; i++) {
  // team[i].setAttribute('src', 'shorturl.at/nsuFK');
}


// work in classroom
// start task 4
let h3 = document.querySelectorAll('h3');

for (let i = 0; i < h3.length; i++) {
  h3[i].innerHTML += ' ' + i;
}
// end task 4


// start task 5 
let allPar = document.querySelectorAll('.ba-benefit p');
for (let i = 0; i < allPar.length; i++) {
  allPar[i].parentElement.classList.add('active');
}

// end task 5

// start task 6
let name = document.querySelectorAll('.ba-team-member__name a')[0];

if (name.innerHTML === 'Enriko' || name.innerHTML === 'ENRIKO' || name.innerHTML === 'EnRiko') {
  name.classList.add('team-member__active');
  name.style.border = '2px solid red';
  name.style.borderRadius = '10px';
}
// end task 6

// start task 7
let div = document.createElement('div');
div.classList.add('ba-col-3');
let div2 = document.createElement('div');
div2.classList.add('ba-team-member');
div.appendChild(div2);
let img = document.createElement('img');
img.classList.add('ba-team-member__img');
let div3 = document.createElement('div');
div3.classList.add('ba-team-member__info');
let div4 = document.createElement('div');
let i_Item = document.createElement('i');
i_Item.classList.add('icon');
i_Item.classList.add('ion-logo-wordpress');
let h3Two = document.createElement('h3');
let linkInH3 = document.createElement('a');
let parInMember = document.createElement('p');
parInMember.classList.add('ba-team-member__posotion');
parInMember.textContent = 'PHP Developer';
linkInH3.textContent = 'Jack';
h3Two.classList.add('ba-team-member__name');
h3Two.appendChild(linkInH3);
div3.appendChild(div4);
div3.appendChild(h3Two);
div4.appendChild(i_Item);
img.setAttribute('src', 'image/oscar.jpeg');
div2.appendChild(img);
div2.appendChild(div3);
div3.appendChild(parInMember);
let list = document.querySelector('.ba-team-list');
list.appendChild(div);
// end task 7

// strat task 8

let positinInteam = document.querySelectorAll('.ba-team-member__posotion');
let imgInTeam = document.querySelectorAll('.ba-team-member__img');
for (let i = 0; i < positinInteam.length; i++) {
  for (let i = 0; i < imgInTeam.length; i++) {
    if (positinInteam[i].innerHTML === 'Front-end Developer') {
      imgInTeam[i].setAttribute('src', 'https://cdn6.aptoide.com/imgs/0/7/a/07a3a07dcae69acc37f4820671ce4638_icon.png?w=240');
    } else if (positinInteam[i].innerHTML === 'HR Manager') {
      imgInTeam[i].setAttribute('src', 'https://toloshny.com/img/js.svg');
    } else if (positinInteam[i].innerHTML === 'PHP Developer') {
      imgInTeam[i].setAttribute('src', 'https://cdn2.iconfinder.com/data/icons/weather-vol-2-7/512/pm-512.png');
    }
  }
}



// end task 8