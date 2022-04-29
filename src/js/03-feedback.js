import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInputType, 500));
formEl.addEventListener('submit', onFormSubmit);

const FEEDBACK_FORM = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};
updateForm();
function onInputType(evt) {
  const inputName = evt.target.name;
  const inputValue = evt.target.value;

  formData[inputName] = inputValue;

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function updateForm() {
  const savedForm = localStorage.getItem(FEEDBACK_FORM);
  const parsedForm = JSON.parse(savedForm);

  if (parsedForm) {
    formEl.elements.message.value = parsedForm.message || '';
    formEl.elements.email.value = parsedForm.email || '';
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const saveFormData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));

  console.log(saveFormData.email);
  console.log(saveFormData.message);
  localStorage.clear();
  formEl.reset();
}

// Альтернатива для зберігання та читання з сховища==========================

// const formEls = document.querySelectorAll('form');

// formEls.forEach(form => {
//   form.addEventListener('input', onInputType);
// });

// const FEEDBACK_FORM = 'forms_data';
// const formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};

// function onInputType(evt) {
//   evt.preventDefault();

//   const inputName = evt.target.name;
//   const inputValue = evt.target.value;

//   formData[inputName] = inputValue;

//   localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
// }

// function updateForm() {
//   const savedForm = localStorage.getItem(FEEDBACK_FORM);
//   const parsedForm = JSON.parse(savedForm);

//   for (const [key, value] of Object.entries(formData)) {
//     console.log(key);
//     document.querySelector(`[name=${key}]`).value = value;
//   }
// }

// updateForm();
