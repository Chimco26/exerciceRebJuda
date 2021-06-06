using System;
using System.Collections.Generic;
using System.Text;

namespace Test1
{
    class Wagon
    {
        public int wagonNumber;
        int numOfSeats;
        List<Seat> listChair = new List<Seat>();

        public Wagon(int wagonNumber, int numOfSeats)
        {
            this.wagonNumber = wagonNumber;
            this.numOfSeats = numOfSeats;
            for (int i = 0; i < numOfSeats; i++)
            {
                listChair.Add(new Seat(i));
            }
        }

        public Wagon(int wagonNumber) : this(wagonNumber, 10)
        {

        }

        public bool Complet()
        {
            foreach (var item in listChair)
            {
                if (item.IsFree())
                    return false;
            }
            return true;
        }
        public bool BookOneSeat(Client c)
        {
            foreach (var item in listChair)
            {
                if (item.IsFree())
                {
                    item.ToBook(c);
                    return true;
                }
            }
            return false;
        }
    }
}
