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
      <div className="searchSection">

        <form onSubmit={this.props.fetchRecipes}>
          <input
            value={this.props.term}
            type="text"
            placeholder="search recipe"
            onChange={this.props.handleChange}
          />
        <button type="submit">search</button>
        </form>
      </div>
    )
  }
}

export default RecipeSearch
