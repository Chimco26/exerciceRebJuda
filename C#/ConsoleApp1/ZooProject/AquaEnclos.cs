using System;
using System.Collections.Generic;
using System.Text;

namespace ZooProject
{
    class AquaEnclos : Enclosure<ISweaming>
    {
        public AquaEnclos(List<ISweaming> myEnclosureList, string name, double aera, string cleanliness, int maximumAnimals) 
            : base(myEnclosureList, name, aera, cleanliness, maximumAnimals)
        {
        }
    }
}
