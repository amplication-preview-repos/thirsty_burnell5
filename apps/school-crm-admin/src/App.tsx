import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { ParentList } from "./parent/ParentList";
import { ParentCreate } from "./parent/ParentCreate";
import { ParentEdit } from "./parent/ParentEdit";
import { ParentShow } from "./parent/ParentShow";
import { AdmissionList } from "./admission/AdmissionList";
import { AdmissionCreate } from "./admission/AdmissionCreate";
import { AdmissionEdit } from "./admission/AdmissionEdit";
import { AdmissionShow } from "./admission/AdmissionShow";
import { AcademicCalendarList } from "./academicCalendar/AcademicCalendarList";
import { AcademicCalendarCreate } from "./academicCalendar/AcademicCalendarCreate";
import { AcademicCalendarEdit } from "./academicCalendar/AcademicCalendarEdit";
import { AcademicCalendarShow } from "./academicCalendar/AcademicCalendarShow";
import { ResultList } from "./result/ResultList";
import { ResultCreate } from "./result/ResultCreate";
import { ResultEdit } from "./result/ResultEdit";
import { ResultShow } from "./result/ResultShow";
import { FinanceList } from "./finance/FinanceList";
import { FinanceCreate } from "./finance/FinanceCreate";
import { FinanceEdit } from "./finance/FinanceEdit";
import { FinanceShow } from "./finance/FinanceShow";
import { AssignmentList } from "./assignment/AssignmentList";
import { AssignmentCreate } from "./assignment/AssignmentCreate";
import { AssignmentEdit } from "./assignment/AssignmentEdit";
import { AssignmentShow } from "./assignment/AssignmentShow";
import { ExaminationList } from "./examination/ExaminationList";
import { ExaminationCreate } from "./examination/ExaminationCreate";
import { ExaminationEdit } from "./examination/ExaminationEdit";
import { ExaminationShow } from "./examination/ExaminationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SchoolCRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
        <Resource
          name="Parent"
          list={ParentList}
          edit={ParentEdit}
          create={ParentCreate}
          show={ParentShow}
        />
        <Resource
          name="Admission"
          list={AdmissionList}
          edit={AdmissionEdit}
          create={AdmissionCreate}
          show={AdmissionShow}
        />
        <Resource
          name="AcademicCalendar"
          list={AcademicCalendarList}
          edit={AcademicCalendarEdit}
          create={AcademicCalendarCreate}
          show={AcademicCalendarShow}
        />
        <Resource
          name="Result"
          list={ResultList}
          edit={ResultEdit}
          create={ResultCreate}
          show={ResultShow}
        />
        <Resource
          name="Finance"
          list={FinanceList}
          edit={FinanceEdit}
          create={FinanceCreate}
          show={FinanceShow}
        />
        <Resource
          name="Assignment"
          list={AssignmentList}
          edit={AssignmentEdit}
          create={AssignmentCreate}
          show={AssignmentShow}
        />
        <Resource
          name="Examination"
          list={ExaminationList}
          edit={ExaminationEdit}
          create={ExaminationCreate}
          show={ExaminationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
