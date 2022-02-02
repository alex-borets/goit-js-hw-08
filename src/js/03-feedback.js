import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(evnt) {
  formData[evnt.target.name] = evnt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.input.value = JSON.parse(savedMessage).email;
    refs.textarea.value = JSON.parse(savedMessage).message;
  }
}

fillTextarea();
