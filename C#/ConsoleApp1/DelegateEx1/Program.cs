using System;
using System.Collections.Generic;

namespace DelegateEx1
{
    class Program
    {
        public delegate bool DelegateFunction(Person p);
        static void Main(string[] args)
        {
            List<Person> myListPerson = new List<Person> {
                new Person("coco", 15),
                new Person("lolo", 50),
                new Person("bobo", 70),
                new Person("fofo", 40),
                new Person("roro", 90),
                new Person("popo", 03),
                new Person("toto", 12),
                new Person("zozo", 19),
                new Person("momo", 46),
                new Person("jojo", 11),
            };

            PrintByFilter(myListPerson, IsChild);
            Console.WriteLine();
            PrintByFilter(myListPerson, IsAdult);
            Console.WriteLine();
            PrintByFilter(myListPerson, IsOld);

        }

        static bool IsChild(Person p)
        {
            if (p.Age < 18)
                return true;
            else return false;
        }
        static bool IsAdult(Person p)
        {
            if (p.Age > 17)
                return true;
            else return false;
        }
        static bool IsOld(Person p)
        {
            if (p.Age > 60)
                return true;
            else return false;
        }

        static void PrintByFilter(List<Person> listPerson, DelegateFunction deleg)
        {
            foreach (var person in listPerson)
            {
                if (deleg(person))
                {
                    Console.WriteLine(person);
                }
            }
        }
    }
}
