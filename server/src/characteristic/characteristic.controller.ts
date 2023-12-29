import { Controller } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';

@Controller('characteristic')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}
}
