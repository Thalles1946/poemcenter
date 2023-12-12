import Button from "react-bootstrap/Button";
import "./index.css";
import Form from "react-bootstrap/Form";
const PoemForm = () => {
  return (
    <div className="form-html" style={{ height: "90.5vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="form-body"
      >
        <Form className="form" onSubmit={() => console.log("submit")}>
          <Form.Control
            className="form-component"
            type="text"
            placeholder="Title"
          />
          <Form.Control
            className="form-component"
            type="textarea"
            placeholder="Description"
          />
          <Form.Control
            className="form-component"
            as="textarea"
            placeholder="Content"
            style={{ height: "80%", minHeight: "30%" }}
          />

          <Button className="form-component" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default PoemForm;
