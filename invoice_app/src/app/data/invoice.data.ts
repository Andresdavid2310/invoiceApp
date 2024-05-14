export const invoiceData: any = {
    id: 1,
    name: "Componentes de PC",
    client:{
        name: 'Andres',
        lastname: 'Benavides',
        address: {
            country: 'COLOMBIA',
            city: 'Santa Marta',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        name: 'new age',
        fiscalNumber: 3123123,
    },
    items: [
        {
            id:1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity:1,
        },
        {
            id:2,
            product: 'Mouse Microsoft',
            price: 200,
            quantity:1,
        },
        {
            id:3,
            product: 'Teclado Asus',
            price: 350,
            quantity:1,
        }
    ]
}