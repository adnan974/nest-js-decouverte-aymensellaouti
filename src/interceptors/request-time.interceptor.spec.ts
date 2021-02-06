import { RequestTimeInterceptor } from './request-time.interceptor';

describe('RequestTimeInterceptor', () => {
  it('should be defined', () => {
    expect(new RequestTimeInterceptor()).toBeDefined();
  });
});
