using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp9
{
    class Person
    {
        public int Age { get; set; }

        public static Person Build(int age)
        {
            if (age > 1 && age < 120)
            {
                return new Person(age);
            }
            else
            {
                throw new AgeException(age);
            }
        }

        Person(int age)
        {
            Age = age;
        }
    }

    class AgeException: Exception
    {
        public AgeException(int age): base(age + " is an age error!!!")
        {

        }
    }
}
