import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../Admin/Layout'
const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    name: '',
    email: '',
    date: '',
    timeSlot: '',
    message: '',
  });

  const fetchAppointments = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/appointments');
    setAppointments(response.data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleAddAppointment = async () => {
    try {
      await axios.post('http://localhost:5000/api/v1/appointments/book', newAppointment);
      toast.success('Appointment added successfully!');
      setNewAppointment({
        name: '',
        email: '',
        date: '',
        timeSlot: '',
        message: '',
      });
      fetchAppointments();
    } catch (error) {
      toast.error('Failed to add appointment.');
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/v1/appointments/${id}`);
      toast.success('Appointment deleted successfully!');
      fetchAppointments();
    } catch (error) {
      toast.error('Failed to delete appointment.');
    }
  };

  return (
    <Layout>
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="mb-6 text-2xl font-semibold">Appointment</h2>

      {/* Add New Appointment */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-xl font-medium">Add New Appointment</h3>
        <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Name"
            value={newAppointment.name}
            onChange={(e) => setNewAppointment({ ...newAppointment, name: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={newAppointment.email}
            onChange={(e) => setNewAppointment({ ...newAppointment, email: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={newAppointment.date}
            onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Time Slot"
            value={newAppointment.timeSlot}
            onChange={(e) => setNewAppointment({ ...newAppointment, timeSlot: e.target.value })}
            className="p-2 border rounded"
          />
        </div>
        <textarea
          placeholder="Message"
          value={newAppointment.message}
          onChange={(e) => setNewAppointment({ ...newAppointment, message: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleAddAppointment}
          className="px-4 py-2 text-white bg-blue-500 rounded shadow hover:bg-blue-600"
        >
          Add Appointment
        </button>
      </div>

      {/* Appointments List */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="mb-4 text-xl font-medium">Appointments List</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Sr.No</th>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">Email</th>
              <th className="px-4 py-2 text-left border-b">Date</th>
              <th className="px-4 py-2 text-left border-b">Time Slot</th>
              <th className="px-4 py-2 text-left border-b">Message</th>
              <th className="px-4 py-2 text-left border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={appointment._id}>
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{appointment.name}</td>
                <td className="px-4 py-2 border-b">{appointment.email}</td>
                <td className="px-4 py-2 border-b">{new Date(appointment.date).toLocaleDateString()}</td>
                <td className="px-4 py-2 border-b">{appointment.timeSlot}</td>
                <td className="px-4 py-2 border-b">{appointment.message}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleDeleteAppointment(appointment._id)}
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default Appointment;
