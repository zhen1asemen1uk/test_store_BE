// Example query to get paginated results
const getPaginatedResults = async ({ pageNumber, model, pageSize = 12 }) => {
    const skip = (pageNumber - 1) * pageSize;
    const results = await model.find().skip(skip).limit(pageSize);
    return results;
};

export default getPaginatedResults;
