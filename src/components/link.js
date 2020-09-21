import React from "react";

function Link(props) {
  const {
    link: { description, url },
  } = props;
  return (
    <div>
      <div>
        {description} {url}
      </div>
    </div>
  );
}

export default Link;
