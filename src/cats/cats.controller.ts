import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Cats } from './cats.entity';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/index')
  index(@Res() res: Response): string {
    this.catsService.findAll();

    var cats: Promise<Cats[]> = this.catsService.findAll();

    cats
      .then((data) => {
        console.log(data);

        return res.render('cats/index', {
          message: 'Cats',
          data: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    return '';
  }

  @Post('/create')
  async create(@Body() catsParam: { firstName: string; lastName: string }) {
    let cats = new Cats();
    cats.firstName = catsParam.firstName;
    cats.lastName = catsParam.lastName;
    cats.isActive = true;
    return await this.catsService.create(cats);
  }
}
