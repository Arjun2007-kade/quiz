class Question {
    constructor(){
        this.title = createElement("h2");
        this.question = createElement("h2");
        this.option1 = createElement("h2");
        this.option2 = createElement("h2");
        this.option3 = createElement("h2");
        this.option4 = createElement("h2");
        this.button = createButton("Submit");
        this.input1 = createInput("Enter your name!");
        this.input2 = createInput("Type your answer!");
        this.yeet = createElement("h2");
        this.correct = createElement("h2")
    }

    hide(){
        this.title.hide();
        this.question.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }


    display(){
    this.title.html("Last words of Iron Man in EndGame");
    this.title.position(250,50);

    this.question.html("");
    this.question.position(200,50);
    this.option1.html("1: Thanos you are over!");
    this.option1.position(50,100);
    this.option2.html("2: I'am Iron Man.");
    this.option2.position(50,150);
    this.option3.html("3: Bye Avengers.");
    this.option3.position(50,200);
    this.option4.html("4: Sorry, I didn't watch movie😭😭😭");
    this.option4.position(50,250);
    this.input1.position(140,340);
    this.input2.position(340,340)
    this.button.position(300, 400);
    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      person.answer = this.input2.value();
      person.name = this.input1.value();
      contestantCount+=1;
      person.index = contestantCount;
      person.update();
      person.updateCount(contestantCount);
      this.yeet.html("Your choice: " + person.answer)
      this.yeet.position(330, 300);
      if(person.answer==="2"){
        //fill("green");
        this.correct.html("CORRECT!!!");
        this.correct.position(400,330);
      }
      else{
        //fill("red");
        this.correct.html("WRONG!!!");
        this.correct.position(400,330);
      }
    });




}


}//end of js file