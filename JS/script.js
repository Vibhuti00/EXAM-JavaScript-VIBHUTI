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
productFrom.addEventListener('submit', (e) => 
{
    e.preventDefault();
    list.push({ ...data, id: Date.now() });
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
// const handledelete = (id) => {}
const table = document.querySelectorAll('#productImage .table');
table.addEventListener( 'table', (e) =>
    {
    `
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Title</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody></tbody>
    `
});
