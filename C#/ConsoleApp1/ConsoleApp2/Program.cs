using System;
using System.Collections.Generic;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            Person p1 = new Person("chimeon", "cohen", new Date(16, 05, 1990));
            Console.WriteLine(p1.IsOld(new Person("gjd", "dfsdf", new Date(15, 05, 1990))));
            Person p2 = new Person(p1);
            Console.WriteLine(p1);
            Console.WriteLine(p2);
            p2.setFirst("chira");
            Console.WriteLine(p2);

            bool repeat = true;

            List<Person> listPers = new List<Person>();

            for(int i = 0; i < 5; i++)
            {
                Console.WriteLine(i+1);
                string firstName = ConsoleString("First name");
                                
                string lastName = ConsoleString("Last name");

                if (i < 2)
                {
                    string fullDate = ConsoleString("Please enter your Date of Birth in this format: dd/mm/yyyy");
                    Person pers = new Person(firstName, lastName, fullDate);
                    listPers.Add(pers);
                }
                else if (i < 4)
                {
                    int day = ConsoleInt("Day");

                    int month = ConsoleInt("Month");

                    int year = ConsoleInt("Year");

                    Person pers = new Person(firstName, lastName, new Date(day, month, year));
                    listPers.Add(pers);
                }
                else
                {
                    int day = ConsoleInt("Day");

                    int month = ConsoleInt("Month");

                    int year = ConsoleInt("Year");

                    Person pers = new Person(firstName, lastName, day, month, year);
                    listPers.Add(pers);
                }
            }
            while (repeat)
            {
                Console.WriteLine("Please choose one person between 0 and 5");
                int choice = int.Parse(Console.ReadLine());
                Console.WriteLine(listPers[choice]);
            }
        }
        public static int ConsoleInt(string a)
        {
            Console.WriteLine(a);
            return int.Parse(Console.ReadLine());
            
        }
        public static string ConsoleString(string a)
        {
            Console.WriteLine(a);
            return Console.ReadLine();
        }
    }
}
