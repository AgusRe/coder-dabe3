import mongoose from "mongoose";
import app from "./app.js";

const PORT = 8080;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/coder-dabe3";

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB conectado");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
    });
  })
  .catch(error => {
    console.error("❌ Error conectando a MongoDB:", error.message);
  });
