using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    class Car: Vehicle
    {
        private int numberOfWheel;

        public int NumberOfWheel
        {
            get { return numberOfWheel; }
            set { numberOfWheel = value; }
        }
        public Car(string color, int maxPassengers, string point, int numberOfWheel)
        {
            Color = color;
            MaxPassengers = maxPassengers;
            Point = point;
            NumberOfWheel = numberOfWheel;
        }
        public override string ToString()
        {
            return "Car: " + base.ToString() + "Number of wheels: " + numberOfWheel + ".";
        }
    }
}
