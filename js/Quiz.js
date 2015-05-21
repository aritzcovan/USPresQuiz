var Quiz = function($){
    this.presidents = [];
    this.randomPres = undefined;
    this.loadPresidentList();
    this.getRandomPresident();

    //add the event listener to the buttons
    //document.getElementById('btnCheckAnswer').addEventListener('click', this.checkAnswer.bind(this));
    //document.getElementById('btnNewPresident').addEventListener('click', this.getRandomPresident.bind(this));

    //jQuery way
    $('#btnCheckAnswer').on('click', $.proxy(this.checkAnswer, this));
    $('#btnNewPresident').on('click', $.proxy(this.getRandomPresident, this));

    
    //$('#btnCheckAnswer').on('click', this.checkAnswer.bind(this));
    //$('#btnNewPresident').on('click', this.getRandomPresident.bind(this));

};

Quiz.prototype.loadPresidentList = function() {
    //for(var i = 0; i<presidentsJson.length; i++){
    //    this.presidents.push(new President(presidentsJson[i]));
    //}
    presidentsJson.forEach(function (pres) {
        this.presidents.push(new President(pres));
    }.bind(this));
};

Quiz.prototype.getRandomPresident = function() {
    //reset the UI values to blank
    //document.getElementById('answer').value = '';
    //document.getElementById('resultText').innerHTML = '';
    $('#answer').val('');
    $('#resultText').text('');

    //selected a random pres
    this.randomPres = this.presidents[Math.floor(Math.random() * this.presidents.length)];

    //set the presidents name in the UI
    //document.getElementById('presName').innerHTML = this.randomPres.name;
    $('#presName').text(this.randomPres.name);
};

Quiz.prototype.checkAnswer = function() {
    //var result = document.getElementById('resultText');
    //var num = document.getElementById('answer').value;
    var result = $('#resultText');
    var num = $('#answer').val();
    if (num === this.randomPres.number) {
        result.text('you are correct');
    } else {
        result.text('whoops! that\'s incorrect...try again');
    }
};
