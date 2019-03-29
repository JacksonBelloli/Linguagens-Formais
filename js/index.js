function CatchGram (exp){
    var nt = [];

    nt = exp.split(':');

    return nt;
};
function CatchExps (exp){

    var res = [];

    res = exp.split('|');

    return res;
};
function CreateStack (exp){

    var str = [];
    var stack = [];

    str = exp.split('');

    for (var i = str.length-1; i >= 0; i--){
        stack.push(str[i]);
    }
    return stack;
};
function randomize (QuantidadeExp){
    return Math.floor((Math.random() * QuantidadeExp) + 1);
};
function UpperCase (letter){
    var st;
        st = letter;
        if ((st.charCodeAt(0) >= 65) && (st.charCodeAt(0) <= 90)){
            return true;
        }
    return false;
}