import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./pages/TaskManager";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-3xl font-bold text-blue-600">
                Tailwind is working!
              </div>
            }
          />
          <Route path="/task-manager" element={<TaskManager />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
