using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp6
{
    class Appointment
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        private Date myDate;

        public Date MyDate
        {
            get { return myDate; }
            set { myDate = value; }
        }

        private int startingHour;

        public int StartingHour
        {
            get { return startingHour; }
            set { startingHour = value; }
        }
        private int endingHour;

        public int EndingHour
        {
            get { return startingHour + 1; }
            set { endingHour = value; }
        }
        private string location;

        public string Location
        {
            get { return location; }
            set { location = value; }
        }
        public Appointment()
        {

        }
        public Appointment(string name, Date date, int startingHour, string location)
        {
            Name = name;
            MyDate = date;
            StartingHour = startingHour;
            Location = location;
        }
        public Appointment(Appointment app): this(app.Name, app.MyDate, app.StartingHour, app.Location)
        {

        }
        public override string ToString()
        {
            return name + ", " + myDate + ", " + startingHour + ", " + location + ".";
        }
    }
}
