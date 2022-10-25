import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { menuDefault } from '../../../../consts/menu'
import styles from './index.module.scss'

export interface Props {
  menu?: typeof menuDefault
}

const Navigation = ({ menu = menuDefault }: Props) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="mb-1"
      sticky="top"
    >
      <Container className={styles.nabContent}>
        <Navbar.Brand href="/">Portal Docentes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu.map((item, index) =>
              item.child.length > 0 ? (
                <NavDropdown
                  key={index}
                  title={item.label}
                  id="basic-nav-dropdown"
                >
                  {item.child.map((item, index) => (
                    <NavDropdown.Item
                      key={index}
                      href={item.link}
                      target={item.target === false ? undefined : "_blank" }
                    >
                      {item.label}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={index}
                  href={item.link}
                  target={item.target === false ? undefined : "_blank" }
                >
                  {item.label}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
