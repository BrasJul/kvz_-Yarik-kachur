document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
     {
            question: "Яка риба найчастіше клює на черв'яка?",
            answers: ["Щука", "Карась", "Сом", "Окунь"],
            correct: 1
        },
        {
            question: "Який час доби найкращий для риболовлі?",
            answers: ["Полудень", "Ранок і вечір", "Опівночі", "Тільки вдень"],
            correct: 1
        },
        {
            question: "Яка риба є хижою?",
            answers: ["Короп", "Карась", "Щука", "Лящ"],
            correct: 2
        },
        {   question: "Як називається снасть для ловлі риби з гачком і волосінню?"
          answers:["Сітка","Вудка", "Гарпун", "Спінінг"],
            correct: 1
           ],
           {
            question: "Для чого потрібен поплавок?"
            answers:["Для прикраси", "Щоб лякати рибу", "Щоб бачити покльовку", "Щоб обтяжити вудку"],
            correct: 2
            ],
            {
            question:"Що таке наживка?"
            answers:["Частина вудки", "Те, на що ловлять рибу", "Назва риби", "Вид гачка"],
            correct: 1
    ];  
         const questionText = document.querySelector('#question-text');
         const anaswerContainer = document.querySelector('#anaswer-container');
    
        let questionIndex = 0;
        let score = 0;
        
        
        function showQuestion(index) {
            anaswerConstainer.innerHTML = '';
              
            const currentQuestion = questions[index];
            questionText.innerText = currentQuestion.question;
            
            
            currentQuestion.answers.forEach((answer, i) =>) {
                const button = document.createElement('button');
                button.innerText = answer;
                
                
            }
        }
    
    
    
});
