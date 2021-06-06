using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    class Vehicle
    {
        private string color;

        public string Color
        {
            get { return color; }
            set { color = value; }
        }
        private int maxPassengers;

        public int MaxPassengers
        {
            get { return maxPassengers; }
            set { maxPassengers = value; }
        }
        private string point;

        public string Point
        {
            get { return point; }
            set { point = value; }
        }
        public override string ToString()
        {
            return "Color: " + color + ". Max passengers: " + maxPassengers + ". Point: " + point + ". ";
        }

    }
}
