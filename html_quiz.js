// function html_quiz() {
//     window.location.href = "html_quiz.html"
// }


// Timer Start
window.onload = timer;
let mins =  29;
let sec = 59;

setInterval(function timer () {
    document.getElementById("timer").innerHTML = `${mins} : ${sec}`;
    sec--;
    if (sec < 0){
        if (mins < 1){
            mins = 29;
            sec = 59;
        } else {
            mins--;
            sec = 59;
        }
    } 
}, 1000);
// Timer End

let questions_arr = [{
    question : "1. What tag is used to define a hyperlink in HTML?",
    option1 : "<link>",
    option2 : "<a>",
    option3 : "<b>",
    option4 : "<d>",
    correct_answer : "<a>"
    },
    {question : "2. Which tag creates the largest heading in HTML?",
    option1 : "<h1>",
    option2 : "<h6>",
    option3 : "<b>",
    option4 : "<d>",
    correct_answer : "<h1>"
    }];

    let ques_1 = document.getElementById("question");
    let opt_1 = document.getElementById("option-1");
    let opt_2 = document.getElementById("option-2");
    let opt_3 = document.getElementById("option-3");
    let opt_4 = document.getElementById("option-4");
    let question_index = 0;
    let score = 0;
    let btn_end = document.getElementById("btn-end");
    let btn_start = document.getElementById("btn-start");
    let btn_next = document.getElementById("btn-next");
    let user_score;


    
    function next_question() {
        
        // let quiz_papaer_div = document.getElementById("quiz_paper");
        // quiz_papaer_div.innerHTML = "";
        btn_end.disabled = true;

        let options = document.getElementsByName("answer");
        for (let i = 0; i < options.length; i++){
            if (options[i].checked  == true){
                let userSelected = options[i].value;
                let user_ans = questions_arr[question_index -1][`option${userSelected}`];
                let corr_anw = questions_arr[question_index -1].correct_answer;
                btn_next.disabled = false;
                if (corr_anw === user_ans){
                    score++
                }
            }
            else{
                options[i].checked;
            }
            options[i].checked = false
        }

            if (question_index > questions_arr.length -1){

                user_score = (score / questions_arr.length) * 100 + "%";
                btn_end.disabled = false;
            }
            else{
                ques_1.innerText = questions_arr[question_index].question;
                opt_1.innerText = questions_arr[question_index].option1;
                opt_2.innerText = questions_arr[question_index].option2;
                opt_3.innerText = questions_arr[question_index].option3;
                opt_4.innerText = questions_arr[question_index].option4;
                btn_start.disabled = true;
                btn_next.disabled = false;
                question_index++;
                }
         console.log(user_score);
        
        
        // console.log(options[question_index].innerText);
        // console.log(options[0].getAttribute("aria-pressed"));
    }
    
    function enable_btn(){
        btn_next.disabled = false;
    }
    

    //     let question1 = document.createElement("p");
    //     question1.innerHTML = questions_all[qno].ques;
    
    //     let ans1_opt1 = document.createElement("input");
    //     ans1_opt1.type = "radio";
    //     ans1_opt1.value = "ans1";
    //     ans1_opt1.name = "radiobtn"
    
    //     let ans1_opt2 = document.createElement("input");
    //     ans1_opt2.type = "radio";
    //     ans1_opt2.value = "ans2";
    //     ans1_opt2.name = "radiobtn"
    
    //     let br_br = document.createElement("br");

    //     let ans1_opt1_label1 = document.createElement("label");
    //     ans1_opt1_label1.textContent = questions_all[qno].ans1;
    
    //     let ans1_opt2_label2 = document.createElement("label");
    //     ans1_opt2_label2.textContent = questions_all[qno].ans2;
    
    //     quiz_papaer_div = document.getElementById("quiz_paper");
    //     quiz_papaer_div.appendChild(new_clock);
    //     quiz_papaer_div.appendChild(question1);
    //     quiz_papaer_div.appendChild(ans1_opt1);
    //     quiz_papaer_div.appendChild(ans1_opt1_label1);
    //     quiz_papaer_div.appendChild(ans1_opt2);
    //     quiz_papaer_div.appendChild(ans1_opt2_label2);
        
        
    
    //     let btn_next = document.createElement("button");
    //     btn_next.type = "button";
    //     btn_next.textContent = "Next Question";
    //     btn_next.onclick = next_question;
    //     quiz_papaer_div.appendChild(br_br);
    //     quiz_papaer_div.appendChild(btn_next);
        
    // }

    // function next_question(){
    //     qno++;
    //     if (qno < questions_all.length){
    //         display_question();
    //     }
    //     else{
    //         alert("Paper End");
    //     }
    
     
    
  


    //  Next Question Function Start Here 
    /*
    function next_question() {
        let question2 = document.createElement("p");
    question2.innerHTML = "2. Which tag creates the largest heading in HTML?"

    let ans2_opt1 = document.createElement("input");
    ans2_opt1.type = "radio";
    ans2_opt1.value = "<h1>";
    ans2_opt1.name = "ans2"

    let ans2_opt2 = document.createElement("input");
    ans2_opt2.type = "radio";
    ans2_opt2.value = "<h6>";
    ans2_opt2.name = "ans2"

    let ans2_opt1_label1 = document.createElement("label");
    ans2_opt1_label1.textContent = "<h1>"

    let ans2_opt2_label2 = document.createElement("label");
    ans2_opt2_label2.textContent = "<h6>"

    let quiz_papaer_div = document.getElementById("quiz_paper");
    quiz_papaer_div.appendChild(question2);
    quiz_papaer_div.appendChild(ans2_opt1);
    quiz_papaer_div.appendChild(ans2_opt1_label1);
    quiz_papaer_div.appendChild(ans2_opt2);
    quiz_papaer_div.appendChild(ans2_opt2_label2);
    
    let br_br = document.createElement("br");

    let btn_next = document.createElement("button");
    btn_next.type = "button";
    btn_next.textContent = "Next Question"
    quiz_papaer_div.appendChild(br_br)
    quiz_papaer_div.appendChild(btn_next);
    } 
    */
    //  Next Question Function End Here


// let questions_all = {
//     ques1 : "1. What tag is used to define a hyperlink in HTML?",
//     answ1_1 : "<link>",
//     answ1_2 : "<a>",
    
//     ques2 : "2. Which tag creates the largest heading in HTML?",
//     answ2_1 : "<h1>",
//     answ2_2 : "<h6>",
// };


