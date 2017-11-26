$(document).ready(function() {


 //var current_question;
 var current_question_obj_ref;
 var timeout_flg ='n';
 var correct_answer = 0;
 var incorrect_answer = 0;
 var question_counter = 0; 
 var time;
 var init_time=5;
 var click='n';


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

function render_question(current_question) {
     
 //if (question_counter<11) {
	    current_question_obj_ref= 'question' + current_question;

		$(".question").html("<img src=" + questions[current_question_obj_ref].image + " width='400px'  class='question_img'>");
		$("#renderarea").append("<div class='text-center choices'>");
	    $(".choices").html("<ol type='A' id='answer_choices_list'>");


	    for (i = 0; i < questions[current_question_obj_ref].choices.length; i++) { 
	         $("#answer_choices_list").append($("<li  class='list_elements text-left' id=question_list_element" + i + " >").html(questions[current_question_obj_ref].choices[i]));
	       
	      }
	 // } //else {
	  	
	  //	timeout ();
	  //}
	 
  } 

 

//////////////////////////////////////////////////////////////////////////////////////////

function evaluate_answer(evaluate_answer){

	
   
 if (evaluate_answer === questions[current_question_obj_ref].answer  ) {
		 correct_answer++;
		 question_counter++;

		
		 $("#correct").html(correct_answer);

		 render_question(question_counter);
		




 } 

 else  {
 	     incorrect_answer++;
 	     question_counter++;
 	      console.log("evaluate_answer:"+evaluate_answer);

		 $("#incorrect").html(incorrect_answer);

 	     render_question(question_counter);
 	     console.log("Hello1:" + questions[current_question_obj_ref].answer);

 	


 };

}




//////////////////////////////////////////////////////////////////////////////////////////


 function timeout () {          

 setTimeout(rec_time, 1500);



			function rec_time() {  
			  	
			  	    $("#timer").html(time);  
			    
			    time--; 

			    console.log(question_counter);

			  if( question_counter===11 && timeout_flg!=='y') {
			     	clearTimeout(rec_time);
			     	timeout_flg ='y';
                    console.log("im here");

			     	$("#timer").html(30); 
			     	game_start();
			     	
			
			 } else  {
			                   
			     if (time>-1) {  

			       timeout();            
			     }   

			      if(time===-1 && click==='y' ) {
			      	clearTimeout(rec_time);
			     	time=init_time;
			     	click='n';


			 }

			     if(time===-1 && click==='n' ) {
			     	clearTimeout(rec_time);
			     	
			     	time=init_time;
			     	incorrect_answer++;
			    	question_counter++;
			     	$("#incorrect").html(incorrect_answer);
			     	timeout();
			
			 }
			
			 }   
			}
 

}
 


//////////////////////////////////////////////////////////////////////////////////////////



function main() {




       if (question_counter===0){
       	  time=init_time;

          timeout();
        $('#timer').html(time);
      render_question(0);



    };

    
    
  
				    $("#renderarea").on("click", function(event) {

                             


                            click='y';
                            time=0;
                             timeout();
                              

				    	    if (questions[current_question_obj_ref].choices.indexOf(event.target.innerHTML) > -1)

				    	    {

				    	    var event_target= event.target;
				    	    console.log("hello: "+ event.target.innerHTML);
                             answer = event.target.innerHTML;
				    	     evaluate_answer(answer);



				    	 }


				     
				    });

			



};


function game_start() {

   var $play_button= $('<input/>').attr({ type: 'button', id:'play_button', class: "btn-primary btn-lg", value:'Play'});
   

   $("#renderarea").append($play_button);


		  
		  //question_counter = 0; 
		  $(".question_img").remove();
		  $(".choices").remove();
		   $("#timer").hide();
		  //$('#timer').html(0);
		  
		 // $("#timer").html(0);


  $("#play_button").on("click", function(event) {
                             $play_button.remove();
							 question_counter=0;
							 correct_answer = 0;
		  					 incorrect_answer = 0;
		  					 $("#incorrect").html("0");
		  					 $("#correct").html("0");


		  					 timeout_flg='n';
		  					 $("#timer").show();
		  					 

							 main();



				     
				   });


};


game_start();



























});