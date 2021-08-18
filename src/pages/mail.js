import { Layout } from "../layout/Layout"
import { Form, Alert, Button, Container } from "react-bootstrap"
import { useState } from "react"
import { WiAlien } from 'react-icons/wi'
import axios from "axios"

const mail = () => {

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const [frontendMessage, setFrontendMessage] = useState("")
  const [status, setStatus] = useState();


  // sending email data to emailserver
  const sendToBackend = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post("/.netlify/functions/functions", {
        data: {
          name: name,
          address: address,
          message: message,
        }
      })

      const data = await res.data.message
      const resStatus = await res.status

      console.log(data, resStatus)

      // set message to state
      setFrontendMessage(data)
      setStatus(resStatus)

      // 4seconds after goes away
      setTimeout(() => {
        setFrontendMessage('')
        setStatus()
      }, 4000)

    } catch (err) {

      const data = err.data.msg;
      const resStatus = err.status

      // set message to state
      setFrontendMessage(data)
      setStatus(resStatus)

      // 4seconds after goes away
      setTimeout(() => {
        setFrontendMessage('')
        setStatus()
      }, 4000)

    }

    setName('')
    setAddress('')
    setMessage('')

  }


  return (
    <Layout>
      <Container className="mt-5 mb-4 mr-5 ml-5">
        <Container className="mt-3">
          {frontendMessage && status === 200 && <Alert variant="success">{frontendMessage}</Alert>}
          {frontendMessage && status !== 200 && <Alert variant="danger">{frontendMessage}</Alert>}
        </Container>
        <Form onSubmit={(e) => sendToBackend(e)}>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold', fontSize: "2rem" }}><WiAlien size="3rem" /> Your name</Form.Label>
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
            <Form.Label style={{ fontWeight: 'bold', fontSize: "2rem" }}><WiAlien size="3rem" /> Email address</Form.Label>
            <Form.Control
              size="lg"
              value={address}
              className="mb-3"
              type="email"
              placeholder="Your email address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <Form.Text className="text-light font-weight-light" style={{ fontSize: "1.8rem" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <br />

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ fontWeight: 'bold', fontSize: "2rem" }}><WiAlien size="3rem" /> Text</Form.Label>
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

          <Button size="lg" variant="primary" type="submit" style={{ fontSize: "2rem" }}>
            Submit
          </Button>
        </Form>
      </Container>
    </Layout >
  )
}

export default mail
