const checkBoxList = document.querySelectorAll('.custom-checkbox')
const goalInputs = document.querySelectorAll('.goal-input');
const errorMessage = document.querySelector('.error-label');
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')


checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allFieldsFilled = [...goalInputs].every((input) => {
            return input.value
        })
        if (allFieldsFilled) {
            checkbox.parentElement.classList.toggle("completed");
            progressValue.style.width = '33.3%'
        } else {
            progressBar.classList.add("show-error")
        }
    })
})

goalInputs.forEach((input) => {
    input.addEventListener('focus', () => {
        progressBar.classList.remove("show-error")
    })
})