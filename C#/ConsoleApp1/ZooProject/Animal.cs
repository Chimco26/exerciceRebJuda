using System;
using System.Collections.Generic;
using System.Text;

namespace ZooProject
{
    abstract class Animal
    {
        protected double Weight;
        protected double Size;
        protected string Name;
        protected int Age;
        protected bool isHungry, isSleeping, isSick;
        public bool IsHungry { get { return isHungry; } set { isHungry = value; } }
        public bool IsSleeping { get { return isSleeping; } set { isSleeping = value; } }
        public bool IsSick { get { return isSick; } set { isSick = value; } }

        protected Animal(double weight, double size, string name, int age)
        {
            Weight = weight;
            Size = size;
            Name = name;
            Age = age;
        }

        public void Eat()
        {

        }
        public void Sound()
        {

        }
        public void Care()
        {

        }
        public void Sleep()
        {

        }
        public void Awake()
        {

        }
        public virtual void Print()
        {
            Console.WriteLine(ToString());
        }
        public override string ToString()
        {
            return $"{Name}: {Weight} kg, {Size} cm, he is {Age}.";
        }
    }
}
