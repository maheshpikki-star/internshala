import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_gg3ejmm";
const TEMPLATE_ID = "template_r0zq8bk";
const USER_ID = "fIoRUSIoBLaRvwXS0";

const Community = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div
      style={{ textAlign: "center", maxWidth: "300px", margin: "20px auto" }}
      className="App"
    >
      <br></br>
      <br></br>
      <br></br>
      <u>
        <h1>Contact Us</h1>
      </u>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "20px",
           outerHeight:"40px",
            
          }}
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
        />
        <Form.Field
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "20px",
            
          }}
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
        />
        <Form.Field
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "40px",
          }}
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button
          style={{
            border: "1px solid lightgray",
            borderRadius: "20px",
            padding: "20px",
            backgroundColor: "black",
            color: "white",
          }}
          type="submit"
          color="green"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Community;
