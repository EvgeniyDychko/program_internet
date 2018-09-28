var row = 9, ceil = 9
var matrix = [], sumRow = [], sumCeil = [], sum = []

for (let i = 0; i < row; i++) {
    matrix[i] = [];
    sumRow[i] = 0
    for (let j = 0; j < ceil; j++) {
        matrix[i][j] = Math.floor(Math.random()*100);
        sumRow[i]+=matrix[i][j];
    } 
}
for (let j = 0; j < ceil; j++) {
    sumCeil[j] = 0;
    for (let i = 0; i < row; i++) {
        sumCeil[j]+=matrix[i][j];
    } 
    sum[j] = sumCeil[j] + sumRow[j]
}
for (let i = 0; i < row; i++) {
    for (let j = 0; j < ceil; j++) {
       if (i==j) {
           matrix[i][j] = sum[i]
       }
    } 
}


window.onload = function() {
    var html = '<table align="center">';
    for (let i = 0; i < row; i++) {
        html+='<tr>'
        for (let j = 0; j < ceil; j++) {
           html += '<td>' + matrix[i][j] + '</td>'
           }
        html+='</tr>'
        } 
    html+='</table>'
    document.getElementById('result').innerHTML = html;
}