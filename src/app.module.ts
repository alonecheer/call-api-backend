import { Module } from '@nestjs/common';
import { Form001Module } from './form001/form001.module';



@Module({
  imports: [Form001Module],
  controllers: [],
  providers: [],
})
export class AppModule {}
