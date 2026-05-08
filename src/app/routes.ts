import { createBrowserRouter } from "react-router";
import ExplorePage from "./components/ExplorePage";
import MyProjectsPage from "./components/MyProjectsPage";
import MySchedulePage from "./components/MySchedulePage";
import MessagingPage from "./components/MessagingPage";
import ProjectDetailPage from "./components/ProjectDetailPage";
import CommitmentPage from "./components/CommitmentPage";
import DashboardPage from "./components/DashboardPage";
import CreateProjectStep0 from "./components/CreateProjectStep0";
import CreateProjectStep1 from "./components/CreateProjectStep1";
import CreateProjectStep2 from "./components/CreateProjectStep2";
import CreateProjectStep3 from "./components/CreateProjectStep3";
import CreateProjectStep4 from "./components/CreateProjectStep4";
import CreateProjectStep5 from "./components/CreateProjectStep5";
import CreateProjectStep6 from "./components/CreateProjectStep6";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: ExplorePage,
  },
  {
    path: "/my-projects",
    Component: MyProjectsPage,
  },
  {
    path: "/my-schedule",
    Component: MySchedulePage,
  },
  {
    path: "/messaging",
    Component: MessagingPage,
  },
  {
    path: "/project/:id",
    Component: ProjectDetailPage,
  },
  {
    path: "/commit/:id",
    Component: CommitmentPage,
  },
  {
    path: "/project/:id/tasks",
    Component: DashboardPage,
  },
  {
    path: "/create-project/0",
    Component: CreateProjectStep0,
  },
  {
    path: "/create-project/1",
    Component: CreateProjectStep1,
  },
  {
    path: "/create-project/2",
    Component: CreateProjectStep2,
  },
  {
    path: "/create-project/3",
    Component: CreateProjectStep3,
  },
  {
    path: "/create-project/4",
    Component: CreateProjectStep4,
  },
  {
    path: "/create-project/5",
    Component: CreateProjectStep5,
  },
  {
    path: "/create-project/6",
    Component: CreateProjectStep6,
  },
  {
    path: "*",
    Component: ExplorePage,
  },
]);
