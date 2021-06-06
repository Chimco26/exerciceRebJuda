using System;
using System.Collections.Generic;
using System.Text;

namespace Test1
{
    class Train
    {
        List<Wagon> listWagons = new List<Wagon>();

        public Train(List<Wagon> listWagons)
        {
            this.listWagons = listWagons;
        }

        public Wagon LookForWagon(int numWagon)
        {
            foreach (var item in listWagons)
            {
                if (item.wagonNumber == numWagon)
                    return item;
            }
            return null;
        }
        public bool ToBook(Client c, int numWagon)
        {
            return listWagons[numWagon].BookOneSeat(c);
        }
        public bool ToBook(Client c)
        {
            for (int i = 0; i < listWagons.Count; i++)
            {
                if (!listWagons[i].Complet())
                    listWagons[i].BookOneSeat(c);
            }
            return false;
        }
        public Train Joint(Train t)
        {
            foreach (var item in listWagons)
            {
                t.listWagons.Add(item);
            }
            return t;
        }
    }
}
