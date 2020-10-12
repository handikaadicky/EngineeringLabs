import React from "react";
import DayList from "../components/DayList";
import DocList from "../components/DocList";
import ProjectCards from "../components/ProjectCards";
import DocListUpload from "../components/DocListUpload";
import ButtonComponent from "../components/ButtonComponent";

function DashboardPage() {
  return (
    <div>
      {/* Projectcards */}
      <ProjectCards />
      {/* Daylist */}
      <DayList />
      <ButtonComponent buttonColor={"primary"} buttonText={"tambah"} />
      {/* Doclist */}
      <DocList />
      <DocListUpload />
    </div>
  );
}

export default DashboardPage;
