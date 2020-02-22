import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Layout from "../components/Layout";

const ADD_MESSAGES = gql`
mutation addMessage($author_name: String!, $subject: String!, $message: String!) {
  insert_palanca(objects: {author_name: $author_name, message: $message, subject: $subject}) {
    returning {
      message
      subject
      author_name
    }
  }
}


`;
function IndexPage(){
 
    const [subject, setSubject]=useState('')
    const [message, setMessage]=useState('')
    const [author_name, setAuthor]=useState('')
    const [addMessage] = useMutation(ADD_MESSAGES)
    console.log(message, author_name, subject)

    return (
      <>
      <Layout>
        <form style={{paddingTop: '200px', paddingLeft: "100px"}}>
      <input
        name="author_name"
        placeholder="Name"
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        name="subject"
        placeholder="Subject"
        onChange={e => setSubject(e.target.value)}
      />
      <input
        name="message"
        type="text"
        placeholder="Message"
        onChange={e => setMessage(e.target.value)}
      />
      <button  onClick={e => {
        e.preventDefault();
        addMessage({ variables: { author_name: author_name, subject: subject, message: message } });
      }} >Submit</button>
    </form>
    </Layout>
    </>
    )
  }



export default IndexPage;
export { ADD_MESSAGES };