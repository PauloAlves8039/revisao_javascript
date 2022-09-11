const salvar = function () {
    let texto = document.getElementById("texto").value;
    let titulo = document.getElementById("titulo").value;
    
    let blob = new Blob([texto], 
        {
            type: "text/plain;charset=utf-8"
        });
    
        saveAs(blob, titulo + criandoFormato());
}

const criandoFormato = function () {
    let formato = document.getElementById("formato").value;

    switch (formato) {
      case ".txt":
        ".txt";
        break;
      case ".doc":
        ".doc";
        break;
      case ".pdf":
        ".pdf";
        break;
      default:
        alert("Formato inválido!");
    }

    return formato;
}

const cancelar = function () {
    window.location.reload();
}