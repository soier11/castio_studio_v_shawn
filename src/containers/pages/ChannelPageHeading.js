import React, { Component } from 'react';
import {
  Row,
  Button,
  ButtonDropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CustomInput,
  Collapse,
} from 'reactstrap';
import Switch from "rc-switch";
import "rc-switch/assets/index.css";
import { injectIntl } from 'react-intl';
import { Tooltip } from "reactstrap";

import { Colxx, Separator } from '../../components/common/CustomBootstrap';
import Breadcrumb from '../navs/Breadcrumb';
import IntlMessages from '../../helpers/IntlMessages';

class ChannelPageHeading extends Component {
  constructor(props) {
    super();
    this.state = {
      switchChecked: false,
      tooltipOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      tooltipOpen: !prevState.tooltipOpen
    }));
  };

  changeMode = () => {
    this.setState(prevState => ({
      switchChecked: !prevState.switchChecked
    }));
  };

  render() {
    const {
      match,
      heading,
    } = this.props;

    return (
      <Row>
        <Colxx xxs="12">
          <div className="mb-2">
            <h1>
              <IntlMessages id={heading} />
            </h1>

            <div className="text-zero top-right-button-container float-right">
              <div className="d-flex align-middle p-2 channel-settings-wrap">
                <IntlMessages id="채널상태" />
                <Switch
                  id="Channel-Tooltip-Switch"
                  className="custom-switch custom-switch-primary custom-switch-small"
                  checked={this.state.switchChecked}
                  onChange={this.changeMode}
                />
                <Tooltip
                  placement="top"
                  isOpen={this.state.tooltipOpen}
                  target={"Channel-Tooltip-Switch"}
                  toggle={this.toggle}
                >
                  {this.state.switchChecked ? '공개' : '비공개'}
                </Tooltip>
              </div>
            </div>
            <Breadcrumb match={match} />
          </div>

          <Separator className="mb-5" />
        </Colxx>
      </Row>
    );
  }
}

export default injectIntl(ChannelPageHeading);
