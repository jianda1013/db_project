const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
module.exports = (app) => {
    const swaggerDefinition = {
        basePath: "/",
        securityDefinitions: {
            ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "Authorization"
            }
        }
    };

    const options = {
        swaggerDefinition,
        security: [{ ApiKeyAuth: [] }],
        apis: ["swagger.js", "src/routes/user.js"]
    };

    const swaggerSpec = swaggerJSDoc(options);

    app.get("/swagger.json", function (req, res) {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    app.use("/doc", swaggerUi.serve, (...args) => swaggerUi.setup(swaggerSpec)(...args));
}
