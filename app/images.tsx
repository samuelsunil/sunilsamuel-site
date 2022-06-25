import type {TransformerOption} from '@cld-apis/types'
import {setConfig, buildImageUrl} from 'cloudinary-build-url'


setConfig({
  cloudName: 'sunilsamuel',
})

type ImageBuilder = {
  (transformations?: TransformerOption): string
  alt: string
  id: string
}
const createImages = <
  ImageType extends Record<string, {id: string; alt: string}>,
>(
  images: ImageType,
) => {
  const imageBuilders: Record<string, ImageBuilder> = {}
  for (const [name, {id, alt}] of Object.entries(images)) {
    imageBuilders[name] = getImageBuilder(id, alt)
  }
  return imageBuilders as {[Name in keyof ImageType]: ImageBuilder}
}

function getImageBuilder(id: string, alt: string = ''): ImageBuilder {
  function imageBuilder(transformations?: TransformerOption) {
    return buildImageUrl(id, {transformations})
  }
  imageBuilder.alt = alt
  imageBuilder.id = id
  return imageBuilder
}

const images = createImages({
  sunilSignatureDarkMode: {
    id: 'sunil/signature-dark-mode',
    alt: `Sunil's signature`,
  },
  sunilSignatureLightMode: {
    id: 'sunil/signature-light-mode',
    alt: `Sunil's signature`,
  },
  sunilTransparentProfile: {
    id: 'withsammy/profile/profile_1',
    alt: 'Sunil Samuel',
  },
  sunilProfile: {
    id: 'sunil/profile',
    alt: 'Sunil Samuel',
  },
  sunilSnowSports: {
    id: 'sunil/snow-sports',
    alt: 'Sunil wearing snow clothes with skis and a snowboard',
  },
  happyTraveler: {
    id: 'withsammy/illustrations/happy_traveler_1',
    alt: 'Happy Traveler with a camera',
  },
  happyPhotographer: {
    id: 'withsammy/illustrations/happy_photographer',
    alt: 'Happy Photographer',
  },
  potential: {
    id: 'withsammy/impossible',
    alt: 'Depiction of Impossible',
  }
})


const illustrationImages = {
  happyTraveler: images.happyTraveler,
  happyPhotographer: images.happyPhotographer
}

function getImgProps(
  imageBuilder: ImageBuilder,
  {
    widths,
    sizes,
    transformations,
  }: {
    widths: Array<number>
    sizes: Array<string>
    transformations?: TransformerOption
  },
) {
  const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length)

  return {
    alt: imageBuilder.alt,
    src: imageBuilder({
      quality: 'auto',
      format: 'auto',
      ...transformations,
      resize: {width: averageSize, ...transformations?.resize},
    }),
    srcSet: widths
      .map(width =>
        [
          imageBuilder({
            quality: 'auto',
            format: 'auto',
            ...transformations,
            resize: {width, ...transformations?.resize},
          }),
          `${width}w`,
        ].join(' '),
      )
      .join(', '),
    sizes: sizes.join(', '),
  }
}

function getSocialImageWithPreTitle({
  origin,
  title,
  preTitle,
  featuredImage: img,
  url,
}: {
  origin: string
  title: string
  preTitle: string
  featuredImage: string
  url: string
}) {
  const params = new URLSearchParams({
    type: '2',
    title,
    preTitle,
    img,
    url,
  })
  return `${origin}/img/social?${params.toString()}`
}

function getGenericSocialImage({
  origin,
  words,
  featuredImage: img,
  url,
}: {
  origin: string
  words: string
  featuredImage: string
  url: string
}) {
  const params = new URLSearchParams({
    type: '1',
    words,
    img,
    url,
  })
  return `${origin}/img/social?${params.toString()}`
}

export {
  images,
  getImgProps,
  getImageBuilder,
  getGenericSocialImage,
  getSocialImageWithPreTitle,
  illustrationImages,
}
export type {ImageBuilder}
