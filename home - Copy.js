

function start_quiz() {
    let questions_all = {
    ques1 : "1. What tag is used to define a hyperlink in HTML?",
    answ1_1 : "<link>",
    answ1_2 : "<a>",
    
    ques2 : "2. Which tag creates the largest heading in HTML?",
    answ2_1 : "<h1>",
    answ2_2 : "<h6>",
};



    let question1 = document.createElement("p");
    question1.innerHTML = "1. What tag is used to define a hyperlink in HTML?";

    let ans1_opt1 = document.createElement("input");
    ans1_opt1.type = "radio";
    ans1_opt1.value = "<link>";
    ans1_opt1.name = "ans1"

    let ans1_opt2 = document.createElement("input");
    ans1_opt2.type = "radio";
    ans1_opt2.value = "<a>";
    ans1_opt2.name = "ans1"

    let ans1_opt1_label1 = document.createElement("label");
    ans1_opt1_label1.textContent = "<link>"

    let ans1_opt2_label2 = document.createElement("label");
    ans1_opt2_label2.textContent = "<a>"

    let quiz_papaer_div = document.getElementById("quiz_paper");
    quiz_papaer_div.appendChild(question1);
    quiz_papaer_div.appendChild(ans1_opt1);
    quiz_papaer_div.appendChild(ans1_opt1_label1);
    quiz_papaer_div.appendChild(ans1_opt2);
    quiz_papaer_div.appendChild(ans1_opt2_label2);
    
    let br_br = document.createElement("br");

    let btn_next = document.createElement("button");
    btn_next.type = "button";
    btn_next.textContent = "Next Question";
    btn_next.onclick = next_question;
    quiz_papaer_div.appendChild(br_br);
    quiz_papaer_div.appendChild(btn_next);


//  Next Question Function Start Here
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
//  Next Question Function End Here
}

// let questions_all = {
//     ques1 : "1. What tag is used to define a hyperlink in HTML?",
//     answ1_1 : "<link>",
//     answ1_2 : "<a>",
    
//     ques2 : "2. Which tag creates the largest heading in HTML?",
//     answ2_1 : "<h1>",
//     answ2_2 : "<h6>",
// };


