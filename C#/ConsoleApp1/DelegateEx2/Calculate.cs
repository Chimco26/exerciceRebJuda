using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateEx2
{
    public delegate double CalculateDelegate(double d1, double d2);
    class Calculate
    {
        public static double Add(double d1, double d2)
        {
            double total = d1 + d2;
            Console.WriteLine($"{d1} + {d2} = {total}");
            return total;
        }
        public static double Sub(double d1, double d2)
        {
            double total = d1 - d2;
            Console.WriteLine($"{d1} - {d2} = {total}");
            return total;
        }
        public static double Mult(double d1, double d2)
        {
            double total = d1 * d2;
            Console.WriteLine($"{d1} * {d2} = {total}");
            return total;
        }
        public static double Div(double d1, double d2)
        {
            double total = d1 / d2;
            Console.WriteLine($"{d1} / {d2} = {total}");
            return total;
        }
    }
}
