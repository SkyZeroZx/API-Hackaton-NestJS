import * as dotenv from 'dotenv';
dotenv.config();

export const JWT_TOKEN = 'JWT_TOKEN';
export const DATABASE_HOST = 'DATABASE_HOST';
export const DATABASE_PORT = 'DATABASE_PORT';
export const DATABASE_USERNAME = 'DATABASE_USERNAME';
export const DATABASE_PASSWORD = 'DATABASE_PASSWORD';
export const DATABASE_NAME = 'DATABASE_NAME';
export const ENABLED_MYSQL_CACHE = 'ENABLED_MYSQL_CACHE';

export class Constants {
  static readonly MSG_OK = 'OK';
  static readonly STATUS_USER = {
    CREADO: 'CREADO',
    HABILITADO: 'HABILITADO',
    BLOQUEADO: 'BLOQUEADO',
    RESETEADO: 'RESETEADO',
  };

  static readonly LOGO_APP = process.env.LOGO_APP;

  static readonly LOGO_ICON = process.env.LOGO_ICON;

  static readonly URL_WEB = process.env.URL_WEB;

  static readonly MAIL = {
    CREATE_NEW_USER:
      "<img src='" +
      Constants.LOGO_APP +
      "'></img>" +
      '<p>Estimado usuario se creado el nuevo usuario: {{username}} ' +
      '\nSu contraseña es: <b>{{randomPassword}}</b>' +
      '\nPara más detalle comunicarse con el area respectiva</p>',
    RESET_PASSWORD:
      "<img src='" +
      Constants.LOGO_APP +
      "'></img>" +
      '</img> <p>Estimado usuario se ha reseteado la contraseña de su usuario {{username}} ' +
      '\nLa nueva contraseña es: <b> {{passwordReset}} </b> \nPara más detalle comunicarse con el area respectiva</p>',
  };

  static readonly NOTIFICATION_REMEMBER = {
    notification: {
      title: 'Recuerde visitar su app',
      icon: Constants.LOGO_ICON,
      data: {
        url: Constants.URL_WEB,
      },
      body: 'Hagalo desde Hackaton GentlemanProgramming',
      vibrate: [1000, 1000, 1000],
      image: Constants.LOGO_APP,
      actions: [
        {
          action: 'Explorar',
          title: 'Visitar',
        },
      ],
    },
  };

  static replaceText(keyText: string[], arrayTextReplace: string[], textForReplace: string) {
    let result = textForReplace;
    for (let i = 0; i < arrayTextReplace.length; i++) {
      result = result.replace(keyText[i].trim(), arrayTextReplace[i].trim());
    }
    return result;
  }
}
