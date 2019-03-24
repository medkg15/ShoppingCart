import { ErrorHandler } from './error-handler';

describe('ErrorHandler', () => {
  it('should create an instance', () => {
    expect(new ErrorHandler()).toBeTruthy();
  });

  it('should return the specified result', () => {

    const resultUponError = 7;

    const error = "Something went wrong.";

    ErrorHandler.handleError(resultUponError)(error)
      .subscribe(result => expect(result).toBe(resultUponError));
  });

  it('should log to the console', (done) => {

    const error = "Something went wrong.";

    spyOn(console, 'error');

    ErrorHandler.handleError()(error)
      .subscribe(_ => {
        expect(console.error).toHaveBeenCalledWith(error);
        done();
      });
  });
});
