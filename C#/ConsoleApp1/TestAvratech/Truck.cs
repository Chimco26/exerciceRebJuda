using System;
using System.Collections.Generic;
using System.Text;

namespace TestAvratech
{
    class Truck : IDriver
    {
        readonly private string model;
        public string Model { get; }
        private int maxWeight;
        public int MaxWeight { get; set; }

        public Truck(string model, int maxWeight)
        {
            Model = model;
            MaxWeight = maxWeight;
        }
        public void Print()
        {
            Console.WriteLine("TRUCK " + Model + ", max weight: " + MaxWeight);
        }

        public bool CanDrive(Driver d)
        {
            return d.MaxWeight >= MaxWeight && d.LicenseType == 3;
        }
    }
}
