using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp4
{
    class Shape
    {
        private string Name;
        private int heigth;

        public int Heigth
        {
            get { return heigth; }
            set { heigth = value; }
        }
        private int width;

        public int Width
        {
            get { return width; }
            set { width = value; }
        }
        public virtual double Perimeter()
        {
            return 0;
        }
        public virtual double Aera()
        {
            return 0;
        }

        public Shape(string name)
        {
            Name = name;
        }
        public override string ToString()
        {
            return Name + " Perimeter: " + Perimeter() + ". Aera: " + Aera() + ".";
        }


    }
}
