import {getGenericSocialImage} from '~/images'

export function getSocialMetas({
  url,
  title = 'Helping people to realize their full potential and contribute to a more positive future for all of us',
  description = 'Make the world better by helping people make the right choices',
  origin,
  image = getGenericSocialImage({
    origin,
    url,
    words: title,
    featuredImage: 'withsammy.com/',
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
