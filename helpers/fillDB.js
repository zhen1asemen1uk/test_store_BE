const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
};

// call this function to fill DB
const fillDb = async () => {
    await asyncForEach(goods, async (item) => {
        const { image, name, rate, price, description } = item;
        await goodsController.addGoods({
            body: { image, name, rate, price, description },
        });
    });

    console.log("DB filled!");
};

export default fillDb;

// mock data
const goods = [
    {
        image: "https://picsum.photos/seed/1/200",
        name: "Product 1",
        rate: 4,
        price: 100,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        image: "https://picsum.photos/seed/2/200",
        name: "Product 2",
        rate: 3,
        price: 200,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        image: "https://picsum.photos/seed/3/200",
        name: "Product 3",
        rate: 5,
        price: 300,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        image: "https://picsum.photos/seed/4/200",
        name: "Product 4",
        rate: 2,
        price: 400,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        image: "https://picsum.photos/seed/5/200",
        name: "Product 5",
        rate: 1,
        price: 500,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
        image: "https://picsum.photos/seed/6/200",
        name: "Product 6",
        rate: 4.5,
        price: 10.99,
        description: "This is a description of product 1",
    },
    {
        image: "https://picsum.photos/seed/7/200",
        name: "Product 7",
        rate: 3.8,
        price: 8.99,
        description: "This is a description of product 2",
    },
    {
        image: "https://picsum.photos/seed/8/200",
        name: "Product 8",
        rate: 4.2,
        price: 12.99,
        description: "This is a description of product 15",
    },
    {
        image: "https://picsum.photos/seed/9/200",
        name: "Product 9",
        rate: 4.5,
        price: 10.99,
        description: "This is a description of product 3",
    },
    {
        image: "https://picsum.photos/seed/10/200",
        name: "Product 10",
        rate: 3.8,
        price: 8.99,
        description: "This is a description of product 4",
    },
    {
        image: "https://picsum.photos/seed/11/200",
        name: "Product 11",
        rate: 4.2,
        price: 12.99,
        description: "This is a description of product 5",
    },
    {
        image: "https://picsum.photos/seed/12/200",
        name: "Product 12",
        rate: 4.5,
        price: 10.99,
        description: "This is a description of product 6",
    },
    {
        image: "https://picsum.photos/seed/13/200",
        name: "Product 13",
        rate: 3.8,
        price: 8.99,
        description: "This is a description of product 7",
    },
    {
        image: "https://picsum.photos/seed/14/200",
        name: "Product 14",
        rate: 4.2,
        price: 12.99,
        description: "This is a description of product 8",
    },
    {
        image: "https://picsum.photos/seed/15/200",
        name: "Product 15",
        rate: 4.5,
        price: 10.99,
        description: "This is a description of product 9",
    },
    {
        image: "https://picsum.photos/seed/16/200",
        name: "Product 16",
        rate: 3.8,
        price: 8.99,
        description: "This is a description of product 10",
    },
];
