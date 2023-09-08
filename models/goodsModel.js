import getPaginatedResults from "../helpers/pagination";
import goodsSchema from "./schema/goodsSchema";

const getAllGoods = async (pageNumber = 1) => {
    return await getPaginatedResults({
        pageNumber: pageNumber,
        model: goodsSchema,
    });
};

const addGoods = async (image, name, rate, price, description) => {
    const goods = new goodsSchema({
        image,
        name,
        rate,
        price,
        description,
    });

    return await goods.save();
};

// temporary
const searchGoods = async (search) => {
    if (!search) {
        return await goodsSchema.find({});
    }

    return await goodsSchema.find({
        $or: [
            { name: { $regex: search, $options: "i" } },
            { review: { $regex: search, $options: "i" } },
            // { price: { $regex: search } },
            { description: { $regex: search, $options: "i" } },
        ],
    });
};

const searchGoodsByIds = async (arrIds) => {
    return await goodsSchema.find({ _id: { $in: arrIds } });
};

const flterGoods = async ({ rate, minPrice, maxPrice }) => {
    const query = {};

    if (!!rate) {
        query.rate = { $gt: +rate };
    }

    if (!!minPrice) {
        query.price = { $gte: +minPrice };
    }

    if (!!maxPrice) {
        if (query.price === undefined) {
            query.price = {};
        }

        query.price.$lte = +maxPrice;
    }

    return await goodsSchema.find(query);
};

export default {
    getAllGoods,
    addGoods,
    searchGoods,
    searchGoodsByIds,
    flterGoods,
};
