import React, { Component } from 'react';
import { Grid, Row, Col, PanelGroup, Panel, Accordion, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

class Books extends Component {

  render() {
    let bookItems;
    if (this.props.books) {
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        let thumbnail = book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : '';
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let description = book.volumeInfo.description;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink;
        let buttonkey = "button" + id;
        let groupkey = "group" + id;
        let buyNowButton;
        if (buyLink!=='undefined'&& buyLink!=null) {
          buyNowButton = <Button href={buyLink} bsStyle="primary" id={buttonkey}>Buy Now</Button>;
        }
        else{
          buyNowButton =<h6>Link Not Available</h6>;
        }

        return (
          <PanelGroup accordion id={groupkey} key={groupkey}>
            <Panel key={id} header={title} eventKey={id} >
              <Panel.Heading>

                <Panel.Title toggle>{title}</Panel.Title>
              </Panel.Heading>

              <Panel.Body collapsible>
                <img src={thumbnail} role="presentation" />
                <ListGroup>
                  <ListGroupItem><strong>Categories:</strong>{categories}</ListGroupItem>
                  <ListGroupItem><strong>Authors:</strong>{authors}</ListGroupItem>
                  <ListGroupItem><strong>Publisher:</strong>{publisher}</ListGroupItem>
                  <ListGroupItem><strong>Publish Date:</strong>{publishedDate}</ListGroupItem>
                  <ListGroupItem><strong>Page Count:</strong>{pageCount}</ListGroupItem>
                  <ListGroupItem><strong>Average Rating:</strong>{averageRating}</ListGroupItem>
                </ListGroup>

                <h3>Book Description</h3>
                {description}
                <hr />
                {buyNowButton}
              </Panel.Body>
            </Panel>
          </PanelGroup>
        );
      });
    }

    return (

      <div>
        {bookItems}
      </div>
    );
  }
}

export default Books;
