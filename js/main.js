$(document).ready(function() {
    var gram = 'S:aSb|ab';
    
    var nt = ['S'];
    var sp = [];
    var cond = true;
    var aux;
    var ArrAux = [];
    var res = '';
    var data = [];


    for(let i = 0; i < nt.length; i++){
        ArrAux = [];
        
        gram = prompt('Informe '+ nt[i] + ':');

        sp = CatchGram(gram);

        ArrAux.push(sp[0]);

        sp = CatchExps(sp[1]);
        for (let j = 0; j < sp.length; j++){
            ArrAux.push(sp[j]);
        }

        data[i] = ArrAux;

        ArrAux = [];

        ArrAux = nonTerminal(gram);
        for (let i = 0; i < ArrAux.length; i++){
            if (nt.indexOf(ArrAux[i]) == -1){
                nt.push(ArrAux[i]);
            }else{
                continue;
            }
        }
    }    

    ArrAux = [];
    var st = [];

    st = CreateStack(data[0][randomize(data[0].length-1)]);


    while (cond) {
        aux = st.pop();
        if (aux == null){
            cond = false;
            continue;
        }
        if ((aux.charCodeAt(0) >= 65) && (aux.charCodeAt(0) <= 90)){
            for(let j = 0; j < data.length; j++){
                if(aux == data[j][0]){                    
                    ArrAux = CreateStack(data[j][randomize(data[j].length-1)]);                        
                }
            }
            for (let z = 0; z < ArrAux.length; z++){
                st.push(ArrAux[z]);
            }
        }else{
            res += aux;
        }            
    }
    document.getElementById('result').innerHTML = res;
    
}); 