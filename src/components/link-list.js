import React from "react";
import Link from "./link";
import { Query } from "@apollo/client/react/components";
import { gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
const LinkList = () => {
  return (
    <div>
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading</div>;
          if (error) return <div>Error</div>;

          // our query structure
          const linksToRender = data.feed.links;

          return linksToRender.map((link) => (
            <Link key={link.id} link={link} />
          ));
        }}
      </Query>
    </div>
  );
};

export default LinkList;
