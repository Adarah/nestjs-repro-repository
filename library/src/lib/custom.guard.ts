import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { ACTION_TYPE_KEY } from "./constants";

@Injectable()
export class CustomGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    // reads metadata from my action-type decorator
    const action = this.reflector.get<string>(
      ACTION_TYPE_KEY,
      context.getHandler()
    );
    console.log(action);
    // Do stuff with the object frm the reflector here
    return true;
  }
}
