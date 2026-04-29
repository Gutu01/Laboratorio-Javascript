function idade(){
    // O .value serve para pegar o conteúdo digitado dentro do getElementById()
    // O .document referencia a página inteira
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);

    if(idade >= 0 && idade <= 2){
        // O innerText altera o texto visual da tela para o que vêm depois de =
        document.getElementById("msg").innerText = nome + ", você é bebê!";
    }
    else if(idade >= 3 && idade <= 11){
        document.getElementById("msg").innerText = nome + ", você é uma criança!";
    }
    else if(idade >= 12 && idade <= 21){
        document.getElementById("msg").innerText = nome + ", você é jovem!";
    }
    else if(idade >= 22 && idade <= 64){
        document.getElementById("msg").innerText = nome + ", você é adulto(a)!";
    }
    else if(idade >= 65 && idade <= 100){
        document.getElementById("msg").innerText = nome + ", você é idoso(a)!";
    }
    else if(idade >= 101){
        document.getElementById("msg").innerText = nome + ", você é muito velhilho(a)!";
    }
    else{
        document.getElementById("msg").innerText = nome + ", você foi abortado!";
    }
}

function verificar(){
    let numero = document.getElementById("numero").value;

    if(numero > 0){
        document.getElementById("msg2").innerText = "O número é positivos!";
    }
    else if(numero <0){
        document.getElementById("msg2").innerText = "O número é negativo!";
    }
    else{
        document.getElementById("msg2").innerText = "O número é neutro!";
    }
}

function par_ou_impar(){
    let numero = Number(document.getElementById("numero2").value);

    if(numero % 2 == 0){
        document.getElementById("msg3").innerText = "Seu número é par!";
    }
    else{
        document.getElementById("msg3").innerText = "Seu número é impar!";
    }
}

function conta(){
    let numero = document.getElementById("numero_conta").value;
    let saldo = Number(document.getElementById("saldo").value);
    let debito = Number(document.getElementById("debito").value);
    let credito = Number(document.getElementById("credito").value);

    let saldo_atual = saldo - debito + credito;

    document.getElementById("msg4").innerText = `A conta ${numero} tem o saldo atual de R$${saldo_atual}`

    if(saldo_atual > 0){
        document.getElementById("msg5").innerText = "Saldo positivo";
    }
    else{
        document.getElementById("msg5").innerText = "Saldo negativo";
    }
}

function sexo(){
    let sexo = document.getElementById("sexo").value;

    if(sexo == "M" || sexo == "m"){
        document.getElementById("msg6").innerText = "Masculino!";
    }
    else if(sexo == "F" || sexo == "f"){
        document.getElementById("msg6").innerText = "Feminino!";
    }
    else{
        document.getElementById("msg6").innerText = "Você não existe";
    }
}

function maior(){
    let numero1 = Number(document.getElementById("num1").value);
    let numero2 = Number(document.getElementById("num2").value);
    let numero3 = Number(document.getElementById("num3").value);
    let maior = numero1, menor = numero1;
    
    if(numero2 > maior){
        maior = numero2;
    }
    else if(numero2 < menor){
        menor = numero2;
    }

    if(numero3 > maior){
        maior = numero3;
    }
    else if(numero3 < menor){
        menor = numero3;
    }

    document.getElementById("msg7").innerText = `O maior número é ${maior}\nO menor número é ${menor}`; 
}

function aumento(){
    let recebimento = Number(document.getElementById("recebimento").value);
    let percentual_aumento;
    let valor_aumento;
    let novo_salario;


    if(recebimento<=280 && recebimento > 0){
        percentual_aumento = 20; 
    }
    else if(recebimento > 280 && recebimento <= 700){
        percentual_aumento = 15;
    }
    else if(recebimento > 700 && recebimento <= 1500){
        percentual_aumento = 10;
    }
    else if(recebimento > 1500){
        percentual_aumento = 5;
    }

    valor_aumento = recebimento * percentual_aumento/100;
    novo_salario = valor_aumento + recebimento;

    document.getElementById("msg8").innerText = `Salário antes do reajuste: R$${recebimento}\nPercentual de aumento: %${percentual_aumento}\nValor do aumento R$${valor_aumento}\nO valor do novo salário é de R$${novo_salario}`;
}

function roubo(){
    let valor = Number(document.getElementById("valor").value);
    let horas = Number(document.getElementById("horas").value);
    let salario_bruto = valor * horas;
    let ir = 0;
    let ir_descontado = 0;
    let inss = salario_bruto * 10/100;
    let fgts = salario_bruto * 11/100;
    let total_descontado = 0;
    let salario_liquido = 0;

    if(salario_bruto >= 900 && salario_bruto < 1500){
        ir = 5;
    }
    else if(salario_bruto >= 1500 && salario_bruto < 2500){
        ir = 10;
    }
    else if(salario_bruto >= 2500){
        ir = 20;
    }

    ir_descontado = salario_bruto * ir/100;
    total_descontado = ir_descontado + inss;
    salario_liquido = salario_bruto - total_descontado;

    document.getElementById("msg9").innerText = `Salário bruto: R$${salario_bruto}\n(-)IR (%${ir}): R$${ir_descontado}\n(-)INSS (10%): R$${inss}\nFGTS (11%): R$${fgts}\nTotal de descontos: R$${total_descontado}\nSalário liquido: R$${salario_liquido}`;
}   

function triangulo(){
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);

    if(lado1 == lado2 && lado2 == lado3){
        document.getElementById("msg10").innerText = "Seu triângulo é equilátero!";
    }
    else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        document.getElementById("msg10").innerText = "Seu triâgulo é isósceles!";
    }
    else{
        document.getElementById("msg10").innerText = "Seu triâgulo é escaleno!";
    }
}