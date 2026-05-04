import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {

      let message = 'Ocurrió un error inesperado.';

      if (error.status === 0) {
        message = 'No se pudo conectar con la API.';
      } else if (error.status === 404) {
        message = 'Recurso no encontrado.';
      } else if (error.status === 500) {
        message = 'Error interno del servidor.';
      }

      return throwError(() => message);
    })
  );
};