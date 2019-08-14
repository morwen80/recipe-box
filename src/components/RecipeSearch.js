import React from 'react';

class RecipeSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  render(){
    return (
      <div className="container-fluid searchSection">
      <h1 className="display-1">Recipe Box</h1>
        <form onSubmit={this.props.fetchRecipes}>
        <div className="input-group mb-3">
          <input
            value={this.props.term}
            type="text"
            className="form-control"
            placeholder="search recipe"
            aria-label="Search Recipe"
            aria-describedby="basic-addon2"
            onChange={this.props.handleChange}
          />
          <div className="input-group-append">
            <span className="input-group-text"><button type="submit"><i className="fas fa-search"></i></button></span>
          </div>
        </div>
        </form>
      </div>
    )
  }
}

export default RecipeSearch
