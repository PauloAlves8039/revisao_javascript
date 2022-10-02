const openModal = function () {
    document.getElementById('modal').classList.add('active');
}

const closeModel = function () {
    clearFields();
    document.getElementById('modal').classList.remove('active');
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [];
const setLocalStorage =(dbCliente) => localStorage.setItem('db_client', JSON.stringify(dbCliente)); 

const createCliente = function (client) {
    const dbCliente = getLocalStorage();
    dbCliente.push(client);
    setLocalStorage(dbCliente);
}

const readCliente = function () {
    return getLocalStorage();
}

const isValidField = function () {
    return document.getElementById('form').reportValidity();
}

const clearFields = function () {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(field => field.value = '');
    document.getElementById('nome').dataset.index = 'new';
}

const saveClient = function () {
    debugger

    if (isValidField()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value,
        }

        constindex = document.getElementById('nome').dataset.index

        if (index == 'new') {
            createCliente(client);
            updateTable();
            closeModel();
        }else {
            updateTable();
            closeModel();
        }
    }
}

const createRow = function (client, index) {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = function () {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = function () {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow)
}