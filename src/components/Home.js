import React from 'react'

//Config
// eslint-disable-next-line no-unused-vars
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Components
import HeroImage from '../components/HeroImage'

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//Image
// eslint-disable-next-line no-unused-vars
import NoImage from '../images/no_image.jpg'

const Home = () => {

    const { state, loading, error } = useHomeFetch()
    console.log(state)

    return (
        <>
            {
                state.results[0] ?
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                        title={state.results[0].original_title}
                        text={state.results[0].overview}
                    />
                : null
            }
        </>
    )
}

export default Home;