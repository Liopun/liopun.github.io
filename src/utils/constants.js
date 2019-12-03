export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: './images/captone-meta-image.jpg',
  },
  index: {
    title: 'Captone Habiyaremye | Front-end developer',
    description: 'Captone Habiyaremye, web developer based in Ontario, Canada. I am currently a third year engineering student at Ontario Tech University. I have a passion for front-end development, I focus primarily on building exceptional, high-quality interfaces that are usable and scalable.'
  },
  profile: {
    title: 'Captone Habiyaremye | Profile',
    description: 'Over the last 4+ years, I have been working with startups and small-size companies.'
  }
}
