using System;
using System.Collections.Generic;
using System.Text;

namespace ZooProject
{
    abstract class MarinesAnimals : Animal, ILaying, ISweaming
    {
        public MarinesAnimals(double weight, double size, string name, int age) 
            : base(weight, size, name, age)
        {
        }

        public void Sweam()
        {

        }
        public void LayAnEgg()
        {

        }
    }

    class Whale : MarinesAnimals
    {
        public Whale(double weight, double size, int age)
            : base(weight, size, "whale", age)
        {
        }
    }

    class Shark : MarinesAnimals
    {
        public Shark(double weight, double size, int age)
            : base(weight, size, "shark", age)
        {
        }
    }

    class Fish : MarinesAnimals
    {
        public Fish(double weight, double size, int age)
            : base(weight, size, "fish", age)
        {
        }
    }
}
