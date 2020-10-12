import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function FormRegister() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen(!dropDownOpen);
  return (
    <div>
      <Container>
        <h1>Register Account</h1>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="email">Username</Label>
            <Input type="email" name="email" id="email"></Input>
          </FormGroup>
          <FormGroup>
            <Label for="email">Password</Label>
            <Input type="email" name="email" id="email"></Input>
          </FormGroup>

          <FormGroup>
            <ButtonDropdown isOpen={dropDownOpen} toggle={toggle}>
              <DropdownToggle caret>Posisi</DropdownToggle>
              <DropdownMenu>
                <DropdownItem name="re">Resident Engineering</DropdownItem>
                <DropdownItem name="ci">Chief Inspector</DropdownItem>
                <DropdownItem name="inspec">Inspector</DropdownItem>
                <DropdownItem name="admin">Administrator</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </FormGroup>

          <Button block={true} color="primary">
            Create User
          </Button>
          <br />
          <Button block={true} color="primary">
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default FormRegister;
