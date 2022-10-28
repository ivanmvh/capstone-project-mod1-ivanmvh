/* Create dancer cards */

const teachersData = [
  {
    id: '1',
    image: './src/img/dancers/1-mona-y-blanco-c.jpg',
    name: 'Mona Jeferson and White Jhonson',
    position: 'Viva Tango, USA',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam,.',
  },
  {
    id: '2',
    image: './src/img/dancers/2-ruth-y-can-c.jpg',
    name: 'Ruth Martin and Can Rudolph',
    position: 'Hamburg, Germany',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam,.',
  },
  {
    id: '3',
    image: './src/img/dancers/3-baili-y-dancelot-c.jpg',
    name: 'Baian Mirado and Dancelot Grace',
    position: 'Tokio, Japan',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam,.',
  },
  {
    id: '4',
    image: './src/img/dancers/4-inclusive dance 2-c.jpg',
    name: 'Monica and Lucy',
    position: 'Paris, France',
    description: 'Lorem lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam,.',
  },
  {
    id: '5',
    image: './src/img/dancers/5-Elegi-y-sobras-c.jpg',
    name: 'Elvira y Alvaro',
    position: 'Bogota, Colombia',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam,.',
  },
  {
    id: '6',
    image: './src/img/dancers/6-abra-y-brace-c.jpg',
    name: 'Monica y Jose',
    position: 'Madrid, España',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas accusamus eaque officia obcaecati nam,.',
  },
];

const teacherInformation = teachersData.map((teacher) => `
  <article class='teacher d-flex flex-row align-items-center'>
  <img class='teacher-img col-4' src='${teacher.image}' alt='Teacher ${teacher.id}'>
  <div class='teacher-name col-8'>
    <h3 class='teacher-name'>${teacher.name}</h3>
    <p class='teacher-position'>${teacher.position}</p>
    <hr class='teacher-div'>
    <p class='teacher-description'>${teacher.description}</p>
  </div>
  </article>
`);

const teacherGrid = document.querySelector('.teachers-grid');
const parser = new DOMParser();

teacherInformation.forEach((teacherString) => {
  const teacherHtml = parser.parseFromString(teacherString, 'text/html').body.firstChild;
  teacherGrid.append(teacherHtml);
});