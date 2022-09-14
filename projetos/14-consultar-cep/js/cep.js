const preencherFormulario = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value.replace("-", "");
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("endereco").value = "CEP não encontrado!";
    } else {
      preencherFormulario(endereco);
    }
  } else {
    document.getElementById("endereco").value = "CEP incorreto!";
  }
};

const limparFormulario = () => {
  window.location.reload();
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);

const cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", limparFormulario);
