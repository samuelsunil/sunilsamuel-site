import {createCookieSessionStorage} from 'remix'
import {getRequiredServerEnvVar} from './misc'
import {Theme, isTheme} from './theme-provider'

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'SVS_theme',
    secure: false,  //TODO: Should be set to true for prod deployment
    secrets: [getRequiredServerEnvVar('SESSION_SECRET')],
    sameSite: 'lax',
    path: '/',
    expires: new Date('2200-04-13'),
    httpOnly: true,
  },
})

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'))
  return {
    getTheme: () => {
      const themeValue = session.get('theme')
      return isTheme(themeValue) ? themeValue : Theme.DARK
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () => themeStorage.commitSession(session),
  }
}

export {getThemeSession}
