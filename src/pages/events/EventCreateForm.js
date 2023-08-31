/* import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image"; // Changed import

import Upload from "../../assets/upload.png";

import styles from "../../styles/EventCreateEditForm.module.css"; // Adjust the module name
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";

function EventCreateForm() {
 

  const [eventData, setEventData] = useState({
    eventName: "",
    eventDescription: "",
    eventImage: "",
  });
  const { eventName, eventDescription, eventImage } = eventData; // Adjust variable names

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(eventImage); // Adjust the variable
      setEventData({
        ...eventData,
        eventImage: URL.createObjectURL(event.target.files[0]), // Adjust the variable
      });
    }
  };

  const eventFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Event Name</Form.Label>
        <Form.Control
          type="text"
          name="eventName"
          value={eventName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Event Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="eventDescription"
          value={eventDescription}
          onChange={handleChange}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Create Event
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {eventImage ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={eventImage} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the event image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an event image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
              />
            </Form.Group>
            <div className="d-md-none">{eventFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{eventFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default EventCreateForm; */