let pi = {
    result: 0,
    setPi: function(){
        this.result = prompt("Input value for PI: ");
    },
    deletePi: function(){
        this.result = 0;
    },
    monteCarlo: function(){
        let CIRCLE_RADIUS = 1
        let TOTALPOINTS = 100000000

        let circlePointsCount = 0

        for (let index = 0; index < TOTALPOINTS; index++) {
            let x = Math.random();
            let y = Math.random();
        
            if (Math.pow(x,2) + Math.pow(y,2) <= Math.pow(CIRCLE_RADIUS,2)){
                circlePointsCount++;
            }
        }

        this.result = 4 * circlePointsCount / TOTALPOINTS
        return this.result
    },
    formulaVieta: function(){
        let massOfNumbers = [2/(Math.sqrt(2)), 2/(Math.sqrt(2+Math.sqrt(2))), 2/(Math.sqrt(2+Math.sqrt(2 + Math.sqrt(2)))), 
                             2/(Math.sqrt(2+Math.sqrt(2 + Math.sqrt(2 + Math.sqrt(2))))),
                             2/(Math.sqrt(2+Math.sqrt(2 + Math.sqrt(2 + Math.sqrt(2 + Math.sqrt(2))))))]
        let sum = 2;
        for (let index = 0; index < massOfNumbers.length; index++) {
            sum*=massOfNumbers[index];
        }
        this.result = sum;
        return this.result
    },
    multipleFormula: function(){
        let TOTALNUMBERS = 1000
        let sum = 1
        for (let i = 1; i < TOTALNUMBERS; i++) {
            sum *= Math.pow(i,2) / (Math.pow(i,2) - Math.pow(1/6,2))
        }
        this.result = 6 * 0.5 * sum
        return this.result
        
    }
}

window.onload = function(){
    var html = `<table align = 'center'>
            <th> Monte-Carlo </th>
            <th> Vieta's Formula </th>
            <th> Multiple Formula </th>
            <th> Math.PI </th>
            <tr>
            <td id='1'></td>
            <td id='2'></td>
            <td id='3'></td>
            <td id='4'></td>
            </tr>
            </table>`
    document.getElementById('result').innerHTML = html;
    document.getElementById('1').innerHTML = pi.monteCarlo().toFixed(6);
    document.getElementById('2').innerHTML = pi.formulaVieta().toFixed(6);
    document.getElementById('3').innerHTML = pi.multipleFormula().toFixed(6);
    document.getElementById('4').innerHTML = `<strong> ${Math.PI.toFixed(6)} </strong>`;
}
