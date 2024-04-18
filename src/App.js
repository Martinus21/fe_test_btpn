import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import AppShell from "./components/AppShell";

// PAGES
import HomePage from "./pages/home";
import DetailContactPage from "./pages/contact";
import AddContactPage from "./pages/contact/form/AddContact";
import EditContactPage from "./pages/contact/form/EditContact";

function App() {
  return (
    <Router>
      <AppShell>
        <main className="transition-all duration-500 ease-out lg:pb-0 mb-[66px] lg:mb-0 pb-[20px] relative mt-[66px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailContactPage />} />
            <Route path="/add" element={<AddContactPage />} />
            <Route path="/edit/:contactID" element={<EditContactPage />} />
          </Routes>
        </main>
      </AppShell>
    </Router>
  );
}

export default App;
