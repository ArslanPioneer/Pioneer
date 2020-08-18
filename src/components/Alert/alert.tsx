import React, { ReactNode } from "react";
import classNames from "classnames";
export type AlertType = "success" | "info" | "warning" | "error";
interface AlertProps {
  className?: string;
  message: string | ReactNode;
  type: AlertType;
}

const Alert: React.FC<AlertProps> = ({ className, message, type }) => {
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
  });
  return <div className={classes}>{message}</div>;
};

export default Alert;
