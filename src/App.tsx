import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";

import { HomePage } from "./pages/Home/HomePage";
import { EducationPage } from "./pages/Education/EducationPage";
import { CustomGoalPage } from "./pages/CustomGoal/CustomGoalPage";
import { FaqPage } from "./pages/Faq/FaqPage";
import { ContactPage } from "./pages/Contact/ContactPage";
// import { LoginPage } from "./pages/Login/LoginPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/undervisning" element={<EducationPage />} />

          <Route path="/byg-dit-eget-maal" element={<CustomGoalPage />} />

          <Route path="/faq" element={<FaqPage />} />

          <Route path="/kontakt" element={<ContactPage />} />

          {/* <Route path="/login" element={<LoginPage />} /> */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
