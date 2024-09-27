import React, { Component } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User, Phone, Calendar, Clock, FileText, Smile } from 'lucide-react';

class Main extends Component {
  state = {
    fullname: "",
    cellphone: "",
    date: "",
    time: "",
    description: "",
    availableSlots: [],  // Store time slots with availability status
    selectedTimeSlot: "",
    errorMessage: "",
    successMessage: ""
  };

  componentDidMount() {
    // Fetch available time slots initially when the component loads
    this.checkTimeSlotAvailability();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDateChange = (e) => {
    this.setState({ date: e.target.value }, () => {
      this.checkTimeSlotAvailability();
    });
  };

  checkTimeSlotAvailability = () => {
    const { date } = this.state;
    if (date) {
      axios
        .get(`http://localhost:5000/api/v1/appointments/check-availability?date=${date}`)
        .then((response) => {
          this.setState({ availableSlots: response.data.slots });
        })
        .catch((error) => {
          console.error("Error fetching time slots", error);
        });
    }
  };

  selectTimeSlot = (slot) => {
    this.setState({ selectedTimeSlot: slot });
  };

  makeAppointment = (e) => {
    e.preventDefault();

    const { fullname, cellphone, date, selectedTimeSlot, description } = this.state;
    const newAppointment = {
      fullname,
      cellphone,
      date,
      time: selectedTimeSlot,  // Use the selected time slot
      description
    };

    axios
      .post("http://localhost:5000/api/v1/appointments", newAppointment)
      .then((result) => {
        this.setState({
          successMessage: result.data.msg,
          fullname: "",
          cellphone: "",
          date: "",
          time: "",
          description: "",
          selectedTimeSlot: ""
        });
        toast.success(result.data.msg);
        // Notify the admin about the new appointment
        this.notifyAdmin();
      })
      .catch((error) => {
        this.setState({ errorMessage: error.response.data.msg });
        toast.error(error.response.data.msg);
      });
  };

  notifyAdmin = () => {
    // Simulate notifying admin about the new appointment
    axios.post('http://localhost:5000/api/v1/admin/notify', { message: 'New appointment booked!' });
  };

  resetForm = () => {
    this.setState({
      fullname: "",
      cellphone: "",
      date: "",
      time: "",
      description: "",
      selectedTimeSlot: ""
    });
  };

  render() {
    const { fullname, cellphone, date, description, availableSlots, selectedTimeSlot } = this.state;
    
    return (
      <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-green-500">
          <h2 className="flex items-center text-xl font-bold text-white">
            <Smile className="mr-2" size={20} />
            Book an Appointment
          </h2>
        </div>
        <div className="p-4">
          <form className="space-y-4">
            {/* Full Name and Cellphone inputs */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <User className="absolute top-2.5 left-2 text-gray-400" size={16} />
                <input
                  name="fullname"
                  type="text"
                  value={fullname}
                  onChange={this.handleChange}
                  className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Cellphone</label>
              <div className="relative">
                <Phone className="absolute top-2.5 left-2 text-gray-400" size={16} />
                <input
                  name="cellphone"
                  type="tel"
                  value={cellphone}
                  onChange={this.handleChange}
                  className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Date and Time Slot Selection */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Date</label>
              <div className="relative">
                <Calendar className="absolute top-2.5 left-2 text-gray-400" size={16} />
                <input
                  name="date"
                  type="date"
                  value={date}
                  onChange={this.handleDateChange}
                  className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-md focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Select a Time Slot</label>
              <div className="grid grid-cols-3 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot.time}
                    className={`p-2 rounded-md text-sm ${
                      slot.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    } ${selectedTimeSlot === slot.time ? 'ring-2 ring-blue-500' : ''}`}
                    onClick={() => this.selectTimeSlot(slot.time)}
                    disabled={!slot.available}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                value={description}
                onChange={this.handleChange}
                className="w-full p-2 text-sm border border-gray-300 rounded-md"
                rows={3}
                required
              ></textarea>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-md"
                onClick={this.resetForm}
              >
                Reset
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded-md"
                onClick={this.makeAppointment}
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
