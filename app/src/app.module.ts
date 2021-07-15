import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibModule } from 'mylib';

@Module({
  imports: [LibModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
