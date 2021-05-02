import * as OpenApiValidator from "express-openapi-validator";
import path from "path";

const specPath = path.join(__dirname, "../validation/schema.yaml");

const validator = OpenApiValidator.middleware({ apiSpec: specPath });

export { validator };
