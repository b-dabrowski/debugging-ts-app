import { createApp } from "./app";
import { setupConnection } from "./db/utils/db-connection";

(async ()=>{
    const PORT = 3000;
    setupConnection();
    const app = await createApp()
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
})()