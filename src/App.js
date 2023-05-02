import "./App.css";
import Form from "./components/Form";

const inputs = [
  {
    type: "text",
    placeholder: "Enter text...",
    label: "Text",
    required: true,
    validations: [
      { type: "required", value: true },
      { type: "regex", value: "^[a-zA-Z0-9_]{3,20}$" },
    ],
  },
  {
    type: "date",
    placeholder: "Enter date...",
    label: "Date",
    required: true,
    validations: [
      { type: "required", value: true },
      { type: "minDate", value: "2023-01-01" },
      { type: "maxDate", value: "2024-12-31" },
    ],
  },
  {
    type: "password",
    placeholder: "Enter password...",
    label: "Password",
    validations: [
      { type: "required" },
      { type: "confirmation", value: true },
      { type: "regex", value: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$" },
    ],
  },
];

function App() {
  return <Form formFields={inputs} />;
}

export default App;
