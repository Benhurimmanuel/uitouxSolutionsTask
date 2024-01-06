const { mongoose } = require("mongoose");
const { User } = require("./SCHEMA/user");

const db = mongoose.connection;


const addData = async (collectionName, payload) => {
  try {
    const dbCollection = new collectionName(payload);
    const result = await dbCollection.save();
    if (!result) return { status: false, data: null }
    return { status: true, data: result }
  } catch (error) {
    return { status: false, data: error.message };
  }
};



const getSingleData = async (collectionName, condition = null) => {
  try {
    const payload = await collectionName.findOne(condition);
    if (!payload) return { status: false, data: null }
    return { status: true, data: payload }
  } catch (error) {
    return { status: false, data: error.message };
  }
};


const getSingleDataById = async (collectionName, condition = null) => {
  try {
    const payload = await collectionName.findById(condition);
    if (!payload) return { status: false, data: null }
    return { status: true, data: payload }
  } catch (error) {
    return { status: false, data: error.message };
  }
};



const getAllDataByCondition = async (collectionName, condition = null, pageSize = 1, pageNumber = 0) => {
  try {
    const skipAmount = pageNumber * pageSize
    const payload = await collectionName.find(condition).skip(skipAmount).limit(pageSize).exec();
    if (!payload) return { status: false, data: null }
    return { status: true, data: payload }
  } catch (error) {
    return { status: false, data: error.message };
  }
};


const getAllDataByConditionWOPagenation = async (collectionName, condition = null,) => {
  try {
    const payload = await collectionName.find(condition)
    if (!payload) return { status: false, data: null }
    return { status: true, data: payload }
  } catch (error) {
    return { status: false, data: error.message };
  }
};




const updateSingleData = async (collectionName, condition, updateValue) => {
  try {
    const payload = await collectionName.findOneAndUpdate(condition, updateValue, { new: true },
    );
    if (!payload) return { status: false, data: null }
    return { status: true, data: payload }
  } catch (error) {
    return { status: false, data: error.message };
  }
};


const updateManyData = async (collectionName, condition, updateValue) => {
  try {
    const payload = await collectionName.updateMany(condition, updateValue,
    );
    if (!payload) return { status: false, data: null }
    return { status: true, data: payload }
  } catch (error) {
    return { status: false, data: error.message };
  }
};


module.exports = {
  addData, getSingleData, getSingleDataById, getAllDataByCondition, getAllDataByConditionWOPagenation, updateSingleData, updateManyData
}