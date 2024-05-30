import LoginCard from "../components/LoginCard";
import RegisterCard from "../components/RegisterCard";
import CoursesCatalog from "../components/CoursesCatalog";
import Course from "../components/Course";
import MainPage from "../pages/MainPage";
const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginCard />,
  },
  {
    path: "/register",
    element: <RegisterCard />,
  },
  {
    path: "/courses",
    element: <CoursesCatalog />,
  },
  {
    path: "/courses/course",
    element: <Course />,
  },
];

export default routes;
