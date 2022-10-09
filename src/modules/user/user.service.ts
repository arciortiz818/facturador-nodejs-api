import UserModel from "./user.model"

const getListUsers = async () => {
    const users = await UserModel.find();
    return users
}

const getUserData = async (id:string) => {
    const user = await UserModel.findById(id);
    return user
}

export {
    getListUsers,
    getUserData
}