import { createApp } from "./app";

(async ()=>{
    const PORT = 3000;
    const app = await createApp()
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
})()