import React from "react";
import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TasksForm() {
  // const [task, setTask] = useState({
  //   title: "",
  //   description: "",
  // });

  // const onHandleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(task);
  //   const result = await axios.post("http://localhost:4000/tasks", task);
  //   console.log(result);
  // };

  // const onHandleChange = (e) => {
  //   setTask({
  //     ...task,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <div>
      TasksForm
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, action) => {
          console.log(values.title);
          if (values.title === "" || values.description === "") {
            return alert("There aren't values");
          }
          try {
            const result = await createTaskRequest(values);
            console.log(result);
            action.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows={3}
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
      {/* <form onSubmit={onHandleSubmit}>
        <input name="title" placeholder="title" onChange={onHandleChange} />
        <input
          name="description"
          placeholder="description"
          onChange={onHandleChange}
        />
        <button>Create task</button>
      </form> */}
    </div>
  );
}

export default TasksForm;
