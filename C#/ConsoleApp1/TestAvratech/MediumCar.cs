using System;
using System.Collections.Generic;
using System.Text;

namespace TestAvratech
{
    class MediumCar : Car
    {
        bool SuitableForChildren;
        public MediumCar(string color, string iD, string model, bool suitableForChildren) : base(color, iD, model, 20)
        {
            SuitableForChildren = suitableForChildren;
        }

        public override bool CanDrive(Driver d)
        {
            return base.CanDrive(d) && d.LicenseType >= 2;
        }
    }
}
