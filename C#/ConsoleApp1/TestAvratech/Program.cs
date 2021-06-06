using System;
using System.Collections.Generic;

namespace TestAvratech
{
    class Program
    {
        static void Main(string[] args)
        {
            List<IDriver> listCar = new List<IDriver>
            {
                new Truck("Isuzu",5000),
                new BigCar("red", "123456", "Mercedes", 20, 4000),
                new MediumCar("yellow", "987654", "Peugeot", true),
                new PrivateCar("green", "147258", "Renauld"),
                new Truck("Man", 6000),
                new BigCar("red", "123456", "Citroen", 20, 3000),
                new MediumCar("yellow", "987654", "Kia", true),
                new PrivateCar("green", "147258", "Skoda"),
                new Truck("Volvo", 7000),
                new BigCar("red", "123456", "Honda", 20, 4500),
                new MediumCar("yellow", "987654", "Toyota", true),
                new PrivateCar("green", "147258", "Subaru"),
            };

            List<Driver> listDriver = new List<Driver>();

            while (listDriver.Count < 5)
            {
                Console.WriteLine("Please enter the driver name:");
                string name = Console.ReadLine();
                Console.WriteLine("Please enter the license type, 1 for small car, 2 for medium car, and 3 for big car.");
                int type = int.Parse(Console.ReadLine());
                Console.WriteLine("Please enter the maximum weight the drive is allowed to drive.");
                int maxWeight = int.Parse(Console.ReadLine());

                try
                {
                    listDriver.Add(new Driver(name, type, maxWeight));
                }
                catch (LicenseException e)
                {
                    Console.WriteLine(e.Message + " Try again.");
                }
            }
            foreach (var driver in listDriver)
            {
                Console.WriteLine(driver.Name + " can drive is the follows cars:");
                foreach (var car in listCar)
                {
                    if (car.CanDrive(driver))
                    {
                        if(car is Car)
                        {
                            Car c = (Car)car;
                            c.Print();
                        }
                        else
                        {
                            Truck t = (Truck)car;
                            t.Print();
                        }
                    }
                        
                }
            }
        }
    }
}
