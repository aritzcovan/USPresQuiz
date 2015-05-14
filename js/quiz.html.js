var Quiz = function ($) {

    //private
    var presidents = [],
        randomPres,

        getRandomPresident = function () {
            $('#answer').val('');
            $('#resultText').text('');

            //selected a random pres
            randomPres = presidents[Math.floor(Math.random() * presidents.length)];

            //set the presidents name in the UI
            $('#presName').text(randomPres.name);
        },

        checkAnswer = function () {
            if ($('#answer').val() === randomPres.number) {
                $('#resultText').text('you are correct');
            } else {
                $('#resultText').text('whoops! that\'s incorrect...try again');
            }
        },

        loadPresidentList = function () {
            presidentsJson.forEach(function (pres) {
                presidents.push(new President(pres));
            });
        };

    //public
    return {
        init: function () {
            //load the president list
            loadPresidentList();

            //setup the click handlers
            $('#btnCheckAnswer').on('click', checkAnswer);
            $('#btnNewPresident').on('click', getRandomPresident)

            //get the first prez
            getRandomPresident();
        }
    }
};