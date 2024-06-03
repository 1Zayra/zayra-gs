fetch('menu.json')
.then(Response => Response.json())
.then(date=>{
    const menuContainer = document.getElementById('menu-container');
    let total=0;
    data.items.forEac(category => {
        const categoryTitle = document.create('h2')
        categoryTitle.textContent = categoty.category;
        menuContainer.appendChild(categoryTitle);

        const table = document.createElement('table');
        const tableHead= `<tr><th>Foto</
        th><th>Descripcion</th><thPrecio</
        th><thseleccionar</th></tr>`;
    })
})