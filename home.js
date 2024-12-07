function start_quiz() {
    let question1 = document.createElement("p");
    question1.innerHTML = "1. What tag is used to define a hyperlink in HTML?"

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
        let question1 = document.createElement("p");
    question1.innerHTML = "2. What tag is used to define a hyperlink in HTML?"

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
    btn_next.textContent = "Next Question"
    quiz_papaer_div.appendChild(br_br)
    quiz_papaer_div.appendChild(btn_next);
    }
//  Next Question Function End Here
}