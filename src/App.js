import React from 'react';
import axios from 'axios'
import BookList from './components/BookList';
import Password from './components/Password';
import AddBook from './components/AddBook';
import FilterBook from './components/FilterBook';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filter: "",
      activeID: -1,
      signedIn: false,
    };
  }
  componentDidMount(){
    axios.get("/api/get").then(
      (response) => {
        this.setState({books: response.data.books});
      }
    );
  }
  attemptSignIn(p) {
    axios.post("/api/signin", {password: p}).then(
      (response) => {
        if (response.data.success) {
          this.setState({signedIn: true});
        }
      }
    );
  }
  setFilter(f) {
    this.setState({filter: f, activeID: -1});
  }
  setActive(i) {
    this.setState({activeID: i});
  }
  deleteBook(i) {
    var index = this.state.books.findIndex(function(v) {
      return v._id === i;
    });
    if (index) {
      var books = this.state.books;
      books.splice(index, 1);
      this.setState({books: books});
      axios.post("/api/delete", {_id: i}).then(
        (response) => {
        }
      );
    }
  }
  addBook(t, a) {
    axios.post("/api/post", {title: t, author: a}).then(
      (response) => {
        if (response.data.success) {
          var b = this.state.books;
          var id = response.data.bookID;
          b.push({title: t, author: a, _id: id});
          this.setState({books: b, activeID: -1});
        }
      }
    );
  }
  mainTools() {
    if (this.state.signedIn) {
      return (
        <AddBook addBook={this.addBook.bind(this)}></AddBook>
      );
    }
    return ( <Password submit={this.attemptSignIn.bind(this)}></Password> )
  }
  render() {
    return  (
      <div className="container">
        { this.mainTools() }
        <FilterBook filterAction={this.setFilter.bind(this)}></FilterBook>
        <BookList books={this.state.books}
                activeID={this.state.activeID}
                setActive={this.setActive.bind(this)}
                deleteBook={this.deleteBook.bind(this)}
                signedIn={this.state.signedIn}
                filter={this.state.filter}></BookList>
      </div>
    );
  }
}

export default App;
