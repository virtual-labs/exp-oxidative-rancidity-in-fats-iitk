/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function () {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


  /////////////////////////////////////////////////////////////////////////////

  /////////////////////// Do not modify the above code ////////////////////////

  /////////////////////////////////////////////////////////////////////////////






  /////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "The term used for spoilage of fat is",  ///// Write the question inside double quotes
      answers: {
        a: "Putrification",                  ///// Write the option 1 inside double quotes
        b: "Esterification",                  ///// Write the option 2 inside double quotes
        c: "Rancidity",                  ///// Write the option 3 inside double quotes
        d: "Fractionation"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "Oxidative rancidity in fats/oils is because of",  ///// Write the question inside double quotes
      answers: {
        a: "Peroxides formation",                  ///// Write the option 1 inside double quotes
        b: "Less mineral content",                  ///// Write the option 2 inside double quotes
        c: "Moisture content",                  ///// Write the option 3 inside double quotes
        d: "More saturated fatty acids"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 

    {
      question: "Which is not a type of rancidity",  ///// Write the question inside double quotes
      answers: {
        a: "Hydrolytic",                  ///// Write the option 1 inside double quotes
        b: "Oxidative",                  ///// Write the option 2 inside double quotes
        c: "Ketonic",                  ///// Write the option 3 inside double quotes
        d: "Hypertonic"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 

    {
      question: "Which of the following is termed as rancidity?",  ///// Write the question inside double quotes
      answers: {
        a: "Oxidation of oil present in food",                  ///// Write the option 1 inside double quotes
        b: "Reduction of oxygen present in food",                  ///// Write the option 2 inside double quotes
        c: "Oxidation of sugar present in food",                  ///// Write the option 3 inside double quotes
        d: "Hydrolysis of carbohydrates"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    ///// this line

    {
      question: "Rancidity can be effectively prevented by:",  ///// Write the question inside double quotes
      answers: {
        a: "Adding antioxidants to the oil",                  ///// Write the option 1 inside double quotes
        b: "Increasing exposure to air",                  ///// Write the option 2 inside double quotes
        c: "Storing oil at high temperature",                  ///// Write the option 3 inside double quotes
        d: "Adding excess moisture"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




  /////////////////////////////////////////////////////////////////////////////

  /////////////////////// Do not modify the below code ////////////////////////

  /////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
