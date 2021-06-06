using System;
using System.Collections.Generic;
using System.Text;

namespace TestAvratech
{
    class BigCar : Car
    {
        int MaxStandingPassenger;
        int MaxWeight;
        public BigCar(string color, string iD, string model, int maxStandingPassenger, int maxWeight) : base(color, iD, model, 50)
        {
            MaxStandingPassenger = maxStandingPassenger;
            MaxWeight = maxWeight;
        }
        public override bool CanDrive(Driver d)
        {
            return base.CanDrive(d) && d.MaxWeight >= MaxWeight && d.LicenseType == 3;
        }
    }
}
