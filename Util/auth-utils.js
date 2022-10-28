import Auth from '@aws-amplify/auth'
import NextStorage from 'amplify-auth-next-storage'

export function configurePool(ctx) {
  Auth.configure({
    region: 'us-east-1',
    userPoolId: 'us-east-1_xxxxx',
    userPoolWebClientId: 'xxxxxxxxxxxxxxx',
    storage: new NextStorage(ctx, {
      domain: '.yourdomain.com',
      expires: 365,
      path: '/',
      secure: true,
    }),
  })
}
