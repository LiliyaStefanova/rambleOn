import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const DifficultyLevels = () => {
  return(
    <ListGroup>
      <ListGroupItem>1 - Flat</ListGroupItem>
      <ListGroupItem>2 - Almost flat</ListGroupItem>
      <ListGroupItem>3 - Small hills</ListGroupItem>
      <ListGroupItem>4 - Bigger hills</ListGroupItem>
      <ListGroupItem>5 - Even bigger hills</ListGroupItem>
      <ListGroupItem>6 - Real actual hills</ListGroupItem>
      <ListGroupItem>7 - Small mountains</ListGroupItem>
      <ListGroupItem>8 - Quite tough</ListGroupItem>
      <ListGroupItem>9 - Very tough</ListGroupItem>
      <ListGroupItem>10 - Super tough</ListGroupItem>
    </ListGroup>
    )
}

export default DifficultyLevels;
