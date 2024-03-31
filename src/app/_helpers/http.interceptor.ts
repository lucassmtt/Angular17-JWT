import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(req).pipe(
        map((event: HttpEvent<any>) => {

          if (event instanceof HttpResponse && event.body) {

            try {

              event = event.clone({body: this.processResponse(event.body)});

            } catch (error) {

              console.log('Erro parsing response body: ' + error);

            }
          }
          return event;
        })
      )
  }

  private processResponse(body: any) {

    if (typeof body === 'string') {

      try {

        return JSON.parse(body);

      } catch (error) {
        console.log(error);
        return body;
      }
    } else {
      return body;
    }


      return JSON.parse(body);
  }

}
