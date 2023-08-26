import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Choose } from '../components/Choose.js';
import { Footer } from '../components/Footer.js';
import { Header } from '../components/Header.js';
import { TOP } from '../components/TOP.js';
import { Map } from '@googlemaps/react-wrapper'
// import boxicons from 'boxicons';

export default function Notice() {
  return (
    <>
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
      <TOP />
      <Header />
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className='d-block w-100' src='/bg-about.webp' alt='Slide' />
          <div className='overlay flex items-center justify-center'>
            <div className='grid h-1/3 w-1/4 grid-rows-2 rounded-lg bg-red-500 bg-opacity-60'>
              <div className='text-center text-[2vw] font-extrabold text-white'>
                Notice
              </div>
              <div className='font-bolder text-center text-[1.2vw] text-white'>
                <Link to='/' className='text-white'>
                  Home
                </Link>{' '}
                /{' '}
                <Link to='/notice' className='text-white'>
                  Notice
                </Link>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <Container className='my-5'>
        {/* Some Padding */}
        <Row className='container mx-auto'>
          <Col className='col-lg-4 col-md-6 col-sm-12 center text-center'>
            <h4>Notice</h4>
            <p>Notice will be published here</p>
            {/*Notice 1*/}
            <div className='flex flex-col justify-center items-center'>
                <h4>Notice 1</h4>
                <p>Notice 1 will be published here</p>
            </div>
            {/*Notice 2*/}
            <div className='flex flex-col justify-center items-center'>
                <h4>Notice 2</h4>
                <p>Notice 2 will be published here</p>
            </div>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
