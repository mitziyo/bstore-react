import { Outlet } from "react-router-dom";
import "../../../scss/dashboard/dashboard.scss";
import { DashboardSidebar } from "./DashboardSidebar";

export function DashboardLayout() {
  return (
    <section className="bj_account_dashboard" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <DashboardSidebar />
          </div>
          <div className="col-lg-9">
            <div className="dashboard-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
