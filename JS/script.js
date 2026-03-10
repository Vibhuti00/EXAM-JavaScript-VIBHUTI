const inputs = document.querySelectorAll('#productForm .products');
inputs.forEach((input) => 
{
    input.addEventListener('input', (e) => 
    {
        const { name, value } = e.target;
        data = { ...data, [name]: value };
    })
});
const productFrom = document.querySelector('#myForm');
let list = JSON.parse(localStorage.getItem('list')) || [];
productFrom.addEventListener('submit', (e) => 
{
    e.preventDefault();
    list.push({ ...data, id: Date.now() });
    localStorage.setItem('list', JSON.stringify(list));
    clearInputs();
});
productFrom.addEventListener('update', (e) => 
{
    e.preventDefault();
    list.push({ ...data, id: Date.now() });
});
const clearinput = () =>
{
    input.forEach((input) =>
    {
        input.value='';
    });
}
const productDisplay = document.querySelector('.productDisplay #data');
const handleDisplay = () => 
{
    list.forEach((value) => 
    {
        const { id, image, title, price, description } = value;
        const col = document.createElement('div');
        col.classList.add('col-md-3');
        col.innerHTML = 
        `
            <div class="card" style="width: 18rem;">
            <img src="${image}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
            </div>
        `
        productDisplay.appendChild(col);
    });
}
const productImage = document.querySelector('#productImage tbody');
const handleDisplayTable = () => 
{
    viewProducts.innerHTML = ''
    list.forEach((value, index) => 
    {
        const { id, image, title, price, description } = value;
        const row = document.createElement('tr');
        row.innerHTML = 
        `
            <td>${index + 1}</td>
            <td>
                <img src="${image}" alt="${title}" style="width:100px;" />
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>
                <button class="btn btn-danger" onClick="handleDelete(${id})">Delete</button>
                <button class="btn btn-warning" onClick="handleEdit(${id})">Edit</button>
            </td>
        `
        handleDisplay();
        productImage.appendChild(row);
    });
}
const handleDelete = (id) => 
{
    list = list.filter(val => val.id != id);
    localStorage.setItem('list', JSON.stringify(list));
    handleDisplayTable();
}
const handleEdit = (id) => 
{
    const data = list?.find((value) => value.id == id);
    localStorage.setItem('edit', JSON.stringify(data));
    window.location.href = '/edit-data.html';
}
const inputsEdit = document.querySelectorAll('#productEdit .productInput');
const displayEditData = () => 
{
    let editData = JSON.parse(localStorage.getItem('edit')) || {};
    editInputs.forEach((input) => 
    {
        const { name } = input;
        input.value = editData[name];
    });
    data = editData;
}
displayEditData();
editInputs.forEach((input) => 
{
    input.addEventListener('input', (e) => 
    {
        const { name, value } = e.target;
        data = { ...data, [name]: value };
    });
});
const productFromEdit = document.querySelector('#productEdit');
productFromEdit.addEventListener('submit', (e) =>  
{
    e.preventDefault();
    let newList = list.map((value) => 
    {
        if (data.id == value.id) 
        {
            return data;
        }
        return value;
    });
    localStorage.setItem('list', JSON.stringify(newList));
    window.location.href = '/addproductimage.html';
});
