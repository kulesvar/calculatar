let inpt = document.querySelector("input");
let btn = document.querySelectorAll("button");
let string = "";

let arr  = Array.from(btn)
arr.forEach(button=>
    {
     button.addEventListener("click",(x)=>
    {
       if(x.target.innerHTML == "=")
        {
          string = eval(string);
          inpt.value = string;
        }
        else if(x.target.innerHTML =="AC")
            {
               string="";
               inpt.value = string;
            }
            else if(x.target.innerHTML =="DEL")
                {
                   string = string.substring(0,string.length -1)
                   inpt.value = string;
                }
          else
          {
             string += x.target.innerHTML;
             inpt.value = string;
          }
    })
    }
)
