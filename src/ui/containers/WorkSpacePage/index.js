/*
 *
 * WorkSpacePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import BlogPost from 'ui/containers/BlogPost';
import { getNotebookContent } from 'ui/utils/resources';
import { changeResourceSelected } from 'ui/containers/ResourcesTree/actions';
import PanelContainer from 'ui/components/PanelContainer';
import { normalizeRoute, normalizeLocation } from 'ui/utils/url';
import { selectResources, selectResource } from './selectors';
import { Container, Scroll, Div } from './wrappers';

export class WorkSpacePage extends React.Component {

  componentDidMount() {
    // Does not work with routing !!!!!!!!!!!!
    this.props.changeResourceSelected(
      normalizeRoute(normalizeLocation()).replace('/notebooks/', '')
    );
    this.scrollPosition = this.scrollElement.scrollTop;
  }

  componentWillReceiveProps() {
    this.scrollPosition = this.scrollElement.scrollTop;
    // this.notebook = getNotebookContent(
    //   this.props.resources,
    //   normalizeRoute(location.pathname).replace('/notebooks/', '')
    // );
  }

  componentDidUpdate() {
    this.scrollElement.scrollTop = this.scrollPosition;
  }

  render() {
    this.notebook = getNotebookContent(
      this.props.resources,
      normalizeRoute(normalizeLocation()).replace('/notebooks/', '')
    );
    return (
      <Div>
        <Container>
          <Helmet
            title={`${this.notebook.title} - OctoQL Notebook`}
            meta={[
              { name: 'description', content: 'Description of WorkSpacePage' },
            ]}
          />
          <Scroll innerRef={(scroll) => this.scrollElement = scroll}>
            {this.notebook.panels.map((panel, i) =>
              <PanelContainer
                className="talo-editor"
                panel={panel}
                key={panel.id}
                id={i}
                path={normalizeRoute(normalizeLocation()).replace(
                  '/notebooks/',
                  ''
                )}
              />
            )}
          </Scroll>
        </Container>
        <BlogPost />
      </Div>
    );
  }
}

WorkSpacePage.propTypes = {
  resources: React.PropTypes.object,
  resourceSelected: React.PropTypes.string,
  changeResourceSelected: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  resources: selectResources(),
  resourceSelected: selectResource(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeResourceSelected: (resource) =>
      dispatch(changeResourceSelected(resource)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpacePage);
