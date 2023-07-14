import ArtPortfolio from '../components/art-fortfolio/ArtPortfolio'
import ArtPortfolioPlus from '../components/art-fortfolio/ArtPortfolioPlus'
import MetaData from '../components/meta-data/MetaData'

const HomePage = () => {
  return (
    <>
      <MetaData title="Home" />
      <ArtPortfolio />
      <ArtPortfolioPlus />
    </>
  )
}

export default HomePage