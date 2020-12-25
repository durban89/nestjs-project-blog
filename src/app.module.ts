import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [CatsModule],
  controllers: [AppController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
