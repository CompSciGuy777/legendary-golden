import React from "react";
import Layout from "../components/Layout";
import InputGroup from "../components/inputGroup";
import { useSiteMetadata } from "../hooks/use-Site-Meta-Data";

const Contact = () => {
  const { Title, Description } = useSiteMetadata();
  return (
    <Layout
      location={"Contact"}
      Title={Title}
      Description={Description}
      headerClassName={"header-container-title"}
    >
      <div className={"contact"}>
        <h1 className={"contact-title"}>Contact</h1>
        <form>
          <InputGroup name="Name" />
          <InputGroup name="Email" />
          <InputGroup name="Message" />
        </form>
        <button>Submit</button>
      </div>
    </Layout>
  );
};

export default Contact;
