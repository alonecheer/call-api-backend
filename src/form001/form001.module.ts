import { Module } from '@nestjs/common';
import { Form001Controller } from './form001.controller';
import { Form001Service } from './form001.service';


@Module({
  controllers: [Form001Controller],
  providers: [Form001Service]
})
export class Form001Module {}
