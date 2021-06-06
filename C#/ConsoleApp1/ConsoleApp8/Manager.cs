using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp8
{
    class Manager: Worker
    {
        List<Worker> ListWorkers = new List<Worker>();
        public override void Print()
        {
            Console.WriteLine(Name + " have " + ListWorkers.Count + " workers.");
            foreach(Worker w in ListWorkers)
            {
                w.Print();
            }
        }
        public Manager(string name, string tehudatZehut, int salary, List<Worker> listWorkers): base(name, tehudatZehut, salary)
        {
            ListWorkers = listWorkers;
        }
    }
}
