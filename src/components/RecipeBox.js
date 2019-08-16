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

    const { currentPage, recipesPerPage} = this.state
    const {recipe} = this.props

    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipe.slice(indexOfFirstRecipe, indexOfLastRecipe)


    // let newObj = {}
    // const newObjKeys = Object.keys(currentRecipes[0]).filter(key => key.includes('strIngredient'))
    //
    // newObjKeys.forEach(key => {newObj[key] = currentRecipes[key]})
    //
    // console.log(newObjKeys)
    //


        // let newObj = {}
        // const newObjKeys = Object.keys(currentRecipes[0]).filter(key => key.includes('strIngredient'))
        //
        // newObjKeys.forEach(key => { newObj[key] = currentRecipes[key] })
        //
        //


    //
    // let ingr = /strIngredient/g;
    //
    // const showIngredients = recipe.map(item => item.match(ingr))
    // console.log(showIngredients)







    //   currentRecipes.map(rec => <li key={rec.id}>
    //    {rec.strIngredient[i]}, {rec.strMeasure[i]}
    //    </li>
    //  )
    // }

    // const ingredientList = currentRecipes.map(rec =>
    //   <li key={rec.id}>
    //   {rec["strIngredient"]}, {rec["strMeasure"]}
    //   </li>
    // )


  //   const tempIngr = []
  //     for(let i = 1; i <= 20; i++) {
  //       tempIngr.push(`rec.strIngredient${i}`)
  //     }
  //
  // const showIngredients = tempIngr.map( item => item )


    const renderRecipes = currentRecipes.map((rec, idx) => {
      return (
        <div className="recipeCard" key={rec.id} id={rec.id}>
          <h2>{rec.strMeal}</h2>
          <div className="row">
            <div className="col-sm-6">
            <h5>Instructions</h5>
          <p className="instructions">{rec.strInstructions}</p>
          </div>
          <div className="col-sm-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title={rec.strMeal}
                src={(rec.strYoutube).replace("watch?v=", "embed/")}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                className="embed-responsive-item"
                 >
              </iframe>
              </div>
              <hr />
              <h5>Ingredients</h5>
              <ul className="ingredientList">

                <li key={rec.id}>{rec.strIngredient1}, {rec.strMeasure1}</li>
              </ul>

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
