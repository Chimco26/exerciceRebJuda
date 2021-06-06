using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp15
{
    class Student
    {
        int Rollno;
        string Name;
        string Course;
        double FeePaid = 0;
        private static double tax = 1.123;

        public static double Tax
        {
            get { return tax; }
            set { tax = value; }
        }

        public double DueAmont 
        { 
            get { return TotalFee - FeePaid; }
        }
        public double TotalFee 
        {
            get { return Course == "C#" ? 2000 * Tax : 3000 * Tax; }
        }

        public Student(int rollno, string name, string course)
        {
            Rollno = rollno;
            Name = name;
            Course = course;
        }
        public void Payment(int amount)
        {
            FeePaid += amount;
        }
        public void Print()
        {
            Console.WriteLine($"{Rollno}, {Name}, {Course}, {FeePaid}");

        }
    }
}
