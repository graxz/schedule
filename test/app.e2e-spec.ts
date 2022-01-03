import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { availableTimes } from '../src/utils/availableTimes';
import { appointmentsProvider } from '../src/consultations/Appointments';
import { professionalsProvider } from '../src/consultations/Professionals';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should return an array available times', async () => {
    const getAvailableTimes = await availableTimes();

    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect(getAvailableTimes);
  });

  it('should return an array with profissionals', async () => {
    const profissionals = await professionalsProvider();

    return request(app.getHttpServer())
      .get('/professionals')
      .expect(200)
      .expect(profissionals);
  });

  it('should return an array with schedule of profissional by id', async () => {
    const employeeId = 1;
    const scheduleOfProfissional = await appointmentsProvider(employeeId);

    return request(app.getHttpServer())
      .get('/schedule-employee/?employeeId=1')
      .expect(200)
      .expect(scheduleOfProfissional);
  });
});
