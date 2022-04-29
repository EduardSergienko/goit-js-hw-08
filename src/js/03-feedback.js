const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', onInputType);

const FEEDBACK_FORM = 'feedback-form-state';

const formData = {};

function onInputType(evt) {
  evt.preventDefault();
  const inputName = evt.target.name;
  const inputValue = evt.target.value;

  formData[inputName] = inputValue;

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}
console.log(formData);
// function updateForm() {
//   const savedForm = localStorage.getItem(FEEDBACK_FORM);
//   const parsedForm = JSON.parse(savedForm);
//   console.log(parsedForm.value);

//   if (savedForm) {
//     formEl.elements.message.value = parsedForm.message;
//     formEl.elements.email.value = parsedForm.email;
//   }
// }
// updateForm();
