document.querySelector(".button").addEventListener("click",()=>{
    const input_1_1 =document.querySelector(".input-1-1").value;
    const input_1_2 = document.querySelector(".input-1-2").value;
    const input_1_3 = document.querySelector(".input-1-3").value;
    const input_1_4 = document.querySelector(".input-1-4").value;
    const input_2_1 = document.querySelector(".input-2-1").value;
    const input_2_2 = document.querySelector(".input-2-2").value;
    const input_2_3 = document.querySelector(".input-2-3").value;
    const input_2_4 = document.querySelector(".input-2-4").value;
    var hariu1_1 = input_1_1*input_2_1+input_1_2*input_2_2+input_1_3*input_2_3+input_1_4*input_2_4;
    var hariu1_2 = Math.pow(input_1_1, 2)*input_2_1+Math.pow(input_1_2, 2)*input_2_2+Math.pow(input_1_3, 2)*input_2_3+Math.pow(input_1_4, 2)*input_2_4;
    var hariu1_3 = (hariu1_2)-(hariu1_1*hariu1_1);
    var hariu1_4 = Math.sqrt(hariu1_3);
    document.querySelector(".hariu-1-1").innerHTML = `E(~)=${input_1_1}*${input_2_1}+${input_1_2}*${input_2_2}+${input_1_3}*${input_2_3}+${input_1_4}*${input_2_4}=${hariu1_1}`;
    document.querySelector(".hariu-1-2").innerHTML = `E(~^2)=${input_1_1}^2*${input_2_1}+${input_1_2}^2*${input_2_2}+${input_1_3}^2*${input_2_3}+${input_1_4}^2*${input_2_4}=${hariu1_2}`;
    document.querySelector(".hariu-1-3").innerHTML = `D=(${hariu1_2})-(${hariu1_1}^2)=${hariu1_3}=${hariu1_4}`;

    })
    
    document.querySelector(".delete-value").addEventListener("click",()=>{
        document.querySelectorAll("input").forEach(e=> {
            e.value="";
        });
        document.querySelector(".hariu-2-1").innerHTML ="";
        document.querySelector(".hariu-2-2").innerHTML = "";
        document.querySelector(".hariu-2-3").innerHTML = "";
        document.querySelector(".hariu-2-4").innerHTML = "";
        document.querySelector(".hariu-1-1").innerHTML = "";
    document.querySelector(".hariu-1-2").innerHTML = "";
    document.querySelector(".hariu-1-3").innerHTML = "";
    document.querySelector(".hariu-1-4").innerHTML = "";
    
    })