using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    class Plane: Vehicle
    {
        private double maxHeigth;

        public double MaxHeigth
        {
            get { return maxHeigth; }
            set { maxHeigth = value; }
        }
        public Plane(string color, int maxPassengers, string point, double maxHeigth)
        {
            Color = color;
            MaxPassengers = maxPassengers;
            Point = point;
            MaxHeigth = maxHeigth;
        }
        public override string ToString()
        {
            return "Plane: " + base.ToString() + "Max heigth: " + maxHeigth + ".";
        }
    }
}
