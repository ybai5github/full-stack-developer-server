import tuitsModel from './tuits-model.js';

export const findAllTuits = async () => {
    const tuits = await tuitsModel.find();
    return tuits;
}

export const createTuit = async (tuit) => {
    const insertedTuit = await tuitsModel.create(newTuit);
    return insertedTuit;

}
export const deleteTuit = async (tid) => {
    const status =  await tuitsModel.deleteOne(tid);
    return status;
}


export const updateTuit = async (tid, tuit) => {
    const status = await tuitsModel.updateOne(
        {_id: tid}, {$set: tuit}
    )
    return status;
}