import app from "./app";

const port = process.env.port || 3000

// import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import YAML from 'yamljs';
const swaggerOptions = YAML.load('./src/v1/routes/swaggerConfig.yaml');
// import swaggerOptions from "./v1/routes/swaggerConfig";

app.use('/v1/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerOptions))

app.listen(port,() => {
    return console.log(`Server is listening on ${port}`)
})