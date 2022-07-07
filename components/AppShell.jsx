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
        <NavLayout />
        <Provider value={client}>
          <IonSplitPane contentId="main">
            <IonRouterOutlet id="main">
              <Route exact path="/" render={() => <LoginPage />} />
              <Route exact path="/home" render={() => <Home />} />
              <Route exact path="/consult" render={() => <Consult />} />
              <Route exact path="/packages" render={() => <Packages />} />
              <Route exact path="/doctors" render={() => <Doctors />} />
              <Route exact path="/profile" render={() => <Profile />} />
              <Route exact path="/orders" render={() => <Orders />} />
              <Route
                exact
                path="/package/:id"
                render={() => <PackageDetails />}
              />
              <Route exact path="/articles" render={() => <ArticlePage />} />
              <Route
                exact
                path="/articles/:slug"
                render={() => <ArticlePageSlug />}
              />
              <Route
                exact
                path="/doctors/book-appointment/:id"
                render={() => <BookOfflineAppointment />}
              />
              <Route
                exact
                path="/appointments"
                render={() => <Appointments />}
              />
              <Route
                exact
                path="/appointment"
                render={() => <AppointmentPage />}
              />
              <Route
                exact
                path="/appointment/reschedule/:id"
                render={() => <RescheduleAppointment />}
              />
              <Route
                exact
                path="/consultations"
                render={() => <Consultations />}
              />
              <Route
                exact
                path="/consultation"
                render={() => <ConsultationDetailsPage />}
              />
              <Route exact path="/lab-results" render={() => <LabResults />} />
              <Route
                exact
                path="/my-practitioners"
                render={() => <MyPractitioners />}
              />
              <Route
                exact
                path="/user-profile"
                render={() => <UserProfile />}
              />
              <Route
                exact
                path="/lab-results/details"
                render={() => <ResultDetails />}
              />
              <Route exact path="/doctor" render={() => <Doctor />} />
              <Route
                exact
                path="/online-consultation/book-consultation"
                render={() => <BookConsultation />}
              />

              <Route
                exact
                path="/email-sign-up"
                render={() => <EmailSignUp />}
              />
              <Route
                exact
                path="/forgot-password"
                render={() => <ForgotPassword />}
              />
              <Route
                exact
                path="/change-password"
                render={() => <ChangePassword />}
              />
              <Route
                exact
                path="/articles/categories/:category"
                render={() => <CategoryName />}
              />
              <Route exact path="/settings" render={() => <Settings />} />
              <Route exact path="/orders" render={() => <Orders />} />
              <Route
                exact
                path="/order/:id"
                render={() => <OrderDetailsPage />}
              />
              <Route exact path="/test-gql" render={() => <GraphQL />} />
            </IonRouterOutlet>
          </IonSplitPane>
        </Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
