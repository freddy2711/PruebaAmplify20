import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { menuDefault } from '../../../../consts/menu'
import styles from './index.module.scss'
import { get } from 'local-storage'
import {
  USER_SESSION,
  SET_TEACHERCODE,
} from './../../../../consts/storageConst'
import { useEffect, useState } from 'react'

export interface Props {
  menu?: typeof menuDefault
}

const Navigation = ({ menu = menuDefault }: Props) => {
  const [teacherCode, setteacherCode] = useState('')

  useEffect(() => {
    setteacherCode(
      get(USER_SESSION) !== null ? get(USER_SESSION) : SET_TEACHERCODE
    )
  }, [])

  const addUserToUrl = (link: string, userCode: string) => {
    if (link === '/solicitud-de-modificacion') {
      return `${link}/?idTeacher=${userCode}`
    } else {
      return link
    }
  }

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="mb-1"
      sticky="top"
    >
      <Container className={`${styles.nabContent}`  }>
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
                    <a
                      key={index}
                      href={addUserToUrl(item.link, teacherCode)}
                      target={item.target === false ? undefined : '_blank'}
											data-link={`${item.link}`}
											className="dropdown-item"
                    >
                      {item.label}
                    </a>
                  ))}
                </NavDropdown>
              ) : (
                <a
                  key={index}
                  href={item.link}
                  target={item.target === false ? undefined : '_blank'}
									className="dropdown-item"
                >
                  {item.label}
                </a>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
