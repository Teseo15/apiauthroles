import { Schema, model } from "mongoose";

export const ROLES = ["alumnos", "admin", "profesor","director","jefe"];

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
