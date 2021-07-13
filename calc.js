

function calc()
{
    var diameter=document.getElementById("diameter").value;
    var model=document.getElementById("model").value;
    var result=document.getElementById("result");

    diameter=parseFloat(diameter);
    model=parseFloat(model);

    var ans=(model/(diameter-(2*model)));
    ans=Math.atan(ans)*(180/Math.PI)
    result.innerHTML=!isNaN(ans) ? ans: 0;
}
