function gen() {
    let arrran = new Array(10);
    for (let i=0; i<arrran.length; i++) {
        let min=-10;
        let max=10;
        arrran[i]=Math.floor(Math.random()*(max-min+1))+min;
    }
    document.querySelector('#arrran').innerHTML = arrran;

    let minres = Math.min(...arrran);
    document.querySelector('#minres').innerHTML = minres;

    let maxres = Math.max(...arrran);
    document.querySelector('#maxres').innerHTML = maxres;
    
    let meanres = sumres()/arrran.length;
    document.querySelector('#meanres').innerHTML = meanres;
        
    function sumres() {
        let sum = 0;
        for (let i = 0; i < arrran.length; i++){
            sum += arrran[i];
        }
        return sum;
    }
    document.querySelector('#sumres').innerHTML = sumres();
    
    function mulres() {
        let mul = 1;
        for (let i = 0; i < arrran.length; i++){
            mul *= arrran[i];
        }
        return mul;
    }
    document.querySelector('#mulres').innerHTML = mulres();
}