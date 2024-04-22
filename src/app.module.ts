import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ComentsModule } from './coments/coments.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule, ComentsModule, MongooseModule.forRoot('mongodb+srv://Erick1402:<password>@cluster0.cjkt1x7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
