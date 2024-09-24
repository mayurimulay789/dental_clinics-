import { Button, Card, Col, Row } from 'antd';
import { useState } from 'react';
import image from '../assets/ab.jpg';
import image1 from '../assets/service-1.jpg';
import image2 from '../assets/service-2.jpg';
import image3 from '../assets/service-3.jpg';
import image4 from '../assets/service-4.jpg';

// Services array only needs images
const services = [image1, image2, image3, image4];

export default function BlockSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Row gutter={[32, 32]} align="middle">
          {/* Image Section */}
          <Col xs={24} md={12}>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Smiling woman"
                className="object-cover w-full h-full"
              />
            </div>
          </Col>

          {/* Content Section */}
          <Col xs={24} md={12}>
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
                  OUR SERVICES
                </h2>
                <h3 className="mt-2 text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  We Offer The Best Quality Dental Services
                </h3>
              </div>

              {/* Services Grid */}
              <Row gutter={[16, 16]}>
                {services.map((service, index) => (
                  <Col xs={24} sm={12} key={index}>
                    <Card
                      hoverable
                      cover={
                        <img
                          src={service}
                          alt={`Service ${index + 1}`}
                          className="object-cover w-full h-40 sm:h-48 lg:h-52"
                        />
                      }
                      className="h-full"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <Card.Meta
                        title={`Service ${index + 1}`}
                        className="text-center"
                      />
                    </Card>
                  </Col>
                ))}
              </Row>

              {/* Appointment Card */}
              <Card className="text-white bg-blue-600">
                <h4 className="mb-2 text-xl font-bold">Make Appointment</h4>
                <p className="mb-4">
                  Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod
                </p>
                <p className="text-2xl font-bold">+012 345 6789</p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
