using System;
using System.Collections.Generic;

namespace ConsoleApp5
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Vehicle> listVehicles = new List<Vehicle>(5);
            Car c1 = CreateCar();
            listVehicles.Add(c1);
            Plane p1 = CreatePlane();
            listVehicles.Add(p1);
            Boat b1 = CreateBoat();
            listVehicles.Add(b1);
            /*foreach(Vehicle vehicle in listVehicles)
            {
                Console.WriteLine(vehicle);
            }*/
            Car c2 = (Car)listVehicles[0];
            Console.WriteLine(listVehicles[0]);
        }
        public static Car CreateCar()
        {
            Console.WriteLine("Hello, please choose a color for your car.");
            string color = Console.ReadLine();
            Console.WriteLine("Max passengers?");
            int maxPassengers = int.Parse(Console.ReadLine());
            Console.WriteLine("Where is the car?");
            string point = Console.ReadLine();
            Console.WriteLine("How much wheels has the car?");
            int wheel = int.Parse(Console.ReadLine());
            return new Car(color, maxPassengers, point, wheel);
        }
        public static Plane CreatePlane()
        {
            Console.WriteLine("Hello, please choose a color for your plane.");
            string color = Console.ReadLine();
            Console.WriteLine("Max passengers?");
            int maxPassengers = int.Parse(Console.ReadLine());
            Console.WriteLine("Where is the plane?");
            string point = Console.ReadLine();
            Console.WriteLine("What is the max heigth the plane?");
            double maxHeigth = double.Parse(Console.ReadLine());
            return new Plane(color, maxPassengers, point, maxHeigth);
        }
        public static Boat CreateBoat()
        {
            Console.WriteLine("Hello, please choose a color for your boat.");
            string color = Console.ReadLine();
            Console.WriteLine("Max passengers?");
            int maxPassengers = int.Parse(Console.ReadLine());
            Console.WriteLine("Where is the boat?");
            string point = Console.ReadLine();
            Console.WriteLine("Is the boat can dive? (1 for yes and 0 for not)");
            int wheel = int.Parse(Console.ReadLine());
            bool canDive = wheel == 1;
            return new Boat(color, maxPassengers, point, canDive);
        }
    }
}
