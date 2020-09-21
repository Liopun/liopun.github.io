export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/captone-meta-image.png',
  },
  index: {
    title: 'Captone Habiyaremye | Full-stack Developer',
    description: 'Captone Habiyaremye, Full stack developer with 6 years in the industry. software development has been more than a job for me, it has provided an engaging challenge to keep learning and improving my skills in delivering exceptional, high-quality software. As I\'m looking forward to push-forward my career as a full stack developer, I\'m very familiar and experienced with web application architecture and have worked with a good number of successful dev teams.'
  },
  profile: {
    title: 'Captone Habiyaremye | Profile',
    description: 'Full-stack Developer with 6 years in the industry.'
  }
}
