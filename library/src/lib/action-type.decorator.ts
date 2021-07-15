import { SetMetadata } from "@nestjs/common";
import { ACTION_TYPE_KEY } from "./constants";

export const ActionType = (action: string) =>
  SetMetadata(ACTION_TYPE_KEY, action);
