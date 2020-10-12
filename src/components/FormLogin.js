import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";

function FormLogin() {
  return (
    <div className="App">
      <Container>
        <h1>Engineering Labs</h1>
        <Form>
          <FormGroup>
            <Label for="email">Username</Label>
            <Input type="email" name="email" id="email"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email"></Input>
          </FormGroup>
        </Form>
        <Button block={true}  color="primary">Login</Button>
        <br />
        <Button block={true} color="primary">Register</Button>
      </Container>
    </div>
  );
}

export default FormLogin;
