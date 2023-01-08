var arr=[];
    function selected (number) {
        arr.push(number);}
    
       function apply(app) {if (arr[0]>0&&app==0)
    {document.getElementById("selected").innerHTML=`You selected ${arr[0]} out of 5`;
    document.getElementById("container").style.display="none";
    document.getElementById("container2").style.display="block"}
    else {alert("Please, rate us")}}
