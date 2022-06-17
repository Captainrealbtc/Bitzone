import React, { useEffect } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import Index from "./screens";
import BTCWithdrawalScreen from "./screens/BTCWithdrawalScreen";
import DashboardScreen from "./screens/DashboardScreen";
import DepositBTCScreen from "./screens/DepositBTCScreen";
import DepositETHScreen from "./screens/DepositETHScreen";
import ETHWithdrawalScreen from "./screens/ETHWithdrawalScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import DepositRequestScreen from "./screens/BTCDepositRequestsScreen";
import ETHDepositRequestScreen from "./screens/ETHDepositRequestsScreen";
import BTCWithdrawalRequestScreen from "./screens/BTCWithdrawalRequestScreen";
const Routing: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <PreventMultyLogin>
                <Index />
              </PreventMultyLogin>
            }
          />
          <Route path="*" element={<NotFoundScreen />} />
          <Route
            path="/btc-withdrawal"
            element={
              <ProtectUserRoutes>
                <BTCWithdrawalScreen />
              </ProtectUserRoutes>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectUserRoutes>
                <DashboardScreen />
              </ProtectUserRoutes>
            }
          />
          <Route
            path="/btc-deposit"
            element={
              <ProtectUserRoutes>
                <DepositBTCScreen />
              </ProtectUserRoutes>
            }
          />
          <Route
            path="/eth-deposit"
            element={
              <ProtectUserRoutes>
                <DepositETHScreen />
              </ProtectUserRoutes>
            }
          />
          <Route
            path="/eth-withdrawal"
            element={
              <ProtectUserRoutes>
                <ETHWithdrawalScreen />
              </ProtectUserRoutes>
            }
          />
          <Route
            path="/btc-deposit-requests"
            element={
              <ProtectAdminRoutes>
                <DepositRequestScreen />
              </ProtectAdminRoutes>
            }
          />
          <Route
            path="/eth-deposit-requests"
            element={
              <ProtectAdminRoutes>
                <ETHDepositRequestScreen />
              </ProtectAdminRoutes>
            }
          />
          <Route
            path="/btc-withdrawal-requests"
            element={
              <ProtectAdminRoutes>
                <BTCWithdrawalRequestScreen />
              </ProtectAdminRoutes>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

const ScrollToTop = ({ children }: any): any => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return children;
};

const ProtectUserRoutes = ({ children }: any) => {
  const [cookies] = useCookies();
  const user = cookies.user;
  if (!user) {
    return <Navigate to="/" replace />;
  } else return children;
};

const ProtectAdminRoutes = ({ children }: any) => {
  const [cookies] = useCookies();
  const user = cookies.user;
  if (!user?.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  } else return children;
};

const PreventMultyLogin = ({ children }: any) => {
  const [cookies] = useCookies();
  const user = cookies.user;
  if (user) {
    return <Navigate to="/dashboard" replace />;
  } else return children;
};

export default Routing;
