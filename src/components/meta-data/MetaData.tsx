import Helmet from 'react-helmet'

interface MetaDataProps {
    title: string
}


const MetaData = (props: MetaDataProps) => {
    return (
        <>
                <Helmet>
                    <title>Art-{props.title}</title>
                </Helmet>
        </>
    )
}

export default MetaData