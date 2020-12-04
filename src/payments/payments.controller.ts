import { Body, Controller, Post } from '@nestjs/common';

@Controller('payments')
export class PaymentsController {
  @Post('')
  processPaddlePayment(@Body() body) {
    console.log(body);
    return { ok: true };
  }
}
