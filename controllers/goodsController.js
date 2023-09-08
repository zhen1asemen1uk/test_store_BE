import goodsModel from "../models/goodsModel";

const getAllGoods = async (req, res) => {
    try {
        const goods = await goodsModel.getAllGoods();

        return res.json(goods);
    } catch (error) {
        console.error(error);
        res.send(`Error get all user!`);
    }
};

const searchGoods = async (req, res) => {
    const { text } = req.query;

    try {
        const searchedGoods = await goodsModel.searchGoods(text);

        return res.json(searchedGoods);
    } catch (error) {
        console.error(error);
        res.send(`Error search Goods!`);
    }
};

// need refactoring
const filterGoods = async (req, res) => {
    const { array, rate, minPrice, maxPrice } = req.query;

    if (array) {
        const arrFromStr = array.split(",");

        try {
            const searchedGoods = await goodsModel.searchGoodsByIds(arrFromStr);

            return res.json(searchedGoods);
        } catch (error) {
            console.error(error);
            res.send(`Error search Goods!`);
        }
    } else if (rate) {
        try {
            const searchedGoods = await goodsModel.flterGoods({
                rate,
            });

            return res.json(searchedGoods);
        } catch (error) {
            console.error(error);
            res.send(`Error search Goods!`);
        }
    } else {
        try {
            const searchedGoods = await goodsModel.flterGoods({
                minPrice,
                maxPrice,
            });

            return res.json(searchedGoods);
        } catch (error) {
            console.error(error);
            res.send(`Error search Goods!`);
        }
    }
};

const addGoods = async (req, res) => {
    const { image, name, rate, price, description } = req.body;

    try {
        const addedGoods = await goodsModel.addGoods(
            image,
            name,
            rate,
            price,
            description
        );

        return res.json(addedGoods);
    } catch (error) {
        console.error(error);
        res.send(`Error add Goods!`);
    }
};

export default {
    getAllGoods,
    searchGoods,
    filterGoods,
    addGoods,
};
