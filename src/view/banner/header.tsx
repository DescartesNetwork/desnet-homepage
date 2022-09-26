import { useSelector } from 'react-redux'

import { Col, Row, Image, Button, Space, Typography } from 'antd'

import { AppState } from 'store'

import LOGO from 'static/images/logo.png'
import LOGO_MOBILE from 'static/images/logo192.png'
import DrawerHeader from './drawerHeader'
import { useContact } from 'hooks/useContact'

export const SECTIONS_LIST = [
  { title: 'Home', route: 'home' },
  { title: 'Projects', route: 'projects' },
  { title: 'Process', route: 'process' },
  { title: 'About us', route: 'about-us' },
]

const Header = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  const onContact = useContact()
  const isMobile = width < 998
  const logo = !isMobile ? LOGO : LOGO_MOBILE
  const scrollToSection = (id: string) => {
    if (!id) return

    const yOffset = -100 //88px that the height of header
    const el = document.getElementById(`${id}`)!
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return (
    <Row className="header" justify="space-between" align="middle">
      <Col>
        <Image
          src={logo}
          preview={false}
          style={{ height: 32, cursor: 'pointer' }}
        />
      </Col>
      {width > 661 && (
        <Col>
          <Space size={40}>
            {SECTIONS_LIST.map(({ title, route }) => (
              <Typography.Text
                style={{ color: '#F3F4F3', cursor: 'pointer' }}
                key={route}
                onClick={() => scrollToSection(route)}
                className="section"
              >
                {title}
              </Typography.Text>
            ))}
          </Space>
        </Col>
      )}
      <Space size={16}>
        {width <= 661 && <DrawerHeader scrollToSection={scrollToSection} />}
        <Col>
          <Button onClick={onContact} type="primary">
            Contact us
          </Button>
        </Col>
      </Space>
    </Row>
  )
}

export default Header