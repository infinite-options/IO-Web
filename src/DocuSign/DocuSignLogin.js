import React, { useState } from "react";
import { Button, Input } from "reactstrap";

import DeleteIcon from "../Assets/images/DeleteIcon.svg";
import AddIcon from "../Assets/images/AddIcon.svg";

export default function DocuSignLogin() {
  // const classes = useStyles();
  const oAuthServiceProvider = "https://account-d.docusign.com"; // demo
  const implicitGrantPath = "/oauth/auth";
  const userInfoPath = "/oauth/userinfo";
  const oAuthClientID = process.env.REACT_APP_DOCUSIGN_INTEGRATION_KEY; // demo
  const oAuthScopes = "signature cors";
  const eSignBase = "/restapi/v2.1";
  const oAuthReturnUrl = "http://localhost:3000/return-page";

  // Set basic variables
  const dsReturnUrl = "http://localhost:3000/return-page";

  const docUrl = "https://docusign.github.io/examples/docs/anchorfields.pdf";
  const logLevel = 0; // 0 is terse; 9 is v

  let accounts = [];
  let _nonce = null;
  let _loginWindow = null;
  let signingCeremonyWindow = null;
  let defaultAccountIndex = 0;
  let at = "";
  let data = {
    implicitGrant: null,
    userInfo: null,
    callApi: null,
    loggedIn: () => {
      setShowUserDetails(true);
      setShowAddRecipients(true);
    },
  };
  const [defaultAccount, setDefaultAccount] = useState("");
  const [apiBaseUrl, setApiBaseUrl] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [envelopeDetails, setEnvelopeDetails] = useState([]);
  const [accessTokenExpires, setAccessTokenExpires] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showAddRecipients, setShowAddRecipients] = useState(false);
  const [showEnvelopeDetails, setShowEnvelopeDetails] = useState(false);
  const [recipients, setRecipients] = useState([]);
  const [subject, setSubject] = useState("");
  const [documentName, setDocumentName] = useState("");
  const [newFile, setNewFile] = useState([]);

  function handleAddDateTabs(i) {
    const fields = [...recipients];
    fields[i]["tabs"]["dateTabs"] === undefined
      ? (fields[i]["tabs"]["dateTabs"] = [])
      : (fields[i]["tabs"]["dateTabs"] = fields[i]["tabs"]["dateTabs"]);
    fields[i]["tabs"]["dateTabs"].push({
      anchorString: "",
      anchorUnits: "",
      anchorXOffset: "",
      anchorYOffset: "",
      anchorCaseSensitive: true,
    });
    console.log(fields);
    setRecipients(fields);
    // setDateTabs(fields);
  }

  function handleChangeDateTabs(i, event, di) {
    const fields = [...recipients];
    fields[i]["tabs"]["dateTabs"][di][event.target.name] = event.target.value;
    setRecipients(fields);
  }
  function handleAddSignTabs(i) {
    const fields = [...recipients];
    fields[i]["tabs"]["signHereTabs"] === undefined
      ? (fields[i]["tabs"]["signHereTabs"] = [])
      : (fields[i]["tabs"]["signHereTabs"] = fields[i]["tabs"]["signHereTabs"]);
    fields[i]["tabs"]["signHereTabs"].push({
      anchorString: "",
      anchorUnits: "",
      anchorXOffset: "",
      anchorYOffset: "",
      anchorCaseSensitive: true,
    });
    console.log(fields);
    setRecipients(fields);
  }

  function handleChangeSignHereTabs(i, event, shi) {
    const fields = [...recipients];
    fields[i]["tabs"]["signHereTabs"][shi][event.target.name] =
      event.target.value;
    setRecipients(fields);
  }
  function handleAddInitialHereTabs(i) {
    const fields = [...recipients];
    fields[i]["tabs"]["initialHereTabs"] === undefined
      ? (fields[i]["tabs"]["initialHereTabs"] = [])
      : (fields[i]["tabs"]["initialHereTabs"] =
          fields[i]["tabs"]["initialHereTabs"]);
    fields[i]["tabs"]["initialHereTabs"].push({
      anchorString: "",
      anchorUnits: "",
      anchorXOffset: "",
      anchorYOffset: "",
      anchorCaseSensitive: true,
    });
    console.log(fields);
    setRecipients(fields);
  }

  function handleChangeInitialHereTabs(i, event, shi) {
    const fields = [...recipients];
    fields[i]["tabs"]["initialHereTabs"][shi][event.target.name] =
      event.target.value;
    setRecipients(fields);
  }
  function handleAddTextTabs(i) {
    const fields = [...recipients];
    fields[i]["tabs"]["textTabs"] === undefined
      ? (fields[i]["tabs"]["textTabs"] = [])
      : (fields[i]["tabs"]["textTabs"] = fields[i]["tabs"]["textTabs"]);
    fields[i]["tabs"]["textTabs"].push({
      anchorString: "",
      anchorUnits: "",
      anchorXOffset: "",
      anchorYOffset: "",
      anchorCaseSensitive: true,
    });
    console.log(fields);
    setRecipients(fields);
  }

  function handleChangeTextTabs(i, event, ti) {
    const fields = [...recipients];
    fields[i]["tabs"]["textTabs"][ti][event.target.name] = event.target.value;
    setRecipients(fields);
  }
  function handleAddRecipients() {
    const fields = [...recipients];
    fields.push({
      name: "",
      email: "",
      recipientId: "",
      tabs: {},
    });
    setRecipients(fields);
  }
  function handleAddOwnerToRecipients() {
    const fields = [...recipients];
    fields.push({
      name: userInfo.name,
      email: userInfo.email,
      recipientId: "",
      tabs: {},
    });
    setRecipients(fields);
  }
  function handleRemoveRecipients(i) {
    const fields = [...recipients];
    fields.splice(i, 1);
    setRecipients(fields);
  }

  function addRecipients() {
    return (
      <div>
        <div
          style={{
            border: "0.5px solid grey ",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            {recipients.map((recipient, idx) => (
              <div>
                {" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                  key={idx}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0.5rem",
                    }}
                  >
                    <th>Name</th>
                    <Input
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        fontColor: "#52330D",
                        fontSize: "20px",
                        border: "4px solid #52330D",
                        outline: "none",
                      }}
                      type="text"
                      className="form-control"
                      name="name"
                      value={recipient.name}
                      onChange={(e) => handleChangeRecipients(idx, e)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0.5rem",
                    }}
                  >
                    <th>Email</th>
                    <Input
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        fontColor: "#52330D",
                        fontSize: "20px",
                        border: "4px solid #52330D",
                        outline: "none",
                      }}
                      type="text"
                      className="form-control"
                      name="email"
                      value={recipient.email}
                      onChange={(e) => handleChangeRecipients(idx, e)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0.5rem",
                    }}
                  >
                    <th>ID</th>
                    <Input
                      style={{
                        boxSizing: "border-box",
                        borderRadius: "20px",
                        fontColor: "#52330D",
                        fontSize: "20px",
                        border: "4px solid #52330D",
                        outline: "none",
                      }}
                      className="form-control"
                      name="recipientId"
                      value={recipient.recipientId}
                      onChange={(e) => handleChangeRecipients(idx, e)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0.5rem",
                    }}
                  >
                    <th>Tabs</th>
                    <p onClick={() => handleAddDateTabs(idx)}>
                      Date Tabs +
                    </p>{" "}
                    <p onClick={() => handleAddSignTabs(idx)}>
                      Sign Here Tabs +
                    </p>{" "}
                    <p onClick={() => handleAddTextTabs(idx)}>Text Tabs +</p>
                    <p onClick={() => handleAddInitialHereTabs(idx)}>
                      Initial Here Tabs +
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "0.5rem",
                      marginTop: "-2rem",
                    }}
                  >
                    {" "}
                    <th style={{ paddingBottom: "0.5rem" }}>
                      Delete Recipient
                    </th>
                    <img
                      src={DeleteIcon}
                      alt="Delete Icon"
                      onClick={() => handleRemoveRecipients(idx)}
                      style={{
                        width: "15px",
                        height: "15px",
                      }}
                    />
                  </div>
                </div>
                <div>
                  {recipient.tabs.dateTabs &&
                  recipient.tabs.dateTabs.length > 0 ? (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "1rem",
                          border: "0.5px solid grey ",
                          width: "100%",
                        }}
                      >
                        <th>Date Tabs</th>
                        {recipient.tabs.dateTabs.map((dateTab, i) => (
                          <div key={i}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "1rem",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Anchor String</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  type="text"
                                  className="form-control"
                                  name="anchorString"
                                  value={dateTab.anchorString}
                                  onChange={(e) =>
                                    handleChangeDateTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Units</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  type="text"
                                  className="form-control"
                                  name="anchorUnits"
                                  value={dateTab.anchorUnits}
                                  onChange={(e) =>
                                    handleChangeDateTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>X OffSet</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  className="form-control"
                                  name="anchorXOffset"
                                  value={dateTab.anchorXOffset}
                                  onChange={(e) =>
                                    handleChangeDateTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Y OffSet</th>{" "}
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  className="form-control"
                                  name="anchorYOffset"
                                  value={dateTab.anchorYOffset}
                                  onChange={(e) =>
                                    handleChangeDateTabs(idx, e, i)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  {recipient.tabs.signHereTabs &&
                  recipient.tabs.signHereTabs.length > 0 ? (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "1rem",
                          border: "0.5px solid grey ",
                          width: "100%",
                        }}
                      >
                        <th>Sign Here Tabs</th>

                        {recipient.tabs.signHereTabs.map((signHereTab, i) => (
                          <div key={i}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "1rem",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Anchor String</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  type="text"
                                  className="form-control"
                                  name="anchorString"
                                  value={signHereTab.anchorString}
                                  onChange={(e) =>
                                    handleChangeSignHereTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Units</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  type="text"
                                  className="form-control"
                                  name="anchorUnits"
                                  value={signHereTab.anchorUnits}
                                  onChange={(e) =>
                                    handleChangeSignHereTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>X OffSet</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  className="form-control"
                                  name="anchorXOffset"
                                  value={signHereTab.anchorXOffset}
                                  onChange={(e) =>
                                    handleChangeSignHereTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Y OffSet</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  className="form-control"
                                  name="anchorYOffset"
                                  value={signHereTab.anchorYOffset}
                                  onChange={(e) =>
                                    handleChangeSignHereTabs(idx, e, i)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  {recipient.tabs.textTabs &&
                  recipient.tabs.textTabs.length > 0 ? (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "1rem",
                          border: "0.5px solid grey ",
                          width: "100%",
                        }}
                      >
                        <th>Text Tabs</th>

                        {recipient.tabs.textTabs.map((textTab, i) => (
                          <div key={i}>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "1rem",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Anchor String</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  type="text"
                                  className="form-control"
                                  name="anchorString"
                                  value={textTab.anchorString}
                                  onChange={(e) =>
                                    handleChangeTextTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Units</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  type="text"
                                  className="form-control"
                                  name="anchorUnits"
                                  value={textTab.anchorUnits}
                                  onChange={(e) =>
                                    handleChangeTextTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>X OffSet</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  className="form-control"
                                  name="anchorXOffset"
                                  value={textTab.anchorXOffset}
                                  onChange={(e) =>
                                    handleChangeTextTabs(idx, e, i)
                                  }
                                />
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  padding: "0.5rem",
                                }}
                              >
                                <th>Y OffSet</th>
                                <Input
                                  style={{
                                    boxSizing: "border-box",
                                    borderRadius: "20px",
                                    fontColor: "#52330D",
                                    fontSize: "20px",
                                    border: "4px solid #52330D",
                                    outline: "none",
                                  }}
                                  className="form-control"
                                  name="anchorYOffset"
                                  value={textTab.anchorYOffset}
                                  onChange={(e) =>
                                    handleChangeTextTabs(idx, e, i)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div>
                  {recipient.tabs.initialHereTabs &&
                  recipient.tabs.initialHereTabs.length > 0 ? (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "1rem",
                          border: "0.5px solid grey ",
                          width: "100%",
                        }}
                      >
                        <th>Initial Here Tabs</th>

                        {recipient.tabs.initialHereTabs.map(
                          (initialHereTab, i) => (
                            <div key={i}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  padding: "1rem",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0.5rem",
                                  }}
                                >
                                  <th>Anchor String</th>
                                  <Input
                                    style={{
                                      boxSizing: "border-box",
                                      borderRadius: "20px",
                                      fontColor: "#52330D",
                                      fontSize: "20px",
                                      border: "4px solid #52330D",
                                      outline: "none",
                                    }}
                                    type="text"
                                    className="form-control"
                                    name="anchorString"
                                    value={initialHereTab.anchorString}
                                    onChange={(e) =>
                                      handleChangeInitialHereTabs(idx, e, i)
                                    }
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0.5rem",
                                  }}
                                >
                                  <th>Units</th>
                                  <Input
                                    style={{
                                      boxSizing: "border-box",
                                      borderRadius: "20px",
                                      fontColor: "#52330D",
                                      fontSize: "20px",
                                      border: "4px solid #52330D",
                                      outline: "none",
                                    }}
                                    type="text"
                                    className="form-control"
                                    name="anchorUnits"
                                    value={initialHereTab.anchorUnits}
                                    onChange={(e) =>
                                      handleChangeInitialHereTabs(idx, e, i)
                                    }
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0.5rem",
                                  }}
                                >
                                  <th>X OffSet</th>
                                  <Input
                                    style={{
                                      boxSizing: "border-box",
                                      borderRadius: "20px",
                                      fontColor: "#52330D",
                                      fontSize: "20px",
                                      border: "4px solid #52330D",
                                      outline: "none",
                                    }}
                                    className="form-control"
                                    name="anchorXOffset"
                                    value={initialHereTab.anchorXOffset}
                                    onChange={(e) =>
                                      handleChangeInitialHereTabs(idx, e, i)
                                    }
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0.5rem",
                                  }}
                                >
                                  <th>Y OffSet</th>
                                  <Input
                                    style={{
                                      boxSizing: "border-box",
                                      borderRadius: "20px",
                                      fontColor: "#52330D",
                                      fontSize: "20px",
                                      border: "4px solid #52330D",
                                      outline: "none",
                                    }}
                                    className="form-control"
                                    name="anchorYOffset"
                                    value={initialHereTab.anchorYOffset}
                                    onChange={(e) =>
                                      handleChangeInitialHereTabs(idx, e, i)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  function handleChangeRecipients(i, event) {
    const fields = [...recipients];
    fields[i][event.target.name] = event.target.value;
    setRecipients(fields);
  }
  // Convert file to base64 string
  const getBase64 = async (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const addFile = (e) => {
    const file = e.target.files[0];
    var base = getBase64(file).then(function (result) {
      setNewFile(result.split(["base64,"][1]));
    });
  };

  const randomNounce = async () => {
    try {
      const url =
        "https://www.random.org/strings/?num=1&len=20&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new";
      let results = await fetch(url, {
        mode: "cors",
        headers: new Headers({
          Accept: `text/html`,
        }),
      });
      if (results && results.ok) {
        // remove the last character, a CR
        return (await results.text()).slice(0, -1);
      }
    } catch (e) {}
    return false;
  };

  /*
   * Create a data URL, then strip the extra stuff to leave just
   * the content with BASE64 encoding
   */
  async function blobToBase64(blob) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result.split(",")[1]);
      };
    });
  }
  console.log(at, accessToken);
  // // returns true for success, false for a problem (see .errMsg)
  async function getUserInfo() {
    let userInfoResponse;
    try {
      userInfoResponse = await fetchUserInfo();
    } catch (e) {
      return false;
    }
    if (!userInfoResponse || !userInfoResponse.ok) {
      return false;
    }

    const userInfoObj = await userInfoResponse.json();
    userInfoResponse = userInfoObj;

    accounts = userInfoObj.accounts.map((a) => ({
      accountId: a.account_id,
      accountExternalId: null,
      accountName: a.account_name,
      accountIsDefault: a.is_default,
      accountBaseUrl: a.base_uri + eSignBase,
      corsError: false,
    }));

    await fetchExternalAccountIds();
    accounts.forEach((a, i) => {
      if (a.accountIsDefault) {
        defaultAccountIndex = i;
      }
    });
    data.userInfo = userInfoObj;

    data.userInfo.defaultAccount = accounts[defaultAccountIndex].accountId;
    data.userInfo.defaultAccountName =
      accounts[defaultAccountIndex].accountName;
    data.userInfo.defaultBaseUrl = accounts[defaultAccountIndex].accountBaseUrl;
    data.userInfo.accessToken = at;
    return true;
  }

  /*
   * fetchExternalAccountIds
   * If an account doesn't support CORS from this client ID, then the external
   * account lookup will fail.
   *
   * External account IDs are used in the Switch Account modal.
   */
  async function fetchExternalAccountIds() {
    for (const account of accounts) {
      try {
        const url = `${account.accountBaseUrl}/accounts/${account.accountId}`;
        const response = await fetch(url, {
          mode: "cors",
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${at}`,
            Accept: `application/json`,
            "X-DocuSign-SDK": "CodePen",
          }),
        });
        const data = response && response.ok && (await response.json());
        account.accountExternalId = data.externalAccountId;
      } catch (e) {
        account.corsError = e instanceof TypeError;
      }
    }
  }
  /*
   * CORS request to userInfo API method
   */
  const fetchUserInfo = async () => {
    return fetch(`${oAuthServiceProvider}${userInfoPath}`, {
      mode: "cors",
      headers: new Headers({
        Authorization: `Bearer ${at}`,
        Accept: `application/json`,
        "X-DocuSign-SDK": "CodePen",
      }),
    });
  };
  const login = async () => {
    _nonce = Date.now(); // default nounce
    _nonce = (await randomNounce()) || _nonce;
    const url =
      `${oAuthServiceProvider}${implicitGrantPath}` +
      `?response_type=token` +
      `&scope=${oAuthScopes}` +
      `&client_id=${oAuthClientID}` +
      `&redirect_uri=${oAuthReturnUrl}` +
      `&state=${_nonce}`;
    _loginWindow = window.open(url, "_blank");
    let newTab = _loginWindow;
    if (!newTab || newTab.closed || typeof newTab.closed == "undefined") {
      // POPUP BLOCKED
      alert("Please enable the popup login window. Then reload this page.");
    }
    console.log("before addeventlistener ");
    _loginWindow.addEventListener("message", messageListener);

    _loginWindow.focus();
  };
  function handleMessage(data) {
    console.log("in handlemessage", data);
    if (!data || data.source !== "oauthResponse") {
      console.log("skip");
      return "skip";
    }
    console.log("in handlemessage", data.source);
    // OAuth response
    if (_loginWindow) {
      _loginWindow.close(); // close the browser tab used for OAuth
    }
    const hash = data.hash.substring(1); // remove the #

    const items = hash.split(/\=|\&/);
    let i = 0;
    let response = {};
    while (i + 1 < items.length) {
      response[items[i]] = items[i + 1];
      i += 2;
    }
    const newState = response.state;
    if (newState !== _nonce) {
      return "error";
    }
    at = response.access_token;
    setAccessToken(response.access_token);
    setAccessTokenExpires(new Date(Date.now() + response.expires_in * 1000));
    // done!

    return "ok";
  }

  let messageListener = async function messageListenerf(event) {
    console.log("in messagelistener", event);
    console.log("here");
    if (!event.data) {
      return;
    }
    const source = event.data.source;
    console.log("in messagelistener source", source);
    if (source === "dsResponse") {
      console.log("in dsresponse");
      //  signingCeremonyEnded(event.data);
      return;
    }
    if (source === "oauthResponse") {
      console.log("in messagelistener implicitgrant", event.data);
      await implicitGrantMsg(event.data);
      return;
    }
  };
  //   messageListener = messageListener.bind(this);
  /*
   * Process incoming implicit grant response
   */
  const implicitGrantMsg = async (eventData) => {
    console.log("in implicitgrantmsg", eventData);
    let oAuthResponse = handleMessage(eventData);
    console.log("in implicitgrantmsg oauth", oAuthResponse);
    if (oAuthResponse === "ok") {
      if (await completeLogin()) {
        console.log("in if completelogin");
        data.loggedIn();
      }
    } else if (oAuthResponse === "error") {
    }
  };

  /*
   * Complete login process including
   * Get user information
   * Set up CallApi object
   * update the user
   */
  async function completeLogin() {
    console.log("in complete login", data);
    const ok = await getUserInfo();
    if (ok) {
      if (logLevel === 0) {
        setUserInfo(data.userInfo);
      } else {
        setUserInfo(data.userInfo);
      }
    } else {
    }
    console.log(data);
    setDefaultAccount(data.userInfo.defaultAccount);
    setApiBaseUrl(data.userInfo.defaultBaseUrl);
    return ok;
  }
  function openInNewTab(e, url) {
    e.preventDefault();
    var win = window.open(url, "_blank");
    win.focus();
  }
  function checkToken() {
    const bufferTime = 15 * 60 * 1000;
    const ok =
      accessToken &&
      accessTokenExpires &&
      Date.now() + bufferTime < accessTokenExpires.getTime();
    return ok;
  }

  /*
   * GET a document from a CORS source and return it as a string
   * with BASE64 encoding.
   */
  async function getDocB64(docUrl) {
    try {
      let results = await fetch(docUrl, {
        mode: "cors",
        headers: new Headers({
          Accept: `*/*`,
        }),
      });
      if (results && results.ok) {
        const doc = await results.blob().then(blobToBase64);
        return doc;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  async function callApiJson({ apiMethod, httpMethod, req, qp }) {
    console.log("in callapijson");
    let body = null;
    if (httpMethod === "POST" || httpMethod === "PUT") {
      body = JSON.stringify(req, null, 4);
    }

    try {
      let headers = new Headers({
        Accept: `application/json`,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        "X-DocuSign-SDK": "CodePen v2",
      });

      let url = `${apiBaseUrl}${apiMethod}`;
      console.log("in callapijson", url);
      if (qp) {
        url += "?" + new URLSearchParams(qp);
      }
      let results = await fetch(url, {
        method: httpMethod,
        mode: "cors",
        headers: headers,
        body: body,
      });
      console.log("in callapijson", results);
      if (results && results.ok) {
        return await results.json();
      } else {
        const res = await results.text();

        return false;
      }
    } catch (e) {
      return false;
    }
  }
  /*
   *  Create the envelope by completely specifying the envelope.
   *  Often the recommended alternative is to first create a template
   *  on the DocuSign platform, then reference the template when
   *  creating the envelope. See the other examples...
   */
  async function createEnvelope(signer) {
    const docB64 = await getDocB64(docUrl); // fetch a document
    console.log("in createEnvelope");
    const f = newFile[0].split(["base64,"][1]);
    const req = {
      emailSubject: subject,
      status: "sent",

      documents: [
        {
          name: documentName,
          documentBase64: newFile[0].split("base64,")[1],
          // documentBase64: docB64,
          fileExtension: "pdf",
          documentId: "1",
        },
      ],
      recipients: {
        signers: signer,
      },
    };
    console.log(req);
    // Make the create envelope API call
    console.log(`Creating envelope.`, defaultAccount);
    const apiMethod = `/accounts/${defaultAccount}/envelopes`;
    const httpMethod = "POST";
    const results = await callApiJson({
      apiMethod: apiMethod,
      httpMethod: httpMethod,
      req: req,
    });

    if (results === false) {
      return false;
    }

    localStorage.setItem("envelopeId", results.envelopeId);
    return results.envelopeId;
  }

  async function getRecipients(envelopeId) {
    console.log(`Getting envelope details.`, envelopeId);
    const apiMethod = `/accounts/${defaultAccount}/envelopes/${envelopeId}/recipients`;
    const httpMethod = "GET";
    const results = await callApiJson({
      apiMethod: apiMethod,
      httpMethod: httpMethod,
      // req: req,
    });

    if (results === false) {
      return false;
    }

    // localStorage.setItem("envelope", results);
    return results;
  }

  /*
   * Create an embedded signing ceremony, open a new tab with it
   */
  async function embeddedSigningCeremony({ envelopeId, signer }) {
    const req = {
      returnUrl: dsReturnUrl,
      authenticationMethod: "None",
      clientUserId: signer.clientUserId,
      email: signer.email,
      userName: signer.name,
    };

    // Make the API call
    const apiMethod = `/accounts/${data.userInfo.defaultAccount}/envelopes/${envelopeId}/views/recipient`;
    const httpMethod = "POST";
    const results = await callApiJson({
      apiMethod: apiMethod,
      httpMethod: httpMethod,
      req: req,
    });
    if (results === false) {
      return false;
    }

    console.log(`Displaying signing ceremony...`);
    signingCeremonyWindow = window.open(results.url, "_blank");
    if (
      !signingCeremonyWindow ||
      signingCeremonyWindow.closed ||
      typeof signingCeremonyWindow.closed == "undefined"
    ) {
      // popup blocked
      alert("Please enable the popup window signing ceremony");
    }
    signingCeremonyWindow.focus();
    return true;
  }
  /*
   * The doit function is the example that is triggered by the
   * Button. The user is already logged in (we have an access token).
   */

  const doit = async () => {
    console.log("in do it");
    const signer = recipients;
    console.log(signer);
    const envelopeId = await createEnvelope(signer);
    if (envelopeId) {
      console.log(`Envelope ${envelopeId} created.`);
      const envelopeRecipients = await getRecipients(envelopeId);
      setEnvelopeDetails(envelopeRecipients.signers);
      setShowEnvelopeDetails(true);
    }
    setShowAddRecipients(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "1rem",
        padding: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "div",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <div>
          {" "}
          <Button
            style={{
              fontSize: "20px",
              marginTop: "2rem",
              border: "3px solid #52330D",
              color: "#52330D",
              borderRadius: "42px",
              fontFamily: "Avenir LT Std 45 Book",
              fontWeight: "600",
              padding: "1rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              textTransform: "none",
              backgroundColor: "white",
            }}
            type="Button"
            onClick={() => {
              login();
            }}
          >
            Login to DocuSign
          </Button>
        </div>
        {showUserDetails ? (
          <div style={{ color: "#52330D", fontWeight: "700" }}>
            {userInfo.name} <br />
            {userInfo.email}
            <br />
            {userInfo.defaultAccountName}{" "}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {showAddRecipients ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            margin: "1rem",
            border: "1px solid black",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "div",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <p className="BoxContainer_1_Text_Body">Email Subject</p>
              <Input
                style={{
                  boxSizing: "border-box",
                  borderRadius: "20px",
                  fontColor: "#52330D",
                  fontSize: "20px",
                  border: "4px solid #52330D",
                  outline: "none",
                }}
                type="text"
                className="form-control"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "div",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <p className="BoxContainer_1_Text_Body">Upload Document</p>
              <Input
                id="file"
                type="file"
                accept="image/*,.pdf"
                onChange={addFile}
                className="d-none"
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <p className="BoxContainer_1_Text_Body">Document Name</p>
              <Input
                style={{
                  boxSizing: "border-box",
                  borderRadius: "20px",
                  fontColor: "#52330D",
                  fontSize: "20px",
                  border: "4px solid #52330D",
                  outline: "none",
                }}
                type="text"
                className="form-control"
                name="subject"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
              />
            </div>
          </div>
          <div
            id="msg"
            style={{
              display: "flex",
              flexDirection: "div",
              justifyContent: "center",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "div",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              <p className="BoxContainer_1_Text_Body">Recipients </p>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <img
                src={AddIcon}
                alt="Add Icon"
                onClick={() => {
                  handleAddRecipients();
                }}
                style={{
                  width: "15px",
                  height: "15px",
                  float: "left",
                  marginRight: "5rem",
                }}
              />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              {" "}
              {recipients && recipients.length > 0 ? (
                <div>{addRecipients()}</div>
              ) : null}
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem",
              }}
            >
              {" "}
              <th>Send for owner to sign &nbsp;</th>
              <Input
                style={{
                  boxSizing: "border-box",
                  borderRadius: "20px",
                  fontColor: "#52330D",
                  fontSize: "20px",
                  border: "4px solid #52330D",
                  outline: "none",
                }}
                type="checkbox"
                onClick={() => handleAddOwnerToRecipients()}
              />
            </div>
            <div className="mx-2 my-3"></div>
            <div className="mx-2 my-3"></div>
          </div>

          <div>
            {" "}
            <div></div>
            <div className="mx-2 my-3">
              {" "}
              <Button
                style={{
                  fontSize: "20px",
                  marginTop: "2rem",
                  border: "3px solid #52330D",
                  color: "#52330D",
                  borderRadius: "42px",
                  fontFamily: "Avenir LT Std 45 Book",
                  fontWeight: "600",
                  padding: "1rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  textTransform: "none",
                  backgroundColor: "white",
                }}
                id="btnDoit"
                onClick={() => {
                  doit(defaultAccount);
                }}
              >
                Send and Sign an Envelope
              </Button>
            </div>
            <div> </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {showEnvelopeDetails ? (
        <div
          style={{
            border: "1px solid black",
            margin: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <p className="BoxContainer_5_Text_Header"> Recipients</p>
          <div
            style={{
              border: "0.5px solid grey ",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            {envelopeDetails.length > 0
              ? envelopeDetails.map((signer) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "1rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0.5rem",
                        }}
                      >
                        <th>ID</th>
                        <p>{signer.recipientId}</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0.5rem",
                        }}
                      >
                        <th>Name</th>

                        <p>{signer.name}</p>
                      </div>{" "}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0.5rem",
                        }}
                      >
                        <th>Email</th>
                        <p>{signer.email}</p>
                      </div>{" "}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "0.5rem",
                        }}
                      >
                        <th>Status</th>
                        <p>{signer.status}</p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>

          <Button
            style={{
              fontSize: "20px",
              marginTop: "2rem",
              border: "3px solid #52330D",
              color: "#52330D",
              borderRadius: "42px",
              fontFamily: "Avenir LT Std 45 Book",
              fontWeight: "600",
              padding: "1rem",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              textTransform: "none",
              backgroundColor: "white",
            }}
            type="Button"
            onClick={() => {
              setShowAddRecipients(true);
              setShowEnvelopeDetails(false);
              setRecipients([]);
              setSubject([]);
              setDocumentName([]);
              setNewFile([]);
            }}
          >
            Send Another Envelope
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
