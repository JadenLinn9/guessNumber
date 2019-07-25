function createAnswer(n=3){  //預設3碼
    let poker = [];
    for (let i=0; i<10; i++) poker[i] = i;
    for (let i = poker.length-1; i>0; i--){
        let rand = parseInt(Math.random()*(i+1));
        [poker[i], poker[rand]] = [poker[rand], poker[i]];
    }

    let ret = '';               
    for(let i = 0;i<n;i++){
        ret += poker[i];
    }
    return ret;
}

function checkAB(ans,gus) {
    let a = 0,b = 0;
    for (let i = 0;i<gus.length;i++){
        if (gus.charAt(i) == ans.charAt(i)){    //charAt();完全位數的比對
            a++;
        }else if (ans.indexOf(gus.charAt(i)) >= 0) {
            b++;
        }
    }
    return `${a}A${b}B`;

}