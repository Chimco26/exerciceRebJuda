using System;
using System.Collections.Generic;

namespace ConsoleApp10
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Person> personList = new List<Person>()
            {
                new Person("chimi", 30),
                new Person("nati", 23),
                new Person("coco", 19),
                new Person("chochi", 20),
                new Person("loli", 21),
                new Person("bouba", 22)
            };

            printPerson(personList);
        }
        public static void printPerson(List<Person> list)
        {
            Console.WriteLine("please choose a number between 0 and 5.");
            int num = int.Parse(Console.ReadLine());
            try
            {
                Console.WriteLine(list[num]);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
                printPerson(list);
            }
        }
    }
}
