import React from "react";
import DayList from "../components/DayList";
import DocList from "../components/DocList";
import ProjectCards from "../components/ProjectCards";
import DocListUpload from '../components/DocListUpload'
import ButtonComponent from "../components/ButtonComponent";
import { Container } from "reactstrap";

function DashboardPage() {
  return (
    <div>
      <Container>
          {/* Projectcards */}
        <ProjectCards />
        {/* Daylist */}
        <DayList />
        <ButtonComponent buttonColor={'primary'} buttonText={'tambah '} />
        {/* Doclist */}
        <DocList />
        <DocListUpload/>
      </Container>
    </div>
  );
}

export default DashboardPage;
