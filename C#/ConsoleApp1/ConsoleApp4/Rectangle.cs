using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp4
{
    class Rectangle : Shape
    {
        public override double Aera()
        {
            return Width * Heigth;
        }
        public override double Perimeter()
        {
            return (Width + Heigth) * 2;
        }

        public Rectangle() : base("Rectangle")
        {

        }
    }
}
