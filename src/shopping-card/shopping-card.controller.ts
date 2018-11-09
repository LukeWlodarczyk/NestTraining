import { Post, Controller } from '@nestjs/common';

@Controller('shopping-card')
export class ShoppingCardController {
    @Post()
    addItem(): string {
        return 'test shopping card';
    }
}