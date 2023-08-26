import React, { useEffect } from "react";
import { useState } from "react";
import add from "../../../public/images/add.svg";
import dashboard from "../../../public/images/dashboard.svg";
import billing from "../../../public/images/billing.svg";
import accoutns from "../../../public/images/accounts.svg";
import hrm from "../../../public/images/hrm.svg";
import report from "../../../public/images/report.svg";
import settings from "../../../public/images/settings.svg";

const MenuData = () => {
  // const [isDashboard, setIsDashboard] = useState(false);
  // const [isUsers, setIsUsers] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");
  const [isAuthentication, setIsAuthentication] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    if (iscurrentState !== "Authentication") {
      setIsAuthentication(false);
    }
  }, [isAuthentication, iscurrentState]);

  const menus = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: dashboard,
      link: "/dashboard",
      iscurrentState,
      click: function () {
        setIscurrentState("Dashboard");
      },
    },
    {
      id: "addStock",
      label: "Add Stock",
      icon: add,
      // icon: "ri-add-circle-line ri-xl",
      link: "/addStock",
      iscurrentState,
      click: function () {
        // e.preventDefault();
        setIscurrentState("AddStock");
      },
    },
    {
      id: "billing",
      label: "Billing",
      icon: billing,
      // icon: "1ri-bill-line ri-xl",
      link: "/billing",
      iscurrentState,
      click: function () {
        // e.preventDefault();
        setIscurrentState("Billing");
      },
    },
    {
      id: "accounts",
      label: "Accounts",
      // icon: "  ri-xl",
      icon: accoutns,
      link: "/accounts",
      iscurrentState,
      click: function () {
        // e.preventDefault();
        setIscurrentState("Accounts");
      },
    },
    {
      id: "hrm",
      label: "HRM",
      // icon: "  ri-xl",
      icon: hrm,
      link: "/hrm",
      iscurrentState,
      click: function () {
        // e.preventDefault();
        setIscurrentState("HRM");
      },
    },
    {
      id: "reporting",
      label: "Reporting",
      // icon: "  ri-xl",
      icon: report,
      iscurrentState,
      link: "/reporting",
      click: function () {
        // e.preventDefault();
        setIscurrentState("Reporting");
      },
    },
    {
      id: "settings",
      label: "Settings",
      // icon: "  ri-xl",
      icon: settings,
      link: "/settings",
      iscurrentState,
      click: function () {
        // e.preventDefault();
        setIscurrentState("Settings");
      },
    },
    // {
    //   id: "Authentication",
    //   label: "Authentication",
    //   icon: "bx bx-user-check",
    //   link: "/#",
    //   stateVariables: isAuthentication,
    //   click: function (e) {
    //     e.preventDefault();
    //     setIsAuthentication(!isAuthentication);
    //     setIscurrentState("Authentication");
    //   },

    //   children: [
    //     {
    //       id: "Login",
    //       label: "Login",
    //       link: "/login",
    //       parent: "Authentication",
    //     },
    //     {
    //       id: "Register",
    //       label: "Register",
    //       link: "/register",
    //       parent: "Authentication",
    //     },
    //   ],
    // },
  ];

  return <React.Fragment>{menus}</React.Fragment>;
};

export default MenuData;
