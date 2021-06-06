using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp5
{
    class Boat: Vehicle
    {
        private bool canDive;

        public bool CanDive
        {
            get { return canDive; }
            set { canDive = value; }
        }
        public Boat(string color, int maxPassengers, string point, bool canDive)
        {
            Color = color;
            MaxPassengers = maxPassengers;
            Point = point;
            CanDive = canDive;
        }
        public override string ToString()
        {
            return "Boat: " + base.ToString() + "Can dive: " + canDive + ".";
        }
    }
}
