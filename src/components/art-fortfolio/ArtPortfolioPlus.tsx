import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, CardWrapper, Card, FavoritePic } from "./styles";
import { cardContent } from "../../constants";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Loading from "../loading/Loading";

interface Artwork {
  id: number;
  picture: string;
  title: string;
}

interface Favorite {
  [key: number]: boolean;
}

const ArtPortfolioPlus: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const [favoritesPicOne, setFavoritesPicOne] = useState(false);
  const [favoritesPicTwo, setFavoritesPicTwo] = useState(false);
  const [favoritesPicThree, setFavoritesPicThree] = useState(false);
  const [favoritesPicFour, setFavoritesPicFour] = useState(false);

  const handleFavorite = () => {
      setFavoritesPicOne(!favoritesPicOne);
  };

  const handleFavoriteTwo = () => {
        setFavoritesPicTwo(!favoritesPicTwo);
    };

  const handleFavoriteThree = () => {
        setFavoritesPicThree(!favoritesPicThree);
  }

  const handleFavoriteFour = () => {
        setFavoritesPicFour(!favoritesPicFour);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [params]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <CardWrapper>
          <Card>
            <Link to={`/picture-details/${cardContent[0].id}/${encodeURIComponent(cardContent[0].picture)}`} key={cardContent[0].id}>
              <div key={cardContent[0].id}>
                <img src={cardContent[0].picture} alt={cardContent[0].title} style={{ width: "128%" }} />
              </div>
            </Link>
            {cardContent[0].id && (
              <FavoritePic onClick={() => handleFavorite()}>
                {favoritesPicOne ? <AiFillHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }} /> : <AiOutlineHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}/>}
              </FavoritePic>
            )}
          </Card>
          <Card>
            <Link to={`/picture-details/${cardContent[1].id}/${encodeURIComponent(cardContent[1].picture)}`} key={cardContent[1].id}>
                <div key={cardContent[1].id}>
                    <img src={cardContent[1].picture} alt={cardContent[1].title} style={{ width: "128%" }} />
                </div>
            </Link>
            {cardContent[1].id && (
              <FavoritePic onClick={() => handleFavoriteTwo()}>
                {favoritesPicTwo ? <AiFillHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}/> : <AiOutlineHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}/>}
              </FavoritePic>
            )}
          </Card>
          <Card>
            <Link to={`/picture-details/${cardContent[2].id}/${encodeURIComponent(cardContent[2].picture)}`} key={cardContent[2].id}>
                <div key={cardContent[1].id}>
                    <img src={cardContent[2].picture} alt={cardContent[2].title} />
                </div>
            </Link>
            {cardContent[2].id && (
              <FavoritePic onClick={() => handleFavoriteThree()}>
                {favoritesPicThree ? <AiFillHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}/> : <AiOutlineHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}/>}
              </FavoritePic>
            )}
          </Card>
          <Card>
            <Link to={`/picture-details/${cardContent[3].id}/${encodeURIComponent(cardContent[3].picture)}`} key={cardContent[3].id}>
                <div key={cardContent[3].id}>
                    <img src={cardContent[3].picture} alt={cardContent[3].title} />
                </div>
            </Link>
            {cardContent[3].id && (
              <FavoritePic onClick={() => handleFavoriteFour()}>
                {favoritesPicFour ? <AiFillHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}/> : <AiOutlineHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }}/>}
              </FavoritePic>
            )}
          </Card>
        </CardWrapper>
      </Container>
    </>
  );
};

export default ArtPortfolioPlus;
