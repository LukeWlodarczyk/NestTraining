import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ShoppingCardController } from './shopping-card/shopping-card.controller';

@Module({
  imports: [],
  controllers: [ItemsController, ShoppingCardController],
  providers: [ItemsService],
})
export class AppModule {}
