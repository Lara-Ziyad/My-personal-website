import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';
import moveImg from './../assets/images/bGround/ezgif.com-crop.gif'
const FooterStyle = styled.div`
  /* background-color: var(--red); */
  background-image: url(${moveImg});
    background-repeat: no-repeat;
    background-size: cover;
  
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
    color: var(--white);
  }
  .footer__col1__title {
    color: var(--white);
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Lara Kamper</h1>
          <br /> 
          <PText>
             A web  developer and designer <br /> <br />  Willing to relocate for an exciting<br /> 
 job opportunity
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+49 176 21943692',
                path: 'tel:+49 176 21943692',
              },
              {
                title: 'lara.mz.kamper@gmail.com',
                path: 'mailto:lara.mz.kamper@gmail.com',
              },
              {
                title: 'Krefeld Germany',
                path: 'https://www.google.com/maps/place/Adlerstra%C3%9Fe+21,+47798+Krefeld/@51.3242416,6.5522381,17z/data=!3m1!4b1!4m5!3m4!1s0x47b8affb9c64db6b:0x2f0993c69365b103!8m2!3d51.3242383!4d6.5544268',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Profiles Links"
            links={[
              {
                title: 'Github',
                path: 'https://github.com/Lara-Ziyad',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/lara-kamper-752b03215/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText> © 2021 - Lara Kamper</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
