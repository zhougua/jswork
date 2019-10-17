//9×9的空表
let str = '<table border="1">'
for(let i=9;i<18;i++){
    str += '<tr>'
    for(var j=1;j<=9;++j){
        //拼接单元格
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table1').innerHTML = str


//倒九九乘法空表
str = '<table border="2">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str +='<tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

//倒九九乘法表

str = '<table border="3">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
    
        str += '<td>' + j + '*' + i + '=' + ( j * i ) + '<td>'
    }
    str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table3').innerHTML = str