import React from "react";
import { Col, Row } from "@themesberg/react-bootstrap";

import {
  SalesValueWidget,
  CircleChartWidget,
  AcquisitionWidget,
} from "../components/Widgets";
import { PageVisitsTable } from "../components/Tables";

import { trafficShares } from "../data/charts";

function Dashboard() {
  return (
    <div className="px-4">
      <div className="mt-4">
        <Row className="justify-content-md-center">
          <Col xs={12} className="mb-4 d-none d-sm-block">
            <SalesValueWidget
              title="Sales Value"
              value="10,567"
              percentage={10.57}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={8} className="mb-4">
            <PageVisitsTable />
          </Col>
          <Col xs={4} className="mb-4">
            <CircleChartWidget
              title="Traffic Share"
              data={trafficShares}
              className="mb-4"
            />

            <AcquisitionWidget className="mt-4" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Dashboard;
