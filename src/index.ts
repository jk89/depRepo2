import { Express } from "express";

export function extendApp(app: any) {
    app.get("/depRepo2", (req: any, res: any) => {
        res.send("depRepo2");
    });
}