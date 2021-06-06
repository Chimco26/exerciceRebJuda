using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp15
{
    abstract class Course
    {
        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        private int duration;

        public int Duration
        {
            get { return duration; }
            set { duration = value; }
        }
        private double courseFee;

        public double CourseFee
        {
            get { return courseFee; }
            set { courseFee = value; }
        }
        public abstract double totalFee();
        public virtual void Print()
        {
            Console.WriteLine(name + " " + duration + " " + courseFee);
        }

        protected Course(string name, int duration, double courseFee)
        {
            Name = name;
            Duration = duration;
            CourseFee = courseFee;
        }
    }
    class PartTimeCourse : Course
    {
        string timing;

        public PartTimeCourse(string name, int duration, double courseFee, string timing) : base(name, duration, courseFee)
        {
            this.timing = timing;
        }

        public override double totalFee()
        {
            return CourseFee * 0.9;
        }
        public override void Print()
        {
            base.Print();
            Console.WriteLine(timing + " " + totalFee());
        }
    }
}
