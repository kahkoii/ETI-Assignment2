import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelfFeedback from "./pages/SelfFeedback";
import Feedback from "./pages/Feedback";
import ModuleFeedback from "./pages/ModuleFeedback";
import ClassFeedback from "./pages/ClassFeedback";
import MissingPage from "./pages/MissingPage";
import Layout from "./pages/Layout";

function App() {
  let id = "";
  // Retrieve id using auth token
  id = "T024681012";

  return (
    <Router>
      <Routes>
        <Route path="/feedback" element={<Layout />}>
          <Route index element={<SelfFeedback studentId={id} />} />
          <Route path=":studentId" element={<Feedback userId={id} />} />
          <Route
            path="module/:moduleId"
            element={<ModuleFeedback userId={id} />}
          />
          <Route
            path="class/:classId"
            element={<ClassFeedback userId={id} />}
          />
        </Route>
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
