import React from 'react';
import Pagination from './Pagination';

class RecipeBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentPage: 1,
      recipesPerPage: 2
    }
  }

  // PAGINATION
  handlePageNumber= (e) => {
    this.setState({
      currentPage: Number(e.target.id)
    })
  }

  render(){
  // navigation

    const { currentPage, recipesPerPage} = this.state
    const {recipe} = this.props

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipe.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const renderRecipes = currentRecipes.map((rec, idx) => {
      return (
        <div className="recipeCard" key={rec.id} id={rec.id}>
      <h2 className="text-center">{rec.strMeal}</h2>
      <div class="row">
        <div class="col-sm-7">
      <p className="instructions">{rec.strInstructions}</p>
      </div>
      <div class="col-sm-5">col-sm-4</div>
      </div>

    </div>
      )
    })

    return (
      <div className="recipeBox container-fluid">
      {renderRecipes}




       <Pagination
       recipes={this.props.recipe}
       currentPage={this.state.currentPage}
       recipesPerPage={this.state.recipesPerPage}
       handlePageNumber={this.handlePageNumber}
       />
      </div>
    )
  }
}

export default RecipeBox
