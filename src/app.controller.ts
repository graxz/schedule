import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { Cron } from '@nestjs/schedule';
import { AppService } from './app.service';
import { Request } from 'express';
import { Controller, Get, Req } from '@nestjs/common';
import { availableTimes } from './utils/availableTimes';

@Controller()
@ApiTags('Schedule')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Cron('0 */30 7-19 * * *')
  async handleCron() {
    const date = new Date(Date.now());
    const { availableTimes: getAvailableTimes } = await availableTimes();

    console.log(
      `Verification time: ${date} && Available Times: [ ${getAvailableTimes} ]`,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Get the available times in schedule' })
  getAvailableTimes(): Promise<string> {
    return this.appService.getAvailableTimes();
  }

  @Get('/professionals')
  @ApiOperation({ summary: 'Get all profissionals' })
  getProfessionals(): Promise<string> {
    return this.appService.getProfessionals();
  }

  @Get(`/schedule-employee`)
  @ApiQuery({
    name: 'employeeId',
    required: true,
    description: 'Employee ID',
    type: Number,
  })
  @ApiOperation({ summary: 'Get the schedule of profissional by id' })
  getApointments(@Req() request: Request): Promise<string> {
    const employeeId = Number(request.query.employeeId);

    return this.appService.getApointments(employeeId);
  }
}
