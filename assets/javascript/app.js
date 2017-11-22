$(document).ready(function() {


 //var current_question;
 var current_question_obj_ref;
 var answered_flg;
 var correct_answer = 0;
 var incorrect_answer = 0;
 var question_counter = 0; 


var questions = {
    question0: {
        image: "assets/images/Wildcat.jpg",
        choices: ['Wildcat', 'ShotGun', 'Pistol', 'I-Formation'],
        answer: 'Wildcat'
    },
    question1: {
        image: "assets/images/Pistol.jpg",
        choices: ['Wildcat', 'Wing-T', 'Pistol', 'Goalline'],
        answer: 'Pistol'
    },
   question2: {
        image: "assets/images/I-Formation.jpg",
        choices: ['Wildcat', 'Wing-T', 'Pistol', 'I-Formation'],
        answer: 'I-Formation'
    },
   question3: {
        image: "assets/images/Goalline.jpg",
        choices: ['Ace', 'Goalline', 'Pistol', 'I-Formation'],
        answer: 'Goalline'
    },
   question4: {
        image: "assets/images/Ace.jpg",
        choices: ['Wildcat', 'Goalline', 'Ace', 'I-Formation'],
        answer: 'Ace'
    },
    question5: {
        image: "assets/images/34.jpg",
        choices: ['3-4', '4-3', '4-4', '5-2'],
        answer: '3-4'
    },
    question6: {
        image: "assets/images/43.jpg",
        choices: ['3-4', '4-3', '4-4', '5-2'],
        answer: '4-3'
    },
    question7: {
        image: "assets/images/44.jpg",
        choices: ['3-4', '4-3', '4-4', '5-2'],
        answer: '4-4'
    },
    question8: {
        image: "assets/images/52.jpg",
        choices: ['3-4', '4-3', '4-4', '5-2'],
        answer: '5-2'
    },
    question9: {
        image: "assets/images/53.jpg",
        choices: ['3-4', '5-3', '4-4', '5-2'],
        answer: '5-3'
    },
     question10: {
        image: "assets/images/62.jpg",
        choices: ['3-4', '5-3', '6-2', '5-2'],
        answer: '6-2'
    }

};





//////////////////////////////////////////////////////////////////////////////////////////

function render_area() {
		var render_area_div = $("<div class='col-md-12  text-center' id='render_area_div'>");

		$("#renderarea").html(render_area_div);

}


//////////////////////////////////////////////////////////////////////////////////////////

function render_question(current_question) {

	    current_question_obj_ref= 'question' + current_question;

		$("#renderarea").html("<div class='col-md-12  text-center question'>");
		$(".question").html("<img src=" + questions[current_question_obj_ref].image + " width='400px'>");
		console.log(questions[current_question_obj_ref].image);
		$("#renderarea").append("<div class='text-center choices'>");
	    $(".choices").html("<ol type='A' id='answer_choices_list'>");

     
	    for (i = 0; i < questions[current_question_obj_ref].choices.length; i++) { 
	         $("#answer_choices_list").append($("<li  class='list_elements text-left' id=question_list_element" + i + " >").html(questions[current_question_obj_ref].choices[i]));
	       
	      }

	       
    console.log(current_question_obj_ref);

}

//////////////////////////////////////////////////////////////////////////////////////////

function evaluate_answer(evaluate_answer){

	
   
 if (evaluate_answer === questions[current_question_obj_ref].answer  ) {
		 correct_answer++;

		 question_counter++;

		 console.log("evaluate_answer:"+evaluate_answer);
		 console.log("correct");
		 console.log("correct_answer:"+correct_answer);
		 console.log("question_counter:"+question_counter);
		 render_question(question_counter);

 } else {
 	     incorrect_answer++;
 	     question_counter++;
 	      console.log("evaluate_answer:"+evaluate_answer);
		 console.log("correct");
		 console.log("correct_answer:" + incorrect_answer);
		 console.log("question_counter:" +question_counter);
 	     render_question(question_counter);

 }

}

//////////////////////////////////////////////////////////////////////////////////////////


function main() {

	render_area() ;
   

       if (question_counter===0){
    

      render_question(0);

    };

    
    
  
				    $(".container-fluid").on("click", function(event) {


				    	    


				    	    if (questions[current_question_obj_ref].choices.indexOf(event.target.innerHTML) > -1)

				    	    {
				    	    var event_target= event.target;
				    	    console.log("hello: "+ event.target.innerHTML);
                             answer = event.target.innerHTML;
				    	     evaluate_answer(answer);

				    	 }


				     
				    });

			



};

main();

































});