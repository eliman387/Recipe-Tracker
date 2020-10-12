import React, { Component } from 'react';
import axios from 'axios';

class DetailedPage extends Component {

  constructor() {
    super()
    this.state = {
      recipes: [],
    }
  }
  async cookIt() {
    const foodURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/Recipes`;
    const response = await axios.get(foodURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    }
      
    );
    console.log(response.data);
    this.setState({ recipes: response.data.records });
  }

  async componentDidMount() {
    await this.cookIt();
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default DetailedPage;