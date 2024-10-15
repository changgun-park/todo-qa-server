import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(
      'mongodb+srv://cgpark:hAMkMNjffUYv7O5F@cluster0.kehl0.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
