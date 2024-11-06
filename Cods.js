// Salvando variáveis
const selectMoedaOrigem = document.getElementById("moedaOrigem");
const selectMoedaFinal = document.getElementById("moedaFinal");
const botaoConfirm = document.getElementById("confirmarSelecao");
const cifraOrigem = document.getElementById("cifraOrigem");
const cifraFinal = document.getElementById("cifraFinal"); 

// Capturando informações
botaoConfirm.addEventListener('click', () => {
    const moedaOrigem = selectMoedaOrigem.value;
    const moedaFinal = selectMoedaFinal.value;

    if (!moedaOrigem || !moedaFinal) {
        alert('Selecione ambos os campos!');
        alterarElementos(moedaOrigem, moedaFinal); 
    } else {
        console.log(`Moeda origem recebida: ${moedaOrigem}`);
        console.log(`Moeda final recebida: ${moedaFinal}`);
        alterarElementos(moedaOrigem, moedaFinal); 
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    }
});

// Alterando aspectos visuais
function alterarElementos(moedaOrigem, moedaFinal) {
const moedas = {
    "1": "USD", 
    "2": "EUR", 
    "3": "GBP", 
    "4": "CHF", 
    "5": "BRL"  
};
cifraOrigem.innerText = moedas[moedaOrigem] || "$"; 
cifraFinal.innerText = moedas[moedaFinal] || "$";}

const taxasDeCambio = {
        "1": { 
            "2": 0.94, 
            "5": 5.20, 
            "3": 0.82, 
            "4": 0.93,
        },
        "2": { 
            "1": 1.06, 
            "5": 5.53, 
            "3": 0.87, 
            "4": 0.99, 
        },
        "5": { 
            "1": 0.19, 
            "2": 0.18, 
            "3": 0.16, 
            "4": 0.18, 
        },
        "3": {
            "1": 1.22,
            "2": 1.15,
            "5": 6.33,
            "4": 1.14,
        },
        "4": {
            "1": 1.08,
            "2": 1.01,
            "5": 5.53,
            "3": 0.88,
        }
    };

    function processarValor() {
        const inputOrigem = document.getElementById('inputOrigem');
        const inputFinal = document.getElementById('inputFinal'); 
        const valorOrigem = parseFloat(inputOrigem.value);
        const moedaOrigem = document.getElementById('moedaOrigem').value; 
        const moedaFinal = document.getElementById('moedaFinal').value;   
    
        if (isNaN(valorOrigem)) {
            alert("Por favor, insira um valor numérico válido.");
            inputOrigem.value = ''; 
            inputFinal.value = '';  
            return;
        }
        if (moedaOrigem === moedaFinal) {
            inputFinal.value = valorOrigem.toFixed(2);
            return;
        }
        if (taxasDeCambio[moedaOrigem] && taxasDeCambio[moedaOrigem][moedaFinal]) {
            const valorFinal = valorOrigem * taxasDeCambio[moedaOrigem][moedaFinal];
            inputFinal.value = valorFinal.toFixed(2); 
        } else {
            alert("Conversão não disponível para as moedas selecionadas.");
            inputFinal.value = '';  
        }
    }
const inputOrigem = document.getElementById('inputOrigem');
inputOrigem.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        processarValor(); 
    }
});