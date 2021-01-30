import styled from "styled-components";

const FooterWrapper =  styled.div`
    display: flex;

    align-items: center;
    border-radius: 4px;

    background-color: #00000070;
    padding: 20px;

    img {
        width: 58px;
        margin-right: 23px;
    }

    a {
        color: white;
        text-decoration: none;
        transition: .3s;

        &:hover,
        &:focus {
            opacity: 0.5;
        }

        span {
            text-decoration: underline;
        }
    }
`;

const Footer = (props) => {
    return(
        <FooterWrapper {...props} >
            <a  href="https://alura.com.br/">
                <img src="https://alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="alura logo" />
            </a>
            <p>
                Orgulhosamente criado durante o 
                {' '}
                a
                {' '}
                <a href="https://alura.com.br">
                    <span> Imersão alura </span>
                </a>
            </p>
        </FooterWrapper>
    );
}

export default Footer;