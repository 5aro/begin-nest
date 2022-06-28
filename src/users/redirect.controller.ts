import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { RedirectService } from './redirect.service';

@Controller('redirect')
export class RedirectController {
  constructor(private readonly redirectService: RedirectService) {}

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return this.redirectService.getDocs();
    }
  }
}
