using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp4
{
    class Triangle: Shape
    {
        public override double Aera() {
           return (Width* Heigth)/2;  
        }
        public override double Perimeter()
        {
            return Width * 3;
        }

        public Triangle(): base("Triangle")
        {

        }
    }
}
