const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

//function save formData & local
function saveData() {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

//function get data from local to input & formData
function getDataLocal() {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    formData = JSON.parse(storedData);
    if (formData) {
      form.elements.email.value = formData.email;
      form.elements.message.value = formData.message;
    }
  }
}

//function we check if inputs is fill
function checkInput() {
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
}

//listener of input
form.addEventListener('input', e => {
  saveData();
});

//listener when we load window
window.addEventListener('load', getDataLocal);

//listener when we submit form
form.addEventListener('submit', e => {
  e.preventDefault();
  checkInput();
});
