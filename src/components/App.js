import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: [],
  };
  //use async keyword before method name and add await keyword before
  //the thing that we need to wait for (axios.get())
  onSearchSubmit = async (term) => {
    //we use unsplash.get instead of axios as we used .create in unsplash.js
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    }); //Other way to handle the async response
    //.then((response) => console.log(response.data.results));
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar customSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
