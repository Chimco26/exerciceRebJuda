using System;
using System.Collections.Generic;
using System.Text;

namespace TestAvratech
{
    abstract class Car: IDriver
    {
        protected string Color;
        protected readonly string id;
        public string ID { get; }
        protected readonly string model;
        public string Model { get; }
        protected int NumberOfPlaces;

        public Car(string color, string iD, string model, int numberOfPlaces)
        {
            Color = color;
            ID = iD;
            Model = model;
            NumberOfPlaces = numberOfPlaces;
        }
        public void Print()
        {
            Console.WriteLine(Model + ", number: " + ID);
        }

        public virtual bool CanDrive(Driver d)
        {
            return true;
        }
    }
}
