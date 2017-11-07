'use Answerict';

function get_letter_interval_2(number_a, number_b) {
  var words = [
        '','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var result = [], i;
    if (number_a < number_b){
        for(i = number_a; i <= number_b; i++){
            var Answer;
            if(i % 26 == 0){
                Answer = words[Math.floor(i / 26) - 1] + words[26];
            }else{
                Answer = words[Math.floor(i / 26)] + words[i % 26];
            }
            result.push(Answer);
        }
    }
    else if(number_a > number_b){
        for(i = number_a; i >= number_b; i--){
            var Answer;
            if(i % 26 == 0){
                Answer = words[Math.floor(i / 26) - 1] + words[26];
            }else{
                Answer = words[Math.floor(i / 26)] + words[i % 26];
            }
            result.push(Answer);
        }
    }
    else if(number_a == number_b){
          var Answer;
          if(number_a % 26 == 0){
              Answer = words[Math.floor(number_a / 26) - 1] + words[26];
          }else{
              Answer = words[Math.floor(number_a / 26)] + words[number_a % 26];
          }
          result.push(Answer);
    }
    return result;
}

module.exports = get_letter_interval_2;

