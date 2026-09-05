import { NavLink } from "react-router-dom";
import { serverApi } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";

interface DashboardNavItem {
  to: string;
  icon: string;
  label: string;
}

const NAV_ITEMS: DashboardNavItem[] = [
  { to: "/my-account", icon: "fa-regular fa-user", label: "My Profile" },
  { to: "/my-address", icon: "fa-regular fa-map", label: "My Address" },
  { to: "/my-orders", icon: "fa-solid fa-bag-shopping", label: "My Orders" },
  { to: "/my-ebook-library", icon: "fa-solid fa-book-open", label: "My eBook Library" },
  { to: "/my-list", icon: "fa-regular fa-bookmark", label: "My List" },
  { to: "/my-wishlist", icon: "fa-regular fa-heart", label: "My Wishlist" },
  { to: "/my-rating-reviews", icon: "fa-regular fa-star", label: "My Rating & Reviews" },
  { to: "/my-following-authors", icon: "fa-solid fa-users", label: "My Following Authors" },
];

export function DashboardSidebar() {
  const { authMember } = useGlobals();
  const avatarPath = authMember?.memberImage ? `${serverApi}/${authMember.memberImage}` : "/img/profile-img.png";

  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar__profile">
        <div className="dashboard-sidebar__avatar">
          <img src={avatarPath} alt="Profile" />
          <span className="dashboard-sidebar__status"></span>
        </div>
        <div className="dashboard-sidebar__info">
          <span className="dashboard-sidebar__greeting">Welcome back</span>
          <h4 className="dashboard-sidebar__name">{authMember?.memberNick ?? "Guest"}</h4>
        </div>
      </div>

      <nav className="dashboard-sidebar__nav">
        <ul className="dashboard-nav">
          {NAV_ITEMS.map((item) => (
            <li className="dashboard-nav__item" key={item.to}>
              <NavLink to={item.to} className={({ isActive }) => `dashboard-nav__link${isActive ? " active" : ""}`}>
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
