const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const totalScore = document.querySelector('.result')

form.addEventListener('submit', e => {

    e.preventDefault();

    let score = 0;
    const selectedAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    
    selectedAnswers.forEach((answer,index) =>{
        if (answer === correctAnswers[index]) {
             score += 25;
        }
    } )
    
    scrollTo(0,0)
    totalScore.classList.remove('d-none');

    let output = 0;
    const counter = setInterval(() => {
        totalScore.querySelector('span').textContent = `${output}%`
        if (output === score) {
            clearInterval(counter);
        } else {
            output++
        }
    }, 1000)
});