using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp8
{
    class Worker
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        private string tehudatZehut;

        public string TehudatZehut
        {
            get { return tehudatZehut; }
            set { tehudatZehut = value; }
        }
        private int salary;

        public int Salary
        {
            get { return salary; }
            set { salary = value; }
        }
        public virtual void Print()
        {
            Console.WriteLine(name + ". Salary: " + salary + " NIS.");
        }
        public Worker(string name, string tehudatZehut, int salary)
        {
            Name = name;
            TehudatZehut = tehudatZehut;
            Salary = salary;
        }


    }
}
