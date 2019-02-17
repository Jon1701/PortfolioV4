import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const bgImage = require('_backgrounds/hixs_pattern_evolution_@2X.png');

const Page = styled.main`
  background: url('${bgImage}');
  background-attachment: fixed;
  min-height: 100vh;
  box-sizing: border-box;
`;

const ContentMargin = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const projects = {
  'evo-website': {
    images: [
      {
        image: require('_static/portfolio/projects/evo-website/homepage'),
      },
    ],
  },
};

const ProjectPage = ({ match }) => {
  console.log(match.params.projectId);

  return (
    <Page>
      <ContentMargin>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tenetur,
        tempore porro quas cum quidem eveniet voluptatum ipsa? Quis, sint.
        Maiores soluta repellat eum, consequuntur commodi cupiditate illo
        voluptatum illum?
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse adipisci
        repudiandae nisi molestiae id quas nam dolore distinctio molestias
        aperiam temporibus sapiente, deleniti ex repellendus ipsa quaerat dicta
        maxime ipsum!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil
        dolorem dolorum distinctio impedit odio ex vitae voluptatibus
        repudiandae exercitationem cumque, deleniti est! Quas inventore
        perferendis eveniet numquam, sunt enim!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id a vel
        odit ea iusto iste debitis expedita officia officiis at tempora ex
        possimus beatae ratione, doloribus obcaecati sed. Accusamus.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        exercitationem mollitia veniam ex fuga suscipit atque ea quae sequi
        corrupti cumque odit earum consequuntur at error delectus corporis
        voluptas omnis!
        <br />
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
        porro nisi expedita repudiandae at! Aliquid quaerat cum adipisci harum
        dicta aut dignissimos rem, ad eligendi quae ipsum earum laborum et.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat
        ipsa perspiciatis quis quidem, voluptas quisquam tempora, consequatur
        nemo numquam laborum debitis harum labore dolor animi neque voluptate
        quae et!
      </ContentMargin>
    </Page>
  );
};

ProjectPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default ProjectPage;
