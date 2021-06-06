using System;
using System.Collections.Generic;
using System.Threading;

namespace ConsoleApp14
{
    class Program
    {
        static string str = "";
        static void Main(string[] args)
        {
            Car[] myCars = { 
                new Car("ONE"),
                new Car("TWO"),
                new Car("THREE"),
                new Car("FOR"),
                new Car("FIVE"),
                new Car("SIX"),
                new Car("SEVEN"),
                new Car("EIGHT"),
                new Car("NINE"),
                new Car("TEN")
            };
            
            while (true)
            {
                Console.WriteLine("Please choose a car to wash.");
                int index = int.Parse(Console.ReadLine());
                myCars[index - 1].NeedWashing = true;
                Thread.Sleep(300);
            }
        }
        public static void WaitingForWash(Car car)
        {
            Console.WriteLine("Car {0} waiting for washing.", car.Name);
            lock (str)
            {
                Console.WriteLine("Car {0} is washing.", car.Name);
                Thread.Sleep(5 * 1000);
                Console.WriteLine("Car {0} finished!", car.Name);
            }

        }
    }
}
