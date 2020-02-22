import { Link } from "gatsby"
import Header from "../components/header"
import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import MessageList from "../components/MessageList";
import Layout from "../components/layout"


function Messages(props){

  return(
  <Layout>
    <MessageList/>
  </Layout>
  )
}

export default Messages;