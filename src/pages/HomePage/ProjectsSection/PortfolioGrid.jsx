import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const PortfolioItem = styled.div`
  // Layout.
  display: flex;
  flex-flow: column;

  // Colour.
  background-color: #15202b;

  // Border and spacing.
  border: solid 1px #38444d;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  flex-basis: 45%;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
  }

  // Remove superfluous spacing.
  font-size: 0;
`;

const DescriptionContainer = styled.div`
  // Layout.
  display: flex;
  flex-flow: column;
  flex-basis: 100%;

  // Spacing.
  margin: 15px;
`;

const Title = styled.div`
  // Font.
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;

  // Spacing.
  margin-bottom: 10px;
`;

const DetailedDescription = styled.div`
  font-weight: 300;
  text-align: left;

  // Remove top margin for the first <p> tag.
  p:first-child {
    margin-top: 0;
  }

  // Remove bottom margin for the last <p> tag.
  p:last-child {
    margin-bottom: 0;
  }
`;

const PortfolioGrid = ({ projectIds }) => {
  // Create an Object containing project information.
  const createObj = (image, title, simpleDescription, detailedDescription) => ({
    image,
    title,
    description: { simple: simpleDescription, detailed: detailedDescription },
  });

  // Collection of projects.
  const projects = {
    evoPlugin: createObj(
      require('./static/images/evo-plugin.png'),
      'EVO WordPress SEO Plugin',
      'WordPress SEO plugin',
      <React.Fragment>
        <p>
          The EVO WordPress SEO plugin was developed as a simple, easy-to-use,
          and free solution to add SEO to sites running WordPress.
        </p>
        <p>
          For this project, I created the plugin from scratch, set up the build
          tools to develop the plugin locally using Docker and deploy the plugin
          to the WordPress plugin repository, and actively developed the plugin
          throughout the project lifetime.
        </p>
      </React.Fragment>,
    ),
    evoMemberPortal: createObj(
      require('./static/images/evo-member-portal.png'),
      'EVO Member Portal',
      'Companion website for the EVO WordPress SEO plugin',
      <React.Fragment>
        <p>
          The EVO Member Portal was a Software-as-a-Service solution for the EVO
          WordPress SEO plugin where users could purchase and manage
          Subscription Keys for their various web properties which used the
          plugin.
        </p>
        <p>
          For this project, I iterated upon and maintained the front-end code
          throughout the project lifetime.
        </p>
      </React.Fragment>,
    ),
    evoPluginWebsite: createObj(
      require('./static/images/evo-website.png'),
      'evoplugin.com',
      'Website for the EVO product suite',
      <React.Fragment>
        <p>
          evoplugin.com served as a product page for the EVO WordPress SEO
          plugin and the EVO SEO Member Portal.
        </p>
        <p>
          For this project, I maintained the website, and added SEO using our
          plugin.
        </p>
      </React.Fragment>,
    ),
    navigateGroupWebsite: createObj(
      require('./static/images/navigate-group-website.png'),
      'navigategroup.com',
      'Website for Navigate Group',
      <React.Fragment>
        <p>
          navigategroup.com is the website for Navigate Group, a sister company
          to the now defunct Navigate Technologies.
        </p>
        <p>
          For this project, I was tasked to build a placeholder website within a
          day, so that new potential clients would not just see a blank page
          when they visited navigategroup.com.
        </p>
      </React.Fragment>,
    ),
  };

  return (
    <Layout>
      {projectIds.map(projectId => {
        const { image, title, description } = projects[projectId];

        return (
          <PortfolioItem key={projectId}>
            <ImageContainer>
              <img src={image} alt={`${title} ${description.simple}`} />
            </ImageContainer>

            <DescriptionContainer>
              <Title>{title}</Title>
              <DetailedDescription>{description.detailed}</DetailedDescription>
            </DescriptionContainer>
          </PortfolioItem>
        );
      })}
    </Layout>
  );
};

PortfolioGrid.propTypes = {
  projectIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PortfolioGrid;
