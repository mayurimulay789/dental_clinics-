import React, { Component } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Edit, Trash } from 'lucide-react';
import Layout from "./Layout";

class Appointment extends Component {
  state = {
    appointments: [],
    availableSlots: [],
    currentAppointment: {
      id: null,
      fullname: "",
      cellphone: "",
      date: "",
      time: "",
      description: ""
    },
    isModalOpen: false,
    isSlotModalOpen: false,
    loading: false,
    loadingSlots: false,
  };

  componentDidMount() {
    this.fetchAppointments();
  }

  fetchAppointments = async () => {
    this.setState({ loading: true });
    try {
      const response = await axios.get("http://localhost:5000/api/v1/appointments");
      this.setState({ appointments: response.data });
    } catch (error) {
      toast.error("Error fetching appointments");
    } finally {
      this.setState({ loading: false });
    }
  };

  handleChange = (e) => {
    this.setState({
      currentAppointment: {
        ...this.state.currentAppointment,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleAddOrUpdate = async (e) => {
    e.preventDefault();
    const { currentAppointment } = this.state;
    const apiCall = currentAppointment.id
      ? axios.put(`http://localhost:5000/api/v1/appointments/${currentAppointment.id}`, currentAppointment)
      : axios.post("http://localhost:5000/api/v1/appointments", currentAppointment);

    try {
      const result = await apiCall;
      toast.success(result.data.msg);
      this.setState({ isModalOpen: false, currentAppointment: this.resetAppointment() });
      this.fetchAppointments();
      if (!currentAppointment.id) {
        this.notifyAdmin();
      }
    } catch (error) {
      toast.error(error.response.data.msg || "An error occurred");
    }
  };

  notifyAdmin = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/appointments/notify");
      toast.success("Admin notified of new appointment");
    } catch {
      toast.error("Failed to notify admin");
    }
  };

  handleEdit = (appointment) => {
    this.setState({ currentAppointment: appointment, isModalOpen: true });
  };

  handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        const result = await axios.delete(`http://localhost:5000/api/v1/appointments/${id}`);
        toast.success(result.data.msg);
        this.fetchAppointments();
      } catch {
        toast.error("Failed to delete appointment");
      }
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      currentAppointment: this.resetAppointment(),
    }));
  };

  resetAppointment = () => ({
    id: null,
    fullname: "",
    cellphone: "",
    date: "",
    time: "",
    description: ""
  });

  handleCheckAvailability = async () => {
    const { date } = this.state.currentAppointment;
    if (!date) {
      toast.error("Please select a date to check availability");
      return;
    }

    this.setState({ loadingSlots: true });
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/appointments/check-availability?date=${date}`);
      this.setState({ availableSlots: response.data });
      toast.success("Time slots fetched successfully!");
    } catch {
      toast.error("Error fetching available time slots");
    } finally {
      this.setState({ loadingSlots: false });
    }
  };

  render() {
    const { appointments, currentAppointment, isModalOpen, loading, availableSlots, loadingSlots } = this.state;

    return (
      <Layout>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-bold">Manage Appointments</h2>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
            onClick={this.toggleModal}
          >
            Add Appointment
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="w-full max-w-lg p-6 bg-white rounded-lg">
                <h3 className="mb-4 text-lg font-semibold">{currentAppointment.id ? "Update Appointment" : "Add Appointment"}</h3>
                <form className="space-y-4" onSubmit={this.handleAddOrUpdate}>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      name="fullname"
                      type="text"
                      value={currentAppointment.fullname}
                      onChange={this.handleChange}
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Cellphone</label>
                    <input
                      name="cellphone"
                      type="tel"
                      value={currentAppointment.cellphone}
                      onChange={this.handleChange}
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
                      <input
                        name="date"
                        type="date"
                        value={currentAppointment.date}
                        onChange={this.handleChange}
                        className="w-full p-2 text-sm border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">Time</label>
                      <input
                        name="time"
                        type="time"
                        value={currentAppointment.time}
                        onChange={this.handleChange}
                        className="w-full p-2 text-sm border border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
                    <textarea
                      name="description"
                      value={currentAppointment.description}
                      onChange={this.handleChange}
                      className="w-full p-2 text-sm border border-gray-300 rounded-md"
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-300 rounded-md"
                      onClick={this.toggleModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-white bg-indigo-500 rounded-md"
                      onClick={this.handleCheckAvailability}
                    >
                      Check Availability
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-blue-500 rounded-md"
                    >
                      {currentAppointment.id ? "Update" : "Add"}
                    </button>
                  </div>
                </form>

                {loadingSlots && <p>Loading slots...</p>}
                {!loadingSlots && availableSlots.length > 0 && (
                  <div>
                    <h4 className="mt-4 text-lg font-bold">Available Time Slots:</h4>
                    <ul>
                      {availableSlots.map((slot, index) => (
                        <li key={index} className="text-green-600">{slot}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {loading ? (
            <div className="mt-4">Loading...</div>
          ) : (
            <table className="w-full mt-4 border-collapse">
              <thead>
                <tr>
                  <th className="p-2 border">Sr No</th>
                  <th className="p-2 border">Full Name</th>
                  <th className="p-2 border">Cellphone</th>
                  <th className="p-2 border">Date</th>
                  <th className="p-2 border">Time</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment, index) => (
                  <tr key={appointment._id} className="hover:bg-gray-100">
                    <td className="p-2 border">{index + 1}</td>
                    <td className="p-2 border">{appointment.fullname}</td>
                    <td className="p-2 border">{appointment.cellphone}</td>
                    <td className="p-2 border">{appointment.date}</td>
                    <td className="p-2 border">{appointment.time}</td>
                    <td className="p-2 border">{appointment.description}</td>
                    <td className="flex p-2 space-x-2 border">
                      <button onClick={() => this.handleEdit(appointment)}>
                        <Edit className="text-blue-500 cursor-pointer" />
                      </button>
                      <button onClick={() => this.handleDelete(appointment._id)}>
                        <Trash className="text-red-500 cursor-pointer" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Layout>
    );
  }
}

export default Appointment;
