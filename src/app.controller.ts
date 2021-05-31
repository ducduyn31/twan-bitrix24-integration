import {Controller, Post, Req} from '@nestjs/common';
import {AppService} from './app.service';
import {Request} from 'express';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Post('callback')
    public onCompanyCreated(@Req() request: Request): void {
        console.log(request.headers);
        console.log(request.body);
    }
}
