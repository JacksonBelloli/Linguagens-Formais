function CatchGram (exp){
    var gram = [];

    gram = exp.split(':');

    return gram;
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
function nonTerminal (gram){
    var st = [];
    var res = [];
        st = gram.split('');
        for (let i = 0; i < st.length; i++){
            if ((st[i].charCodeAt(0) >= 65) && (st[i].charCodeAt(0) <= 90)){
                res.push(st[i]);
            }
        }
    return res;
}