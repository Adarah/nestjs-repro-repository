import { DynamicModule, Module } from "@nestjs/common";
import { CustomGuard } from "./custom.guard";

@Module({})
export class LibModule {
  static register(): DynamicModule {
    return {
      module: LibModule,
      providers: [CustomGuard],
      exports: [CustomGuard],
    };
  }
}
