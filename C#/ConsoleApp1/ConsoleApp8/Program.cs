using System;
using System.Collections.Generic;

namespace ConsoleApp8
{
    class Program
    {
        static void Main(string[] args)
        {
            Worker w1 = new Worker("chimco", "336265004", 55000);
            Worker w2 = new Worker("chimichou", "33629632504", 75000);
            Worker w3 = new Worker("chimiola", "33624565465004", 55000);
            Worker w4 = new Worker("chimimakore", "3265656004", 15000);
            Worker w5 = new Worker("chimilola", "3362604", 55000);
            Worker w6 = new Worker("chimiboubli", "33626500", 5000);

            Manager m1 = new Manager("rogi", "5484545", 512000, new List<Worker> { w1, w2, w3 });
            Manager m2 = new Manager("rodi", "5484545", 523000, new List<Worker> { w2, w3, w4 });
            Manager m3 = new Manager("roni", "5484545", 534000, new List<Worker> { w3, w4, w5 });
            Manager m4 = new Manager("ropi", "5484545", 556000, new List<Worker> { w4, w5, w6 });

            CEO c1 = new CEO("boss", "5874552236", 100000, new List<Manager> { m1, m2, m3, m4 });
            c1.Print();
            c1.PrintManager();
        }
    }
}
