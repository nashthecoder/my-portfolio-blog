import { defineConfig } from "sanity";
import { deskTool} from 'sanity/desk';
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "xjweit6d",
    dataset: "production",
    title: "My Portfolio & Blog",
    apiVersion: "2023-04-08",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas },
})

export default config;