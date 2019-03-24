$(document).ready(function() {
    var cond = true;
    var nt = ['S'];
    var exp = [];
    var first = '';
    var i = 0;

    while (cond) {
        for (var index = 0; index <= nt.length-1; index++) {
            //console.log(nt[index]);
            first = prompt('Digite ' + nt[index] + ':');
            exp = first.split('');
        }
        for (var index = 0; index <= exp.length-1; index++) {
            if ((index == 0) || (index == 1)) {
                continue;
            }
            if ((exp[index].charCodeAt(0) >= 65) && (exp[index].charCodeAt(0) <= 90)){                
                nt [i] = exp[index];

                i++;
            }else if (index == exp.length){
                console.log('passou aqui!');
                cond = false;
                break;
            }
        }   
    }
}); 