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
          <div className="row">
            <div className="col-sm-6">
          <p className="instructions">{rec.strInstructions}</p>
          </div>
          <div className="col-sm-6">
            <iframe title={rec.strMeal} width="560" height="315" src={(rec.strYoutube).replace("watch?v=", "embed/")}
            frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen >
            </iframe>
          </div>
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
