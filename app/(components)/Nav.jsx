import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
      <nav className="flex items-center justify-between p-4 bg-nav">
          <div className="flex items-center space-x-4">
              <Link href="/">
                  <FontAwesomeIcon
                      className="icon"
                      icon={faHome} />
              </Link>
              <Link href="/TicketPage/new">
                  <FontAwesomeIcon
                      className="icon"
                      icon={faTicket} />
              </Link>
          </div>
          <div>
              <p className="text-default-text ">pkh@naver.com</p>
          </div>
    </nav>
  )
}

export default Nav