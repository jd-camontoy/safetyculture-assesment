import Footer from './Footer'
import Header from './Header'
import MobileNavigation from './MobileNavigation'
import { useState } from 'react'

export default function Layout({ children }) {
    const [ mobileNavIsOpen, setMobileNavIsOpen ] = useState(false);

    const toggleModal = () => {
        setMobileNavIsOpen(!mobileNavIsOpen);
    }

    function displayMobileNav() {
        if (mobileNavIsOpen) {
            return <MobileNavigation toggleModalFn={toggleModal} />
        }
    }

    return (
        <>
            {displayMobileNav()}
            <Header toggleModalFn={toggleModal} />
                { children }
            <Footer />
        </>
    );
}