const income=document.querySelector(".income");
const result=document.querySelector(".result");
const extra=document.querySelector(".extra");
const age=document.querySelector(".age");
const duration=document.querySelector(".duration");
const calculate=document.querySelector("#calculate");
calculate.addEventListener("click",(e)=>{
    e.preventDefault;
    if((parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value)<=800000){
        result.value=(parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value);
    }
    else if((parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value)>800000 && age.value<40){
        let inc=(parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value);
        console.log(inc);
        result.value=inc-((30/100)*inc);
    }
    else if((parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value)>800000 && age.value<40){
        let inc=(parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value);
        console.log(inc);
        result.value=inc-((30/100)*inc);
    }
    else if((parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value)>800000 && age.value>60){
        let inc=(parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value);
        console.log(inc);
        result.value=inc-((10/100)*inc);
    }
    else if((parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value)>800000 && (age.value>=40 || age.value<=60)){
        let inc=(parseInt(income.value)+parseInt(extra.value))-parseInt(duration.value);
        console.log(inc);
        result.value=inc-((40/100)*inc);
    }
});