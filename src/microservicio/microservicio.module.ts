import { Module } from '@nestjs/common';
import { AppController } from './microservicio.controller';
import { AppService } from './microservicio.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
