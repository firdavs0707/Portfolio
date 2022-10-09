const btn1 = document.querySelector('#btn1');
const btns1 = document.querySelector('#btn2');
const btn2 = document.querySelector('.btn-skill');
const btn1close = document.querySelector('.btn2');
const btn2close = document.querySelector('#btnsu');
const btn3close = document.querySelector('#btnsuz');
const modal1 = document.querySelector('.modal1');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modal3');

btn1.addEventListener('click', () => {
  modal1.classList.add('block');
  modal1.showModal();
}); // click

btn1close.addEventListener('click', () => {
  modal1.classList.remove('block');
  modal1.close();
});

btn2.addEventListener('click', () => {
  modal3.classList.add('block');
  modal3.showModal();
});

btn3close.addEventListener('click', () => {
  modal3.classList.remove('block');
  modal3.close();
});

btns1.addEventListener('click', () => {
  modal2.classList.add('block');
  modal2.showModal();
}); // click

btn2close.addEventListener('click', () => {
  modal2.classList.remove('block');
  modal2.close();
});



window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  });

  const scr = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    scr.classList.toggle('active', window.scrollY > 100)
  });
  scr.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  });
});

let arr = [];
let sorted;
const select = document.querySelector('.select');

const showMovie = async title => {
  try {
    let response = await fetch (`https://restcountries.com/v3.1/all`)
    let data = await response.json();
    data.forEach(element => {
      arr.push(element.name.common);
      sorted = arr.sort()
    });
    sorted.forEach(element => {
      let option = document.createElement('option');
      option.value = element;
      option.textContent = element;
      select.appendChild(option);
    });
  } catch (err) {
  }
}

showMovie()
let knopka = document.querySelector('#menu__toggle');
let item1 = document.querySelector('#menu__item1');
let item2 = document.querySelector('#menu__item2');
let item3 = document.querySelector('#menu__item3');
let item4 = document.querySelector('#menu__item4');
let item5 = document.querySelector('#menu__item5');
let item6 = document.querySelector('#menu__item6');
let menuMenu = document.querySelector('.menu-menu');

item1.addEventListener('click', () => {
  menuMenu.classList.add('clozz');
  knopka.checked = false;
  knopka.addEventListener('click', () => {
    menuMenu.classList.remove('clozz');
  });
});

item2.addEventListener('click', () => {
  menuMenu.classList.add('clozz');
  knopka.checked = false;
  knopka.addEventListener('click', () => {
    menuMenu.classList.remove('clozz');
  });
});

item3.addEventListener('click', () => {
  menuMenu.classList.add('clozz');
  knopka.checked = false;
  knopka.addEventListener('click', () => {
    menuMenu.classList.remove('clozz');
  });
});

item4.addEventListener('click', () => {
  menuMenu.classList.add('clozz');
  knopka.checked = false;
  knopka.addEventListener('click', () => {
    menuMenu.classList.remove('clozz');
  });
});

item5.addEventListener('click', () => {
  menuMenu.classList.add('clozz');
  knopka.checked = false;
  knopka.addEventListener('click', () => {
    menuMenu.classList.remove('clozz');
  });
});

item6.addEventListener('click', () => {
  menuMenu.classList.add('clozz');
  knopka.checked = false;
  knopka.addEventListener('click', () => {
    menuMenu.classList.remove('clozz');
  });
});

      