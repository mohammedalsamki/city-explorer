import React, { Component } from 'react';
import Location from './components/Location';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies';
import { Form, Button, Card, Table, CardColumns } from 'react-bootstrap/';
import './App.css';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city_name: "",
      type: "",
      lat: "",
      lon: "",
      showData: false,
      moviesInfor: [],
      showmovies: false,
      movieError: '',
    }
  }
  // viewData = async (e) => {
  //   e.preventDefault();
  //   let cityName = e.target.userInput.value;


  //   let movieDataInformation = `${process.env.REACT_APP_URL}/movies?city=${cityName}`;

  //   try{
  //     let moviesValu = await axios.get(movieDataInformation);
  //     console.log(moviesValu)
  //     this.setState({
  //       moviesInfor: moviesValu.data,
  //       showmovies: true
  //     })
  //     console.log(this.state.moviesInfor)
  //   }
  //   catch(err){
  //     this.setState({
  //       movieError: err,
  //       showmovies: false
  //     })
  //   }
  // }

  handleLocation = (e) => {
    let city_name = e.target.value;
    this.setState({
      city_name: city_name
    })
  }
  handleSubmit = (e) => {
    if (this.state.city_name !== '') {

      // console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
      e.preventDefault();
      let config = {
        method: "GET",
        baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=pk.c478560a12e47d17aa9e3454ee3eb63e&q=${this.state.city_name}`
      }
      axios(config).then(res => {
        let responseData = res.data[0]
        this.setState({
          city_name: responseData.display_name,
          lon: responseData.lon,
          lat: responseData.lat,
          type: responseData.type,
          showData: true

        })
      })
        .then(() => {
          axios.get(`https://city-explore-api.herokuapp.com/movies?city${this.state.city_name}`).then(
            res => {
              this.setState({
                showmovies: true,
                moviesInfor: res.data

              })
            }

          )
        })
      this.setState({ movieError: false })
    }
    else {
      this.setState({
        movieError: true
      })

    }
  };
        

  render() {
    return (
      <div className='main'>
        <h1>Welcome to City explorer</h1>
        <SearchForm className='SearchForm' handleLocation={this.handleLocation} handleSubmit={this.handleSubmit} viewData={this.viewData} />
        {
          this.state.showData &&
          <Location className='Location' city_name={this.state.city_name}
            type={this.state.type}
            lat={this.state.lat}
            lon={this.state.lon}

          />
        }
        <Card.Img className='cardImg' src={`https://maps.locationiq.com/v3/staticmap?key=pk.c478560a12e47d17aa9e3454ee3eb63e&center=${this.state.lat},${this.state.lon}`} alt="Card image" height='500px' />
      
          {/* {this.state.showmovies &&
            this.state.moviesInfor.map(item => (
              <Movies
                Title={item.title}
                description={item.overview}
                imgURL={item.image_ur}
                data={item.released_on}
                vote={item.average_votes}
              />
            ))}
        </CardColumns> */}




        {/* <div className='row' >

          {this.state.showmovies && this.state.moviesInfor.map(value => {
            return <Movies title={value.title}
              Title={value.title}
              description={value.overview}
              imgURL={value.image_ur}
              data={value.released_on}
              vote={value.average_votes}
            />
          })
          }
          {this.state.movieError && <p>error in getting data</p>}

        </div> */}
       {this.state.showmovies && <Movies moviesInfor={this.state.moviesInfor}/>}


      </div>
    )
  }
}

export default App;