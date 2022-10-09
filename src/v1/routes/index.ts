import { Router } from 'express'
import { readdirSync } from "fs"

const router = Router()
const PATH_ROUTER = `${__dirname}`

console.log(PATH_ROUTER)

const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if(cleanName !== 'index' && cleanName !== 'swaggerConfig'){
        import(`./${cleanName}`).then(moduleRoute => {
            router.use(`/${cleanName}`,moduleRoute.router)
        })
    }
})

export {
    router
}