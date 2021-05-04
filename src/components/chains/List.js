import { Table, Col, Row, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import chains from "./";
import AddToKeplr from "./AddToKeplr";

const Keplr = ({ head, description }) => {
  const today = new Date();
  return (
    <div className="starter-template text-center mt-5">
      <Row
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "1em",
        }}
      ></Row>
      <Row
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Chain ID</th>
                <th style={{ width: "120px" }}>Start</th>
                <th style={{ width: "120px" }}>End</th>
                <th style={{ width: "120px" }}>Status</th>
                <th style={{ width: "120px" }}>Incentivized</th>
                <th>Links</th>
                <th style={{ width: "120px" }}></th>
              </tr>
            </thead>
            <tbody>
              {chains.map((chain, index) => {
                var end_time = new Date(chain.end_date) ?? null;
                return (
                  <tr
                    style={{
                      verticalAlign: "middle",
                    }}
                    key={index}
                  >
                    <td>{chain.name}</td>
                    <td>{chain.chainId}</td>
                    <td>{chain.start_date}</td>
                    <td>{chain.end_date}</td>
                    <td>
                      {chain.end_date !== "" &&
                      chain.end_date !== null &&
                      end_time < today
                        ? "Ended"
                        : "Active"}
                    </td>
                    <td>{chain.incentivized ? "✅" : "✖️"} </td>
                    <td>
                      {" "}
                      {chain.links &&
                        chain.links.map((link, index) => (
                          <Link
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            to={{ pathname: link.url }}
                            color="primary"
                            title={link.tooltip}
                            style={{
                              marginInlineEnd: 10,
                              fontSize: "large",
                              verticalAlign: "middle",
                            }}
                          >
                            {" "}
                            <FontAwesomeIcon
                              icon={[link.prefix, link.iconName]}
                            />
                          </Link>
                        ))}
                    </td>
                    <td>{chain.keplr && AddToKeplr(chain.keplr)}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default Keplr;
