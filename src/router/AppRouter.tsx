import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/organisms/Footer/Footer";
import { Header } from "../components/organisms/Header/Header";
import { ContactPage } from "../pages/Contact/ContactPage";
import { CustomGoalPage } from "../pages/CustomGoal/CustomGoalPage";
import { EducationPage } from "../pages/Education/EducationPage";
import { FaqPage } from "../pages/Faq/FaqPage";
import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { NotFoundPage } from "../pages/NotFound/NotFoundPage";
import { GoalPage } from "../pages/Goal/GoalPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/undervisning" element={<EducationPage />} />
        <Route path="/byg-dit-eget-maal" element={<CustomGoalPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/maal/:id" element={<GoalPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
