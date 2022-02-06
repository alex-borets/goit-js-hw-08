import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

let formData = {
  email: '',
  message: '',
};

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);

  // if (refs.input.value && refs.textarea.value !== '') {
  //   return;
  // }

  evt.currentTarget.reset();
}

function onFormInput(evnt) {
  formData[evnt.target.name] = evnt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillSavedForm() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  if (parsedMessage !== null) {
    formData = parsedMessage;
    if ((refs.input.value = parsedMessage.email) || (refs.textarea.value = parsedMessage.message)) {
      refs.input.value = refs.input.value || parsedMessage.email;
      refs.textarea.value = parsedMessage.message || refs.textarea.value;
    }
  }
}

// function fillSavedForm() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   const parsedMessage = JSON.parse(savedMessage);

//   if (parsedMessage) {
//     refs.input.value = parsedMessage.email || '';
//     refs.textarea.value = parsedMessage.message || '';
//   }
// }

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

fillSavedForm();
