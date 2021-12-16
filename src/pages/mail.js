import { Layout } from "../layout/Layout";
import { Alert, Container } from "react-bootstrap";
import { useState } from "react";
import MailForm from "../components/MailForm/MailForm";

const Mail = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [frontendMessage, setFrontendMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");

  // sending email data to emailserver
  const sendToBackend = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          address: address,
          message: message,
        }),
      });

      const data = await res.json();
      const msg = await data.message;

      // set message to state
      setFrontendMessage(msg);

      // 4seconds after goes away
      setTimeout(() => {
        setFrontendMessage("");
      }, 4000);
    } catch (err) {
      const msg = err.message;

      // set message to state
      setErrMessage(msg);

      // 4seconds after goes away
      setTimeout(() => {
        setErrMessage("");
      }, 4000);
    }

    // reset input
    setName("");
    setAddress("");
    setMessage("");
  };

  return (
    <Layout>
      <Container className="mt-5 mb-4 mr-5 ml-5">
        <Container className="mt-3">
          {frontendMessage && (
            <Alert variant="success">{frontendMessage}</Alert>
          )}
          {errMessage && <Alert variant="danger">{errMessage}</Alert>}
        </Container>

        <MailForm
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
          message={message}
          setMessage={setMessage}
          sendToBackend={sendToBackend}
        />
      </Container>
    </Layout>
  );
};

export default Mail;
