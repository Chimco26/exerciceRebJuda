using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp6
{
    class DrAppointment: Appointment
    {
        private string drName;

        public string DrName
        {
            get { return drName; }
            set { drName = value; }
        }

        public DrAppointment(string drName, string name, Date date, int hour, string location): base(name, date, hour, location)
        {
            DrName = drName;

        }
        public DrAppointment()
        {

        }
    }
}
