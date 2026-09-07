import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../hooks/useGlobals";

export function OrderTrackRedirect() {
  const { authMember } = useGlobals();
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    if (!authMember) return;

    new OrderService()
      .getMyOrders({ page: 1, limit: 1 })
      .then((orders) => setTarget(orders[0] ? `/order-track/${orders[0]._id}` : "/my-orders"))
      .catch(() => setTarget("/my-orders"));
  }, [authMember]);

  if (!authMember) return <Navigate to="/login" replace />;
  if (!target) return null;

  return <Navigate to={target} replace />;
}
