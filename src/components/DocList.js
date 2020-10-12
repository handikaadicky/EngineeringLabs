import React from "react";
import {
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

function DocList() {
  return (
    <div className="doclist">
      <ListGroup>
        <h4>Documents</h4>
        <ListGroupItem tag="button" action>
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem tag="button" action>
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem tag="button" action>
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem tag="button" action>
          Porta ac consectetur ac
        </ListGroupItem>
        <ListGroupItem tag="button" action>
          Vestibulum at eros
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default DocList;
