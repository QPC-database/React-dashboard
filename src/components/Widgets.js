import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Card, Button } from "@themesberg/react-bootstrap";
import { SalesValueChart } from "./Charts";

export const SalesValueWidget = (props) => {
  const { title, value, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card
      className="bg-secondary-alt shadow-sm"
      style={{ backgroundColor: "#aae2d4" }}
    >
      <Card.Header className="d-flex flex-row align-items-center flex-0">
        <div className="d-block">
          <h5 className="fw-normal mb-2">{title}</h5>
          <h3>${value}</h3>
          <small className="fw-bold mt-2">
            <span className="me-2">Yesterday</span>
            <FontAwesomeIcon
              icon={percentageIcon}
              className={`${percentageColor} me-1`}
            />
            <span className={percentageColor}>{percentage}%</span>
          </small>
        </div>
        <div className="d-flex ml-auto">
          <Button variant="secondary" size="sm" className="me-2 mr-2">
            Month
          </Button>
          <Button variant="primary" size="sm" className="me-3 mr-2">
            Week
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="p-2">
        <SalesValueChart />
      </Card.Body>
    </Card>
  );
};
