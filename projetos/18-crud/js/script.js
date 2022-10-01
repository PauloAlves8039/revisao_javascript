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