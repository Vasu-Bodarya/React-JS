import React, { useState } from "react";
import "./contact.css"; // Import custom styles
import { app } from "../firebase"; // Firebase app instance
import { getDatabase, ref, set } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form, Container, Card, Row, Col, Spinner, Alert } from "react-bootstrap";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");

  const handleClose = () => {
    setShow(false);
    setAlertMessage(""); // Clear alerts on modal close
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !review) {
      setAlertMessage("Please fill in all fields.");
      setAlertVariant("danger");
      return;
    }

    setIsSubmitting(true); // Show loading state
    const db = getDatabase(app);
    const id = Math.random().toString(36).substr(2, 9);

    set(ref(db, `contacts/${id}`), { name, phone, email, review })
      .then(() => {
        setAlertMessage("Your review has been submitted successfully!");
        setAlertVariant("success");
        setName("");
        setPhone("");
        setEmail("");
        setReview("");
        setTimeout(() => {
          handleClose();
        }, 2000); // Close modal after success
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        setAlertMessage("There was an error. Please try again.");
        setAlertVariant("danger");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container className="contact-page py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body className="text-center">
              <h1 className="mb-4">Contact Us</h1>
              <p className="mb-4">
                We value your feedback! Click the button below to reach out.
              </p>
              <Button variant="primary" onClick={handleShow}>
                Open Contact Form
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold", color: "#007BFF" }}>
            Share Your Feedback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alertMessage && (
            <Alert variant={alertVariant} className="text-center">
              {alertMessage}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formReview">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your feedback here (max 250 words)"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                maxLength="250"
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Submitting...
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Contact;
