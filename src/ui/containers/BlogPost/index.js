/**
*
* BlogPost
*
*/

import React from 'react';
import { connect } from 'react-redux';
// import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { selectBlogPostVisibility } from 'ui/containers/BlogPost/selectors';
import { toggleBlogPostVisibility } from 'ui/containers/BlogPost/actions';
import messages from './messages';
import {
  Container,
  GlobalScroll,
  ContainerSwitcher,
  Section,
} from './wrappers';

function BlogPost(props) {
  return (
    <Container expanded={props.blogPostVisibility}>
      <ContainerSwitcher
        expanded={props.blogPostVisibility}
        title="Expand/Collapse Tutorial"
        onClick={() => props.toggleBlogPostVisibility()}
      />
      <GlobalScroll>
        <h2>Crafting a DSL</h2>
        <Section>Intro</Section> | <Section>Grammar</Section> |{' '}
        <Section>References</Section>
        <p>
          Data is probably the most valuable and requested asset all over the
          world. We humans are eager to consume it and are constantly looking
          for ever-complex, accurate, specific data sets to increase our
          knowledge stock and keep it up to date.
        </p>
        <p>
          Whether application logs aggregation analysis, trading market rates
          comparison or simply the weather forecast analysis, general-purpose
          languages cannot fully provide users with the best tools for
          interacting, retrieving and solving domain related problems within the
          context a domain expert would expect to.
        </p>
        <p>
          In our first post, we drove a general introduction to this topic, but
          did not get our hands into the job. This time we'll make it by
          designing and implementing an interesting case of a domain specific
          language. We're gonna learn so much!
        </p>
        <p>
          Domain specific languages can be shaped as internal/embebbed and as
          externals. Whereas the embedded/internal DSL are limited by the host
          language they are built on top of, the external ones can be more
          expressive at cost of requiring further tooling and higher maintenance
          efforts.
        </p>
        <p>
          We'll work out an external DSL solution for learning purposes as most
          of well known DSL implementations are external. Some examples might
          include SQL, HTML or CSS, to name a few. To make this exercise easier
          to follow, we'll work with one of the most well known development
          platform. Yep, I'm talking about Github.
        </p>
        <p>
          Working with Github issues is sometimes a bit annoying, specially when
          dealing with complex filters. Retrieving all issues assigned to an
          user where labels contains some tags but at same time labels must not
          contain certain tags can become not so intuitive and straight forward
          to achieve as it may seem to. This is why it might be interesting to
          build a DSL to provide and offer a better experience when interacting
          and retrieving Github issues.
        </p>
        <p>
          We will want to make our DSL as familiar as possible to our final
          users. As the DSL solution we're going to build is intended to be used
          by Github users in general, which is a farily huge audience, mostly
          made of software developers, we'll try to make it as familiar as
          possible to all of them.
        </p>
        <p>
          In that sense, using an existing centric programmig language solution
          would favor one group of developers over the others, which would be
          also better implemented by an internal or embedded DSL rather than an
          external, so instead we are going to adopt a completely different
          approach b using an sql-like syntax for our DSL as this is fairly
          familiar to most of software developers regardless the programing
          language they are used to code in.
        </p>
        <p>
          As explained in the last post, external DSL require a lexer and a
          parser. We can use external tools to generate both the lexer and
          parser or we can build them from scratch by ourself if higher control
          for better error recovering or reporting is required.
        </p>
        <p>
          This time we'll be using PEG.js, which is a JavaScript based parser
          generator library that produces fast parsers with excellent error
          reporting. There are other good alternatives as parboiled2 for Scala
          users or ANTLR for Java users. You can find more PEG-based solutions
          at http://bford.info/packrat/
        </p>
      </GlobalScroll>
    </Container>
  );
}

BlogPost.propTypes = {
  blogPostVisibility: React.PropTypes.bool,
  toggleBlogPostVisibility: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  blogPostVisibility: selectBlogPostVisibility(),
});

function mapDispatchToProps(dispatch) {
  return {
    toggleBlogPostVisibility: () => dispatch(toggleBlogPostVisibility()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
