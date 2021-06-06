using System;

namespace ConsoleApp12
{
    enum Month
    {
        January = 1,
        February,
        March,
        April,
        May,
        Juny,
        July,
        August,
        September,
        October,
        November,
        December
    }
    class Program
    {
        static void Main(string[] args)
        {
            int x = int.Parse(Console.ReadLine());
            Month m = (Month)x;
            Console.WriteLine(m);
        }
    }

}
