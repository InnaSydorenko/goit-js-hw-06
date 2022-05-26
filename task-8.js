const formEl = document.querySelector('.login-form');


const onFormHandle = (event) => {
  event.preventDefault();
     
  const formData = new FormData(event.currentTarget);
  
  formData.forEach((value, name) => (
    console.log({ name: name, value: value })
  ));

  if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
    alert('Все поля должны быть заполнены');
  }
  event.currentTarget.reset();
};

formEl.addEventListener('submit', onFormHandle);