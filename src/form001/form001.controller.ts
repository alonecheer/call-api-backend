import {
    Controller,
    Get,
    HttpStatus,
    Res,
    Post,
    Body,
    Delete,
    Param,
    Patch,
  } from '@nestjs/common';
import { Form001Service } from './form001.service';

@Controller('form001')
export class Form001Controller {
    constructor(private readonly form001Service: Form001Service) {}

    @Get()
    async getForm001(@Res() res){
        let status = HttpStatus.OK;
        let response = {};

        const form001 = await this.form001Service.getForm001();
        response = {form001};
        return res.status(status).json(response);
    }

    @Post()
    async addForm001(@Body('form001s') data, @Res() res){
        let status = HttpStatus.OK;
        let response = {};

        const form001s = await this.form001Service.addForm001(data);
        response = { form001s };
        return res.status(status).json(response);
    }
}
