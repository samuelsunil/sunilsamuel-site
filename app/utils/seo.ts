import {getGenericSocialImage} from '~/images'

export function getSocialMetas({
  url,
  title = 'Helping people make the world a better place through quality software',
  description = 'Make the world better with software',
  origin,
  image = getGenericSocialImage({
    origin,
    url,
    words: title,
    featuredImage: 'withsammy.com/illustrations/kody-flying_blue',
  }),
  keywords = '',
}: {
  origin: string
  image?: string
  url: string
  title?: string
  description?: string
  keywords?: string
}) {
  return {
    title,
    description,
    keywords,
    image,
    'og:url': url,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:creator': '@samuelsunil',
    'twitter:site': '@samuelsunil',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:alt': title,
  }
}
