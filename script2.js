var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var result = JSON.parse(req.response);
    for(let i=0;i<result.length;i++)
    {
        console.log(result[i].name + " " + result[i].region + " " + result[i].subregion + " " + result[i].population);
    }
    
}