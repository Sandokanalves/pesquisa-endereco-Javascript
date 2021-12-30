


const limparFormulario = (result) =>{
    document.getElementById('result').value = '';
}
const limpaCep = (cep) =>{
    document.getElementById('cep').value='';
}

const mostraResultado = (infoCep) =>{

    document.getElementById('result').value = 
     infoCep.logradouro + ", " +
     infoCep.bairro + ", " +
     infoCep.localidade + " - " +
     infoCep.uf;    
   
}



const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


const pesquisarCep = async() => {
  limparFormulario();
  
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
    const dados = await fetch(url);
    const infoCep = await dados.json();
    if (infoCep.hasOwnProperty('erro')){
        result.value = 'CEP não encontrado!';
    }else {
        return mostraResultado(infoCep);
    }
   
    }else{
        result.value = 'CEP Inválido!';
    }
}

const result = document.getElementById('result');

const cep = document.getElementById('cep').addEventListener('focusout', pesquisarCep);
