// import Auth from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'
import NextStorage from 'amplify-auth-next-storage'

export function configurePool(ctx) {
  Auth.configure({
    // region: 'us-east-1',
    // userPoolId: 'us-east-1_xxxxx',
    // userPoolWebClientId: 'xxxxxxxxxxxxxxx',
    mandatorySignIn: false,
    storage: new NextStorage(ctx, {
      domain: 'localhost',
      expires: 365,
      path: '/',
      secure: false,
    }),
  })
  Auth.currentUserInfo().then((currentUser) =>
    console.log('currentUser', currentUser)
  )
}
