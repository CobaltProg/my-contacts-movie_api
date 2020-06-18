import React, { Component } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { api } from '../../config/key';
import Display from './Display';
import axios from 'axios';

class Counter extends Component {
  constructor(props) {
    super(props);

    // Initial State
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const params = {
      api_key: api,
      language: 'en',
      sort_by:'popularity.desc',
      include_adult: false,
      include_video: false,
      page: 1,
    };
    axios.get('https://api.themoviedb.org/3/discover/movie?', {
      params: this.params,
    }).then((res) => {
      this.setState({ date: res.date, isLoading: true });
    });
  }

  toogleView(theme) {
    axios.get('https://api.themoviedb.org/3/discover/${theme}', {
      params: this.params, 
    }) .then((res) => {
      this.setState({ data: res.data, isLoading: true });
    });
  }
  

  handleSubmit(e) {
    e.preventDefault();
    const { input } = this.state;
    const paramsSubmit = this.params;
    delete paramsSubmit.include_video;
    delete paramsSubmit.sort_by;
    paramsSubmit.query = input;
    const { input } = this.state;
    axios.get('https://api.themoviedb.org/3/search/movie?', {
      params: paramsSubmit,
    })   .then((res) => {
      this.setState({ data: res.data, isLoading: true });
    });
  
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }


  render() {
    const { data, isLoading, input } = this.state;

    if (!isLoading) {
      return (
        <h1>Is Loading</h1>
      );
    }
    return (
      <div>
        <Button className="button" onClick={() => this.toogleView('movie')} variant="primary">Voir Films</Button>
        <Button onClick={() => this.toogleView('tv')} variant="primary">Voir Séries</Button>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Chercher un Film"
              aria-label="Chercher un Film"
              aria-describedby="basic-addon2"
              value={input}
              onChange={(event) => this.handleChange(event)}
              type="text"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Chercher</Button>
            </InputGroup.Append>
          </InputGroup>
        </form>
        <Display data={data} />
      </div>
    );
  }
}

export default Counter;
