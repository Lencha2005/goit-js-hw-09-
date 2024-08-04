let formData = {email: "", message: ""};
const feedBackFormEl = document.querySelector('.feedback-form');

function fillFormFields(){
const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

if(formDataFromLS === null){
    return;
}
formData = formDataFromLS;

console.log(formDataFromLS);
console.dir(feedBackFormEl.elements);
for( const key in formDataFromLS) {
    if(formDataFromLS.hasOwnProperty(key)){
        feedBackFormEl.elements[key].value = formDataFromLS[key];
    };
};

};
fillFormFields()

function onFormInput(event){
    const fieldValue = event.target.value.trim();
    const fieldName = event.target.name.trim()
    formData[fieldName] = fieldValue;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function onFormSubmit(event){
    event.preventDefault();

    const email = feedBackFormEl.elements['email'].value.trim();
    const message = feedBackFormEl.elements['message'].value.trim();
    
    if(!email || !message){
        alert('Fill please all fields')
    };
    console.log(formData);
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {email: "", message: ""};
    console.log(formData);
};
feedBackFormEl.addEventListener('input', onFormInput);
feedBackFormEl.addEventListener('submit', onFormSubmit);