using System;
using System.Collections.Generic;

namespace ConsoleApp4
{
    class Program
    {
        static void Main(string[] args)
        {
            Triangle t1 = new Triangle();
            t1.Width = 12;
            t1.Heigth = 14;
            Circle c1 = new Circle();
            c1.Width = 10;
            Rectangle r1 = new Rectangle();
            r1.Width = 6;
            r1.Heigth = 8;
            Square s1 = new Square();
            s1.Heigth = 5;
            s1.Width = 5;
            Console.WriteLine(t1);
            Console.WriteLine(c1);
            Console.WriteLine(r1);
            Console.WriteLine(s1);
            List<Shape> tri = new List<Shape>();
            tri.Add(c1);
            tri.Add(r1);
        }
    }
}
