import { useParams } from 'react-router-dom'



const PictureDetails = () => {
    const { id, picture } = useParams();

  // Decodificar la URL de la imagen
  const decodedPicture = decodeURIComponent(picture as string);

    return (
        <div>
            PictureDetails
            <h1>Picture Details</h1>
            <p>ID: {id}</p>
            <p>Picture: <img src={decodedPicture} alt="Picture" width={150}/></p>
        </div>
    )
}

export default PictureDetails