const validar = () => {
  let cpf = document.getElementById("cpf").value;

  if (validarCPF(cpf)) {
    alert("CPF Válido!");
  } else {
    alert("CPF Inválido!");
  }
};

const validarCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, "");

  if (!validarTamanhoCPF(cpf) || !validarDigitosIguais(cpf) || !validarDigitosVerificadores(cpf)) {
    return false;
  }
  return true;
};

const validarTamanhoCPF = (cpf) => {
  let resultadoTamanhoCPF = cpf.length === 11;
  return resultadoTamanhoCPF;
};

const validarDigitosIguais = (cpf) => {
  let resultadoDigitosIguais = !/^(\d)\1{10}$/.test(cpf);
  return resultadoDigitosIguais;
};

const validarDigitosVerificadores = (cpf) => {
  const calculaDigitoVerificador = (cpf, peso) => {
    let soma = 0;
    for (let i = 0; i < cpf.length ; i++) {
      soma += parseInt(cpf.charAt(i)) * peso--;
    }
    const resto = soma % 11;
    return (resto < 2) ? 0 : 11 - resto;
  };

  const digitoVerificador1 = calculaDigitoVerificador(cpf.substring(0, 9), 10);
  const digitoVerificador2 = calculaDigitoVerificador(cpf.substring(0, 10), 11);

  return parseInt(cpf.charAt(9)) === digitoVerificador1 && parseInt(cpf.charAt(10)) === digitoVerificador2;
};

const limparCampo = () => {
  window.location.reload();
};
