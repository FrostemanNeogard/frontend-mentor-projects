import QRCodePreviewImage from '../../assets/project_previews/QR_code.png'
import ResultsSummaryPewviewImage from '../../assets/project_previews/ResultsSummary.png'
import NewsHomepage from '../../assets/project_previews/NewsHomepage.png'
import AdviceGenerator from '../../assets/project_previews/AdviceGenerator.png'

import { ProjectInformation } from './Interfaces'

export const ProjectData: Array<ProjectInformation> = [
  {
    name: 'QR Code Component',
    description: 'First simple Frontend Mentor challenge. This is a card showing a QR code.',
    url: 'qrcode',
    imageURL: QRCodePreviewImage
  },
  {
    name: 'Results Summary Component',
    description: 'Another simple Frontend Mentor challenge. This is a card showing a summary from the results of something such as an assessment.',
    url: 'results-summary',
    imageURL: ResultsSummaryPewviewImage
  },
  {
    name: 'News Homepage',
    description: 'My first level 2 Frontend Mentor challenge. This is a slightly more complex layout made with CSS grid, as well as having a mobile-only hamburger menu.',
    url: 'news-homepage',
    imageURL: NewsHomepage
  },
  {
    name: 'Advice Generator',
    description: 'Another level 2 Frontend Mentor challenge. This uses a very basic API to generate a random piece of advice.',
    url: 'advice-generator',
    imageURL: AdviceGenerator
  },
]