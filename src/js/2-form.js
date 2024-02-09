const feedbackMessage = document.querySelector('.feedback-form');

const saveFormState = () => {
    const formData = {
        email: feedbackMessage.elements.email.value.trim(),
        message: feedbackMessage.elements.message.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const loadFormState = () => {
    const savedData = localStorage.getItem('feedback-form-state');

    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        feedbackMessage.elements.email.value = email;
        feedbackMessage.elements.message.value = message;
    }
};

loadFormState();

feedbackMessage.addEventListener('input', saveFormState);

feedbackMessage.addEventListener('submit', function (event) {
    event.preventDefault();

    if (feedbackMessage.elements.email.value.trim() && feedbackMessage.elements.message.value.trim()) {
        console.log({
            email: feedbackMessage.elements.email.value.trim(),
            message: feedbackMessage.elements.message.value.trim(),
        });
    
        feedbackMessage.reset();

        localStorage.removeItem('feedback-form-state');
    }
});