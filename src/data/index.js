const contactFields = [
  {
    label: "Your Name",
    id: "fullname",
    placeholder: "name",
    type: "text",
    value: "",
    options: {
      required: true,
    },
  },
  {
    label: "Your email",
    id: "email",
    placeholder: "account@example.com",
    type: "email",
    value: "",
    options: {
      required: true,
      email: true,
    },
  },
  {
    label: "Subject",
    id: "subject",
    placeholder: "subject ...",
    type: "text",
    value: "",
    options: {
      required: true,
    },
  },
  {
    label: "Message",
    id: "content",
    value: "",
    placeholder: "message...",
    type: "textarea",
    options: {
      required: true,
    },
  },
];

export { contactFields };
