import React from 'react'

//Config
// eslint-disable-next-line no-unused-vars
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//Components
import HeroImage from '../components/HeroImage'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner from './Spinner'
import SearchBar from './SearchBar'
import Button from './Button'

//Hook
import { useHomeFetch } from '../hooks/useHomeFetch'
//Image
// eslint-disable-next-line no-unused-vars
import NoImage from '../images/no_image.jpg'

const Home = () => {

    const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch()
    console.log(state)
    if (error) return <div>Something went wrong ...</div>;
    return (
        <>
            {
                !searchTerm && state.results[8] ?
                    <HeroImage
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[8].backdrop_path}`}
                        title={state.results[8].original_title}
                        text={state.results[8].overview}
                    />
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
            <Grid header={ searchTerm ? `Search Results for: ${searchTerm}` : 'Popular Movies'}>
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

            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button text='Load More' callback={() => setIsLoadingMore(true)}></Button>
            )}
        </>
    )
}

export default Home;