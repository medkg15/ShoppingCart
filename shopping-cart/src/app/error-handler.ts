import { Observable, of } from 'rxjs';

export class ErrorHandler {
    static handleError<T>(result?: T) {
        return (error: any): Observable<T> => {

            // for demo purposes, the error is simply written to the console.
            // would be sent to back-end infrastructure.
            console.error(error);

            return of(result as T);
        };
    }
}
