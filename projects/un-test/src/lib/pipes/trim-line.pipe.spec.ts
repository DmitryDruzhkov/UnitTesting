import { TrimLinePipe } from './trim-line.pipe';

describe('TrimLinePipe', () => {
  it('create an instance', () => {
    const pipe = new TrimLinePipe();
    expect(pipe).toBeTruthy();
  });

  it('string mast be less 10 simbols', () => {
    const pipe = new TrimLinePipe();
    const result = pipe.transform('1234567890123456789012345');
    expect(result.length).toBeLessThanOrEqual(10);
  });
});
