import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes('users'); // this call hard code the middleware to the users route
    //  we can also use route path as a parameter
    // consumer.apply(ExampleMiddleware).forRoutes(
    //   {
    //     path: 'users',
    //     method: RequestMethod.GET
    //   }
    // );
    consumer.apply(ExampleMiddleware).forRoutes(UsersController);
  }
}
