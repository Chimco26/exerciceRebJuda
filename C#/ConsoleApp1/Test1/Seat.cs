using System;
using System.Collections.Generic;
using System.Text;

namespace Test1
{
    class Seat
    {
        bool occupied = false;
        Client cl = null;
        int NumChair;

        public Seat(int numChair)
        {
            NumChair = numChair;
        }

        public bool IsFree()
        {
            return !occupied;
        }
        public void ToBook(Client c)
        {
            cl = c;
            occupied = true;
        }

    }
}
