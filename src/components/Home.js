import React from 'react'

//Config
// eslint-disable-next-line no-unused-vars
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Components
import HeroImage from '../components/HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'

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
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[2].backdrop_path}`}
                        title={state.results[2].original_title}
                        text={state.results[2].overview}
                    />
                : null
            }
            <Grid header='Popular Movies'>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage 
                        }
                        movieId={movie.id}    
                    >

                    </Thumb>
                ))}
            </Grid>
        </>
    )
}

export default Home;