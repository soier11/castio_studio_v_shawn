import React, { Component, Fragment } from 'react';
import { Row, Card, CardBody, CardTitle, Input } from "reactstrap";
import { NavLink } from "react-router-dom";

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import ChannelPageHeading from "../../containers/pages/ChannelPageHeading";

import TagsInput from "../../containers/pages/TagsInput";
import VideoPlayer from "../../components/common/VideoPlayer";
import SingleLightbox from "../../components/pages/SingleLightbox";

export default class ChannelPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        type: "video",
        // type: "image",
        name: 'Mayra Sibley',
        date: '10 minutes ago',
        profilePic: '/assets/img/profile-pic-l.jpg',
        detail: 'I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well.',
        image: "/assets/img/detail-5.jpg",
        video: "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4",
      }
    };

    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    if (this.state.data.type === "image") {
      return <SingleLightbox thumb={this.state.data.image} large={this.state.data.image} className="social-header card-img" />
    } else if (this.state.data.type === "video") {
      return (
        <VideoPlayer autoplay={false} controls={true} className="social-header video-js card-img video-content" poster={this.state.data.image}
          sources={[{
            src: this.state.data.video,
            type: 'video/mp4'
        }]} />
      )
    }
  }

  render() {
    const { match } = this.props;

    return (
      <Fragment>
        <ChannelPageHeading
          heading="menu.channel"
          match={match}
        />
        {/* <Row>
          <Colxx xxs="12" className="mb-4">
            <p>
              <IntlMessages id="menu.channel" />
            </p>
          </Colxx>
        </Row> */}
        <Row>
          <Colxx xxs="12" className="mb-5">
            <Card>
              {/* <SingleLightbox thumb="/assets/img/social-header.jpg" large="/assets/img/social-header.jpg" className="social-header card-img" /> */}
              {this.renderContent()}
            </Card>
          </Colxx>
          <Colxx xxs="12" className="col-left">
            <SingleLightbox thumb={this.state.data.profilePic} large={this.state.data.profilePic} className="img-thumbnail card-img social-profile-img" />
            <Card className="mb-4">
              <CardBody>
                <div className="text-center pt-4">
                  <p className="list-item-heading pt-2">{this.state.data.name}</p>
                </div>
                <p className="text-muted text-small mb-2"><IntlMessages id="크리레이터 소개 (약력 등)" /></p>
                <Input className="form-control mb-3" type="textarea" name="text" id="exampleText" defaultValue={this.state.data.detail}/>
                <p className="text-muted text-small mb-2"><IntlMessages id="pages.tags" /></p>
                <TagsInput />
                <p className="text-muted text-small mt-3 mb-2"><IntlMessages id="menu.contact" /></p>
                <div className="social-icons">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <NavLink to="#"><i className="simple-icon-social-facebook"></i></NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="#"><i className="simple-icon-social-twitter"></i></NavLink>
                    </li>
                    <li className="list-inline-item">
                      <NavLink to="#"><i className="simple-icon-social-instagram"></i></NavLink>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        {/* <Row>
          <Colxx xxs="12" xl="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="크리에이터 소개 영상" />
                </CardTitle>
                <VideoPlayer autoplay={false} controls={true}
                  className="video-js card-img video-content mb-3"
                  poster={"/assets/img/subpage-video-poster.jpg"}
                  sources={[{
                    src: "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4",
                    type: 'video/mp4'
                  }]} />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12" xl="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="크리에이터 채널 소개 배너" />
                </CardTitle>
                <SingleLightbox thumb={"/assets/img/detail-5.jpg"} large={"/assets/img/detail-5.jpg"} className="img-fluid border-0 border-radius mb-3" />
              </CardBody>
            </Card>
          </Colxx>
        </Row>
        <Row>
          <Colxx xxs="12" xl="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="크리레이터 소개 (약력 등)" />
                </CardTitle>
                <Input className="form-control" type="textarea" name="text" id="exampleText" />
              </CardBody>
            </Card>
          </Colxx>
          <Colxx xxs="12" xl="6" className="mb-4">
            <Card>
              <CardBody>
                <CardTitle>
                  <IntlMessages id="pages.tags" />
                </CardTitle>
                <TagsInput />
              </CardBody>
            </Card>
          </Colxx>
        </Row> */}
      </Fragment>
    );
  }
}
