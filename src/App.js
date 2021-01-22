import { HashRouter as Router, Route } from "react-router-dom";
import Employee from "./component/EmployeeCard/EmployeeCard";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/" component={Employee} />
      <Route exact path="/employee" component={Employee} />
    </Router>
  );
}

export default App;
