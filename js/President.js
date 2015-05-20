var President = function(dto){
    this.name = dto.name;
    this.number = dto.num;
};




//simulate a web service call to get some data
var presidentsJson = function(){
    return [
        {num: '1', name: 'george washington'},
        {num: '2', name: 'john adams'},
        {num: '3', name: 'thomas jefferson'},
        {num: '4', name: 'james madison'},
        {num: '5', name: 'james monroe'},
        {num: '6', name: 'john quincy adams'},
        {num: '7', name: 'andrew jackson'},
        {num: '8', name: 'martin van buren'},
        {num: '9', name: 'william henry harrison'},
        {num: '10', name: 'john tyler'},
        {num: '11', name: 'james k polk'},
        {num: '12', name: 'zachary taylor'},
        {num: '13', name: 'millard fillmore'},
        {num: '14', name: 'franklin pierce'},
        {num: '15', name: 'james buchanan'},
        {num: '16', name: 'abraham lincoln'},
        {num: '17', name: 'andrew johnson'},
        {num: '18', name: 'ulysses s grant'},
        {num: '19', name: 'rutherford b hayes'},
        {num: '20', name: 'james a garfield'},
        {num: '21', name: 'chester arthur'},
        {num: '22', name: 'grover cleveland'},
        {num: '23', name: 'benjamin harrison'},
        {num: '24', name: 'grover cleveland'},
        {num: '25', name: 'william mckinley'},
        {num: '26', name: 'theodore roosevelt'},
        {num: '27', name: 'william howard taft'},
        {num: '28', name: 'woodrow wilson'},
        {num: '29', name: 'warren g harding'},
        {num: '30', name: 'calvin coolidge'},
        {num: '31', name: 'herbert hoover'},
        {num: '32', name: 'franklin d roosevelt'},
        {num: '33', name: 'harry s truman'},
        {num: '34', name: 'dwight d eisenhower'},
        {num: '35', name: 'john f kennedy'},
        {num: '36', name: 'lyndon b johnson'},
        {num: '37', name: 'richard nixon'},
        {num: '38', name: 'gerald ford'},
        {num: '39', name: 'jimmy carter'},
        {num: '40', name: 'ronald reagan'},
        {num: '41', name: 'george hw bush'},
        {num: '42', name: 'william jefferson clinton'},
        {num: '43', name: 'george w bush'},
        {num: '44', name: 'barrack hussein obama'}];

}();