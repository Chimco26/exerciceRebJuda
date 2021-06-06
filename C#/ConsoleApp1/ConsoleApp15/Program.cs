using System;

namespace ConsoleApp15
{
    class Program
    {
        static void Main(string[] args)
        {
            Student s1 = new Student(1, "chimi", "C#");
            s1.Payment(500);
            s1.Print();
            Console.WriteLine(s1.DueAmont);

        }
    }
}
