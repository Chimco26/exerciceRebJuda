using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp8
{
    class CEO: Worker
    {
        List<Manager> ListManagers = new List<Manager>();
        public override void Print()
        {
            Console.WriteLine(Name + " have " + ListManagers.Count + " managers.");
            foreach (Manager m in ListManagers)
            {
                m.Print();
                Console.WriteLine();
            }
        }
        public void PrintManager()
        {
            base.Print();
        }
        public CEO(string name, string tehudatZehut, int salary, List<Manager> listManagers): base(name, tehudatZehut, salary)
        {
            ListManagers = listManagers;
        }
    }
}
