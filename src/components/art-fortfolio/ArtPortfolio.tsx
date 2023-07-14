
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, CardWrapper, Card, FavoritePic } from "./styles";
import { cardContent } from "../../constants";
import { AiOutlineHeart, AiFillHeart  } from "react-icons/ai";
import Loading from "../loading/Loading";

interface Artwork {
  id: number;
  picture: string;
  title: string;
}

interface Favorite {
  [key: number]: boolean;
}

const ArtPortfolio: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const [favorites, setFavorites] = useState<Favorite>({});
  console.log(favorites);
  
  const handleFavorite = (id: number) => {
    setFavorites((prevFavorites) => {
      return { ...prevFavorites, [id]: !prevFavorites[id] }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
    
    
  , [params]);

  if (loading) {
    return <Loading />;
  }
 

  return (
    <>
     
    
    <Container>
      <CardWrapper>
        {Array.from({ length: 10 }).map((_, index) => (
           
            <Card key={index}>
                {
                    index < 4 ? (
                    cardContent.map((content: Artwork) => (
                      <><Link to={`/picture-details/${content.id}/${encodeURIComponent(content.picture)}`} key={content.id}>
                        <div key={content.id}>
                          {content.id === index + 1 && (
                            <>
                              <img src={content.picture} alt="{content.title}" />
                            </>
                          )}
                        </div>
                      </Link>
                      <FavoritePic onClick={() => handleFavorite(content.id)}>
                        {favorites[content.id] !== undefined && favorites[content.id] ? (
                          <AiFillHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }} />
                        ) : (
                          <AiOutlineHeart style={{
                            color: "red",
                            fontSize: "24px",
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                          }} />
                        )}
                      </FavoritePic>
                      </>

                    ))
                    ) : (
                      <>
                        {
                          cardContent.map((content) => (
                            < Link to={`/picture-details/${content.id}/${encodeURIComponent(content.picture)}`} key={content.id}>
                            <div key={content.id}>
                                {
    
                                    content.id === index + 1 && (
                                        <>
                                            <img src={content.picture} alt="{content.title}"  style={{width:"64px"}} />
                                        </>
                                    )
                                }
                            </div>
                          </Link>
    
                        ))
                        }
                      </>
                    )
                }
            </Card>
        ))}
      </CardWrapper>
    </Container>
    </>
  );
};

export default ArtPortfolio;
