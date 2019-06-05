// NewsComponent.js

import PropTypes from "prop-types";

const NewsComponent = ({ className, newsItems }) => (
  <div className={className}>
    {newsItems.map(newsItem => (
      <div>
        <h1>{newsItem.title}</h1>
        {newsItem.description && <p>{newsItem.description}</p>}
      </div>
    ))}
  </div>
);

NewsComponent.propTypes = {
  newsItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  )
};

export default styled(NewsComponent);

// -----------------------------------------------------------
// -----------------------------------------------------------

// NewsContainer.js

import NewsComponent from "./NewsComponent.jsx";

const NewsContainer = () => (
  <StaticQuery
    query={""}
    render={data => <NewsComponent newsItems={data.datoCmsPage.content} />}
  />
);

// -----------------------------------------------------------
// -----------------------------------------------------------

// Index.js

const Index = () => (
  <div>
    <NewsComponent
      newsItems={[
        {
          title: "Lorem ispum",
          description: "This is a fantastic description"
        },
        { title: "This is an item without a description" }
      ]}
    />
    <NewsContainer />
  </div>
);
Collapse
