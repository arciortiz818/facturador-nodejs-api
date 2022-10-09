import { Auth } from "./auth.interface"
import UserModel from "../user/user.model"
import { encrypt, verified } from "../../utils/bcrypt.handle";
import { generateToken } from "../../utils/jwt.handle";

const registerNewUser = async (authUser: Auth) => {
    const exists = await UserModel.findOne({email: authUser.email})
    if(exists) return 'El usuario ya existe'

    const passHash = await encrypt(authUser.password)
    const register = await UserModel.create({...authUser,password: passHash})
    return register
}

const loginUser = async ({email,password}:Auth) => {
    const user = await UserModel.findOne({email})
    if(!user) return 'El usuario no existe'

    const passwordHash = user.password
    const isCorrect = await verified(password,passwordHash)
    
    if(!isCorrect) return 'PASSWORD_INCORRECTO'

    const token = await generateToken(user.email)
    
    return {
        token,
        user
    }
}

export {
    registerNewUser,
    loginUser
}