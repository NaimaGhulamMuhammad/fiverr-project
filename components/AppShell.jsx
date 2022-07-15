import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
// import { StatusBar, Style } from '@capacitor/status-bar';

import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import Consult from "./pages/consult";
import Doctors from "./pages/doctors";
import Packages from "./pages/packages";
import Profile from "./pages/profile";
import Home from "./pages/home";
import PackageDetails from "./pages/package/PackageDetails";
import Appointments from "./pages/appointments";
import Consultations from "./pages/consulations/consultations";
import LabResults from "./pages/lab-results";
import MyPractitioners from "./pages/my-practitioners";
import UserProfile from "./pages/user-profile";
import AppointmentPage from "./pages/appointment";
import ConsultationDetailsPage from "./pages/consultation";
import ResultDetails from "./pages/lab-results/details";
import Doctor from "./pages/doctor";
import BookConsultation from "./pages/online-consultation/book-consultation";
import LoginPage from "./pages/login";
import EmailSignUp from "./pages/email-sign-up";
import ForgotPassword from "./pages/forgot-password";
import ChangePassword from "./pages/change-password";
import Settings from "./pages/settings";
import Orders from "./pages/orders";
import BookOfflineAppointment from "./pages/doctors/book-appointment/BookOfflineAppointment";
import GraphQL from "./pages/test-gql";
import { createClient, Provider } from "urql";
import NavLayout from "./ui/layouts/NavLayout";
import RescheduleAppointment from "./pages/appointment/reschedule/RescheduleAppointment";
import ArticlePage from "./pages/articles";
import CategoryName from "./pages/articles/categories";
import ArticlePageSlug from "./pages/articles/slug";
import OrderDetailsPage from "./pages/order/orderDetails";
import Loader from "./loader/Loader";
import LoaderContextProvider from "./loader/LoaderContext";
import RouteWrapper from "./route-wrapper/RouteWrapper";

// window.matchMedia("(prefers-color-scheme: dark)").addListener(async (status) => {
//   try {
//     await StatusBar.setStyle({
//       style: status.matches ? Style.Dark : Style.Light,
//     });
//   } catch {}
// });

const client = createClient({
  url: "https://graphqlzero.almansi.me/api",
});

setupIonicReact();

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <LoaderContextProvider>
          <Loader />
          <NavLayout />
          <Provider value={client}>
            <IonSplitPane contentId="main">
              <IonRouterOutlet id="main">
                <Route
                  exact
                  path="/"
                  render={() => (
                    <RouteWrapper>
                      <LoginPage />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/home"
                  render={() => (
                    <RouteWrapper>
                      <Home />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/consult"
                  render={() => (
                    <RouteWrapper>
                      <Consult />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/packages"
                  render={() => (
                    <RouteWrapper>
                      <Packages />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/doctors"
                  render={() => (
                    <RouteWrapper>
                      <Doctors />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/profile"
                  render={() => (
                    <RouteWrapper>
                      <Profile />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/orders"
                  render={() => (
                    <RouteWrapper>
                      <Orders />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/package/:id"
                  render={() => (
                    <RouteWrapper>
                      <PackageDetails />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/articles"
                  render={() => (
                    <RouteWrapper>
                      <ArticlePage />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/articles/:slug"
                  render={() => (
                    <RouteWrapper>
                      <ArticlePageSlug />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/doctors/book-appointment/:id"
                  render={() => (
                    <RouteWrapper>
                      <BookOfflineAppointment />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/appointments"
                  render={() => (
                    <RouteWrapper>
                      <Appointments />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/appointment"
                  render={() => (
                    <RouteWrapper>
                      <AppointmentPage />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/appointment/reschedule/:id"
                  render={() => (
                    <RouteWrapper>
                      <RescheduleAppointment />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/consultations"
                  render={() => (
                    <RouteWrapper>
                      <Consultations />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/consultation"
                  render={() => (
                    <RouteWrapper>
                      <ConsultationDetailsPage />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/lab-results"
                  render={() => (
                    <RouteWrapper>
                      <LabResults />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/my-practitioners"
                  render={() => (
                    <RouteWrapper>
                      <MyPractitioners />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/user-profile"
                  render={() => (
                    <RouteWrapper>
                      <UserProfile />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/lab-results/details"
                  render={() => (
                    <RouteWrapper>
                      <ResultDetails />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/doctor"
                  render={() => (
                    <RouteWrapper>
                      <Doctor />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/online-consultation/book-consultation"
                  render={() => (
                    <RouteWrapper>
                      <BookConsultation />
                    </RouteWrapper>
                  )}
                />

                <Route
                  exact
                  path="/email-sign-up"
                  render={() => (
                    <RouteWrapper>
                      <EmailSignUp />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/forgot-password"
                  render={() => (
                    <RouteWrapper>
                      <ForgotPassword />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/change-password"
                  render={() => (
                    <RouteWrapper>
                      <ChangePassword />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/articles/categories/:category"
                  render={() => (
                    <RouteWrapper>
                      <CategoryName />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/settings"
                  render={() => (
                    <RouteWrapper>
                      <Settings />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/orders"
                  render={() => (
                    <RouteWrapper>
                      <Orders />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/order/:id"
                  render={() => (
                    <RouteWrapper>
                      <OrderDetailsPage />
                    </RouteWrapper>
                  )}
                />
                <Route
                  exact
                  path="/test-gql"
                  render={() => (
                    <RouteWrapper>
                      <GraphQL />
                    </RouteWrapper>
                  )}
                />
              </IonRouterOutlet>
            </IonSplitPane>
          </Provider>
        </LoaderContextProvider>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
