using System;

namespace ConsoleApp13
{
    class Program
    {
        enum Days
        {
            Sunday = 1,
            Monday,
            Tuestay,
            Wednesday,
            Thursday,
            Friday,
            Saturday
        }
        static int x = 0;

        static void Main(string[] args)
        {
            string day = Console.ReadLine();
            Days myDay;
            Enum.TryParse(day, out myDay);
            Console.WriteLine((int)myDay);
        }
    }
}
