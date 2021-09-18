import React, { Component } from 'react'
import Movies from './Movies';
class MovieList extends Component {
    render() {
        let MovieInfo = this.props.MovieInfo;
        return (
            <>
                {
                    moviesInfor.map(value => {
                        return <Movies title={value.title}
                            overview={value.overview}
                            vote_average={value.vote_average}
                            vote_count={value.vote_count}
                            poster_path={value.poster_path}
                            popularity={value.popularity}
                            release_date={value.release_date}
                        />
                    })
                }
                <Movies />
            </>

        )
    }
}

export default MovieList