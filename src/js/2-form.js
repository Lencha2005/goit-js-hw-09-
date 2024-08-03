const formData = {email: "", message: ""};
const feedBackFormEl = document.querySelector('.feedback-form');

function onFormInput(event){
    const fieldValue = event.target.value.trim();
    const fieldName = event.target.name.trim()
    formData[fieldName] = fieldValue;
    console.log(formData);

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};
feedBackFormEl.addEventListener('input', onFormInput);