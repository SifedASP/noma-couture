import { Container } from "@mantine/core";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    /* eslint-disable-next-line react/prop-types */
    return <Container fluid m={0} p={0}>{props.children}</Container>;
};

export default ScrollToTop;
