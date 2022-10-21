/* Mobile Menu */

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cross = document.querySelector('.fa-xmark');
const crossBefore = document.querySelector('.fa-xmark:before');
const menuOptions = document.querySelectorAll('.desktop-menu li');
let menuActivated = false;

function open() {
  mobileMenu.classList.toggle('open');
  mobileMenu.style.display = 'block';
  mobileMenu.style.height = '100vh';
  mobileMenu.style.visibility = 'visible';
  hamburger.style.visibility = 'hidden';
  cross.style.visibility = 'visible';
  cross.style.position = 'inherit';
}

function close() {
  mobileMenu.classList.remove('open');
  mobileMenu.style.height = '0';
  mobileMenu.style.visibility = 'hidden';
  hamburger.style.visibility = 'visible';
  cross.style.visibility = 'hidden';
  cross.style.display = 'none';
  cross.style.height = '0';
  crossBefore.style.visibility = 'hidden';
  crossBefore.style.display = 'none';
  crossBefore.style.height = '0';
}
hamburger.addEventListener('click', () => {
  open();
  if (menuActivated === false) {
    mobileMenu.innerHTML += '<a href="./index.html">Home</a>';
    for (let option = 0; option < menuOptions.length; option += 1) {
      mobileMenu.innerHTML += menuOptions[option].innerHTML;
    }
  }
  menuActivated = true;
});

cross.addEventListener('click', close);
mobileMenu.addEventListener('click', close);

/* Create dancer cards */

const array = [
  {
    id: '1',
    image: './src/img/dancers/1-mona-y-blanco.jpg',
    name: 'Mona Jeferson and White Jhonson',
    company: 'Viva Tango, USA',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '2',
    image: './src/img/dancers/2-ruth-y-can.jpg',
    name: 'Ruth Martin and Can Rudolph',
    company: 'Hamburg, Germany',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '3',
    image: './src/img/dancers/3-baili-y-dancelot.jpg',
    name: 'Baian Mirado and Dancelot Grace',
    company: 'Tokio, Japan',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '4',
    image: './src/img/dancers/4-inclusive dance 2.jpg',
    name: 'Monica and Lucy',
    company: 'Paris, France',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '5',
    image: './src/img/dancers/5-Elegi-y-sobras.jpg',
    name: 'Elvira y Alvaro',
    company: 'Bogota, Colombia',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
  {
    id: '5',
    image: './src/img/dancers/6-abra-y-brace.jpg',
    name: 'Monica y Jose',
    company: 'Madrid, España',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam, iure reprehenderit molestiae provident commodi, voluptatum enim atque optio debitis qui numquam magnam quidem voluptatibus repudiandae.',
  },
];

const dancerSection = document.querySelector('.dancers');

if (dancerSection != null) {
  for (let i = 0; i < array.length; i += 1) {
    dancerSection.innerHTML += `
    <!-- dancer card -->
            <div class="dancer-card">
              <div class="upper-part">
                <div class="dancer-image-container">
                  <div class="dancer-bg"></div>
                  <img class="dancer-image" src="${array[i].image}" alt="${array[i].name} image" height="225" width="225">
                </div>
                <div class="dancers-headings">
                  <h4 class="dancer-name">${array[i].name}</h4>
                  <h5 class="dancer-company"> ${array[i].company}</h5>
                  <div class="line desktop"></div>
                  <p class="dancer-introduction-desktop">
                  ${array[i].description}
                  </p>
                </div>
              </div>
              <div class="lower-part">
                <p class="dancer-introduction-mobile">
                ${array[i].description}
                </p>
              </div>
            </div>
            <!-- dancer card -->
    `;
  }
}
