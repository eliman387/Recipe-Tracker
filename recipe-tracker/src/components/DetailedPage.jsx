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
  const foodURL = "https://api.airtable.com/v0/appRUxa3NaZG83Bqs/Recipes?api_key=keyRa5C3P5JGBT5JH";
    const response = await axios.get(foodURL);
    console.log(response.data.message);
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