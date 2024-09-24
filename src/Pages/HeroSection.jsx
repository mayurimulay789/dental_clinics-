import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Col, Row } from 'antd';
import doctor from '../assets/carousel-1.jpg'; // Adjust the path if needed
import { setServices } from '../redux/features/serviceSlice';

export default function HeroSection() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    // Fetch services from the backend
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const data = await response.json();
        dispatch(setServices(data));
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, [dispatch]);

  return (
    <div className="py-16 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src={doctor}
                alt="Smiling woman"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">OUR SERVICES</h2>
                <h3 className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  We Offer The Best Quality Dental Services
                </h3>
              </div>
              <Row gutter={[16, 16]}>
                {services.map((service, index) => (
                  <Col xs={24} sm={12} key={index}>
                    <Card
                      hoverable
                      cover={
                        <img
                          src={service.image}
                          alt={service.title}
                          className="object-cover w-full h-64"
                        />
                      }
                      className="h-full"
                    >
                      <Card.Meta title={service.title} className="text-center" />
                    </Card>
                  </Col>
                ))}
              </Row>
              <Card className="text-white bg-blue-600">
                <h4 className="mb-2 text-xl font-bold">Best Services</h4>
                <p className="mb-4">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                <p className="text-2xl font-bold">+012 345 6789</p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
