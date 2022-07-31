const items = [
    {id: 1, name: "Sapiens", author: "Yuval Harari", stock: 50, price: 3500, img:'images/Sapiens.jpg' },
    {id: 2, name: "1984", author: "George Orwell", stock: 30, price: 2000, img:'images/1984.jpg'},
    {id: 3, name: "Homo Deus", author: "Yuval Harari", stock: 24, price: 1500, img:'images/Homo Deus.jpg'},
    {id: 4, name: "The Atlas Six", author: "Olivie Blake", stock: 15, price: 5000, img:'images/Los Seis Del Atlas.jpg'}
]

export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)
        }, 3000)
    })
}