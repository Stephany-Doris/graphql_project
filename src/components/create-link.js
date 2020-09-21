import React, { useState } from "react";
import { Mutation } from "@apollo/client/react/components";
import { gql } from "@apollo/client";

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;
const CreateLink = (props) => {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          type="text"
          placeholder="A description for the link"
          value={description}
          className="mb2"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="mb2"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
        <Mutation
          mutation={POST_MUTATION}
          variables={{ description, url }}
          onCompleted={() => props.history.push("/")}
        >
          {(postMutation) => (
            <button style={{ width: "120px" }} onClick={postMutation}>
              Submit
            </button>
          )}
        </Mutation>
      </div>
    </div>
  );
};

export default CreateLink;
