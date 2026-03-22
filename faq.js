/* QAItem Class */
class QAItem {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    render() {
        const item = document.createElement("div");
        item.classList.add("faq-item");

        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const text = document.createElement("span");
        text.textContent = this.question;

        const icon = document.createElement("span");
        icon.classList.add("icon");
        icon.textContent = "+";

        questionDiv.appendChild(text);
        questionDiv.appendChild(icon);

        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.textContent = this.answer;

        item.appendChild(questionDiv);
        item.appendChild(answerDiv);

        questionDiv.addEventListener("click", () => {
            this.toggle(item, icon);
        });

        return item;
    }

    toggle(item, icon) {
        item.classList.toggle("active");
        icon.textContent = item.classList.contains("active") ? "-" : "+";
    }
}

/* FAQ Data */
const faqData = [
    new QAItem(
        "What is HTML?",
        "HTML stands for HyperText Markup Language. It is used to structure the content of webpages."
    ),
    new QAItem(
        "What is CSS?",
        "CSS stands for Cascading Style Sheets. It is used to style and design web pages."
    ),
    new QAItem(
        "What is JavaScript?",
        "JavaScript is a programming language used to make webpages interactive."
    ),
    new QAItem(
        "Why use Object-Oriented Programming?",
        "OOP helps organize code using objects and classes which makes programs easier to manage and reuse."
    )
];

/* Render FAQ */
const container = document.getElementById("faq-container");
faqData.forEach(item => {
    container.appendChild(item.render());
});
