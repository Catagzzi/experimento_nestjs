import { Module } from '@nestjs/common';
import { AppModule } from './microservicio/microservicio.module';

@Module({
  imports: [AppModule],
})
export class MsModule {}
