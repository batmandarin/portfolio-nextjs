import { Button, Form } from "react-bootstrap";

const MailForm = ({
  name,
  setName,
  address,
  setAddress,
  message,
  setMessage,
  sendToBackend,
}) => {
  return (
    <Form onSubmit={(e) => sendToBackend(e)}>
      <Form.Group className="mb-3">
        <Form.Label style={{ fontWeight: "bold", fontSize: "2rem" }}>
          Your name
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
          Email address
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
          style={{ fontSize: "1.7rem" }}
        >
          I will never share your email address with anyone else.
        </Form.Text>
      </Form.Group>

      <br />

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{ fontWeight: "bold", fontSize: "2rem" }}>
          Message
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
  );
};

export default MailForm;
