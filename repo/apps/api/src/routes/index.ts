import { Router } from "express";
import { identity } from "./identity";
import { prefs } from "./prefs";
import { reactions } from "./reactions";
import { polls } from "./polls";
import { deeplinks } from "./deeplinks";
import { redirect } from "./redirect";
import { feed } from "./feed";
import { notify } from "./notify";
import { sharecard } from "./sharecard";

export const api = Router();

api.use("/identity", identity);
api.use("/prefs", prefs);
api.use("/reactions", reactions);
api.use("/polls", polls);
api.use("/deeplinks", deeplinks);
api.use("/feed", feed);
api.use("/notify", notify);
api.use("/sharecard", sharecard);

// redirect endpoint is mounted in server root in index.ts
export const redirectRouter = redirect;
