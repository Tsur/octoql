// MIT: FormidableLabs/component-playground
import React from 'react';
import { connect } from 'react-redux';
import { TextContainer, Div, TextIcon, Icon, Menu, P } from './wrappers';
import { createTextPanel, createQueryPanel, removePanel } from './actions';

class PanelActions extends React.Component {

  // shouldComponentUpdate(){
  //   return false;
  // }

  render() {
    return (
      <TextContainer>
        <Div>
          <TextIcon name="ellipsis" />
        </Div>
        <Menu>
          <P
            onClick={() =>
              this.props.createTextPanel(this.props.id, this.props.path)}
          >
            <Icon name="quote" small /> Create Text Panel
          </P>
          <P
            onClick={() =>
              this.props.createQueryPanel(this.props.id, this.props.path)}
          >
            <Icon name="terminal" small /> Create Query Panel
          </P>
          <P
            disabled={!this.props.removable}
            onClick={() =>
              this.props.removable && this.props.removePanel(this.props.id, this.props.path)}
          >
            <Icon name="remove-close" small /> Remove Panel
          </P>
        </Menu>
      </TextContainer>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  createTextPanel: (panelID, panelPath) =>
    dispatch(createTextPanel(panelID, panelPath)),
  createQueryPanel: (panelID, panelPath) =>
    dispatch(createQueryPanel(panelID, panelPath)),
  removePanel: (panelID, panelPath) => dispatch(removePanel(panelID, panelPath)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PanelActions);
