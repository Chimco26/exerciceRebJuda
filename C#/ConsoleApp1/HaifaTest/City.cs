using System;
using System.Collections.Generic;
using System.Text;

namespace HaifaTest
{
    class City
    {
        public static void Add(Student stu)
        {
                University.numOfStudents.Add(stu);
        }
        public static long TuitionSum()
        {
            long sum = 0;
            foreach (var item in University.numOfStudents)
            {
                sum += item.TuitionFee;
            }
            return sum;
        }
        public static void PrintDetails()
        {
            foreach (var item in University.numOfStudents)
            {
                Console.WriteLine(item);
            }
        }
    }
}
