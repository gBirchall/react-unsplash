import axios from "axios";

//use create to make a boilerplate for the .get method in app.js

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WnRsIo60yfxJR2VtIVNLDayLRiYK2RCjZybE8IWtmRk",
  },
});

//previous function that was in app.js just using axios.get
// onSearchSubmit = async (term) => {
//     const response = await axios.get("https://api.unsplash.com/search/photos", {

//       params: { query: term },
//     }); //Other way to handle the async response
//     //.then((response) => console.log(response.data.results));
//     this.setState({ images: response.data.results });
//   };
