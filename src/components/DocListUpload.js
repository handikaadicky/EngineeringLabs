import React from "react";
import {
  ListGroup,
  ListGroupItem,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

function DocListUpload() {
  return (
    <div>
      <ListGroupItem>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">input file dokumen disini</FormText>
      </ListGroupItem>
    </div>
  );
}

export default DocListUpload;
