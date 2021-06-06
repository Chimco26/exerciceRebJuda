using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp4
{
    class Circle : Shape
    {
        public override double Aera()
        {
            return (Width * Width) * 3.14;
        }
        public override double Perimeter()
        {
            return (Width * 2) * 3.14;
        }

        public Circle() : base("Circle")
        {

        }
    }
}
