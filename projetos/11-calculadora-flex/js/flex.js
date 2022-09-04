const calcularFlex = () => {
    let etanol = parseFloat(frmFlex.etanol.value.replace(",","."));
    let gasolina = parseFloat(frmFlex.gasolina.value.replace(",","."));

    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="../../assets/imagens/etanol.png";
    }else{
        document.getElementById("status").src="../../assets/imagens/gasolina.png";
    }
}

const reiniciar = () => {
    document.getElementById("status").src="../../assets/imagens/neutro.png";
}