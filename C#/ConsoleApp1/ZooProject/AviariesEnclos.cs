using System;
using System.Collections.Generic;
using System.Text;

namespace ZooProject
{
    class AviariesEnclos : Enclosure<IFlying>
    {
        double height;
        public AviariesEnclos(List<IFlying> myEnclosureList, string name, double aera, string cleanliness, int maximumAnimals) 
            : base(myEnclosureList, name, aera, cleanliness, maximumAnimals)
        {
        }
    }
}
