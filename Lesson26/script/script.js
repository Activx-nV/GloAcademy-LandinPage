window.addEventListener('DOMContentLoaded', () => {
    const interval = setInterval(countTimer, 1000, '16 december 2020');
    const teamPhotos = document.querySelectorAll('.command__photo');

    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours');
        const timerMinutes = document.querySelector('#timer-minutes');
        const timerSeconds = document.querySelector('#timer-seconds');


        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime();
            const dateNow = new Date().getTime();
            const timeRemaining = (dateStop - dateNow) / 1000;
            const seconds = Math.floor(timeRemaining % 60);
            const minutes = Math.floor((timeRemaining / 60) % 60);
            const hours = Math.floor(timeRemaining / 60 / 60);
            //let day = Math.floor(timeRemaining / 60 / 60 / 24);
            return {
                hours,
                minutes,
                seconds,
                timeRemaining
            };
        }

        function updateClock() {
            const timer = getTimeRemaining();
            timerHours.textContent = String(timer.hours).padStart(2, '0');
            timerMinutes.textContent = String(timer.minutes).padStart(2, '0');
            timerSeconds.textContent = String(timer.seconds).padStart(2, '0');

            if (timer.timeRemaining < 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(interval);
            }
        }
        updateClock();
    }

    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu');
        // closeBtn = document.querySelector('.close-btn'),
        // menuItems = menu.querySelectorAll('ul>li');
        let count = 0;

        const handlerMenu = () => {
            if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
                menu.style.transform = `translate(0)`;
                let flyInterval;
                const flyAnimate = function () {
                    flyInterval = requestAnimationFrame(flyAnimate);
                    count += 20;
                    if (count < 1000 && document.documentElement.clientWidth > 1900) {
                        menu.style.left = count + 'px';
                    } else if (count < 700 && document.documentElement.clientWidth < 1900 &&
                        document.documentElement.clientWidth > 1200) {
                        menu.style.left = count + 'px';
                    } else if (count < 550 && document.documentElement.clientWidth < 1920 &&
                        document.documentElement.clientWidth > 1000) {
                        menu.style.left = count + 'px';
                    } else if (count < 850 && document.documentElement.clientWidth < 1920 &&
                        document.documentElement.clientWidth >= 1600) {
                        menu.style.left = count + 'px';
                    } else if (document.documentElement.clientWidth > 768) {
                        cancelAnimationFrame(flyInterval);
                    }
                };
                flyInterval = requestAnimationFrame(flyAnimate);
            } else {
                count = 0;
                menu.style.transform = `translate(-100%)`;
                menu.style.left = "";
            }
            //menu.classList.toggle('active-menu');

        };

        btnMenu.addEventListener('click', handlerMenu);
        // closeBtn.addEventListener('click', handlerMenu);
        // menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
        menu.addEventListener('click', event => {
            const target = event.target;

            if (target.classList.contains('close-btn')) {
                handlerMenu();
            } else if (target.closest('ul')) {
                handlerMenu();
            }
        });
    };

    toggleMenu();

    const togglePopUp = () => {
        let opacityIn = 0;
        let opacityOut = 1;
        const popUp = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

        const formName = document.getElementById('form3-name'),
            formPhone = document.getElementById('form3-phone'),
            formEmail = document.getElementById('form3-email'),
            formBtns = document.querySelectorAll('.form-btn');
        //popUpClose = document.querySelector('.popup-close');

        popupBtn.forEach(elem => {
            elem.addEventListener('click', () => {
                if (document.documentElement.clientWidth >= 768) {
                    opacityIn = 0;
                    popUp.style.display = 'block';
                    let opacityInterval;
                    const opacityAnimate = function () {
                        opacityInterval = requestAnimationFrame(opacityAnimate);
                        opacityIn += 0.01;
                        if (opacityIn < 1.01) {
                            popUp.style.opacity = opacityIn;
                        } else if (opacityIn >= 1) {
                            cancelAnimationFrame(opacityInterval);
                        }
                    };
                    opacityInterval = requestAnimationFrame(opacityAnimate);
                } else {
                    popUp.style.display = 'block';
                    popUp.style.opacity = 1;
                }
            });
            popUp.addEventListener('click', event => {
                let target = event.target;
                formBtns.forEach(item => {
                    item.removeAttribute('disabled', true);
                    item.textContent = 'Оставить заявку!';
                });


                if (target.classList.contains('popup-close')) {
                    if (document.documentElement.clientWidth >= 768) {
                        let opacityInterval;
                        opacityOut = 1;
                        const opacityAnimate = function () {
                            opacityInterval = requestAnimationFrame(opacityAnimate);
                            opacityOut -= 0.01;
                            if (opacityOut > 0.01) {
                                popUp.style.opacity = opacityOut;
                            } else {
                                popUp.style.display = 'none';
                                formName.value = '';
                                formPhone.value = '';
                                formEmail.value = '';
                                cancelAnimationFrame(opacityInterval);
                            }
                        };
                        opacityInterval = requestAnimationFrame(opacityAnimate);
                    } else {
                        formName.value = '';
                        formPhone.value = '';
                        formEmail.value = '';
                        popUp.style.display = 'none';
                    }
                    //popUp.style.display = 'none';
                } else {
                    formBtns.forEach(item => {
                        item.removeAttribute('disabled', true);
                        item.textContent = 'Оставить заявку!';
                    });

                    target = target.closest('.popup-content');
                    if (!target) {
                        if (document.documentElement.clientWidth >= 768) {
                            let opacityInterval;
                            opacityOut = 1;
                            const opacityAnimate = function () {
                                opacityInterval = requestAnimationFrame(opacityAnimate);
                                opacityOut -= 0.01;
                                if (opacityOut > 0.01) {
                                    popUp.style.opacity = opacityOut;
                                } else {
                                    popUp.style.display = 'none';
                                    formName.value = '';
                                    formPhone.value = '';
                                    formEmail.value = '';
                                    cancelAnimationFrame(opacityInterval);
                                }
                            };
                            opacityInterval = requestAnimationFrame(opacityAnimate);
                        } else {
                            formName.value = '';
                            formPhone.value = '';
                            formEmail.value = '';
                            popUp.style.display = 'none';
                        }

                        //popUp.style.display = 'none';
                    }
                }

            });
        });

        // popUpClose.addEventListener('click', () => {
        //     let opacityInterval;
        //     opacityOut = 1;
        //     const opacityAnimate = function () {
        //         opacityInterval = requestAnimationFrame(opacityAnimate);
        //         opacityOut -= 0.01;
        //         if (opacityOut > 0.01) {
        //             popUp.style.opacity = opacityOut;
        //         } else {
        //             popUp.style.display = 'none';
        //             cancelAnimationFrame(opacityInterval);
        //         }
        //     };
        //     opacityInterval = requestAnimationFrame(opacityAnimate);
        // });
    };
    togglePopUp();
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        tabContent.forEach((item, index) => {
            if (index !== 0) {
                item.classList.add('d-none');
            }
        });

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };

        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                // eslint-disable-next-line no-loop-func
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();


    //slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            dotParent = document.querySelector('.portfolio-dots');


        let currentSlide = 0,
            interval;

        const createDots = () => {
            for (let i = 0; i < slide.length; i++) {
                if (i === 0) {
                    const li = document.createElement('li');
                    li.classList.add('dot');
                    li.classList.add('dot-active');
                    dotParent.append(li);
                } else {
                    const li = document.createElement('li');
                    li.classList.add('dot');
                    dotParent.append(li);
                }
            }
        };
        createDots();
        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };


        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {
            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            } else if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };
    slider();

    const getTeamImages = () => {
        teamPhotos.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.src = item.dataset.img;
            });
        });
        teamPhotos.forEach((item, index) => {
            item.addEventListener('mouseout', () => {
                item.src = `images/command/command-${index + 1}.jpg`;
            });
        });

    };
    getTeamImages();

    const priceCalculator = (price = 100) => {
        const calcSquare = document.querySelector('.calc-square');
        const calcCount = document.querySelector('.calc-count');
        const calcDay = document.querySelector('.calc-day');
        const calcBlock = document.querySelector('.calc-block');
        const calcType = document.querySelector('.calc-type');
        const totalValue = document.getElementById('total');

        calcSquare.addEventListener('input', event => {
            const target = event.target;
            if (calcSquare.value !== '') {
                if (target.matches('.calc-square') && calcSquare.value[calcSquare.value.length - 1].match(/^[0-9]/)) {
                    calcSquare.value = target.value;
                } else {
                    calcSquare.value = calcSquare.value.substr(0, calcSquare.value.length - 1);
                }
            }
        });

        calcCount.addEventListener('input', event => {
            const target = event.target;
            if (calcCount.value !== '') {
                if (target.matches('.calc-count') && calcCount.value[calcCount.value.length - 1].match(/^[0-9]/)) {
                    calcCount.value = target.value;
                } else {
                    calcCount.value = calcCount.value.substr(0, calcCount.value.length - 1);
                }
            }
        });

        calcDay.addEventListener('input', event => {
            const target = event.target;
            if (calcDay.value !== '') {
                if (target.matches('.calc-day') && calcDay.value[calcDay.value.length - 1].match(/^[0-9]/)) {
                    calcDay.value = target.value;
                } else {
                    calcDay.value = calcDay.value.substr(0, calcDay.value.length - 1);
                }
            }
        });

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;

            const typeValue = +calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }
            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;
            if (target.matches('.calc-type') || target.matches('.calc-square') ||
                target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum(price);
            }
        });

    };
    priceCalculator(100);

    //send-ajax-form
    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };

        const form = document.getElementById('form1');
        const popUpForm = document.getElementById('form3');
        const popUpFormExpanded = document.getElementById('form2');
        const statusMessage = document.createElement('div');
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
            postData(body,
                () => {
                    statusMessage.textContent = successMessage;
                }, error => {
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
            postData(body,
                () => {
                    statusMessage.textContent = successMessage;
                    event.target[event.target.length - 1].textContent = successMessage;
                    event.target[event.target.length - 1].setAttribute('disabled', true);
                }, error => {
                    statusMessage.textContent = errorMessage;
                    event.target[event.target.length - 1].textContent = errorMessage;
                    console.log(error);
                });
        });

        popUpFormExpanded.addEventListener('submit', event => {
            const formNameExpanded = document.getElementById('form2-name'),
                formPhoneExpanded = document.getElementById('form2-phone'),
                formEmailExpanded = document.getElementById('form2-email'),
                formMessage = document.getElementById('form2-message');
            event.preventDefault();
            statusMessage.textContent = loadMessage;
            const formData = new FormData(popUpForm);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body,
                () => {
                    statusMessage.textContent = successMessage;
                    formNameExpanded.value = '';
                    formPhoneExpanded.value = '';
                    formEmailExpanded.value = '';
                    formMessage.value = '';
                    alert(successMessage);
                }, error => {
                    statusMessage.textContent = errorMessage;
                    event.target[event.target.length - 1].textContent = errorMessage;
                    console.log(error);
                });
        });
    };
    sendForm();

    const formValidator = () => {
        const formPhone = document.querySelectorAll('.form-phone');
        const formName = document.querySelectorAll('.form-name');
        const expandedFormName = document.querySelector('.top-form');
        const expandedFormMessage = document.querySelector('.mess');

        formPhone.forEach(item => {
            item.addEventListener('input', () => {
                if (item.value !== '') {
                    if (!item.value[item.value.length - 1].match(/^[0-9+]/)) {
                        item.value = item.value.substr(0, item.value.length - 1);
                    }
                }
            });
        });
        formName.forEach(item => {
            item.addEventListener('input', () => {
                if (item.value !== '') {
                    if (!item.value[item.value.length - 1].match(/^[а-яА-Я ]/)) {
                        item.value = item.value.substr(0, item.value.length - 1);
                    }
                }
            });
        });
        expandedFormName.addEventListener('input', () => {
            if (expandedFormName.value !== '') {
                if (!expandedFormName.value[expandedFormName.value.length - 1].match(/^[а-яА-Я ]/)) {
                    expandedFormName.value = expandedFormName.value.substr(0, expandedFormName.value.length - 1);
                }
            }
        });
        expandedFormMessage.addEventListener('input', () => {
            if (expandedFormMessage.value !== '') {
                if (!expandedFormMessage.value[expandedFormMessage.value.length - 1].match(/^[а-яА-Я ]/)) {
                    expandedFormMessage.value = expandedFormMessage.value.substr(0, expandedFormMessage.value.length - 1);
                }
            }
        });
    };
    formValidator();
});