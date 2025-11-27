import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Advanced Auth + User + Upload + Admin + Referral API",
      version: "1.0.0",
      description:
        "Node.js backend with Authentication, User CRUD, File Uploads, Admin APIs, Search, Pagination, and Referral System",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local Development Server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiMiddleware = swaggerUi;
