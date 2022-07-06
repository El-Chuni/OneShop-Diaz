export const listaItems = [
    {
        id: 1,
        producto: 'Poster "Se Busca" de Luffy (Post-WCI) 40x60cm',
        precio: 319.99,
        stock: 4,

        img: 'https://i.pinimg.com/originals/3d/3d/6a/3d3d6ad1822f22135dafa11c0ae18e57.jpg',
        categoria: 'otros',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

    {
        id: 2,
        producto: 'Poster "Se Busca" de Luffy (Post-WCI) 80x120cm',
        precio: 599.99,
        stock: 10,

        img: 'https://i.pinimg.com/originals/3d/3d/6a/3d3d6ad1822f22135dafa11c0ae18e57.jpg',
        categoria: 'otros',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

    {
        id: 3,
        producto: 'Pulsera calavera pirata',
        precio: 1219.99,
        stock: 15,

        img: 'https://m.media-amazon.com/images/I/51-Y+Iv1tCL._AC_UX385_.jpg',
        categoria: 'accesorios',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

    {
        id: 4,
        producto: 'Remera unisex de Luffy con su bandera pirata',
        precio: 649.99,
        stock: 2,

        img: 'https://http2.mlstatic.com/D_NQ_NP_781002-MLA30836707306_052019-O.jpg',
        categoria: 'ropa',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },

    {
        id: 5,
        producto: 'Volumen 90: "La Tierra Sagrada de Mary Geoise"',
        precio: 749.99,
        stock: 50,

        img: 'https://cdn.aprendejaponeshoy.com/21490-big_default_2x/one-piece-wan-pisu-vol-90.jpg',
        categoria: 'volumenes',
        descripcion:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iusto magni quaerat nisi quisquam? Error, earum aspernatur tenetur sint cum in quibusdam eos quae velit ratione maxime! Error, earum repellendus.',
    },
];

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