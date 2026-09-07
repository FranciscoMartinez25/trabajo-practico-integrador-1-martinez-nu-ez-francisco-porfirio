import express from "express";
import { startDB } from "./src/config/database.js";
import { userRoute } from "./src/routes/user.routes.js";
import { tagRouter } from "./src/routes/tag.routes.js";
import { profileRouter } from "./src/routes/profile.routes.js";

// import { Product } from "./src/models/product.model.js";

const app = express();
const PORT = 3000;

// para que entienda el formato json
app.use(express.json());

app.use("/api", userRoute); 

// app.use("/", (req, res) => {
//   return res.json({ message: "servidor todo listo" });
// });

app.listen(PORT, async () => {
  await startDB();
  console.log(`Servidor listo http://localhost:${PORT}`);
});