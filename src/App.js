import React from 'react';
import RecipeSearch from './components/RecipeSearch';
import RecipeBox from './components/RecipeBox';


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      term: '',
      recipe: []
    }
  }
     componentDidMount = () => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(resp => resp.json())
    .then(data => this.setState({ recipe: data.meals}));
  }


 handleChange = (e) => {
    e.preventDefault();
    this.setState({ term: e.target.value})
  }


  fetchRecipes = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.state.term}`)
    .then(resp => resp.json())
    .then(data => this.setState({ recipe: data.meals}))
  }

  render(){
    return (
      <div>
        <RecipeSearch fetchRecipes={this.fetchRecipes}
        handleChange={this.handleChange}/>

       <RecipeBox
        recipe={this.state.recipe}
        currentPage={this.state.currentPage}
        recipesPerPage={this.state.recipesPerPage}
        />
       </div>
    )}
}

export default App
