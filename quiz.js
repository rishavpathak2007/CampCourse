var questions = ['CSS stands for', 'HTML stands for', 'The HTML attribute used to define the inline styles is', 'The CSS property used to specify the transparency of an element is', 'How to trigger events in DOM JavaScript'];

let question_no = 0;

var answers = [
	{
		option1: 'Cascading Style Sheets',
		option2: 'Case Style Sheets',
		option3: 'Color Style Sheets',
		option4: 'None of the above',
	},
	{
		option1: 'Hypertext Makeup Language',
		option2: 'Hypertext Markup Language',
		option3: 'Hypertext Marginal Language',
		option4: 'Hyper Talent Marginal Language',

	},
	{
		option1: 'Styles',
		option2: 'Design',
		option3: 'style',
		option4: 'None of the above',
	},
	{
		option1: 'Overlay',
		option2: 'transparency',
		option3: 'Opacity',
		option4: 'None of the above',
	},

	{
		option1: 'addEventListener',
		option2: 'document.querySelector',
		option3: 'getElementByID',
		option4: 'getElement by class name',
	}
];

function showQuestions(q, o) {
	document.getElementById("q1").innerHTML = q;
	document.getElementById("option-1").innerHTML = o.option1;
	document.getElementById("option-2").innerHTML = o.option2;
	document.getElementById("option-3").innerHTML = o.option3;
	document.getElementById("option-4").innerHTML = o.option4;

}

showQuestions(questions[0], answers[0])


document.getElementById("option-1").addEventListener('click', () => {
	if (question_no == 0) {
	
		question_no++;
		showQuestions(questions[question_no], answers[question_no]);
		console.log(question_no)
	}
	else if (question_no == 4) {
		showQuestions(questions[question_no], answers[question_no]);
		alert("clicked");

	}

})

document.getElementById("option-2").addEventListener('click', () => {
	if (question_no == 1) {

		question_no = 2;
		showQuestions(questions[question_no], answers[question_no]);

	}

})

document.getElementById("option-3").addEventListener('click', () => {
	if (question_no == 2) {
		question_no++;
		showQuestions(questions[question_no], answers[question_no]);
	}

	else if (question_no == 3) {
		question_no++;
		showQuestions(questions[question_no], answers[question_no]);
	}

})


