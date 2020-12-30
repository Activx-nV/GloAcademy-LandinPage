const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const postData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        // ,credentials: 'include'
    });

    const form = document.getElementById('form1');
    const popUpForm = document.getElementById('form3');
    const popUpFormExpanded = document.getElementById('form2');
    const statusMessage = document.createElement('div');
    const allPageInputs = document.querySelectorAll('input');
    statusMessage.style.cssText = 'font-size: 2rem;';

    form.addEventListener('submit', event => {
        event.preventDefault();
        form.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        // for (const value of formData.entries()) {
        //     body[value[0] = value[1]];
        // }
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body).then(response => {
            if (response.status !== 200) {
                throw new Error('Status error, something went wrong.');
            }
            statusMessage.textContent = successMessage;
            allPageInputs.forEach(item => {
                item.value = '';
            });
        }).catch(error => {
            statusMessage.textContent = errorMessage;
            console.log(error);
        });
    });

    popUpForm.addEventListener('submit', event => {
        event.preventDefault();
        statusMessage.textContent = loadMessage;
        const formData = new FormData(popUpForm);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        // postData(body).then(data => {
        //     statusMessage.textContent = data;
        //     event.target.lastElementChild.textContent = data;
        //     event.target.lastElementChild.setAttribute('disabled', true);
        // }).catch(error => {
        //     statusMessage.textContent = error;
        //     event.target.lastElementChild.textContent = error;
        // });

        postData(body).then(response => {
            if (response.status !== 200) {
                throw new Error('Status error, something went wrong.');
            }
            statusMessage.textContent = successMessage;
            event.target.lastElementChild.textContent = successMessage;
            event.target.lastElementChild.setAttribute('disabled', true);
            allPageInputs.forEach(item => {
                item.value = '';
            });
        }).catch(error => {
            statusMessage.textContent = errorMessage;
            event.target.lastElementChild.textContent = errorMessage;
            console.error(error);
        });
    });

    popUpFormExpanded.addEventListener('submit', event => {
        event.preventDefault();
        statusMessage.textContent = loadMessage;
        const formData = new FormData(popUpFormExpanded);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body).then(response => {
            if (response.status !== 200) {
                throw new Error('Status error, something went wrong.');
            }
            statusMessage.textContent = successMessage;
            allPageInputs.forEach(item => {
                item.value = '';
            });
            event.target.lastElementChild.lastElementChild.innerHTML = `<button class="btn form-btn" type="submit">
                ${successMessage}
                </button>`;
            setTimeout(() => {
                event.target.lastElementChild.lastElementChild.innerHTML = `<button class="btn form-btn" type="submit">
                Оставить заявку!
                </button>`;
            }, 2500);
        }).catch(error => {
            statusMessage.textContent = errorMessage;
            event.target.lastElementChild.lastElementChild.innerHTML = `<button class="btn form-btn" type="submit">
                ${errorMessage}
                </button>`;
            setTimeout(() => {
                event.target.lastElementChild.lastElementChild.innerHTML = `<button class="btn form-btn" type="submit">
                Оставить заявку!
                </button>`;
            }, 2500);
            console.error(error);
        });
    });
};

export default sendForm;
