import { Col, Row } from 'antd'
import Banner from './banner'
import Partner from './partner'
import Services from './services'
import Projects from './projects'
import Achievements from './achievements'
import Process from './process'
import AboutUs from './aboutUs'
import Watcher from './watcher'
import Collaboration from './collaboration'
import Footer from './footer'

import 'static/styles/theme.less'
import './index.less'

const View = () => {
  return (
    <Row gutter={[0, { xs: 56, sm: 56, md: 116, lg: 116 }]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <Partner />
      </Col>
      <Col span={24}>
        <Services />
      </Col>
      <Col span={24}>
        <Projects />
      </Col>
      <Col span={24}>
        <Achievements />
      </Col>
      <Col span={24}>
        <Process />
      </Col>
      <Col span={24}>
        <AboutUs />
      </Col>
      <Col span={24}>
        <Collaboration />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
      <Watcher />
    </Row>
  )
}

export default View
