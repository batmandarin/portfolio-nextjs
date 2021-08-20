import { Layout } from "../../layout/Layout";
import { Form, Alert, Button, Container } from "react-bootstrap";
import { useState } from "react";
import { WiAlien } from "react-icons/wi";

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
        <Form onSubmit={(e) => sendToBackend(e)}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <WiAlien size="3rem" /> Your name
            </Form.Label>
            <Form.Control
              size="lg"
              value={name}
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <br />

          <Form.Group className="mb-" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <WiAlien size="3rem" /> Email address
            </Form.Label>
            <Form.Control
              size="lg"
              value={address}
              className="mb-3"
              type="email"
              placeholder="Your email address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Form.Text
              className="text-light font-weight-light"
              style={{ fontSize: "1.8rem" }}
            >
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ fontWeight: "bold", fontSize: "2rem" }}>
              <WiAlien size="3rem" /> Text
            </Form.Label>
            <Form.Control
              size="lg"
              value={message}
              as="textarea"
              rows={5}
              placeholder="Please reach me out anything you want !!"
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <br />

          <Button
            size="lg"
            variant="primary"
            type="submit"
            style={{ fontSize: "2rem" }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default Mail;
