import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_MESSAGES = gql`
query getMessage {
  palanca(order_by: {id: asc}) {
    author_name
    message
    subject
  }
}

  
`;

const MessageList = () => {
  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return "loading...";
  if (error) return `error: ${error.message}`;

  return (
    <div >
      {data.palanca.map((item, index) => (
        <div key={index} style={{justifySelf: 'stretch', placeSelf: 'center', border: '2px solid black'}}>
           <h2>Subject: {item.subject}</h2>
           <h2>From: {item.author_name}</h2>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
};


export default MessageList;
export { GET_MESSAGES };