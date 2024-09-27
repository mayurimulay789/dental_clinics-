import React from 'react'
import { Button, Input, Card, Form } from 'antd'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons'

export default function ContactPage() {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log('Form submitted with values: ', values)
  }

  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-extrabold text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card title="Get in Touch" bordered={false}>
              <p className="mb-6 text-gray-600">We're here to help and answer any question you might have. We look forward to hearing from you!</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <PhoneOutlined className="mr-2 text-emerald-500" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <MailOutlined className="mr-2 text-emerald-500" />
                  <span>contact@dental.com</span>
                </div>
                <div className="flex items-center">
                  <EnvironmentOutlined className="mr-2 text-emerald-500" />
                  <span>123 Smile Street, Dental City, DC 12345</span>
                </div>
                <div className="flex items-center">
                  <ClockCircleOutlined className="mr-2 text-emerald-500" />
                  <span>Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
                </div>
              </div>
            </Card>

            {/* Google Map */}
            <Card bordered={false} className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98659668505626!3d40.75895097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335495!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </Card>
          </div>

          {/* Contact Form */}
          <Card title="Contact Us" bordered={false}>
            <Form action='https://formspree.io/f/xzzpndlb' method='POST'
              layout="vertical"
              onFinish={handleSubmit}
              
              className="space-y-4"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please enter a valid email', type: 'email' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" value="send" className="w-full">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}
