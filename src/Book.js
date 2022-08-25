import React, { Component } from "react";
 
class Book extends Component {
  render() {
    return (
      <div>
        <h2>My Favorite Book is Meditation By marcus Aurelius</h2>
        <p>Here is the link to the book: 
             <a href="https://www.amazon.com/Meditations-Thrift-Editions-Marcus-Aurelius/dp/048629823X">link</a>.
        </p>
      </div>
    );
  }
}
 
export default Book;