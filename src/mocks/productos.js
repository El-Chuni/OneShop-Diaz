export const listaItems = [
    {
        id: 1,
        producto: 'Poster "Se Busca" de Luffy (Post-WCI) 40x60cm',
        precio: 319.99,
        stock: 4,

        img: 'https://i.pinimg.com/originals/3d/3d/6a/3d3d6ad1822f22135dafa11c0ae18e57.jpg',
        category: 'otros',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

    {
        id: 2,
        producto: 'Poster "Se Busca" de Luffy (Post-WCI) 80x120cm',
        precio: 599.99,
        stock: 10,

        img: 'https://i.pinimg.com/originals/3d/3d/6a/3d3d6ad1822f22135dafa11c0ae18e57.jpg',
        category: 'otros',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    }
    
];

export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = listaItems.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(listaItems);
        }, 1000);
    });
};

export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = listaItems.find(
            (prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 1000);
    });
};

export const infoItems = new Promise((resolve, reject) =>
    setTimeout(() => {
        let seActivoElTimeout = true;
        if (seActivoElTimeout) {
            resolve(listaItems)
        }else{
            reject("Esto no se ejecutó como se esperaba.")
        }
    }, 2000)
)