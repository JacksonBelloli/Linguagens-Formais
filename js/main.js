$(document).ready(function() {
    const gram = 'S:aSb|ab';
    
    var nt = [];
    var cond = true;
    var aux;
    var ArrAux = [];
    var res;
    var tam;

    nt = CatchGram(gram);

    let data = new Array([nt[0]]);

    nt = CatchExps(nt[1]);
    for (var i = 0; i <= nt.length-1; i++){
        data [0].push(nt[i]);
    }
    let st = [];

    st = CreateStack(data[0][randomize(nt.length)]);


    while (UpperCase(st[st.length-1])) {
            aux = st.pop();
            if ((aux.charCodeAt(0) >= 65) && (aux.charCodeAt(0) <= 90)){
                for(var j = 0; j <= data.length-1; j++){
                    if(aux == data[j][0]){
                        ArrAux = CreateStack(data[j][randomize(data[j].length-1)]);                        
                    }
                }
                for (var z = 0; z <= ArrAux.length-1; z++){
                    st.push(ArrAux[z]);
                }
            }else{
                res += aux;
            }
    }
    alert(res);

    /* var cond = true;
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
    }*/
}); 