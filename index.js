import app from "./app.js";
import { sequelize } from "./models/index.js";

import { createServer } from "http";

const port = Number(process.env.PORT) || 5001;

const server = createServer(app);

server.listen(port, async () => {
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${port}`);

  // authenticate 메소드로 연결 확인
  await sequelize
    .authenticate()
    .then(async () => {
      console.log("connection success");
    })
    .catch((err) => {
      console.log(err);
    });
});

export default server;